// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

// Per-file SPDX header verification.
//
// REUSE-IgnoreStart
// Project licensing policy requires the CC-BY-4.0 AND Apache-2.0 dual
// expression to appear only in the top-level LICENSE file. Every source file
// — including generated icon
// components and inlineMap.ts, which embed CC-BY-4.0 SVG path data — must
// carry a code-only "SPDX-License-Identifier: Apache-2.0" header. The dual
// expression must never appear in a per-file header.
//
// Run: node ./scripts/verify-license-headers.mjs

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { extname } from "node:path";

// Keep in sync with the --include list in internal-ref-scan
// (.github/workflows/ci.yml). Every extension the build can emit must appear
// here: one that is missing lets a source file ship with no SPDX header and
// still pass this gate.
const EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".mts",
  ".cts",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
]);
const SCOPES = ["packages", "scripts"];
const COPYRIGHT_RE = /^\/\/ SPDX-FileCopyrightText: /m;
const APACHE_ONLY_RE = /^\/\/ SPDX-License-Identifier: Apache-2\.0$/m;
const DUAL_RE = /SPDX-License-Identifier:\s*CC-BY-4\.0\s+AND\s+Apache-2\.0/;

const files = execSync(`git ls-files -- ${SCOPES.join(" ")}`, {
  encoding: "utf8",
})
  .split("\n")
  .filter(Boolean)
  .filter((f) => EXTENSIONS.has(extname(f)))
  // dist/ and other build output is never committed, but skip defensively
  .filter((f) => !f.includes("/dist/"));

const errors = [];

for (const file of files) {
  const content = readFileSync(file, "utf8");

  if (DUAL_RE.test(content)) {
    errors.push(
      `${file}: carries the CC-BY-4.0 AND Apache-2.0 dual SPDX expression — ` +
        `this belongs only in the top-level LICENSE, not a per-file header`,
    );
    continue;
  }
  if (!COPYRIGHT_RE.test(content)) {
    errors.push(`${file}: missing SPDX-FileCopyrightText header`);
  }
  if (!APACHE_ONLY_RE.test(content)) {
    errors.push(
      `${file}: missing "SPDX-License-Identifier: Apache-2.0" header`,
    );
  }
}

if (errors.length) {
  console.error("verify-license-headers: FAIL");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`verify-license-headers: OK (${files.length} files checked)`);
// REUSE-IgnoreEnd
