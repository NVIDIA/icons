"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "cog-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-cog-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-2.755-2.756-.116-.055c-.33.259-.698.473-1.095.633l-.125 1.633-.372.074a6 6 0 0 1-2.366 0l-.372-.074-.125-1.633a4.5 4.5 0 0 1-1.095-.633l-1.477.707-.25-.283a6 6 0 0 1-1.185-2.05l-.121-.359 1.352-.926a4.5 4.5 0 0 1 0-1.264l-1.352-.926.121-.359a6 6 0 0 1 1.106-1.957L1.646 2.354ZM4.523 5.23l-.512-.245a5 5 0 0 0-.618 1.067l1.261.864-.072.329a3.5 3.5 0 0 0 0 1.51l.072.329-1.261.864c.162.382.371.74.618 1.067l1.378-.66.249.228c.371.34.816.6 1.306.755l.322.102.117 1.522a5 5 0 0 0 1.234 0l.117-1.522.322-.102a3.5 3.5 0 0 0 1.04-.535l-1.08-1.08a2 2 0 0 1-2.739-2.739Zm2.511 2.511a1 1 0 0 0 1.225 1.225Zm6.653 2.176q-.116.345-.272.67l-1.969-1.97a3.6 3.6 0 0 0-.028-1.372l-.072-.329 1.261-.864a5 5 0 0 0-.618-1.067l-1.378.66-.249-.228c-.371-.34-.816-.6-1.306-.755l-.322-.102-.117-1.522a5 5 0 0 0-1.234 0l-.108 1.408-.931-.931.101-1.324.372-.074a6 6 0 0 1 2.366 0l.372.074.125 1.633c.397.16.765.374 1.095.633l1.477-.707.25.284c.521.59.928 1.285 1.185 2.049l.121.359-1.352.926a4.5 4.5 0 0 1 0 1.264l1.352.926z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-cog-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-2.755-2.756-.116-.055a4.5 4.5 0 0 1-1.095.633l-.125 1.633-.372.074a6 6 0 0 1-2.366 0l-.372-.074-.125-1.633a4.5 4.5 0 0 1-1.095-.633l-1.477.707-.25-.283a6 6 0 0 1-1.185-2.05l-.121-.359 1.352-.926a4.5 4.5 0 0 1 0-1.264l-1.352-.926.121-.359a6 6 0 0 1 1.105-1.957L1.646 2.354Zm3.923 5.338a2 2 0 0 0 2.739 2.739Zm7.138 3.603q.156-.326.272-.67l.121-.359-1.352-.926a4.6 4.6 0 0 0 0-1.264l1.352-.926-.121-.359a6 6 0 0 0-1.185-2.049l-.25-.284-1.477.707a4.5 4.5 0 0 0-1.095-.633l-.125-1.633-.372-.074a6 6 0 0 0-2.366 0l-.372.074-.102 1.324z",
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

const CogOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "cog-off",
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
CogOffBase.displayName = "CogOff";

export const CogOff = memo(CogOffBase) as typeof CogOffBase;
CogOff.displayName = "CogOff";
