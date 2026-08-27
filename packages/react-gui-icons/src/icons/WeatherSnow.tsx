"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "weather-snow" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-weather-snow",
    viewBox: "0 0 16 16",
    paths: [
      "M9.854 7.854 9 8.707v.927l.803-.463.312-1.166.966.259-.236.882.882.237-.258.966-1.166-.313-.804.463.804.465 1.166-.313.258.966-.882.237.236.882-.966.259-.312-1.166L9 11.365v.928l.854.853-.708.708-.646-.647-.646.647-.708-.708.854-.853v-.928l-.803.464-.312 1.166-.966-.259.236-.882-.883-.237.259-.966 1.166.313.803-.465-.803-.463-1.166.313-.259-.966.883-.237-.236-.882.966-.259.312 1.166.803.463v-.927l-.854-.853.708-.708.646.647.646-.647z",
      "M8.5 2a3.5 3.5 0 0 1 3.399 2.678 2.99 2.99 0 0 1 .827 3.576l-.909-.418a1.996 1.996 0 0 0-.656-2.464l-.165-.118-.036-.2A2.5 2.5 0 0 0 6 5.5V6h-.5a1.5 1.5 0 0 0-.946 2.664l-.631.775A2.5 2.5 0 0 1 5.03 5.045 3.5 3.5 0 0 1 8.5 2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-weather-snow",
    viewBox: "0 0 16 16",
    paths: [
      "M8.5 2a3.5 3.5 0 0 1 3.399 2.678 2.99 2.99 0 0 1 .316 4.34 4 4 0 1 1-7.656.797 2.499 2.499 0 0 1 .471-4.77A3.5 3.5 0 0 1 8.5 2m0 5.793-.646-.647-.708.708.854.853v.927l-.803-.463-.312-1.166-.966.259.236.882-.883.237.259.966 1.166-.313.803.463-.803.465-1.166-.313-.259.966.883.237-.236.882.966.259.312-1.166.803-.464v.928l-.854.853.708.708.646-.647.646.647.708-.708L9 12.293v-.928l.803.464.312 1.166.966-.259-.236-.882.882-.237-.258-.966-1.166.313-.804-.465.804-.463 1.166.313.258-.966-.882-.237.236-.882-.966-.259-.312 1.166L9 9.634v-.927l.854-.853-.708-.708Z",
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

const WeatherSnowBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "weather-snow",
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
WeatherSnowBase.displayName = "WeatherSnow";

export const WeatherSnow = memo(WeatherSnowBase) as typeof WeatherSnowBase;
WeatherSnow.displayName = "WeatherSnow";
