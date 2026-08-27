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

export interface NvidiaGuiIconSpriteProps
  extends Omit<SVGProps<SVGSVGElement>, "children"> {
  symbols?: readonly IconSpriteSymbol[];
}

export type NvidiaGuiIconSpriteSymbolSource =
  | IconName
  | {
      readonly iconName: IconName;
      readonly variant?: Variant;
    };

export function getNvidiaGuiIconSpriteSymbol(
  iconName: IconName,
  variant: Variant = "line",
): IconSpriteSymbol | undefined {
  return inlineMap[variant]?.[iconName];
}

export function getNvidiaGuiIconSpriteSymbols(
  icons: readonly NvidiaGuiIconSpriteSymbolSource[],
): IconSpriteSymbol[] {
  const symbolsById = new Map<string, IconSpriteSymbol>();

  for (const icon of icons) {
    const symbol =
      typeof icon === "string"
        ? getNvidiaGuiIconSpriteSymbol(icon)
        : getNvidiaGuiIconSpriteSymbol(icon.iconName, icon.variant ?? "line");
    if (symbol) symbolsById.set(symbol.symbolId, symbol);
  }

  return [...symbolsById.values()];
}

export function NvidiaGuiIconSprite({
  symbols = ALL_SYMBOLS,
  ...svgProps
}: NvidiaGuiIconSpriteProps) {
  return createElement(IconSprite, { symbols, ...svgProps });
}
