"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "move-global" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-move-global",
    viewBox: "0 0 16 16",
    paths: [
      "m10.354 3.271-.708.708L8.5 2.832V4.5h-1V2.832L6.354 3.979l-.708-.708L8 .918Z",
      "M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M6.5 8a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 6.5 8",
      "M2.832 7.5H4.5v1H2.832l1.147 1.146-.708.708L.918 8l2.353-2.354.708.708Zm12.25.5-2.353 2.354-.708-.708L13.168 8.5H11.5v-1h1.668l-1.147-1.146.708-.707ZM8 15.082l-2.354-2.353.708-.708L7.5 13.168V11.5h1v1.668l1.146-1.147.708.708Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-move-global",
    viewBox: "0 0 16 16",
    paths: [
      "m8 .918 2.354 2.353-.708.708L8.5 2.832V4.5h-1V2.832L6.354 3.979l-.708-.708ZM8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m2.354 7.229L8 15.082l-2.354-2.353.708-.708L7.5 13.168V11.5h1v1.668l1.146-1.147ZM15.082 8l-2.353 2.354-.708-.708L13.168 8.5H11.5v-1h1.668l-1.147-1.146.708-.707ZM3.271 5.646l.708.708L2.832 7.5H4.5v1H2.832l1.147 1.146-.708.708L.918 8Z",
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

const MoveGlobalBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "move-global",
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
MoveGlobalBase.displayName = "MoveGlobal";

export const MoveGlobal = memo(MoveGlobalBase) as typeof MoveGlobalBase;
MoveGlobal.displayName = "MoveGlobal";
