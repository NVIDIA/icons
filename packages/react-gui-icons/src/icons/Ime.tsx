"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "ime" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-ime",
    viewBox: "0 0 16 16",
    paths: [
      "m11.947 4.276.362.724H15v2.5h-1V6H9v1.5H8V5h3.191l-.138-.276z",
      "m13.416 7.277-.001.002-.003.005-.01.014-.037.053q-.048.07-.134.188a11 11 0 0 1-.476.599 7.3 7.3 0 0 1-.862.862H15v1h-3.5v.5A1.5 1.5 0 0 1 10 12h-.5v-1h.5a.5.5 0 0 0 .5-.5V10H8V9h2.5v-.309l.276-.138c.24-.12.494-.321.737-.553H9.5V7h2.586c.132 0 .26-.053.353-.147l.207-.207zM4.451 4.5l2.06 5.319-.933.362-.644-1.665H3.108l-.642 1.664-.933-.36L3.585 4.5Zm.096 3.016-.528-1.362-.525 1.362Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-ime",
    viewBox: "0 0 16 16",
    paths: [
      "m11.947 4.276.362.724H15v2.5h-1V6H9v1.5H8V5h3.191l-.138-.276z",
      "m13.416 7.277-.001.002-.003.005-.01.014-.037.053q-.048.07-.134.188a11 11 0 0 1-.476.599 7.3 7.3 0 0 1-.862.862H15v1h-3.5v.5A1.5 1.5 0 0 1 10 12h-.5v-1h.5a.5.5 0 0 0 .5-.5V10H8V9h2.5v-.309l.276-.138c.24-.12.494-.32.737-.553H9.5V7h2.586c.132 0 .26-.053.353-.146l.207-.208zM4.451 4.5l2.06 5.319-.933.362-.644-1.665H3.108l-.642 1.664-.933-.36L3.585 4.5Zm.096 3.016-.528-1.362-.525 1.362Z",
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

const ImeBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "ime",
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
ImeBase.displayName = "Ime";

export const Ime = memo(ImeBase) as typeof ImeBase;
Ime.displayName = "Ime";
