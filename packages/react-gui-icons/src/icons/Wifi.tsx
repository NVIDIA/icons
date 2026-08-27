"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "wifi" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-wifi",
    viewBox: "0 0 16 16",
    paths: [
      "M8 4a8.97 8.97 0 0 0-6.364 2.636l-.707-.707A9.97 9.97 0 0 1 8 3a9.97 9.97 0 0 1 7.071 2.929l-.707.707A8.97 8.97 0 0 0 8 4m-2 7a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 11m2-4a5.98 5.98 0 0 0-4.243 1.757L3.05 8.05A6.98 6.98 0 0 1 8 6a6.98 6.98 0 0 1 4.95 2.05l-.707.707A5.98 5.98 0 0 0 8 7m0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-wifi",
    viewBox: "0 0 16 16",
    paths: [
      "M1.636 6.636A8.97 8.97 0 0 1 8 4a8.97 8.97 0 0 1 6.364 2.636l.707-.707A9.97 9.97 0 0 0 8 3 9.97 9.97 0 0 0 .929 5.929z",
      "M3.757 8.757A5.98 5.98 0 0 1 8 7c1.657 0 3.156.671 4.243 1.757l.707-.707A6.98 6.98 0 0 0 8 6a6.98 6.98 0 0 0-4.95 2.05zM8 9a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 9",
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

const WifiBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "wifi",
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
WifiBase.displayName = "Wifi";

export const Wifi = memo(WifiBase) as typeof WifiBase;
Wifi.displayName = "Wifi";
