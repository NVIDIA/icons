"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "hot-air-balloon" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-hot-air-balloon",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1c1.341 0 2.586.409 3.505 1.186C12.432 2.971 13 4.111 13 5.5c0 1.447-.873 2.572-1.632 3.396a31 31 0 0 1-.504.529l-.056.057c-.176.182-.332.344-.463.494a2.5 2.5 0 0 0-.283.374c-.06.103-.062.148-.062.15v.5H6v-.5c0-.002-.002-.047-.062-.15a2.5 2.5 0 0 0-.283-.374c-.131-.15-.286-.312-.463-.494l-.056-.058a28 28 0 0 1-.504-.528C3.873 8.072 3 6.947 3 5.5c0-1.389.568-2.529 1.495-3.314C5.414 1.409 6.659 1 8 1m0 1c-.229 0-.528.144-.797.719-.269.576-.453 1.494-.453 2.781 0 1.23.286 2.013.584 2.698l.114.258c.209.47.43.964.515 1.544h.074c.085-.58.306-1.074.515-1.544l.114-.258c.298-.685.584-1.468.584-2.698 0-1.287-.184-2.205-.453-2.781C8.528 2.144 8.229 2 8 2M5.5 13v-1h5v1H10v2H6v-2ZM5.141 2.95C4.439 3.544 4 4.404 4 5.5c0 1.038.627 1.914 1.368 2.718q.245.264.486.51l.056.058c.175.18.347.359.498.531.149.17.29.35.396.533q.041.07.078.15h.068c-.075-.363-.225-.702-.412-1.127l-.122-.277C6.089 7.84 5.75 6.917 5.75 5.5c0-1.36.191-2.442.547-3.204l.004-.009c-.439.16-.831.384-1.16.663M9.05 10h.068q.037-.08.078-.15c.106-.183.247-.363.396-.533.151-.172.323-.351.498-.531l.056-.058q.24-.246.486-.51C11.373 7.414 12 6.538 12 5.5c0-1.096-.439-1.956-1.141-2.55a3.8 3.8 0 0 0-1.16-.663l.004.009c.356.762.547 1.844.547 3.204 0 1.417-.339 2.34-.666 3.096l-.122.277c-.187.425-.337.764-.412 1.127M7 13v1h2v-1Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-hot-air-balloon",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1c-1.341 0-2.586.409-3.505 1.186C3.568 2.971 3 4.111 3 5.5c0 1.447.873 2.572 1.632 3.396.173.187.345.365.504.528l.056.058c.177.182.332.344.463.494.132.151.225.273.283.374.06.103.062.148.062.15v.5h1v-.5c0-.581-.192-1.016-.462-1.627l-.122-.277C6.089 7.84 5.75 6.917 5.75 5.5c0-1.36.191-2.442.547-3.204C6.653 1.533 7.229 1 8 1m1 10v-.5c0-.581.192-1.016.462-1.627l.122-.277c.327-.756.666-1.679.666-3.096 0-1.36-.191-2.442-.547-3.204C9.347 1.533 8.771 1 8 1c1.341 0 2.586.409 3.505 1.186C12.432 2.971 13 4.111 13 5.5c0 1.447-.873 2.572-1.632 3.396-.173.187-.345.365-.504.528l-.056.058c-.176.182-.332.344-.463.494a2.5 2.5 0 0 0-.283.374c-.06.103-.062.148-.062.15v.5zm-3.5 2v-1h5v1H10v2H6v-2z",
      "M6.75 5.5c0-1.287.184-2.205.453-2.781C7.472 2.144 7.771 2 8 2s.528.144.797.719c.269.576.453 1.494.453 2.781 0 1.23-.286 2.013-.584 2.698l-.114.258C8.285 9.055 8 9.693 8 10.5c0-.807-.285-1.445-.552-2.044l-.114-.258C7.036 7.513 6.75 6.73 6.75 5.5",
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

const HotAirBalloonBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "hot-air-balloon",
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
HotAirBalloonBase.displayName = "HotAirBalloon";

export const HotAirBalloon = memo(
  HotAirBalloonBase,
) as typeof HotAirBalloonBase;
HotAirBalloon.displayName = "HotAirBalloon";
