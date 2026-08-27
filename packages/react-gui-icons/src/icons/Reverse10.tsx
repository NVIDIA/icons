"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "reverse-10" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-reverse-10",
    viewBox: "0 0 16 16",
    paths: [
      "M4 8a5 5 0 1 1 5 5v1a6 6 0 1 0-5.898-7.105L1.854 5.646l-.708.708L4 9.207z",
      "M6 5h1.01v1.125H7v3.75h.01V11H6zm2 1.125C8 5.422 8.649 5 9.25 5h1.5c.601 0 1.25.422 1.25 1.125v3.75c0 .703-.649 1.125-1.25 1.125h-1.5C8.649 11 8 10.578 8 9.875Zm1.04-.058C9 6.1 9 6.123 9 6.125v3.75c0 .002 0 .025.04.058a.33.33 0 0 0 .21.067h1.5a.33.33 0 0 0 .21-.067c.04-.033.04-.056.04-.058v-3.75c0-.002 0-.025-.04-.058A.33.33 0 0 0 10.75 6h-1.5a.33.33 0 0 0-.21.067",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-reverse-10",
    viewBox: "0 0 16 16",
    paths: [
      "M4 8a5 5 0 1 1 5 5v1a6 6 0 1 0-5.898-7.105L1.854 5.646l-.708.708L4 9.207z",
      "M6 5h1.01v1.125H7v3.75h.01V11H6zm2 1.125C8 5.422 8.649 5 9.25 5h1.5c.601 0 1.25.422 1.25 1.125v3.75c0 .703-.649 1.125-1.25 1.125h-1.5C8.649 11 8 10.578 8 9.875Zm1.04-.058C9 6.1 9 6.123 9 6.125v3.75c0 .002 0 .025.04.058a.33.33 0 0 0 .21.067h1.5a.33.33 0 0 0 .21-.067c.04-.033.04-.056.04-.058v-3.75c0-.002 0-.025-.04-.058A.33.33 0 0 0 10.75 6h-1.5a.33.33 0 0 0-.21.067",
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

const Reverse10Base = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "reverse-10",
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
Reverse10Base.displayName = "Reverse10";

export const Reverse10 = memo(Reverse10Base) as typeof Reverse10Base;
Reverse10.displayName = "Reverse10";
