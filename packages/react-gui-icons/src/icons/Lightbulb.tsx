"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "lightbulb" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-lightbulb",
    viewBox: "0 0 16 16",
    paths: [
      "M3 7a5 5 0 0 1 10 0c0 1.447-.873 2.572-1.632 3.396a31 31 0 0 1-.504.529l-.056.057c-.176.182-.332.344-.463.494a2.5 2.5 0 0 0-.283.374c-.06.103-.062.148-.062.15v1.707L8.707 15H7.293L6 13.707V12c0-.002-.002-.047-.062-.15a2.5 2.5 0 0 0-.283-.374c-.131-.15-.286-.312-.463-.494l-.056-.057a31 31 0 0 1-.504-.529C3.873 9.572 3 8.447 3 7m5-4a4 4 0 0 0-4 4c0 1.038.627 1.914 1.368 2.718q.133.145.265.282h1.715l-.903-3.371.966-.258L8 8.568l.589-2.197.966.258L8.652 10h1.715q.133-.137.265-.282C11.373 8.914 12 8.038 12 7a4 4 0 0 0-4-4m1 10H7v.293l.707.707h.586L9 13.293Zm-2-1h.884l-.268-1H6.561q.138.171.243.35c.104.181.196.402.196.65m2.439-1H8.384l-.268 1H9c0-.248.092-.469.196-.65q.105-.179.243-.35",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-lightbulb",
    viewBox: "0 0 16 16",
    paths: [
      "M3 7a5 5 0 0 1 10 0c0 1.447-.873 2.572-1.632 3.396a31 31 0 0 1-.504.529l-.056.057c-.176.182-.332.344-.463.494a2.5 2.5 0 0 0-.283.374c-.06.103-.062.148-.062.15v1.707L8.707 15H7.293L6 13.707V12c0-.002-.002-.047-.062-.15a2.5 2.5 0 0 0-.283-.374c-.131-.15-.286-.312-.463-.494l-.056-.057a31 31 0 0 1-.504-.529C3.873 9.572 3 8.447 3 7m5-4a4 4 0 0 0-4 4c0 1.038.627 1.914 1.368 2.718q.133.145.265.282h1.715l-.903-3.371.966-.258L8 8.568l.589-2.197.966.258L8.652 10h1.715q.133-.137.265-.282C11.373 8.914 12 8.038 12 7a4 4 0 0 0-4-4m1 10H7v.293l.707.707h.586L9 13.293Zm-2-1h.884l-.268-1H6.561q.138.171.243.35c.104.181.196.402.196.65m2.439-1H8.384l-.268 1H9c0-.248.092-.469.196-.65q.105-.179.243-.35",
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

const LightbulbBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "lightbulb",
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
LightbulbBase.displayName = "Lightbulb";

export const Lightbulb = memo(LightbulbBase) as typeof LightbulbBase;
Lightbulb.displayName = "Lightbulb";
