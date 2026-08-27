"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "wheel" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-wheel",
    viewBox: "0 0 16 16",
    paths: [
      "M2.203 6.447A6.002 6.002 0 0 1 14 8 6 6 0 1 1 2.203 6.447m1.12-.218 3.44.922a1.5 1.5 0 0 1 2.474 0l3.44-.922a5.003 5.003 0 0 0-9.354 0M7.5 12.975v-3.56a1.5 1.5 0 0 1-.996-1.298l-3.44-.922a5 5 0 0 0 4.436 5.78m5.436-5.78-3.441.922A1.5 1.5 0 0 1 8.5 9.415v3.56a5 5 0 0 0 4.436-5.78M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-wheel",
    viewBox: "0 0 16 16",
    paths: [
      "M2.203 6.447A6.002 6.002 0 0 1 14 8 6 6 0 1 1 2.203 6.447m4.979.296a1.5 1.5 0 0 1 1.636 0c.165.107.307.246.419.408l3.44-.922a5.003 5.003 0 0 0-9.354 0l3.44.922c.112-.162.254-.301.419-.408M7.5 9.415a1.5 1.5 0 0 1-.996-1.298l-3.44-.922a5 5 0 0 0 4.436 5.78Zm1.995-1.298A1.5 1.5 0 0 1 8.5 9.415v3.56a5 5 0 0 0 4.436-5.78Z",
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

const WheelBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "wheel",
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
WheelBase.displayName = "Wheel";

export const Wheel = memo(WheelBase) as typeof WheelBase;
Wheel.displayName = "Wheel";
