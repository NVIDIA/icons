"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "import-image" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-import-image",
    viewBox: "0 0 16 16",
    paths: [
      "m8.5 3.793 1.146-1.147.708.708L8 5.707 5.646 3.354l.708-.708L7.5 3.793V1h1z",
      "M3 5h2v1H4v3.211l2.8 1.617 2.85-1.645L12 10.54V6h-1V5h2v9H3Zm9 6.694-2.35-1.357-2.85 1.646L4 10.366V13h8Z",
      "M5.454 7.773a1.319 1.319 0 1 1 2.637.001 1.319 1.319 0 0 1-2.637-.001m1.319-.318a.318.318 0 1 0-.001.637.318.318 0 0 0 .001-.637",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-import-image",
    viewBox: "0 0 16 16",
    paths: [
      "M10.354 3.354 8 5.707 5.646 3.354l.708-.708L7.5 3.793V1h1v2.793l1.146-1.147z",
      "M3 5h2v1H4v3.211l2.8 1.617 2.85-1.645L12 10.54V6h-1V5h2v9H3z",
      "M5.454 7.773a1.319 1.319 0 1 1 2.637.001 1.319 1.319 0 0 1-2.637-.001",
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

const ImportImageBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "import-image",
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
ImportImageBase.displayName = "ImportImage";

export const ImportImage = memo(ImportImageBase) as typeof ImportImageBase;
ImportImage.displayName = "ImportImage";
