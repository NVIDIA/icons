// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

/// <reference types="vite/client" />

import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const dirName = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Vite 8 resolves tsconfig path aliases natively, so no plugin is needed.
  resolve: { tsconfigPaths: true },
  plugins: [react({ jsxRuntime: "automatic" })],
  build: {
    emptyOutDir: true,
    reportCompressedSize: true,
    rollupOptions: {
      // Two entry points: the main package root AND the icons barrel.
      // With preserveModules:true, Rollup emits a separate file for every
      // module reachable from each entry, giving us dist/icons/<Name>.mjs
      // for every per-icon component (required for ./icons/* subpath exports).
      input: {
        index: path.resolve(dirName, "src/index.ts"),
        "icons/index": path.resolve(dirName, "src/icons/index.ts"),
      },
      // Vite sets preserveEntrySignatures:false globally when build.lib is absent.
      // Override it here so it applies before output options are resolved.
      preserveEntrySignatures: "strict",
      external: (id: string) => !/^[./]/.test(id),
      output: [
        {
          format: "es",
          dir: "dist",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].mjs",
          chunkFileNames: "[name].mjs",
        },
        {
          format: "cjs",
          dir: "dist",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].cjs",
          chunkFileNames: "[name].cjs",
        },
      ],
    },
  },
});
