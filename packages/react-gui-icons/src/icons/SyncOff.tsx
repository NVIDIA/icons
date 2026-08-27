"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "sync-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-sync-off",
    viewBox: "0 0 16 16",
    paths: [
      "M13.003 7.996c0 .647-.123 1.265-.346 1.832l-.791-.79a4 4 0 0 0 .002-2.078l.966-.259q.168.623.169 1.295M9.294 4.005 8.061 5.233l.707.707 2.443-2.435L8.354.646l-.708.707 1.651 1.652H8.004c-.645 0-1.261.122-1.827.344l.791.791a4 4 0 0 1 1.036-.135zm1.158 7.154L4.844 5.551a4.01 4.01 0 0 0-.705 3.49l-.966.258a5 5 0 0 1-.169-1.294c0-1.201.423-2.303 1.129-3.165L1.646 2.354l.707-.708 12.001 12-.708.708-2.483-2.483a4.98 4.98 0 0 1-3.16 1.125l-1.295-.001 1.646 1.652-.708.706-2.849-2.858 2.849-2.849.707.708-1.642 1.641 1.292.001c.923 0 1.772-.313 2.449-.837",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-sync-off",
    viewBox: "0 0 16 16",
    paths: [
      "M9.294 4.005 8.061 5.233l.707.707 2.443-2.435L8.354.646l-.708.707 1.651 1.652H8.004c-.645 0-1.261.122-1.827.344l.791.791a4 4 0 0 1 1.036-.135zm3.709 3.99c0 .648-.123 1.266-.346 1.833l-.791-.79q.136-.5.137-1.043a4 4 0 0 0-.135-1.036l.966-.258c.111.414.169.848.169 1.294m-1.84 3.876a4.98 4.98 0 0 1-3.16 1.124H6.708l1.646 1.652-.708.706-2.849-2.858 2.849-2.849.707.708-1.642 1.641h1.292c.923 0 1.772-.312 2.449-.836L4.844 5.551a4.01 4.01 0 0 0-.705 3.49l-.966.258a5 5 0 0 1-.169-1.294c0-1.201.423-2.303 1.129-3.165L1.646 2.354l.707-.708 12.001 12-.708.708z",
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

const SyncOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "sync-off",
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
SyncOffBase.displayName = "SyncOff";

export const SyncOff = memo(SyncOffBase) as typeof SyncOffBase;
SyncOff.displayName = "SyncOff";
