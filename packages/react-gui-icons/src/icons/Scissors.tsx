"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "scissors" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-scissors",
    viewBox: "0 0 16 16",
    paths: [
      "M2 4.5a2.5 2.5 0 1 1 4.45 1.564l2.354 1.359 4.946-2.856.5.866L9.804 8l4.446 2.567-.5.866-4.946-2.856L6.45 9.936a2.5 2.5 0 1 1-.833-.673L7.804 8 5.617 6.737A2.5 2.5 0 0 1 2 4.5M4.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 3m0 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 10",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-scissors",
    viewBox: "0 0 16 16",
    paths: [
      "M2 4.5a2.5 2.5 0 1 1 4.45 1.564l2.354 1.359 4.946-2.856.5.866L9.804 8l4.446 2.567-.5.866-4.946-2.856L6.45 9.936a2.5 2.5 0 1 1-.833-.673L7.804 8 5.617 6.737A2.5 2.5 0 0 1 2 4.5M4.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 3m0 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 10",
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

const ScissorsBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "scissors",
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
ScissorsBase.displayName = "Scissors";

export const Scissors = memo(ScissorsBase) as typeof ScissorsBase;
Scissors.displayName = "Scissors";
