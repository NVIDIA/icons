"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "plug-receptacle" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-plug-receptacle",
    viewBox: "0 0 16 16",
    paths: [
      "m5.5 7.793 1.646-1.647.708.707L6.207 8.5 7.5 9.793l1.646-1.647.708.708L8.207 10.5l1.147 1.146-.708.708L8 11.707l-.704.704-2.395 1.197L4 12.707l-1.646 1.647-.708-.708L3.293 12l-.901-.901 1.197-2.395L4.293 8l-.647-.646.708-.708.646.647Zm6.5-4.5 1.646-1.647.708.708L12.707 4l.901.901-1.197 2.395-.704.704.647.646-.707.708L11 8.707 6.647 4.354l.707-.708.646.647.704-.704 2.395-1.197Zm-1 4 .589-.589.803-1.605-1.491-1.491-1.605.803L8.707 5ZM5 8.707l-.589.589-.803 1.605 1.491 1.491 1.605-.803.589-.589Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-plug-receptacle",
    viewBox: "0 0 16 16",
    paths: [
      "m11.099 2.392.901.901 1.646-1.647.708.708L12.707 4l.901.901-1.197 2.395-.704.704.647.646-.707.708-5-5 .707-.708.646.647.704-.704zM7.146 6.146 5.5 7.793 4.354 6.646l-.708.707.647.647-.704.704-1.197 2.395.901.901-1.647 1.646.708.708L4 12.707l.901.901 2.395-1.197.704-.704.646.647.708-.708L8.207 10.5l1.647-1.647-.708-.707L7.5 9.793 6.207 8.5l1.647-1.647z",
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

const PlugReceptacleBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "plug-receptacle",
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
PlugReceptacleBase.displayName = "PlugReceptacle";

export const PlugReceptacle = memo(
  PlugReceptacleBase,
) as typeof PlugReceptacleBase;
PlugReceptacle.displayName = "PlugReceptacle";
