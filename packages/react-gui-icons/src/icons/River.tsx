"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "river" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-river",
    viewBox: "0 0 16 16",
    paths: [
      "M2.348 10.541C1.857 10.214 1.5 9.694 1.5 9h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541-.475.317-1.078.459-1.652.459s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 10.858 8.574 11 8 11s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C5.177 10.858 4.574 11 4 11s-1.177-.142-1.652-.459m0-4C1.857 6.214 1.5 5.694 1.5 5h1c0 .306.143.536.402.709C3.177 5.892 3.574 6 4 6s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 5.892 7.574 6 8 6s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 6.858 12.574 7 12 7s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 6.858 8.574 7 8 7s-1.177-.142-1.652-.459A2 2 0 0 1 6 6.251a2 2 0 0 1-.348.29C5.177 6.858 4.574 7 4 7s-1.177-.142-1.652-.459",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-river",
    viewBox: "0 0 16 16",
    paths: [
      "M1.5 5c0 .694.357 1.214.848 1.541C2.823 6.858 3.426 7 4 7s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29C6.823 6.858 7.426 7 8 7s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29C10.823 6.858 11.426 7 12 7s1.177-.142 1.652-.459c.491-.327.848-.847.848-1.541h-1c0 .306-.143.536-.402.709C12.823 5.892 12.426 6 12 6s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709h-1c0 .306-.143.536-.402.709C8.823 5.892 8.426 6 8 6s-.823-.108-1.098-.291C6.643 5.536 6.5 5.306 6.5 5h-1c0 .306-.143.536-.402.709C4.823 5.892 4.426 6 4 6s-.823-.108-1.098-.291C2.643 5.536 2.5 5.306 2.5 5zm0 4c0 .694.357 1.214.848 1.541C2.823 10.858 3.426 11 4 11s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29C6.823 10.858 7.426 11 8 11s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29c.475.317 1.078.459 1.652.459s1.177-.142 1.652-.459c.491-.327.848-.847.848-1.541h-1c0 .306-.143.536-.402.709-.275.183-.672.291-1.098.291s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709h-1c0 .306-.143.536-.402.709C8.823 9.892 8.426 10 8 10s-.823-.108-1.098-.291C6.643 9.536 6.5 9.306 6.5 9h-1c0 .306-.143.536-.402.709C4.823 9.892 4.426 10 4 10s-.823-.108-1.098-.291C2.643 9.536 2.5 9.306 2.5 9z",
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

const RiverBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "river",
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
RiverBase.displayName = "River";

export const River = memo(RiverBase) as typeof RiverBase;
River.displayName = "River";
