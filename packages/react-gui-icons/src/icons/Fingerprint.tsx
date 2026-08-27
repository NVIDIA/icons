"use client";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { SVGProps } from "react";
import { createElement, forwardRef, memo } from "react";

import type { IconSpriteSymbol } from "../runtime/sprite.js";
import { useSpriteSymbol } from "../runtime/useSpriteSymbol.js";

/**
 * "fingerprint" icon — tree-shakable per-icon component.
 * Imports only its own path data; does not pull in the full inline map.
 */
const DATA = {
  line: {
    symbolId: "nvidia-react-gui-icons-v1-line-fingerprint",
    viewBox: "0 0 16 16",
    paths: [
      "M3.001 8.502a4.5 4.5 0 1 1 9.003 0A9.46 9.46 0 0 1 10.253 14l-.815-.579a8.46 8.46 0 0 0 1.566-4.919 3.502 3.502 0 0 0-7.003 0c0 .829-.672 1.501-1.501 1.501H2v-1h.5a.5.5 0 0 0 .501-.501M7.502 3a5.5 5.5 0 0 0-4.764 2.75l-.866-.5a6.502 6.502 0 1 1 10.972 6.961l-.821-.571A5.503 5.503 0 0 0 7.502 3m0 4.002a1.5 1.5 0 0 0-1.5 1.5c0 1.7-1.211 3.116-2.817 3.435l-.195-.981a2.5 2.5 0 0 0 2.012-2.454 2.5 2.5 0 1 1 5.001 0 7.5 7.5 0 0 1-2.733 5.793l-.636-.772a6.49 6.49 0 0 0 2.369-5.021 1.5 1.5 0 0 0-1.501-1.5m.5 1.5a5.5 5.5 0 0 1-3.097 4.95l-.437-.899a4.5 4.5 0 0 0 2.534-4.051Z",
    ] as const,
  },
  fill: {
    symbolId: "nvidia-react-gui-icons-v1-fill-fingerprint",
    viewBox: "0 0 16 16",
    paths: [
      "M3.001 8.502a4.5 4.5 0 1 1 9.003 0A9.46 9.46 0 0 1 10.253 14l-.815-.579a8.46 8.46 0 0 0 1.566-4.919 3.502 3.502 0 0 0-7.003 0c0 .829-.672 1.501-1.501 1.501H2v-1h.5a.5.5 0 0 0 .501-.501M7.502 3a5.5 5.5 0 0 0-4.764 2.75l-.866-.5a6.502 6.502 0 1 1 10.972 6.961l-.821-.571A5.503 5.503 0 0 0 7.502 3m0 4.002a1.5 1.5 0 0 0-1.5 1.5c0 1.7-1.211 3.116-2.817 3.435l-.195-.981a2.5 2.5 0 0 0 2.012-2.454 2.5 2.5 0 1 1 5.001 0 7.5 7.5 0 0 1-2.733 5.793l-.636-.772a6.49 6.49 0 0 0 2.369-5.021 1.5 1.5 0 0 0-1.501-1.5m.5 1.5a5.5 5.5 0 0 1-3.097 4.95l-.437-.899a4.5 4.5 0 0 0 2.534-4.051Z",
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

const FingerprintBase = forwardRef<SVGSVGElement, NvidiaGuiIconProps>(
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
        "data-icon-name": "fingerprint",
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
FingerprintBase.displayName = "Fingerprint";

export const Fingerprint = memo(FingerprintBase) as typeof FingerprintBase;
Fingerprint.displayName = "Fingerprint";
