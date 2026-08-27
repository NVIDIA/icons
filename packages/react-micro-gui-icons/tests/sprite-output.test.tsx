// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";

import { JSDOM } from "jsdom";
import {
  createElement,
  type ElementType,
  Fragment,
  type ReactElement,
  type SVGProps,
} from "react";
import { inlineMap } from "../src/generated/inlineMap.js";
import * as Icons from "../src/icons/index.js";
import {
  getNvidiaMicroGuiIconSpriteSymbol,
  getNvidiaMicroGuiIconSpriteSymbols,
  type IconSpriteSymbol,
  NvidiaMicroGuiIcon,
  NvidiaMicroGuiIconSprite,
  type NvidiaMicroGuiIconSpriteSymbolSource,
} from "../src/index.js";
import { ensureSpriteSymbol } from "../src/runtime/useSpriteSymbol.js";
import type { IconName, Variant } from "../src/types.js";

const VARIANTS = ["line", "fill"] as const satisfies readonly Variant[];
const SPRITE_ROOT_ID = "nvidia-react-micro-gui-icons-v1-sprite";

type IconComponentProps = SVGProps<SVGSVGElement> & {
  readonly variant?: Variant;
  readonly size?: string;
};

type IconFixture = {
  readonly iconName: IconName;
  readonly componentName: string;
  readonly Component: ElementType<IconComponentProps>;
};

const ICONS = [
  { iconName: "add", componentName: "Add", Component: Icons.Add },
  {
    iconName: "arrow-down",
    componentName: "ArrowDown",
    Component: Icons.ArrowDown,
  },
  {
    iconName: "arrow-down-left",
    componentName: "ArrowDownLeft",
    Component: Icons.ArrowDownLeft,
  },
  {
    iconName: "arrow-down-right",
    componentName: "ArrowDownRight",
    Component: Icons.ArrowDownRight,
  },
  {
    iconName: "arrow-left",
    componentName: "ArrowLeft",
    Component: Icons.ArrowLeft,
  },
  {
    iconName: "arrow-right",
    componentName: "ArrowRight",
    Component: Icons.ArrowRight,
  },
  { iconName: "arrow-up", componentName: "ArrowUp", Component: Icons.ArrowUp },
  {
    iconName: "arrow-up-left",
    componentName: "ArrowUpLeft",
    Component: Icons.ArrowUpLeft,
  },
  {
    iconName: "arrow-up-right",
    componentName: "ArrowUpRight",
    Component: Icons.ArrowUpRight,
  },
  { iconName: "check", componentName: "Check", Component: Icons.Check },
  {
    iconName: "chevron-down",
    componentName: "ChevronDown",
    Component: Icons.ChevronDown,
  },
  {
    iconName: "chevron-left",
    componentName: "ChevronLeft",
    Component: Icons.ChevronLeft,
  },
  {
    iconName: "chevron-right",
    componentName: "ChevronRight",
    Component: Icons.ChevronRight,
  },
  {
    iconName: "chevron-up",
    componentName: "ChevronUp",
    Component: Icons.ChevronUp,
  },
  { iconName: "close", componentName: "Close", Component: Icons.Close },
  {
    iconName: "info-circle",
    componentName: "InfoCircle",
    Component: Icons.InfoCircle,
  },
  {
    iconName: "magnifying-glass",
    componentName: "MagnifyingGlass",
    Component: Icons.MagnifyingGlass,
  },
  {
    iconName: "open-external",
    componentName: "OpenExternal",
    Component: Icons.OpenExternal,
  },
  {
    iconName: "shape-circle",
    componentName: "ShapeCircle",
    Component: Icons.ShapeCircle,
  },
  {
    iconName: "shape-square",
    componentName: "ShapeSquare",
    Component: Icons.ShapeSquare,
  },
  {
    iconName: "shape-triangle",
    componentName: "ShapeTriangle",
    Component: Icons.ShapeTriangle,
  },
  { iconName: "star", componentName: "Star", Component: Icons.Star },
  {
    iconName: "subtract",
    componentName: "Subtract",
    Component: Icons.Subtract,
  },
  { iconName: "sync", componentName: "Sync", Component: Icons.Sync },
] as const satisfies readonly IconFixture[];
const SAMPLE_ICON = ICONS[0];
const SAMPLE_ICON_NAME = SAMPLE_ICON.iconName;
const SAMPLE_VARIANT = "line" as const;
const SAMPLE_SYMBOL = getIconData(SAMPLE_VARIANT, SAMPLE_ICON_NAME);
const SAMPLE_FILL_SYMBOL = getIconData("fill", SAMPLE_ICON_NAME);

