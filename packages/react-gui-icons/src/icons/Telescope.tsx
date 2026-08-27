"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "telescope" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-telescope",
    viewBox: "0 0 16 16",
    paths: [
      "m13.016 1.828 1.357 5.064-2.332.625-.183-.683-2.117.567 1.739 6.492-.966.259-.634-2.368a4.5 4.5 0 0 1-2.765-.001l-.635 2.369-.966-.259 1.548-5.774-2.034.545-.183-.683-1.767.473.074.273-.966.259-.777-2.898.966-.259.079.293 1.766-.473-.183-.683 6.83-1.83-.183-.683Zm-1.89 2.274L5.262 5.673l.473 1.766 5.864-1.571ZM8.177 7.82l-.803 2.995c.353.12.732.185 1.126.185a3.5 3.5 0 0 0 1.121-.183L8.775 7.66Zm3.732-4.66.839 3.132.4-.107-.839-3.132Zm-7.43 3.455-1.766.473.107.4 1.766-.473Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-telescope",
    viewBox: "0 0 16 16",
    paths: [
      "m10.867 3.136.991 3.698-2.117.567 1.739 6.492-.966.259-.634-2.368a4.5 4.5 0 0 1-2.765-.001l-.635 2.369-.966-.259 1.548-5.774-1.068.286-.991-3.698ZM8.775 7.66l-.598.16-.803 2.995c.353.12.732.185 1.126.185a3.5 3.5 0 0 0 1.121-.183Zm4.232-.402 1.366-.366-1.357-5.064-1.366.366zm-8.162.723L4.22 5.649l-1.766.473-.079-.293-.966.259.777 2.898.966-.259-.074-.273z",
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

const TelescopeBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "telescope",
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
TelescopeBase.displayName = "Telescope";

export const Telescope = memo(TelescopeBase) as typeof TelescopeBase;
Telescope.displayName = "Telescope";
