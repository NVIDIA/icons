"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "microphone-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-microphone-off",
    viewBox: "0 0 16 16",
    paths: [
      "M13 8c0 .645-.122 1.261-.344 1.827l-.792-.791C11.953 8.706 12 8.358 12 8zm-2 0q0 .084-.005.167L10 7.172V4a2 2 0 0 0-3.873-.702l-.752-.751A3 3 0 0 1 11 4zm-1.262 2.445A3 3 0 0 1 5 8V5.707L1.646 2.354l.708-.708 12 12-.708.708-2.482-2.482a5 5 0 0 1-1.612.883L10.151 15H5.848l.602-2.245A5 5 0 0 1 3 8h1a4 4 0 0 0 3.897 3.999L8 12l.137-.002a4 4 0 0 0 2.316-.838Zm-.722-.722L6 6.707V8a2 2 0 0 0 3.016 1.723m-1.588 3.245L7.152 14h1.697l-.275-1.033a5 5 0 0 1-.445.031Q8.065 13.001 8 13a5 5 0 0 1-.572-.032",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-microphone-off",
    viewBox: "0 0 16 16",
    paths: [
      "M13 8c0 .645-.122 1.261-.344 1.827l-.792-.791C11.953 8.706 12 8.358 12 8zm-2 0q0 .084-.005.167l-5.62-5.62A3 3 0 0 1 11 4zm-.547 3.16A4 4 0 0 1 4 8H3a5 5 0 0 0 3.45 4.755L5.848 15h4.303l-.599-2.245a5 5 0 0 0 1.612-.884l2.482 2.483.708-.708-12-12-.708.708L5 5.707V8a3 3 0 0 0 4.738 2.445z",
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

const MicrophoneOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "microphone-off",
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
MicrophoneOffBase.displayName = "MicrophoneOff";

export const MicrophoneOff = memo(
  MicrophoneOffBase,
) as typeof MicrophoneOffBase;
MicrophoneOff.displayName = "MicrophoneOff";
