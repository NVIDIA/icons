"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "light-rect" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-light-rect",
    viewBox: "0 0 16 16",
    paths: [
      "M2 2h12v12H2Zm1 1v10h10V3Zm2 4a3 3 0 1 1 6 0c0 .895-.54 1.575-.965 2.037-.098.106-.196.207-.284.298l-.031.032a7 7 0 0 0-.25.266c-.07.079-.11.135-.132.173l-.005.008v1.004l-.848.849h-.97l-.848-.849V9.814l-.005-.008a1 1 0 0 0-.132-.173 7 7 0 0 0-.281-.298c-.088-.091-.186-.192-.283-.298C5.54 8.575 5 7.895 5 7m3-2a2 2 0 0 0-2 2c0 .486.293.917.701 1.36q.133.143.266.279l.031.032c.097.099.197.203.285.303.079.092.162.194.229.304h.976c.067-.11.15-.212.229-.304.088-.1.188-.204.285-.303l.031-.032q.133-.136.266-.279C9.707 7.917 10 7.486 10 7a2 2 0 0 0-2-2m0 2.441.776-.388.448.894L8 8.559l-1.224-.612.448-.894Zm.333 2.837h-.666v.126l.262.263h.142l.262-.263Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-light-rect",
    viewBox: "0 0 16 16",
    paths: [
      "M7.224 7.053 8 7.441l.776-.388.448.894L8 8.559l-1.224-.612z",
      "M2 2h12v12H2Zm6 2a3 3 0 0 0-3 3c0 .895.54 1.575.966 2.037q.118.129.228.241h3.612q.11-.112.229-.241C10.46 8.575 11 7.895 11 7a3 3 0 0 0-3-3m-1.333 6.818.848.849h.97l.848-.849v-.54H6.667Z",
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

const LightRectBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "light-rect",
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
LightRectBase.displayName = "LightRect";

export const LightRect = memo(LightRectBase) as typeof LightRectBase;
LightRect.displayName = "LightRect";
