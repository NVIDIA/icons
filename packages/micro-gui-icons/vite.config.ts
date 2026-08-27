// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

/// <reference types="vite/client" />

import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";

const dirName = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Vite 8 resolves tsconfig path aliases natively, so no plugin is needed.
  resolve: { tsconfigPaths: true },
  build: {
    lib: {
      entry: {
        index: path.resolve(dirName, "src/index.ts"),
        iconTypes: path.resolve(dirName, "src/iconTypes.ts"),
      },
      fileName: (format: string, entryName: string) =>
        `${entryName}.${format === "es" ? "mjs" : "cjs"}`,
      formats: ["es", "cjs"],
    },
    emptyOutDir: true,
    reportCompressedSize: true,
    rollupOptions: {
      external: (id: string) => !/^[./]/.test(id),
    },
  },
});