const nodeRequire = createRequire(import.meta.url);
const { renderToStaticMarkup } = nodeRequire("react-dom/server") as {
  renderToStaticMarkup(element: ReactElement): string;
};

function escapeRegExp(value: string): string {
  return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}

function countMatches(content: string, pattern: RegExp): number {
  return [...content.matchAll(pattern)].length;
}

function extractPaths(svgContent: string): string[] {
  return [...svgContent.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((value): value is string => value !== undefined);
}

function extractViewBox(svgContent: string): string {
  const viewBox = svgContent.match(/<svg\b[^>]*\bviewBox="([^"]+)"/)?.[1];
  assert.ok(viewBox, "source SVG should have a viewBox");
  return viewBox;
}

function readSourceSvg(variant: Variant, iconName: IconName): string {
  return readFileSync(
    new URL(
      `../../micro-gui-icons/assets/${variant}/${iconName}.svg`,
      import.meta.url,
    ),
    "utf8",
  );
}

function getIconData(variant: Variant, iconName: IconName): IconSpriteSymbol {
  const symbol = inlineMap[variant]?.[iconName];
  assert.ok(symbol, `${variant}/${iconName} should exist in inlineMap`);
  return symbol;
}

function getAllSymbols(): IconSpriteSymbol[] {
  const symbols: IconSpriteSymbol[] = [];
  for (const variant of VARIANTS) {
    for (const { iconName } of ICONS) {
      symbols.push(getIconData(variant, iconName));
    }
  }
  return symbols;
}

function assertRendersUseReference(
  html: string,
  symbol: IconSpriteSymbol,
  iconName: IconName,
  label: string,
): void {
  const symbolIdPattern = escapeRegExp(symbol.symbolId);
  assert.match(
    html,
    new RegExp(`\\bdata-icon-name="${escapeRegExp(iconName)}"`),
    `${label} should expose the icon name`,
  );
  assert.match(
    html,
    new RegExp(`\\bviewBox="${escapeRegExp(symbol.viewBox)}"`),
    `${label} should use the selected variant viewBox`,
  );
  assert.equal(
    countMatches(html, new RegExp(`<use href="#${symbolIdPattern}"`, "g")),
    1,
    `${label} should render one use reference to the selected symbol`,
  );
  assert.equal(
    countMatches(html, /<path\b/g),
    0,
    `${label} should not inline path payloads`,
  );
  assert.match(
    html,
    /\baria-hidden="true"/,
    `${label} should default to aria-hidden (decorative) unless overridden`,
  );
  assert.match(
    html,
    /\bfocusable="false"/,
    `${label} should default focusable to false unless overridden`,
  );
}

function assertUniqueSymbolIds(symbols: readonly IconSpriteSymbol[]): void {
  const ids = symbols.map((symbol) => symbol.symbolId);
  assert.equal(new Set(ids).size, ids.length, "symbol IDs should be unique");
}

