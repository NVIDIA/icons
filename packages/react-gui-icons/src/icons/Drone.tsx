"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "drone" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-drone",
    viewBox: "0 0 16 16",
    paths: [
      "m3.354 5.354 2-2-.708-.708-2 2zm7.292-2 2 2 .708-.708-2-2zm-6 10-2-2 .708-.708 2 2zm8.708-2-2 2-.708-.708 2-2z",
      "M1 4a3 3 0 1 1 5.904.755L7.587 5h.826l.683-.245a3 3 0 1 1 2.108 2.138 3.1 3.1 0 0 0 0 2.214Q11.586 9.001 12 9a3 3 0 1 1-2.893 2.204 3.1 3.1 0 0 0-2.214 0q.106.382.107.796a3 3 0 1 1-2.204-2.893 3.12 3.12 0 0 0 0-2.214Q4.414 6.999 4 7a3 3 0 0 1-3-3m4.704 2.47a4.1 4.1 0 0 1 0 3.06c.299.207.559.467.766.766a4.1 4.1 0 0 1 3.06 0 3 3 0 0 1 .766-.766 4.1 4.1 0 0 1 0-3.06 3 3 0 0 1-.789-.801L9 5.852V6.5a1 1 0 0 1-2 0v-.648l-.507-.183a3 3 0 0 1-.789.801M12 10a2.006 2.006 0 0 0-2 2 2 2 0 1 0 2-2m-8 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 4 10m8-8a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 2M4 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 4 2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-drone",
    viewBox: "0 0 16 16",
    paths: [
      "m3.354 5.354 2-2-.708-.708-2 2zm7.292-2 2 2 .708-.708-2-2zm-8 8 2 2 .708-.708-2-2zm10.708 0-2 2-.708-.708 2-2z",
      "M1 4a3 3 0 1 1 5.904.755L7.587 5h.826l.683-.245a3 3 0 1 1 2.108 2.138 3.1 3.1 0 0 0 0 2.214Q11.586 9.001 12 9a3 3 0 1 1-2.893 2.204 3.1 3.1 0 0 0-2.214 0q.106.382.107.796a3 3 0 1 1-2.204-2.893 3.12 3.12 0 0 0 0-2.214Q4.414 6.999 4 7a3 3 0 0 1-3-3m11 6a2.006 2.006 0 0 0-2 2 2 2 0 1 0 2-2m-8 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 4 10m8-8a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 2M4 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 4 2m5 3.5H7v1a1 1 0 0 0 2 0Z",
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

const DroneBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "drone",
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
DroneBase.displayName = "Drone";

export const Drone = memo(DroneBase) as typeof DroneBase;
Drone.displayName = "Drone";
