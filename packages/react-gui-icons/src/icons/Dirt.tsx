"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "dirt" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-dirt",
    viewBox: "0 0 16 16",
    paths: [
      "M5.968 10.928 7 11.96v1.597l-1.987.497-1.085-1.086.51-1.53Zm7-6L14 5.96v1.597l-1.987.497-1.085-1.086.51-1.53ZM6.401 7.892l1.099.549v1.118l-1.099.549L5.293 9Zm-2-3 1.099.549v1.118l-1.099.549L3.293 6Zm6 5 1.099.549v1.118l-1.099.549L9.293 11Zm0-8 1.099.549v1.118l-1.099.549L9.293 3Zm.953 6.754-.708.708-1-1 .708-.708Zm-1-2.292-.708-.708 1-1 .708.708Zm-1.208-1.5-1-1 .708-.708 1 1Zm-5 4.5-1-1 .708-.708 1 1Zm1.5-6-1-1 .708-.708 1 1Zm1-.208 1-1 .708.708-1 1Zm0 2.208-1-1 .708-.708 1 1Zm1.708 1-.708-.708 1-1 .708.708Zm-.5.292-.708.708-1-1 .708-.708Zm-6.208 1 1-1 .708.708-1 1Zm3 0 1-1 .708.708-1 1Zm4.708 0-.708.708-1-1 .708-.708Zm.5 4.5-.708.708-1-1 .708-.708Zm-2.208-.292-1-1 .708-.708 1 1Zm1.708 1.792-.708.708-1-1 .708-.708Zm-.5-3.292-.708-.708 1-1 .708.708Zm-7.208-.708 1-1 .708.708-1 1Zm2 1 1-1 .708.708-1 1Zm8-1 1-1 .708.708-1 1Zm-6.417 2.583-.157.469.248.248.68-.17v-.402l-.302-.302Zm7-6-.157.469.248.248.68-.17v-.402l-.302-.302Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-dirt",
    viewBox: "0 0 16 16",
    paths: [
      "m4.646 2.354 1 1 .708-.708-1-1zM11.5 3.559l-1.099.549L9.293 3l1.108-1.108 1.099.549zm-6 3-1.099.549L3.293 6l1.108-1.108 1.099.549zM14 5.96l-1.032-1.032-1.53.51-.51 1.53 1.085 1.086L14 7.557zm-7 6-1.032-1.032-1.53.51-.51 1.53 1.085 1.086L7 13.557zm.5-2.401V8.441l-1.099-.549L5.293 9l1.108 1.108zm4 2-1.099.549L9.293 11l1.108-1.108 1.099.549zM7.646 7.354l.708-.708 1 1-.708.708zm2 1 1 1 .708-.708-1-1zm-5.5 1-1-1 .708-.708 1 1zm1.5-5 1 1 .708-.708-1-1zm3.5.5-1-1 .708-.708 1 1zm-3 1.5 1 1 .708-.708-1-1zm1.5 7 .708-.708 1 1-.708.708zm-1-2.5 1 1 .708-.708-1-1zm1.5 1 .708-.708 1 1-.708.708zm-5.5-3.208-1 1 .708.708 1-1zm-1-1 1-1 .708.708-1 1zm6-5.5-1 1 .708.708 1-1zm0 3.5 1-1 .708.708-1 1zm3-1-1 1 .708.708 1-1zm-6 3 1-1 .708.708-1 1zm4.5 1-1 1 .708.708 1-1zm2.5 1 1-1 .708.708-1 1zm-6.292.708-.708-.708-1 1 .708.708z",
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

const DirtBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "dirt",
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
DirtBase.displayName = "Dirt";

export const Dirt = memo(DirtBase) as typeof DirtBase;
Dirt.displayName = "Dirt";
