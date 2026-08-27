"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "webcam" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-webcam",
    viewBox: "0 0 16 16",
    paths: [
      "M1 6.5A3.5 3.5 0 0 1 4.5 3h7a3.5 3.5 0 1 1 0 7H9.902l.268 1H11v1H5v-1h.831l.268-1H4.5A3.5 3.5 0 0 1 1 6.5M4.5 4a2.5 2.5 0 1 0 0 5h7a2.5 2.5 0 1 0 0-5ZM3 6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 3 6.5M7.134 10l-.268 1h2.268l-.268-1ZM12 7h-1V6h1ZM4.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-webcam",
    viewBox: "0 0 16 16",
    paths: [
      "M4.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      "M4.5 3h7a3.5 3.5 0 1 1 0 7H9.902l.268 1H11v1H5v-1h.831l.268-1H4.5a3.5 3.5 0 1 1 0-7M3 6.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 3 6.5M6.866 11h2.268l-.268-1H7.134ZM12 6h-1v1h1Z",
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

const WebcamBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "webcam",
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
WebcamBase.displayName = "Webcam";

export const Webcam = memo(WebcamBase) as typeof WebcamBase;
Webcam.displayName = "Webcam";
