"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "telephone" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-telephone",
    viewBox: "0 0 16 16",
    paths: [
      "m11.081 2.136 2.494.669.096.219-.458.201c.458-.2.458-.199.459-.199v.002l.002.004.006.013.016.041q.02.051.05.141c.04.12.089.291.134.506a6.2 6.2 0 0 1 .095 1.786c-.131 1.497-.811 3.481-2.91 5.561-2.097 2.079-4.08 2.757-5.57 2.893a6.1 6.1 0 0 1-1.776-.086 5 5 0 0 1-.643-.178l-.041-.016-.013-.005-.004-.002-.002-.001-.002-.001.199-.459-.199.459-.221-.096-.669-2.495 3.528-2.037 1.759 1.016c.473-.186 1.024-.519 1.612-1.102.545-.541.872-1.051 1.065-1.498L9.044 5.665Zm1.746 1.504-1.264-.339-1.364 2.364.991 1.716-.078.218c-.23.646-.655 1.357-1.385 2.081-.778.771-1.535 1.198-2.212 1.416l-.211.069-1.652-.954-2.363 1.365.338 1.261q.116.034.289.07c.348.07.858.128 1.488.07 1.251-.114 3.019-.686 4.957-2.607 1.937-1.919 2.508-3.685 2.618-4.938a5.2 5.2 0 0 0-.079-1.496 4 4 0 0 0-.073-.296",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-telephone",
    viewBox: "0 0 16 16",
    paths: [
      "M13.726 5.497c.074-.853-.017-1.704-.334-2.482l-2.19-.587-1.869 3.237 1.034 1.791a5.4 5.4 0 0 1-1.168 1.692 5.3 5.3 0 0 1-1.808 1.201L5.652 9.345l-3.237 1.869.587 2.191c.783.315 1.611.398 2.47.32 1.431-.131 3.359-.782 5.417-2.822 2.059-2.04 2.711-3.97 2.837-5.406",
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

const TelephoneBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "telephone",
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
TelephoneBase.displayName = "Telephone";

export const Telephone = memo(TelephoneBase) as typeof TelephoneBase;
Telephone.displayName = "Telephone";
