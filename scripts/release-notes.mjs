// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

// Composes the GitHub Release body for a tag that release.yml has published.
// Writes markdown to stdout; diagnostics go to stderr so the caller can
// redirect stdout straight into a notes file.
//
// Lives here rather than inline in release.yml so it can be run by hand
// against any tag before cutting it, which is the only practical way to
// preview release notes without publishing something.
//
// Run: node ./scripts/release-notes.mjs <version> [pkg-dir ...]
//   e.g. node ./scripts/release-notes.mjs 1.0.0 gui-icons react-gui-icons

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const [version, ...pkgDirs] = process.argv.slice(2);

if (!version) {
  console.error("release-notes: usage: release-notes.mjs <version> [pkg-dir ...]");
  process.exit(2);
}

// Pull the section for this version out of the root changelog.
//
// Matched as a literal string, not a regex. A version is mostly dots, and in
// a regex `.` matches any character, so a naive /^## \[1.0.0\]/ also matches
// a heading for 1a0b0. Versions that differ only in punctuation are exactly
// the ones worth not confusing.
const changelogSection = (v) => {
  const path = join(ROOT, "CHANGELOG.md");
  if (!existsSync(path)) return null;
  const heading = `## [${v}]`;
  const lines = readFileSync(path, "utf8").split("\n");
  const start = lines.findIndex((l) => l.startsWith(heading));
  if (start === -1) return null;
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((l) => l.startsWith("## ["));
  const body = (end === -1 ? rest : rest.slice(0, end)).join("\n").trim();
  return body === "" ? null : body;
};

// npm's own URL shape for a specific version. Links to the exact release
// rather than the package, so a reader following a link from an old release
// does not silently land on whatever is current.
const npmUrl = (name, v) =>
  `https://www.npmjs.com/package/${name}/v/${v}`;

const out = [];
const notes = changelogSection(version);

if (notes) {
  out.push(notes);
} else {
  // Non-fatal, and deliberately so. This runs after npm publish has already
  // succeeded, and a publish cannot be taken back: failing here would turn a
  // completed release into a red X without undoing anything. Say what is
  // missing, in the release itself, where whoever cuts the next one will see
  // it.
  console.error(
    `release-notes: WARNING: CHANGELOG.md has no "## [${version}]" section.`,
  );
  out.push(
    `_No changelog entry was found for ${version}; see_ ` +
      `[CHANGELOG.md](https://github.com/NVIDIA/icons/blob/main/CHANGELOG.md).`,
  );
}

const rows = [];
for (const dir of pkgDirs) {
  const manifest = join(ROOT, "packages", dir, "package.json");
  if (!existsSync(manifest)) {
    console.error(`release-notes: WARNING: no manifest at packages/${dir}`);
    continue;
  }
  const { name, version: v } = JSON.parse(readFileSync(manifest, "utf8"));
  // release.yml only ever passes packages whose manifest already matches the
  // tag, so this cannot fire from the workflow. It can fire from a hand-run
  // preview, where silently tabulating a version that was never asked for is
  // the kind of thing that gets copied into a release body.
  if (v !== version) {
    console.error(
      `release-notes: WARNING: packages/${dir} is at ${v}, not ${version}; ` +
        "listing its actual version",
    );
  }
  rows.push(`| [\`${name}\`](${npmUrl(name, v)}) | \`${v}\` |`);
}

if (rows.length) {
  out.push(
    "",
    "### Published to npm",
    "",
    "| Package | Version |",
    "|---|---|",
    ...rows,
    "",
    "Every tarball is published from this tag by GitHub Actions under npm",
    "Trusted Publishing, with a provenance attestation recorded in Sigstore's",
    "public transparency log. Verify with:",
    "",
    "```sh",
    "npm audit signatures",
    "```",
  );
}

process.stdout.write(`${out.join("\n").trim()}\n`);