function withDocument(callback: () => void): void {
  const dom = new JSDOM("<!doctype html><html><body></body></html>");
  const mutableGlobal = globalThis as unknown as {
    document?: Document;
    window?: unknown;
  };
  const previousDocument = mutableGlobal.document;
  const previousWindow = mutableGlobal.window;

  Object.defineProperty(mutableGlobal, "document", {
    configurable: true,
    value: dom.window.document,
  });
  Object.defineProperty(mutableGlobal, "window", {
    configurable: true,
    value: dom.window,
  });

  try {
    callback();
  } finally {
    if (previousDocument === undefined) {
      Reflect.deleteProperty(mutableGlobal, "document");
    } else {
      Object.defineProperty(mutableGlobal, "document", {
        configurable: true,
        value: previousDocument,
      });
    }
    if (previousWindow === undefined) {
      Reflect.deleteProperty(mutableGlobal, "window");
    } else {
      Object.defineProperty(mutableGlobal, "window", {
        configurable: true,
        value: previousWindow,
      });
    }
    dom.window.close();
  }
}

function countDomSymbolsById(id: string): number {
  return [...document.querySelectorAll("symbol")].filter(
    (symbol) => symbol.id === id,
  ).length;
}

test("NvidiaMicroGuiIcon sprite output deduplicates repeated icon instances", () => {
  const html = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      createElement(NvidiaMicroGuiIconSprite, { symbols: [SAMPLE_SYMBOL] }),
      createElement(SAMPLE_ICON.Component, { variant: SAMPLE_VARIANT }),
      createElement(SAMPLE_ICON.Component, { variant: SAMPLE_VARIANT }),
      createElement(NvidiaMicroGuiIcon, {
        iconName: SAMPLE_ICON_NAME,
        variant: SAMPLE_VARIANT,
      }),
    ),
  );

  const symbolIdPattern = escapeRegExp(SAMPLE_SYMBOL.symbolId);
  assert.equal(
    countMatches(html, new RegExp(`<symbol id="${symbolIdPattern}"`, "g")),
    1,
    "the sprite should contain one symbol for the repeated icon",
  );
  assert.equal(
    countMatches(html, new RegExp(`<use href="#${symbolIdPattern}"`, "g")),
    3,
    "each icon instance should render a lightweight use reference",
  );
});

test("NvidiaMicroGuiIcon inline map matches every source SVG", () => {
  assert.equal(ICONS.length, Object.keys(inlineMap.line).length);
  assert.equal(ICONS.length, Object.keys(inlineMap.fill).length);

  for (const variant of VARIANTS) {
    for (const { iconName } of ICONS) {
      const symbol = getIconData(variant, iconName);
      const source = readSourceSvg(variant, iconName);
      assert.equal(
        symbol.viewBox,
        extractViewBox(source),
        `${variant}/${iconName} should preserve source viewBox`,
      );
      assert.deepEqual(
        [...symbol.paths],
        extractPaths(source),
        `${variant}/${iconName} should preserve source path data`,
      );
    }
  }
});

test("NvidiaMicroGuiIcon per-icon and generic components render sprite references", () => {
  for (const variant of VARIANTS) {
    for (const { iconName, componentName, Component } of ICONS) {
      const symbol = getIconData(variant, iconName);
      assertRendersUseReference(
        renderToStaticMarkup(
          createElement(Component, {
            className: "test-icon",
            size: "24px",
            variant,
          }),
        ),
        symbol,
        iconName,
        `${componentName} ${variant}`,
      );
      assertRendersUseReference(
        renderToStaticMarkup(
          createElement(NvidiaMicroGuiIcon, {
            className: "test-icon",
            iconName,
            size: "24px",
            variant,
          }),
        ),
        symbol,
        iconName,
        `NvidiaMicroGuiIcon ${iconName} ${variant}`,
      );
    }
  }
});

