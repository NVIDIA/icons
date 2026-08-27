"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "bush" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-bush",
    viewBox: "0 0 16 16",
    paths: [
      "M10.717 11a6.8 6.8 0 0 1-.357-1.765c-.073-.916-.008-1.88.143-2.757.151-.875.391-1.688.683-2.296a3.1 3.1 0 0 1 .507-.783C11.88 3.2 12.152 3 12.5 3c.347 0 .62.2.807.399.194.207.362.481.507.783.292.608.532 1.421.682 2.296.151.877.217 1.841.144 2.757-.071.909-.282 1.807-.711 2.522l-.146.243H3.5a2.5 2.5 0 0 1-.865-4.846 3 3 0 0 1 5.26 1.057A2 2 0 0 1 8.732 11ZM7 11a1 1 0 0 0 .309-1.951l-.287-.094-.051-.297a2 2 0 0 0-3.617-.795l-.101.146-.171.05A1.501 1.501 0 0 0 3.5 11Zm4.799 0h1.402c.242-.503.387-1.138.443-1.844.064-.819.006-1.699-.133-2.509-.14-.812-.358-1.531-.599-2.032a2.2 2.2 0 0 0-.334-.531 1 1 0 0 0-.078-.071.5.5 0 0 0-.078.071 2.2 2.2 0 0 0-.335.531c-.24.501-.458 1.219-.598 2.032-.139.81-.197 1.69-.133 2.509.056.706.201 1.341.443 1.844",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-bush",
    viewBox: "0 0 16 16",
    paths: [
      "M12.5 3c-.348 0-.62.2-.807.399a3.1 3.1 0 0 0-.507.783c-.292.608-.532 1.421-.682 2.296a11.3 11.3 0 0 0-.144 2.757c.048.611.159 1.216.356 1.765H8.732a2 2 0 0 0-.837-2.789 3 3 0 0 0-5.26-1.057A2.5 2.5 0 0 0 3.5 12h10.283l.146-.243c.429-.716.64-1.613.711-2.522.073-.916.007-1.88-.144-2.757-.15-.875-.39-1.688-.682-2.296a3.1 3.1 0 0 0-.508-.783C13.12 3.2 12.847 3 12.5 3",
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

const BushBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "bush",
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
BushBase.displayName = "Bush";

export const Bush = memo(BushBase) as typeof BushBase;
Bush.displayName = "Bush";
