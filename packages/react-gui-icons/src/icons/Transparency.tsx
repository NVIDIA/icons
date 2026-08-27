"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "transparency" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-transparency",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 1H8a7 7 0 1 1 0 14h-.5Zm1 1.021v11.958a6 6 0 0 0 0-11.958M2.09 9.043c.123.702.368 1.362.713 1.957l-.866.501a7 7 0 0 1-.832-2.286ZM5.947 2.36a6 6 0 0 0-1.804 1.044L3.5 2.638a7 7 0 0 1 2.105-1.217ZM2.803 5a6 6 0 0 0-.713 1.957l-.985-.172a7 7 0 0 1 .832-2.286Zm1.34 7.596a6 6 0 0 0 1.804 1.044l-.342.939A7 7 0 0 1 3.5 13.362Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-transparency",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1h-.5v14H8A7 7 0 1 0 8 1M4.143 3.404A6 6 0 0 1 5.947 2.36l-.342-.939A7 7 0 0 0 3.5 2.638zM2.09 6.957A6 6 0 0 1 2.803 5l-.866-.501a7 7 0 0 0-.832 2.286zM2.803 11a6 6 0 0 1-.713-1.957l-.985.172c.144.82.43 1.591.832 2.286zm3.144 2.64a6 6 0 0 1-1.804-1.044l-.643.766a7 7 0 0 0 2.105 1.217z",
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

const TransparencyBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "transparency",
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
TransparencyBase.displayName = "Transparency";

export const Transparency = memo(TransparencyBase) as typeof TransparencyBase;
Transparency.displayName = "Transparency";
