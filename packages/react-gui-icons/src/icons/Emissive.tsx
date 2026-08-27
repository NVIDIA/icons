"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "emissive" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-emissive",
    viewBox: "0 0 16 16",
    paths: [
      "M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m-1 5.197A5.96 5.96 0 0 0 8 14a5.96 5.96 0 0 0 3-.803l.501.866A7 7 0 0 1 8 15a7 7 0 0 1-3.501-.937ZM14 8a5.96 5.96 0 0 0-.803-3l.866-.501A7 7 0 0 1 15 8a7 7 0 0 1-.937 3.501L13.197 11A5.96 5.96 0 0 0 14 8M2.803 5A5.96 5.96 0 0 0 2 8c0 1.094.292 2.118.803 3l-.866.501A7 7 0 0 1 1 8c0-1.274.341-2.471.937-3.501ZM8 2a5.96 5.96 0 0 0-3 .803l-.501-.866A7 7 0 0 1 8 1c1.274 0 2.471.341 3.501.937L11 2.803A5.96 5.96 0 0 0 8 2m-2 9.465A4 4 0 0 0 8 12a4 4 0 0 0 2-.535l.501.865A5 5 0 0 1 8 13a5 5 0 0 1-2.501-.67ZM4.535 6A4 4 0 0 0 4 8c0 .73.195 1.412.535 2l-.866.501A5 5 0 0 1 3 8c0-.91.244-1.765.669-2.501ZM8 4a4 4 0 0 0-2 .535l-.501-.866A5 5 0 0 1 8 3c.91 0 1.765.244 2.501.669L10 4.535A4 4 0 0 0 8 4m4 4a4 4 0 0 0-.535-2l.865-.501A5 5 0 0 1 13 8a5 5 0 0 1-.67 2.501L11.465 10A4 4 0 0 0 12 8M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-emissive",
    viewBox: "0 0 16 16",
    paths: [
      "M8 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6m-3 7.197A5.96 5.96 0 0 0 8 14a5.96 5.96 0 0 0 3-.803l.501.866A7 7 0 0 1 8 15a7 7 0 0 1-3.501-.937ZM14 8a5.96 5.96 0 0 0-.803-3l.866-.501A7 7 0 0 1 15 8a7 7 0 0 1-.937 3.501L13.197 11A5.96 5.96 0 0 0 14 8M2.803 5A5.96 5.96 0 0 0 2 8c0 1.094.292 2.118.803 3l-.866.501A7 7 0 0 1 1 8c0-1.274.341-2.471.937-3.501ZM8 2a5.96 5.96 0 0 0-3 .803l-.501-.866A7 7 0 0 1 8 1c1.274 0 2.471.341 3.501.937L11 2.803A5.96 5.96 0 0 0 8 2m-2 9.465A4 4 0 0 0 8 12a4 4 0 0 0 2-.535l.501.865A5 5 0 0 1 8 13a5 5 0 0 1-2.501-.67ZM4.535 6A4 4 0 0 0 4 8c0 .73.195 1.412.535 2l-.866.501A5 5 0 0 1 3 8c0-.91.244-1.765.669-2.501ZM8 4a4 4 0 0 0-2 .535l-.501-.866A5 5 0 0 1 8 3c.91 0 1.765.244 2.501.669L10 4.535A4 4 0 0 0 8 4m4 4a4 4 0 0 0-.535-2l.865-.501A5 5 0 0 1 13 8a5 5 0 0 1-.67 2.501L11.465 10A4 4 0 0 0 12 8",
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

const EmissiveBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "emissive",
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
EmissiveBase.displayName = "Emissive";

export const Emissive = memo(EmissiveBase) as typeof EmissiveBase;
Emissive.displayName = "Emissive";
