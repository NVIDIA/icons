"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "gpu" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-gpu",
    viewBox: "0 0 16 16",
    paths: [
      "M1 1h14v14H1Zm1 1v4h.5v4H2v4h4v-.5h4v.5h4v-4h-.5V6h.5V2h-4v.5H6V2Zm2 2h2v2H4Zm3 0h2v2H7Zm3 0h2v2h-2ZM4 7h2v2H4Zm3 0h2v2H7Zm3 0h2v2h-2Zm-6 3h2v2H4Zm3 0h2v2H7Zm3 0h2v2h-2Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-gpu",
    viewBox: "0 0 16 16",
    paths: [
      "M1.5 6.5v-5h5V2h3v-.5h5v5H14v3h.5v5h-5V14h-3v.5h-5v-5H2v-3ZM4 4v2h2V4Zm3 0v2h2V4Zm3 0v2h2V4ZM4 7v2h2V7Zm3 0v2h2V7Zm3 0v2h2V7Zm-6 3v2h2v-2Zm3 0v2h2v-2Zm3 0v2h2v-2Z",
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

const GpuBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "gpu",
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
GpuBase.displayName = "Gpu";

export const Gpu = memo(GpuBase) as typeof GpuBase;
Gpu.displayName = "Gpu";
