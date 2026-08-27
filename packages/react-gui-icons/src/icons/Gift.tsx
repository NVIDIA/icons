"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "gift" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-gift",
    viewBox: "0 0 16 16",
    paths: [
      "M4.268 4A2 2 0 0 1 6 1c.513 0 1.165.157 1.681.727q.177.193.319.442.142-.249.319-.442C8.835 1.157 9.487 1 10 1a2 2 0 0 1 1.732 3H14.5v3H14v7H2V7h-.5V4ZM6 7H3v6h10V7h-3v3.934L8 9.601l-2 1.333Zm1-2v4.066l1-.667 1 .667V5Zm3-1a1 1 0 0 0 0-2c-.315 0-.663.093-.94.398-.24.265-.476.744-.542 1.602ZM5 3a1 1 0 0 0 1 1h1.482c-.066-.858-.302-1.337-.542-1.602A1.23 1.23 0 0 0 6 2a1 1 0 0 0-1 1m1 2H2.5v1H6Zm4 1h3.5V5H10Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-gift",
    viewBox: "0 0 16 16",
    paths: [
      "M1.5 4h2.768A2 2 0 0 1 6 1c.513 0 1.165.157 1.681.727q.177.193.319.442.142-.249.319-.442C8.835 1.157 9.487 1 10 1a2 2 0 0 1 1.732 3H14.5v2h-5V5h-3v1h-5ZM11 3a1 1 0 0 0-1-1c-.315 0-.663.093-.94.398-.24.265-.476.744-.542 1.602H10a1 1 0 0 0 1-1M6 2a1 1 0 0 0 0 2h1.482c-.066-.858-.302-1.337-.542-1.602A1.23 1.23 0 0 0 6 2m.5 5v3.5l1.5-1 1.5 1V7H14v7H2V7z",
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

const GiftBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "gift",
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
GiftBase.displayName = "Gift";

export const Gift = memo(GiftBase) as typeof GiftBase;
Gift.displayName = "Gift";
