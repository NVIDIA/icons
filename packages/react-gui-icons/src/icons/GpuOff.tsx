"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "gpu-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-gpu-off",
    viewBox: "0 0 16 16",
    paths: [
      "M4 7h2v2H4Zm0 3h2v2H4Zm3 0h2v2H7Z",
      "m.854.146 15 15-.708.708-.853-.854H1V1.707L.146.854ZM2 2.707V6h.5v4H2v4h4v-.5h4v.5h3.293l-2-2H10v-1.293L8.293 9H7V7.707L5.293 6H4V4.707Z",
      "m15 12.172-1-1V10h-.5V6h.5V2h-4v.5H6V2H4.828l-1-1H15Z",
      "M12 9h-.172L10 7.172V7h2ZM9 6h-.172L7 4.172V4h2Zm1-2h2v2h-2Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-gpu-off",
    viewBox: "0 0 16 16",
    paths: [
      "m.854.146 15 15-.708.708-1.353-1.354H9.5V14h-3v.5h-5v-5H2v-3h-.5V2.207L.146.854ZM4 10v2h2v-2Zm3 0v2h2v-2ZM4 7v2h2V7Zm6 3.707V12h1.293Zm-6-6V6h1.293Zm3 3V9h1.293ZM14.5 9.5v2.172l-2.5-2.5V7H9.828L9 6.172V4H6.828l-2.5-2.5H6.5V2h3v-.5h5v5H14v3ZM10 4v2h2V4Z",
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

const GpuOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "gpu-off",
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
GpuOffBase.displayName = "GpuOff";

export const GpuOff = memo(GpuOffBase) as typeof GpuOffBase;
GpuOff.displayName = "GpuOff";
