"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "money" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-money",
    viewBox: "0 0 16 16",
    paths: [
      "M9 7.337a3.5 3.5 0 1 1-1.741 4.486A8.3 8.3 0 0 1 5.5 12c-.867 0-1.673-.116-2.279-.319-.301-.1-.58-.23-.795-.399C2.217 11.117 2 10.857 2 10.5v-6c0-.357.217-.617.426-.782.215-.169.494-.299.795-.399C3.827 3.116 4.633 3 5.5 3s1.673.116 2.279.319c.301.1.58.23.795.399.209.165.426.425.426.782ZM10.5 8a2.49 2.49 0 0 0-2.225 1.358 2.5 2.5 0 0 0-.203 1.741A2.5 2.5 0 1 0 10.5 8M8 5.601a4 4 0 0 1-.221.08C7.173 5.884 6.367 6 5.5 6s-1.673-.116-2.279-.319A4 4 0 0 1 3 5.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236C4.016 6.893 4.71 7 5.5 7s1.484-.107 1.963-.267c.243-.081.403-.166.492-.236A.4.4 0 0 0 8 6.456Zm0 2a4 4 0 0 1-.221.08C7.173 7.884 6.367 8 5.5 8s-1.673-.116-2.279-.319A4 4 0 0 1 3 7.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236C4.016 8.893 4.71 9 5.5 9c.806 0 1.507-.112 1.982-.274q.218-.37.518-.675Zm-5 2v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236.479.16 1.173.267 1.963.267.57 0 1.091-.056 1.518-.148a3.4 3.4 0 0 1 .04-.988A8.6 8.6 0 0 1 5.5 10c-.867 0-1.673-.116-2.279-.319A4 4 0 0 1 3 9.601M3.05 4.5c.09.07.248.153.487.233C4.016 4.893 4.71 5 5.5 5s1.484-.107 1.963-.267c.239-.08.397-.163.487-.233a1.7 1.7 0 0 0-.487-.233C6.984 4.107 6.29 4 5.5 4s-1.484.107-1.963.267c-.239.08-.397.163-.487.233",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-money",
    viewBox: "0 0 16 16",
    paths: [
      "M5.5 8c-.867 0-1.673-.116-2.279-.319A4 4 0 0 1 3 7.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236C4.016 8.893 4.71 9 5.5 9q.405 0 .769-.035-.178.488-.24 1.02Q5.769 10 5.5 10c-.867 0-1.673-.116-2.279-.319A4 4 0 0 1 3 9.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236.479.16 1.173.267 1.963.267q.271 0 .526-.016.055.514.22.987A10 10 0 0 1 5.5 12c-.867 0-1.673-.116-2.279-.319-.301-.1-.58-.23-.795-.399C2.217 11.117 2 10.857 2 10.5v-6c0-.357.217-.617.426-.782.215-.169.494-.299.795-.399C3.827 3.116 4.633 3 5.5 3s1.673.116 2.279.319c.301.1.58.23.795.399.209.165.426.425.426.782v1.756a4.5 4.5 0 0 0-2.176 1.648A9 9 0 0 1 5.5 8M8 5.601a4 4 0 0 1-.221.08C7.173 5.884 6.367 6 5.5 6s-1.673-.116-2.279-.319A4 4 0 0 1 3 5.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236C4.016 6.893 4.71 7 5.5 7s1.484-.107 1.963-.267c.243-.081.403-.166.492-.236A.4.4 0 0 0 8 6.456ZM3.05 4.5c.09.07.248.153.487.233C4.016 4.893 4.71 5 5.5 5s1.484-.107 1.963-.267c.239-.08.397-.163.487-.233a1.7 1.7 0 0 0-.487-.233C6.984 4.107 6.29 4 5.5 4s-1.484.107-1.963.267c-.239.08-.397.163-.487.233",
      "M7 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0",
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

const MoneyBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "money",
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
MoneyBase.displayName = "Money";

export const Money = memo(MoneyBase) as typeof MoneyBase;
Money.displayName = "Money";
