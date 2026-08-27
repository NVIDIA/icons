"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "snow" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-snow",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 3.793V2h1v1.793l.647-.647.707.708L8.5 5.207v1.927l1.669-.963.495-1.849.966.258-.236.883 1.552-.896.5.866-1.552.896.883.237-.259.966-1.849-.495L9 8l1.669.963 1.849-.495.259.966-.883.237 1.552.896-.5.866-1.552-.896.236.883-.966.258-.495-1.849L8.5 8.866v1.927l1.354 1.353-.707.708-.647-.647V14h-1v-1.793l-.646.647-.707-.708L7.5 10.793V8.866l-1.669.963-.495 1.849-.966-.258.237-.883-1.553.896-.5-.866 1.553-.896-.883-.237.258-.966 1.849.495L7 8l-1.669-.963-1.849.495-.258-.966.883-.237-1.553-.896.5-.866 1.553.896-.237-.883.966-.258.495 1.849 1.669.963V5.207L6.147 3.854l.707-.708Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-snow",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 3.793V2h1v1.793l.646-.647.708.708L8.5 5.207v1.927l1.669-.963.495-1.849.966.258-.237.883 1.553-.896.5.866-1.553.896.883.237-.258.966-1.849-.495L9 8l1.669.963 1.849-.495.258.966-.883.237 1.553.896-.5.866-1.553-.896.237.883-.966.258-.495-1.849L8.5 8.866v1.927l1.354 1.353-.708.708-.646-.647V14h-1v-1.793l-.646.647-.708-.708L7.5 10.793V8.866l-1.669.963-.495 1.849-.966-.258.236-.883-1.552.896-.5-.866 1.552-.896-.883-.237.259-.966 1.849.495L7 8l-1.669-.963-1.849.495-.259-.966.883-.237-1.552-.896.5-.866 1.552.896-.236-.883.966-.258.495 1.849 1.669.963V5.207L6.146 3.854l.708-.708z",
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

const SnowBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "snow",
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
SnowBase.displayName = "Snow";

export const Snow = memo(SnowBase) as typeof SnowBase;
Snow.displayName = "Snow";
