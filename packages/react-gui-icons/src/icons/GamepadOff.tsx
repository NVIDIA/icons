"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "gamepad-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-gamepad-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-1.064-1.065-.013.006-1.441-.387-.393-1.466-.677-.677L8 10.214l-2.592.694-.536 2-1.441.387-1.626-.665-.638-2.38 1.938-6.162.218-.058-1.677-1.676Zm1.785 3.2-.245.066-1.685 5.361.434 1.619.854.349.559-.149.536-2L8 9.179l.644.172L7 7.707V8H6v1H5V8H4V7h1V6h.293ZM6 6.707V7h.293Zm8.833 3.543-.371 1.384-.816-.817.145-.544-1.685-5.361-2.105-.564-1.435.384H7.56L6.193 3.364l1.373.368h.869l1.566-.42 2.894.776z",
      "M12 7.5c0 .458-.205.868-.528 1.143l-.715-.714a.5.5 0 1 0-.686-.686l-.714-.714A1.5 1.5 0 0 1 12 7.5",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-gamepad-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-1.064-1.065-.013.006-1.441-.387-.393-1.466-.677-.677L8 10.214l-2.592.694-.536 2-1.441.387-1.626-.665-.638-2.38 1.938-6.162.218-.058-1.677-1.676ZM5.293 6H5v1H4v1h1v1h1V8h1v-.293L6.293 7H6v-.293Zm9.54 4.25-.371 1.384-2.99-2.991a1.5 1.5 0 1 0-2.115-2.114L6.193 3.364l1.373.368h.869l1.566-.42 2.894.776z",
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

const GamepadOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "gamepad-off",
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
GamepadOffBase.displayName = "GamepadOff";

export const GamepadOff = memo(GamepadOffBase) as typeof GamepadOffBase;
GamepadOff.displayName = "GamepadOff";
