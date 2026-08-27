"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "secure" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-secure",
    viewBox: "0 0 16 16",
    paths: [
      "m7.524 10.231 3.852-4.402-.752-.658-3.148 3.597-1.622-1.622-.708.707z",
      "m13.978 3.61.021.361v.003L14 3.98l.001.021.003.077q.004.102.006.286c.002.245-.002.594-.027 1.016a16 16 0 0 1-.5 3.188c-.645 2.384-2.102 5.102-5.362 5.917l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016q.002-.184.006-.286l.003-.077L2 3.98l.001-.006v-.002L2.5 4l-.499-.029.021-.361L8 2.009ZM3.015 5.323c.045.798.167 1.871.468 2.984.596 2.208 1.86 4.455 4.517 5.176 2.657-.721 3.921-2.968 4.517-5.176.301-1.113.423-2.186.468-2.984.022-.39.026-.711.025-.937L8 3.044 2.99 4.386c-.002.226.002.547.025.937",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-secure",
    viewBox: "0 0 16 16",
    paths: [
      "m8 2.009 5.978 1.601.021.361v.003L14 3.98l.001.021.003.077q.004.102.006.286c.002.245-.002.594-.027 1.016a16 16 0 0 1-.5 3.188c-.645 2.384-2.102 5.102-5.362 5.917l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016q.002-.184.006-.286l.003-.077L2 3.98l.001-.006v-.002L2.5 4l-.499-.029.021-.361Zm-.476 8.222 3.852-4.402-.752-.658-3.148 3.597-1.622-1.622-.708.707Z",
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

const SecureBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "secure",
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
SecureBase.displayName = "Secure";

export const Secure = memo(SecureBase) as typeof SecureBase;
Secure.displayName = "Secure";
