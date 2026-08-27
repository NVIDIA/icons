"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "firewall-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-firewall-off",
    viewBox: "0 0 16 16",
    paths: [
      "m1.354.646 14 14-.708.708L13.293 14H10v1H6v-1H2v-1h4v-1h1.5v-2H2V2.707L.646 1.354ZM9.293 10H8.5v2H10v1h2.293Zm-4-4H3v1h3.293ZM5 9V8H3v1Zm2 5h2v-1H7Zm.293-6H6v1h2.293ZM3 3.707V5h1.293Z",
      "m12.828 10-1-1H13V8h-2.172l-1-1H13V6H8.828l-1-1H13V3h-1v1H9V3H7v1h-.172L6 3.172V2h4v1h1V2h3v8Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-firewall-off",
    viewBox: "0 0 16 16",
    paths: [
      "m1.354.646 14 14-.708.708L13.293 14H10v1H6v-1H2v-1h4v-1h1.5v-2H6V8h1.293l-1-1H2V5h2.293l-1-1H2V2.707L.646 1.354ZM9.293 10H8.5v2H10v1h2.293Z",
      "M14 10h-1.172l-2-2H14Zm0-3H9.828L8.5 5.672V5H14Zm0-3H6.828L6 3.172V2h4v1h1V2h3ZM2 8h3v2H2Z",
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

const FirewallOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "firewall-off",
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
FirewallOffBase.displayName = "FirewallOff";

export const FirewallOff = memo(FirewallOffBase) as typeof FirewallOffBase;
FirewallOff.displayName = "FirewallOff";
