// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement } from "react";
import { type IconPathData, inlineMap } from "./generated/inlineMap.js";
import { IconSprite, type IconSpriteSymbol } from "./runtime/sprite.js";
import type { IconName, Variant } from "./types.js";

const ALL_SYMBOLS: readonly IconPathData[] = Object.values(inlineMap).flatMap(
  (variantMap) => Object.values(variantMap),
);

export interface NvidiaMicroGuiIconSpriteProps
  extends Omit<SVGProps<SVGSVGElement>, "children"> {
  symbols?: readonly IconSpriteSymbol[];
}

export type NvidiaMicroGuiIconSpriteSymbolSource =
  | IconName
  | {
      readonly iconName: IconName;
      readonly variant?: Variant;
    };

export function getNvidiaMicroGuiIconSpriteSymbol(
  iconName: IconName,
  variant: Variant = "line",
): IconSpriteSymbol | undefined {
  return inlineMap[variant]?.[iconName];
}

export function getNvidiaMicroGuiIconSpriteSymbols(
  icons: readonly NvidiaMicroGuiIconSpriteSymbolSource[],
): IconSpriteSymbol[] {
  const symbolsById = new Map<string, IconSpriteSymbol>();

  for (const icon of icons) {
    const symbol =
      typeof icon === "string"
        ? getNvidiaMicroGuiIconSpriteSymbol(icon)
        : getNvidiaMicroGuiIconSpriteSymbol(
            icon.iconName,
            icon.variant ?? "line",
          );
    if (symbol) symbolsById.set(symbol.symbolId, symbol);
  }

  return [...symbolsById.values()];
}

export function NvidiaMicroGuiIconSprite({
  symbols = ALL_SYMBOLS,
  ...svgProps
}: NvidiaMicroGuiIconSpriteProps) {
  return createElement(IconSprite, { symbols, ...svgProps });
}
