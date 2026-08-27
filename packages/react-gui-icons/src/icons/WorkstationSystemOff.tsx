"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "workstation-system-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-workstation-system-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 13 13-.708.708L13.293 14H10v-1h2.293L11 11.707V12H6.902l.268 1H9v1H3v-1h1.831l.268-1H1V5h3.293L1.646 2.354ZM5.293 6H2v5h8v-.293ZM6 12.5l-.134.5h.268Zm9-.328-1-1V3H8v1H7V2h8z",
      "M13 9h-1.172L10 7.172V6H8.828l-1-1H11v1h2v1h-2v1h2zm-1-5h1v1h-1z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-workstation-system-off",
    viewBox: "0 0 16 16",
    paths: [
      "m15.354 14.646-.708.708L13.293 14H10v-1h2v-.293l-1-1V12H6.901l.269 1H9v1H3v-1h1.831l.269-1H1V5h3.293L1.646 2.354l.708-.708ZM2 6v5h8v-.293L5.293 6Zm3.866 7h.269L6 12.5ZM15 12.172l-3-3V9h2V8h-2V7h2V6h-2V4H7V2h8ZM13 5h1V4h-1Z",
      "m11 8.172-1-1V6H8.828l-1-1H11z",
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

const WorkstationSystemOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "workstation-system-off",
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
WorkstationSystemOffBase.displayName = "WorkstationSystemOff";

export const WorkstationSystemOff = memo(
  WorkstationSystemOffBase,
) as typeof WorkstationSystemOffBase;
WorkstationSystemOff.displayName = "WorkstationSystemOff";
