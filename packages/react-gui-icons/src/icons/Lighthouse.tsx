"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "lighthouse" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-lighthouse",
    viewBox: "0 0 16 16",
    paths: [
      "M10 1.616V5h1v2.115l-.889.238L12.161 15H3.839l2.048-7.647L5 7.115V5h1V1.616l2-.536ZM6 6.348l1.112.298L5.143 14h5.714L8.888 6.646 10 6.348V6H6Zm1-3.965V5h2V2.383l-1.001-.268Zm-1.87-.114-.255.946.255.947-4 1.072-.26-.965 3.929-1.054L.87 2.162l.26-.966zm10-.107L11.2 3.215l3.93 1.054-.26.965-4-1.072.13-.482.124-.465-.253-.946 3.999-1.073z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-lighthouse",
    viewBox: "0 0 16 16",
    paths: [
      "m11 7.117-.371.1-.518.137 2.05 7.648H3.839l2.048-7.648-.517-.137-.37-.1V6h6zM5.13 2.271l-.255.946.255.947-4 1.072-.26-.965 3.929-1.054L.87 2.164l.26-.966zm10-.107L11.2 3.217l3.93 1.054-.26.965-4-1.072.13-.482.124-.465-.253-.946 3.999-1.073zM8.129 1.116 10 1.618V5H6V1.618l1.87-.502.13-.034z",
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

const LighthouseBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "lighthouse",
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
LighthouseBase.displayName = "Lighthouse";

export const Lighthouse = memo(LighthouseBase) as typeof LighthouseBase;
Lighthouse.displayName = "Lighthouse";
