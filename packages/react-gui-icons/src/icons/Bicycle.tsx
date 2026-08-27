"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "bicycle" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-bicycle",
    viewBox: "0 0 16 16",
    paths: [
      "M7 5v1H5.955l-.338 1.263A2.5 2.5 0 0 1 6.95 9h.357l-.281-.842.949-.316L8.361 9h.689a2.5 2.5 0 0 1 2.601-1.995L11.92 6H11V5h3v1h-1.044l-.339 1.263A2.5 2.5 0 1 1 9.05 10h-.356l.281.842-.949.316L7.64 10h-.69a2.5 2.5 0 1 1-2.299-2.996L5.188 5Zm5.349 3.263-.366 1.366-.966-.258.366-1.367a1.5 1.5 0 1 0 .966.259M4.017 9.371l.366-1.366a1.499 1.499 0 1 0 .966.258l-.366 1.366Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-bicycle",
    viewBox: "0 0 16 16",
    paths: [
      "M7 5v1H5.955l-.338 1.263A2.5 2.5 0 0 1 6.95 9h.357l-.281-.842.949-.316L8.361 9h.689a2.5 2.5 0 0 1 2.601-1.995L11.92 6H11V5h3v1h-1.044l-.339 1.263A2.5 2.5 0 1 1 9.05 10h-.356l.281.842-.949.316L7.64 10h-.69a2.5 2.5 0 1 1-2.299-2.996L5.188 5z",
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

const BicycleBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "bicycle",
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
BicycleBase.displayName = "Bicycle";

export const Bicycle = memo(BicycleBase) as typeof BicycleBase;
Bicycle.displayName = "Bicycle";
