// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

export type { NvidiaGuiIconProps } from "./NvidiaGuiIcon.js";
// Generic component (imports full inline map, for dynamic icon names)
export { NvidiaGuiIcon } from "./NvidiaGuiIcon.js";
export type {
  NvidiaGuiIconSpriteProps,
  NvidiaGuiIconSpriteSymbolSource,
} from "./NvidiaGuiIconSprite.js";
export {
  getNvidiaGuiIconSpriteSymbol,
  getNvidiaGuiIconSpriteSymbols,
  NvidiaGuiIconSprite,
} from "./NvidiaGuiIconSprite.js";
export type { IconSpriteSymbol } from "./runtime/sprite.js";

// Re-export the icon name and variant types for convenience
export type { IconName, Variant } from "./types.js";
