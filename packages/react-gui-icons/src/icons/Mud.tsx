"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "mud" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-mud",
    viewBox: "0 0 16 16",
    paths: [
      "M7.5 14c0-.365-.077-.626-.189-.817a1.2 1.2 0 0 0-.487-.454c-.443-.241-1.084-.322-1.803-.292-.706.03-1.422.163-1.969.292-.271.064-.497.126-.654.172l-.181.054-.046.015-.01.004h-.003L2 12.5l-.158-.474.002-.001.004-.001.015-.005.055-.018.2-.06c.171-.05.414-.117.705-.185a12 12 0 0 1 2.156-.318c.514-.021 1.063.004 1.572.129a5 5 0 0 0-.834-.718 6.6 6.6 0 0 0-1.694-.822l-.112-.033-.027-.008-.005-.001L4 9.5l.122-.485.002.001h.003l.012.004.04.011q.051.014.142.042a7.5 7.5 0 0 1 1.962.953c.633.434 1.285 1.047 1.717 1.877.432-.83 1.085-1.443 1.717-1.877a7.5 7.5 0 0 1 2.104-.995l.04-.011.012-.004h.004l.001-.001L12 9.5l.122.485-.006.001-.026.008-.113.033a6.6 6.6 0 0 0-1.694.822 5 5 0 0 0-.834.718c.509-.125 1.058-.15 1.572-.129a12 12 0 0 1 2.156.318c.292.068.534.135.705.185l.201.06.054.018.015.005.004.001h.001c.001.001.001.001-.157.475l-.158.474h-.002l-.011-.004-.046-.015-.181-.054a13 13 0 0 0-.654-.172 11 11 0 0 0-1.969-.292c-.719-.03-1.36.051-1.803.292a1.2 1.2 0 0 0-.487.454c-.111.191-.189.452-.189.817ZM8 2.382l.447.894c.129.258.312.539.519.856q.178.271.37.581c.166.268.327.551.449.83.118.273.215.579.215.886a2 2 0 0 1-4 0c0-.307.097-.613.216-.886.121-.279.283-.562.448-.83q.193-.31.37-.581c.207-.317.39-.598.519-.856Zm-.867 3.559c-.096.22-.133.38-.133.488a1 1 0 0 0 2 0c0-.108-.037-.268-.133-.488a6 6 0 0 0-.382-.704c-.094-.153-.202-.318-.311-.487L8 4.482l-.173.268c-.11.169-.218.334-.312.487-.156.254-.289.49-.382.704",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-mud",
    viewBox: "0 0 16 16",
    paths: [
      "m8 2.382.447.894c.129.258.312.539.519.856q.178.271.37.581c.166.268.327.551.449.83.118.273.215.579.215.886a2 2 0 0 1-4 0c0-.307.097-.613.216-.886.121-.279.283-.562.448-.83q.193-.31.37-.581c.207-.317.39-.598.519-.856zm-.689 10.801c.112.191.189.452.189.817h1c0-.365.078-.626.189-.817q.168-.283.487-.454c.443-.24 1.084-.322 1.803-.292.706.029 1.423.163 1.969.292a13 13 0 0 1 .835.227l.046.014.011.004h.002L14 12.5c.158-.474.158-.475.157-.475h-.001l-.004-.001-.015-.005-.055-.018-.2-.06c-.171-.05-.413-.117-.704-.185a12 12 0 0 0-2.157-.318c-.514-.022-1.063.004-1.572.129.255-.279.542-.516.834-.717a6.5 6.5 0 0 1 1.807-.856l.026-.008.006-.001L12 9.5l-.122-.485-.001.001h-.004l-.012.004-.04.011-.142.042a7.5 7.5 0 0 0-1.962.952c-.632.435-1.285 1.048-1.717 1.878-.432-.83-1.084-1.443-1.717-1.878a7.5 7.5 0 0 0-2.104-.994l-.04-.011-.012-.004h-.003l-.002-.001L4 9.5l-.121.485.005.001.027.008.112.033a6.5 6.5 0 0 1 1.694.823c.292.201.579.438.834.717-.509-.125-1.058-.151-1.572-.129a12 12 0 0 0-2.156.318c-.291.068-.534.135-.705.185l-.2.06-.055.018-.015.005-.004.001-.002.001L2 12.5l.155.463.003.011h.003l.01-.004.046-.014.181-.055c.157-.046.383-.108.654-.172a11 11 0 0 1 1.969-.292c.719-.03 1.36.052 1.803.292q.32.17.487.454",
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

const MudBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "mud",
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
MudBase.displayName = "Mud";

export const Mud = memo(MudBase) as typeof MudBase;
Mud.displayName = "Mud";
