"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "help-circle" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-help-circle",
    viewBox: "0 0 16 16",
    paths: [
      "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 3a1 1 0 0 0-1 1H6a2 2 0 1 1 4 0c0 .466-.119.839-.31 1.146a2.8 2.8 0 0 1-.62.676l-.137.112c-.14.115-.238.196-.319.29-.082.096-.114.172-.114.276V10h-1V8.5c0-.396.156-.695.355-.927.144-.169.332-.321.482-.443l.093-.077c.178-.148.314-.278.411-.434C8.931 6.473 9 6.284 9 6a1 1 0 0 0-1-1m-.5 7v-1h1v1Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-help-circle",
    viewBox: "0 0 16 16",
    paths: [
      "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m6-2a1 1 0 0 1 2 0c0 .284-.069.473-.159.619-.097.156-.233.286-.411.434l-.093.077c-.15.122-.338.274-.482.443A1.38 1.38 0 0 0 7.5 8.5V10h1V8.5c0-.104.032-.18.114-.276.081-.094.179-.175.319-.29l.137-.112c.197-.164.436-.378.62-.676.191-.307.31-.68.31-1.146a2 2 0 1 0-4 0Zm.5 5v1h1v-1Z",
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

const HelpCircleBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "help-circle",
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
HelpCircleBase.displayName = "HelpCircle";

export const HelpCircle = memo(HelpCircleBase) as typeof HelpCircleBase;
HelpCircle.displayName = "HelpCircle";
