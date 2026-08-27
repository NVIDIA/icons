"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "skull" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-skull",
    viewBox: "0 0 16 16",
    paths: [
      "M8 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5.5 6a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.5 6m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m5-1a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 6m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      "M8 2a6 6 0 0 1 6 6l-.947 3.602-1.139.303L11.391 14H4.609l-.524-2.095-1.138-.303L2 8.065C2 4.771 4.678 2 8 2m0 1a5 5 0 0 0-4.999 4.938l.763 2.846 1.15.309L5.391 13H6.5v-1h1v1h1v-1h1v1h1.109l.477-1.907 1.149-.309.763-2.846A5 5 0 0 0 8 3",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-skull",
    viewBox: "0 0 16 16",
    paths: [
      "M8 2c3.322 0 6 2.771 6 6.065l-.947 3.537-1.139.303L11.391 14H10v-1.5H9V14H7v-1.5H6V14H4.609l-.524-2.095-1.138-.303L2 8.065C2 4.771 4.678 2 8 2M5.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 5.5 6m5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 10.5 6M8 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
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

const SkullBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "skull",
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
SkullBase.displayName = "Skull";

export const Skull = memo(SkullBase) as typeof SkullBase;
Skull.displayName = "Skull";
