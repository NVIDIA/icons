"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "section-bottom" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-section-bottom",
    viewBox: "0 0 16 16",
    paths: [
      "M2.021 7.499a6 6 0 0 1 11.958 0l1.267-.001.002 1H.752l.002-1Zm1.004.001h9.95a5 5 0 0 0-9.95 0m3.954 6.41a6 6 0 0 1-1.96-.713l.501-.866a5 5 0 0 0 1.631.594Zm6.681-3.857a6 6 0 0 1-1.044 1.804l-.765-.643c.371-.443.668-.95.869-1.503Zm-2.639 3.144a6 6 0 0 1-1.959.713l-.173-.985a5 5 0 0 0 1.631-.594Zm-7.597-1.34a6 6 0 0 1-1.043-1.804l.939-.342c.202.553.498 1.06.87 1.503Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-section-bottom",
    viewBox: "0 0 16 16",
    paths: [
      "M8 2a6 6 0 0 0-5.979 5.499L.754 7.498l-.002 1h14.495l-.001-1-1.267.001A6 6 0 0 0 8 2m-5.619 8.053a6 6 0 0 0 1.043 1.804l.766-.643a5 5 0 0 1-.87-1.503zm10.235 1.804a6 6 0 0 0 1.044-1.804l-.94-.342a5 5 0 0 1-.87 1.503zm-7.597 1.34c.596.344 1.257.59 1.96.713l.172-.985a5 5 0 0 1-1.631-.594zm4.042.713a6 6 0 0 0 1.96-.713l-.501-.866a5 5 0 0 1-1.631.594z",
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

const SectionBottomBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "section-bottom",
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
SectionBottomBase.displayName = "SectionBottom";

export const SectionBottom = memo(
  SectionBottomBase,
) as typeof SectionBottomBase;
SectionBottom.displayName = "SectionBottom";
