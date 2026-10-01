// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

// Warns when a package's `next` dist-tag points at a version that a GA
// publish has already superseded. release.yml only ever SETS a dist-tag
// (`next` for a prerelease, `latest` for GA); nothing retires `next` once a
// GA version makes it stale, so `npm i @nvidia/<pkg>@next` keeps installing
// an old release candidate forever after. See RELEASING.md, "After a GA
// release" for why this can only warn and not fix it: npm Trusted Publishing
// (OIDC) authorises `npm publish` only, not `npm dist-tag`.
//
// Run: node ./scripts/check-dist-tags.mjs <published-version> <pkg-dir ...>
//   e.g. node ./scripts/check-dist-tags.mjs 1.0.0 gui-icons react-gui-icons

import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

// Official SemVer 2.0.0 grammar (semver.org), trimmed to the capture groups
// this script needs: major/minor/patch and the prerelease identifier chain.
// Build metadata is matched but discarded: it carries no precedence (§10).
const SEMVER_RE =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/;

// Returns { major, minor, patch, prerelease: string[] }, or null if `v`
// isn't valid SemVer. `prerelease` is empty for a GA version.
export function parseSemver(v) {
  const m = SEMVER_RE.exec(v);
  if (!m) return null;
  return {
    major: Number(m[1]),
    minor: Number(m[2]),
    patch: Number(m[3]),
    prerelease: m[4] ? m[4].split(".") : [],
  };
}

export function isPrerelease(v) {
  const parsed = parseSemver(v);
  return parsed !== null && parsed.prerelease.length > 0;
}

const isNumericIdentifier = (id) => /^\d+$/.test(id);

// SemVer 2.0.0 §11.4: compare two prerelease identifiers. Numeric
// identifiers compare numerically; alphanumeric ones compare lexically in
// ASCII order; a numeric identifier always has lower precedence than an
// alphanumeric one.
const comparePrereleaseIdentifier = (a, b) => {
  const aNum = isNumericIdentifier(a);
  const bNum = isNumericIdentifier(b);
  if (aNum && bNum) return Number(a) - Number(b);
  if (aNum) return -1;
  if (bNum) return 1;
  return a < b ? -1 : a > b ? 1 : 0;
};

// Full SemVer 2.0.0 §11 precedence comparison. Returns a negative number if
// `a` < `b`, positive if `a` > `b`, 0 if equal in precedence. Throws if
// either input isn't valid SemVer: callers only ever feed it strings they
// have already parsed off the registry or a manifest, so an invalid string
// here means something upstream is broken, not a condition to warn about.
export function compareSemver(a, b) {
  const pa = parseSemver(a);
  const pb = parseSemver(b);
  if (!pa) throw new Error(`check-dist-tags: not valid SemVer: ${a}`);
  if (!pb) throw new Error(`check-dist-tags: not valid SemVer: ${b}`);

  if (pa.major !== pb.major) return pa.major - pb.major;
  if (pa.minor !== pb.minor) return pa.minor - pb.minor;
  if (pa.patch !== pb.patch) return pa.patch - pb.patch;

  // §11.3: a version with a prerelease has lower precedence than its own
  // release.
  if (pa.prerelease.length === 0 && pb.prerelease.length === 0) return 0;
  if (pa.prerelease.length === 0) return 1;
  if (pb.prerelease.length === 0) return -1;

  const len = Math.max(pa.prerelease.length, pb.prerelease.length);
  for (let i = 0; i < len; i++) {
    // §11.4.4: a larger set of prerelease fields has higher precedence than
    // a shorter set, when all preceding identifiers are equal.
    if (i >= pa.prerelease.length) return -1;
    if (i >= pb.prerelease.length) return 1;
    const cmp = comparePrereleaseIdentifier(pa.prerelease[i], pb.prerelease[i]);
    if (cmp !== 0) return cmp;
  }
  return 0;
}

// `next` is stale once it stops being ahead of what GA just published:
// behind it, or sitting on the exact version GA now also claims.
export function isStaleNext(nextVersion, publishedVersion) {
  return compareSemver(nextVersion, publishedVersion) <= 0;
}

export function fixCommand(pkgName) {
  return `npm dist-tag rm ${pkgName} next`;
}

export function staleWarningLines(pkgName, nextVersion, publishedVersion) {
  return [
    `::warning::${pkgName}: dist-tag "next" points at ${nextVersion}, which is not ahead of the ` +
      `just-published ${publishedVersion}. "npm i ${pkgName}@next" would install an old or ` +
      'superseded prerelease. Retire it manually: RELEASING.md, "After a GA release".',
    `  ${fixCommand(pkgName)}`,
  ];
}

export function readFailureWarningLines(pkgName, error) {
  return [
    `::warning::${pkgName}: could not read dist-tags from the registry (${error.message}). ` +
      "Skipping the stale-next check for this package.",
  ];
}

// Core logic, deliberately free of filesystem/process access so tests can
// drive it with a stub `readNextDistTag` instead of hitting the real
// registry. `packages` is the list of npm package names to check (already
// resolved from each package's manifest).
//
// Returns one result per package: { name, outcome, lines }, where `outcome`
// is "stale" (warned), "ok" (next is absent or still ahead) or "read-error"
// (warned that the check itself couldn't run). Nothing is returned, and
// nothing is read, when `publishedVersion` is itself a prerelease: there is
// no GA to compare `next` against yet.
export function checkDistTags({ publishedVersion, packages, readNextDistTag }) {
  if (isPrerelease(publishedVersion)) return [];

  return packages.map((name) => {
    let next;
    try {
      next = readNextDistTag(name);
    } catch (error) {
      return {
        name,
        outcome: "read-error",
        lines: readFailureWarningLines(name, error),
      };
    }

    if (next === undefined || !isStaleNext(next, publishedVersion)) {
      return { name, outcome: "ok", lines: [] };
    }

    return {
      name,
      outcome: "stale",
      lines: staleWarningLines(name, next, publishedVersion),
    };
  });
}

// Reads `next` off the registry for one package. Returns `undefined` if no
// `next` tag exists (not an error: plenty of packages never had one).
function readNextDistTagFromRegistry(pkgName) {
  const raw = execFileSync("npm", ["view", pkgName, "dist-tags", "--json"], {
    encoding: "utf8",
  });
  const tags = JSON.parse(raw);
  return tags.next;
}

function appendStepSummary(lines) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath || lines.length === 0) return;
  appendFileSync(summaryPath, `${lines.join("\n")}\n`);
}

function main() {
  const [publishedVersion, ...pkgDirs] = process.argv.slice(2);
  if (!publishedVersion || pkgDirs.length === 0) {
    console.error(
      "check-dist-tags: usage: check-dist-tags.mjs <published-version> <pkg-dir ...>",
    );
    process.exit(2);
  }

  if (isPrerelease(publishedVersion)) {
    console.error(
      `check-dist-tags: ${publishedVersion} is a prerelease; nothing to check ` +
        "(it publishes to next, not latest).",
    );
    return;
  }

  const packages = pkgDirs.map((dir) => {
    const manifest = join(ROOT, "packages", dir, "package.json");
    return JSON.parse(readFileSync(manifest, "utf8")).name;
  });

  const results = checkDistTags({
    publishedVersion,
    packages,
    readNextDistTag: readNextDistTagFromRegistry,
  });

  for (const { lines } of results) {
    if (lines.length === 0) continue;
    console.error(lines.join("\n"));
    appendStepSummary(lines);
  }
}

// Only run when invoked directly, not when imported by the test file.
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
