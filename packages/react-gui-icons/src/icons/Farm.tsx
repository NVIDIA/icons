"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "farm" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-farm",
    viewBox: "0 0 16 16",
    paths: [
      "M10.5 6.5h-2v2h2z",
      "M7 4.5v1.258l2-.625V4.5h1v.633l3.108.972L14 9.434V14H2V4.5a2.5 2.5 0 1 1 5 0m6 8.5V9.566l-.716-2.671L9.5 6.024l-2.784.871L6 9.566V13h1V9h5v4ZM6 5H3v8h2V9.434l.892-3.329L6 6.071Zm-.085-1a1.5 1.5 0 0 0-2.83 0ZM8 12.293l.793-.793L8 10.707ZM10.293 10H8.707l.793.793ZM9.5 12.207 8.707 13h1.586Zm1.5-1.5-.793.793.793.793Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-farm",
    viewBox: "0 0 16 16",
    paths: [
      "M2 4.5a2.5 2.5 0 1 1 5 0v1.258l2-.625V4.5h1v.633l3.108.972L14 9.434V14h-2V9H7v5H2ZM6 5H3v8h2V9.434l.892-3.329L6 6.071Zm4.5 1.5h-2v2h2Z",
      "M8.793 11.5 8 10.707v1.586zm.707.707.793.793H8.707zm1.5.086-.793-.793.793-.793zM8.707 10h1.586l-.793.793z",
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

const FarmBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "farm",
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
FarmBase.displayName = "Farm";

export const Farm = memo(FarmBase) as typeof FarmBase;
Farm.displayName = "Farm";
