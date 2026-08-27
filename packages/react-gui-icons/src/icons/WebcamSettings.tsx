"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "webcam-settings" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-webcam-settings",
    viewBox: "0 0 16 16",
    paths: [
      "M1 5.5A3.5 3.5 0 0 1 4.5 2h7a3.5 3.5 0 0 1 3.194 4.934l-.912-.41A2.5 2.5 0 0 0 11.5 3h-7a2.5 2.5 0 1 0 0 5h2.902l-.803 3H5v-1h.831l.268-1H4.5A3.5 3.5 0 0 1 1 5.5m10 3.55V8h1v1.05a2.5 2.5 0 0 1 1.371.792l.91-.525.5.866-.909.525a2.5 2.5 0 0 1 0 1.584l.909.525-.5.866-.91-.525A2.5 2.5 0 0 1 12 13.95V15h-1v-1.05a2.5 2.5 0 0 1-1.371-.792l-.911.525-.5-.866.91-.525a2.5 2.5 0 0 1 0-1.584l-.91-.525.5-.866.911.525A2.5 2.5 0 0 1 11 9.05m.5.95a1.5 1.5 0 1 0-.002 3 1.5 1.5 0 0 0 .002-3M3 5.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 3 5.5m9 .5h-1V5h1ZM4.5 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-webcam-settings",
    viewBox: "0 0 16 16",
    paths: [
      "M4.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      "M4.5 3h7a3.5 3.5 0 0 1 3.243 4.819A5.002 5.002 0 0 0 7.416 10h-.282l-.535 2H5v-1h.831l.268-1H4.5a3.5 3.5 0 1 1 0-7M3 6.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 3 6.5M11 5v1h1V5Z",
      "M9.629 9.842A2.5 2.5 0 0 1 11 9.05V8h1v1.05a2.5 2.5 0 0 1 1.371.792l.91-.525.5.866-.909.525a2.5 2.5 0 0 1 0 1.584l.909.525-.5.866-.91-.525A2.5 2.5 0 0 1 12 13.95V15h-1v-1.05a2.5 2.5 0 0 1-1.371-.792l-.911.525-.5-.866.91-.525a2.5 2.5 0 0 1 0-1.584l-.91-.525.5-.866Zm.571.908c-.127.22-.2.476-.2.75a1.495 1.495 0 0 0 1.5 1.5 1.5 1.5 0 1 0-1.3-2.25",
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

const WebcamSettingsBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "webcam-settings",
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
WebcamSettingsBase.displayName = "WebcamSettings";

export const WebcamSettings = memo(
  WebcamSettingsBase,
) as typeof WebcamSettingsBase;
WebcamSettings.displayName = "WebcamSettings";
