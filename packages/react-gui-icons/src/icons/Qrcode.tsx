"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "qrcode" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-qrcode",
    viewBox: "0 0 16 16",
    paths: [
      "M2.5 2.5h2v2h-2z",
      "M6 1v5H1V1ZM2 5h3V2H2Zm5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8.5-1.5h2v2h-2z",
      "M6 10v5H1v-5Zm-4 4h3v-3H2Zm9.5-11.5h2v2h-2z",
      "M15 1v5h-5V1Zm-4 4h3V2h-3Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-qrcode",
    viewBox: "0 0 16 16",
    paths: [
      "M2.5 2.5h2v2h-2z",
      "M6 1v5H1V1ZM2 5h3V2H2Zm5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8.5-1.5h2v2h-2z",
      "M6 10v5H1v-5Zm-4 4h3v-3H2Zm9.5-11.5h2v2h-2z",
      "M15 1v5h-5V1Zm-4 4h3V2h-3Z",
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

const QrcodeBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "qrcode",
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
QrcodeBase.displayName = "Qrcode";

export const Qrcode = memo(QrcodeBase) as typeof QrcodeBase;
Qrcode.displayName = "Qrcode";
