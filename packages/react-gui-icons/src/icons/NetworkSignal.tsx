"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "network-signal" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-network-signal",
    viewBox: "0 0 16 16",
    paths: [
      "M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8M1 8c0-1.657.672-3.157 1.757-4.243l.708.707A4.98 4.98 0 0 0 2 8c0 1.381.559 2.63 1.465 3.535l-.708.708A6 6 0 0 1 1 8m12.243-4.243A6 6 0 0 1 15 8a6 6 0 0 1-1.757 4.243l-.707-.708A4.98 4.98 0 0 0 14 8c0-1.381-.559-2.63-1.464-3.536Zm-1.415 1.415A4 4 0 0 1 13 8a4 4 0 0 1-1.172 2.828l-.707-.707A3 3 0 0 0 12 8c0-.829-.335-1.578-.879-2.121ZM3 8c0-1.104.448-2.105 1.172-2.828l.707.707A3 3 0 0 0 4 8c0 .829.335 1.578.879 2.121l-.707.707A4 4 0 0 1 3 8m5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-network-signal",
    viewBox: "0 0 16 16",
    paths: [
      "M2.757 3.757A6 6 0 0 0 1 8c0 1.657.672 3.157 1.757 4.243l.707-.707A5 5 0 0 1 2 8c0-1.381.559-2.63 1.464-3.536zM15 8a6 6 0 0 0-1.757-4.243l-.707.707A5 5 0 0 1 14 8c0 1.381-.559 2.63-1.464 3.536l.707.707A6 6 0 0 0 15 8",
      "M4.172 5.172A4 4 0 0 0 3 8c0 1.104.448 2.105 1.172 2.828l.707-.707A3 3 0 0 1 4 8c0-.829.335-1.578.879-2.121zM13 8a4 4 0 0 0-1.172-2.828l-.707.707C11.665 6.422 12 7.171 12 8s-.335 1.578-.879 2.121l.707.707A4 4 0 0 0 13 8M8 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6",
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

const NetworkSignalBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "network-signal",
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
NetworkSignalBase.displayName = "NetworkSignal";

export const NetworkSignal = memo(
  NetworkSignalBase,
) as typeof NetworkSignalBase;
NetworkSignal.displayName = "NetworkSignal";
