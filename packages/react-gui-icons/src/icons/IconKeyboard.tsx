"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "keyboard" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-keyboard",
    viewBox: "0 0 16 16",
    paths: [
      "M1 3h14v9H1Zm1 1v7h12V4Zm9 6H5V9h6ZM4 6H3V5h1Zm1.5 0h-1V5h1ZM7 6H6V5h1Zm1.5 0h-1V5h1ZM10 6H9V5h1Zm1.5 0h-1V5h1ZM13 6h-1V5h1ZM4 8H3V7h1Zm1.5 0h-1V7h1ZM7 8H6V7h1Zm1.5 0h-1V7h1ZM10 8H9V7h1Zm1.5 0h-1V7h1ZM13 8h-1V7h1Zm-9 2H3V9h1Zm9 0h-1V9h1Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-keyboard",
    viewBox: "0 0 16 16",
    paths: [
      "M1 3h14v9H1Zm10 7V9H5v1ZM4 6V5H3v1Zm1.5 0V5h-1v1ZM6 6h1V5H6Zm2.5 0V5h-1v1ZM9 6h1V5H9Zm2.5 0V5h-1v1Zm.5 0h1V5h-1ZM4 8V7H3v1Zm.5 0h1V7h-1ZM7 8V7H6v1Zm.5 0h1V7h-1ZM10 8V7H9v1Zm.5 0h1V7h-1ZM13 8V7h-1v1ZM3 10h1V9H3Zm9 0h1V9h-1Z",
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

const IconKeyboardBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "keyboard",
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
IconKeyboardBase.displayName = "IconKeyboard";

export const IconKeyboard = memo(IconKeyboardBase) as typeof IconKeyboardBase;
IconKeyboard.displayName = "IconKeyboard";
