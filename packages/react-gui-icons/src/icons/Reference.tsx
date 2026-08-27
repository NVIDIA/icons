"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "reference" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-reference",
    viewBox: "0 0 16 16",
    paths: [
      "M11 2h4v4h-1V3.707l-3.646 3.647-.708-.708L13.293 3H11zM8.938 3.291 7 2.173 5.062 3.291l.5.866L7 3.327l1.438.83zM3.5 5.348l.938-.541-.5-.866L2 5.059v2.238h1V6.214l.938.541.5-.866zM3 8.596v1.66l1.438.829-.5.866L2 10.833V8.596zm8 0v1.66l-1.438.829.5.866L12 10.833V8.596zm-3.5 3.68v-1.082h-1v1.082l-.938-.541-.5.866L7 13.72l1.938-1.119-.5-.866zm0-4.618L5.562 6.539l-.5.866 1.438.83v1.66h1z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-reference",
    viewBox: "0 0 16 16",
    paths: [
      "M6.5 12.276v-1.082h1v1.082l.938-.541.5.866L7 13.72l-1.938-1.119.5-.866ZM3 6.214v1.083H2V5.059l1.938-1.118.5.866-.938.541.938.541-.5.866Zm2.562.325L7.5 7.657v2.238h-1v-1.66l-1.438-.83ZM7 2.173l1.938 1.118-.5.866L7 3.327l-1.438.83-.5-.866Zm-4 8.083 1.438.829-.5.866L2 10.833V8.596h1Zm8 0v-1.66h1v2.237l-1.938 1.118-.5-.866ZM11 2h4v4h-1V3.707l-3.646 3.647-.708-.708L13.293 3H11Z",
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

const ReferenceBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "reference",
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
ReferenceBase.displayName = "Reference";

export const Reference = memo(ReferenceBase) as typeof ReferenceBase;
Reference.displayName = "Reference";
