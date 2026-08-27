// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";

import { computeAccessibleName } from "dom-accessibility-api";
import { JSDOM } from "jsdom";
import {
  createElement,
  type ElementType,
  Fragment,
  type ReactElement,
} from "react";

import { inlineMap } from "../src/generated/inlineMap.js";
import * as Icons from "../src/icons/index.js";
import { NvidiaGuiIcon, NvidiaGuiIconSprite } from "../src/index.js";
import { ensureSpriteSymbol } from "../src/runtime/useSpriteSymbol.js";
import type { IconName, Variant } from "../src/types.js";

const nodeRequire = createRequire(import.meta.url);
const { renderToStaticMarkup } = nodeRequire("react-dom/server") as {
  renderToStaticMarkup(element: ReactElement): string;
};

type Props = Record<string, unknown>;

const dom = new JSDOM("<!doctype html><html><body></body></html>");

function renderAll(element: ReactElement): { svgs: Element[]; html: string } {
  const html = renderToStaticMarkup(element);
  dom.window.document.body.innerHTML = html;
  return { svgs: [...dom.window.document.querySelectorAll("svg")], html };
}

function renderOne(element: ReactElement): { svg: Element; html: string } {
  const { svgs, html } = renderAll(element);
  assert.equal(svgs.length, 1, "expected exactly one rendered <svg>");
  const svg = svgs[0];
  assert.ok(svg);
  return { svg, html };
}

/** The thing a user actually perceives, not the attributes that produce it. */
function accessibleName(svg: Element): string {
  return computeAccessibleName(svg);
}

const SAMPLE_ICON = "2b-left-click" as IconName;

/**
 * Both public entry points must behave identically: the tree-shakable
 * per-icon component and the generic name-driven one.
 */
const SUBJECTS: ReadonlyArray<{
  readonly label: string;
  readonly render: (props: Props) => ReactElement;
}> = [
  {
    label: "per-icon <Icon2BLeftClick>",
    render: (props: Props) =>
      createElement(Icons.Icon2BLeftClick as ElementType, props),
  },
  {
    label: "generic <NvidiaGuiIcon>",
    render: (props: Props) =>
      createElement(NvidiaGuiIcon as ElementType, {
        iconName: SAMPLE_ICON,
        ...props,
      }),
  },
];

