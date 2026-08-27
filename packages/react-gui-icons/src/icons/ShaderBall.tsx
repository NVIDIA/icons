"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "shader-ball" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-shader-ball",
    viewBox: "0 0 16 16",
    paths: [
      "M2.5 6.5a5.5 5.5 0 1 1 9.283 3.992c.305.097.578.208.811.331.235.125.45.276.613.459.165.186.293.429.293.718v1c0 .45-.302.777-.604.992-.315.223-.738.404-1.217.548-.963.288-2.264.46-3.679.46s-2.716-.172-3.679-.46c-.479-.144-.902-.325-1.217-.548-.302-.215-.604-.542-.604-.992v-1c0-.289.128-.532.293-.718.163-.183.378-.334.613-.459q.352-.185.811-.331A5.5 5.5 0 0 1 2.5 6.5M8 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-2.759 9.259c-.587.123-1.051.28-1.365.447a1.2 1.2 0 0 0-.334.239.2.2 0 0 0-.042.06v.988c.004.012.032.076.182.183.191.135.5.278.926.406C5.455 13.836 6.654 14 8 14s2.545-.164 3.392-.418c.426-.128.735-.271.926-.406.15-.107.178-.171.182-.183v-.988a.2.2 0 0 0-.042-.06 1.2 1.2 0 0 0-.334-.239c-.314-.167-.778-.324-1.365-.447A5.5 5.5 0 0 1 8 12a5.5 5.5 0 0 1-2.759-.741m1.117-7.792c.425-.085.912-.024 1.262.327.35.35.411.837.326 1.262-.086.429-.326.859-.679 1.212s-.784.594-1.213.68c-.425.085-.912.024-1.262-.326s-.411-.837-.326-1.262c.086-.43.326-.86.679-1.213s.784-.594 1.213-.68M8 9.5a3 3 0 0 0 3-3h1a4 4 0 0 1-4 4ZM6.554 4.448c-.21.042-.469.173-.702.406s-.364.491-.406.702c-.043.214.013.319.053.359s.144.095.359.052c.21-.042.469-.173.702-.406s.364-.491.406-.701c.043-.215-.013-.319-.053-.359-.04-.041-.144-.096-.359-.053m.161 4.764q.4.19.856.258l-.142.99a4 4 0 0 1-1.144-.345Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-shader-ball",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a5.5 5.5 0 0 1 3.783 9.492c.305.097.578.208.811.331.235.125.45.276.613.459.165.186.293.429.293.718v1c0 .45-.302.777-.604.992-.315.223-.738.404-1.217.548-.963.288-2.264.46-3.679.46s-2.716-.172-3.679-.46c-.479-.144-.902-.325-1.217-.548-.302-.215-.604-.542-.604-.992v-1c0-.289.128-.532.293-.718.163-.183.378-.334.613-.459q.352-.185.811-.331A5.5 5.5 0 0 1 8 1M3.876 11.706a1.2 1.2 0 0 0-.334.239.2.2 0 0 0-.042.06v.988c.004.012.032.076.182.183.191.135.5.278.926.406C5.455 13.836 6.654 14 8 14s2.545-.164 3.392-.418c.426-.128.735-.271.926-.406.15-.107.178-.171.182-.183v-.988a.2.2 0 0 0-.042-.06 1.2 1.2 0 0 0-.334-.239c-.314-.167-.778-.324-1.365-.447A5.5 5.5 0 0 1 8 12a5.5 5.5 0 0 1-2.759-.741c-.587.123-1.051.28-1.365.447M11 6.325a3 3 0 0 1-3 3v1a4 4 0 0 0 4-4ZM6.913 5.74c.586-.586.744-1.378.354-1.768-.391-.391-1.182-.232-1.768.353-.586.586-.744 1.378-.354 1.768.391.391 1.182.232 1.768-.353m.658 3.554a3 3 0 0 1-.856-.258l-.43.904c.356.168.74.286 1.144.344Zm-4.072 2.715.001-.002Z",
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

const ShaderBallBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "shader-ball",
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
ShaderBallBase.displayName = "ShaderBall";

export const ShaderBall = memo(ShaderBallBase) as typeof ShaderBallBase;
ShaderBall.displayName = "ShaderBall";
