"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "os" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-os",
    viewBox: "0 0 16 16",
    paths: [
      "M15 3v11H1V3zM2 13h12V4H2z",
      "M7 8.5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 7 8.5m1 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m1.604.896c.403.404.828.604 1.396.604.867 0 1-.4 1-.5s-.133-.5-1-.5c-1.133 0-2-.6-2-1.5S9.867 6 11 6c.866 0 1.537.33 2.104.896l-.708.708C11.993 7.2 11.568 7 11 7c-.867 0-1 .4-1 .5s.133.5 1 .5c1.133 0 2 .6 2 1.5s-.867 1.5-2 1.5c-.866 0-1.537-.331-2.104-.896z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-os",
    viewBox: "0 0 16 16",
    paths: [
      "M5.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.5 7",
      "M15 14H1V3h14ZM5.5 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M11 6c-1.133 0-2 .6-2 1.5S9.867 9 11 9c.867 0 1 .4 1 .5s-.133.5-1 .5c-.568 0-.993-.2-1.396-.604l-.708.708C9.463 10.67 10.134 11 11 11c1.133 0 2-.6 2-1.5S12.133 8 11 8c-.867 0-1-.4-1-.5s.133-.5 1-.5c.568 0 .993.2 1.396.604l.708-.708C12.538 6.33 11.866 6 11 6",
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

const OsBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "os",
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
OsBase.displayName = "Os";

export const Os = memo(OsBase) as typeof OsBase;
Os.displayName = "Os";
