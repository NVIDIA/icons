"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "gamepad" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-gamepad",
    viewBox: "0 0 16 16",
    paths: [
      "m6 3.312 1.565.42h.87l1.566-.42 2.894.776 1.938 6.162-.638 2.38-1.626.665-1.441-.387-.536-2L8 10.214l-2.592.694-.536 2-1.441.387-1.626-.665-.638-2.38 1.938-6.162Zm0 1.036-2.106.564-1.685 5.361.434 1.619.854.349.559-.149.536-2L8 9.179l3.409.913.535 2 .559.149.855-.349.434-1.619-1.686-5.361-2.105-.564-1.435.384H7.434ZM9 7.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 7.5M5 7V6h1v1h1v1H6v1H5V8H4V7Zm5.5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-gamepad",
    viewBox: "0 0 16 16",
    paths: [
      "m6 3.312 1.565.42h.87l1.566-.42 2.894.776 1.938 6.162-.638 2.38-1.626.665-1.441-.387-.536-2L8 10.214l-2.592.694-.536 2-1.441.387-1.626-.665-.638-2.38 1.938-6.162ZM10.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 10.5 6M5 6v1H4v1h1v1h1V8h1V7H6V6Z",
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

const GamepadBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "gamepad",
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
GamepadBase.displayName = "Gamepad";

export const Gamepad = memo(GamepadBase) as typeof GamepadBase;
Gamepad.displayName = "Gamepad";
