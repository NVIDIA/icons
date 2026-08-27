"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "hand-pinch" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-hand-pinch",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1H5v1h1.293L2 6.293V5H1v3h3V7H2.707L7 2.707V4h1zm0 4.5a1.5 1.5 0 0 1 3 0v1.616l2.147.576A2.5 2.5 0 0 1 15 10.106V12.5a2.5 2.5 0 0 1-2.5 2.5H8.523l-.149-.168a790 790 0 0 1-2.912-3.299c-.535-.621-.575-1.494.025-2.094.614-.613 1.394-.479 1.988-.203.083.038.269.132.525.263ZM9.5 5a.5.5 0 0 0-.5.5v5.64l-.73-.378a60 60 0 0 0-1.216-.619c-.449-.209-.692-.164-.86.003-.181.182-.215.456.026.735.244.284 1.716 1.947 2.753 3.119H12.5a1.5 1.5 0 0 0 1.5-1.5v-2.394a1.5 1.5 0 0 0-1.112-1.448L10 7.884V5.5a.5.5 0 0 0-.5-.5",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-hand-pinch",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1H5v1h1.293L2 6.293V5H1v3h3V7H2.707L7 2.707V4h1zm0 4.5a1.5 1.5 0 0 1 3 0v1.616l2.147.576A2.5 2.5 0 0 1 15 10.106V12.5a2.5 2.5 0 0 1-2.5 2.5H8.523l-.149-.168a884 884 0 0 1-2.912-3.298c-.535-.622-.575-1.495.025-2.095.614-.613 1.394-.479 1.988-.203.083.038.269.132.525.263z",
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

const HandPinchBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "hand-pinch",
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
HandPinchBase.displayName = "HandPinch";

export const HandPinch = memo(HandPinchBase) as typeof HandPinchBase;
HandPinch.displayName = "HandPinch";
