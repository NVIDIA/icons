"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "location" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-location",
    viewBox: "0 0 16 16",
    paths: [
      "m8 14.25-.321.383-.005-.004-.011-.009-.041-.035-.149-.132a19 19 0 0 1-2.115-2.255C4.217 10.756 3 8.742 3 6.647 3 4.227 5.264 2 8 2s5 2.227 5 4.647c0 2.095-1.217 4.109-2.358 5.551a19 19 0 0 1-2.115 2.255l-.149.132-.041.035-.011.009-.004.003-.001.001ZM8 3C5.765 3 4 4.829 4 6.647c0 1.742 1.033 3.529 2.142 4.93A18 18 0 0 0 8 13.58q.151-.138.353-.336a18 18 0 0 0 1.505-1.667C10.967 10.176 12 8.389 12 6.647 12 4.829 10.235 3 8 3M6 7a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 7m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 8.25.321.383-.321.269-.321-.269z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-location",
    viewBox: "0 0 16 16",
    paths: [
      "M5.358 12.198C4.217 10.756 3 8.742 3 6.647 3 4.227 5.264 2 8 2s5 2.227 5 4.647c0 2.095-1.217 4.109-2.358 5.551a19 19 0 0 1-1.589 1.761c-.339.332-.69.639-1.053.943l-.07-.054c-.11-.081-.302-.222-.983-.889a19 19 0 0 1-1.589-1.761M8 8.5a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 8 8.5",
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

const IconLocationBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "location",
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
IconLocationBase.displayName = "IconLocation";

export const IconLocation = memo(IconLocationBase) as typeof IconLocationBase;
IconLocation.displayName = "IconLocation";
