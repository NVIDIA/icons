"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "fog" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-fog",
    viewBox: "0 0 16 16",
    paths: [
      "M8 2a3.5 3.5 0 0 0-3.5 3.5v.036l.005.428-.422.071A2.5 2.5 0 0 0 2 8.5H1a3.5 3.5 0 0 1 2.514-3.359 4.501 4.501 0 0 1 8.625-1.409A4.25 4.25 0 0 1 15 7.75h-1a3.25 3.25 0 0 0-2.373-3.13l-.247-.07-.088-.242A3.5 3.5 0 0 0 8 2m-.996 10.561a3.5 3.5 0 0 0-2.252-.302l-3.654.731-.196-.98 3.654-.731c.981-.196 2-.06 2.895.387l1.545.773a3.5 3.5 0 0 0 2.252.302l3.654-.731.196.98-3.654.731c-.981.196-2 .06-2.895-.388z",
      "M4.752 10.259a3.5 3.5 0 0 1 2.252.302l1.545.772a4.5 4.5 0 0 0 2.895.388l3.654-.731-.196-.98-3.654.731a3.5 3.5 0 0 1-2.252-.302l-1.545-.772a4.5 4.5 0 0 0-2.895-.388l-3.654.731.196.98z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-fog",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a4.5 4.5 0 0 0-4.486 4.141 3.5 3.5 0 0 0-2.441 2.645l-.154.74 3.833-.767a3.5 3.5 0 0 1 2.252.302l1.545.772a4.5 4.5 0 0 0 2.895.388L15 8.51v-.76a4.25 4.25 0 0 0-2.861-4.018A4.5 4.5 0 0 0 8 1m-.996 11.561a3.5 3.5 0 0 0-2.252-.302l-3.654.731-.196-.98 3.654-.731c.981-.196 2-.06 2.895.387l1.545.773a3.5 3.5 0 0 0 2.252.302l3.654-.731.196.98-3.654.731c-.981.196-2 .06-2.895-.388z",
      "M4.752 10.259a3.5 3.5 0 0 1 2.252.302l1.545.772a4.5 4.5 0 0 0 2.895.388l3.654-.731-.196-.98-3.654.731a3.5 3.5 0 0 1-2.252-.302l-1.545-.772a4.5 4.5 0 0 0-2.895-.388l-3.654.731.196.98z",
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

const FogBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "fog",
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
FogBase.displayName = "Fog";

export const Fog = memo(FogBase) as typeof FogBase;
Fog.displayName = "Fog";
