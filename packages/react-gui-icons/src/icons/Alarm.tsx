"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "alarm" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-alarm",
    viewBox: "0 0 16 16",
    paths: [
      "M3 8a5 5 0 1 1 8.504 3.567l.483 1.804-.966.258-.372-1.388A4.97 4.97 0 0 1 8 13a5 5 0 0 1-2.646-.757l-.371 1.386-.966-.258.482-1.801A5 5 0 0 1 3 8m5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m.408 3.592 2.62.702-.259.966-3.177-.852-.852-3.177.966-.259ZM5.354 2.354l-2 2-.708-.708 2-2Zm6-.708 2 2-.708.708-2-2Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-alarm",
    viewBox: "0 0 16 16",
    paths: [
      "m5.354 2.354-2 2-.708-.708 2-2zm6-.708 2 2-.708.708-2-2zM3 8a5 5 0 1 1 8.504 3.567l.483 1.804-.966.258-.372-1.388A4.97 4.97 0 0 1 8 13a5 5 0 0 1-2.646-.757l-.371 1.386-.966-.258.482-1.801A5 5 0 0 1 3 8m4.706-3.028-.966.259.852 3.177 3.177.852.259-.966-2.62-.702Z",
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

const AlarmBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "alarm",
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
AlarmBase.displayName = "Alarm";

export const Alarm = memo(AlarmBase) as typeof AlarmBase;
Alarm.displayName = "Alarm";
