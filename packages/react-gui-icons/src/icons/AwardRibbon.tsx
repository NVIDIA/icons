"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "award-ribbon" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-award-ribbon",
    viewBox: "0 0 16 16",
    paths: [
      "m8 .258 1.189 1.305 1.682-.536.378 1.725 1.724.377-.535 1.682L13.743 6l-1.305 1.189.535 1.682-.973.213v5.654l-4-1.599-4 1.599V9.084l-.973-.213.536-1.682L2.258 6l1.305-1.189-.536-1.682 1.725-.377.377-1.725 1.682.536Zm0 1.484-.881.968-1.248-.397-.279 1.279-1.279.279.397 1.247L3.743 6l.967.882-.397 1.247 1.279.279.279 1.279 1.248-.397.881.968.882-.968 1.247.397.28-1.279 1.278-.279-.397-1.247.968-.882-.968-.882.397-1.247-1.278-.279-.28-1.279-1.247.397ZM6 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-1 4.384v2.877l3-1.2 3 1.2v-2.877l-.129.589-1.682-.536L8 11.742l-1.189-1.305-1.682.536ZM8 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-award-ribbon",
    viewBox: "0 0 16 16",
    paths: [
      "m8 .258 1.189 1.305 1.682-.536.378 1.725 1.724.377-.535 1.682L13.743 6l-1.305 1.189.535 1.682-.973.213v5.654l-4-1.599-4 1.599V9.084l-.973-.213.536-1.682L2.258 6l1.305-1.189-.536-1.682 1.725-.377.377-1.725 1.682.536ZM6 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-1 4.384v2.877l3-1.2 3 1.2v-2.877l-.129.589-1.682-.536L8 11.742l-1.189-1.305-1.682.536ZM8 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
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

const AwardRibbonBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "award-ribbon",
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
AwardRibbonBase.displayName = "AwardRibbon";

export const AwardRibbon = memo(AwardRibbonBase) as typeof AwardRibbonBase;
AwardRibbon.displayName = "AwardRibbon";
