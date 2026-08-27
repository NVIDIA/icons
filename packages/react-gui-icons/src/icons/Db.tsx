"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "db" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-db",
    viewBox: "0 0 16 16",
    paths: [
      "M14 11c0 1.007-.875 1.755-1.904 2.223C11.022 13.711 9.573 14 8 14s-3.022-.289-4.096-.777C2.875 12.755 2 12.007 2 11V5c0-1.007.875-1.755 1.904-2.223C4.978 2.289 6.427 2 8 2s3.022.289 4.096.777C13.125 3.245 14 3.993 14 5ZM4.318 3.687C3.356 4.125 3 4.626 3 5s.356.875 1.318 1.313C5.234 6.729 6.536 7 8 7s2.766-.271 3.682-.687C12.644 5.875 13 5.374 13 5s-.356-.875-1.318-1.313C10.766 3.271 9.464 3 8 3s-2.766.271-3.682.687M13 9.698c-.271.202-.58.378-.904.525C11.022 10.711 9.573 11 8 11s-3.022-.289-4.096-.777A5 5 0 0 1 3 9.698V11c0 .374.356.875 1.318 1.313C5.234 12.729 6.536 13 8 13s2.766-.271 3.682-.687C12.644 11.875 13 11.374 13 11Zm0-3c-.271.202-.58.378-.904.525C11.022 7.711 9.573 8 8 8s-3.022-.289-4.096-.777A5 5 0 0 1 3 6.698V8c0 .374.356.875 1.318 1.313C5.234 9.729 6.536 10 8 10s2.766-.271 3.682-.687C12.644 8.875 13 8.374 13 8Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-db",
    viewBox: "0 0 16 16",
    paths: [
      "M2 4.72C2 6 4.865 7 8 7c3.136 0 6-1 6-2.28 0-.72-.973-1.52-1.904-1.943C11.022 2.289 9.573 2 8 2s-3.022.289-4.096.777C2.973 3.2 2 4 2 4.72m10.627 5.971c.51-.212.984-.476 1.373-.798V11c0 1.007-.875 1.755-1.904 2.223C11.022 13.711 9.573 14 8 14s-3.022-.289-4.096-.777C2.875 12.755 2 12.007 2 11V9.893c.389.322.863.586 1.373.798 1.235.514 2.871.809 4.627.809s3.393-.295 4.627-.809",
      "M8 8c1.756 0 3.393-.295 4.627-.809.51-.213.984-.476 1.373-.798v2.5c-.389.322-.863.585-1.373.798-1.234.514-2.871.809-4.627.809s-3.392-.295-4.627-.809c-.51-.213-.984-.476-1.373-.798v-2.5c.389.322.863.585 1.373.798C4.608 7.705 6.244 8 8 8",
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

const DbBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "db",
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
DbBase.displayName = "Db";

export const Db = memo(DbBase) as typeof DbBase;
Db.displayName = "Db";
