"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "wifi-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-wifi-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-3.671-3.672q.024.155.025.318a2 2 0 1 1-1.682-1.975L6.486 7.193a6 6 0 0 0-2.729 1.564L3.05 8.05a7 7 0 0 1 2.635-1.658L4.154 4.861a9 9 0 0 0-2.518 1.775l-.707-.707a10 10 0 0 1 2.479-1.814L1.646 2.354ZM8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.243-1.243a6 6 0 0 0-1.969-1.311l-1.39-1.391A7 7 0 0 1 12.95 8.05zM8 4q-.561 0-1.105.067l-.871-.872A10 10 0 0 1 8 3a9.97 9.97 0 0 1 7.071 2.929l-.707.707A8.97 8.97 0 0 0 8 4",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-wifi-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-3.671-3.672q.024.156.025.318a2 2 0 1 1-1.682-1.975L6.486 7.193a6 6 0 0 0-2.729 1.564L3.05 8.05a7 7 0 0 1 2.635-1.658L4.154 4.861a9 9 0 0 0-2.518 1.775l-.707-.707a10 10 0 0 1 2.479-1.814L1.646 2.354zm9.889 7.111a6 6 0 0 0-1.969-1.311l-1.39-1.391A7 7 0 0 1 12.95 8.05zM8 4q-.562 0-1.104.067l-.872-.872Q6.984 3.001 8 3a9.97 9.97 0 0 1 7.071 2.929l-.707.707A8.97 8.97 0 0 0 8 4",
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

const WifiOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "wifi-off",
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
WifiOffBase.displayName = "WifiOff";

export const WifiOff = memo(WifiOffBase) as typeof WifiOffBase;
WifiOff.displayName = "WifiOff";
