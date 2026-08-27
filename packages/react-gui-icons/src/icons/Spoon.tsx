"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "spoon" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-spoon",
    viewBox: "0 0 16 16",
    paths: [
      "M8.766 9.065c-.227.257-.266.384-.266.435V14h-1V9.5c0-.051-.039-.178-.266-.435a9 9 0 0 0-.492-.499l-.346-.337C5.766 7.598 5 6.72 5 5.5 5 3.656 6.262 2 8 2s3 1.656 3 3.5c0 1.22-.766 2.098-1.396 2.729q-.186.183-.346.337a9 9 0 0 0-.492.499M6 5.5c0 .78.484 1.402 1.104 2.021q.14.14.291.285c.209.202.423.409.589.598L8 8.421l.016-.017c.166-.189.38-.396.589-.598q.151-.146.291-.285C9.516 6.902 10 6.28 10 5.5 10 4.03 9.023 3 8 3S6 4.03 6 5.5",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-spoon",
    viewBox: "0 0 16 16",
    paths: [
      "M8.766 9.065c-.227.257-.266.384-.266.435V14h-1V9.5c0-.051-.039-.178-.266-.435a9 9 0 0 0-.492-.499l-.346-.337C5.766 7.598 5 6.72 5 5.5 5 3.656 6.262 2 8 2s3 1.656 3 3.5c0 1.22-.766 2.098-1.396 2.729q-.186.183-.346.337a9 9 0 0 0-.492.499",
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

const SpoonBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "spoon",
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
SpoonBase.displayName = "Spoon";

export const Spoon = memo(SpoonBase) as typeof SpoonBase;
Spoon.displayName = "Spoon";
