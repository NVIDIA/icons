"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "footprint" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-footprint",
    viewBox: "0 0 16 16",
    paths: [
      "M7.999 2h.002c.278 0 .784 0 1.352.406.547.39 1.094 1.114 1.612 2.408.554 1.386.409 2.38.143 3.377q-.069.257-.143.512c-.228.802-.465 1.63-.465 2.797 0 1.07-.243 1.934-.688 2.544-.453.622-1.1.956-1.812.956s-1.359-.334-1.812-.956c-.444-.61-.688-1.474-.688-2.544 0-1.167-.236-1.995-.465-2.797q-.074-.255-.143-.512c-.266-.997-.41-1.991.144-3.377C5.554 3.52 6.1 2.796 6.647 2.406 7.215 2 7.722 2 7.999 2m-.771 1.219c-.328.235-.781.761-1.264 1.967-.445 1.114-.34 1.87-.106 2.748q.061.224.131.467c.202.703.439 1.529.497 2.599h3.028c.058-1.07.296-1.897.497-2.599q.07-.242.131-.467c.234-.878.34-1.634-.106-2.748C9.554 3.98 9.1 3.454 8.772 3.219 8.466 3.001 8.223 3 8 3s-.465.001-.772.219M9.478 12H6.522c.062.663.245 1.14.475 1.456.275.378.629.544 1.003.544.375 0 .728-.166 1.004-.544.229-.316.413-.792.474-1.456",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-footprint",
    viewBox: "0 0 16 16",
    paths: [
      "M7.999 2h.002c.277 0 .784 0 1.352.406.547.39 1.093 1.114 1.611 2.408.555 1.386.41 2.38.144 3.377q-.07.257-.143.512c-.194.682-.395 1.383-.45 2.297h-5.03c-.056-.914-.256-1.615-.45-2.297q-.075-.255-.143-.512c-.266-.997-.41-1.991.144-3.377C5.553 3.52 6.1 2.796 6.647 2.406 7.215 2 7.722 2 7.999 2M5.518 12c.065.841.297 1.532.67 2.044.453.622 1.1.956 1.812.956s1.359-.334 1.812-.956c.373-.512.604-1.203.669-2.044z",
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

const FootprintBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "footprint",
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
FootprintBase.displayName = "Footprint";

export const Footprint = memo(FootprintBase) as typeof FootprintBase;
Footprint.displayName = "Footprint";
