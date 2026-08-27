"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "chart-pie" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-chart-pie",
    viewBox: "0 0 16 16",
    paths: [
      "m5.961 2.323 1.631 6.085 6.085 1.631-.259.542A6.002 6.002 0 0 1 2 8a6 6 0 0 1 3.418-5.418ZM5.316 3.78a5 5 0 1 0 6.904 6.904L6.775 9.225Zm2.211-1.762Q7.761 2 8 2a6 6 0 0 1 5.982 6.473l-.047.6-5.527-1.481-1.481-5.527Zm.687.987 1.011 3.77 3.77 1.011a5 5 0 0 0-4.781-4.781",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-chart-pie",
    viewBox: "0 0 16 16",
    paths: [
      "M8 2q-.239 0-.473.018l-.6.047 1.481 5.527 5.527 1.481.047-.6Q14 8.239 14 8a6 6 0 0 0-6-6",
      "M7.592 8.408 5.961 2.323l-.543.259A6.003 6.003 0 0 0 8 14a6 6 0 0 0 5.418-3.419l.259-.542z",
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

const ChartPieBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "chart-pie",
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
ChartPieBase.displayName = "ChartPie";

export const ChartPie = memo(ChartPieBase) as typeof ChartPieBase;
ChartPie.displayName = "ChartPie";
