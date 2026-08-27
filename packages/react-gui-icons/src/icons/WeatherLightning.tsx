"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "weather-lightning" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-weather-lightning",
    viewBox: "0 0 16 16",
    paths: [
      "M9.093 9h2.279l-3.223 5.5H6.863V12H5.201l.182-.637 1.137-4L6.622 7h3.04Zm-2.569 2h1.339v2.01L9.627 10H7.77l.568-2h-.96Z",
      "M8.5 2a3.5 3.5 0 0 1 3.399 2.678A3 3 0 0 1 13 7a3 3 0 0 1-.601 1.801l-.798-.601c.251-.334.399-.749.399-1.2 0-.671-.33-1.264-.839-1.628l-.165-.118-.036-.2A2.5 2.5 0 0 0 6 5.5V6h-.5a1.5 1.5 0 0 0-.375 2.953l-.25.968a2.501 2.501 0 0 1 .155-4.876A3.5 3.5 0 0 1 8.5 2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-weather-lightning",
    viewBox: "0 0 16 16",
    paths: [
      "M8.5 2a3.5 3.5 0 0 1 3.399 2.678 2.996 2.996 0 0 1-1.037 5.191L8.149 14.5H6.863V12H5.201l.57-2H5.5a2.5 2.5 0 0 1-.47-4.955A3.5 3.5 0 0 1 8.5 2m-1.976 9h1.339v2.01L9.627 10H7.77l.568-2h-.96Z",
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

const WeatherLightningBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "weather-lightning",
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
WeatherLightningBase.displayName = "WeatherLightning";

export const WeatherLightning = memo(
  WeatherLightningBase,
) as typeof WeatherLightningBase;
WeatherLightning.displayName = "WeatherLightning";
