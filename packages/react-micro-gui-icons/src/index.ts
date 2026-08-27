// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

export type { NvidiaMicroGuiIconProps } from "./NvidiaMicroGuiIcon.js";
// Generic component (imports full inline map — for dynamic icon names)
export { NvidiaMicroGuiIcon } from "./NvidiaMicroGuiIcon.js";
export type {
  NvidiaMicroGuiIconSpriteProps,
  NvidiaMicroGuiIconSpriteSymbolSource,
} from "./NvidiaMicroGuiIconSprite.js";
export {
  getNvidiaMicroGuiIconSpriteSymbol,
  getNvidiaMicroGuiIconSpriteSymbols,
  NvidiaMicroGuiIconSprite,
} from "./NvidiaMicroGuiIconSprite.js";
export type { IconSpriteSymbol } from "./runtime/sprite.js";

// Re-export the icon name and variant types for convenience
export type { IconName, Variant } from "./types.js";
