"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "ranking-xp" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-ranking-xp",
    viewBox: "0 0 16 16",
    paths: [
      "M5.5 6h-1v1.44l.7.56-.7.56V10h1v-.96l.5-.4.5.4V10h1V8.56L6.8 8l.7-.56V6h-1v.96l-.5.4-.5-.4zM11 6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1v1H9V6Zm-1 2h1V7h-1Z",
      "M14.001 4.536v6.928l-6 3.464-6-3.464V4.536l6-3.464Zm-11 6.351 5 2.887 5-2.887V5.113l-5-2.887-5 2.887Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-ranking-xp",
    viewBox: "0 0 16 16",
    paths: [
      "M10 8h1V7h-1z",
      "m8.001 1.072 6 3.464v6.928l-6 3.464-6-3.464V4.536ZM11 6H9v4h1V9h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1M5.5 6h-1v1.44l.7.56-.7.56V10h1v-.96l.5-.4.5.4V10h1V8.56L6.8 8l.7-.56V6h-1v.96l-.5.4-.5-.4Z",
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

const RankingXpBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "ranking-xp",
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
RankingXpBase.displayName = "RankingXp";

export const RankingXp = memo(RankingXpBase) as typeof RankingXpBase;
RankingXp.displayName = "RankingXp";
