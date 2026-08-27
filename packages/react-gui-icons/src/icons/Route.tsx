"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "route" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-route",
    viewBox: "0 0 16 16",
    paths: [
      "M11.642 9.939c-.337.426-.728.783-1.142 1.13-.414-.347-.805-.704-1.142-1.13-.391-.494-.858-1.241-.858-2.057C8.5 6.875 9.421 6 10.5 6s2 .875 2 1.882c0 .816-.467 1.563-.858 2.057M10.5 7c-.578 0-1 .477-1 .882 0 .464.283.983.642 1.437.124.157.249.295.358.408.109-.113.234-.251.358-.408.359-.454.642-.973.642-1.437 0-.405-.422-.882-1-.882",
      "M14.5 1.779v10.568l-4.47 1.676L6 13.016l-4.5 1.125V3.11l4.53-1.133L10 3.466Zm-12 7.928v3.153l3.5-.875 3.97.992 3.53-1.323V3.222L10 4.534 5.97 3.023 2.5 3.89v4.403l1.5-1.5 2 2L6.793 8H8v1h-.793L6 10.207l-2-2Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-route",
    viewBox: "0 0 16 16",
    paths: [
      "m14.5 12.347-4.47 1.676L6 13.016l-4.5 1.125v-3.434l2.5-2.5 2 2L7.207 9H8V8H6.793L6 8.793l-2-2-2.5 2.5V3.11l4.53-1.133L10 3.466l4.5-1.687Zm-2.858-2.408c.391-.494.858-1.241.858-2.057 0-1.007-.921-1.882-2-1.882s-2 .875-2 1.882c0 .816.467 1.563.858 2.057.337.426.728.783 1.142 1.13.414-.347.805-.704 1.142-1.13",
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

const RouteBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "route",
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
RouteBase.displayName = "Route";

export const Route = memo(RouteBase) as typeof RouteBase;
Route.displayName = "Route";
