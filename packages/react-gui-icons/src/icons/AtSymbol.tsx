"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "at-symbol" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-at-symbol",
    viewBox: "0 0 16 16",
    paths: [
      "M4.293 2h7.414L14 4.293v4.414l-1.984 1.985-2.367-.634-.942.942H5.793L5 10.207V8.793l.741-.741L9 7.179v-.972L8.793 6H6.207l-.353.354-.708-.708L5.793 5h3.414l.793.793v3.323l1.717.46L13 8.293V4.707L11.293 3H4.707L3 4.707v6.586L4.707 13h6.586l.853-.854.708.708L11.707 14H4.293L2 11.707V4.293ZM9 9.293V8.214l-2.741.734L6 9.207v.586l.207.207h2.086Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-at-symbol",
    viewBox: "0 0 16 16",
    paths: [
      "M4.293 2h7.414L14 4.293v4.414l-1.984 1.985-2.367-.634-.942.942H5.793L5 10.207V8.793l.741-.741L9 7.179v-.972L8.793 6H6.207l-.353.354-.708-.708L5.793 5h3.414l.793.793v3.323l1.717.46L13 8.293V4.707L11.293 3H4.707L3 4.707v6.586L4.707 13h6.586l.853-.854.708.708L11.707 14H4.293L2 11.707V4.293ZM9 9.293V8.214l-2.741.734L6 9.207v.586l.207.207h2.086Z",
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

const AtSymbolBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "at-symbol",
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
AtSymbolBase.displayName = "AtSymbol";

export const AtSymbol = memo(AtSymbolBase) as typeof AtSymbolBase;
AtSymbol.displayName = "AtSymbol";
