"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "rocket" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-rocket",
    viewBox: "0 0 16 16",
    paths: [
      "M8 11.707v2l-1.5 1.5L4.793 13.5l1-1L5 11.707l-1.146 1.147-.707-.708L4.293 11l-.793-.793-1 1L.793 9.5l1.5-1.5h2l3.096-3.096q.402-.402.867-.75c1.268-.946 2.956-1.61 4.402-1.128l.237.079.079.237c.483 1.447-.182 3.134-1.128 4.402q-.348.465-.75.867Zm2.776-4.224L8.517 5.224a7 7 0 0 0-.421.387L4.207 9.5l.793.793.647-.647.707.708-.647.646.793.793 3.889-3.889q.2-.2.387-.421M9.335 4.628l2.038 2.037c.588-.946.877-1.947.718-2.756-.809-.159-1.81.13-2.756.719M7 12.707l-.793.793.293.293.5-.5ZM3.293 9h-.586l-.5.5.293.293Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-rocket",
    viewBox: "0 0 16 16",
    paths: [
      "M7.808 4.515a8 8 0 0 0-.419.389L4.293 8h-2l-1.5 1.5L2.5 11.207l1-1 .793.793-1.146 1.146.707.708L5 11.707l.793.793-1 1L6.5 15.207l1.5-1.5v-2l3.096-3.096q.201-.2.389-.419zm4.288 2.874c.807-1.217 1.317-2.732.878-4.047l-.079-.237-.237-.079c-1.315-.439-2.829.071-4.046.878z",
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

const RocketBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "rocket",
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
RocketBase.displayName = "Rocket";

export const Rocket = memo(RocketBase) as typeof RocketBase;
Rocket.displayName = "Rocket";
