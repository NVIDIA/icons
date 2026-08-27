"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "lasso" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-lasso",
    viewBox: "0 0 16 16",
    paths: [
      "M10.779 3.843a5 5 0 0 0-1.802-.748l.195-.981a6 6 0 0 1 2.162.897zm-3.754-.747a5 5 0 0 0-1.803.746l-.555-.832a6 6 0 0 1 2.163-.895zM3.844 5.222a5 5 0 0 0-.748 1.802l-.981-.195a6 6 0 0 1 .897-2.162zm-.747 3.753c.127.64.378 1.254.746 1.804l-.832.555a6 6 0 0 1-.895-2.164zm2.126 3.182a5 5 0 0 0 1.802.748l-.195.981a6 6 0 0 1-2.162-.897zM14.207 9.5l-4.5 4.5H8v-1.707l4.5-4.5ZM9 13h.293l3.5-3.5-.293-.293-3.5 3.5Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-lasso",
    viewBox: "0 0 16 16",
    paths: [
      "M10.779 3.843a5 5 0 0 0-1.802-.748l.195-.981a6 6 0 0 1 2.162.897zm-3.754-.747a5 5 0 0 0-1.803.746l-.555-.832a6 6 0 0 1 2.163-.895zM3.844 5.222a5 5 0 0 0-.748 1.802l-.981-.195a6 6 0 0 1 .897-2.162zm-.747 3.753c.127.64.378 1.254.746 1.804l-.832.555a6 6 0 0 1-.895-2.164zm2.126 3.182a5 5 0 0 0 1.802.748l-.195.981a6 6 0 0 1-2.162-.897zM12.5 7.793 14.207 9.5l-4.5 4.5H8v-1.707z",
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

const LassoBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "lasso",
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
LassoBase.displayName = "Lasso";

export const Lasso = memo(LassoBase) as typeof LassoBase;
Lasso.displayName = "Lasso";
