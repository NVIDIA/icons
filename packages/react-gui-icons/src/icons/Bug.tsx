"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "bug" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-bug",
    viewBox: "0 0 16 16",
    paths: [
      "m5.985 3.778-.576-2.149.966-.258.496 1.849C7.22 3.078 7.601 3 8 3s.78.078 1.129.22l.496-1.849.966.258-.576 2.149C10.62 4.326 11 5.118 11 6h1.616l.548-2.044.966.259L13.383 7H11v1.5h3v1h-3V11h2.384l.746 2.785-.966.259L12.616 12h-1.787a3 3 0 0 1-5.658 0H3.383l-.547 2.044-.966-.259L2.616 11H5V9.5H2v-1h3V7H2.616L1.87 4.215l.966-.259L3.383 6H5c0-.882.381-1.674.985-2.222M8 4a2 2 0 0 0-2 2v5q0 .207.04.401A2 2 0 0 0 10 11V6a2 2 0 0 0-2-2m.5 7.5h-1v-5h1Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-bug",
    viewBox: "0 0 16 16",
    paths: [
      "m5.985 3.778-.576-2.149.966-.258.496 1.849C7.22 3.078 7.601 3 8 3s.78.078 1.129.22l.496-1.849.966.258-.576 2.149C10.62 4.326 11 5.118 11 6h1.616l.548-2.044.966.259L13.383 7H11v1.5h3v1h-3V11h2.384l.746 2.785-.966.259L12.616 12h-1.787a3 3 0 0 1-5.658 0H3.383l-.547 2.044-.966-.259L2.616 11H5V9.5H2v-1h3V7H2.616L1.87 4.215l.966-.259L3.383 6H5c0-.882.381-1.674.985-2.222M7.5 6.5v5h1v-5Z",
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

const BugBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "bug",
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
BugBase.displayName = "Bug";

export const Bug = memo(BugBase) as typeof BugBase;
Bug.displayName = "Bug";
