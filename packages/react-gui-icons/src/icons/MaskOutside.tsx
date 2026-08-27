"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "mask-outside" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-mask-outside",
    viewBox: "0 0 16 16",
    paths: [
      "m1.854 5.854 4-4-.708-.708-4 4zm0-3 1-1-.708-.708-1 1zm6.292-1.708L6.521 2.772l.707.707 1.626-1.625zm3 0L9.349 2.944l.707.707 1.798-1.797zm3 0-2.964 2.965.707.707 2.965-2.964zm-1.09 5.505 1.798-1.797-.708-.708-1.797 1.798zM2.774 6.519 1.146 8.146l.708.708 1.627-1.628zm11.372.627-1.627 1.628.707.707 1.628-1.627zM2.944 9.349l-1.798 1.797.708.708 1.797-1.798zm7.91 5.505 4-4-.708-.708-4 4zm-6.743-3.672-2.965 2.964.708.708 2.964-2.965zm.743 3.672 1.797-1.798-.707-.707-1.798 1.797zm3.92-2.335-1.628 1.627.708.708 1.627-1.628zm5.08 2.335 1-1-.708-.708-1 1zM8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8M5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-mask-outside",
    viewBox: "0 0 16 16",
    paths: [
      "M8 4q-.265 0-.522.034l.13.991a3.2 3.2 0 0 1 .784 0l.13-.991A4 4 0 0 0 8 4m2.435.827a4 4 0 0 0-.904-.523l-.383.923q.367.153.678.393zm-3.966-.523a4 4 0 0 0-.904.523l.609.793q.311-.24.678-.393zM4.827 5.565a4 4 0 0 0-.523.904l.923.383q.153-.367.393-.678zm6.869.904a4 4 0 0 0-.523-.904l-.793.609q.24.311.393.678zM12 8q0-.265-.034-.522l-.991.13a3.2 3.2 0 0 1 0 .784l.991.13Q12 8.266 12 8m-7.966-.522a4 4 0 0 0 0 1.044l.991-.13a3.2 3.2 0 0 1 0-.784zm7.139 2.957q.32-.414.523-.904l-.923-.383a3 3 0 0 1-.393.678zm-6.869-.904q.204.49.523.904l.793-.609a3 3 0 0 1-.393-.678zm1.261 1.642q.414.32.904.523l.383-.923a3 3 0 0 1-.678-.393zm3.966.523q.49-.204.904-.523l-.609-.793a3 3 0 0 1-.678.393zM8 12q.265 0 .522-.034l-.13-.991a3.2 3.2 0 0 1-.784 0l-.13.991Q7.734 12 8 12",
      "M1 1h14v14H1Zm12 7a5 5 0 1 0-10.001.001A5 5 0 0 0 13 8",
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

const MaskOutsideBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "mask-outside",
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
MaskOutsideBase.displayName = "MaskOutside";

export const MaskOutside = memo(MaskOutsideBase) as typeof MaskOutsideBase;
MaskOutside.displayName = "MaskOutside";
