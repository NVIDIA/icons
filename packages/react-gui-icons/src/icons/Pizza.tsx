"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "pizza" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-pizza",
    viewBox: "0 0 16 16",
    paths: [
      "M8.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 7M8 8.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0",
      "M3.5 2c4.627 0 8.666 2.514 10.827 6.249l.251.433L3 15.366V2ZM4 8.915v4.719l1.608-.928A1.499 1.499 0 1 1 7.99 11.33l3.477-2.007A9.5 9.5 0 0 0 4 5.013v1.072q.236-.084.5-.085A1.5 1.5 0 1 1 4 8.915m0-4.903c3.5.164 6.551 2.041 8.334 4.81l.867-.5A11.49 11.49 0 0 0 4 3.011ZM4 7.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M6.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-pizza",
    viewBox: "0 0 16 16",
    paths: [
      "M3.5 2H3v2h.5c3.887 0 7.28 2.112 9.095 5.249l.25.433 1.733-1-.251-.433A12.5 12.5 0 0 0 3.5 2",
      "M3 15.366V5h.5a9.5 9.5 0 0 1 8.229 4.75l.25.432ZM6.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-4-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0",
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

const PizzaBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "pizza",
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
PizzaBase.displayName = "Pizza";

export const Pizza = memo(PizzaBase) as typeof PizzaBase;
Pizza.displayName = "Pizza";
