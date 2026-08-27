"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "rotate" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-rotate",
    viewBox: "0 0 16 16",
    paths: [
      "M2 7.5c0-.516.474-1.141 1.613-1.667C4.71 5.326 6.261 5 8 5s3.29.326 4.387.833C13.526 6.359 14 6.984 14 7.5c0 .298-.15.628-.519.97-.37.343-.93.664-1.651.925l.34.94c.801-.289 1.491-.669 1.99-1.131.501-.463.84-1.041.84-1.704 0-1.141-.981-2.015-2.194-2.575C11.55 4.345 9.85 4 8 4s-3.55.345-4.806.925C1.981 5.485 1 6.359 1 7.5s.981 2.015 2.194 2.575C4.45 10.655 6.15 11 8 11h.293l-.647.646.708.708 1.853-1.854-1.853-1.854-.708.708.647.646H8c-1.739 0-3.29-.326-4.387-.833C2.474 8.642 2 8.016 2 7.5",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-rotate",
    viewBox: "0 0 16 16",
    paths: [
      "M3.613 5.833C2.474 6.359 2 6.984 2 7.5s.474 1.142 1.613 1.667C4.71 9.674 6.261 10 8 10h.293l-.647-.646.708-.708 1.853 1.854-1.853 1.854-.708-.708.647-.646H8c-1.85 0-3.55-.345-4.806-.925C1.981 9.515 1 8.641 1 7.5s.981-2.015 2.194-2.575C4.45 4.345 6.15 4 8 4s3.55.345 4.806.925C14.019 5.485 15 6.359 15 7.5c0 .663-.34 1.241-.84 1.704s-1.189.842-1.99 1.131l-.34-.94c.721-.261 1.281-.582 1.651-.925.369-.342.519-.672.519-.97 0-.516-.474-1.141-1.613-1.667C11.29 5.326 9.739 5 8 5s-3.29.326-4.387.833",
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

const RotateBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "rotate",
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
RotateBase.displayName = "Rotate";

export const Rotate = memo(RotateBase) as typeof RotateBase;
Rotate.displayName = "Rotate";
