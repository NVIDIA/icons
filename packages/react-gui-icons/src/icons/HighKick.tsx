"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "high-kick" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-high-kick",
    viewBox: "0 0 16 16",
    paths: [
      "m9.759 4.877-3.293.883 2.115 2.116 5.669-3.273.5.866L9 8.79V15H8l-.001-6.292L5.5 6.207 4.13 7.578l1.299 2.165-.858.514-1.7-2.834 2.37-2.371 2.999-.804L7.087 2.25l.866-.5z",
      "M4.5 2a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4.5 2m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-high-kick",
    viewBox: "0 0 16 16",
    paths: [
      "m9.759 4.876-3.293.884 2.115 2.116 5.669-3.273.5.866L8.999 8.79V15L8 14.999l-.001-6.291L5.5 6.207 4.13 7.578l1.299 2.165-.858.514-1.7-2.834 2.37-2.371 2.999-.804L7.087 2.25l.866-.5z",
      "M4.5 2a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4.5 2",
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

const HighKickBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "high-kick",
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
HighKickBase.displayName = "HighKick";

export const HighKick = memo(HighKickBase) as typeof HighKickBase;
HighKick.displayName = "HighKick";
