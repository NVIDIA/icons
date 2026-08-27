"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "radioactive" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-radioactive",
    viewBox: "0 0 16 16",
    paths: [
      "M4.499 1.937A7 7 0 0 1 8 1c1.274 0 2.471.341 3.501.937l.432.25-2.25 3.898-.433-.251A2.5 2.5 0 0 0 8 5.5c-.456 0-.883.122-1.25.334l-.433.251-2.25-3.898ZM1 7.5h4.5V8a2.5 2.5 0 0 0 1.25 2.166l.433.25-2.251 3.898-.433-.251A7 7 0 0 1 1 8Zm14 0V8a7 7 0 0 1-3.499 6.063l-.433.251-2.251-3.898.433-.25A2.5 2.5 0 0 0 10.5 8v-.5ZM5.443 2.571l1.258 2.178C7.103 4.588 7.541 4.5 8 4.5s.897.088 1.299.249l1.258-2.178A6 6 0 0 0 8 2c-.915 0-1.782.205-2.557.571M11.465 8.5a3.5 3.5 0 0 1-1.3 2.25l1.258 2.179A6 6 0 0 0 13.979 8.5Zm-9.444 0a6 6 0 0 0 2.556 4.429l1.258-2.179a3.5 3.5 0 0 1-1.3-2.25ZM6.5 8a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 8M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-radioactive",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a7 7 0 0 0-3.501.937l-.432.25 2.25 3.898.433-.251A2.5 2.5 0 0 1 8 5.5c.456 0 .883.122 1.25.334l.433.251 2.25-3.898-.432-.25A7 7 0 0 0 8 1M5.5 7.5H1V8a7 7 0 0 0 3.499 6.063l.433.25 2.251-3.897-.433-.25A2.5 2.5 0 0 1 5.5 8zm9.5 0V8a7 7 0 0 1-3.499 6.063l-.433.25-2.251-3.897.433-.25A2.5 2.5 0 0 0 10.5 8v-.5zM6.5 8a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 8",
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

const RadioactiveBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "radioactive",
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
RadioactiveBase.displayName = "Radioactive";

export const Radioactive = memo(RadioactiveBase) as typeof RadioactiveBase;
Radioactive.displayName = "Radioactive";
