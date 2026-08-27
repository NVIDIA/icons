"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "usb" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-usb",
    viewBox: "0 0 16 16",
    paths: [
      "m9.854 2.647-.708.707-.646-.647v5.641l2.5-.67V7h-1V4h3v3h-1v1.446l-3.5.938v1.679a2 2 0 1 1-1 0v-.179L4 9.946V7.915a1.5 1.5 0 1 1 1 0v1.264l2.5.669V2.707l-.646.647-.708-.707L8 .793ZM7 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0m5-8h-1v1h1ZM4 6.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-usb",
    viewBox: "0 0 16 16",
    paths: [
      "M9.854 2.647 8 .793 6.146 2.647l.708.707.646-.647v7.141L5 9.179V7.915a1.5 1.5 0 1 0-1 0v2.031l3.5.938v.179a2 2 0 1 0 1 0V9.384l3.5-.938V7h1V4h-3v3h1v.678l-2.5.67V2.707l.646.647z",
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

const UsbBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "usb",
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
UsbBase.displayName = "Usb";

export const Usb = memo(UsbBase) as typeof UsbBase;
Usb.displayName = "Usb";
