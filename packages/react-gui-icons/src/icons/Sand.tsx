"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "sand" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-sand",
    viewBox: "0 0 16 16",
    paths: [
      "M12 2v7h.5a.5.5 0 0 0 .5-.5V6h1v2.5a1.5 1.5 0 0 1-1.5 1.5H12v1.092A49 49 0 0 1 15 11v1c-3.959 0-7.299.495-9.647.989a37 37 0 0 0-2.728.678 22 22 0 0 0-.897.283l-.045.015-.01.004-.002.001-.525-.824L6.5 7.793l3.467 3.467q.505-.052 1.033-.096V8h-.5A1.5 1.5 0 0 1 9 6.5V4h1v2.5a.5.5 0 0 0 .5.5h.5V2Zm-3.299 9.408L6.5 9.207l-3.25 3.25c.533-.14 1.169-.293 1.897-.446a47 47 0 0 1 3.554-.603",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-sand",
    viewBox: "0 0 16 16",
    paths: [
      "M12 9V2h-1v5h-.5a.5.5 0 0 1-.5-.5V4H9v2.5A1.5 1.5 0 0 0 10.5 8h.5v3.164q-.528.044-1.033.096L6.5 7.793l-5.354 5.353.525.824h.001l.006-.003.025-.008.105-.037q.14-.048.421-.135c.371-.116.922-.276 1.63-.454a44.5 44.5 0 0 1 5.978-1.053c1.556-.169 3.29-.28 5.163-.28v-1c-1.044 0-2.046.034-3 .092V10h.5A1.5 1.5 0 0 0 14 8.5V6h-1v2.5a.5.5 0 0 1-.5.5z",
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

const SandBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "sand",
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
SandBase.displayName = "Sand";

export const Sand = memo(SandBase) as typeof SandBase;
Sand.displayName = "Sand";
