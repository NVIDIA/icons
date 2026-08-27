"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "robot-torso" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-robot-torso",
    viewBox: "0 0 16 16",
    paths: [
      "M10 5H6V4h4z",
      "M9.136 2H12v2h1v1h-1v2H8.5v1h2.383l.268 1h1.484a1 1 0 0 1 .527-.441l.587-2.189.966.26-.567 2.11A1 1 0 1 1 12.635 10h-1.216l.804 3H8.5v1H10v1H6v-1h1.5v-1H3.776l.804-3H3.365a1 1 0 1 1-1.572-1.208l-.58-2.162.967-.26.579 2.165c.258.069.475.239.606.465h1.483l.268-1H7.5V7H4V5H3V4h1V2h2.864l.242-1h1.788ZM5 6h6V3H5Zm.08 6h5.84l-.804-3H5.883Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-robot-torso",
    viewBox: "0 0 16 16",
    paths: [
      "M9.136 2H12v2h1v1h-1v2H8.5v1h2.383l.268 1h1.484a1 1 0 0 1 .527-.441l.587-2.189.966.26-.567 2.11A1 1 0 1 1 12.635 10h-1.216l.804 3H8.5v1H10v1H6v-1h1.5v-1H3.776l.804-3H3.365a1 1 0 1 1-1.572-1.208l-.58-2.162.967-.26.579 2.165c.258.069.475.239.606.465h1.483l.268-1H7.5V7H4V5H3V4h1V2h2.864l.242-1h1.788ZM6 4v1h4V4Z",
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

const RobotTorsoBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "robot-torso",
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
RobotTorsoBase.displayName = "RobotTorso";

export const RobotTorso = memo(RobotTorsoBase) as typeof RobotTorsoBase;
RobotTorso.displayName = "RobotTorso";
