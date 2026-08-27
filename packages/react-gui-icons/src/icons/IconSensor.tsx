"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "sensor" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-sensor",
    viewBox: "0 0 16 16",
    paths: [
      "M4.94 4.111a3.5 3.5 0 0 0-.636 4.079 3.57 3.57 0 0 0 1.527 1.515q.357.182.733.277a3.5 3.5 0 0 0 3.326-.921l.707.707a4.5 4.5 0 0 1-4.26 1.187l.815 3.041H1.848l1.481-5.525a4.5 4.5 0 0 1 .904-5.067ZM9 2a5 5 0 0 0 5 5v1a6 6 0 0 1-6-6ZM4.066 9.585l-.914 3.411h2.696l-.672-2.51a4.6 4.6 0 0 1-1.11-.901M11 2a3 3 0 0 0 3 3v1a4 4 0 0 1-4-4Zm2 0a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-sensor",
    viewBox: "0 0 16 16",
    paths: [
      "M9 2a5 5 0 0 0 5 5v1a6 6 0 0 1-6-6z",
      "M14 5a3 3 0 0 1-3-3h-1a4 4 0 0 0 4 4z",
      "M14 3a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2zM4.94 4.111a3.5 3.5 0 0 0-.636 4.079 3.57 3.57 0 0 0 1.527 1.515q.357.182.733.277a3.5 3.5 0 0 0 3.326-.921l.707.707a4.5 4.5 0 0 1-4.26 1.188l.815 3.04H1.848l1.481-5.525a4.5 4.5 0 0 1 .904-5.067z",
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

const IconSensorBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "sensor",
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
IconSensorBase.displayName = "IconSensor";

export const IconSensor = memo(IconSensorBase) as typeof IconSensorBase;
IconSensor.displayName = "IconSensor";
