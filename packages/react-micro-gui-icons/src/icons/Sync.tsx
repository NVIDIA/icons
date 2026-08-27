"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "sync" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-micro-gui-icons-v1-line-sync",
    viewBox: "0 0 12 12",
    paths: [
      "M5.646.854 6.793 2H6a4 4 0 0 0-3.865 5.035l.966-.258A3 3 0 0 1 6 3h.793L5.646 4.146l.708.708L8.707 2.5 6.354.146zM9 6q-.001-.405-.101-.777l.966-.258Q9.998 5.463 10 6a4 4 0 0 1-4 4h-.793l1.147 1.146-.708.708L3.293 9.5l2.353-2.354.708.708L5.207 9H6a3 3 0 0 0 3-3",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-micro-gui-icons-v1-fill-sync",
    viewBox: "0 0 12 12",
    paths: [
      "M5.646.854 6.793 2H6a4 4 0 0 0-3.865 5.035l.966-.258A3 3 0 0 1 6 3h.793L5.646 4.146l.708.708L8.707 2.5 6.354.146zM9 6q-.001-.405-.101-.777l.966-.258Q9.998 5.463 10 6a4 4 0 0 1-4 4h-.793l1.147 1.146-.708.708L3.293 9.5l2.353-2.354.708.708L5.207 9H6a3 3 0 0 0 3-3",
    ] as const,
  },
} as const satisfies Record<"line" | "fill", IconSpriteSymbol>;

export interface NvidiaMicroGuiIconProps
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

const SyncBase = forwardRef<SVGSVGElement, NvidiaMicroGuiIconProps>(
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
        "data-icon-name": "sync",
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
SyncBase.displayName = "Sync";

export const Sync = memo(SyncBase) as typeof SyncBase;
Sync.displayName = "Sync";
