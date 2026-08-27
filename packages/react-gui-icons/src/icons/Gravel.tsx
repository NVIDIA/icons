"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "gravel" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-gravel",
    viewBox: "0 0 16 16",
    paths: [
      "M5.635 3.928 7 5.293V7.39l-2.653.664-1.419-1.419.677-2.03ZM10.793 8h2.097l.664 2.653-1.419 1.419-2.03-.677-.677-2.03Zm-4.892.892 1.599.799v1.618l-1.599.799L4.293 10.5ZM11.191 2h1.618l.799 1.599L12 5.207l-1.608-1.608ZM4.395 5.395l-.323.97.581.581L6 6.61v-.903l-.635-.635ZM11.207 9l-.635.635.323.97.97.323.581-.581L12.11 9ZM8.646 5.146l1-1 .708.708-1 1Zm-2-2.5 1-1 .708.708-1 1Zm2 5.708-1-1 .708-.708 1 1Zm0 6-1-1 .708-.708 1 1Zm-7-4.708 1-1 .708.708-1 1ZM11.809 3l-.201.401.392.392.392-.392L12.191 3Zm-5.71 7.108-.392.392.392.392.401-.201v-.382Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-gravel",
    viewBox: "0 0 16 16",
    paths: [
      "m7.646 1.646-1 1 .708.708 1-1zM11.191 2h1.618l.799 1.599L12 5.207l-1.608-1.608zM5.635 3.928 7 5.293V7.39l-2.653.664-1.419-1.419.677-2.03zM10.793 8 9.428 9.365l.677 2.03 2.03.677 1.419-1.419L12.89 8zm-4.892.892 1.599.799v1.618l-1.599.799L4.293 10.5zm2.745-.538-1-1 .708-.708 1 1zm-1 5 1 1 .708-.708-1-1zm-6-3.708 1-1 .708.708-1 1zm8-5.5-1 1 .708.708 1-1z",
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

const GravelBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "gravel",
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
GravelBase.displayName = "Gravel";

export const Gravel = memo(GravelBase) as typeof GravelBase;
Gravel.displayName = "Gravel";
