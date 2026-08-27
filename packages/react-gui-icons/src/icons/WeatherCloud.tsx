"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "weather-cloud" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-weather-cloud",
    viewBox: "0 0 16 16",
    paths: [
      "M14 9c0-.671-.33-1.264-.839-1.628l-.165-.118-.036-.2A2.5 2.5 0 0 0 9.797 5.1l-.218.075A2.5 2.5 0 0 0 8 7.5V8h-.5a1.5 1.5 0 0 0 0 3H12a2 2 0 0 0 2-2m1 0a3 3 0 0 1-3 3H7.5a2.5 2.5 0 0 1-2.45-2H3.5a2.5 2.5 0 0 1-.47-4.955 3.5 3.5 0 0 1 6.673-.954 3.497 3.497 0 0 1 4.196 2.587A3 3 0 0 1 15 9M2 7.5A1.5 1.5 0 0 0 3.5 9h1.55a2.5 2.5 0 0 1 1.981-1.955 3.5 3.5 0 0 1 1.741-2.589A2.5 2.5 0 0 0 4 5.5V6h-.5A1.5 1.5 0 0 0 2 7.5",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-weather-cloud",
    viewBox: "0 0 16 16",
    paths: [
      "M6.5 2c1.433 0 2.66.862 3.201 2.095.257-.06.524-.095.799-.095a3.5 3.5 0 0 1 3.399 2.678A3 3 0 0 1 12 12H7.5a2.5 2.5 0 0 1-2.45-2H3.5a2.5 2.5 0 0 1-.47-4.955A3.5 3.5 0 0 1 6.5 2m0 1A2.5 2.5 0 0 0 4 5.5V6h-.5a1.5 1.5 0 0 0 0 3h1.552A2.5 2.5 0 0 1 7.03 7.045a3.5 3.5 0 0 1 1.741-2.586A2.5 2.5 0 0 0 6.5 3",
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

const WeatherCloudBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "weather-cloud",
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
WeatherCloudBase.displayName = "WeatherCloud";

export const WeatherCloud = memo(WeatherCloudBase) as typeof WeatherCloudBase;
WeatherCloud.displayName = "WeatherCloud";
