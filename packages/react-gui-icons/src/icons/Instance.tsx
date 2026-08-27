"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "instance" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-instance",
    viewBox: "0 0 16 16",
    paths: [
      "M9.938 3.291 8 2.173 6.062 3.291l.5.866L8 3.327l1.438.83zM4.5 5.348l.938-.541-.5-.866L3 5.059v2.238h1V6.214l.938.541.5-.866zm7 0-.938-.541.5-.866L13 5.059v2.238h-1V6.214l-.938.541-.5-.866zM4 8.596v1.659l1.438.83-.5.866L3 10.833V8.596zm8 0v1.659l-1.438.83.5.866L13 10.833V8.596zm-3.5 3.68v-1.082h-1v1.082l-.938-.541-.5.866L8 13.72l1.938-1.119-.5-.866zm.938-5.737L8 7.369l-1.438-.83-.5.866 1.438.83v1.66h1v-1.66l1.438-.83z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-instance",
    viewBox: "0 0 16 16",
    paths: [
      "m8 7.369 1.438-.83.5.866-1.438.83v1.66h-1v-1.66l-1.438-.83.5-.866ZM4 6.214v1.083H3V5.059l1.938-1.118.5.866-.938.541.938.541-.5.866Zm7.5-.866-.938-.541.5-.866L13 5.059v2.238h-1V6.214l-.938.541-.5-.866Zm-4 6.928v-1.082h1v1.082l.938-.541.5.866L8 13.72l-1.938-1.119.5-.866ZM4 10.255l1.438.83-.5.866L3 10.833V8.596h1Zm8 0V8.596h1v2.237l-1.938 1.118-.5-.866ZM8 2.173l1.938 1.118-.5.866L8 3.327l-1.438.83-.5-.866Z",
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

const InstanceBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "instance",
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
InstanceBase.displayName = "Instance";

export const Instance = memo(InstanceBase) as typeof InstanceBase;
Instance.displayName = "Instance";
