"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "remote" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-remote",
    viewBox: "0 0 16 16",
    paths: [
      "M5.25 2.236A5.47 5.47 0 0 1 8 1.5c1.003 0 1.941.268 2.75.736l.501-.866A6.5 6.5 0 0 0 8 .5a6.5 6.5 0 0 0-3.251.87zm1 1.732A3.5 3.5 0 0 1 8 3.5c.638 0 1.236.171 1.75.468l.501-.865A4.5 4.5 0 0 0 8 2.5c-.819 0-1.588.219-2.251.603zM8 6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 6.5M7.5 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m-.75 3.5v-1h1v1zm1.5-1v1h1v-1zM6.75 13v-1h1v1zm1.5-1v1h1v-1z",
      "M5 5h6v10H5Zm1 1v8h4V6Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-remote",
    viewBox: "0 0 16 16",
    paths: [
      "M5.25 2.236A5.47 5.47 0 0 1 8 1.5c1.003 0 1.941.268 2.75.736l.501-.866A6.5 6.5 0 0 0 8 .5a6.5 6.5 0 0 0-3.251.87zm1 1.732A3.5 3.5 0 0 1 8 3.5c.638 0 1.236.171 1.75.468l.501-.865A4.5 4.5 0 0 0 8 2.5c-.819 0-1.588.219-2.251.603zM7.5 8a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0",
      "M11 5v10H5V5ZM8 6.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8 6.5m-1.25 4v1h1v-1Zm2.5 0h-1v1h1ZM6.75 12v1h1v-1Zm2.5 0h-1v1h1Z",
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

const RemoteBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "remote",
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
RemoteBase.displayName = "Remote";

export const Remote = memo(RemoteBase) as typeof RemoteBase;
Remote.displayName = "Remote";
