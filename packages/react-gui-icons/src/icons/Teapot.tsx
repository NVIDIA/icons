"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "teapot" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-teapot",
    viewBox: "0 0 16 16",
    paths: [
      "M7 4.5h2V5h1.91l.804 3h.403l.803-3h1.58v1h-.812l-.804 3h-.902l.518 1.934V11c0 .424-.332.685-.56.82-.262.154-.607.276-.991.372-.774.194-1.816.308-2.949.308s-2.176-.114-2.95-.308c-.383-.096-.729-.218-.99-.372-.229-.135-.56-.396-.56-.82v-.066L3.75 10H1.848L2.92 6h1.902l.268-1H7ZM5.857 6l-1.323 4.938.034.021c.144.084.384.178.725.263.673.169 1.631.278 2.707.278s2.033-.109 2.707-.278c.341-.085.581-.179.724-.263l.034-.021L10.143 6ZM4.554 7h-.866l-.536 2h.866Zm6.978 3.884-.005.006zm-7.065 0 .005.006z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-teapot",
    viewBox: "0 0 16 16",
    paths: [
      "M7 4.5h2V5h1.91l.804 3h.403l.803-3h1.58v1h-.812l-.804 3h-.902l.518 1.934V11c0 .424-.332.685-.56.82-.262.154-.607.276-.991.372-.774.194-1.816.308-2.949.308s-2.176-.114-2.95-.308c-.383-.096-.729-.218-.99-.372-.229-.135-.56-.396-.56-.82v-.066L3.75 10H1.848L2.92 6h1.902l.268-1H7ZM3.688 7l-.536 2h.866l.536-2Z",
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

const TeapotBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "teapot",
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
TeapotBase.displayName = "Teapot";

export const Teapot = memo(TeapotBase) as typeof TeapotBase;
Teapot.displayName = "Teapot";
