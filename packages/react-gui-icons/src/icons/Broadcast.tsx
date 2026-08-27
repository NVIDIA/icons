"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "broadcast" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-broadcast",
    viewBox: "0 0 16 16",
    paths: [
      "M1 8a7 7 0 1 1 13.062 3.502l-.865-.501A6 6 0 1 0 2 8c0 1.094.292 2.119.803 3.001l-.865.501A6.97 6.97 0 0 1 1 8m6 0a1 1 0 1 1 1.706.708l1.517 5.663-.966.258-.302-1.129H7.043l-.303 1.129-.966-.258 1.518-5.665A1 1 0 0 1 7 8M4 8a4 4 0 1 1 7.464 2.002l-.866-.501a3 3 0 1 0-5.196 0l-.866.501A4 4 0 0 1 4 8m3.999 1.932L7.311 12.5h1.376Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-broadcast",
    viewBox: "0 0 16 16",
    paths: [
      "M1 8a7 7 0 1 1 13.062 3.502l-.865-.501A6 6 0 1 0 2 8c0 1.094.292 2.119.803 3.001l-.865.501A6.97 6.97 0 0 1 1 8m6 0a1 1 0 1 1 1.706.708l1.517 5.663-.966.258-.302-1.129H7.043l-.303 1.129-.966-.258 1.518-5.665A1 1 0 0 1 7 8M4 8a4 4 0 1 1 7.464 2.002l-.866-.501a3 3 0 1 0-5.196 0l-.866.501A4 4 0 0 1 4 8m3.999 1.932L7.311 12.5h1.376Z",
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

const BroadcastBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "broadcast",
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
BroadcastBase.displayName = "Broadcast";

export const Broadcast = memo(BroadcastBase) as typeof BroadcastBase;
Broadcast.displayName = "Broadcast";
