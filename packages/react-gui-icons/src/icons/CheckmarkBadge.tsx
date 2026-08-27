"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "checkmark-badge" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-checkmark-badge",
    viewBox: "0 0 16 16",
    paths: [
      "M7 10.707 4.146 7.854l.708-.708L7 9.293l4.146-4.147.708.708Z",
      "m9.603 2.017 2.268-.722.509 2.325 2.325.509-.722 2.268L15.742 8l-1.759 1.603.722 2.268-2.325.509-.509 2.325-2.268-.722L8 15.742l-1.603-1.759-2.268.722-.509-2.325-2.325-.509.722-2.268L.258 8l1.759-1.603-.722-2.268L3.62 3.62l.509-2.325 2.268.722L8 .258ZM6.704 3.164l-1.833-.583L4.46 4.46l-1.879.411.583 1.833L1.742 8l1.422 1.296-.583 1.833 1.879.411.411 1.879 1.833-.584L8 14.258l1.296-1.423 1.833.584.411-1.879 1.879-.411-.584-1.833L14.258 8l-1.423-1.296.584-1.833-1.879-.411-.411-1.879-1.833.583L8 1.742Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-checkmark-badge",
    viewBox: "0 0 16 16",
    paths: [
      "m8 .258 1.603 1.759 2.268-.722.509 2.325 2.325.509-.722 2.268L15.742 8l-1.759 1.603.722 2.268-2.325.509-.509 2.325-2.268-.722L8 15.742l-1.603-1.759-2.268.722-.509-2.325-2.325-.509.722-2.268L.258 8l1.759-1.603-.722-2.268L3.62 3.62l.509-2.325 2.268.722ZM7 10.707l4.854-4.853-.708-.708L7 9.293 4.854 7.146l-.708.708Z",
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

const CheckmarkBadgeBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "checkmark-badge",
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
CheckmarkBadgeBase.displayName = "CheckmarkBadge";

export const CheckmarkBadge = memo(
  CheckmarkBadgeBase,
) as typeof CheckmarkBadgeBase;
CheckmarkBadge.displayName = "CheckmarkBadge";
