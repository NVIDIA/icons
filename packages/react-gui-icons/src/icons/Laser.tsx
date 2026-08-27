"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "laser" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-laser",
    viewBox: "0 0 16 16",
    paths: [
      "M11.924 2.265 9.825 5.621q.317.245.561.564l1.857-1.114.514.858-1.905 1.141q.067.209.105.43H15v1h-4.043q-.038.22-.105.429l1.905 1.142-.514.858-1.857-1.115q-.244.32-.561.564l2.099 3.357-.848.53-2.136-3.417a3 3 0 0 1-.44.109V13h-1v-2.043a3 3 0 0 1-.441-.109l-2.135 3.417-.848-.53 2.098-3.357a3 3 0 0 1-.561-.564l-1.856 1.115-.514-.858 1.904-1.142a3 3 0 0 1-.104-.429H1v-1h4.043q.037-.221.104-.43L3.243 5.929l.514-.858 1.856 1.114q.243-.319.561-.563L4.076 2.265l.848-.53 2.135 3.416a3 3 0 0 1 .441-.109V3h1v2.042q.227.038.44.109l2.136-3.416zM8 6c-1.086 0-2 .912-2 2s.914 2 2 2c1.088 0 2-.914 2-2s-.912-2-2-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-laser",
    viewBox: "0 0 16 16",
    paths: [
      "M11.924 2.265 9.825 5.621q.317.245.561.564l1.857-1.114.514.858-1.905 1.141q.067.209.105.43H15v1h-4.043q-.038.22-.105.429l1.905 1.142-.514.858-1.857-1.115q-.244.32-.561.564l2.099 3.357-.848.53-2.136-3.417a3 3 0 0 1-.44.109V13h-1v-2.043a3 3 0 0 1-.441-.109l-2.135 3.417-.848-.53 2.098-3.357a3 3 0 0 1-.561-.564l-1.856 1.115-.514-.858 1.904-1.142a3 3 0 0 1-.104-.429H1v-1h4.043q.037-.221.104-.43L3.243 5.929l.514-.858 1.856 1.114q.243-.319.561-.563L4.076 2.265l.848-.53 2.135 3.416a3 3 0 0 1 .441-.109V3h1v2.042q.227.038.44.109l2.136-3.416ZM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
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

const LaserBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "laser",
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
LaserBase.displayName = "Laser";

export const Laser = memo(LaserBase) as typeof LaserBase;
Laser.displayName = "Laser";
