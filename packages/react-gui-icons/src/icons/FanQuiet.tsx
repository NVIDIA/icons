"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "fan-quiet" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-fan-quiet",
    viewBox: "0 0 16 16",
    paths: [
      "M4.5 3h2a2 2 0 0 1 2 2c0 .213-.058.433-.139.639.206-.081.426-.139.639-.139h2v2a2 2 0 0 1-2 2c-.213 0-.433-.058-.639-.139.081.206.139.426.139.639v2h-2a2 2 0 0 1-2-2c0-.213.058-.433.139-.639A1.8 1.8 0 0 1 4 9.5H2v-2a2 2 0 0 1 2-2c.213 0 .433.058.639.139A1.8 1.8 0 0 1 4.5 5Zm1.656 5.731c-.18.251-.352.515-.477.758-.133.258-.179.429-.179.511a1 1 0 0 0 1 1h.999l.001-1c0-.082-.046-.253-.179-.511a6 6 0 0 0-.477-.758 13 13 0 0 0-.344-.453c-.106.134-.225.288-.344.453m1.575-.887c.251.18.515.352.758.477.258.133.429.179.511.179a1 1 0 0 0 1-1v-.999L9 6.5c-.082 0-.253.046-.511.179a6 6 0 0 0-.758.477c-.165.119-.319.238-.453.344.134.106.288.225.453.344M6.5 6.722c.106-.134.225-.288.344-.453.18-.251.352-.515.477-.758.133-.258.179-.429.179-.511a1 1 0 0 0-1-1h-.999L5.5 5c0 .082.046.253.179.511.125.243.297.507.477.758.119.165.238.319.344.453m-.778.778a13 13 0 0 0-.453-.344 6 6 0 0 0-.758-.477C4.253 6.546 4.082 6.5 4 6.5a1 1 0 0 0-1 1v.999L4 8.5c.082 0 .253-.046.511-.179.243-.125.507-.297.758-.477.165-.119.319-.238.453-.344M12 9V5h1v4z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-fan-quiet",
    viewBox: "0 0 16 16",
    paths: [
      "M4.647 3H6.5c1.023 0 1.853.83 1.853 1.853 0 .285-.125.608-.278.905a6 6 0 0 1-.22.387q.194-.12.387-.22c.297-.153.62-.278.905-.278H11V7.5c0 1.023-.83 1.853-1.853 1.853-.285 0-.608-.125-.905-.278a6 6 0 0 1-.387-.22q.12.194.22.387c.153.297.278.62.278.905V12H6.5a1.853 1.853 0 0 1-1.853-1.853c0-.285.125-.608.278-.905q.1-.194.22-.387a6 6 0 0 1-.387.22c-.297.153-.62.278-.905.278H2V7.5c0-1.023.83-1.853 1.853-1.853.285 0 .608.125.905.278q.194.1.387.22a6 6 0 0 1-.22-.387c-.153-.297-.278-.62-.278-.905zM12 5v4h1V5z",
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

const FanQuietBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "fan-quiet",
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
FanQuietBase.displayName = "FanQuiet";

export const FanQuiet = memo(FanQuietBase) as typeof FanQuietBase;
FanQuiet.displayName = "FanQuiet";
