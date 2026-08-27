"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "rotate-3d" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-rotate-3d",
    viewBox: "0 0 16 16",
    paths: [
      "M5.016 7.309c.033-.707.118-1.386.246-2.019a8.4 8.4 0 0 0-1.649.543C2.474 6.359 2 6.984 2 7.5s.474 1.142 1.613 1.667C4.71 9.674 6.261 10 8 10h.293l-.647-.646.708-.708 1.853 1.854-1.853 1.854-.708-.708.647-.646H8c-1.85 0-3.55-.345-4.806-.925C1.981 9.515 1 8.641 1 7.5s.981-2.015 2.194-2.575c.669-.309 1.465-.551 2.342-.71q.171-.549.389-1.021C6.485 1.981 7.359 1 8.5 1s2.015.981 2.575 2.194c.177.384.333.81.463 1.268q.69.196 1.268.463C14.019 5.485 15 6.359 15 7.5c0 1.007-.769 1.806-1.757 2.354l-.486-.874C13.642 8.489 14 7.951 14 7.5c0-.516-.474-1.141-1.613-1.667a7 7 0 0 0-.591-.24C11.928 6.346 12 7.157 12 8c0 1.85-.345 3.55-.925 4.806C10.515 14.019 9.641 15 8.5 15c-.663 0-1.241-.34-1.704-.84s-.842-1.189-1.131-1.99l.94-.34c.261.721.582 1.281.925 1.651.342.369.672.519.97.519.516 0 1.142-.474 1.667-1.613C10.674 11.29 11 9.739 11 8c0-.981-.104-1.902-.285-2.715A12.6 12.6 0 0 0 8 5c-.582 0-1.143.037-1.673.104a12 12 0 0 0-.308 2.17l.627-.628.708.708L5.5 9.207 3.646 7.354l.708-.708Zm1.817-3.696a7 7 0 0 0-.188.45Q7.305 4.001 8 4c.843 0 1.654.072 2.407.204a7 7 0 0 0-.24-.591C9.642 2.474 9.016 2 8.5 2s-1.141.474-1.667 1.613",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-rotate-3d",
    viewBox: "0 0 16 16",
    paths: [
      "M10.08 12.502c.551-1.1.92-2.691.92-4.502 0-.981-.108-1.897-.295-2.705A12 12 0 0 0 8 5c-.579 0-1.135.038-1.66.107a11.6 11.6 0 0 0-.32 2.166l.626-.627.708.708L5.5 9.207 3.646 7.354l.708-.708.663.664c.034-.706.121-1.381.253-2.009a8 8 0 0 0-1.773.619C2.337 6.5 2 7.116 2 7.5s.337 1 1.497 1.58C4.598 9.631 6.189 10 8 10q.146 0 .29-.003l-.644-.643.708-.708 1.853 1.854-1.853 1.854-.708-.708.65-.649Q8.149 11 8 11c-3.866 0-7-1.567-7-3.5 0-1.503 1.894-2.784 4.554-3.28C6.176 2.283 7.263 1 8.5 1c1.29 0 2.418 1.397 3.025 3.475C13.603 5.082 15 6.21 15 7.5c0 .988-.819 1.881-2.137 2.518q.081-.589.115-1.205C13.758 8.317 14 7.825 14 7.5c0-.384-.337-1-1.498-1.58a7 7 0 0 0-.71-.305C11.927 6.359 12 7.162 12 8c0 3.866-1.567 7-3.5 7-1.233 0-2.317-1.276-2.941-3.203q.542.093 1.112.144.117.3.249.561C7.5 13.663 8.116 14 8.5 14s1-.337 1.58-1.498m.305-8.294a7 7 0 0 0-.305-.711C9.5 2.337 8.884 2 8.5 2s-1 .337-1.58 1.497a7 7 0 0 0-.25.566Q7.316 4.001 8 4c.838 0 1.641.074 2.385.208",
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

const Rotate3DBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "rotate-3d",
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
Rotate3DBase.displayName = "Rotate3D";

export const Rotate3D = memo(Rotate3DBase) as typeof Rotate3DBase;
Rotate3D.displayName = "Rotate3D";
