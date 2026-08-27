"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "bucket" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-bucket",
    viewBox: "0 0 16 16",
    paths: [
      "m7.664 4.957.693-2.586.966.258-.843 3.144 3.02 3.02v.689l-1.741.466L6.5 13.207 1.793 8.5 6.5 3.793Zm-.299 1.115L6.5 5.207 3.207 8.5 6.5 11.793l2.741-2.741.87-.233-1.929-1.93-.199.74-.966-.258Zm5.489 4.074-.354.354zl.002.002.003.003.012.012.038.04q.048.051.127.143c.103.12.241.293.38.501.267.4.584 1.002.584 1.652a1.5 1.5 0 0 1-3 0c0-.65.317-1.252.584-1.652a5.3 5.3 0 0 1 .546-.684l.011-.012.003-.003.002-.002v-.001l.354-.353Zm-.354 1.135-.084.121c-.233.35-.416.748-.416 1.098a.5.5 0 0 0 1 0c0-.35-.183-.748-.416-1.098z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-bucket",
    viewBox: "0 0 16 16",
    paths: [
      "M6.847 4.14 5.792 8.078l.966.259 1.599-5.966.966.258-.843 3.144 3.02 3.02v.689l-1.741.466L6.5 13.207 1.793 8.5 6.5 3.793zm4.737 6.708c.26-.39.577-.733.916-1.055.339.322.656.665.916 1.055.267.4.584 1.002.584 1.652a1.5 1.5 0 0 1-3 0c0-.65.317-1.252.584-1.652",
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

const BucketBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "bucket",
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
BucketBase.displayName = "Bucket";

export const Bucket = memo(BucketBase) as typeof BucketBase;
Bucket.displayName = "Bucket";
