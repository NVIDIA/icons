"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "neural-network" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-neural-network",
    viewBox: "0 0 16 16",
    paths: [
      "m4.286 8-.683-1.092Q3.316 6.999 3 7a2 2 0 1 1 1.612-3.183l1.404-.562a2 2 0 1 1 3.968 0l1.404.561a2 2 0 1 1 1.01 3.092L11.715 8l.683 1.092Q12.684 9.001 13 9a2 2 0 1 1-1.612 3.184l-1.404.561Q10 12.87 10 13a2 2 0 1 1-3.984-.255l-1.404-.562a2 2 0 1 1-1.009-3.091ZM14 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-5 2a1 1 0 1 0-2 0 1 1 0 0 0 2 0m5-8a1 1 0 1 0-2 0 1 1 0 0 0 2 0M3 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5.603-1.092a2 2 0 0 1-1.205 0L6.421 6.47l.176.105A2 2 0 0 1 8 6a2 2 0 0 1 1.403.575l.176-.105ZM8 11q.317.001.603.092l.976-1.561-.176-.106A2 2 0 0 1 8 10a2 2 0 0 1-1.403-.575l-.176.105.977 1.562Q7.684 11.001 8 11M6.388 4.184l-1.404.561Q5 4.871 5 5q-.001.297-.082.568l.646.387.986-1.578a2 2 0 0 1-.162-.193m-.824 5.861-.646.387a2 2 0 0 1 .066.823l1.404.561q.075-.102.162-.193Zm5.452-5.3-1.404-.562a2 2 0 0 1-.162.194l.987 1.578.645-.387a2 2 0 0 1-.066-.823M9.45 11.623q.088.092.162.194l1.404-.562a2 2 0 0 1 .066-.823l-.645-.387Zm.659-2.941L10.536 8l-.427-.682-.191.114a2 2 0 0 1 0 1.136ZM5.891 7.318 5.465 8l.426.682.191-.114a2 2 0 0 1 0-1.136Zm5.234 1.625-.158.254.507.304Zm-.158-2.14.158.254.349-.558Zm-6.44 2.698.507-.304-.159-.254Zm.507-2.698-.507-.304.348.558Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-neural-network",
    viewBox: "0 0 16 16",
    paths: [
      "m9.499 3.061 2.374.949a1.5 1.5 0 1 1 .802 2.455L11.715 8l.96 1.535Q12.832 9.5 13 9.5a1.5 1.5 0 1 1-1.127 2.49l-2.374.949L9.5 13a1.5 1.5 0 0 1-3 0l.001-.061-2.374-.95a1.5 1.5 0 1 1-.801-2.453L4.286 8l-.96-1.536a1.5 1.5 0 1 1 .801-2.453l2.374-.95L6.5 3a1.5 1.5 0 0 1 3 0zM8.326 4.464a1.5 1.5 0 0 1-.652.001L6.421 6.47l.623.374a1.495 1.495 0 0 1 1.911 0l.624-.374Zm0 7.071 1.253-2.004-.624-.375A1.5 1.5 0 0 1 8 9.5a1.5 1.5 0 0 1-.955-.344l-.624.374 1.253 2.005a1.5 1.5 0 0 1 .652 0M6.765 4.032l-2.266.907L4.5 5q0 .153-.03.299l1.094.656ZM4.5 11l-.001.061 2.266.906-1.201-1.922-1.094.656q.03.146.03.299m4.735-6.968 1.202 1.923 1.093-.656A1.5 1.5 0 0 1 11.5 5l.001-.061Zm0 7.935 2.266-.906L11.5 11q0-.153.03-.299l-1.093-.656Zm.874-4.649-.639.383a1.5 1.5 0 0 1 0 .598l.639.383.427-.682ZM6.5 8q0-.153.03-.299l-.639-.383L5.465 8l.426.682.639-.383A1.5 1.5 0 0 1 6.5 8m4.625.943-.158.254.507.304Zm.349-2.444-.507.304.158.254ZM4.875 8.943l-.348.558.507-.304Zm.159-2.14-.507-.304.348.558Z",
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

const NeuralNetworkBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "neural-network",
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
NeuralNetworkBase.displayName = "NeuralNetwork";

export const NeuralNetwork = memo(
  NeuralNetworkBase,
) as typeof NeuralNetworkBase;
NeuralNetwork.displayName = "NeuralNetwork";
