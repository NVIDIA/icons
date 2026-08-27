"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "tree" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-tree",
    viewBox: "0 0 16 16",
    paths: [
      "M6.473 2.037a2.5 2.5 0 0 1 4.504 1.126 3 3 0 0 1 .751 5.29A4 4 0 0 1 8.5 10.969V13H13v1H3v-1h4.5v-2.031a4 4 0 0 1-2.151-.973A2.5 2.5 0 0 1 3.301 6.31a3 3 0 0 1 3.172-4.273M8.5 2a1.5 1.5 0 0 0-1.341.827l-.188.374-.401-.119a2 2 0 0 0-2.266 2.979l.179.286-.198.273A1.5 1.5 0 0 0 5.5 9h.038l.211-.006.151.148a3 3 0 0 0 4.941-1.176l.058-.17.152-.094A1.999 1.999 0 0 0 10.4 4.04l-.411-.083.011-.419V3.5A1.5 1.5 0 0 0 8.5 2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-tree",
    viewBox: "0 0 16 16",
    paths: [
      "M6.473 2.037a2.5 2.5 0 0 1 4.504 1.126 3 3 0 0 1 .751 5.29A4 4 0 0 1 8.5 10.969V13H13v1H3v-1h4.5v-2.031a4 4 0 0 1-2.151-.973A2.5 2.5 0 0 1 3.301 6.31a3 3 0 0 1 3.172-4.273",
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

const TreeBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "tree",
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
TreeBase.displayName = "Tree";

export const Tree = memo(TreeBase) as typeof TreeBase;
Tree.displayName = "Tree";
