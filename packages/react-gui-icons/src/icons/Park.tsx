"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "park" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-park",
    viewBox: "0 0 16 16",
    paths: [
      "M11.5 1a3.5 3.5 0 0 1 3.355 4.5A3.502 3.502 0 0 1 12 9.965V13h1.5v1H2v-1h.882l2-1-2-1H2.5v-1h7v1h-.382l-2 1 2 1H11V9.965A3.502 3.502 0 0 1 8.145 5.5 3.5 3.5 0 0 1 11.5 1M9 4.5c0 .293.05.573.142.833l.059.167-.059.167a2.5 2.5 0 1 0 4.716 0l-.059-.167.059-.167q.14-.392.142-.833a2.5 2.5 0 1 0-5 0m-3 6.941L6.882 11H5.118ZM6.882 13 6 12.559 5.118 13Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-park",
    viewBox: "0 0 16 16",
    paths: [
      "M11.5 1a3.5 3.5 0 0 1 3.355 4.5A3.502 3.502 0 0 1 12 9.965V13h1.5v1H2v-1h.882l2-1-2-1H2.5v-1h7v1h-.382l-2 1 2 1H11V9.965A3.502 3.502 0 0 1 8.145 5.5 3.5 3.5 0 0 1 11.5 1M5.118 11l.882.441.882-.441ZM6 12.559 5.118 13h1.764Z",
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

const ParkBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "park",
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
ParkBase.displayName = "Park";

export const Park = memo(ParkBase) as typeof ParkBase;
Park.displayName = "Park";
