"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "camera-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-camera-off",
    viewBox: "0 0 16 16",
    paths: [
      "M12.293 13H2V4h1.293L1.646 2.354l.708-.708 12 12-.708.708Zm-1-1-1.555-1.555a3 3 0 0 1-4.183-4.183L4.293 5H3v7ZM6.277 6.984a2 2 0 0 0 2.739 2.739ZM14 4v7.172l-1-1V5h-2.809l-1-2H6.809l-.327.654-.745-.746L6.191 2h3.618l1 2z",
      "M11 8q0 .084-.005.167L7.833 5.005Q7.916 5 8 5a3 3 0 0 1 3 3",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-camera-off",
    viewBox: "0 0 16 16",
    paths: [
      "M12.293 13H2V4h1.293L1.646 2.354l.708-.708 12 12-.708.708Zm-2.555-2.555-.722-.722a2 2 0 0 1-2.739-2.739l-.722-.722a3 3 0 0 0 4.183 4.183M14 4v7.172l-3.005-3.005Q11 8.084 11 8a3 3 0 0 0-3.167-2.995L5.737 2.908 6.191 2h3.618l1 2z",
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

const CameraOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "camera-off",
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
CameraOffBase.displayName = "CameraOff";

export const CameraOff = memo(CameraOffBase) as typeof CameraOffBase;
CameraOff.displayName = "CameraOff";
