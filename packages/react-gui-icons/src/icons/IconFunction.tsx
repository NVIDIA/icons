"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "function" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-function",
    viewBox: "0 0 16 16",
    paths: [
      "M9.211 4.025a.727.727 0 0 0-.891.514L7.661 7H8.5v1H7.393l-.997 3.719A1.728 1.728 0 0 1 3 11.272h1a.729.729 0 0 0 1.43.188L6.357 8H5.5V7h1.125l.729-2.72a1.728 1.728 0 0 1 3.396.447h-1a.73.73 0 0 0-.539-.702M10.293 11 8.646 9.354l.708-.708L11 10.293l1.646-1.647.708.708L11.707 11l1.647 1.646-.708.708L11 11.707l-1.646 1.647-.708-.708Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-function",
    viewBox: "0 0 16 16",
    paths: [
      "M8.32 4.539a.727.727 0 0 1 1.43.188h1a1.727 1.727 0 0 0-3.396-.447L6.625 7H5.5v1h.857l-.927 3.46A.728.728 0 0 1 4 11.272H3a1.729 1.729 0 0 0 3.396.447L7.393 8H8.5V7h-.839zM10.293 11 8.646 9.354l.708-.708L11 10.293l1.646-1.647.708.708L11.707 11l1.647 1.646-.708.708L11 11.707l-1.646 1.647-.708-.708z",
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

const IconFunctionBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "function",
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
IconFunctionBase.displayName = "IconFunction";

export const IconFunction = memo(IconFunctionBase) as typeof IconFunctionBase;
IconFunction.displayName = "IconFunction";
