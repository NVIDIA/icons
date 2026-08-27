"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "weather-fog" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-weather-fog",
    viewBox: "0 0 16 16",
    paths: [
      "M5.927 11.205c.552-.115 1.004-.088 1.399.044.436.146.757.408 1.005.605.263.211.453.357.696.438.228.076.549.108 1.068-.031l2.775-.744.26.965-2.776.745c-.666.178-1.192.164-1.643.013-.436-.145-.757-.406-1.005-.604-.263-.21-.453-.357-.696-.438-.199-.066-.47-.099-.882-.013l-2.998.797-.26-.965z",
      "M5.927 9.205c.552-.115 1.004-.088 1.399.044.436.146.757.408 1.005.605.263.211.453.357.696.438.228.076.549.108 1.068-.031l2.775-.744.26.965-2.776.745c-.666.178-1.192.164-1.643.013-.436-.145-.757-.406-1.005-.604-.263-.21-.453-.357-.696-.438-.199-.066-.47-.099-.882-.013l-2.998.797-.26-.965zM8.5 3a3.5 3.5 0 0 1 3.399 2.678 2.99 2.99 0 0 1 .885 3.441l-.928-.373a1.996 1.996 0 0 0-.695-2.374l-.165-.118-.036-.2A2.5 2.5 0 0 0 6 6.5V7h-.5c-.841 0-1.532.721-1.499 1.561l-.999.039A2.524 2.524 0 0 1 5.03 6.045 3.5 3.5 0 0 1 8.5 3",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-weather-fog",
    viewBox: "0 0 16 16",
    paths: [
      "M5.927 11.205c.552-.115 1.004-.088 1.399.044.436.146.757.408 1.005.605.263.211.453.357.696.438.228.076.549.108 1.068-.031l2.775-.744.26.965-2.776.745c-.666.178-1.192.164-1.643.013-.436-.145-.757-.406-1.005-.604-.263-.21-.453-.357-.696-.438-.199-.066-.47-.099-.882-.013l-2.998.797-.26-.965z",
      "M5.927 9.205c.552-.115 1.004-.088 1.399.044.436.146.757.408 1.005.605.263.211.453.357.696.438.228.076.549.108 1.068-.031l2.775-.744.26.965-2.776.745c-.666.178-1.192.164-1.643.013-.436-.145-.757-.406-1.005-.604-.263-.21-.453-.357-.696-.438-.199-.066-.47-.099-.882-.013l-2.998.797-.26-.965z",
      "M8.5 3c1.65 0 3.03 1.142 3.4 2.679A3 3 0 0 1 13 8c0 .175-.014.35-.023.524l-2.623.703c-.665.178-1.192.164-1.643.013-.436-.145-.756-.407-1.004-.604-.263-.21-.454-.357-.696-.438-.199-.066-.471-.099-.883-.013l-3.078.818a2.8 2.8 0 0 1-.016-.912A2.5 2.5 0 0 1 5.03 6.044 3.5 3.5 0 0 1 8.5 3",
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

const WeatherFogBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "weather-fog",
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
WeatherFogBase.displayName = "WeatherFog";

export const WeatherFog = memo(WeatherFogBase) as typeof WeatherFogBase;
WeatherFog.displayName = "WeatherFog";
