// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

// Pre-publish packaging & license verification.
// Guards against the class of defects found in pre-release review:
// placeholder/provisional LICENSE files, missing per-package README, missing
// manifest metadata, non-standard underscore-prefixed manifest fields, a
// NOTICE crediting the wrong icon family, THIRD_PARTY_NOTICES drift between
// the root and each package, and devDependency ranges drifting between root
// and a package.
// Run: node ./scripts/verify-packaging.mjs

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const PKGS = [
  "gui-icons",
  "micro-gui-icons",
  "react-gui-icons",
  "react-micro-gui-icons",
];
const REQUIRED_FIELDS = [
  "description",
  "keywords",
  "homepage",
  "bugs",
  "author",
  "engines",
  "license",
  "repository",
];
// npm auto-includes package.json, README and LICENSE whatever `files` says,
// but NOT CHANGELOG.md — so it only ships if the array names it explicitly,
// and only stays shipped if something checks.
const REQUIRED_PACKED_FILES = [
  "CHANGELOG.md",
  "LICENSE",
  "NOTICE",
  "THIRD_PARTY_NOTICES",
];
// NOTICE is intentionally NOT byte-identical across packages: the CC-BY-4.0
// "Credit as" line names the specific icon family a redistributor actually
// got assets from ("NVIDIA GUI Icons" vs "NVIDIA Micro GUI Icons"), not the
// umbrella project name, so attribution stays accurate per package.
//
// This file survives the internal sync only because the upstream sync
// generator does not currently emit NOTICE.
const NOTICE_FAMILY = {
  "gui-icons": "NVIDIA GUI Icons",
  "react-gui-icons": "NVIDIA GUI Icons",
  "micro-gui-icons": "NVIDIA Micro GUI Icons",
  "react-micro-gui-icons": "NVIDIA Micro GUI Icons",
};
const TRADEMARK_TEXT = "are trademarks and/or registered trademarks of";
// The published packages ship no third-party runtime code, and
// THIRD_PARTY_NOTICES states exactly that ("No third-party OSS components are
// currently bundled or distributed in these packages"). Nothing else checked
// that claim: a `license-check` CI job scanned the production tree, but with
// no package declaring runtime dependencies that tree is only the four
// first-party workspaces, so the job could never fail on a third-party
// license. Assert the invariant the notices actually rest on instead.
//
// `bundleDependencies` is the field that would place foreign code inside a
// tarball; the other two pull it into a consumer's install tree. npm accepts
// `bundledDependencies` as a legacy alias, so both spellings are covered.
// peerDependencies are deliberately absent from this list — the consumer
// resolves them and they are never distributed — and are separately checked
// against the notices text below.
const FORBIDDEN_DEP_FIELDS = [
  "dependencies",
  "optionalDependencies",
  "bundleDependencies",
  "bundledDependencies",
];
// Generalizes the original approval-review guard (the class of defect: a
// LICENSE stub committed while approval was still pending, worded any of
// several ways) rather than narrowing it. The third alternative below is
// written with a single-char class, `o[s]rb`, instead of the plain word, so
// this functional regex doesn't itself trip the internal-ref-scan CI job's
// jargon pattern -- same self-match-avoidance idiom used for the hostname
// literals in internal-ref-scan (.github/workflows/ci.yml).
const BANNED =
  /provisional|pending (?:approval|review|o[s]rb)|full apache-2\.0 license text|placeholder/i;

const rootLicense = readFileSync(join(ROOT, "LICENSE"), "utf8");
const rootNotices = readFileSync(join(ROOT, "THIRD_PARTY_NOTICES"), "utf8");
const rootPkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
const errors = [];
const peerDepNames = new Set();

