"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "crosshair" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-crosshair",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 2.021V1h1v1.021A6 6 0 0 1 13.979 7.5H15v1h-1.021A6 6 0 0 1 8.5 13.979V15h-1v-1.021A6 6 0 0 1 2.021 8.5H1v-1h1.021A6 6 0 0 1 7.5 2.021m0 1.004A5 5 0 0 0 3.025 7.5H4v1h-.975A5 5 0 0 0 7.5 12.975V12h1v.975A5 5 0 0 0 12.975 8.5H12v-1h.975A5 5 0 0 0 8.5 3.025V4h-1ZM6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-crosshair",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 2.021V1h1v1.021A6 6 0 0 1 13.979 7.5H15v1h-1.021A6 6 0 0 1 8.5 13.979V15h-1v-1.021A6 6 0 0 1 2.021 8.5H1v-1h1.021A6 6 0 0 1 7.5 2.021m0 1.004A5 5 0 0 0 3.025 7.5H4v1h-.975A5 5 0 0 0 7.5 12.975V12h1v.975A5 5 0 0 0 12.975 8.5H12v-1h.975A5 5 0 0 0 8.5 3.025V4h-1ZM6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
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

const CrosshairBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "crosshair",
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
CrosshairBase.displayName = "Crosshair";

export const Crosshair = memo(CrosshairBase) as typeof CrosshairBase;
Crosshair.displayName = "Crosshair";
