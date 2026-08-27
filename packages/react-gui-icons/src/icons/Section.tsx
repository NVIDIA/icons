"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "section" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-section",
    viewBox: "0 0 16 16",
    paths: [
      "M5.967 13.666A6 6 0 0 1 9.062 2.115L9.393.871l.966.258L6.608 15.13l-.966-.26ZM8.803 3.085a5 5 0 0 0-2.576 9.611Zm-.369 9.918a5 5 0 0 0 1.677-.451l.423.906a6 6 0 0 1-2.013.541Zm3.1-1.447c.406-.405.746-.884.996-1.422l.907.422a6 6 0 0 1-1.196 1.708Zm.56-6.404a5 5 0 0 0-1.227-1.229l.573-.819a6 6 0 0 1 1.473 1.475Zm.886 3.303a5 5 0 0 0-.152-1.729l.966-.259c.179.664.245 1.366.182 2.077Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-section",
    viewBox: "0 0 16 16",
    paths: [
      "m5.642 14.87.325-1.204A6 6 0 0 1 9.062 2.115L9.393.871l.967.258L6.608 15.13zm4.469-2.318a5 5 0 0 1-1.677.451l.087.996a6 6 0 0 0 2.013-.541zm2.419-2.418a5 5 0 0 1-.996 1.422l.707.708a6 6 0 0 0 1.196-1.708zm.299-3.408c.148.554.203 1.138.151 1.729l.996.089a6 6 0 0 0-.182-2.077zm-1.962-2.803c.482.338.895.755 1.227 1.229l.819-.573a6 6 0 0 0-1.473-1.475z",
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

const SectionBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "section",
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
SectionBase.displayName = "Section";

export const Section = memo(SectionBase) as typeof SectionBase;
Section.displayName = "Section";
