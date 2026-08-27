"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "lifebuoy" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-lifebuoy",
    viewBox: "0 0 16 16",
    paths: [
      "M4.999 2.803A6 6 0 0 1 8 2c1.092 0 2.117.292 3 .803a6 6 0 0 1 2.196 2.196C13.708 5.882 14 6.908 14 8a6 6 0 0 1-.803 3.001 6.04 6.04 0 0 1-2.196 2.196A6 6 0 0 1 8 14a5.97 5.97 0 0 1-3.001-.804 6 6 0 0 1-2.196-2.195A6 6 0 0 1 2 8c0-1.092.292-2.118.803-3.001a6.04 6.04 0 0 1 2.196-2.196M8 6a1.99 1.99 0 0 0-1.733 1A2 2 0 0 0 6 8a1.99 1.99 0 0 0 1 1.732A2 2 0 0 0 8 10a1.99 1.99 0 0 0 1.733-1A2 2 0 0 0 10 8a1.99 1.99 0 0 0-1-1.733A2 2 0 0 0 8 6m2.055 6.56-1.009-1.748A3 3 0 0 1 8 11c-.368 0-.721-.066-1.047-.188l-1.009 1.747A5 5 0 0 0 8 13c.733 0 1.429-.158 2.055-.44m2.504-6.615-1.747 1.008C10.934 7.28 11 7.632 11 8s-.066.72-.188 1.046l1.748 1.009C12.842 9.429 13 8.733 13 8s-.158-1.429-.441-2.055m-9.119 4.11 1.748-1.009A3 3 0 0 1 5 8c0-.368.066-.72.188-1.046L3.44 5.945A5 5 0 0 0 3 8c0 .733.157 1.428.44 2.055M5.945 3.44l1.009 1.748A3 3 0 0 1 8 5c.367 0 .72.066 1.046.188l1.009-1.748A5 5 0 0 0 8 3c-.733 0-1.429.158-2.055.44m4.975.501L9.912 5.688q.218.18.4.4l1.747-1.009a5 5 0 0 0-1.139-1.138m1.139 6.98-1.747-1.009a3 3 0 0 1-.4.4l1.009 1.747a5.1 5.1 0 0 0 1.138-1.138M3.941 5.079l1.747 1.009q.182-.219.4-.4L5.079 3.941a5.1 5.1 0 0 0-1.138 1.138m1.138 6.98 1.009-1.748a3 3 0 0 1-.4-.399L3.941 10.92c.316.438.7.823 1.138 1.139",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-lifebuoy",
    viewBox: "0 0 16 16",
    paths: [
      "M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m-4 0a2 2 0 1 0-3.999-.001A2 2 0 0 0 10 8m2.331-2.501a5.03 5.03 0 0 0-1.831-1.83l-1 1.732c.455.264.835.643 1.099 1.099ZM6.5 5.401l-1-1.732A5 5 0 0 0 3.669 5.5l1.733 1A3 3 0 0 1 6.5 5.401m5.831 5.099-1.732-1A3 3 0 0 1 9.5 10.598l1 1.733a5 5 0 0 0 1.831-1.831m-8.662 0a5.03 5.03 0 0 0 1.83 1.831L6.5 10.598A3 3 0 0 1 5.402 9.5Z",
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

const LifebuoyBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "lifebuoy",
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
LifebuoyBase.displayName = "Lifebuoy";

export const Lifebuoy = memo(LifebuoyBase) as typeof LifebuoyBase;
Lifebuoy.displayName = "Lifebuoy";
