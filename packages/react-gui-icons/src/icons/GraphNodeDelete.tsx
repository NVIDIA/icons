"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "graph-node-delete" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-graph-node-delete",
    viewBox: "0 0 16 16",
    paths: [
      "M6 4H2.5V3H7v2.05a2.502 2.502 0 0 1 0 4.9V13H2.5v-1H6V9.95a2.502 2.502 0 0 1 0-4.9Zm.5 2a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 6.5 6m5.293 1.5-1.647-1.646.708-.708L12.5 6.793l1.646-1.647.708.708L13.207 7.5l1.647 1.646-.708.708L12.5 8.207l-1.646 1.647-.708-.708z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-graph-node-delete",
    viewBox: "0 0 16 16",
    paths: [
      "M2 3h5v2.05A2.5 2.5 0 0 0 4 7.5a2.5 2.5 0 0 0 3 2.45V13H2z",
      "M6.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 6.5 6m4.354 3.854L12.5 8.207l1.646 1.647.708-.708L13.207 7.5l1.647-1.646-.708-.708L12.5 6.793l-1.646-1.647-.708.708L11.793 7.5l-1.647 1.646z",
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

const GraphNodeDeleteBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "graph-node-delete",
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
GraphNodeDeleteBase.displayName = "GraphNodeDelete";

export const GraphNodeDelete = memo(
  GraphNodeDeleteBase,
) as typeof GraphNodeDeleteBase;
GraphNodeDelete.displayName = "GraphNodeDelete";
