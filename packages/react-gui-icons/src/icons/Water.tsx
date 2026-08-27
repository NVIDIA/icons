"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "water" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-water",
    viewBox: "0 0 16 16",
    paths: [
      "m8 2.382.447.894c.317.633.779 1.344 1.278 2.11.27.416.551.848.826 1.293.379.616.737 1.246 1.001 1.853.262.602.448 1.219.448 1.801a4 4 0 0 1-8 0c0-.582.186-1.199.448-1.801.264-.607.622-1.237 1.001-1.853.275-.445.556-.877.826-1.293.499-.766.961-1.477 1.278-2.11ZM5.365 8.931C5.126 9.479 5 9.949 5 10.333a3 3 0 1 0 6 0c0-.384-.127-.854-.365-1.402-.236-.543-.565-1.126-.936-1.727a59 59 0 0 0-.767-1.2A47 47 0 0 1 8 4.53c-.281.471-.606.972-.932 1.474-.263.404-.526.809-.767 1.2-.371.601-.7 1.184-.936 1.727",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-water",
    viewBox: "0 0 16 16",
    paths: [
      "M8.447 3.276 8 2.382l-.447.894c-.317.633-.779 1.344-1.278 2.11-.27.416-.551.848-.826 1.293-.379.616-.737 1.246-1.001 1.853C4.186 9.134 4 9.751 4 10.333a4 4 0 1 0 8 0c0-.582-.186-1.199-.448-1.801-.264-.607-.622-1.237-1.001-1.853-.275-.445-.556-.877-.826-1.293-.499-.766-.961-1.477-1.278-2.11",
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

const WaterBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "water",
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
WaterBase.displayName = "Water";

export const Water = memo(WaterBase) as typeof WaterBase;
Water.displayName = "Water";
