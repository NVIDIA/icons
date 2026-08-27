"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "transform" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-transform",
    viewBox: "0 0 16 16",
    paths: [
      "M14 4.333v7.334l-6 3.147-6-3.147V4.333l6-3.147ZM6.302 6.67v2.223L8 9.784l1.698-.891V6.67L8 5.778ZM8 10.914l-1.698-.891v2.771L8 13.686l1.698-.892v-2.771Zm1.076-5.7 1.622.851v2.303L13 7.161V4.938l-1.698-.892ZM3 4.938v2.223l2.302 1.207V6.065l1.621-.851-2.226-1.168Zm7.698 4.56v2.771L13 11.061V8.29ZM3 11.061l2.302 1.208V9.498L3 8.29Zm2.774-7.58L8 4.649l2.225-1.168L8 2.313Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-transform",
    viewBox: "0 0 16 16",
    paths: [
      "M10.25 13.634 8 14.815l-2.25-1.181V10.27L8 11.45l2.25-1.18zm-5.5-3.889v3.364L2 11.667V8.302zM14 11.667l-2.75 1.442V9.745L14 8.302z",
      "M10.25 6.381v2.76L8 10.321l-2.25-1.18v-2.76L8 5.2z",
      "M6.924 4.635 4.75 5.776v2.839L2 7.172V4.333l2.174-1.141zM14 4.333v2.839l-2.75 1.443V5.776l-2.174-1.14 2.75-1.444zm-3.25-1.705L8 4.07 5.249 2.628 8 1.186z",
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

const TransformBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "transform",
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
TransformBase.displayName = "Transform";

export const Transform = memo(TransformBase) as typeof TransformBase;
Transform.displayName = "Transform";
