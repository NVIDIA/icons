"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useLayoutEffect } from "react";

import { type IconSpriteSymbol, SPRITE_ROOT_ID, SVG_NS } from "./sprite.js";

const useIsomorphicLayoutEffect =
  typeof document === "undefined" ? useEffect : useLayoutEffect;
let spriteRoot: SVGSVGElement | undefined;

function getOrCreateSpriteRoot(): SVGSVGElement | undefined {
  if (typeof document === "undefined") return undefined;
  if (spriteRoot?.isConnected) return spriteRoot;

  const existing = document.getElementById(SPRITE_ROOT_ID);
  if (
    existing?.namespaceURI === SVG_NS &&
    existing.tagName.toLowerCase() === "svg"
  ) {
    spriteRoot = existing as unknown as SVGSVGElement;
    return spriteRoot;
  }

  const root = document.createElementNS(SVG_NS, "svg");
  root.id = SPRITE_ROOT_ID;
  root.setAttribute("aria-hidden", "true");
  root.setAttribute("focusable", "false");
  root.style.position = "absolute";
  root.style.width = "0";
  root.style.height = "0";
  root.style.overflow = "hidden";
  root.setAttribute("xmlns", SVG_NS);

  (document.body ?? document.documentElement).appendChild(root);
  spriteRoot = root;
  return root;
}

export function ensureSpriteSymbol(symbol: IconSpriteSymbol | undefined): void {
  if (!symbol || typeof document === "undefined") return;
  if (document.getElementById(symbol.symbolId)) return;

  const root = getOrCreateSpriteRoot();
  if (!root) return;

  const symbolElement = document.createElementNS(SVG_NS, "symbol");
  symbolElement.id = symbol.symbolId;
  symbolElement.setAttribute("viewBox", symbol.viewBox);

  for (const d of symbol.paths) {
    const pathElement = document.createElementNS(SVG_NS, "path");
    pathElement.setAttribute("fill", "currentColor");
    pathElement.setAttribute("d", d);
    symbolElement.appendChild(pathElement);
  }

  root.appendChild(symbolElement);
}

export function useSpriteSymbol(symbol: IconSpriteSymbol | undefined): void {
  useIsomorphicLayoutEffect(() => {
    ensureSpriteSymbol(symbol);
  }, [symbol]);
}
