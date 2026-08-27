// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement } from "react";

// Deliberately hook-free, and deliberately carries no "use client"
// directive: this module must stay resolvable under the "react-server"
// export condition, which is what lets the declarative sprite component
// render as a Server Component. React's react-server build does not export
// useEffect or useLayoutEffect at all, so importing them here would be a
// link-time error in an RSC graph, not a runtime one. The client-only half
// of the runtime lives in ./useSpriteSymbol.ts.
export const SVG_NS = "http://www.w3.org/2000/svg";
export const SPRITE_ROOT_ID = "nvidia-react-micro-gui-icons-v1-sprite";
const HIDDEN_SPRITE_STYLE = {
  position: "absolute",
  width: 0,
  height: 0,
  overflow: "hidden",
} satisfies SVGProps<SVGSVGElement>["style"];

export interface IconSpriteSymbol {
  readonly symbolId: string;
  readonly viewBox: string;
  readonly paths: readonly string[];
}

export interface IconSpriteProps
  extends Omit<SVGProps<SVGSVGElement>, "children"> {
  spriteId?: string;
  symbols: readonly IconSpriteSymbol[];
}

export function IconSprite({
  spriteId = SPRITE_ROOT_ID,
  symbols,
  style,
  ...svgProps
}: IconSpriteProps) {
  return createElement(
    "svg",
    {
      ...svgProps,
      id: spriteId,
      style: { ...HIDDEN_SPRITE_STYLE, ...style },
      "aria-hidden": "true",
      focusable: "false",
      xmlns: SVG_NS,
    },
    symbols.map(({ symbolId, viewBox, paths }) =>
      createElement(
        "symbol",
        { key: symbolId, id: symbolId, viewBox },
        paths.map((d, i) =>
          createElement("path", {
            key: `${symbolId}-path-${i}`,
            fill: "currentColor",
            d,
          }),
        ),
      ),
    ),
  );
}
