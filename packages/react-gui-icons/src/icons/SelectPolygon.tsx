"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "select-polygon" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-select-polygon",
    viewBox: "0 0 16 16",
    paths: [
      "M4 2H2v2h1V3h1zm5.5 0h-3v1h3zM2 6.5v3h1v-3zM3 12H2v2h2v-1H3zm3.5 2h3v-1h-3zm7.707-12H12v.793l-.354.353.708.708zm-3.561 2.146-1.499 1.5.707.708 1.5-1.5zM8.854 7.354l-.707-.708L6.793 8l1.354 1.354.707-.708L8.207 8zm.293 3 1.499 1.5.708-.708-1.5-1.5zm2.499 2.5.354.353V14h2.207l-1.853-1.854z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-select-polygon",
    viewBox: "0 0 16 16",
    paths: [
      "M2 2h2v1H3v1H2Zm4.5 0h3v1h-3ZM2 9.5v-3h1v3ZM2 12h1v1h1v1H2Zm7.5 2h-3v-1h3ZM8.146 6.646l.708.708L8.207 8l.647.646-.708.708L6.793 8ZM12 13.207l-.354-.353.708-.708L14.207 14H12ZM12 2h2.207l-1.853 1.854-.708-.708.354-.353Zm-1.354 9.854-1.5-1.5.708-.708 1.5 1.5Zm-1.5-6.208 1.5-1.5.708.708-1.5 1.5Z",
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

const SelectPolygonBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "select-polygon",
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
SelectPolygonBase.displayName = "SelectPolygon";

export const SelectPolygon = memo(
  SelectPolygonBase,
) as typeof SelectPolygonBase;
SelectPolygon.displayName = "SelectPolygon";
