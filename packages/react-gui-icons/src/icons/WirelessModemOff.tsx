"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "wireless-modem-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-wireless-modem-off",
    viewBox: "0 0 16 16",
    paths: [
      "M8 11v1H7v-1zm2 1H9v-1h1z",
      "m2.354 1.646 13 13-.708.708L13.293 14H2V9h5.5v-.793l-1.85-1.85-.248.144a3 3 0 0 1-.288-.68L4.01 4.717Q4 4.857 4 5c0 .73.195 1.412.535 2l-.865.501A5 5 0 0 1 3 5q.002-.598.135-1.158L1.646 2.354ZM9.293 10H3v3h9.293ZM14 11.172l-1-1V10h-.172l-1-1H14zM9 5c0 .32-.15.605-.384.788L7.212 4.384A1 1 0 0 1 9 5m3 0c0-.729-.195-1.412-.535-2l.866-.501C12.757 3.235 13 4.09 13 5s-.244 1.765-.669 2.501L11.465 7A4 4 0 0 0 12 5m-2 0a2 2 0 0 0-.267-1l.865-.501c.256.442.402.955.402 1.501s-.146 1.059-.402 1.501L9.733 6A2 2 0 0 0 10 5",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-wireless-modem-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 13 13-.708.708L13.293 14H2V9h5.5v-.793l-1.85-1.85-.248.144a3 3 0 0 1-.288-.68L4.01 4.717Q4 4.857 4 5c0 .73.195 1.412.535 2l-.865.501A5 5 0 0 1 3 5q.002-.598.135-1.158L1.646 2.354ZM8 12v-1H7v1Zm1-1v1h1v-1Zm5-2v2.172L11.829 9zM9 5c0 .32-.15.605-.384.788L7.212 4.384A1 1 0 0 1 9 5m3 0c0-.729-.195-1.412-.535-2l.866-.501C12.757 3.235 13 4.09 13 5s-.244 1.765-.669 2.501L11.465 7A4 4 0 0 0 12 5m-2 0a2 2 0 0 0-.267-1l.865-.5c.256.441.402.955.402 1.5 0 .546-.146 1.059-.402 1.501L9.733 6A2 2 0 0 0 10 5",
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

const WirelessModemOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "wireless-modem-off",
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
WirelessModemOffBase.displayName = "WirelessModemOff";

export const WirelessModemOff = memo(
  WirelessModemOffBase,
) as typeof WirelessModemOffBase;
WirelessModemOff.displayName = "WirelessModemOff";
