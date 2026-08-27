"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "drive-cloud-off" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-drive-cloud-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 13 13-.708.708-.861-.862a3 3 0 0 1-1.67.508h-3.5C7.242 15 6 13.949 6 12.5a2.5 2.5 0 0 1 .74-1.742c.207-.206.464-.385.758-.504.108-.511.38-.961.721-1.305l.011-.012L4.293 5H2v3h4.654v1H1V4h2.293L1.646 2.354Zm6.583 7.998a1.8 1.8 0 0 0-.346.483 1.36 1.36 0 0 0-.082 1.002 1.12 1.12 0 0 0-.969.251A1.5 1.5 0 0 0 7 12.5c0 .828.723 1.5 1.615 1.5h3.5c.344 0 .666-.085.943-.234Zm5.337.794c.417.451.703 1.079.725 1.732l-4.15-4.149a3.4 3.4 0 0 1 1.727.739c.302.248.615.609.787 1.052.367.139.678.372.911.626M14 5H7.828l-1-1H15v5h-1z",
      "M4 7H3V6h1z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-drive-cloud-off",
    viewBox: "0 0 16 16",
    paths: [
      "m2.354 1.646 13 13-.708.708-1.222-1.223c-.38.234-.832.369-1.309.369h-3.5c-1.132 0-2.115-.861-2.115-2 0-.515.232-1.028.592-1.387.228-.227.522-.405.859-.477.028-.517.276-.984.623-1.336l.01-.009-.707-.707-.014.014A3 3 0 0 0 7.524 9H1V4h2.293L1.646 2.354ZM3 6v1h1V6Zm7.5 1.5a3 3 0 0 0-.168.004L6.828 4H15v5h-1.517a3.4 3.4 0 0 0-.589-.627c-.63-.517-1.5-.873-2.394-.873",
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

const DriveCloudOffBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "drive-cloud-off",
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
DriveCloudOffBase.displayName = "DriveCloudOff";

export const DriveCloudOff = memo(
  DriveCloudOffBase,
) as typeof DriveCloudOffBase;
DriveCloudOff.displayName = "DriveCloudOff";
