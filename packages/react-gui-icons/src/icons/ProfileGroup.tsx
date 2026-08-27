"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "profile-group" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-profile-group",
    viewBox: "0 0 16 16",
    paths: [
      "M2.456 8h7.088l1.607 6H.848ZM3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m.223 5-1.072 4h7.697L8.776 9ZM6 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 6 2m6.244 8h-1.316V9h2.084l1.339 5H12v-1h1.048Zm-2.4-7.495Q9.922 2.5 10 2.5a2.5 2.5 0 0 1 .317 4.98l-.126-.992a1.5 1.5 0 0 0-.285-2.985Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-profile-group",
    viewBox: "0 0 16 16",
    paths: [
      "M6 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m5.152 13L9.544 8H2.456L.849 14zm1.093-4 .804 3h-1.165l.268 1h2.2l-1.34-5h-2.2l.268 1zM11.5 5a1.5 1.5 0 0 0-1.594-1.497l-.062-.998Q9.922 2.5 10 2.5a2.5 2.5 0 0 1 .402 4.968l-.261-.974A1.5 1.5 0 0 0 11.5 5",
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

const ProfileGroupBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "profile-group",
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
ProfileGroupBase.displayName = "ProfileGroup";

export const ProfileGroup = memo(ProfileGroupBase) as typeof ProfileGroupBase;
ProfileGroup.displayName = "ProfileGroup";
