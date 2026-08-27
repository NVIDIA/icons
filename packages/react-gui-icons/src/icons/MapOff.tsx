"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "map-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-map-off",
    viewBox: "0 0 16 16",
    paths: [
      "m1.354.646 14 14-.708.708-2.226-2.227-2.39.896L6 13.015 1.5 14.14V3.11l.722-.181L.646 1.354Zm1.693 3.108L2.5 3.89v8.97l3-.75V6.207ZM6.5 7.207v4.903l3 .75v-2.653Zm4 4v1.571l1.143-.428Z",
      "m14.5 11.646-1-1.017V3.222l-3 1.125v3.23l-1-1.017V4.347L6.053 3.054 6 3l-.849-.803.879-.22L10 3.466l4.5-1.687Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-map-off",
    viewBox: "0 0 16 16",
    paths: [
      "m1.354.646 14 14-.708.708-2.226-2.227-1.92.72v-2.64l-1-1v3.684l-3-.75V7.207l-1-1v6.934l-4 1V3.11l.722-.181L.646 1.354ZM14.5 1.779v9.893l-4-4V3.279Zm-5 1.5v3.393l-3-3V2.154Z",
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

const MapOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "map-off",
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
MapOffBase.displayName = "MapOff";

export const MapOff = memo(MapOffBase) as typeof MapOffBase;
MapOff.displayName = "MapOff";
