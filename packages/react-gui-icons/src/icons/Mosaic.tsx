"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "mosaic" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-mosaic",
    viewBox: "0 0 16 16",
    paths: [
      "M1 1.86 5.562 3h4.876L15 1.86v12.28L10.438 13H5.562L1 14.14ZM6 6h4V4H6Zm0 6h4v-2H6Zm0-3h4V7H6ZM5 6.941l-3-.375v2.868l3-.375Zm9-.375-3 .375v2.118l3 .375ZM5 3.89l-3-.75v2.419l3 .375Zm6 0v2.044l3-.375V3.14Zm-6 6.176-3 .375v2.419l3-.75Zm9 .375-3-.375v2.044l3 .75Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-mosaic",
    viewBox: "0 0 16 16",
    paths: [
      "M1 1.86 5.562 3h4.876L15 1.86v12.28L10.438 13H5.562L1 14.14ZM6 6h4V4H6Zm0 6h4v-2H6Zm0-3h4V7H6ZM5 6.941l-3-.375v2.868l3-.375Zm9-.375-3 .375v2.118l3 .375ZM5 3.89l-3-.75v2.419l3 .375Zm6 0v2.044l3-.375V3.14Zm-6 6.176-3 .375v2.419l3-.75Zm9 .375-3-.375v2.044l3 .75Z",
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

const MosaicBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "mosaic",
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
MosaicBase.displayName = "Mosaic";

export const Mosaic = memo(MosaicBase) as typeof MosaicBase;
Mosaic.displayName = "Mosaic";
