"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "mug-beer" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-mug-beer",
    viewBox: "0 0 16 16",
    paths: [
      "M4 8v5h1V8zm2 3v2h1v-2zm2 0v2h1v-2z",
      "M4.5 1c.889 0 1.669.464 2.112 1.162a2.5 2.5 0 0 1 2.214.219A2 2 0 1 1 11 5.732V6h3v7h-3v.566L10.616 15H2.384L2 13.566V5.915a1.5 1.5 0 0 1 .036-2.842A2.5 2.5 0 0 1 4.5 1M10 6q-.238 0-.461-.053-.227.319-.539.553v2a1.5 1.5 0 0 1-3 0v-2a2.5 2.5 0 0 1-.612-.662 2.5 2.5 0 0 1-2.025-.111A1.5 1.5 0 0 1 3 5.915v7.519l.152.566h6.696l.152-.566ZM3 3.5V4h-.5a.5.5 0 1 0 .4.8l.301-.4.399.3c.251.189.562.3.9.3.309 0 .596-.093.834-.253l.536-.36.214.61c.119.339.358.624.666.803l.25.144V8.5a.5.5 0 0 0 1 0V5.944l.25-.144c.268-.155.483-.391.613-.673l.218-.473.464.237q.206.107.455.109a1 1 0 1 0-.763-1.647l-.337.398-.383-.354A1.5 1.5 0 0 0 7.5 3a1.5 1.5 0 0 0-.834.253l-.536.36-.214-.61A1.5 1.5 0 0 0 3 3.5M13 12V7h-2v5Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-mug-beer",
    viewBox: "0 0 16 16",
    paths: [
      "M4.5 1c.889 0 1.669.464 2.112 1.162a2.5 2.5 0 0 1 2.214.219A2 2 0 1 1 11 5.732V6h3v7h-3v.566L10.616 15H2.384L2 13.566V5.915a1.5 1.5 0 0 1 .036-2.842A2.5 2.5 0 0 1 4.5 1M3 3.5V4h-.5a.5.5 0 1 0 .4.8l.301-.4.399.3c.251.189.562.3.9.3.309 0 .596-.093.834-.253l.536-.36.214.61c.119.339.358.624.666.803l.25.144V8.5a.5.5 0 0 0 1 0V5.944l.25-.144c.268-.155.483-.391.613-.673l.218-.473.464.237q.206.107.455.109a1 1 0 1 0-.763-1.647l-.337.398-.383-.354A1.5 1.5 0 0 0 7.5 3a1.5 1.5 0 0 0-.834.253l-.536.36-.214-.61A1.5 1.5 0 0 0 3 3.5M13 12V7h-2v5Zm-9 1h1V8H4Zm2 0h1v-2H6Zm2 0h1v-2H8Z",
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

const MugBeerBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "mug-beer",
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
MugBeerBase.displayName = "MugBeer";

export const MugBeer = memo(MugBeerBase) as typeof MugBeerBase;
MugBeer.displayName = "MugBeer";
