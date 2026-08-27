"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "anchor" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-anchor",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a2 2 0 0 1 .5 3.937V7H10v1H8.5v5.42c.177-.114.361-.217.544-.315.239-.127.491-.25.739-.371l.093-.046c.282-.138.561-.276.835-.426.976-.536 1.833-1.199 2.247-2.383L11.83 9.47l.34-.94 1.988.721-.102.433c-.44 1.856-1.669 2.798-2.863 3.454-.297.163-.595.31-.877.449l-.093.045c-.251.123-.487.238-.709.356-.507.269-.883.523-1.124.824L8 15.3l-.39-.488c-.241-.301-.617-.555-1.124-.824-.222-.118-.458-.233-.709-.356l-.093-.045c-.282-.139-.58-.286-.877-.449-1.194-.656-2.423-1.598-2.863-3.454l-.102-.433L3.83 8.53l.34.94-1.128.409c.414 1.184 1.271 1.847 2.247 2.383.274.15.553.288.835.426l.093.046c.248.121.5.244.739.371q.277.146.544.315V8H6V7h1.5V4.937A2 2 0 0 1 8 1M7 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-anchor",
    viewBox: "0 0 16 16",
    paths: [
      "M6 3a2 2 0 1 1 2.5 1.937V7H10v1H8.5v5.42c.177-.114.361-.217.544-.315.239-.127.491-.25.739-.371l.093-.046c.282-.138.561-.276.835-.426.976-.536 1.833-1.199 2.248-2.383l-1.13-.409.342-.94 1.987.721-.102.433c-.44 1.856-1.669 2.798-2.863 3.454-.297.163-.595.31-.877.449l-.093.045c-.251.123-.487.238-.709.356-.507.269-.883.523-1.124.824L8 15.3l-.39-.488c-.241-.301-.617-.555-1.124-.824-.222-.118-.458-.233-.709-.356l-.093-.045c-.282-.139-.58-.286-.877-.449-1.194-.656-2.423-1.598-2.863-3.454l-.102-.433L3.83 8.53l.34.94-1.128.409c.414 1.184 1.271 1.847 2.247 2.383.274.15.553.288.835.426l.093.046c.248.121.5.244.739.371q.277.146.544.315V8H6V7h1.5V4.937A2 2 0 0 1 6 3",
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

const AnchorBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "anchor",
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
AnchorBase.displayName = "Anchor";

export const Anchor = memo(AnchorBase) as typeof AnchorBase;
Anchor.displayName = "Anchor";
