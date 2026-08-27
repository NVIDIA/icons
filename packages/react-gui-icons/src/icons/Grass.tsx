"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "grass" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-grass",
    viewBox: "0 0 16 16",
    paths: [
      "M9.646 8.647 10 9l.354.353.002-.002.002-.002.002-.002-.013.015q-.024.029-.08.116a3.3 3.3 0 0 0-.297.63c-.204.56-.421 1.477-.463 2.892h1.026c.13-.978.619-1.783 1.079-2.348a6.6 6.6 0 0 1 .994-.981l.074-.056.021-.016.007-.005.002-.001.001-.001L13 10l.289.408-.002.001-.012.009-.053.041a5.5 5.5 0 0 0-.834.824c-.374.459-.722 1.045-.843 1.717H14v1H2v-1h2.384c-.142-.318-.403-.629-.717-.91a5.5 5.5 0 0 0-.835-.61l-.055-.032-.013-.007-.002-.001L3 11l.238-.44.001.001.002.001.006.003.021.012.072.041q.093.054.247.155c.202.133.473.327.746.571.425.38.932.951 1.106 1.656h1.016c-.121-.672-.469-1.258-.843-1.717a5.5 5.5 0 0 0-.834-.824l-.053-.041-.012-.009-.002-.001L5 10l.289-.408.001.001.002.001.007.005.021.016.074.056a6.6 6.6 0 0 1 .994.981c.46.565.949 1.37 1.079 2.348h1.04c.042-1.52.276-2.554.523-3.233.137-.376.277-.643.391-.823q.086-.134.146-.207l.049-.058.018-.02.007-.007.003-.003Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-grass",
    viewBox: "0 0 16 16",
    paths: [
      "M9.97 10.108c.113-.311.223-.513.297-.63l.093-.131-.714-.7s-.159.192-.225.297c-.114.18-.254.447-.391.823-.247.679-.481 1.713-.523 3.233h-1.04c-.13-.978-.619-1.783-1.079-2.348a7 7 0 0 0-.745-.774c-.114-.1-.23-.198-.354-.286l-.576.817q.139.104.269.22c.172.151.401.373.63.654.374.459.722 1.045.843 1.717H5.439c-.174-.706-.681-1.276-1.106-1.655a6.4 6.4 0 0 0-.746-.572c-.113-.074-.346-.211-.346-.211s-.421.8-.464.886a5.6 5.6 0 0 1 .89.642c.314.281.575.592.717.91H2v1h12v-1h-2.455c.121-.672.469-1.258.843-1.717.229-.281.458-.503.63-.654.087-.077.271-.221.271-.221l-.578-.816s-.24.186-.354.286a6.6 6.6 0 0 0-.745.774c-.46.565-.949 1.37-1.079 2.348H9.507c.042-1.415.259-2.332.463-2.892",
    ] as const,
  },
} as const satisfies Record<"line" | "fill", IconSpriteSymbol>;

export interface NvidiaGuiIconProps
  extends Omit<SVGProps<SVGSVGElement>, "title"> {
  variant?: "line" | "fill";
  size?: string;
  /**
   * Accessible name. Describe what the icon *does* in context ("Delete item"),
   * not what it depicts ("trash") — the library knows the glyph, only you know
   * the meaning.
   *
   * Omit it for decorative icons, which is the default: an icon sitting beside
   * a visible label is redundant, and announcing it twice is worse than
   * silence. Supplying this renders a <title>, sets role="img" and drops
   * aria-hidden together, so there is no half-configured state to land in.
   */
  title?: string;
}

const GrassBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
  ({ variant = "line", size = "1em", title, ...svgProps }, ref) => {
    const iconData = DATA[variant];
    const href = `#${iconData.symbolId}`;
    useSpriteSymbol(iconData);

    // A blank title is not a name. Trim before deciding, so a whitespace-only
    // value falls back to decorative rather than exposing the icon to
    // assistive tech with an empty accessible name — the worst of both.
    const labelled = title !== undefined && title.trim() !== "";

    return createElement(
      "svg",
      {
        ref,
        height: size,
        width: size,
        viewBox: iconData.viewBox,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "data-icon-name": "grass",
        // aria-hidden would hide the <title> we just rendered along with the
        // rest of the subtree, so the two are mutually exclusive. Written as
        // two conditionals rather than a spread of a union: spreading a
        // conditional object literal makes tsc distribute createElement's
        // overload resolution across the whole of SVGProps, once per icon
        // module, and that is enough to exhaust memory on the 748-icon package.
        // React drops undefined attributes, so the rendered output is identical.
        role: labelled ? "img" : undefined,
        "aria-hidden": labelled ? undefined : "true",
        focusable: "false",
        // Spread last, so the documented role/aria-label/aria-hidden escape
        // hatch keeps working and always beats our defaults.
        ...svgProps,
      },
      // <title> must be the first child to name the <svg>.
      labelled ? createElement("title", { key: "title" }, title) : null,
      createElement("use", { href, key: "use" }),
    );
  },
);
GrassBase.displayName = "Grass";

export const Grass = memo(GrassBase) as typeof GrassBase;
Grass.displayName = "Grass";
