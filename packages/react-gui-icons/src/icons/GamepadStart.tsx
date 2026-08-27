"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "gamepad-start" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-gamepad-start",
    viewBox: "0 0 16 16",
    paths: [
      "M7.566 2.732 6 2.312l-2.895.776L1.167 9.25l.638 2.38 1.626.664 1.441-.386.536-2L8 9.214l.871.233.259-.966L8 8.179l-3.408.913-.536 2-.559.149-.854-.349-.434-1.619 1.685-5.361L6 3.348l1.434.384h1.132l1.435-.384 2.105.564 1.685 5.361-.13.487.966.258.206-.768-1.938-6.162-2.894-.776-1.566.42z",
      "M5 5v1H4v1h1v1h1V7h1V6H6V5zm5.5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 5M10 6.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m4.921 5L10 14.37V8.629Zm-1.985 0L11 10.37v2.259Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-gamepad-start",
    viewBox: "0 0 16 16",
    paths: [
      "m5.998 2.312 1.566.42h.869l1.565-.42 2.894.776 1.937 6.16-.241.9-3.748-2.187A1.5 1.5 0 1 0 9 6.5v2.98l-1.002-.268-2.591.694-.536 2-1.441.386-1.625-.664-.638-2.38 1.938-6.16ZM5 6H4v1h1v1h1V7h1V6H6V5H5Z",
      "M10.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m4.421 5.5L10 8.629v5.741z",
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

const GamepadStartBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "gamepad-start",
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
GamepadStartBase.displayName = "GamepadStart";

export const GamepadStart = memo(GamepadStartBase) as typeof GamepadStartBase;
GamepadStart.displayName = "GamepadStart";
