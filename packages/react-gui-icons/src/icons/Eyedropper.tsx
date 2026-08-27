"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "eyedropper" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-eyedropper",
    viewBox: "0 0 16 16",
    paths: [
      "m8.543 5.25-.897-.896.708-.708.646.647 1.146-1.147a1.916 1.916 0 0 1 2.708 0c.747.748.747 1.96 0 2.708L11.707 7l.647.646-.708.708-.896-.897-4.954 4.954-2.395 1.197-1.009-1.009 1.197-2.395Zm1.5 1.5-.793-.793-4.839 4.839-.793 1.586 1.586-.793Zm2.103-2.896a.913.913 0 0 0-1.292 0L9.707 5 11 6.293l1.146-1.147a.913.913 0 0 0 0-1.292",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-eyedropper",
    viewBox: "0 0 16 16",
    paths: [
      "M3.589 10.204 8.543 5.25l-.897-.896.708-.708.646.647 1.146-1.147a1.916 1.916 0 0 1 2.708 0c.747.748.747 1.96 0 2.708L11.707 7l.647.646-.708.708-.896-.897-4.954 4.954-2.395 1.197-1.009-1.009ZM9.25 5.957l-4.839 4.839-.793 1.586 1.586-.793 4.839-4.839Z",
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

const EyedropperBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "eyedropper",
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
EyedropperBase.displayName = "Eyedropper";

export const Eyedropper = memo(EyedropperBase) as typeof EyedropperBase;
Eyedropper.displayName = "Eyedropper";
