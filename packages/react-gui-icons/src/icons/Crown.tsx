"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "crown" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-crown",
    viewBox: "0 0 16 16",
    paths: [
      "M6 4a2 2 0 1 1 3.26 1.553l1.598 1.598 2.157-.98a1 1 0 1 1 .87.822L12.276 13H3.724L2.115 6.993a1 1 0 1 1 .87-.822l2.156.98L6.74 5.553A2 2 0 0 1 6 4m-.641 4.349-2.102-.956L4.491 12h7.018l1.234-4.607-2.101.956-2.368-2.368a1.9 1.9 0 0 1-.548 0Zm3.186-3.511a1 1 0 1 0-1.09-1.675 1 1 0 0 0 1.09 1.675",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-crown",
    viewBox: "0 0 16 16",
    paths: [
      "M6 4a2 2 0 1 1 3.26 1.553l1.598 1.598 2.157-.98a1 1 0 1 1 .87.822L12.276 13H3.724l-1.61-6.006a1 1 0 1 1 .871-.823l2.156.98L6.74 5.553A2 2 0 0 1 6 4m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
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

const CrownBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "crown",
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
CrownBase.displayName = "Crown";

export const Crown = memo(CrownBase) as typeof CrownBase;
Crown.displayName = "Crown";
