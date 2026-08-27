"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "microscope" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-microscope",
    viewBox: "0 0 16 16",
    paths: [
      "M9 1h2v1h1v7h-1.116l-.268 1H9.384l-.268-1H8V5.915q-.183.065-.383.081L6.008 12h7.876l.804 3H1.312l.804-3h.857l2.143-8h.969A1.5 1.5 0 0 1 8 3.085V2h1ZM2.884 13l-.268 1h10.768l-.268-1ZM9 3v5h2V3ZM6.085 5h-.201l-1.876 7h.965l1.678-6.263A1.5 1.5 0 0 1 6.085 5M8 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-microscope",
    viewBox: "0 0 16 16",
    paths: [
      "M9 1h2v1h1v7h-1.116l-.268 1H9.384l-.268-1H8V5.915q-.183.065-.383.081L6.008 12h7.876l.804 3H1.312l.804-3h.857l2.143-8h.969A1.5 1.5 0 0 1 8 3.085V2h1ZM7.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1",
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

const MicroscopeBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "microscope",
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
MicroscopeBase.displayName = "Microscope";

export const Microscope = memo(MicroscopeBase) as typeof MicroscopeBase;
Microscope.displayName = "Microscope";
