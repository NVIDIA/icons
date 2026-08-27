"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "physical-exit" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-physical-exit",
    viewBox: "0 0 16 16",
    paths: [
      "M14 14h-3v-1h2V2H8V1h6z",
      "M10.117 6.17 8.718 8.272l-2.463-.659-.546 2.037 2.7.725.862 3.221-.965.258-.714-2.664-2.142-.574-.614 2.292-3.278.879-.261-.966 2.723-.73 1.23-4.59H3.376L2.324 9.082l-.832-.554 1.349-2.027h3.127l2.315.619 1.001-1.505z",
      "M6.514 3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.514 3m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-physical-exit",
    viewBox: "0 0 16 16",
    paths: [
      "M14 14h-3v-1h2V2H8V1h6z",
      "M10.117 6.17 8.718 8.272l-2.463-.659-.546 2.037 2.7.725.862 3.221-.965.258-.714-2.664-2.142-.574-.614 2.292-3.278.879-.261-.966 2.723-.73 1.23-4.59H3.376L2.324 9.082l-.832-.554 1.349-2.027h3.127l2.315.619 1.001-1.505z",
      "M6.514 3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.514 3",
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

const PhysicalExitBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "physical-exit",
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
PhysicalExitBase.displayName = "PhysicalExit";

export const PhysicalExit = memo(PhysicalExitBase) as typeof PhysicalExitBase;
PhysicalExit.displayName = "PhysicalExit";
