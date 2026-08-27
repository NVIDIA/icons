"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "material" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-material",
    viewBox: "0 0 16 16",
    paths: [
      "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3M5.858 4.467c.425-.085.912-.024 1.262.327.35.35.411.837.326 1.262-.086.429-.326.859-.679 1.212s-.784.594-1.213.68c-.425.085-.912.024-1.262-.326s-.411-.837-.326-1.262c.086-.43.326-.86.679-1.213s.784-.594 1.213-.68M8 11a3 3 0 0 0 3-3h1a4 4 0 0 1-4 4ZM6.054 5.448c-.21.042-.469.173-.702.406s-.364.491-.406.702c-.043.214.013.319.053.359s.144.095.359.052c.21-.042.469-.173.702-.406s.364-.491.406-.701c.043-.215-.013-.319-.053-.359-.04-.041-.144-.096-.359-.053m-.34 5.835.503-.861 1 .483-.36.929a4 4 0 0 1-1.143-.551",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-material",
    viewBox: "0 0 16 16",
    paths: [
      "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 9v1a4 4 0 0 0 4-4h-1a3 3 0 0 1-3 3M6.413 6.915c.586-.586.744-1.377.354-1.768-.391-.39-1.182-.232-1.768.354-.586.585-.744 1.377-.354 1.767.391.391 1.182.233 1.768-.353m-.699 4.368c.345.24.73.428 1.143.551l.36-.929-1-.483Z",
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

const MaterialBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "material",
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
MaterialBase.displayName = "Material";

export const Material = memo(MaterialBase) as typeof MaterialBase;
Material.displayName = "Material";
