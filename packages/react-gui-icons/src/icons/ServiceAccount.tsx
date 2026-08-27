"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "service-account" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-service-account",
    viewBox: "0 0 16 16",
    paths: [
      "m12.221 6.394 1.245-.872a6 6 0 0 0-.59-1.017l-1.377.642a5.53 5.53 0 0 0-2.778-1.604l-.133-1.514a6.3 6.3 0 0 0-1.177 0l-.132 1.514a5.5 5.5 0 0 0-2.778 1.604l-1.377-.642a6 6 0 0 0-.59 1.018l1.245.871c-.322 1.106-.323 2.105 0 3.21l-1.245.872q.246.54.589 1.018l1.054-.49.422.906-1.769.824a9.2 9.2 0 0 1-1.518-2.623l1.318-.923a5.6 5.6 0 0 1 0-2.377l-1.318-.922A9.3 9.3 0 0 1 2.83 3.265l1.455.678a5.5 5.5 0 0 1 2.059-1.188l.14-1.602a9.2 9.2 0 0 1 3.032 0l.139 1.601a5.5 5.5 0 0 1 2.059 1.189l1.456-.678a9.2 9.2 0 0 1 1.518 2.624l-1.318.922a5.6 5.6 0 0 1 0 2.377l1.318.923a9.3 9.3 0 0 1-1.517 2.624l-1.77-.825.423-.906 1.052.49q.344-.478.59-1.018l-1.245-.872c.323-1.103.325-2.096 0-3.21",
      "m10.08 11 1.072 4H4.849l1.071-4zm-3.928 3h3.696l-.535-2H6.688zM9 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m1 0a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-service-account",
    viewBox: "0 0 16 16",
    paths: [
      "M11.151 15H4.849l1.071-4h4.16z",
      "m9.516 1.153.139 1.601a5.5 5.5 0 0 1 2.059 1.189l1.456-.678a9.3 9.3 0 0 1 1.518 2.624l-1.318.922a5.6 5.6 0 0 1 0 2.377l1.318.923a9.2 9.2 0 0 1-1.517 2.624l-1.726-.804-.718-2.68a3 3 0 1 0-5.455 0l-.717 2.68-1.725.803a9.2 9.2 0 0 1-1.518-2.623l1.318-.923a5.6 5.6 0 0 1 0-2.377l-1.318-.922A9.3 9.3 0 0 1 2.83 3.265l1.455.678a5.5 5.5 0 0 1 2.059-1.188l.14-1.602a9.2 9.2 0 0 1 3.032 0",
      "M8 6a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 6",
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

const ServiceAccountBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "service-account",
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
ServiceAccountBase.displayName = "ServiceAccount";

export const ServiceAccount = memo(
  ServiceAccountBase,
) as typeof ServiceAccountBase;
ServiceAccount.displayName = "ServiceAccount";
