"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "sun-off-high" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-sun-off-high",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-3.908-3.909a3 3 0 0 1-4.183-4.183L1.646 2.354Zm3.923 5.338a2 2 0 0 0 2.739 2.739ZM11 8q0 .084-.005.167L7.833 5.005Q7.916 5 8 5a3 3 0 0 1 3 3M7.5 4V2h1v2zm3.682 1.525-.707-.707 1.414-1.414.707.707zM4 8.5H2v-1h2zm10 0h-2v-1h2zm-9.889 4.096-.707-.707 1.414-1.414.707.707z",
      "M8.5 12v2h-1v-2z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-sun-off-high",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-3.908-3.909a3 3 0 0 1-4.183-4.183L1.646 2.354zM11 8q0 .084-.005.167L7.833 5.005Q7.916 5 8 5a3 3 0 0 1 3 3M7.5 4V2h1v2zm2.975.818.707.707 1.414-1.414-.707-.707zM2 8.5h2v-1H2zm12 0h-2v-1h2zM3.404 11.889l.707.707 1.414-1.414-.707-.707z",
      "M8.5 14v-2h-1v2z",
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

const SunOffHighBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "sun-off-high",
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
SunOffHighBase.displayName = "SunOffHigh";

export const SunOffHigh = memo(SunOffHighBase) as typeof SunOffHighBase;
SunOffHigh.displayName = "SunOffHigh";
