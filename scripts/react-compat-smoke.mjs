// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import {
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const PACKAGE_DIRS = [
  "gui-icons",
  "micro-gui-icons",
  "react-gui-icons",
  "react-micro-gui-icons",
];
const REACT_VERSIONS = (process.env.REACT_COMPAT_VERSIONS ?? "17 18 19")
  .split(/\s+/)
  .filter(Boolean);
const NPM_REGISTRY = "https://registry.npmjs.org/";
const NPM_INSTALL_TIMEOUT_MS = 300_000;

const tempRoot = mkdtempSync(path.join(os.tmpdir(), "react-icon-compat-"));
const packDir = path.join(tempRoot, "packs");
mkdirSync(packDir);

const ESM_SMOKE_TEST = `
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import React from "react";

const require = createRequire(import.meta.url);
const { renderToStaticMarkup } = require("react-dom/server");

import {
  NvidiaGuiIcon,
  NvidiaGuiIconSprite,
  getNvidiaGuiIconSpriteSymbols,
} from "@nvidia/react-gui-icons";
import { Gpu } from "@nvidia/react-gui-icons/icons/Gpu";
import {
  NvidiaMicroGuiIcon,
  NvidiaMicroGuiIconSprite,
  getNvidiaMicroGuiIconSpriteSymbols,
} from "@nvidia/react-micro-gui-icons";
import { Add } from "@nvidia/react-micro-gui-icons/icons/Add";

function assertPackageSmoke({
  GenericIcon,
  Icon,
  Sprite,
  getSpriteSymbols,
  iconName,
}) {
  const symbols = getSpriteSymbols([
    iconName,
    { iconName, variant: "fill" },
  ]);
  assert.equal(symbols.length, 2);
  assert.ok(
    symbols[0].symbolId.endsWith(\`-line-\${iconName}\`),
    \`\${iconName} string helper should default to line variant\`,
  );
  assert.ok(
    symbols[1].symbolId.endsWith(\`-fill-\${iconName}\`),
    \`\${iconName} object helper should select fill variant\`,
  );

  const html = renderToStaticMarkup(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Sprite, { symbols }),
      React.createElement(Icon, { variant: "fill" }),
      React.createElement(GenericIcon, { iconName }),
    ),
  );

  for (const symbol of symbols) {
    assert.match(html, new RegExp(\`<symbol id="\${symbol.symbolId}"\`));
    assert.match(html, new RegExp(\`<use href="#\${symbol.symbolId}"\`));
  }
  assert.match(html, new RegExp(\`data-icon-name="\${iconName}"\`));
}

assertPackageSmoke({
  GenericIcon: NvidiaGuiIcon,
  Icon: Gpu,
  Sprite: NvidiaGuiIconSprite,
  getSpriteSymbols: getNvidiaGuiIconSpriteSymbols,
  iconName: "gpu",
});

assertPackageSmoke({
  GenericIcon: NvidiaMicroGuiIcon,
  Icon: Add,
  Sprite: NvidiaMicroGuiIconSprite,
  getSpriteSymbols: getNvidiaMicroGuiIconSpriteSymbols,
  iconName: "add",
});
`;

