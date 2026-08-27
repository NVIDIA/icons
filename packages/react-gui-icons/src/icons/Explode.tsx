"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "explode" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-explode",
    viewBox: "0 0 16 16",
    paths: [
      "m13.5 3.598-2.815 1.625L12 5.982v1.482l3-1.732v6.351l-5.5 3.175v-3.214L8 12.91l-1.5-.866v3.214L1 12.083V5.732l3 1.732V5.982l1.315-.759L2.5 3.598 8 .423Zm-8 9.928V9.485L2 7.464v4.042Zm5-4.041v4.041l3.5-2.02V7.464ZM8 5.619l3.5-2.021L8 1.577 4.5 3.598ZM5 7.137v.904l1.5.866v1.982l1 .578V8.58Zm3.5 4.33 1-.578V8.907l1.5-.866v-.904L8.5 8.58Zm-3-5.196L8 7.714l2.5-1.443-.815-.471L8 6.773 6.315 5.8Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-explode",
    viewBox: "0 0 16 16",
    paths: [
      "m8 .423 5.5 3.175-2.815 1.625L12 5.982v1.482l3-1.732v6.351l-5.5 3.175v-3.214L8 12.91l-1.5-.866v3.214L1 12.083V5.732l3 1.732V5.982l1.315-.759L2.5 3.598Zm-.5 11.044V8.58L5 7.137v.904l1.5.866v1.982Zm3.5-4.33L8.5 8.58v2.887l1-.578V8.907l1.5-.866ZM6.315 5.8l-.815.471L8 7.714l2.5-1.443-.815-.471L8 6.773Z",
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

const ExplodeBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "explode",
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
ExplodeBase.displayName = "Explode";

export const Explode = memo(ExplodeBase) as typeof ExplodeBase;
Explode.displayName = "Explode";
