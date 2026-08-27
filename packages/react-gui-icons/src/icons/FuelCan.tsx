"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "fuel-can" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-fuel-can",
    viewBox: "0 0 16 16",
    paths: [
      "m7.354 10.354-1 1-.708-.708 1-1zm-1-3.708 1 1-.708.708-1-1zm4 4-1-1-.708.708 1 1zm-1-2.292 1-1-.708-.708-1 1z",
      "M12.259 3.448 11.707 4l.5.5-1 1 .793.793V13H4V4.293L5.293 3h3.414l.793.793 1-1 .5.5.741-.741 2.13-.571.258.966ZM9 4.707V6H5v6h6V6.707ZM5.707 4 5 4.707V5h3V4Zm4.793.207-.293.293.293.293.293-.293Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-fuel-can",
    viewBox: "0 0 16 16",
    paths: [
      "m14.129 2.947-1.87.501-.552.552.5.5-1 1 .793.793V13H4V4.293L5.293 3h3.414l.793.793 1-1 .5.5.741-.741 2.13-.571ZM5 4.707V5h3V4H5.707Zm4.354 3.647 1-1-.708-.708-1 1Zm-2 2-.708-.708-1 1 .708.708Zm-1-3.708-.708.708 1 1 .708-.708Zm4 4-1-1-.708.708 1 1ZM10.207 4.5l.293.293.293-.293-.293-.293Z",
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

const FuelCanBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "fuel-can",
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
FuelCanBase.displayName = "FuelCan";

export const FuelCan = memo(FuelCanBase) as typeof FuelCanBase;
FuelCan.displayName = "FuelCan";
