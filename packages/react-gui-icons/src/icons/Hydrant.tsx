"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "hydrant" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-hydrant",
    viewBox: "0 0 16 16",
    paths: [
      "M6.5 8.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 8.5M8 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      "M8.5 2.541A3 3 0 0 1 10.958 5h.542v1H11v1h2v1h.5v1H13v1h-2v3h1v1H4v-1h1v-3H3V9h-.5V8H3V7h2V6h-.5V5h.541A3.005 3.005 0 0 1 7.5 2.541V2h1ZM10 13V6H6v7ZM8 3.5A2 2 0 0 0 6.063 5h3.874A2 2 0 0 0 8 3.5M5 9V8H4v1Zm6-1v1h1V8Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-hydrant",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 8.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0",
      "M8.5 2.541A3 3 0 0 1 10.958 5h.542v1H11v1h2v1h.5v1H13v1h-2v3h1v1H4v-1h1v-3H3V9h-.5V8H3V7h2V6h-.5V5h.541A3.005 3.005 0 0 1 7.5 2.541V2h1ZM8 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8 7m2.5-1V5h-5v1Z",
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

const HydrantBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "hydrant",
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
HydrantBase.displayName = "Hydrant";

export const Hydrant = memo(HydrantBase) as typeof HydrantBase;
Hydrant.displayName = "Hydrant";
