"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "mask-inside" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-mask-inside",
    viewBox: "0 0 16 16",
    paths: [
      "M7.111 3.682 3.682 7.111l.707.707 3.429-3.429zm2.513.487L4.169 9.624l.707.707 5.455-5.455zm1.5 1.5-5.455 5.455.707.707 5.455-5.455zm-2.235 6.649 3.429-3.429-.707-.707-3.429 3.429z",
      "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M3 8a5 5 0 1 0 10.001-.001A5 5 0 0 0 3 8",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-mask-inside",
    viewBox: "0 0 16 16",
    paths: [
      "M8 2q-.297 0-.588.028l.097.996a5 5 0 0 1 .982 0l.097-.996A6 6 0 0 0 8 2m2.829.708a6 6 0 0 0-1.087-.451l-.29.957q.475.145.905.375zm-4.571-.451a6 6 0 0 0-1.087.451l.472.881q.43-.23.905-.375zm6.38 1.936a6 6 0 0 0-.831-.831l-.635.773q.38.313.693.693zm-8.445-.831a6 6 0 0 0-.831.831l.773.635q.313-.38.693-.693zm9.55 2.896a6 6 0 0 0-.451-1.087l-.881.472q.23.43.375.905zM2.708 5.171a6 6 0 0 0-.451 1.087l.957.29q.145-.475.375-.905zM14 8q0-.297-.028-.588l-.996.097a5 5 0 0 1 0 .982l.996.097A6 6 0 0 0 14 8M2.028 7.412a6.4 6.4 0 0 0 0 1.176l.996-.097a5 5 0 0 1 0-.982zm.229 2.33q.174.571.451 1.087l.881-.472a5 5 0 0 1-.375-.905zm11.035 1.087a6 6 0 0 0 .451-1.087l-.957-.29a5 5 0 0 1-.375.905zm-9.93.978q.375.456.831.831l.635-.773a5 5 0 0 1-.693-.693zm8.445.831q.456-.375.831-.831l-.773-.635q-.313.38-.693.693zm-6.636.654a6 6 0 0 0 1.087.451l.29-.957a5 5 0 0 1-.905-.375zm4.571.451a6 6 0 0 0 1.087-.451l-.472-.881a5 5 0 0 1-.905.375zM8 14q.297 0 .588-.028l-.097-.996a5 5 0 0 1-.982 0l-.097.996q.291.027.588.028m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
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

const MaskInsideBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "mask-inside",
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
MaskInsideBase.displayName = "MaskInside";

export const MaskInside = memo(MaskInsideBase) as typeof MaskInsideBase;
MaskInside.displayName = "MaskInside";
