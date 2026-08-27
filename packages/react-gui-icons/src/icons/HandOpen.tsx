"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "hand-open" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-hand-open",
    viewBox: "0 0 16 16",
    paths: [
      "M7 2.5a1.5 1.5 0 0 1 2.948-.395A1.5 1.5 0 0 1 12 3.5v.085q.236-.084.5-.085A1.5 1.5 0 0 1 14 5v6.5a3.5 3.5 0 0 1-3.5 3.5H6.409l-.149-.168-.538-.608-1.214-1.37c-.897-1.015-1.849-2.092-2.046-2.321-.535-.621-.574-1.494.026-2.094.613-.613 1.393-.479 1.988-.203.082.038.269.132.524.263V4a1.5 1.5 0 0 1 2-1.415Zm1 5H7V4a.5.5 0 0 0-1 0v6.14l-.73-.378a58 58 0 0 0-1.216-.619c-.448-.209-.692-.164-.859.003-.182.182-.215.456.025.735.191.222 1.136 1.291 2.037 2.31l1.213 1.37.389.439H10.5a2.5 2.5 0 0 0 2.5-2.5V5a.5.5 0 0 0-1 0v2.5h-1v-4a.5.5 0 0 0-1 0v4H9v-5a.5.5 0 0 0-1 0Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-hand-open",
    viewBox: "0 0 16 16",
    paths: [
      "M8.5 1A1.5 1.5 0 0 0 7 2.5v.085A1.5 1.5 0 0 0 5 4v4.499a20 20 0 0 0-.524-.263c-.595-.276-1.375-.41-1.988.203-.6.6-.561 1.473-.026 2.095.197.228 1.149 1.305 2.046 2.32l1.214 1.37.687.776H10.5a3.5 3.5 0 0 0 3.5-3.5V5a1.5 1.5 0 0 0-2-1.415V3.5a1.5 1.5 0 0 0-2.052-1.395A1.5 1.5 0 0 0 8.5 1",
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

const HandOpenBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "hand-open",
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
HandOpenBase.displayName = "HandOpen";

export const HandOpen = memo(HandOpenBase) as typeof HandOpenBase;
HandOpen.displayName = "HandOpen";
