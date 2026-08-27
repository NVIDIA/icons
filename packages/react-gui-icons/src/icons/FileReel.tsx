"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "file-reel" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-file-reel",
    viewBox: "0 0 16 16",
    paths: [
      "M7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 3m-.5 1.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m3.771 5.45a1.5 1.5 0 1 1-2.427 1.763A1.5 1.5 0 0 1 11.27 9.95m-.92 1.286a.5.5 0 1 0-.588-.81.5.5 0 0 0 .588.81m2.405-4.781a1.499 1.499 0 1 1-2.853.927 1.5 1.5 0 0 1 2.853-.927m-1.581-.012a.5.5 0 1 0 .31.952.5.5 0 0 0-.31-.952m-4.018 5.27A1.5 1.5 0 1 1 4.729 9.95a1.5 1.5 0 0 1 2.427 1.763m-1.507-.477a.5.5 0 1 0 .587-.808.5.5 0 0 0-.587.808M3.245 6.455a1.5 1.5 0 1 1 2.853.926 1.5 1.5 0 0 1-2.853-.926m1.272.939a.5.5 0 1 0 .309-.951.5.5 0 0 0-.309.951",
      "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-file-reel",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m2.378 6.228a1 1 0 1 0 1.902-.618 1 1 0 0 0-1.902.618m-5.244 3.016a1 1 0 1 0 1.617 1.176 1 1 0 0 0-1.617-1.176M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5.622 7.228a1 1 0 1 0-1.903-.619 1 1 0 0 0 1.903.619m3.626 4.191a1 1 0 1 0 1.62-1.177 1 1 0 0 0-1.62 1.177",
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

const FileReelBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "file-reel",
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
FileReelBase.displayName = "FileReel";

export const FileReel = memo(FileReelBase) as typeof FileReelBase;
FileReel.displayName = "FileReel";
