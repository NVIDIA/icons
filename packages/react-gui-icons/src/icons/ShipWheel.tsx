"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "ship-wheel" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-ship-wheel",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 2.021V1h1v1.021a5.97 5.97 0 0 1 3.374 1.397l.722-.721.707.707-.721.722A5.97 5.97 0 0 1 13.979 7.5H15v1h-1.021a5.97 5.97 0 0 1-1.397 3.374l.721.722-.707.707-.722-.721A5.97 5.97 0 0 1 8.5 13.979V15h-1v-1.021a5.97 5.97 0 0 1-3.374-1.397l-.722.721-.707-.707.721-.722A5.97 5.97 0 0 1 2.021 8.5H1v-1h1.021a5.97 5.97 0 0 1 1.397-3.374l-.721-.722.707-.707.722.721A5.97 5.97 0 0 1 7.5 2.021m1 4.042q.276.072.516.214l2.148-2.148A4.97 4.97 0 0 0 8.5 3.025Zm2.664 5.809L9.016 9.723a2 2 0 0 1-.516.214v3.038a4.97 4.97 0 0 0 2.664-1.103m.708-7.036L9.723 6.984q.142.24.214.516h3.038a4.97 4.97 0 0 0-1.103-2.664M3.025 7.5h3.038q.072-.276.214-.516L4.129 4.836A4.97 4.97 0 0 0 3.025 7.5M7.5 3.025a4.97 4.97 0 0 0-2.664 1.104l2.148 2.148q.24-.142.516-.214Zm0 9.95V9.937a2 2 0 0 1-.516-.214l-2.148 2.149A4.97 4.97 0 0 0 7.5 12.975M12.975 8.5H9.937q-.072.276-.214.516l2.149 2.148A4.97 4.97 0 0 0 12.975 8.5m-8.846 2.664 2.148-2.148a2 2 0 0 1-.214-.516H3.025a4.97 4.97 0 0 0 1.104 2.664M8 7a1 1 0 0 0-.707.293A1 1 0 0 0 7 8c0 .276.111.526.293.707A1 1 0 0 0 8 9a1 1 0 0 0 .707-.293A1 1 0 0 0 9 8a1 1 0 0 0-.293-.707A1 1 0 0 0 8 7",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-ship-wheel",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 1h1v1.021a5.97 5.97 0 0 1 3.374 1.397l.722-.721.707.707-.721.722A5.97 5.97 0 0 1 13.979 7.5H15v1h-1.021a5.97 5.97 0 0 1-1.397 3.374l.721.722-.707.707-.722-.721A5.97 5.97 0 0 1 8.5 13.979V15h-1v-1.021a5.97 5.97 0 0 1-3.374-1.397l-.722.721-.707-.707.721-.722A5.97 5.97 0 0 1 2.021 8.5H1v-1h1.021a5.97 5.97 0 0 1 1.397-3.374l-.721-.722.707-.707.722.721A5.97 5.97 0 0 1 7.5 2.021Zm1.516 5.277 2.148-2.148A4.97 4.97 0 0 0 8.5 3.025v3.038q.276.072.516.214m0 3.446a2 2 0 0 1-.516.214v3.038a4.97 4.97 0 0 0 2.664-1.103Zm.707-2.739q.142.24.214.516h3.038a4.97 4.97 0 0 0-1.103-2.664Zm-3.66.516q.072-.276.214-.516L4.129 4.836A4.97 4.97 0 0 0 3.025 7.5ZM4.836 4.129l2.148 2.148q.24-.142.516-.214V3.025a4.97 4.97 0 0 0-2.664 1.104M7.5 9.937a2 2 0 0 1-.516-.214l-2.148 2.149A4.97 4.97 0 0 0 7.5 12.975ZM9.937 8.5q-.072.276-.214.516l2.149 2.148A4.97 4.97 0 0 0 12.975 8.5Zm-3.66.516a2 2 0 0 1-.214-.516H3.025a4.97 4.97 0 0 0 1.104 2.664Z",
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

const ShipWheelBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "ship-wheel",
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
ShipWheelBase.displayName = "ShipWheel";

export const ShipWheel = memo(ShipWheelBase) as typeof ShipWheelBase;
ShipWheel.displayName = "ShipWheel";
