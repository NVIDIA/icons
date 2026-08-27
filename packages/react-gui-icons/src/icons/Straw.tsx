"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "straw" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-straw",
    viewBox: "0 0 16 16",
    paths: [
      "M4.03 2.171 4.5 2l.47-.171v.002l.002.003.005.014.017.05q.024.065.066.19a39 39 0 0 1 .927 3.297c.477 2.03.957 4.746 1.009 7.615h1.007c.028-2.567.265-4.783.502-6.386a38 38 0 0 1 .464-2.542l.033-.142.009-.037.003-.01.001-.003v-.001L9.5 4l.485.121v.002l-.002.007-.008.033-.03.131q-.041.175-.111.517a37 37 0 0 0-.339 1.95A46.5 46.5 0 0 0 9.003 13h1.002c.051-2.869.531-5.585 1.008-7.615a39 39 0 0 1 .927-3.297q.042-.125.066-.19l.017-.05.005-.014.002-.004s.004 0 .47.17l.47.171-.001.003-.004.01-.016.045-.061.179c-.053.158-.13.392-.223.692a40 40 0 0 0-.678 2.515c-.467 1.983-.931 4.618-.982 7.385H14v1H2v-1h1.992c-.066-2.035-.517-4.147-.974-5.805a35 35 0 0 0-.9-2.795l-.062-.162-.015-.04-.004-.01-.001-.002L2.5 4l.464-.185.002.004.005.012.018.045.065.172c.056.149.136.366.231.639.19.548.444 1.324.697 2.243.469 1.699.944 3.91 1.01 6.07h1.003c-.051-2.767-.515-5.402-.982-7.385A40 40 0 0 0 4.335 3.1c-.093-.3-.169-.534-.223-.692l-.061-.179-.016-.045-.004-.01Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-straw",
    viewBox: "0 0 16 16",
    paths: [
      "m12.03 1.829.94.342q-.042.118-.082.237c-.053.158-.13.392-.223.692a40 40 0 0 0-.678 2.515c-.467 1.983-.931 4.618-.982 7.385H14v1H2v-1h1.992c-.066-2.035-.517-4.147-.974-5.805a35 35 0 0 0-.9-2.795l-.082-.214.928-.371q.046.116.09.233a33 33 0 0 1 .928 2.882c.469 1.699.944 3.91 1.01 6.07h1.003c-.051-2.767-.515-5.402-.982-7.385A40 40 0 0 0 4.335 3.1c-.093-.3-.17-.534-.223-.692l-.082-.237.94-.342.09.259a39 39 0 0 1 .927 3.297c.477 2.03.957 4.746 1.008 7.615h1.008c.028-2.567.265-4.783.502-6.386a38 38 0 0 1 .349-2.003 17 17 0 0 1 .161-.732l.97.242-.04.173q-.041.175-.111.517a37 37 0 0 0-.339 1.95A46.5 46.5 0 0 0 9.003 13h1.002c.051-2.869.531-5.585 1.008-7.615a39 39 0 0 1 .927-3.297q.044-.13.09-.259",
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

const StrawBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "straw",
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
StrawBase.displayName = "Straw";

export const Straw = memo(StrawBase) as typeof StrawBase;
Straw.displayName = "Straw";