const CJS_SMOKE_TEST = `
const assert = require("node:assert/strict");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const {
  NvidiaGuiIcon,
  NvidiaGuiIconSprite,
  getNvidiaGuiIconSpriteSymbols,
} = require("@nvidia/react-gui-icons");
const { Gpu } = require("@nvidia/react-gui-icons/icons/Gpu");
const {
  NvidiaMicroGuiIcon,
  NvidiaMicroGuiIconSprite,
  getNvidiaMicroGuiIconSpriteSymbols,
} = require("@nvidia/react-micro-gui-icons");
const { Add } = require("@nvidia/react-micro-gui-icons/icons/Add");

function assertPackageSmoke({
  GenericIcon,
  Icon,
  Sprite,
  getSpriteSymbols,
  iconName,
}) {
  const symbols = getSpriteSymbols([
    iconName,
    { iconName, variant: "fill" },
  ]);
  assert.equal(symbols.length, 2);
  assert.ok(
    symbols[0].symbolId.endsWith('-line-' + iconName),
    iconName + ' string helper should default to line variant',
  );
  assert.ok(
    symbols[1].symbolId.endsWith('-fill-' + iconName),
    iconName + ' object helper should select fill variant',
  );

  const html = renderToStaticMarkup(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Sprite, { symbols }),
      React.createElement(Icon, { variant: "fill" }),
      React.createElement(GenericIcon, { iconName }),
    ),
  );

  for (const symbol of symbols) {
    assert.match(html, new RegExp('<symbol id="' + symbol.symbolId + '"'));
    assert.match(html, new RegExp('<use href="#' + symbol.symbolId + '"'));
  }
  assert.match(html, new RegExp('data-icon-name="' + iconName + '"'));
}

assertPackageSmoke({
  GenericIcon: NvidiaGuiIcon,
  Icon: Gpu,
  Sprite: NvidiaGuiIconSprite,
  getSpriteSymbols: getNvidiaGuiIconSpriteSymbols,
  iconName: "gpu",
});

assertPackageSmoke({
  GenericIcon: NvidiaMicroGuiIcon,
  Icon: Add,
  Sprite: NvidiaMicroGuiIconSprite,
  getSpriteSymbols: getNvidiaMicroGuiIconSpriteSymbols,
  iconName: "add",
});
`;

// Everything above renders through react-dom/server, which by design never
// runs effects. That leaves the package's actual rendering model untested:
// useSpriteSymbol, the useIsomorphicLayoutEffect selection (a module-load-time
// decision, hence the JSDOM globals before the first require), and the
// document-level dedupe. This mounts for real, on each supported React line.
const DOM_SMOKE_TEST = `
const assert = require("node:assert/strict");
const { JSDOM } = require("jsdom");

// Must precede any package require: the runtime picks useLayoutEffect vs
// useEffect once, at module load, from \`typeof document\`.
//
// pretendToBeVisual gives the window a requestAnimationFrame. React 17's
// scheduler probes for one and warns loudly without it.
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  pretendToBeVisual: true,
});
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(
  dom.window,
);
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(
  dom.window,
);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

const React = require("react");
const ReactDOM = require("react-dom");

// act moved onto the react package in 19; 17 and 18 expose it on
// react-dom/test-utils, which 19 removed it from.
const act =
  typeof React.act === "function"
    ? React.act
    : require("react-dom/test-utils").act;

// 18/19 mount through createRoot; 17 has no react-dom/client at all.
let mount;
try {
  const { createRoot } = require("react-dom/client");
  mount = (el, container) => {
    const root = createRoot(container);
    act(() => {
      root.render(el);
    });
  };
} catch {
  mount = (el, container) => {
    act(() => {
      ReactDOM.render(el, container);
    });
  };
}

function container() {
  const el = document.createElement("div");
  document.body.appendChild(el);
  return el;
}

const symbolCount = (id) =>
  document.querySelectorAll('symbol[id="' + id + '"]').length;

const SUITES = [
  {
    pkg: "@nvidia/react-gui-icons",
    generic: "NvidiaGuiIcon",
    icon: "Gpu",
    iconName: "gpu",
    prefix: "nvidia-react-gui-icons-v1",
  },
  {
    pkg: "@nvidia/react-micro-gui-icons",
    generic: "NvidiaMicroGuiIcon",
    icon: "Add",
    iconName: "add",
    prefix: "nvidia-react-micro-gui-icons-v1",
  },
];

for (const s of SUITES) {
  const label = s.pkg;
  const Icon = require(s.pkg + "/icons/" + s.icon)[s.icon];
  const Generic = require(s.pkg)[s.generic];
  const lineId = s.prefix + "-line-" + s.iconName;
  const fillId = s.prefix + "-fill-" + s.iconName;

  // The effect actually ran and put a <symbol> in the document. This is the
  // whole rendering model, and renderToStaticMarkup never reaches it.
  const first = container();
  mount(React.createElement(Icon), first);
  assert.equal(symbolCount(lineId), 1, label + ": mount should inject one <symbol>");

  // The rendered <use> resolves against that symbol rather than dangling.
  const use = first.querySelector("use");
  assert.ok(use, label + ": icon should render a <use>");
  assert.equal(use.getAttribute("href"), "#" + lineId, label + ": <use> href");

  // A second mount reuses the symbol instead of appending a duplicate id.
  mount(React.createElement(Icon), container());
  assert.equal(symbolCount(lineId), 1, label + ": second mount must reuse the <symbol>");

  // StrictMode double-invokes effects on 18/19. The module-level spriteRoot
  // cache and the getElementById dedupe both have to survive that.
  mount(
    React.createElement(React.StrictMode, null, React.createElement(Icon)),
    container(),
  );
  assert.equal(
    symbolCount(lineId),
    1,
    label + ": StrictMode double-mount must not duplicate the <symbol>",
  );

  // A different variant is a genuinely different symbol, not a reused one.
  mount(React.createElement(Icon, { variant: "fill" }), container());
  assert.equal(symbolCount(fillId), 1, label + ": fill variant needs its own <symbol>");

  // The generic name-driven component resolves through inlineMap instead of
  // per-icon DATA: a separate code path to the same runtime.
  const genericHost = container();
  mount(React.createElement(Generic, { iconName: s.iconName }), genericHost);
  assert.equal(
    genericHost.querySelector("use").getAttribute("href"),
    "#" + lineId,
    label + ": generic component <use> href",
  );
  assert.equal(symbolCount(lineId), 1, label + ": generic component must reuse the <symbol>");
}

// Exit explicitly. React 17's scheduler leaves an open MessageChannel port,
// which keeps Node's event loop alive forever; closing the JSDOM window is
// not enough. Every assertion above is synchronous, so anything that failed
// has already thrown and exited non-zero before reaching this line.
dom.window.close();
process.exit(0);
`;

