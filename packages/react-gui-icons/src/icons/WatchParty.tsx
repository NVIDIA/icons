"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "watch-party" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-watch-party",
    viewBox: "0 0 16 16",
    paths: [
      "M15 1H1v9h1V2h12v8h1z",
      "M7 3.254 9.992 5 7 6.745ZM8 8.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 8.5M7.5 10a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m-4.39 1H5.5v1H3.89l-.25 1H5v1H2.36zm9.78 0H10.5v1h1.61l.25 1H11v1h2.64zm-3.5 1 .75 3H5.86l.75-3Zm-2.25 2h1.72l-.25-1H7.39Zm4.36-6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 11.5 7.5M11 9a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M3 9a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 3 9m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-watch-party",
    viewBox: "0 0 16 16",
    paths: [
      "M15 1H1v9h1V2h12v8h1z",
      "M7 3.254 9.992 5 7 6.745ZM4.5 7.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 7.5m7 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 11.5 7.5m-5 2.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 10m.11 2h2.78l.75 3H5.86zm4.311 2h2.719l-.75-3h-2.719zm-5.092-3H3.11l-.75 3h2.719z",
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

const WatchPartyBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "watch-party",
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
WatchPartyBase.displayName = "WatchParty";

export const WatchParty = memo(WatchPartyBase) as typeof WatchPartyBase;
WatchParty.displayName = "WatchParty";
