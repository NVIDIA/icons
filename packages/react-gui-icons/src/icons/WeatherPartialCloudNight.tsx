"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "weather-partial-cloud-night" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-weather-partial-cloud-night",
    viewBox: "0 0 16 16",
    paths: [
      "M4.545 3.036A2.99 2.99 0 0 1 7.62 4.549a3.497 3.497 0 0 1 5.279 2.129A3 3 0 0 1 11 12H6.5a2.5 2.5 0 0 1-2.416-3.147 3 3 0 0 1-.586-.255 3 3 0 0 1-1.194-1.283l-.099-.226a3.1 3.1 0 0 1-.2-.915l.815.256a1.498 1.498 0 0 0 1.462-2.531l-.629-.579c.28-.14.582-.24.892-.284M9.5 5A2.5 2.5 0 0 0 7 7.5V8h-.5a1.5 1.5 0 0 0 0 3H11a2 2 0 0 0 1.161-3.628l-.165-.118-.036-.2A2.5 2.5 0 0 0 9.5 5m-3.908-.909a2.49 2.49 0 0 1-1.949 3.376c.248.23.574.403.901.479a2.5 2.5 0 0 1 1.486-.901c.09-.688.381-1.313.81-1.815a2 2 0 0 0-1.248-1.139",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-weather-partial-cloud-night",
    viewBox: "0 0 16 16",
    paths: [
      "M4.545 3.036A2.99 2.99 0 0 1 7.621 4.55 3.5 3.5 0 0 1 9.5 4a3.5 3.5 0 0 1 3.399 2.678A3 3 0 0 1 11 12H6.5a2.5 2.5 0 0 1-2.416-3.145 2.98 2.98 0 0 1-1.78-1.541l-.099-.225a3.1 3.1 0 0 1-.2-.915l.815.256a1.498 1.498 0 0 0 1.462-2.532l-.629-.579c.28-.14.582-.24.892-.283m1.047 1.055a2.49 2.49 0 0 1-1.949 3.376c.248.23.573.404.9.48a2.5 2.5 0 0 1 1.487-.902c.09-.689.381-1.314.811-1.816a2 2 0 0 0-1.249-1.138",
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

const WeatherPartialCloudNightBase = forwardRef<
  SVGSVGElement,
  NvidiaGuiIconProps
>(({ variant = "line", size = "1em", title, ...svgProps }, ref) => {
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
      "data-icon-name": "weather-partial-cloud-night",
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
});
WeatherPartialCloudNightBase.displayName = "WeatherPartialCloudNight";

export const WeatherPartialCloudNight = memo(
  WeatherPartialCloudNightBase,
) as typeof WeatherPartialCloudNightBase;
WeatherPartialCloudNight.displayName = "WeatherPartialCloudNight";