test("NvidiaMicroGuiIcon sprite renders selected symbol payloads", () => {
  const symbols = getAllSymbols();
  assertUniqueSymbolIds(symbols);

  const rendered = renderToStaticMarkup(
    createElement(NvidiaMicroGuiIconSprite, { symbols }),
  );

  assert.equal(countMatches(rendered, /<symbol\b/g), symbols.length);
  assert.deepEqual(
    extractPaths(rendered),
    symbols.flatMap((symbol) => [...symbol.paths]),
  );
  for (const symbol of symbols) {
    assert.equal(
      countMatches(
        rendered,
        new RegExp(`<symbol id="${escapeRegExp(symbol.symbolId)}"`, "g"),
      ),
      1,
      `${symbol.symbolId} should be rendered once`,
    );
  }
});

test("NvidiaMicroGuiIcon sprite symbol helpers select and dedupe every payload", () => {
  assert.equal(
    getNvidiaMicroGuiIconSpriteSymbol(SAMPLE_ICON_NAME, SAMPLE_VARIANT),
    SAMPLE_SYMBOL,
  );
  assert.equal(
    getNvidiaMicroGuiIconSpriteSymbol(SAMPLE_ICON_NAME, "fill"),
    SAMPLE_FILL_SYMBOL,
  );

  const requestedSymbols: NvidiaMicroGuiIconSpriteSymbolSource[] = [];
  const expectedSymbols: IconSpriteSymbol[] = [];
  for (const { iconName } of ICONS) {
    requestedSymbols.push(
      iconName,
      { iconName, variant: "line" },
      { iconName, variant: "fill" },
      { iconName, variant: "fill" },
    );
    expectedSymbols.push(
      getIconData("line", iconName),
      getIconData("fill", iconName),
    );
  }

  const symbols = getNvidiaMicroGuiIconSpriteSymbols(requestedSymbols);
  assertUniqueSymbolIds(symbols);
  assert.deepEqual(symbols, expectedSymbols);
});

test("NvidiaMicroGuiIcon sprite runtime injects document symbols once", () => {
  withDocument(() => {
    ensureSpriteSymbol(undefined);
    assert.equal(document.getElementById(SPRITE_ROOT_ID), null);

    ensureSpriteSymbol(SAMPLE_SYMBOL);
    const createdRoot = document.getElementById(SPRITE_ROOT_ID);
    assert.ok(createdRoot, "runtime should create the hidden sprite root");
    assert.equal(createdRoot.tagName.toLowerCase(), "svg");
    assert.equal(createdRoot.getAttribute("aria-hidden"), "true");
    assert.equal(createdRoot.getAttribute("focusable"), "false");
    assert.equal(countDomSymbolsById(SAMPLE_SYMBOL.symbolId), 1);

    ensureSpriteSymbol(SAMPLE_SYMBOL);
    assert.equal(countDomSymbolsById(SAMPLE_SYMBOL.symbolId), 1);

    const createdSymbol = document.getElementById(SAMPLE_SYMBOL.symbolId);
    assert.ok(createdSymbol, "runtime should create the requested symbol");
    assert.equal(createdSymbol.getAttribute("viewBox"), SAMPLE_SYMBOL.viewBox);
    assert.deepEqual(
      [...createdSymbol.querySelectorAll("path")].map((pathElement) =>
        pathElement.getAttribute("d"),
      ),
      [...SAMPLE_SYMBOL.paths],
    );

    createdRoot.remove();
    const existingRoot = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    existingRoot.id = SPRITE_ROOT_ID;
    document.body.appendChild(existingRoot);

    ensureSpriteSymbol(SAMPLE_FILL_SYMBOL);
    assert.equal(document.getElementById(SPRITE_ROOT_ID), existingRoot);
    assert.equal(countDomSymbolsById(SAMPLE_FILL_SYMBOL.symbolId), 1);
  });
});

test("NvidiaMicroGuiIcon sprite symbol paths match source SVG paths", () => {
  const rendered = renderToStaticMarkup(
    createElement(NvidiaMicroGuiIconSprite, { symbols: [SAMPLE_SYMBOL] }),
  );
  const source = readSourceSvg(SAMPLE_VARIANT, SAMPLE_ICON_NAME);

  assert.deepEqual(extractPaths(rendered), extractPaths(source));
});
