"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "headset" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-headset",
    viewBox: "0 0 16 16",
    paths: [
      "M3.076 7H4v4H1.64L.973 9l.667-2h.426c.18-1.339.727-2.486 1.588-3.346C4.722 2.586 6.231 2 8 2s3.278.586 4.346 1.654c.861.86 1.408 2.007 1.588 3.346h.426l.667 2-.667 2H14v3H9v.5H7v-2h2v.5h4v-2h-1V7h.924c-.171-1.086-.624-1.978-1.285-2.639C10.785 3.507 9.545 3 8 3s-2.786.507-3.639 1.361C3.7 5.022 3.247 5.914 3.076 7m-.715 1-.334 1 .334 1H3V8Zm11.278 0H13v2h.639l.334-1Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-headset",
    viewBox: "0 0 16 16",
    paths: [
      "M2.066 7H1.64L.973 9l.667 2H4V7h-.924c.171-1.086.624-1.978 1.285-2.639C5.214 3.507 6.455 3 8 3s2.786.507 3.639 1.361c.661.661 1.114 1.553 1.285 2.639H12v4h1v2H9v-.5H7v2h2V14h5v-3h.36l.667-2-.667-2h-.426c-.18-1.339-.727-2.486-1.588-3.346C11.278 2.586 9.769 2 8 2s-3.278.586-4.346 1.654C2.793 4.514 2.246 5.661 2.066 7",
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

const HeadsetBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "headset",
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
HeadsetBase.displayName = "Headset";

export const Headset = memo(HeadsetBase) as typeof HeadsetBase;
Headset.displayName = "Headset";