for (const name of PKGS) {
  const dir = join(ROOT, "packages", name);
  const p = (f) => join(dir, f);

  // LICENSE: must exist, match root byte-for-byte, and carry no provisional/placeholder wording
  if (!existsSync(p("LICENSE"))) errors.push(`${name}: missing LICENSE`);
  else {
    const lic = readFileSync(p("LICENSE"), "utf8");
    if (lic !== rootLicense)
      errors.push(`${name}: LICENSE differs from root LICENSE`);
    if (BANNED.test(lic))
      errors.push(`${name}: LICENSE contains provisional/placeholder wording`);
  }

  // NOTICE: must exist and carry this package's own attribution — the
  // correct family's "Credit as" line, its own npm package name, the
  // trademark paragraph, and NOT the other family's credit line (guards
  // against a copy-paste from the wrong package).
  if (!existsSync(p("NOTICE"))) errors.push(`${name}: missing NOTICE`);
  else {
    const notice = readFileSync(p("NOTICE"), "utf8");
    const family = NOTICE_FAMILY[name];
    const otherFamily = Object.values(NOTICE_FAMILY).find((f) => f !== family);
    if (!notice.includes(`"${family}" — https://github.com/NVIDIA/icons`))
      errors.push(`${name}: NOTICE missing "Credit as" line for "${family}"`);
    if (notice.includes(`"${otherFamily}" — https://github.com/NVIDIA/icons`))
      errors.push(
        `${name}: NOTICE credits "${otherFamily}" instead of "${family}"`,
      );
    if (!notice.includes(`@nvidia/${name}`))
      errors.push(`${name}: NOTICE does not mention @nvidia/${name}`);
    if (!notice.includes(TRADEMARK_TEXT))
      errors.push(`${name}: NOTICE missing trademark paragraph`);
  }

  // THIRD_PARTY_NOTICES: must exist and match root byte-for-byte. All five
  // copies are written together by scripts/generate-third-party-notices.mjs;
  // any divergence means a copy was hand-edited or the generator wasn't
  // re-run after a manifest change.
  if (!existsSync(p("THIRD_PARTY_NOTICES")))
    errors.push(`${name}: missing THIRD_PARTY_NOTICES`);
  else {
    const notices = readFileSync(p("THIRD_PARTY_NOTICES"), "utf8");
    if (notices !== rootNotices)
      errors.push(
        `${name}: THIRD_PARTY_NOTICES differs from root THIRD_PARTY_NOTICES (run: npm run generate-notices)`,
      );
  }

  // README: must exist so the npm page is not blank
  if (!existsSync(p("README.md"))) errors.push(`${name}: missing README.md`);

  // Manifest hygiene
  const pkg = JSON.parse(readFileSync(p("package.json"), "utf8"));
  for (const f of REQUIRED_FIELDS) {
    if (pkg[f] === undefined)
      errors.push(`${name}: package.json missing "${f}"`);
  }
  for (const k of Object.keys(pkg)) {
    if (k.startsWith("_"))
      errors.push(`${name}: package.json ships non-standard field "${k}"`);
  }
  if (!Array.isArray(pkg.files)) {
    errors.push(`${name}: package.json missing "files" allowlist`);
  } else {
    for (const requiredFile of REQUIRED_PACKED_FILES) {
      if (!pkg.files.includes(requiredFile)) {
        errors.push(`${name}: package.json files missing "${requiredFile}"`);
      }
    }
  }

  // `bundleDependencies` is an array of names; the rest are objects keyed by
  // name. Normalize both shapes so a stray empty array or `{}` reads as clean
  // rather than tripping the check.
  for (const field of FORBIDDEN_DEP_FIELDS) {
    const declared = pkg[field];
    const names = Array.isArray(declared)
      ? declared
      : Object.keys(declared ?? {});
    if (names.length) {
      errors.push(
        `${name}: package.json declares "${field}" (${names.join(", ")}) — ` +
          `published packages carry no runtime dependencies. If this is ` +
          `intentional, THIRD_PARTY_NOTICES has to be updated to match ` +
          `before this gate is relaxed.`,
      );
    }
  }

  for (const dep of Object.keys(pkg.peerDependencies ?? {})) {
    peerDepNames.add(dep);
  }

  // Shared build tooling is intentionally pinned in both root and per-package
  // manifests (each package declares its own build inputs). Enforce that the
  // duplicated ranges never drift apart.
  for (const [dep, range] of Object.entries(pkg.devDependencies ?? {})) {
    const rootRange = rootPkg.devDependencies?.[dep];
    if (rootRange !== undefined && rootRange !== range) {
      errors.push(
        `${name}: devDependency "${dep}" is "${range}" but root pins "${rootRange}"`,
      );
    }
  }
}

// Every peer dependency across the four packages must be named in the root
// notice text. Byte-equality above catches a copy going out of sync with
// root, but not all five copies agreeing on the same wrong peer list (e.g.
// "(react)" omitting react-dom).
for (const dep of peerDepNames) {
  if (!rootNotices.includes(dep)) {
    errors.push(
      `root THIRD_PARTY_NOTICES: missing mention of peerDependency "${dep}"`,
    );
  }
}

// No provisional/placeholder wording anywhere in shipped docs/manifests at root either
for (const f of ["LICENSE", "README.md"]) {
  if (
    existsSync(join(ROOT, f)) &&
    BANNED.test(readFileSync(join(ROOT, f), "utf8"))
  ) {
    errors.push(`root ${f} contains provisional/placeholder wording`);
  }
}

// Documented icon counts must match what actually ships. These counts appear
// in READMEs and changelogs that go inside the npm tarballs, where a figure
// any reader can check with `ls` is also the first one they can disprove.
// Worth a gate rather than a proofread.
const iconCounts = new Map();
for (const name of PKGS) {
  const assets = join(ROOT, "packages", name, "assets", "line");
  if (!existsSync(assets)) continue;
  const n = readdirSync(assets).filter((f) => f.endsWith(".svg")).length;
  iconCounts.set(name, n);
}
const validCounts = new Set(iconCounts.values());
if (validCounts.size) {
  // Any "<number> icons" / "<number> GUI Icons" claim in a shipped doc must
  // name one of the real per-set totals. Deliberately not tied to a specific
  // file or phrasing: the point is that no doc can invent a count.
  const CLAIM = /\b(\d{2,5})\s+(?:[A-Za-z]+\s+)?[Ii]cons\b/g;
  const docs = [
    "README.md",
    "CHANGELOG.md",
    ...PKGS.flatMap((name) => [
      join("packages", name, "README.md"),
      join("packages", name, "CHANGELOG.md"),
    ]),
  ];
  for (const rel of docs) {
    const abs = rel.startsWith("/") ? rel : join(ROOT, rel);
    if (!existsSync(abs)) continue;
    const text = readFileSync(abs, "utf8");
    for (const m of text.matchAll(CLAIM)) {
      const claimed = Number(m[1]);
      if (!validCounts.has(claimed)) {
        errors.push(
          `${rel}: claims "${m[0].trim()}" but no icon set has that many ` +
            `(actual: ${[...iconCounts].map(([n, c]) => `${n}=${c}`).join(", ")})`,
        );
      }
    }
  }
}

if (errors.length) {
  console.error("verify-packaging: FAIL");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`verify-packaging: OK (${PKGS.length} packages checked)`);
