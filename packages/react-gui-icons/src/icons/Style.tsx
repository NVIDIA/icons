"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "style" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-style",
    viewBox: "0 0 16 16",
    paths: [
      "m13.25.543 2.207 2.207L11 7.207v.043c0 1.544-1.104 2.558-2.43 2.745-.6.085-1.296.089-1.927-.078-.634-.167-1.255-.522-1.59-1.193l-.258-.516.547-.182c.47-.157.755-.603 1.145-1.274l.016-.027c.209-.36.456-.784.786-1.112A2 2 0 0 1 8.75 5h.042ZM10 7.24 8.76 6h-.01c-.324 0-.55.118-.756.322-.227.226-.414.54-.642.933l-.035.059c-.25.431-.563.971-1.055 1.341q.251.195.636.295c.465.123 1.019.127 1.532.055.9-.127 1.57-.774 1.57-1.755Zm2-2.447 2.042-2.043-.792-.793L11.207 4Zm-.707.707-.793-.793-.809.809.792.793Z",
      "M8 3H1v10h14V6h-1v6H2V4h6z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-style",
    viewBox: "0 0 16 16",
    paths: [
      "M15.5 2 14 .5l-3 3L12.5 5z",
      "M8 3H1v10h14V6h-1v6H2V4h6z",
      "M6.49 6.75C6.94 5.97 7.51 5 8.75 5l-.01-.01c.218 0 .436.044.647.123l.903-.903 1.5 1.5-.912.912c.072.202.112.41.112.618 0 1.44-.98 2.55-2.43 2.75-.28.04-.56.06-.82.06-1.28 0-2.26-.47-2.69-1.33l-.26-.52.55-.18c.507-.159.816-.693 1.144-1.259z",
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

const StyleBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "style",
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
StyleBase.displayName = "Style";

export const Style = memo(StyleBase) as typeof StyleBase;
Style.displayName = "Style";
