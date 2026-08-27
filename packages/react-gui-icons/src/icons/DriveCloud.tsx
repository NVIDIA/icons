"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "drive-cloud" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-drive-cloud",
    viewBox: "0 0 16 16",
    paths: [
      "M8.615 15C7.242 15 6 13.949 6 12.5a2.5 2.5 0 0 1 .74-1.742c.207-.206.464-.385.758-.504.108-.511.38-.961.721-1.305A3.25 3.25 0 0 1 10.5 8c.767 0 1.527.309 2.076.76.302.248.615.609.787 1.052.367.139.678.372.911.626.434.47.726 1.131.726 1.812 0 1.587-1.363 2.75-2.885 2.75ZM1 4h14v5h-1V5H2v3h4.654v1H1Zm12.254 6.872a1.07 1.07 0 0 0-.782-.174.97.97 0 0 0-.128-.703C12.023 9.437 11.234 9 10.5 9c-.815 0-1.598.476-1.909 1.127a1.36 1.36 0 0 0-.082 1.002 1.12 1.12 0 0 0-.969.251A1.5 1.5 0 0 0 7 12.5c0 .828.723 1.5 1.615 1.5h3.5C13.156 14 14 13.217 14 12.25c0-.529-.307-1.092-.746-1.378M4 7H3V6h1Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-drive-cloud",
    viewBox: "0 0 16 16",
    paths: [
      "M10.5 8.5c-.735 0-1.444.313-1.926.8-.347.352-.595.819-.623 1.336-.337.071-.631.25-.859.477-.36.359-.592.872-.592 1.387 0 1.139.983 2 2.115 2h3.5c1.282 0 2.385-.973 2.385-2.25 0-.543-.236-1.086-.593-1.474a1.83 1.83 0 0 0-.945-.561c-.093-.435-.384-.807-.703-1.069C11.79 8.761 11.14 8.5 10.5 8.5",
      "M15 4v5h-1.517a3.4 3.4 0 0 0-.589-.626c-.63-.518-1.5-.874-2.394-.874a3.75 3.75 0 0 0-2.637 1.098A3 3 0 0 0 7.524 9H1V4ZM3 6v1h1V6Z",
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

const DriveCloudBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "drive-cloud",
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
DriveCloudBase.displayName = "DriveCloud";

export const DriveCloud = memo(DriveCloudBase) as typeof DriveCloudBase;
DriveCloud.displayName = "DriveCloud";
