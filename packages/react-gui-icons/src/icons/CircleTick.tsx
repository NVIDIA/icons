"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "circle-tick" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-circle-tick",
    viewBox: "0 0 16 16",
    paths: [
      "m6.232 10.475-2.121 2.121-.707-.707 2.121-2.121Zm6.364-6.364-2.121 2.121-.707-.707 2.121-2.121ZM5.525 6.232 3.404 4.111l.707-.707 2.121 2.121ZM7.5 5V2h1v3ZM5 8.5H2v-1h3Zm9 0h-3v-1h3ZM7.5 14v-3h1v3Zm4.389-1.404-2.078-2.077.708-.707 2.077 2.077Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-circle-tick",
    viewBox: "0 0 16 16",
    paths: [
      "m6.232 10.475-2.121 2.121-.707-.707 2.121-2.121Zm6.364-6.364-2.121 2.121-.707-.707 2.121-2.121ZM5.525 6.232 3.404 4.111l.707-.707 2.121 2.121ZM7.5 5V2h1v3ZM5 8.5H2v-1h3Zm9 0h-3v-1h3ZM7.5 14v-3h1v3Zm4.389-1.404-2.078-2.077.708-.707 2.077 2.077Z",
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

const CircleTickBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "circle-tick",
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
CircleTickBase.displayName = "CircleTick";

export const CircleTick = memo(CircleTickBase) as typeof CircleTickBase;
CircleTick.displayName = "CircleTick";
