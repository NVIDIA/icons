"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "eye-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-eye-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-2.907-2.908C9.894 11.78 8.965 12 8 12c-1.69 0-3.267-.674-4.479-1.455-1.2-.773-2.118-1.701-2.456-2.299L.926 8l.139-.246c.338-.598 1.256-1.526 2.456-2.299q.365-.237.773-.454L1.646 2.354Zm2.684 4.099a10 10 0 0 0-.976.55C3.131 6.896 2.442 7.56 2.103 8c.339.44 1.028 1.104 1.959 1.705C5.178 10.424 6.568 11 8 11c.67 0 1.331-.126 1.959-.334l-.943-.943a2 2 0 0 1-2.739-2.739Zm1.996 1.996a1 1 0 0 0 1.225 1.225Zm7.901.505c-.286.506-.988 1.25-1.925 1.935l-.717-.716c.752-.532 1.309-1.083 1.604-1.465-.34-.44-1.027-1.104-1.959-1.705C10.822 5.576 9.432 5 8 5q-.085 0-.169.003l-.913-.914A7 7 0 0 1 8 4c1.69 0 3.267.674 4.479 1.455 1.2.773 2.118 1.701 2.456 2.299l.139.246z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-eye-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-2.907-2.908C9.894 11.78 8.965 12 8 12c-1.69 0-3.267-.674-4.479-1.455-1.2-.773-2.118-1.701-2.456-2.299L.926 8l.139-.246c.338-.598 1.256-1.526 2.456-2.299q.365-.237.773-.454L1.646 2.354Zm3.923 5.338a2 2 0 0 0 2.739 2.739l-.757-.757a1 1 0 0 1-1.225-1.225Zm8.658 1.262c-.286.506-.988 1.25-1.925 1.935L6.918 4.09Q7.449 4.002 8 4c1.69 0 3.267.674 4.479 1.455 1.2.773 2.118 1.701 2.456 2.299l.139.246z",
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

const EyeOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "eye-off",
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
EyeOffBase.displayName = "EyeOff";

export const EyeOff = memo(EyeOffBase) as typeof EyeOffBase;
EyeOff.displayName = "EyeOff";
