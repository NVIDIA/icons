"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "hand-closed" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-hand-closed",
    viewBox: "0 0 16 16",
    paths: [
      "M9.764 5.193a1.497 1.497 0 0 1 2 .5A1.5 1.5 0 0 1 14 7v4.5a3.5 3.5 0 0 1-3.5 3.5H6.427l-2.695-2.694A2.5 2.5 0 0 1 3 10.538V9.5c0-1.209.859-2.218 2-2.45V6.5a1.5 1.5 0 0 1 2.236-1.307 1.497 1.497 0 0 1 2.528 0M8.5 5.5A.5.5 0 0 0 8 6v1H7v-.5a.5.5 0 0 0-1 0V9H5v-.915A1.5 1.5 0 0 0 4 9.5v1.038c0 .398.158.779.439 1.06L6.841 14H10.5a2.5 2.5 0 0 0 2.5-2.5V7a.5.5 0 0 0-1 0v.5h-1v-1a.5.5 0 0 0-1 0V7H9V6a.5.5 0 0 0-.5-.5",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-hand-closed",
    viewBox: "0 0 16 16",
    paths: [
      "M10.5 5c-.267 0-.518.07-.736.192a1.498 1.498 0 0 0-2.528 0A1.503 1.503 0 0 0 5 6.5v.55A2.5 2.5 0 0 0 3 9.5v1.038c0 .664.264 1.299.732 1.768L6.427 15H10.5a3.5 3.5 0 0 0 3.5-3.5V7a1.5 1.5 0 0 0-2.236-1.308A1.5 1.5 0 0 0 10.5 5",
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

const HandClosedBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "hand-closed",
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
HandClosedBase.displayName = "HandClosed";

export const HandClosed = memo(HandClosedBase) as typeof HandClosedBase;
HandClosed.displayName = "HandClosed";
