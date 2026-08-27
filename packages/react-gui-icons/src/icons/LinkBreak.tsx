"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "link-break" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-link-break",
    viewBox: "0 0 16 16",
    paths: [
      "m10.732 5.438 4.83 1.294-1.294 4.83-4.83-1.294.529-1.972-1.104-.315.274-.962 1.088.311Zm-5.464 0 .507 1.892 1.088-.311.274.962-1.103.315.528 1.972-4.83 1.294-1.294-4.83Zm5.66 3.133-.265.99 2.898.776.776-2.898-2.898-.776-.252.942 1.45.414-.274.962Zm-6.115-.966-.252-.942-2.898.776.777 2.898 2.897-.776-.265-.99-1.435.41-.274-.962ZM8.5 2.5V5h-1V2.5ZM5.853 3.646l1.5 1.5-.707.708-1.5-1.5Zm5.001.708-1.5 1.5-.708-.708 1.5-1.5Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-link-break",
    viewBox: "0 0 16 16",
    paths: [
      "m10.732 5.438 4.83 1.294-1.294 4.83-4.83-1.294.529-1.972-1.104-.315.274-.962 1.088.311Zm-5.464 0 .507 1.892 1.088-.311.274.962-1.103.315.528 1.972-4.83 1.294-1.294-4.83Zm5.66 3.133-.265.99 2.898.776.776-2.898-2.898-.776-.252.942 1.45.414-.274.962Zm-6.115-.966-.252-.942-2.898.776.777 2.898 2.897-.776-.265-.99-1.435.41-.274-.962ZM8.5 2.5V5h-1V2.5ZM5.853 3.646l1.5 1.5-.707.708-1.5-1.5Zm5.001.708-1.5 1.5-.708-.708 1.5-1.5Z",
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

const LinkBreakBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "link-break",
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
LinkBreakBase.displayName = "LinkBreak";

export const LinkBreak = memo(LinkBreakBase) as typeof LinkBreakBase;
LinkBreak.displayName = "LinkBreak";
