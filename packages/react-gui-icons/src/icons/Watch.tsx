"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "watch" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-watch",
    viewBox: "0 0 16 16",
    paths: [
      "M5 1h6v3a5 5 0 0 1 1.9 3h.6v2h-.6a5 5 0 0 1-1.9 3v3H5v-3a5 5 0 0 1-2-4c0-1.636.786-3.088 2-4Zm3 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m.408 3.592 2.137.572-.259.966-2.694-.722-.722-2.694.966-.259ZM6 3.416A5 5 0 0 1 8 3c.711 0 1.388.148 2 .416V2H6Zm0 9.168V14h4v-1.416A5 5 0 0 1 8 13a5 5 0 0 1-2-.416",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-watch",
    viewBox: "0 0 16 16",
    paths: [
      "M11 1H5v1.803A5.97 5.97 0 0 1 8 2c1.093 0 2.117.292 3 .803zm0 11c-.836.628-1.874 1-3 1a4.98 4.98 0 0 1-3-1 5 5 0 0 1-2-4c0-1.636.786-3.088 2-4 .836-.628 1.874-1 3-1s2.164.372 3 1a5 5 0 0 1 1.9 3h.6v2h-.6a5 5 0 0 1-1.9 3M7.836 5.455l-.966.259.722 2.694 2.694.722.259-.966-2.137-.572ZM5 13.197A5.97 5.97 0 0 0 8 14a5.97 5.97 0 0 0 3-.803V15H5z",
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

const WatchBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "watch",
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
WatchBase.displayName = "Watch";

export const Watch = memo(WatchBase) as typeof WatchBase;
Watch.displayName = "Watch";
