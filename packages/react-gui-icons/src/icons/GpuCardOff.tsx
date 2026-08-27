"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "gpu-card-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-gpu-card-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708L10.293 11H9v1H4v-1H3v1H2V5H1V4h2v1h1.293L1.646 2.354ZM5.293 6H3v4h2v1h3v-1h1.293ZM14 11h-.172l-1-1H13V6H8.828l-1-1H14z",
      "M12.5 8c0 .458-.205.868-.529 1.143l-.714-.714a.5.5 0 1 0-.686-.686l-.714-.714A1.5 1.5 0 0 1 12.5 8",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-gpu-card-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708L10.293 11H9v1H4v-1H3v1H2V5H1V4h2v1h1.293L1.646 2.354zM14 11h-.172l-1.857-1.857a1.5 1.5 0 1 0-2.114-2.114L7.828 5H14z",
      "M11.5 8a.5.5 0 0 1-.243.429l-.686-.686A.5.5 0 0 1 11.5 8",
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

const GpuCardOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "gpu-card-off",
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
GpuCardOffBase.displayName = "GpuCardOff";

export const GpuCardOff = memo(GpuCardOffBase) as typeof GpuCardOffBase;
GpuCardOff.displayName = "GpuCardOff";
