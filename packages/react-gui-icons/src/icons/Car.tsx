"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "car" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-car",
    viewBox: "0 0 16 16",
    paths: [
      "M3.11 3h9.781l.625 2.5h.845l.833 2.5H14v1.562L13.39 12H13v1h-2v-1H5v1H3v-1h-.39L2 9.562V8H.806l.834-2.5h.845ZM3 8v1.438L3.391 11h9.219L13 9.438V8Zm9.86-1-.75-3H8.5v.5H9v1H7v-1h.5V4H3.891l-.75 3H8.5c0-.495.301-.883.662-1.123.364-.243.839-.377 1.338-.377s.974.134 1.338.377c.361.24.662.628.662 1.123ZM6 10H4V9h2Zm6 0h-2V9h2ZM9.717 6.709C9.535 6.83 9.5 6.943 9.5 7h2c0-.057-.035-.17-.217-.291A1.44 1.44 0 0 0 10.5 6.5c-.329 0-.605.09-.783.209",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-car",
    viewBox: "0 0 16 16",
    paths: [
      "m12.89 3 .625 2.5h.845l.834 2.5H14v1.562L13.39 12H13v1h-2v-1H5v1H3v-1h-.391L2 9.562V8H.806l.833-2.5h.845L3.109 3Zm-.031 4-.75-3H8.5v.5H9v1H7v-1h.5V4H3.89l-.75 3H8.5c0-.495.301-.883.662-1.123.364-.243.839-.377 1.338-.377s.974.134 1.338.377c.361.24.662.628.662 1.123ZM12 10V9h-2v1Zm-6 0V9H4v1Zm5.5-3c0-.057-.035-.17-.217-.291A1.44 1.44 0 0 0 10.5 6.5c-.329 0-.605.09-.783.209-.182.121-.217.234-.217.291Z",
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

const CarBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "car",
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
CarBase.displayName = "Car";

export const Car = memo(CarBase) as typeof CarBase;
Car.displayName = "Car";
