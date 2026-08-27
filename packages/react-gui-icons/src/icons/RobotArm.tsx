"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "robot-arm" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-robot-arm",
    viewBox: "0 0 16 16",
    paths: [
      "M10 3c0 .385-.109.744-.297 1.049l1.793 1.748.297-.297h1.914l1.647 1.646-.708.708L13.293 6.5h-1.086l-.353.354-.354.353v1.086l1.354 1.353-.708.708L10.5 8.707V6.793l.288-.289-1.806-1.761-.002.001a2 2 0 0 1-1.996-.021L5.586 6.121l.031.048a2.5 2.5 0 0 1 .271 2.073L9.646 12h4.238l.804 3H1.313l.804-3h3.287L3.402 9.998a2.5 2.5 0 1 1 1.477-4.584l1.398-1.398A2 2 0 1 1 10 3m3.116 10H2.884l-.268 1h10.768ZM3.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 3.5 6m1.88 3.148a2.5 2.5 0 0 1-.804.609L6.818 12h1.414ZM8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-robot-arm",
    viewBox: "0 0 16 16",
    paths: [
      "M8.982 4.743C8.692 4.907 8.357 5 8 5a2 2 0 0 1-1.016-.277L5.586 6.121C5.848 6.517 6 6.99 6 7.5q-.001.388-.112.742L9.646 12h4.238l.804 3H1.313l.804-3h3.287L3.402 9.998a2.5 2.5 0 1 1 1.477-4.584l1.398-1.398a2 2 0 1 1 3.426.033l1.793 1.748.297-.297h1.914l1.647 1.646-.708.708L13.293 6.5h-1.086l-.707.707v1.086l1.354 1.353-.708.708L10.5 8.707V6.793l.288-.289ZM3.535 9A1.5 1.5 0 1 0 3.5 9zM9 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0",
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

const RobotArmBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "robot-arm",
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
RobotArmBase.displayName = "RobotArm";

export const RobotArm = memo(RobotArmBase) as typeof RobotArmBase;
RobotArm.displayName = "RobotArm";
