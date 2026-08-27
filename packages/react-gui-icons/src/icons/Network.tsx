"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "network" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-network",
    viewBox: "0 0 16 16",
    paths: [
      "M6 3a2 2 0 1 1 2.5 1.937v1.626c.512.132.944.461 1.211.902l1.291-.387Q10.999 7.039 11 7a2 2 0 1 1 .289 1.035l-1.29.387L10 8.5c0 .513-.193.98-.51 1.334l.852 1.277a2 2 0 1 1-.832.555l-.852-1.277a2 2 0 0 1-1.316 0l-.852 1.277a2 2 0 1 1-.832-.555l.852-1.277A2 2 0 0 1 6 8.5l.001-.078-1.29-.387A2 2 0 1 1 5 7l-.001.078 1.29.387c.267-.441.699-.77 1.211-.902V4.937A2 2 0 0 1 6 3m2 4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 4.5a.997.997 0 0 0-1 1 1 1 0 1 0 1-1m-6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-network",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a2 2 0 0 0-.5 3.937v1.626a2 2 0 0 0-1.211.902l-1.29-.387L5 7a2 2 0 1 0-.289 1.035l1.29.387L6 8.5c0 .513.193.98.51 1.334l-.852 1.277a2 2 0 1 0 .832.555l.852-1.277a2 2 0 0 0 1.316 0l.852 1.277a2 2 0 1 0 .832-.555L9.49 9.834c.317-.354.51-.821.51-1.334l-.001-.078 1.29-.387a2 2 0 1 0-.287-.957l-1.291.387A2 2 0 0 0 8.5 6.563V4.937A2 2 0 0 0 8 1",
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

const NetworkBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "network",
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
NetworkBase.displayName = "Network";

export const Network = memo(NetworkBase) as typeof NetworkBase;
Network.displayName = "Network";
