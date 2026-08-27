// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { IconName, Variant } from "../types.js";

/** Compact path data for a single icon variant. */
export interface IconPathData {
  readonly symbolId: string;
  readonly viewBox: string;
  readonly paths: readonly string[];
}

/** Full map of all icon path data, keyed by variant then icon name. */
export const inlineMap: Record<Variant, Record<IconName, IconPathData>> = {
  line: {
    add: {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-add",
      viewBox: "0 0 12 12",
      paths: ["M5.5 5.5V1h1v4.5H11v1H6.5V11h-1V6.5H1v-1Z"],
    },
    "arrow-down": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-arrow-down",
      viewBox: "0 0 12 12",
      paths: [
        "M6.5 2v5.793l2.146-2.147.708.708L6 9.707 2.646 6.354l.708-.708L5.5 7.793V2Z",
      ],
    },
    "arrow-down-left": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-arrow-down-left",
      viewBox: "0 0 12 12",
      paths: ["M3 9V4h1v3.293l4.646-4.647.708.708L4.707 8H8v1Z"],
    },
    "arrow-down-right": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-arrow-down-right",
      viewBox: "0 0 12 12",
      paths: ["M9 9H4V8h3.293L2.646 3.354l.708-.708L8 7.293V4h1Z"],
    },
    "arrow-left": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-arrow-left",
      viewBox: "0 0 12 12",
      paths: [
        "m5.646 2.646.708.708L4.207 5.5H10v1H4.207l2.147 2.146-.708.708L2.293 6Z",
      ],
    },
    "arrow-right": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-arrow-right",
      viewBox: "0 0 12 12",
      paths: [
        "M7.793 5.5 5.646 3.354l.708-.708L9.707 6 6.354 9.354l-.708-.708L7.793 6.5H2v-1Z",
      ],
    },
    "arrow-up": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-arrow-up",
      viewBox: "0 0 12 12",
      paths: [
        "m6 2.293 3.354 3.353-.708.708L6.5 4.207V10h-1V4.207L3.354 6.354l-.708-.708Z",
      ],
    },
    "arrow-up-left": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-arrow-up-left",
      viewBox: "0 0 12 12",
      paths: ["M3 3h5v1H4.707l4.647 4.646-.708.708L4 4.707V8H3Z"],
    },
    "arrow-up-right": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-arrow-up-right",
      viewBox: "0 0 12 12",
      paths: ["M9 3v5H8V4.707L3.354 9.354l-.708-.708L7.293 4H4V3Z"],
    },
    check: {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-check",
      viewBox: "0 0 12 12",
      paths: [
        "M10.354 3.354 4.5 9.207 1.646 6.354l.708-.708L4.5 7.793l5.146-5.147Z",
      ],
    },
    "chevron-down": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-chevron-down",
      viewBox: "0 0 12 12",
      paths: ["m6 7.293 2.646-2.647.708.708L6 8.707 2.646 5.354l.708-.708Z"],
    },
    "chevron-left": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-chevron-left",
      viewBox: "0 0 12 12",
      paths: ["m4.707 6 2.647 2.646-.708.708L3.293 6l3.353-3.354.708.708Z"],
    },
    "chevron-right": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-chevron-right",
      viewBox: "0 0 12 12",
      paths: ["M7.293 6 4.646 3.354l.708-.708L8.707 6 5.354 9.354l-.708-.708Z"],
    },
    "chevron-up": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-chevron-up",
      viewBox: "0 0 12 12",
      paths: ["M6 4.707 3.354 7.354l-.708-.708L6 3.293l3.354 3.353-.708.708Z"],
    },
    close: {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-close",
      viewBox: "0 0 12 12",
      paths: [
        "M5.293 6 1.646 2.354l.708-.708L6 5.293l3.646-3.647.708.708L6.707 6l3.647 3.646-.708.708L6 6.707l-3.646 3.647-.708-.708Z",
      ],
    },
    "info-circle": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-info-circle",
      viewBox: "0 0 12 12",
      paths: [
        "M1 6a5 5 0 1 1 10.001.001A5 5 0 0 1 1 6m5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m.5 3v4h-1V5Zm0-2v1h-1V3Z",
      ],
    },
    "magnifying-glass": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-magnifying-glass",
      viewBox: "0 0 12 12",
      paths: [
        "M6.596 7.303a3.5 3.5 0 1 1 .707-.707l3.551 3.55-.708.708ZM4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
      ],
    },
    "open-external": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-open-external",
      viewBox: "0 0 12 12",
      paths: [
        "M1 2h4v1H2v7h7V7h1v4H1Zm6-1h4v4h-1V2.707L5.354 7.354l-.708-.708L9.293 2H7Z",
      ],
    },
    "shape-circle": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-shape-circle",
      viewBox: "0 0 12 12",
      paths: [
        "M2 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
      ],
    },
    "shape-square": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-shape-square",
      viewBox: "0 0 12 12",
      paths: ["M2 2h8v8H2Zm1 1v6h6V3Z"],
    },
    "shape-triangle": {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-shape-triangle",
      viewBox: "0 0 12 12",
      paths: ["M6.007 1.484 10.821 10H1.193ZM2.907 9h6.2l-3.1-5.484Z"],
    },
    star: {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-star",
      viewBox: "0 0 12 12",
      paths: [
        "m6 .87 1.568 3.178 3.507.509L8.537 7.03l.599 3.493L6 8.874l-3.136 1.649.599-3.493L.926 4.557l3.506-.509Zm0 2.26-.904 1.832-2.022.293 1.463 1.426-.345 2.013L6 7.744l1.808.95-.345-2.013 1.463-1.426-2.022-.293Z",
      ],
    },
    subtract: {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-subtract",
      viewBox: "0 0 12 12",
      paths: ["M11 6.5H1v-1h10z"],
    },
    sync: {
      symbolId: "nvidia-react-micro-gui-icons-v1-line-sync",
      viewBox: "0 0 12 12",
      paths: [
        "M5.646.854 6.793 2H6a4 4 0 0 0-3.865 5.035l.966-.258A3 3 0 0 1 6 3h.793L5.646 4.146l.708.708L8.707 2.5 6.354.146zM9 6q-.001-.405-.101-.777l.966-.258Q9.998 5.463 10 6a4 4 0 0 1-4 4h-.793l1.147 1.146-.708.708L3.293 9.5l2.353-2.354.708.708L5.207 9H6a3 3 0 0 0 3-3",
      ],
    },
  },
  fill: {
    add: {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-add",
      viewBox: "0 0 12 12",
      paths: ["M5.5 5.5V1h1v4.5H11v1H6.5V11h-1V6.5H1v-1Z"],
    },
    "arrow-down": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-arrow-down",
      viewBox: "0 0 12 12",
      paths: [
        "M6.5 2v5.793l2.146-2.147.708.708L6 9.707 2.646 6.354l.708-.708L5.5 7.793V2Z",
      ],
    },
    "arrow-down-left": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-arrow-down-left",
      viewBox: "0 0 12 12",
      paths: ["M3 9V4h1v3.293l4.646-4.647.708.708L4.707 8H8v1Z"],
    },
    "arrow-down-right": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-arrow-down-right",
      viewBox: "0 0 12 12",
      paths: ["M9 9H4V8h3.293L2.646 3.354l.708-.708L8 7.293V4h1Z"],
    },
    "arrow-left": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-arrow-left",
      viewBox: "0 0 12 12",
      paths: [
        "m5.646 2.646.708.708L4.207 5.5H10v1H4.207l2.147 2.146-.708.708L2.293 6Z",
      ],
    },
    "arrow-right": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-arrow-right",
      viewBox: "0 0 12 12",
      paths: [
        "M7.793 5.5 5.646 3.354l.708-.708L9.707 6 6.354 9.354l-.708-.708L7.793 6.5H2v-1Z",
      ],
    },
    "arrow-up": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-arrow-up",
      viewBox: "0 0 12 12",
      paths: [
        "m6 2.293 3.354 3.353-.708.708L6.5 4.207V10h-1V4.207L3.354 6.354l-.708-.708Z",
      ],
    },
    "arrow-up-left": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-arrow-up-left",
      viewBox: "0 0 12 12",
      paths: ["M3 3h5v1H4.707l4.647 4.646-.708.708L4 4.707V8H3Z"],
    },
    "arrow-up-right": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-arrow-up-right",
      viewBox: "0 0 12 12",
      paths: ["M9 3v5H8V4.707L3.354 9.354l-.708-.708L7.293 4H4V3Z"],
    },
    check: {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-check",
      viewBox: "0 0 12 12",
      paths: [
        "M10.354 3.354 4.5 9.207 1.646 6.354l.708-.708L4.5 7.793l5.146-5.147Z",
      ],
    },
    "chevron-down": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-chevron-down",
      viewBox: "0 0 12 12",
      paths: ["m6 7.293 2.646-2.647.708.708L6 8.707 2.646 5.354l.708-.708Z"],
    },
    "chevron-left": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-chevron-left",
      viewBox: "0 0 12 12",
      paths: ["m4.707 6 2.647 2.646-.708.708L3.293 6l3.353-3.354.708.708Z"],
    },
    "chevron-right": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-chevron-right",
      viewBox: "0 0 12 12",
      paths: ["M7.293 6 4.646 3.354l.708-.708L8.707 6 5.354 9.354l-.708-.708Z"],
    },
    "chevron-up": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-chevron-up",
      viewBox: "0 0 12 12",
      paths: ["M6 4.707 3.354 7.354l-.708-.708L6 3.293l3.354 3.353-.708.708Z"],
    },
    close: {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-close",
      viewBox: "0 0 12 12",
      paths: [
        "M5.293 6 1.646 2.354l.708-.708L6 5.293l3.646-3.647.708.708L6.707 6l3.647 3.646-.708.708L6 6.707l-3.646 3.647-.708-.708Z",
      ],
    },
    "info-circle": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-info-circle",
      viewBox: "0 0 12 12",
      paths: [
        "M1 6a5 5 0 1 1 10.001.001A5 5 0 0 1 1 6m5.5 3V5h-1v4Zm0-5V3h-1v1Z",
      ],
    },
    "magnifying-glass": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-magnifying-glass",
      viewBox: "0 0 12 12",
      paths: [
        "M6.596 7.303a3.5 3.5 0 1 1 .707-.707l3.551 3.55-.708.708ZM4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
      ],
    },
    "open-external": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-open-external",
      viewBox: "0 0 12 12",
      paths: [
        "M1 2h4v1H2v7h7V7h1v4H1Zm6-1h4v4h-1V2.707L5.354 7.354l-.708-.708L9.293 2H7Z",
      ],
    },
    "shape-circle": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-shape-circle",
      viewBox: "0 0 12 12",
      paths: ["M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"],
    },
    "shape-square": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-shape-square",
      viewBox: "0 0 12 12",
      paths: ["M10 2H2v8h8z"],
    },
    "shape-triangle": {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-shape-triangle",
      viewBox: "0 0 12 12",
      paths: ["M10.821 10 6.007 1.484 1.193 10z"],
    },
    star: {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-star",
      viewBox: "0 0 12 12",
      paths: [
        "M7.458 4.153 6 1.2 4.542 4.153l-3.259.474 2.359 2.299-.557 3.246L6 8.639l2.915 1.533-.557-3.246 2.359-2.299z",
      ],
    },
    subtract: {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-subtract",
      viewBox: "0 0 12 12",
      paths: ["M11 6.5H1v-1h10z"],
    },
    sync: {
      symbolId: "nvidia-react-micro-gui-icons-v1-fill-sync",
      viewBox: "0 0 12 12",
      paths: [
        "M5.646.854 6.793 2H6a4 4 0 0 0-3.865 5.035l.966-.258A3 3 0 0 1 6 3h.793L5.646 4.146l.708.708L8.707 2.5 6.354.146zM9 6q-.001-.405-.101-.777l.966-.258Q9.998 5.463 10 6a4 4 0 0 1-4 4h-.793l1.147 1.146-.708.708L3.293 9.5l2.353-2.354.708.708L5.207 9H6a3 3 0 0 0 3-3",
      ],
    },
  },
} as const;
