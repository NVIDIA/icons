"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "gpu-sync" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-gpu-sync",
    viewBox: "0 0 16 16",
    paths: [
      "M15 11a3 3 0 0 1-3 3h-.293l.647.646-.708.708L9.793 13.5l1.853-1.854.708.708-.647.646H12a2 2 0 0 0 2-2zm-.793-2.5-1.853 1.854-.708-.708.647-.646H12a2 2 0 0 0-2 2H9a3 3 0 0 1 3-3h.293l-.647-.646.708-.708zM3 3h11v2h-1V4H3v4h2v1h2v1H4V9H3v1H2V3H1V2h2z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-gpu-sync",
    viewBox: "0 0 16 16",
    paths: [
      "M15 11a3 3 0 0 1-3 3h-.293l.647.646-.708.708L9.793 13.5l1.853-1.854.708.708-.647.646H12a2 2 0 0 0 2-2zm-.793-2.5-1.853 1.854-.708-.708.647-.646H12a2 2 0 0 0-2 2H9a3 3 0 0 1 3-3h.293l-.647-.646.708-.708z",
      "M3 3h11v2.916A5 5 0 0 0 7.024 10H4V9H3v1H2V3H1V2h2z",
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

const GpuSyncBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "gpu-sync",
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
GpuSyncBase.displayName = "GpuSync";

export const GpuSync = memo(GpuSyncBase) as typeof GpuSyncBase;
GpuSync.displayName = "GpuSync";
