"use client";

// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";
import { inlineMap } from "./generated/inlineMap.js";
import { useSpriteSymbol } from "./runtime/useSpriteSymbol.js";
import type { IconName, Variant } from "./types.js";

export interface NvidiaGuiIconProps
  extends Omit<SVGProps<SVGSVGElement>, "title"> {
  iconName: IconName;
  variant?: Variant;
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

/**
 * Generic NvidiaGuiIcon — renders any icon by name using the full inline map.
 * For tree-shakable usage, prefer per-icon imports:
 *   import { Icon2BLeftClick } from "@nvidia/react-gui-icons/icons";
 */
const NvidiaGuiIconBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
  ({ iconName, variant = "line", size = "1em", title, ...svgProps }, ref) => {
    const iconData = inlineMap[variant]?.[iconName];
    const href = iconData ? `#${iconData.symbolId}` : undefined;
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
        viewBox: iconData?.viewBox ?? "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "data-icon-name": iconName,
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
      href ? createElement("use", { href, key: "use" }) : null,
    );
  },
);
NvidiaGuiIconBase.displayName = "NvidiaGuiIcon";

export const NvidiaGuiIcon = memo(
  NvidiaGuiIconBase,
) as typeof NvidiaGuiIconBase;
NvidiaGuiIcon.displayName = "NvidiaGuiIcon";
