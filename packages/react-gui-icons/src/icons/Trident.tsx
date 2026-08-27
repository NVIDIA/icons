"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "trident" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-trident",
    viewBox: "0 0 16 16",
    paths: [
      "M8.5 1v6.977c.518-.048 1.054-.175 1.453-.408q.384-.226.529-.542c.094-.207.136-.495.033-.906a95 95 0 0 0-.586-2.238l-.158-.556-.04-.138-.01-.033-.002-.008-.454-1.492 2.539 1.947-.608.794-.116-.089q.173.643.405 1.571c.147.589.112 1.114-.094 1.563-.203.445-.549.765-.933.989-.589.346-1.319.499-1.958.549V14h-1V8.98c-.639-.05-1.369-.203-1.958-.549-.384-.224-.73-.544-.933-.989-.205-.449-.241-.974-.094-1.563q.233-.928.405-1.571l-.116.089-.608-.794 2.539-1.947-.453 1.489v.003l-.003.008-.01.033-.04.138q-.054.184-.158.556a95 95 0 0 0-.586 2.238c-.103.411-.061.699.034.906q.144.316.529.542c.398.233.934.359 1.452.408V1z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-trident",
    viewBox: "0 0 16 16",
    paths: [
      "M8.5 1v6.977c.518-.048 1.054-.175 1.453-.408q.384-.226.529-.542c.094-.207.136-.495.033-.906a95 95 0 0 0-.586-2.238l-.158-.556-.04-.138-.01-.033-.002-.008-.454-1.492 2.539 1.947-.608.794-.116-.089q.173.643.405 1.571c.147.589.112 1.114-.094 1.563-.203.445-.549.765-.933.989-.589.346-1.319.499-1.958.549V14h-1V8.98c-.639-.05-1.369-.203-1.958-.549-.384-.224-.73-.544-.933-.989-.205-.449-.241-.974-.094-1.563q.233-.928.405-1.571l-.116.089-.608-.794 2.539-1.947-.453 1.489v.003l-.003.008-.01.033-.04.138q-.054.184-.158.556a95 95 0 0 0-.586 2.238c-.103.411-.061.699.034.906q.144.316.529.542c.398.233.934.359 1.452.408V1z",
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

const TridentBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "trident",
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
TridentBase.displayName = "Trident";

export const Trident = memo(TridentBase) as typeof TridentBase;
Trident.displayName = "Trident";
