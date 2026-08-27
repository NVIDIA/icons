"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "helicopter" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-helicopter",
    viewBox: "0 0 16 16",
    paths: [
      "M14 5H8.5v1.742c1.173.312 2.482.684 3.685 1.035A1.502 1.502 0 0 1 15 8.5a1.5 1.5 0 0 1-2.843.67c-.964.248-1.784.74-2.671 1.271l-.18.108c-.958.573-1.996 1.164-3.306 1.373V13h4v1H2.793l-1.147-1.146.708-.708.853.854H5v-1a3 3 0 0 1-3-3c0-1.641 1.208-3 3-3 .296 0 .778.085 1.329.205.348.076.744.17 1.171.278V5H2V4h12ZM3 9a2 2 0 0 0 2 2c1.508 0 2.614-.604 3.793-1.309l.216-.129c.627-.378 1.289-.775 2.035-1.074-.995-.287-2.02-.574-2.948-.819a49 49 0 0 0-1.979-.487C5.549 7.059 5.171 7 5 7c-1.208 0-2 .879-2 2m10.079-.77-.044.453a.5.5 0 1 0 .044-.453",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-helicopter",
    viewBox: "0 0 16 16",
    paths: [
      "M2 5V4h12v1H8.5v1.742c1.173.312 2.482.684 3.685 1.035A1.502 1.502 0 0 1 15 8.5a1.5 1.5 0 0 1-2.843.67c-.964.248-1.784.74-2.671 1.271l-.18.108c-.958.573-1.996 1.164-3.306 1.373V13h4v1H2.793l-1.147-1.146.708-.708.853.854H5v-1a3 3 0 0 1-3-3c0-1.641 1.208-3 3-3 .296 0 .778.085 1.329.205.348.076.744.17 1.171.278V5Zm11.079 3.23-.044.453a.5.5 0 1 0 .044-.453",
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

const HelicopterBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "helicopter",
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
HelicopterBase.displayName = "Helicopter";

export const Helicopter = memo(HelicopterBase) as typeof HelicopterBase;
Helicopter.displayName = "Helicopter";
