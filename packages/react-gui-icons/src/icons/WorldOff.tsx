"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "world-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-world-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-1.771-1.772a6 6 0 0 1-8.456-8.456L1.646 2.354ZM9.293 10H6.179c.12.642.295 1.212.508 1.682C7.125 12.644 7.626 13 8 13s.875-.356 1.313-1.318c.163-.36.305-.78.416-1.246ZM3.1 7a5 5 0 0 0 0 2h1.94a12.6 12.6 0 0 1 0-2Zm2.938 5.6a5 5 0 0 1-.261-.504A8.6 8.6 0 0 1 5.163 10H3.416a5.02 5.02 0 0 0 2.622 2.6M6.293 7h-.25a11.6 11.6 0 0 0 0 2h2.25ZM4.129 4.836A5 5 0 0 0 3.416 6h1.747l.019-.111Zm6.413 6.414q-.14.454-.319.846a5 5 0 0 1-.261.504c.436-.186.84-.432 1.202-.728ZM14 8c0 .926-.21 1.804-.585 2.587L11.828 9H12.9a5 5 0 0 0 0-2h-1.94q.04.49.04 1l-.001.17-1.031-1.03L9.957 7h-.129l-1-1h.993a7.4 7.4 0 0 0-.508-1.682C8.875 3.356 8.374 3 8 3c-.331 0-.762.279-1.16 1.011L5.413 2.585A6 6 0 0 1 14 8m-3.163-2h1.747a5.02 5.02 0 0 0-2.622-2.6q.143.242.261.504c.271.597.481 1.31.614 2.096",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-world-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-1.771-1.772a6 6 0 0 1-8.456-8.456L1.646 2.354ZM9.293 10H6.179c.12.642.295 1.212.508 1.682C7.125 12.644 7.626 13 8 13s.875-.356 1.313-1.318c.163-.36.305-.78.416-1.246ZM3.1 7a5 5 0 0 0 0 2h1.94a12.6 12.6 0 0 1 0-2Zm2.938 5.6a5 5 0 0 1-.261-.504A8.6 8.6 0 0 1 5.163 10H3.416a5.02 5.02 0 0 0 2.622 2.6M6.293 7h-.25a11.6 11.6 0 0 0 0 2h2.25ZM4.129 4.836A5 5 0 0 0 3.416 6h1.747l.019-.111Zm6.413 6.414q-.14.454-.319.846a5 5 0 0 1-.261.504c.436-.186.84-.432 1.202-.728ZM14 8c0 .926-.21 1.804-.585 2.587L11.828 9H12.9a5 5 0 0 0 0-2h-1.94q.04.49.04 1l-.001.17-1.031-1.03L9.957 7h-.129l-1-1h.993a7.4 7.4 0 0 0-.508-1.682C8.875 3.356 8.374 3 8 3c-.331 0-.762.279-1.16 1.011L5.413 2.585A6 6 0 0 1 14 8m-3.163-2h1.747a5.02 5.02 0 0 0-2.622-2.6q.143.242.261.504c.271.597.481 1.31.614 2.096",
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

const WorldOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "world-off",
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
WorldOffBase.displayName = "WorldOff";

export const WorldOff = memo(WorldOffBase) as typeof WorldOffBase;
WorldOff.displayName = "WorldOff";
