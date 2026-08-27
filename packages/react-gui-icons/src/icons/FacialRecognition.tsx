"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "facial-recognition" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-facial-recognition",
    viewBox: "0 0 16 16",
    paths: [
      "M2 14h2v1H1v-3h1zm13 1h-3v-1h2v-2h1zM8 3c1.443 0 2.473.51 3.13 1.334.641.805.876 1.847.876 2.833 0 2.274-.346 3.755-1.069 4.665C10.182 12.781 9.113 13 8 13c-1.333 0-2.352-.407-3.026-1.315-.647-.871-.915-2.123-.974-3.665l1-.04c.057 1.488.315 2.487.776 3.109C6.21 11.673 6.884 12 8 12c1 0 1.683-.197 2.154-.79.502-.631.852-1.817.852-4.043 0-.847-.203-1.64-.657-2.21C9.91 4.406 9.187 4 8 4c-.532 0-.967.082-1.321.218l-.358-.935C6.806 3.098 7.365 3 8 3",
      "M8.5 11h-1v-1h1zm-1-2h-1V8h1zm2 0h-1V8h1zM5 7H4V6h1zm2.5 0h-1V6h1zm2 0h-1V6h1zM6 5H5V4h1zM4 2H2v2H1V1h3zm11 2h-1V2h-2V1h3z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-facial-recognition",
    viewBox: "0 0 16 16",
    paths: [
      "M2 14h2v1H1v-3h1zm13 1h-3v-1h2v-2h1zM8.001 3c1.442 0 2.473.51 3.13 1.334.641.805.876 1.847.876 2.833 0 2.273-.347 3.755-1.069 4.665C10.184 12.781 9.114 13 8.001 13s-2.183-.219-2.938-1.168c-.723-.91-1.07-2.391-1.07-4.665C3.993 7.129 4 7 4 7h1V6h-.887c.074-.345.184-.682.339-1H6V3.425C6.548 3.152 7.213 3 8.001 3M6.5 7h1V6h-1Zm2 0h1V6h-1Zm-2 2h1V8h-1Zm2 0h1V8h-1Zm-1 2h1v-1h-1ZM4 2H2v2H1V1h3zm11 2h-1V2h-2V1h3z",
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

const FacialRecognitionBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "facial-recognition",
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
FacialRecognitionBase.displayName = "FacialRecognition";

export const FacialRecognition = memo(
  FacialRecognitionBase,
) as typeof FacialRecognitionBase;
FacialRecognition.displayName = "FacialRecognition";
