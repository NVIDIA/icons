"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "telephone-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-telephone-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-2.934-2.935c-1.966 1.815-3.811 2.426-5.217 2.554a6.1 6.1 0 0 1-1.776-.086 5 5 0 0 1-.643-.178l-.041-.016-.013-.005-.004-.002-.002-.001s-.001-.001.197-.46l-.198.459-.222-.096-.669-2.495 3.528-2.037 1.759 1.016a4.4 4.4 0 0 0 1.214-.74L1.646 2.354Zm6.981 8.396c-.639.547-1.258.873-1.82 1.054l-.211.069-1.652-.954-2.363 1.365.338 1.262q.116.033.289.069c.348.07.858.128 1.488.07 1.174-.107 2.802-.617 4.6-2.266Zm4.64-4.523c-.099 1.125-.507 2.524-1.594 4.034l-.717-.718c.912-1.313 1.235-2.493 1.315-3.403a5.2 5.2 0 0 0-.078-1.496 4 4 0 0 0-.074-.296l-1.264-.339-1.364 2.364.991 1.716-.078.218a5 5 0 0 1-.203.481L9.797 6.968l-.753-1.303 2.037-3.528 2.494.668.096.22-.458.2.458-.2.001.001v.002l.002.004.006.013.016.041q.02.051.05.141c.04.12.089.291.134.506a6.2 6.2 0 0 1 .095 1.786",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-telephone-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 12 12-.708.708-3.111-3.112c-1.924 1.774-3.715 2.36-5.063 2.483-.859.078-1.687-.005-2.47-.32l-.587-2.191 3.237-1.869 1.739 1.004a5.2 5.2 0 0 0 1.41-.84L1.646 2.354zm9.848 7.727-1.86-1.859.025-.058-1.034-1.791 1.869-3.237 2.19.587c.317.778.408 1.629.334 2.482-.094 1.071-.481 2.416-1.524 3.876",
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

const TelephoneOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "telephone-off",
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
TelephoneOffBase.displayName = "TelephoneOff";

export const TelephoneOff = memo(TelephoneOffBase) as typeof TelephoneOffBase;
TelephoneOff.displayName = "TelephoneOff";
