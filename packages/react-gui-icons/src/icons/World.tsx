"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "world" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-world",
    viewBox: "0 0 16 16",
    paths: [
      "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m1.957 5H6.043a11.6 11.6 0 0 0 0 2h3.914a11.6 11.6 0 0 0 0-2M8 3c-.374 0-.875.356-1.313 1.318A7.4 7.4 0 0 0 6.179 6h3.642a7.4 7.4 0 0 0-.508-1.682C8.875 3.356 8.374 3 8 3m1.821 7H6.179c.12.642.295 1.212.508 1.682C7.125 12.644 7.626 13 8 13s.875-.356 1.313-1.318c.213-.47.388-1.04.508-1.682m1.139-1h1.94a5 5 0 0 0 0-2h-1.94a12.6 12.6 0 0 1 0 2M3.1 7a5 5 0 0 0 0 2h1.94Q5 8.51 5 8t.04-1Zm6.862 5.6a5.02 5.02 0 0 0 2.622-2.6h-1.747a8.6 8.6 0 0 1-.614 2.096 5 5 0 0 1-.261.504m.875-6.6h1.747a5.02 5.02 0 0 0-2.622-2.6q.143.242.261.504c.271.597.481 1.31.614 2.096m-4.799 6.6a5 5 0 0 1-.261-.504A8.6 8.6 0 0 1 5.163 10H3.416a5.02 5.02 0 0 0 2.622 2.6M3.416 6h1.747a8.6 8.6 0 0 1 .614-2.096q.118-.262.261-.504A5.02 5.02 0 0 0 3.416 6",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-world",
    viewBox: "0 0 16 16",
    paths: [
      "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m1.957 5H6.043a11.6 11.6 0 0 0 0 2h3.914a11.6 11.6 0 0 0 0-2M8 3c-.374 0-.875.356-1.313 1.318A7.4 7.4 0 0 0 6.179 6h3.642a7.4 7.4 0 0 0-.508-1.682C8.875 3.356 8.374 3 8 3m1.821 7H6.179c.12.642.295 1.212.508 1.682C7.125 12.644 7.626 13 8 13s.875-.356 1.313-1.318c.213-.47.388-1.04.508-1.682m1.139-1h1.94a5 5 0 0 0 0-2h-1.94a12.6 12.6 0 0 1 0 2M3.1 7a5 5 0 0 0 0 2h1.94Q5 8.51 5 8t.04-1Zm6.862 5.6a5.02 5.02 0 0 0 2.622-2.6h-1.747a8.6 8.6 0 0 1-.614 2.096 5 5 0 0 1-.261.504m.875-6.6h1.747a5.02 5.02 0 0 0-2.622-2.6q.143.242.261.504c.271.597.481 1.31.614 2.096m-4.799 6.6a5 5 0 0 1-.261-.504A8.6 8.6 0 0 1 5.163 10H3.416a5.02 5.02 0 0 0 2.622 2.6M3.416 6h1.747a8.6 8.6 0 0 1 .614-2.096q.118-.262.261-.504A5.02 5.02 0 0 0 3.416 6",
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

const WorldBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "world",
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
WorldBase.displayName = "World";

export const World = memo(WorldBase) as typeof WorldBase;
World.displayName = "World";
