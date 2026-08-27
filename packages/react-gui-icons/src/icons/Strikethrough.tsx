"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "strikethrough" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-strikethrough",
    viewBox: "0 0 16 16",
    paths: [
      "M8 4c-1.299 0-2 .846-2 1.5 0 .596.21.917.514 1.149.348.266.836.431 1.449.624l.073.023c.198.063.408.129.62.204H14v1h-3.671c.324.357.564.817.664 1.418.152.911-.161 1.702-.746 2.251C9.673 12.709 8.858 13 8 13c-1.683 0-3-1.035-3-2.5h1c0 .744.683 1.5 2 1.5.642 0 1.2-.219 1.563-.559.351-.331.538-.79.444-1.359-.1-.598-.386-.952-.777-1.213a3.7 3.7 0 0 0-.752-.369H2v-1h3.983l-.076-.056C5.353 7.021 5 6.404 5 5.5 5 4.154 6.299 3 8 3c1.683 0 3 1.035 3 2.5h-1C10 4.756 9.317 4 8 4",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-strikethrough",
    viewBox: "0 0 16 16",
    paths: [
      "M8 4c-1.299 0-2 .846-2 1.5 0 .596.21.917.514 1.149.348.266.836.431 1.449.624l.073.023c.198.063.408.129.62.204H14v1h-3.671c.324.357.564.817.664 1.418.152.911-.161 1.702-.746 2.251C9.673 12.709 8.858 13 8 13c-1.683 0-3-1.035-3-2.5h1c0 .744.683 1.5 2 1.5.642 0 1.2-.219 1.563-.559.351-.331.538-.79.444-1.359-.1-.598-.386-.952-.777-1.213a3.7 3.7 0 0 0-.752-.369H2v-1h3.983l-.076-.056C5.353 7.021 5 6.404 5 5.5 5 4.154 6.299 3 8 3c1.683 0 3 1.035 3 2.5h-1C10 4.756 9.317 4 8 4",
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

const StrikethroughBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "strikethrough",
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
StrikethroughBase.displayName = "Strikethrough";

export const Strikethrough = memo(
  StrikethroughBase,
) as typeof StrikethroughBase;
Strikethrough.displayName = "Strikethrough";