for (const subject of SUBJECTS) {
  test(`${subject.label} is decorative by default`, () => {
    const { svg, html } = renderOne(subject.render({}));

    assert.equal(svg.getAttribute("aria-hidden"), "true");
    assert.equal(svg.getAttribute("focusable"), "false");
    assert.equal(svg.getAttribute("role"), null);
    assert.equal(svg.querySelector("title"), null);
    assert.doesNotMatch(html, /<title/);
    // The library cannot know whether this icon is redundant next to a visible
    // label, so it must not name it. Silence is the safe default.
    assert.equal(accessibleName(svg), "");
  });

  test(`${subject.label} stays decorative when given unrelated props`, () => {
    const { svg } = renderOne(
      subject.render({ className: "icon", size: "2em", variant: "fill" }),
    );

    assert.equal(svg.getAttribute("aria-hidden"), "true");
    assert.equal(accessibleName(svg), "");
  });

  test(`${subject.label} title prop flips every a11y attribute at once`, () => {
    const { svg } = renderOne(subject.render({ title: "Delete item" }));

    // One prop, three coordinated effects — there is no half-configured state.
    assert.equal(svg.getAttribute("role"), "img");
    assert.equal(svg.getAttribute("aria-hidden"), null);
    assert.equal(svg.querySelector("title")?.textContent, "Delete item");
    assert.equal(accessibleName(svg), "Delete item");
  });

  test(`${subject.label} renders <title> as the first child`, () => {
    const { svg } = renderOne(subject.render({ title: "Delete item" }));

    // Position is load-bearing: a <title> that is not the first child does not
    // name the <svg>, and a11y linters reject it. computeAccessibleName is
    // lenient about this, so it has to be asserted structurally.
    assert.equal(svg.firstElementChild?.tagName.toLowerCase(), "title");
  });

  test(`${subject.label} treats a blank title as decorative`, () => {
    // Whitespace-only counts as blank: a name computed at runtime can collapse
    // to "" or "   ", and neither should expose the icon to assistive tech with
    // an empty accessible name. <title></title> is also a lint violation in its
    // own right.
    for (const blank of ["", " ", "   ", "\n\t"]) {
      const { svg, html } = renderOne(subject.render({ title: blank }));

      assert.doesNotMatch(html, /<title/, JSON.stringify(blank));
      assert.equal(
        svg.getAttribute("aria-hidden"),
        "true",
        JSON.stringify(blank),
      );
      assert.equal(svg.getAttribute("role"), null, JSON.stringify(blank));
      assert.equal(accessibleName(svg), "", JSON.stringify(blank));
    }
  });

  test(`${subject.label} escapes markup in the title`, () => {
    const { svg, html } = renderOne(
      subject.render({ title: "Save & Close <now>" }),
    );

    assert.match(html, /&amp;/);
    assert.doesNotMatch(html, /<now>/);
    assert.equal(accessibleName(svg), "Save & Close <now>");
  });

  test(`${subject.label} supports the documented aria-label escape hatch`, () => {
    // The recipe in the README, which had no coverage before this suite.
    const { svg } = renderOne(
      subject.render({
        role: "img",
        "aria-label": "Open settings",
        "aria-hidden": undefined,
      }),
    );

    assert.equal(svg.getAttribute("aria-hidden"), null);
    assert.equal(svg.getAttribute("role"), "img");
    assert.equal(accessibleName(svg), "Open settings");
  });

  test(`${subject.label} lets an explicit aria-label win over title`, () => {
    const { svg } = renderOne(
      subject.render({ title: "Loses", "aria-label": "Wins" }),
    );

    // ARIA precedence: aria-label outranks the title element. Both appear in
    // the markup; only one becomes the name.
    assert.equal(svg.querySelector("title")?.textContent, "Loses");
    assert.equal(accessibleName(svg), "Wins");
  });

  test(`${subject.label} lets an explicit aria-hidden win over title`, () => {
    const { svg } = renderOne(
      subject.render({ title: "Delete item", "aria-hidden": "true" }),
    );

    // Caller props spread last and always win. aria-hidden removes the whole
    // subtree from the accessibility tree, so the title we rendered is inert.
    assert.equal(svg.getAttribute("aria-hidden"), "true");
    assert.equal(accessibleName(svg), "");
  });

  test(`${subject.label} removing aria-hidden alone leaves it unnamed`, () => {
    const { svg } = renderOne(subject.render({ "aria-hidden": undefined }));

    assert.equal(svg.getAttribute("aria-hidden"), null);
    // Visible to assistive tech but with nothing to announce — the state the
    // title prop exists to make unreachable by accident.
    assert.equal(accessibleName(svg), "");
  });

  test(`${subject.label} allows focusable to be overridden`, () => {
    const { svg } = renderOne(subject.render({ focusable: "true" }));
    assert.equal(svg.getAttribute("focusable"), "true");
  });

  test(`${subject.label} names each instance independently`, () => {
    const { svgs } = renderAll(
      createElement(
        Fragment,
        null,
        subject.render({ title: "First", key: "a" }),
        subject.render({ title: "Second", key: "b" }),
      ),
    );

    assert.equal(svgs.length, 2);
    assert.deepEqual(
      svgs.map((svg) => accessibleName(svg)),
      ["First", "Second"],
    );
    // No id-based wiring, so there is nothing to collide.
    assert.doesNotMatch(
      dom.window.document.body.innerHTML,
      /\bid="/,
      "instances should not emit ids that could collide",
    );
  });
}

test("NvidiaGuiIconSprite root stays hidden even if asked otherwise", () => {
  const { svgs } = renderAll(
    createElement(NvidiaGuiIconSprite as ElementType, {
      symbols: [],
      "aria-hidden": undefined,
    }),
  );
  const root = svgs[0];
  assert.ok(root);

  // Deliberately NOT overridable: the sprite root is a hidden store of
  // <symbol> definitions, not content. Its props are spread before the
  // hardcoded attributes, unlike the icon components.
  assert.equal(root.getAttribute("aria-hidden"), "true");
  assert.equal(accessibleName(root), "");
});

