"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "fan" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-fan",
    viewBox: "0 0 16 16",
    paths: [
      "M5 2h2.5A2.5 2.5 0 0 1 10 4.5c0 .367-.074.749-.188 1.119a6 6 0 0 1 .255-.159c.431-.254.929-.46 1.433-.46H14v2.5a2.5 2.5 0 0 1-2.5 2.5c-.367 0-.749-.074-1.12-.188q.084.126.16.255c.254.431.46.929.46 1.433V14H8.5A2.5 2.5 0 0 1 6 11.5c0-.367.074-.749.188-1.12q-.126.084-.255.16c-.431.254-.929.46-1.433.46H2V8.5A2.5 2.5 0 0 1 4.5 6c.367 0 .749.074 1.119.188a6 6 0 0 1-.159-.255C5.206 5.502 5 5.004 5 4.5Zm3.096 6.744c-.121.186-.264.421-.407.683C7.319 10.104 7 10.884 7 11.5A1.5 1.5 0 0 0 8.5 13H10v-1.5c0-.246-.106-.56-.322-.926a6.6 6.6 0 0 0-.798-1.05c-.281-.309-.563-.58-.784-.78m-.84-.648a11 11 0 0 0-.683-.407C5.895 7.319 5.116 7 4.5 7A1.5 1.5 0 0 0 3 8.5V10h1.5c.246 0 .56-.106.926-.322.358-.21.72-.498 1.05-.798.309-.281.58-.563.78-.784m1.488-.192c.186.121.421.264.683.407.677.37 1.457.689 2.073.689A1.5 1.5 0 0 0 13 7.5V6h-1.5c-.246 0-.56.106-.926.322-.358.21-.72.498-1.05.798-.309.281-.58.563-.78.784M6 3v1.5c0 .246.106.56.322.926.21.358.498.72.798 1.05.281.309.563.58.784.78.121-.186.264-.421.407-.683C8.681 5.895 9 5.116 9 4.5A1.5 1.5 0 0 0 7.5 3Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-fan",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 2.25H5.25V4.5c0 .44.181.892.425 1.306.192.326.43.643.677.933-.584-.268-1.247-.489-1.852-.489A2.25 2.25 0 0 0 2.25 8.5v2.25H4.5c.44 0 .892-.181 1.306-.425.326-.192.643-.43.933-.677-.268.584-.489 1.247-.489 1.852a2.25 2.25 0 0 0 2.25 2.25h2.25V11.5c0-.44-.181-.892-.425-1.306a7 7 0 0 0-.677-.933c.584.268 1.247.489 1.852.489a2.25 2.25 0 0 0 2.25-2.25V5.25H11.5c-.44 0-.892.181-1.306.425-.326.192-.643.43-.933.677.268-.584.489-1.247.489-1.852A2.25 2.25 0 0 0 7.5 2.25",
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

const FanBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "fan",
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
FanBase.displayName = "Fan";

export const Fan = memo(FanBase) as typeof FanBase;
Fan.displayName = "Fan";
