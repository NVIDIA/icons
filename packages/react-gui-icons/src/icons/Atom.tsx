"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "atom" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-atom",
    viewBox: "0 0 16 16",
    paths: [
      "M8.001 1c.469 0 .878.22 1.21.538.329.316.609.75.842 1.252l-.909.42c-.2-.434-.416-.75-.625-.95-.206-.198-.38-.26-.518-.26-.156 0-.361.081-.604.348-.242.267-.484.681-.697 1.235C6.275 4.689 6.001 6.25 6.001 8s.274 3.311.699 4.417c.213.554.455.968.697 1.235.243.267.448.348.604.348.138 0 .312-.062.518-.26.209-.2.425-.516.625-.95l.909.42c-.233.502-.513.936-.842 1.252-.332.318-.741.538-1.21.538-.535 0-.988-.284-1.343-.675s-.652-.928-.892-1.55C5.287 11.529 5.001 9.84 5.001 8s.286-3.529.765-4.775c.24-.622.537-1.16.892-1.55S7.466 1 8.001 1M3.254 9.442c-.265.382-.422.719-.487.993-.063.27-.03.447.037.565.07.121.213.241.493.321.283.081.672.108 1.156.062l.096.995c-.559.054-1.083.032-1.527-.095-.446-.127-.847-.372-1.084-.783-.23-.4-.247-.856-.143-1.295.102-.436.329-.887.636-1.332z",
      "M13.547 8.841c.316.45.55.908.657 1.349.108.444.092.905-.142 1.31-.372.645-1.131.877-1.909.902-.802.027-1.777-.155-2.812-.504l.319-.947c.969.326 1.819.474 2.46.452.664-.022.967-.214 1.076-.403.069-.119.102-.3.035-.575-.067-.279-.231-.622-.504-1.01zm-1.394-5.244c.778.026 1.538.258 1.91.903.267.463.248.998.087 1.501s-.478 1.028-.896 1.546c-.84 1.039-2.16 2.131-3.753 3.051-.607.35-1.213.653-1.804.905l-.393-.92a16 16 0 0 0 1.697-.852c1.515-.874 2.731-1.891 3.475-2.812.374-.462.611-.879.721-1.223.11-.343.078-.561 0-.696-.109-.189-.413-.381-1.077-.403-.641-.021-1.491.126-2.46.452l-.318-.947c1.035-.349 2.009-.532 2.811-.505",
      "M8.001 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2M3.022 3.717c.444-.127.967-.149 1.526-.095l-.095.995c-.485-.046-.874-.019-1.157.062-.28.08-.423.2-.492.321-.107.185-.125.535.173 1.105.288.552.819 1.199 1.559 1.863l-.667.745c-.792-.711-1.415-1.451-1.777-2.146-.353-.675-.52-1.433-.154-2.067.237-.41.638-.656 1.084-.783m4.674.78c.591.252 1.197.555 1.804.905.654.378 1.261.784 1.806 1.202l-.609.792A16 16 0 0 0 9 6.268a16 16 0 0 0-1.696-.85z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-atom",
    viewBox: "0 0 16 16",
    paths: [
      "M8 1c.469 0 .878.22 1.21.538.329.316.609.75.842 1.252l-.908.42c-.201-.434-.416-.75-.625-.95C8.312 2.062 8.138 2 8 2c-.156 0-.361.081-.604.348-.242.267-.484.681-.697 1.235C6.274 4.689 6 6.25 6 8s.274 3.311.699 4.417c.213.554.455.968.697 1.235.243.267.448.348.604.348.138 0 .312-.062.519-.26.209-.2.424-.516.625-.95l.908.42c-.233.502-.513.936-.842 1.252C8.878 14.78 8.469 15 8 15c-.534 0-.987-.284-1.343-.675-.355-.391-.652-.928-.891-1.55C5.286 11.529 5 9.84 5 8s.286-3.529.766-4.775c.239-.622.536-1.16.891-1.55C7.013 1.284 7.466 1 8 1M3.254 9.442c-.265.383-.423.719-.487.993-.064.27-.03.447.038.565.069.12.212.241.492.321.283.081.672.108 1.156.062l.095.995c-.559.053-1.082.032-1.526-.095-.446-.127-.846-.372-1.084-.783-.23-.4-.248-.856-.144-1.295.103-.436.33-.887.638-1.332z",
      "M13.546 8.841c.316.45.55.907.657 1.349.108.444.092.905-.141 1.31-.373.645-1.132.877-1.91.902-.801.027-1.776-.155-2.811-.504l.319-.947c.969.326 1.818.474 2.459.452.665-.022.968-.214 1.077-.403.069-.119.102-.3.036-.575-.068-.279-.232-.622-.504-1.01zm-1.393-5.244c.778.026 1.537.258 1.909.903.268.463.249.998.088 1.501-.16.503-.478 1.028-.897 1.546-.84 1.039-2.159 2.131-3.753 3.051-.607.35-1.213.653-1.804.905l-.392-.92A16 16 0 0 0 9 9.731c1.515-.874 2.732-1.891 3.477-2.812.373-.462.61-.879.72-1.223.11-.343.077-.561-.001-.696-.109-.189-.411-.381-1.076-.403-.641-.022-1.492.125-2.461.452l-.318-.947c1.035-.349 2.01-.532 2.812-.505",
      "M8 6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 6.5M3.022 3.717c.444-.127.967-.149 1.526-.095l-.096.995c-.484-.046-.873-.019-1.156.062-.28.08-.423.2-.492.321-.107.185-.124.535.174 1.105.288.552.818 1.199 1.558 1.863l-.668.745c-.792-.711-1.415-1.451-1.777-2.146-.352-.675-.519-1.433-.153-2.067.237-.411.638-.656 1.084-.783m4.674.78c.591.252 1.198.555 1.804.905.654.378 1.26.784 1.805 1.202l-.608.792A16 16 0 0 0 9 6.268a16 16 0 0 0-1.695-.85z",
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

const AtomBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "atom",
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
AtomBase.displayName = "Atom";

export const Atom = memo(AtomBase) as typeof AtomBase;
Atom.displayName = "Atom";
