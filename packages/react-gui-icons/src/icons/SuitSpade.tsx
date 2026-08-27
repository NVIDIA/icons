"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "suit-spade" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-suit-spade",
    viewBox: "0 0 16 16",
    paths: [
      "m8 1.492.434.76c.804 1.407 1.684 2.388 2.473 3.266q.241.268.469.528C12.26 7.056 13 8.053 13 9.5a2.5 2.5 0 0 1-3.205 2.399L10.358 14H5.643l.563-2.101A2.5 2.5 0 0 1 3 9.5c0-1.447.74-2.444 1.624-3.454q.227-.26.469-.528c.789-.878 1.669-1.859 2.473-3.266ZM5.376 6.704C4.51 7.694 4 8.447 4 9.5a1.5 1.5 0 0 0 2.638.977l.862.456L6.946 13h2.108l-.553-2.066.862-.456A1.5 1.5 0 0 0 12 9.5c0-1.053-.51-1.806-1.376-2.796q-.212-.24-.447-.501C9.517 5.469 8.74 4.604 8 3.461c-.74 1.143-1.517 2.008-2.177 2.742q-.235.26-.447.501",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-suit-spade",
    viewBox: "0 0 16 16",
    paths: [
      "M8.434 2.252 8 1.492l-.434.76C6.762 3.659 5.882 4.64 5.093 5.518q-.241.268-.469.528C3.74 7.056 3 8.053 3 9.5a2.5 2.5 0 0 0 3.206 2.399L5.643 14h4.715l-.563-2.101q.336.1.705.101A2.5 2.5 0 0 0 13 9.5c0-1.447-.74-2.444-1.624-3.454a40 40 0 0 0-.469-.528c-.788-.878-1.669-1.859-2.473-3.266",
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

const SuitSpadeBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "suit-spade",
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
SuitSpadeBase.displayName = "SuitSpade";

export const SuitSpade = memo(SuitSpadeBase) as typeof SuitSpadeBase;
SuitSpade.displayName = "SuitSpade";
