"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "network-signal-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-network-signal-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-4.63-4.631a2 2 0 0 1-2.739-2.739l-4.631-4.63Zm4.68 6.095a1 1 0 0 0 1.225 1.225Zm4.795 1.26.762.762C12.853 9.231 13 8.633 13 8a4 4 0 0 0-1.172-2.828l-.707.707C11.665 6.422 12 7.171 12 8c0 .351-.06.688-.171 1.001",
      "M15 8a5.97 5.97 0 0 1-.942 3.229l-.728-.727c.426-.736.67-1.59.67-2.502 0-1.381-.559-2.63-1.464-3.536l.707-.707A6 6 0 0 1 15 8M4.393 6.514l-.726-.726A4 4 0 0 0 3 8c0 1.104.448 2.105 1.172 2.828l.707-.707A3 3 0 0 1 4 8c0-.541.143-1.048.393-1.486",
      "M2 8c0-1.095.351-2.107.948-2.93l-.714-.715A5.97 5.97 0 0 0 1 8c0 1.657.672 3.157 1.757 4.243l.707-.707A5 5 0 0 1 2 8",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-network-signal-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-4.63-4.631a2 2 0 0 1-2.739-2.739l-4.631-4.63zm.594 3.424-.714-.715A5.97 5.97 0 0 0 1 8c0 1.657.672 3.157 1.757 4.243l.707-.707A5 5 0 0 1 2 8c0-1.095.351-2.107.948-2.93",
      "m4.393 6.514-.726-.726A4 4 0 0 0 3 8c0 1.104.448 2.105 1.172 2.828l.707-.707A3 3 0 0 1 4 8c0-.541.143-1.048.393-1.486M15 8a5.97 5.97 0 0 1-.942 3.229l-.728-.727c.426-.736.67-1.59.67-2.502 0-1.381-.559-2.63-1.464-3.536l.707-.707A6 6 0 0 1 15 8",
      "M13 8c0 .633-.147 1.231-.409 1.763l-.762-.762A3 3 0 0 0 12 8c0-.829-.335-1.578-.879-2.121l.707-.707A4 4 0 0 1 13 8",
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

const NetworkSignalOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "network-signal-off",
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
NetworkSignalOffBase.displayName = "NetworkSignalOff";

export const NetworkSignalOff = memo(
  NetworkSignalOffBase,
) as typeof NetworkSignalOffBase;
NetworkSignalOff.displayName = "NetworkSignalOff";
