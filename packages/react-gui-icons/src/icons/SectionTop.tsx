"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "section-top" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-section-top",
    viewBox: "0 0 16 16",
    paths: [
      "M2.5 7.497h11l1.747.002-.001 1-1.267-.001a6 6 0 0 1-11.959 0l-1.267.001-.001-1Zm10.475 1H3.024a5 5 0 0 0 9.951 0m-.256-2.211a5 5 0 0 0-.869-1.503l.766-.643c.445.53.801 1.14 1.043 1.804Zm-2.199-2.62a5 5 0 0 0-1.631-.594l.172-.985a6 6 0 0 1 1.959.713ZM4.189 4.783c-.372.443-.668.95-.869 1.503l-.94-.342A6 6 0 0 1 3.424 4.14Zm2.962-1.711a5 5 0 0 0-1.631.594L5.019 2.8a6 6 0 0 1 1.959-.713Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-section-top",
    viewBox: "0 0 16 16",
    paths: [
      "M8.889 3.072a5 5 0 0 1 1.631.594l.5-.866a6 6 0 0 0-1.959-.713zm-3.369.594a5 5 0 0 1 1.631-.594l-.173-.985a6 6 0 0 0-1.959.713zm6.33 1.117c.372.443.668.95.87 1.503l.939-.342a6 6 0 0 0-1.043-1.804zM3.32 6.286c.201-.553.497-1.06.869-1.503l-.765-.643A6 6 0 0 0 2.38 5.944zM13.5 7.497h-11l-1.748.002.001 1 1.267-.001a6.001 6.001 0 0 0 11.959 0l1.267.001.001-1z",
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

const SectionTopBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "section-top",
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
SectionTopBase.displayName = "SectionTop";

export const SectionTop = memo(SectionTopBase) as typeof SectionTopBase;
SectionTop.displayName = "SectionTop";
