"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "sky" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-sky",
    viewBox: "0 0 16 16",
    paths: [
      "M10.829 13H14v1H2v-1h3.171a3 3 0 1 1 5.658 0M8 10a2 2 0 0 0-1.733 3h3.466A2 2 0 0 0 8 10M6.191 2.487c-.37.056-.609.284-.676.61l-.2.98-.664-.749c-.22-.249-.541-.326-.889-.19-.359.14-.778.53-1.031 1.278l-.948-.32c.325-.959.919-1.618 1.615-1.889.476-.186.983-.18 1.422.023a1.8 1.8 0 0 1 1.22-.731c.738-.113 1.582.16 2.343.829l-.66.751c-.594-.522-1.152-.65-1.532-.592m4.99 2.743a1.8 1.8 0 0 1 1.422-.024c.696.272 1.29.931 1.614 1.89l-.947.32c-.253-.748-.672-1.138-1.031-1.278-.348-.136-.669-.059-.89.19l-.663.749-.201-.98c-.066-.326-.305-.554-.675-.61-.381-.058-.938.07-1.532.592l-.66-.752c.76-.668 1.604-.941 2.343-.829.505.077.941.336 1.22.732",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-sky",
    viewBox: "0 0 16 16",
    paths: [
      "M4.82 2.23a1.8 1.8 0 0 0-1.422-.023c-.696.271-1.29.93-1.615 1.889l.948.32c.253-.748.672-1.138 1.031-1.278.348-.136.669-.059.889.19l.664.749.2-.98c.067-.326.306-.554.676-.61.38-.058.938.07 1.532.592l.66-.751c-.761-.669-1.605-.942-2.343-.829a1.8 1.8 0 0 0-1.22.731M5 12a3 3 0 1 1 5.829 1H14v1H2v-1h3.171A3 3 0 0 1 5 12m4.961-7.502c.505.077.941.336 1.22.732a1.8 1.8 0 0 1 1.422-.024c.696.272 1.29.931 1.614 1.89l-.947.32c-.253-.748-.672-1.138-1.031-1.278-.348-.136-.669-.059-.89.19l-.663.749-.201-.98c-.066-.326-.305-.554-.675-.61-.381-.058-.938.07-1.532.592l-.66-.751c.76-.669 1.604-.942 2.343-.83",
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

const SkyBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "sky",
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
SkyBase.displayName = "Sky";

export const Sky = memo(SkyBase) as typeof SkyBase;
Sky.displayName = "Sky";
