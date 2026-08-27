"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "pawprint" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-pawprint",
    viewBox: "0 0 16 16",
    paths: [
      "M4.5 4.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 4.5 4.5M6 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M2 7.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 2 7.5M3.5 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M10 3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10 3m-.5 1.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m1.5 3a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 11 7.5m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M8 7c.648 0 1.266.109 1.873.639.569.498 1.087 1.334 1.671 2.659.316.716.412 1.351.273 1.9-.142.562-.507.954-.943 1.215C10.042 13.912 8.856 14 8 14c-.898 0-2.073-.193-2.894-.74-.421-.281-.78-.677-.922-1.215-.142-.539-.043-1.136.285-1.774.582-1.132 1.095-1.944 1.639-2.473C6.679 7.243 7.285 7 8 7m-2.642 3.729c-.25.487-.269.827-.207 1.061.062.236.227.45.51.638.586.39 1.532.572 2.339.572.849 0 1.785-.1 2.359-.444.268-.161.426-.356.488-.602.066-.259.045-.656-.218-1.252-.573-1.3-1.019-1.964-1.415-2.31C8.856 8.078 8.51 8 8 8c-.442 0-.801.132-1.195.515-.42.408-.872 1.096-1.447 2.214",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-pawprint",
    viewBox: "0 0 16 16",
    paths: [
      "M6 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 6 3M3.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 3.5 6M10 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 10 3m2.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12.5 6M8 7c-.715 0-1.321.243-1.892.798-.544.529-1.057 1.341-1.639 2.473-.328.638-.427 1.235-.285 1.774s.501.934.922 1.215c.821.547 1.996.74 2.894.74.856 0 2.042-.088 2.874-.587.436-.261.801-.652.943-1.215.139-.549.043-1.184-.273-1.9-.584-1.325-1.102-2.161-1.671-2.659C9.266 7.109 8.648 7 8 7",
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

const PawprintBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "pawprint",
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
PawprintBase.displayName = "Pawprint";

export const Pawprint = memo(PawprintBase) as typeof PawprintBase;
Pawprint.displayName = "Pawprint";
