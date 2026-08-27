"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "wireless-modem" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-wireless-modem",
    viewBox: "0 0 16 16",
    paths: [
      "M7 5a1 1 0 1 1 1.5.866V9H14v5H2V9h5.5V5.866A1 1 0 0 1 7 5m-4 5v3h10v-3Zm1.535-7A4 4 0 0 0 4 5c0 .73.195 1.412.535 2l-.866.501A5 5 0 0 1 3 5c0-.91.244-1.765.669-2.501ZM12 5c0-.729-.195-1.412-.535-2l.866-.501C12.756 3.235 13 4.09 13 5a5 5 0 0 1-.67 2.501L11.465 7A4 4 0 0 0 12 5m-2 0a2 2 0 0 0-.267-1l.865-.5c.256.441.402.954.402 1.5s-.146 1.059-.402 1.501L9.733 6A2 2 0 0 0 10 5M6.267 4A2 2 0 0 0 6 5c0 .365.097.706.267 1l-.865.501A3 3 0 0 1 5 5c0-.546.146-1.059.402-1.501ZM8 11v1H7v-1Zm2 1H9v-1h1Zm2 0h-1v-1h1Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-wireless-modem",
    viewBox: "0 0 16 16",
    paths: [
      "M4 5c0-.729.195-1.412.535-2l-.866-.501A5 5 0 0 0 3 5c0 .91.244 1.765.669 2.501L4.535 7A4 4 0 0 1 4 5m7.465-2c.34.588.535 1.271.535 2a4 4 0 0 1-.535 2l.866.501A5 5 0 0 0 13 5c0-.91-.244-1.765-.669-2.501zM6.267 4A2 2 0 0 0 6 5c0 .365.097.706.267 1l-.865.501A3 3 0 0 1 5 5c0-.546.146-1.059.402-1.501zm3.466 0c.17.294.267.635.267 1s-.097.706-.267 1l.865.501C10.854 6.059 11 5.546 11 5a3 3 0 0 0-.402-1.5z",
      "M7 5a1 1 0 1 1 1.5.866V9H14v5H2V9h5.5V5.866A1 1 0 0 1 7 5m1 7v-1H7v1Zm1-1v1h1v-1Zm3 0h-1v1h1Z",
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

const WirelessModemBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "wireless-modem",
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
WirelessModemBase.displayName = "WirelessModem";

export const WirelessModem = memo(
  WirelessModemBase,
) as typeof WirelessModemBase;
WirelessModem.displayName = "WirelessModem";
