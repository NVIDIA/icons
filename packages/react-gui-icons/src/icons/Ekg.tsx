"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "ekg" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-ekg",
    viewBox: "0 0 16 16",
    paths: [
      "M8.32 3.828A3.44 3.44 0 0 1 13.954 7H15v1h-1.373q-.182.361-.455.68l-.012.014L8 13.866 2.84 8.694l-.012-.014A3.4 3.4 0 0 1 2.373 8H1V7h1.046A3.44 3.44 0 0 1 7.68 3.828l.012.011.308.302.308-.302ZM3.563 8l.012.014L8 12.45l4.425-4.436.012-.014H12V7h.935a2.44 2.44 0 0 0-3.951-2.424L8 5.542l-.984-.966A2.44 2.44 0 0 0 3.065 7h1.728l1.966-1.966.902 3.368L8.756 7H11v1H9.244l-2.03 2.598-.973-3.632L5.207 8Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-ekg",
    viewBox: "0 0 16 16",
    paths: [
      "M8.32 3.828A3.44 3.44 0 0 1 13.954 7H12v1h1.627q-.182.361-.455.68l-.012.014L8 13.866 2.84 8.694l-.012-.014A3.4 3.4 0 0 1 2.373 8h2.834l1.034-1.034.973 3.632L9.244 8H11V7H8.756L7.661 8.402l-.902-3.368L4.793 7H2.046A3.44 3.44 0 0 1 7.68 3.828l.012.011.308.302.308-.302z",
      "M13.627 8c.162-.318.271-.655.327-1H15v1zM2.046 7c.056.345.165.682.327 1H1V7z",
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

const EkgBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "ekg",
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
EkgBase.displayName = "Ekg";

export const Ekg = memo(EkgBase) as typeof EkgBase;
Ekg.displayName = "Ekg";
