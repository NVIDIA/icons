"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "tag-label" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-tag-label",
    viewBox: "0 0 16 16",
    paths: [
      "M8.293 2h3.414L14 4.293v3.414l-6.5 6.5L1.793 8.5Zm.414 1-5.5 5.5L7.5 12.793l5.5-5.5V4.707L11.293 3ZM9 5.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 5.5m-1.853 5.354-2-2 .707-.708 2 2Zm1.707-1.708-.707.708-2-2 .707-.708ZM10.5 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-tag-label",
    viewBox: "0 0 16 16",
    paths: [
      "M8.293 2h3.414L14 4.293v3.414l-6.5 6.5L1.793 8.5ZM10.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3.353 4.354.707-.708-2-2-.707.708Zm-.293-3.708-.707.708 2 2 .707-.708Z",
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

const TagLabelBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "tag-label",
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
TagLabelBase.displayName = "TagLabel";

export const TagLabel = memo(TagLabelBase) as typeof TagLabelBase;
TagLabel.displayName = "TagLabel";
