"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "sync-warning" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-sync-warning",
    viewBox: "0 0 16 16",
    paths: [
      "m8.354.647 3.356 3.358H8.004a4 4 0 0 0-3.865 5.036l-.966.258a5 5 0 0 1 4.831-6.294h1.293L7.646 1.353Zm4.48 6.054q.168.623.169 1.295a5 5 0 0 1-5 4.999H6.708l1.646 1.652-.708.706-3.347-3.358h3.704a4 4 0 0 0 3.865-5.035ZM8.002 5.5 10.6 10H5.404ZM7.136 9h1.732l-.866-1.5Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-sync-warning",
    viewBox: "0 0 16 16",
    paths: [
      "M11.71 4.005 8.354.646l-.708.707 1.651 1.652H8.004a5 5 0 0 0-4.831 6.294l.966-.258a4 4 0 0 1 3.865-5.036z",
      "M10.6 10 8.002 5.5 5.404 10z",
      "M13.003 7.995c0-.446-.058-.88-.169-1.294l-.966.258a4 4 0 0 1-3.865 5.036H4.299l3.347 3.358.708-.706-1.646-1.652h1.295a5 5 0 0 0 5-5",
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

const SyncWarningBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "sync-warning",
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
SyncWarningBase.displayName = "SyncWarning";

export const SyncWarning = memo(SyncWarningBase) as typeof SyncWarningBase;
SyncWarning.displayName = "SyncWarning";
