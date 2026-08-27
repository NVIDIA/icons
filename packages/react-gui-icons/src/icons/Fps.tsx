"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "fps" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-fps",
    viewBox: "0 0 16 16",
    paths: [
      "M2 3h12v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2Zm1 1v6h10V4Zm4 1h1a1.5 1.5 0 0 1 0 3v1H7ZM4 5h2.5v1H5v.5h1v1H5V9H4Zm7.114 1.098c-.089.049-.114.13-.114.152 0 .095.024.143.3.35l.029.021c.234.175.671.5.671 1.129 0 .388-.225.807-.636 1.03-.433.236-.987.218-1.588-.083l.448-.894c.399.199.595.136.662.099.089-.049.114-.13.114-.152 0-.095-.024-.143-.3-.35l-.029-.021c-.234-.175-.671-.5-.671-1.129 0-.388.225-.807.636-1.03.433-.236.987-.218 1.588.083l-.448.894c-.399-.199-.595-.136-.662-.099M8 7a.5.5 0 0 0 0-1Zm0 4.5-.134.5h.268Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-fps",
    viewBox: "0 0 16 16",
    paths: [
      "M2 3h12v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2Zm5 2v4h1V8a1.5 1.5 0 0 0 0-3ZM4 5v4h1V7.5h1v-1H5V6h1.5V5Zm7.114 1.098c.067-.037.263-.1.662.099l.448-.894c-.601-.301-1.155-.319-1.588-.083A1.2 1.2 0 0 0 10 6.25c0 .629.437.954.671 1.129l.029.021c.276.207.3.255.3.35 0 .022-.025.103-.114.152-.067.037-.263.1-.662-.099l-.448.894c.601.301 1.155.319 1.588.083.411-.223.636-.642.636-1.03 0-.629-.437-.954-.671-1.129L11.3 6.6c-.276-.207-.3-.255-.3-.35 0-.022.025-.103.114-.152M8 7V6a.5.5 0 0 1 0 1m0 4.5-.134.5h.268Z",
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

const FpsBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "fps",
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
FpsBase.displayName = "Fps";

export const Fps = memo(FpsBase) as typeof FpsBase;
Fps.displayName = "Fps";
