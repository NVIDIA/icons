"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "auto-record-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-auto-record-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-4.63-4.631a2 2 0 0 1-2.739-2.739L4.84 5.547a4.002 4.002 0 0 0 1.844 6.232 1.5 1.5 0 1 1-.158 1 5 5 0 0 1-2.397-7.943L1.646 2.354ZM8 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-.966-4.259a1 1 0 0 0 1.225 1.225ZM8 4a4 4 0 0 0-1.036.135l-.791-.791a5 5 0 0 1 6.783 3.993l.69-.691.708.708L12 9.707V8a4 4 0 0 0-4-4",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-auto-record-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-4.63-4.631a2 2 0 0 1-2.739-2.739L4.84 5.547a4.002 4.002 0 0 0 1.844 6.232 1.5 1.5 0 1 1-.158 1 5 5 0 0 1-2.397-7.943L1.646 2.354zM8 4c-.358 0-.706.047-1.036.136l-.791-.792a5 5 0 0 1 6.783 3.993l.69-.691.708.708L12 9.707V8a4 4 0 0 0-4-4",
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

const AutoRecordOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "auto-record-off",
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
AutoRecordOffBase.displayName = "AutoRecordOff";

export const AutoRecordOff = memo(
  AutoRecordOffBase,
) as typeof AutoRecordOffBase;
AutoRecordOff.displayName = "AutoRecordOff";