try {
  for (const packageDir of PACKAGE_DIRS) {
    execFileSync("npm", ["pack", "--silent", "--pack-destination", packDir], {
      cwd: path.join(REPO_ROOT, "packages", packageDir),
      stdio: "inherit",
    });
  }

  const packageTarballs = readdirSync(packDir)
    .filter((file) => file.endsWith(".tgz"))
    .map((file) => path.join(packDir, file));
  assert.equal(
    packageTarballs.length,
    PACKAGE_DIRS.length,
    "each package should produce one tarball",
  );

  for (const reactVersion of REACT_VERSIONS) {
    const projectDir = path.join(tempRoot, `react-${reactVersion}`);
    mkdirSync(projectDir);
    writeFileSync(
      path.join(projectDir, "package.json"),
      JSON.stringify({ private: true, type: "module" }, null, 2),
    );

    execFileSync(
      "npm",
      [
        "install",
        "--ignore-scripts",
        "--no-audit",
        "--no-fund",
        `--registry=${NPM_REGISTRY}`,
        `react@${reactVersion}`,
        `react-dom@${reactVersion}`,
        // Pinned to the same range the React packages devDepend on, so the
        // smoke project cannot silently float onto a different jsdom major
        // than the one the package tests actually run against.
        "jsdom@^28.1.0",
        ...packageTarballs,
      ],
      { cwd: projectDir, stdio: "inherit", timeout: NPM_INSTALL_TIMEOUT_MS },
    );

    writeFileSync(path.join(projectDir, "smoke.mjs"), ESM_SMOKE_TEST);
    execFileSync(process.execPath, ["smoke.mjs"], {
      cwd: projectDir,
      stdio: "inherit",
    });

    writeFileSync(path.join(projectDir, "smoke.cjs"), CJS_SMOKE_TEST);
    execFileSync(process.execPath, ["smoke.cjs"], {
      cwd: projectDir,
      stdio: "inherit",
    });
    console.log(`PASS React ${reactVersion} ESM/CJS compatibility smoke`);

    writeFileSync(path.join(projectDir, "smoke-dom.cjs"), DOM_SMOKE_TEST);
    execFileSync(process.execPath, ["smoke-dom.cjs"], {
      cwd: projectDir,
      stdio: "inherit",
    });
    console.log(`PASS React ${reactVersion} DOM mount + sprite injection`);
  }
} finally {
  rmSync(tempRoot, { force: true, recursive: true });
}