test("injected sprite symbols carry no <title>", () => {
  const symbol = inlineMap.line[SAMPLE_ICON];
  assert.ok(symbol);

  const local = new JSDOM("<!doctype html><html><body></body></html>");
  const globalRef = globalThis as unknown as {
    document?: unknown;
    window?: unknown;
  };
  const previousDocument = globalRef.document;
  const previousWindow = globalRef.window;
  Object.defineProperty(globalRef, "document", {
    configurable: true,
    value: local.window.document,
  });
  Object.defineProperty(globalRef, "window", {
    configurable: true,
    value: local.window,
  });

  try {
    ensureSpriteSymbol(symbol);
    const injected = local.window.document.getElementById(symbol.symbolId);
    assert.ok(injected, "runtime should inject the symbol");
    // Symbols are deduplicated and shared by every instance of an icon, so a
    // per-instance name could never live here. Names belong on the wrapper.
    assert.equal(injected.querySelector("title"), null);
  } finally {
    if (previousDocument === undefined) {
      Reflect.deleteProperty(globalRef, "document");
    } else {
      Object.defineProperty(globalRef, "document", {
        configurable: true,
        value: previousDocument,
      });
    }
    if (previousWindow === undefined) {
      Reflect.deleteProperty(globalRef, "window");
    } else {
      Object.defineProperty(globalRef, "window", {
        configurable: true,
        value: previousWindow,
      });
    }
  }
});

// ---------------------------------------------------------------------------
// Raw SVG assets
//
// These packages' tests are the only place that reads the sibling raw asset
// package, so the asset-side guarantees are asserted here.
// ---------------------------------------------------------------------------

const VARIANTS: readonly Variant[] = ["line", "fill"];

function readAsset(variant: Variant, iconName: IconName): string {
  return readFileSync(
    new URL(
      `../../gui-icons/assets/${variant}/${iconName}.svg`,
      import.meta.url,
    ),
    "utf8",
  );
}

test("every raw asset carries the CC-BY-4.0 license comment", () => {
  for (const variant of VARIANTS) {
    for (const iconName of Object.keys(inlineMap[variant]) as IconName[]) {
      const svg = readAsset(variant, iconName);
      assert.ok(
        svg.startsWith("<!--!"),
        `${variant}/${iconName} should open with the preserve-marked comment`,
      );
      assert.match(svg, /SPDX-License-Identifier: CC-BY-4\.0/);
      // The dual expression is reserved for the top-level LICENSE.
      assert.doesNotMatch(svg, /CC-BY-4\.0 AND Apache-2\.0/);
    }
  }
});

test("every raw asset has exactly one non-empty first-child <title>", () => {
  for (const variant of VARIANTS) {
    for (const iconName of Object.keys(inlineMap[variant]) as IconName[]) {
      const svg = readAsset(variant, iconName);
      const label = `${variant}/${iconName}`;

      assert.equal(
        [...svg.matchAll(/<title>/g)].length,
        1,
        `${label} should have exactly one <title>`,
      );
      const match = svg.match(/<svg\b[^>]*><title>([^<]+)<\/title>/);
      assert.ok(match, `${label} <title> must be the first child of <svg>`);
      assert.ok(
        match[1] && match[1].trim().length > 0,
        `${label} title is empty`,
      );
    }
  }
});

test("stamping left the sprite parsers' inputs untouched", () => {
  // The generator injects the comment and title by string surgery, and both
  // this file's siblings and the generator itself read these assets by
  // raw-text regex rather than parsing XML. This is the coupling guard.
  for (const variant of VARIANTS) {
    for (const iconName of Object.keys(inlineMap[variant]) as IconName[]) {
      const svg = readAsset(variant, iconName);
      const symbol = inlineMap[variant][iconName];
      const label = `${variant}/${iconName}`;

      assert.equal(
        svg.match(/<svg\b[^>]*\bviewBox="([^"]+)"/)?.[1],
        symbol.viewBox,
        label,
      );
      assert.deepEqual(
        [...svg.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)].map((m) => m[1]),
        [...symbol.paths],
        label,
      );
    }
  }
});
