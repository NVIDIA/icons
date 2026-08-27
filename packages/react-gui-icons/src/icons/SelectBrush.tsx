"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "select-brush" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-select-brush",
    viewBox: "0 0 16 16",
    paths: [
      "m12.25 1.543 2.207 2.207L10 8.207v.043c0 1.544-1.104 2.558-2.43 2.745-.6.085-1.296.089-1.927-.078-.634-.167-1.255-.522-1.59-1.193l-.258-.516.547-.182c.47-.157.755-.603 1.145-1.274l.016-.027c.209-.36.456-.784.786-1.112A2 2 0 0 1 7.75 6h.042ZM9 8.24 7.76 7h-.01c-.324 0-.55.118-.756.322-.227.226-.414.54-.642.933l-.035.059c-.25.431-.563.971-1.055 1.341q.251.195.636.295c.465.123 1.019.127 1.532.055C8.33 9.878 9 9.231 9 8.25Zm2-2.447 2.042-2.043-.792-.793L10.207 5Zm-.707.707L9.5 5.707l-.809.809.792.793ZM3.224 7.768a5 5 0 0 0-.63.489l.677.737a4 4 0 0 1 .505-.392zm10.181.489a5 5 0 0 0-.629-.489l-.552.834q.282.187.505.392zM1.65 9.63a2.6 2.6 0 0 0 .105 1.999l.907-.422A1.65 1.65 0 0 1 2.5 10.5q0-.274.094-.54zm12.85.87q-.002-.452-.15-.87l-.944.33q.093.265.094.54 0 .36-.162.707l.907.422A2.7 2.7 0 0 0 14.5 10.5M3.198 13.215a7.1 7.1 0 0 0 1.847.857l.295-.956a6.1 6.1 0 0 1-1.586-.733zm7.757.857a7.1 7.1 0 0 0 1.847-.857l-.556-.832a6.1 6.1 0 0 1-1.586.733zm-3.949.382q.487.046.994.046t.994-.046l-.092-.995a10 10 0 0 1-1.804 0z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-select-brush",
    viewBox: "0 0 16 16",
    paths: [
      "m12.353 5.146-1.5-1.5L13 1.5 14.5 3zm-2.207-.793L8.853 5.646l1.501 1.5 1.292-1.293zM10 8.207 7.792 6H7.75a2 2 0 0 0-1.461.613c-.33.328-.577.752-.786 1.112l-.016.027c-.39.671-.675 1.117-1.145 1.274l-.547.182.258.516c.335.671.956 1.026 1.59 1.193.631.167 1.327.163 1.927.078C8.896 10.808 10 9.794 10 8.25zm-6.776-.439a5 5 0 0 0-.63.489l.677.737a4 4 0 0 1 .505-.392zm10.181.489a5 5 0 0 0-.629-.489l-.552.834q.282.187.505.392zM1.65 9.63a2.6 2.6 0 0 0 .105 1.999l.907-.422A1.65 1.65 0 0 1 2.5 10.5q0-.274.094-.54zm12.85.87q-.002-.452-.15-.87l-.944.33q.093.265.094.54 0 .36-.162.707l.907.422A2.7 2.7 0 0 0 14.5 10.5M3.198 13.215a7.1 7.1 0 0 0 1.847.857l.295-.956a6.1 6.1 0 0 1-1.586-.733zm7.757.857a7.1 7.1 0 0 0 1.847-.857l-.556-.832a6.1 6.1 0 0 1-1.586.733zm-3.949.382q.487.046.994.046t.994-.046l-.092-.995a10 10 0 0 1-1.804 0z",
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

const SelectBrushBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "select-brush",
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
SelectBrushBase.displayName = "SelectBrush";

export const SelectBrush = memo(SelectBrushBase) as typeof SelectBrushBase;
SelectBrush.displayName = "SelectBrush";
