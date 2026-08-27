// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

export const IconNames = [
  "add",
  "arrow-down",
  "arrow-down-left",
  "arrow-down-right",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "arrow-up-left",
  "arrow-up-right",
  "check",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "close",
  "info-circle",
  "magnifying-glass",
  "open-external",
  "shape-circle",
  "shape-square",
  "shape-triangle",
  "star",
  "subtract",
  "sync",
] as const;
export type Variant = "fill" | "line";
export type IconName = (typeof IconNames)[number];
export function isIconName(iconName: string): iconName is IconName {
  return !!IconNames.some((testIconName) => testIconName === iconName);
}
