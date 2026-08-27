"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "location-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-location-off",
    viewBox: "0 0 16 16",
    paths: [
      "m11.582 10.875 2.772 2.771-.708.708-2.637-2.638q-.183.25-.367.482a19 19 0 0 1-1.589 1.761c-.338.33-.691.639-1.053.943a19 19 0 0 1-1.053-.943 19 19 0 0 1-1.589-1.761C4.217 10.756 3 8.742 3 6.647c0-.8.247-1.578.677-2.263l-2.031-2.03.708-.708 8.502 8.502C11.516 9.052 12 7.839 12 6.647 12 4.829 10.235 3 8 3c-.637 0-1.237.149-1.768.404l-.739-.74A5.1 5.1 0 0 1 8 2c2.736 0 5 2.227 5 4.647 0 .985-.269 1.953-.673 2.851-.217.482-.472.943-.745 1.377M10.293 11 4.409 5.116A3.2 3.2 0 0 0 4 6.647c0 1.742 1.033 3.529 2.142 4.93A18 18 0 0 0 8 13.58q.151-.138.353-.336a18 18 0 0 0 1.505-1.667q.221-.28.435-.577",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-location-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-2.637-2.638q-.183.25-.367.482a19 19 0 0 1-1.589 1.761c-.339.332-.69.639-1.053.943-.117-.098-.209-.117-1.053-.943a19 19 0 0 1-1.589-1.761C4.217 10.756 3 8.742 3 6.647c0-.8.247-1.578.677-2.263l-2.031-2.03zM13 6.647c0 .985-.269 1.953-.673 2.851L5.493 2.664A5.1 5.1 0 0 1 8 2c2.736 0 5 2.227 5 4.647",
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

const LocationOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "location-off",
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
LocationOffBase.displayName = "LocationOff";

export const LocationOff = memo(LocationOffBase) as typeof LocationOffBase;
LocationOff.displayName = "LocationOff";
