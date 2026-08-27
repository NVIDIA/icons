"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "bone" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-bone",
    viewBox: "0 0 16 16",
    paths: [
      "M10.5 2A1.5 1.5 0 0 1 12 3.5a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1-.71 2.821c-.171-.092-.243-.114-.29-.114a.2.2 0 0 0-.146.061l-4.682 4.681a.2.2 0 0 0-.061.147c0 .046.023.119.116.291a1.5 1.5 0 1 1-2.823.709.5.5 0 0 0-.5-.5 1.5 1.5 0 1 1 .71-2.822c.171.092.244.115.29.115a.2.2 0 0 0 .147-.061l4.681-4.682a.2.2 0 0 0 .061-.146c0-.047-.022-.119-.114-.29A1.5 1.5 0 0 1 10.5 2m0 1a.5.5 0 0 0-.44.736c.085.159.233.436.233.764 0 .32-.127.627-.354.854l-4.681 4.681a1.2 1.2 0 0 1-.854.354c-.328 0-.604-.148-.763-.234a.5.5 0 1 0-.237.941 1.5 1.5 0 0 1 1.5 1.5.5.5 0 1 0 .941-.236c-.086-.159-.234-.436-.234-.764.001-.32.128-.628.354-.854l4.681-4.681c.227-.227.534-.354.854-.354.328 0 .606.149.765.234A.5.5 0 1 0 12.5 5 1.5 1.5 0 0 1 11 3.5a.5.5 0 0 0-.5-.5",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-bone",
    viewBox: "0 0 16 16",
    paths: [
      "M10.5 2A1.5 1.5 0 0 1 12 3.5a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1-.71 2.821c-.171-.092-.243-.114-.29-.114a.2.2 0 0 0-.146.061l-4.682 4.681a.2.2 0 0 0-.061.147c0 .047.023.119.116.291a1.5 1.5 0 1 1-2.823.709.5.5 0 0 0-.5-.5 1.5 1.5 0 1 1 .71-2.822c.171.093.244.115.29.115a.2.2 0 0 0 .147-.061l4.681-4.682a.2.2 0 0 0 .061-.146c0-.047-.022-.119-.114-.29A1.5 1.5 0 0 1 10.5 2",
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

const BoneBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "bone",
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
BoneBase.displayName = "Bone";

export const Bone = memo(BoneBase) as typeof BoneBase;
Bone.displayName = "Bone";
