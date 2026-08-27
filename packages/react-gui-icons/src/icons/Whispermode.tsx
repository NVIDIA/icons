"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "whispermode" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-whispermode",
    viewBox: "0 0 16 16",
    paths: [
      "M6.188 4H8c1.001 0 1.812.811 1.812 1.812 0 .153-.032.308-.08.456.148-.048.303-.081.456-.081H12V8a1.81 1.81 0 0 1-1.812 1.812c-.153 0-.308-.032-.456-.08.048.148.08.303.08.456V12H8a1.81 1.81 0 0 1-1.812-1.812c0-.153.032-.308.08-.456-.148.048-.303.08-.456.08H4V8c0-1.001.811-1.813 1.812-1.813.153 0 .308.033.456.081a1.5 1.5 0 0 1-.08-.456Zm.698 3.75a5 5 0 0 0-.655-.413c-.224-.116-.362-.15-.419-.15A.813.813 0 0 0 5 8v.812h.812c.057 0 .195-.034.419-.149.209-.107.437-.256.655-.413q.18-.13.332-.25a10 10 0 0 0-.332-.25m1.364-.864c.157-.218.306-.446.413-.655.115-.224.149-.362.149-.419A.81.81 0 0 0 8 5h-.812v.812c0 .057.034.195.149.419.107.209.256.437.413.655.085.119.171.231.25.332q.12-.152.25-.332m.864 1.364c.218.157.446.306.655.413.224.115.362.149.419.149A.81.81 0 0 0 11 8v-.812l-.812-.001c-.057 0-.195.034-.419.15a5 5 0 0 0-.655.413 10 10 0 0 0-.332.25q.152.12.332.25m-.864.864A10 10 0 0 0 8 8.782a10 10 0 0 0-.25.332 5 5 0 0 0-.413.655c-.115.224-.149.362-.149.419 0 .448.363.812.812.812l.812-.001v-.811c0-.057-.034-.195-.149-.419a5 5 0 0 0-.413-.655",
      "m8.001 1.072 6 3.464v6.928l-6 3.464-6-3.464V4.536Zm0 12.702 5-2.887V5.113l-5-2.887-5 2.887v5.774Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-whispermode",
    viewBox: "0 0 16 16",
    paths: [
      "m2.001 4.536 6-3.464 6 3.464v6.928l-6 3.464-6-3.464Zm4.352 1.111c0 .254.111.54.247.804q.088.173.196.345a5 5 0 0 0-.345-.196c-.264-.136-.55-.247-.804-.247C4.737 6.353 4 7.09 4 8v1.647h1.647c.254 0 .54-.111.804-.247q.173-.088.345-.196-.108.172-.196.345c-.136.264-.247.55-.247.804C6.353 11.263 7.09 12 8 12h1.647v-1.647c0-.254-.111-.54-.247-.804a5 5 0 0 0-.196-.345q.172.108.345.196c.264.136.55.247.804.247C11.263 9.647 12 8.91 12 8V6.353h-1.647c-.254 0-.54.111-.804.247q-.172.088-.345.196.108-.173.196-.345c.136-.264.247-.55.247-.804C9.647 4.737 8.91 4 8 4H6.353Z",
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

const WhispermodeBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "whispermode",
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
WhispermodeBase.displayName = "Whispermode";

export const Whispermode = memo(WhispermodeBase) as typeof WhispermodeBase;
Whispermode.displayName = "Whispermode";
