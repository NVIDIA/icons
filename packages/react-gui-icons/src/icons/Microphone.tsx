"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "microphone" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-microphone",
    viewBox: "0 0 16 16",
    paths: [
      "M5 4a3 3 0 1 1 6 0v4a3 3 0 1 1-6 0Zm3-2a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2m-.103 9.999L8 12l.135-.002A4 4 0 0 0 12 8h1a5 5 0 0 1-3.448 4.755L10.151 15H5.848l.602-2.245A5 5 0 0 1 3 8h1a4 4 0 0 0 3.897 3.999m-.469.969L7.152 14h1.697l-.275-1.033a5 5 0 0 1-.445.031Q8.065 13.001 8 13q-.12 0-.239-.006a5 5 0 0 1-.333-.026",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-microphone",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0V4a3 3 0 0 0-3-3",
      "M8 12a4 4 0 0 1-4-4H3a5 5 0 0 0 3.45 4.755L5.848 15h4.303l-.599-2.245A5 5 0 0 0 13 8h-1a4 4 0 0 1-4 4",
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

const MicrophoneBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "microphone",
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
MicrophoneBase.displayName = "Microphone";

export const Microphone = memo(MicrophoneBase) as typeof MicrophoneBase;
Microphone.displayName = "Microphone";
