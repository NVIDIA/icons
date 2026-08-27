"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "soccer" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-soccer",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a6.99 6.99 0 0 1 5.529 2.707 7.03 7.03 0 0 1 1.465 4.574 6.97 6.97 0 0 1-1.225 3.686 7 7 0 0 1-3.845 2.765 7.005 7.005 0 0 1-8.918-6.444 7.01 7.01 0 0 1 4.618-6.874A7 7 0 0 1 8 1M5.719 2.448a6 6 0 0 0-2.323 1.705l.698 2.121 1.43.456L7.5 5.277V3.753ZM8.5 3.754v1.523l1.972 1.451 1.423-.471.679-2.135a6 6 0 0 0-2.284-1.669Zm2.282 3.925-.755 2.352.836 1.137 2.221.013a5.96 5.96 0 0 0 .894-2.678l-1.771-1.296Zm-8.76.831a5.96 5.96 0 0 0 .879 2.649l2.247.014.824-1.139-.754-2.352-1.43-.455Zm3.935 3.25.686 2.082c.902.208 1.85.206 2.751-.008l.661-2.077-.835-1.135H6.782Zm.244-4.286.69 2.148h2.217l.69-2.148L7.999 6.15Zm-2.52 4.69a6 6 0 0 0 1.774 1.27l-.415-1.262ZM12.88 6.46l1.069.783a6 6 0 0 0-.659-2.071ZM8 2q-.55 0-1.072.095L8 2.88l1.079-.783A6 6 0 0 0 8 2M2.69 5.207a6 6 0 0 0-.642 2.048l1.061-.772Zm7.885 8.212a6 6 0 0 0 1.732-1.243l-1.333-.007Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-soccer",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a6.99 6.99 0 0 1 5.53 2.707 7.03 7.03 0 0 1 1.464 4.574 6.97 6.97 0 0 1-1.225 3.686 7 7 0 0 1-3.845 2.765 7.04 7.04 0 0 1-3.804.012 7 7 0 0 1-3.907-2.804 6.97 6.97 0 0 1-1.207-3.652 7.03 7.03 0 0 1 1.434-4.54A6.99 6.99 0 0 1 8 1M5.719 2.448a6 6 0 0 0-2.323 1.705l.698 2.121 1.431.456L7.5 5.277V3.753ZM8.5 3.754v1.523l1.972 1.451 1.423-.471.68-2.135a6 6 0 0 0-2.285-1.669Zm2.283 3.925-.755 2.352.836 1.137 2.22.013a5.95 5.95 0 0 0 .894-2.678l-1.771-1.296Zm-8.761.831a5.95 5.95 0 0 0 .88 2.649l2.247.014.823-1.139-.754-2.352-1.43-.455Zm3.935 3.25.686 2.082c.902.208 1.85.206 2.751-.008l.661-2.077-.835-1.135H6.783Z",
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

const SoccerBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "soccer",
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
SoccerBase.displayName = "Soccer";

export const Soccer = memo(SoccerBase) as typeof SoccerBase;
Soccer.displayName = "Soccer";
