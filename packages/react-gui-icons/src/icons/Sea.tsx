"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "sea" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-sea",
    viewBox: "0 0 16 16",
    paths: [
      "M2.348 12.541C1.857 12.214 1.5 11.694 1.5 11h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541-.475.317-1.078.459-1.652.459s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 12.858 8.574 13 8 13s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C5.177 12.858 4.574 13 4 13s-1.177-.142-1.652-.459m0-4C1.857 8.214 1.5 7.694 1.5 7h1c0 .306.143.536.402.709C3.177 7.892 3.574 8 4 8s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 7.892 7.574 8 8 8s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 8.858 12.574 9 12 9s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 8.858 8.574 9 8 9s-1.177-.142-1.652-.459A2 2 0 0 1 6 8.251a2 2 0 0 1-.348.29C5.177 8.858 4.574 9 4 9s-1.177-.142-1.652-.459m0-4C1.857 4.214 1.5 3.694 1.5 3h1c0 .306.143.536.402.709C3.177 3.892 3.574 4 4 4s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 3.892 7.574 4 8 4s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 4.858 12.574 5 12 5s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 4.858 8.574 5 8 5s-1.177-.142-1.652-.459A2 2 0 0 1 6 4.251a2 2 0 0 1-.348.29C5.177 4.858 4.574 5 4 5s-1.177-.142-1.652-.459",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-sea",
    viewBox: "0 0 16 16",
    paths: [
      "M2.348 4.541C1.857 4.214 1.5 3.694 1.5 3h1c0 .306.143.536.402.709C3.177 3.892 3.574 4 4 4s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 3.892 7.574 4 8 4s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 4.858 12.574 5 12 5s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 4.858 8.574 5 8 5s-1.177-.142-1.652-.459A2 2 0 0 1 6 4.251a2 2 0 0 1-.348.29C5.177 4.858 4.574 5 4 5s-1.177-.142-1.652-.459m0 4C1.857 8.214 1.5 7.694 1.5 7h1c0 .306.143.536.402.709C3.177 7.892 3.574 8 4 8s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 7.892 7.574 8 8 8s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 8.858 12.574 9 12 9s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 8.858 8.574 9 8 9s-1.177-.142-1.652-.459A2 2 0 0 1 6 8.251a2 2 0 0 1-.348.29C5.177 8.858 4.574 9 4 9s-1.177-.142-1.652-.459M1.5 11c0 .694.357 1.214.848 1.541C2.823 12.858 3.426 13 4 13s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29C6.823 12.858 7.426 13 8 13s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29c.475.317 1.078.459 1.652.459s1.177-.142 1.652-.459c.491-.327.848-.847.848-1.541h-1c0 .306-.143.536-.402.709-.275.183-.672.291-1.098.291s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709h-1c0 .306-.143.536-.402.709C8.823 11.892 8.426 12 8 12s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709h-1c0 .306-.143.536-.402.709C4.823 11.892 4.426 12 4 12s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709z",
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

const SeaBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "sea",
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
SeaBase.displayName = "Sea";

export const Sea = memo(SeaBase) as typeof SeaBase;
Sea.displayName = "Sea";
