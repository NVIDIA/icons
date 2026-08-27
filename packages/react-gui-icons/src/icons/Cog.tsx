"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "cog" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-cog",
    viewBox: "0 0 16 16",
    paths: [
      "M6.817 2.117a6 6 0 0 1 2.366 0l.372.074.125 1.633c.396.16.765.374 1.095.633l1.477-.707.25.284c.521.59.928 1.285 1.185 2.049l.121.359-1.352.926a4.5 4.5 0 0 1 0 1.264l1.352.926-.121.359a6 6 0 0 1-1.185 2.05l-.25.283-1.477-.707c-.33.259-.699.473-1.095.633l-.125 1.633-.372.074a6 6 0 0 1-2.366 0l-.372-.074-.125-1.633a4.5 4.5 0 0 1-1.095-.633l-1.477.707-.25-.283a6 6 0 0 1-1.185-2.05l-.121-.359 1.352-.926a4.5 4.5 0 0 1 0-1.264l-1.352-.926.121-.359a6 6 0 0 1 1.185-2.049l.25-.284 1.477.707c.33-.259.699-.473 1.095-.633l.125-1.633Zm.566.921L7.266 4.56l-.322.102c-.49.155-.935.415-1.306.755l-.249.228-1.378-.66a5 5 0 0 0-.618 1.067l1.261.864-.072.329a3.5 3.5 0 0 0 0 1.51l.072.329-1.261.864q.244.575.618 1.067l1.378-.66.249.228c.371.34.816.6 1.306.755l.322.102.117 1.522a5 5 0 0 0 1.234 0l.117-1.522.322-.102c.49-.155.935-.415 1.306-.755l.249-.228 1.378.66q.373-.492.618-1.067l-1.261-.864.072-.329a3.5 3.5 0 0 0 0-1.51l-.072-.329 1.261-.864a5 5 0 0 0-.618-1.067l-1.378.66-.249-.228c-.371-.34-.816-.6-1.306-.755l-.322-.102-.117-1.522a5 5 0 0 0-1.234 0M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-cog",
    viewBox: "0 0 16 16",
    paths: [
      "M6.817 2.117a6 6 0 0 1 2.366 0l.372.074.125 1.633c.396.16.765.374 1.095.633l1.477-.707.25.284c.521.59.928 1.285 1.185 2.049l.121.359-1.352.926a4.5 4.5 0 0 1 0 1.264l1.352.926-.121.359a6 6 0 0 1-1.185 2.05l-.25.283-1.477-.707c-.33.259-.699.473-1.095.633l-.125 1.633-.372.074a6 6 0 0 1-2.366 0l-.372-.074-.125-1.633a4.5 4.5 0 0 1-1.095-.633l-1.477.707-.25-.283a6 6 0 0 1-1.185-2.05l-.121-.359 1.352-.926a4.5 4.5 0 0 1 0-1.264l-1.352-.926.121-.359a6 6 0 0 1 1.185-2.049l.25-.284 1.477.707c.33-.259.699-.473 1.095-.633l.125-1.633ZM8 10a2 2 0 1 0 .001-3.999A2 2 0 0 0 8 10",
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

const CogBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "cog",
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
CogBase.displayName = "Cog";

export const Cog = memo(CogBase) as typeof CogBase;
Cog.displayName = "Cog";
