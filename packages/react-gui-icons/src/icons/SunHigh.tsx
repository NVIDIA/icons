"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "sun-high" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-sun-high",
    viewBox: "0 0 16 16",
    paths: [
      "M5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6m-.5-2V2h1v2ZM4 8.5H2v-1h2Zm10 0h-2v-1h2ZM8.5 12v2h-1v-2ZM4.818 5.525 3.404 4.111l.707-.707 1.414 1.414Zm6.364 0-.707-.707 1.414-1.414.707.707Zm-7.071 7.071-.707-.707 1.414-1.414.707.707Zm7.778 0-1.414-1.414.707-.707 1.414 1.414Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-sun-high",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 2v2h1V2zM3.404 4.111l1.414 1.414.707-.707-1.414-1.414zm7.071.707.707.707 1.414-1.414-.707-.707zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M2 8.5h2v-1H2zm10 0h2v-1h-2zm-8.596 3.389.707.707 1.414-1.414-.707-.707zm7.071-.707 1.414 1.414.707-.707-1.414-1.414zM8.5 14v-2h-1v2z",
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

const SunHighBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "sun-high",
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
SunHighBase.displayName = "SunHigh";

export const SunHigh = memo(SunHighBase) as typeof SunHighBase;
SunHigh.displayName = "SunHigh";
