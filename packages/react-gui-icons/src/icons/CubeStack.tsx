"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "cube-stack" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-cube-stack",
    viewBox: "0 0 16 16",
    paths: [
      "m8 .923 3.75 2.165V6.84L15 8.717v4.33l-3.75 2.165L8 13.335l-3.25 1.877L1 13.047v-4.33L4.25 6.84V3.088ZM5.75 3.376 8 4.675l2.25-1.299L8 2.077ZM7.5 9.871 5.25 11.17v2.598l2.25-1.299Zm0-1.732V5.541L5.25 4.242V6.84Zm3.25-1.299V4.242L8.5 5.541v2.598Zm-6 .866L2.5 9.005l2.25 1.299L7 9.005Zm-.5 6.062V11.17L2 9.871v2.598Zm4.25-1.299 2.25 1.299V11.17L8.5 9.871ZM14 9.871l-2.25 1.299v2.598L14 12.469Zm-5-.866 2.25 1.299 2.25-1.299-2.25-1.299Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-cube-stack",
    viewBox: "0 0 16 16",
    paths: [
      "M4.75 3.954v2.598L7.5 8.139V5.541zm-.5 3.464L2 8.717l2.75 1.587L7 9.005zM1.5 9.583v3.175l2.75 1.588V11.17zm3.75 4.763 2.25-1.299V9.871L5.25 11.17zm3.25-1.299 2.25 1.299V11.17L8.5 9.871zm3.25 1.299 2.75-1.588V9.583l-2.75 1.587zM14 8.717l-2.25-1.299L9 9.005l2.25 1.299zm-2.75-2.165V3.954L8.5 5.541v2.598zm-.5-3.464L8 1.5 5.25 3.088 8 4.675z",
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

const CubeStackBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "cube-stack",
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
CubeStackBase.displayName = "CubeStack";

export const CubeStack = memo(CubeStackBase) as typeof CubeStackBase;
CubeStack.displayName = "CubeStack";
