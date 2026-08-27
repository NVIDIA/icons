"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "fire" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-fire",
    viewBox: "0 0 16 16",
    paths: [
      "m7 1.654.741.408C9.101 2.81 9.75 3.83 9.75 4.891c0 1.033-.619 1.956-1.473 2.525-.666.444-.777.808-.777 1.021 0 .249.147.503.353.709.135.135.371.229.647.229s.511-.094.646-.229c.319-.319.349-.596.401-1.097l.018-.167c.033-.298.087-.65.246-1.035.161-.387.419-.784.835-1.201l.255-.254.322.161c.648.324 1.089.943 1.364 1.614.279.678.413 1.462.413 2.208C13 11.969 10.719 14 8 14c-2.72 0-5-2.031-5-4.625 0-1.064.277-1.883.702-2.555.418-.659.969-1.158 1.472-1.59l.157-.134C6.299 4.267 7 3.667 7 2.5Zm.894 1.705c-.289 1.119-1.12 1.825-1.86 2.452l-.208.178c-.497.427-.947.843-1.279 1.366C4.223 7.867 4 8.501 4 9.375 4 11.337 5.749 13 8 13s4-1.663 4-3.625c0-.635-.116-1.288-.338-1.828-.157-.383-.356-.683-.582-.889-.167.21-.273.4-.345.573a2.7 2.7 0 0 0-.176.762l-.016.162c-.048.494-.108 1.117-.69 1.698-.365.366-.879.522-1.353.522s-.989-.156-1.354-.522c-.294-.294-.646-.789-.646-1.416 0-.661.388-1.297 1.222-1.853.646-.431 1.028-1.071 1.028-1.693 0-.466-.215-1.015-.856-1.532",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-fire",
    viewBox: "0 0 16 16",
    paths: [
      "M7.741 2.062 7 1.654V2.5c0 1.167-.701 1.767-1.669 2.596l-.157.134c-.503.432-1.053.931-1.471 1.59C3.277 7.492 3 8.311 3 9.375 3 11.969 5.28 14 8 14s5-2.031 5-4.625c0-.746-.134-1.53-.412-2.208-.276-.671-.717-1.29-1.364-1.614l-.323-.161-.255.254c-.416.417-.674.814-.834 1.201-.16.385-.213.737-.246 1.035l-.018.166c-.053.502-.082.779-.402 1.098-.135.135-.37.229-.646.229s-.511-.094-.646-.229c-.206-.206-.354-.46-.354-.709 0-.213.111-.577.777-1.021.854-.569 1.473-1.492 1.473-2.525 0-1.061-.649-2.081-2.009-2.829",
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

const FireBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "fire",
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
FireBase.displayName = "Fire";

export const Fire = memo(FireBase) as typeof FireBase;
Fire.displayName = "Fire";
