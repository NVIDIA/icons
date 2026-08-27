"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "teleport" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-teleport",
    viewBox: "0 0 16 16",
    paths: [
      "M4.848 5.675h6.304L9.189 13H6.811Zm-2.729 6.611c-.108.115-.119.186-.119.214 0 .04.027.172.305.374.267.194.684.39 1.246.562C4.668 13.78 6.241 14 8 14s3.333-.22 4.449-.564c.562-.172.98-.368 1.246-.562.278-.202.305-.334.305-.374 0-.028-.011-.099-.119-.214-.11-.118-.296-.252-.574-.39-.552-.274-1.373-.514-2.386-.677l.158-.987c1.067.171 1.996.432 2.673.769.338.167.637.366.858.601.223.238.39.541.39.898 0 .513-.336.906-.717 1.183-.391.284-.925.52-1.54.709C11.507 14.772 9.831 15 8 15s-3.507-.228-4.743-.608c-.615-.189-1.149-.425-1.54-.709C1.336 13.406 1 13.013 1 12.5c0-.357.167-.66.39-.898.221-.235.52-.434.858-.601.677-.337 1.606-.598 2.673-.769l.158.987c-1.013.163-1.834.403-2.386.677-.278.138-.464.272-.574.39M6 3a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 3m.152 3.675L7.578 12h.844l1.426-5.325ZM8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-teleport",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 1m3.152 4.675H4.848L6.811 13h2.378z",
      "m5.069 10.229.26.971c-.742.117-1.399.28-1.942.474-.571.204-.962.423-1.192.617a.8.8 0 0 0-.189.209.8.8 0 0 0 .189.209c.23.194.621.413 1.192.617C4.52 13.731 6.151 14 8 14s3.48-.269 4.613-.674c.571-.204.962-.423 1.192-.617a.8.8 0 0 0 .189-.209.8.8 0 0 0-.189-.209c-.23-.194-.621-.413-1.192-.617-.543-.194-1.2-.357-1.942-.474l.26-.971C13.333 10.625 15 11.493 15 12.5c0 1.381-3.134 2.5-7 2.5s-7-1.119-7-2.5c0-1.007 1.667-1.875 4.069-2.271",
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

const TeleportBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "teleport",
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
TeleportBase.displayName = "Teleport";

export const Teleport = memo(TeleportBase) as typeof TeleportBase;
Teleport.displayName = "Teleport";
