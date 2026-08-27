"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "shield-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-shield-off",
    viewBox: "0 0 16 16",
    paths: [
      "m1.354.646 13 13-.708.708-2.032-2.033a6.58 6.58 0 0 1-3.493 2.164l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016c.003-.3.015-.468.032-.754l.695-.186-2.071-2.07Zm2.18 3.595-.544.145c-.002.226.003.547.025.937.045.798.167 1.871.468 2.984.596 2.208 1.86 4.455 4.517 5.176a5.6 5.6 0 0 0 2.904-1.872Zm9.949 4.327a12 12 0 0 1-.534 1.552l-.768-.768q.196-.519.336-1.045c.301-1.113.423-2.186.468-2.984.023-.39.026-.711.025-.937L8 3.044l-1.678.45-.817-.817L8 2.009l5.978 1.601c.015.252.03.502.032.754.002.245-.002.594-.026 1.016a16 16 0 0 1-.501 3.188",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-shield-off",
    viewBox: "0 0 16 16",
    paths: [
      "m1.354.646 13 13-.708.708-2.032-2.033a6.58 6.58 0 0 1-3.493 2.164l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016c.002-.252.017-.502.032-.754l.695-.186-2.071-2.07zm12.129 7.922a12 12 0 0 1-.534 1.552L5.506 2.677 8 2.009l5.978 1.601c.015.252.03.502.032.754.002.245-.002.594-.026 1.016a16 16 0 0 1-.501 3.188",
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

const ShieldOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "shield-off",
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
ShieldOffBase.displayName = "ShieldOff";

export const ShieldOff = memo(ShieldOffBase) as typeof ShieldOffBase;
ShieldOff.displayName = "ShieldOff";
