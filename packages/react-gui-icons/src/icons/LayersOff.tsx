"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "layers-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-layers-off",
    viewBox: "0 0 16 16",
    paths: [
      "m14.762 10.926-.624.384-.727-.727.827-.509zm0-3-2.481 1.527-.727-.727 2.684-1.652zm-5.397 2.147-1.13-1.131L8 9.079 1.008 5l2.075-1.21-1.437-1.436.708-.708 12 12-.708.708-1.696-1.697L8 15.087l-6.762-4.161.524-.852L8 13.913l3.223-1.983-1.131-1.13L8 12.087 1.238 7.926l.524-.852L8 10.913ZM3.814 4.521 2.992 5l3.122 1.821ZM14.992 5l-4.524 2.639-.731-.731L13.008 5 8 2.079 6.047 3.218l-.731-.731L8 .921z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-layers-off",
    viewBox: "0 0 16 16",
    paths: [
      "m14.762 10.926-.624.384-.727-.727.827-.509zm0-3-2.481 1.527-.727-.727 2.684-1.652zm-5.397 2.147-1.13-1.131L8 9.079 1.008 5l2.075-1.21-1.437-1.436.708-.708 12 12-.708.708-1.696-1.697L8 15.087l-6.762-4.161.524-.852L8 13.913l3.223-1.983-1.131-1.13L8 12.087 1.238 7.926l.524-.852L8 10.913zM14.992 5l-4.524 2.639-5.152-5.152L8 .921z",
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

const LayersOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "layers-off",
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
LayersOffBase.displayName = "LayersOff";

export const LayersOff = memo(LayersOffBase) as typeof LayersOffBase;
LayersOff.displayName = "LayersOff";
