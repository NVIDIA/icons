"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "firework" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-firework",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 14v-1h1v1zm0-2v-1h1v1zM3 11v-1h1v1zm4.5-1V9h1v1zm0-2V7h1v1zm-1 0h-1V7h1zM11 2h-1V1h1zm-.5 6h-1V7h1zm2 0h-1V7h1zm-5-2V5h1v1zm1.439-.146.707-.708.707.708-.707.707Zm-2.586.707-.707-.707.707-.708.707.708ZM11 4h1v1h-1ZM4.854 5.061l-.708-.707.708-.708.707.708ZM2.5 4h-1V3h1ZM13 4h1v1h-1ZM3.439 8.354l.707-.708.707.708-.707.707zm4.207-5.208.707-.707.708.707-.708.708zm6.914 6.208-.707.707-.707-.707.707-.708z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-firework",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 14v-1h1v1zm0-2v-1h1v1zM3 11v-1h1v1zm4.5-1V9h1v1zm0-2V7h1v1zm-1 0h-1V7h1zM11 2h-1V1h1zm-.5 6h-1V7h1zm2 0h-1V7h1zm-5-2V5h1v1zm1.439-.146.707-.708.707.708-.707.707Zm-2.586.707-.707-.707.707-.708.707.708ZM11 4h1v1h-1ZM4.854 5.061l-.708-.707.708-.708.707.708ZM2.5 4h-1V3h1ZM13 4h1v1h-1ZM3.439 8.354l.707-.708.707.708-.707.707zm4.207-5.208.707-.707.708.707-.708.708zm6.914 6.208-.707.707-.707-.707.707-.708z",
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

const FireworkBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "firework",
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
FireworkBase.displayName = "Firework";

export const Firework = memo(FireworkBase) as typeof FireworkBase;
Firework.displayName = "Firework";
