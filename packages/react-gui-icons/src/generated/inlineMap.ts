// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import type { IconName, Variant } from "../types.js";

/** Compact path data for a single icon variant. */
export interface IconPathData {
  readonly symbolId: string;
  readonly viewBox: string;
  readonly paths: readonly string[];
}

/** Full map of all icon path data, keyed by variant then icon name. */
export const inlineMap: Record<Variant, Record<IconName, IconPathData>> = {
  line: {
    "2b-left-click": {
      symbolId: "nvidia-react-gui-icons-v1-line-2b-left-click",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v9a5 5 0 0 1-10 0Zm9 5.5H4V10a4 4 0 0 0 8 0ZM4 2v3.5h3.5V2Zm4.5 0v3.5H12V2Zm-4 1.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m1.25-.25a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5",
      ],
    },
    "3-square-plus": {
      symbolId: "nvidia-react-gui-icons-v1-line-3-square-plus",
      viewBox: "0 0 16 16",
      paths: [
        "M7 2v5H2V2ZM3 6h3V3H3Zm9 8h-1v-2H9v-1h2V9h1v2h2v1h-2zM2 9h5v5H2Zm1 1v3h3v-3Zm11-8v5H9V2Zm-4 4h3V3h-3Z",
      ],
    },
    "3d-axis": {
      symbolId: "nvidia-react-gui-icons-v1-line-3d-axis",
      viewBox: "0 0 16 16",
      paths: [
        "M10.354 4.646 8 2.293 5.647 4.646l.707.708L7.5 4.207v4.504l-3.901 2.252.42-1.566-.966-.258-.862 3.215 3.215.861.259-.966-1.566-.42L8 9.577l3.901 2.252-1.566.42.259.966 3.215-.861-.862-3.215-.966.258.42 1.566L8.5 8.711V4.207l1.147 1.147z",
      ],
    },
    "4-square": {
      symbolId: "nvidia-react-gui-icons-v1-line-4-square",
      viewBox: "0 0 16 16",
      paths: [
        "M7 2v5H2V2ZM3 6h3V3H3Zm4 3v5H2V9Zm-4 4h3v-3H3Zm6-4h5v5H9Zm1 1v3h3v-3Zm4-8v5H9V2Zm-4 4h3V3h-3Z",
      ],
    },
    accessibility: {
      symbolId: "nvidia-react-gui-icons-v1-line-accessibility",
      viewBox: "0 0 16 16",
      paths: [
        "m11.63 6.546-3.13.838v.98l1.954 3.387-.866.5L8 9.5l-1.588 2.751-.866-.5L7.5 8.366v-.982l-3.13-.838.26-.967L8 6.482l3.371-.903z",
        "M8 3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 3m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2",
      ],
    },
    "account-add": {
      symbolId: "nvidia-react-gui-icons-v1-line-account-add",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 4a2 2 0 1 0 3.999.001A2 2 0 0 0 6 4M4.456 8l-1.608 6h4.329v-1H4.151l1.072-4H9V8zM11 11V8.5h1V11h2.5v1H12v2.5h-1V12H8.5v-1z",
      ],
    },
    "account-check": {
      symbolId: "nvidia-react-gui-icons-v1-line-account-check",
      viewBox: "0 0 16 16",
      paths: [
        "M5 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-.544 4h6.704v1H5.223l-1.072 4h2.813v1H2.848ZM8 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 2m7.353 7.354L10.5 14.207l-2.354-2.353.707-.708 1.647 1.647 4.146-4.147Z",
      ],
    },
    "account-more": {
      symbolId: "nvidia-react-gui-icons-v1-line-account-more",
      viewBox: "0 0 16 16",
      paths: [
        "M5 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 2M4.456 8H7v1H5.223l-1.072 4H6.5v1H2.848ZM10 11.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-2.5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "account-remove": {
      symbolId: "nvidia-react-gui-icons-v1-line-account-remove",
      viewBox: "0 0 16 16",
      paths: [
        "M5 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-.544 4h6.704v1H5.223l-1.072 4h3.026v1H2.848ZM8 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 2m6.5 10h-6v-1h6Z",
      ],
    },
    add: {
      symbolId: "nvidia-react-gui-icons-v1-line-add",
      viewBox: "0 0 16 16",
      paths: ["M7.5 7.5V2h1v5.5H14v1H8.5V14h-1V8.5H2v-1Z"],
    },
    "add-circle": {
      symbolId: "nvidia-react-gui-icons-v1-line-add-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 12V8.5H12v-1H8.5V4h-1v3.5H4v1h3.5V12z",
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8",
      ],
    },
    "address-book": {
      symbolId: "nvidia-react-gui-icons-v1-line-address-book",
      viewBox: "0 0 16 16",
      paths: [
        "M9.2 4.1a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9.2 4.1m-.5 1.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2.147 2.3.804 3H6.748l.804-3Zm-2.796 2h2.297l-.268-1H8.319Z",
        "M3 2h11v12H3v-3H2v-1h1V8.5H2v-1h1V6H2V5h1Zm1 11h9V3H4v2h1v1H4v1.5h1v1H4V10h1v1H4Z",
      ],
    },
    airplane: {
      symbolId: "nvidia-react-gui-icons-v1-line-airplane",
      viewBox: "0 0 16 16",
      paths: [
        "M7 2h2.384l1.072 4H13a2 2 0 1 1 0 4h-2.544l-1.072 4H7v-4H4.384l-.268 1H1.179l.804-3-.804-3h2.937l.268 1H7ZM2.884 8.5 2.482 10h.866l.268-1H13a1 1 0 0 0 0-2H3.616l-.268-1h-.866l.402 1.5H5v1ZM8 6h1.42l-.804-3H8Zm0 4v3h.616l.804-3Z",
      ],
    },
    airport: {
      symbolId: "nvidia-react-gui-icons-v1-line-airport",
      viewBox: "0 0 16 16",
      paths: [
        "M5 11h1v-1H5zm2 0h1v-1H7z",
        "M11.707 1 13 2.293v2.414l-1 1V8h2v1h-2v4h2v1H2v-1h1V9H2V8h7V5.707l-1-1V2.293L9.293 1ZM4 9v4h5V9Zm7-3h-1v7h1Zm.293-1L12 4.293V4H9v.293L9.707 5ZM9 2.707V3h3v-.293L11.293 2H9.707Z",
      ],
    },
    alarm: {
      symbolId: "nvidia-react-gui-icons-v1-line-alarm",
      viewBox: "0 0 16 16",
      paths: [
        "M3 8a5 5 0 1 1 8.504 3.567l.483 1.804-.966.258-.372-1.388A4.97 4.97 0 0 1 8 13a5 5 0 0 1-2.646-.757l-.371 1.386-.966-.258.482-1.801A5 5 0 0 1 3 8m5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m.408 3.592 2.62.702-.259.966-3.177-.852-.852-3.177.966-.259ZM5.354 2.354l-2 2-.708-.708 2-2Zm6-.708 2 2-.708.708-2-2Z",
      ],
    },
    anchor: {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a2 2 0 0 1 .5 3.937V7H10v1H8.5v5.42c.177-.114.361-.217.544-.315.239-.127.491-.25.739-.371l.093-.046c.282-.138.561-.276.835-.426.976-.536 1.833-1.199 2.247-2.383L11.83 9.47l.34-.94 1.988.721-.102.433c-.44 1.856-1.669 2.798-2.863 3.454-.297.163-.595.31-.877.449l-.093.045c-.251.123-.487.238-.709.356-.507.269-.883.523-1.124.824L8 15.3l-.39-.488c-.241-.301-.617-.555-1.124-.824-.222-.118-.458-.233-.709-.356l-.093-.045c-.282-.139-.58-.286-.877-.449-1.194-.656-2.423-1.598-2.863-3.454l-.102-.433L3.83 8.53l.34.94-1.128.409c.414 1.184 1.271 1.847 2.247 2.383.274.15.553.288.835.426l.093.046c.248.121.5.244.739.371q.277.146.544.315V8H6V7h1.5V4.937A2 2 0 0 1 8 1M7 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
      ],
    },
    "anchor-center": {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor-center",
      viewBox: "0 0 16 16",
      paths: ["M3 3h10v10H3Zm1 1v8h8V4Zm2 2h4v4H6Zm1 1v2h2V7Z"],
    },
    "anchor-e": {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor-e",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3h10v10H3Zm9 3V4H4v8h8v-2H9V6Zm0 3V7h-2v2ZM7 7H6V6h1Zm0 3H6V9h1Z",
      ],
    },
    "anchor-n": {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor-n",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3h10v10H3Zm3 1H4v8h8V4h-2v3H6Zm3 0H7v2h2ZM7 9v1H6V9Zm3 0v1H9V9Z",
      ],
    },
    "anchor-ne": {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor-ne",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3h10v10H3Zm6 1H4v8h8V7H9Zm3 2V4h-2v2ZM7 7H6V6h1Zm0 3H6V9h1Zm3-1v1H9V9Z",
      ],
    },
    "anchor-nw": {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor-nw",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3h10v10H3Zm1 4v5h8V4H7v3Zm2-3H4v2h2Zm4 3H9V6h1ZM7 9v1H6V9Zm3 1H9V9h1Z",
      ],
    },
    "anchor-s": {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor-s",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3h10v10H3Zm7 9h2V4H4v8h2V9h4Zm-3 0h2v-2H7Zm0-5H6V6h1Zm3 0H9V6h1Z",
      ],
    },
    "anchor-se": {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor-se",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3h10v10H3Zm9 6V4H4v8h5V9Zm-2 3h2v-2h-2ZM7 7H6V6h1Zm3 0H9V6h1Zm-3 3H6V9h1Z",
      ],
    },
    "anchor-sw": {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor-sw",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3h10v10H3Zm4 9h5V4H4v5h3Zm-3-2v2h2v-2Zm3-3H6V6h1Zm3 0H9V6h1Zm0 3H9V9h1Z",
      ],
    },
    "anchor-w": {
      symbolId: "nvidia-react-gui-icons-v1-line-anchor-w",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3h10v10H3Zm1 7v2h8V4H4v2h3v4Zm0-3v2h2V7Zm6 0H9V6h1Zm0 3H9V9h1Z",
      ],
    },
    approximately: {
      symbolId: "nvidia-react-gui-icons-v1-line-approximately",
      viewBox: "0 0 16 16",
      paths: [
        "m6.501 8.482 2.999.804 2.871-.769.259.966-3.13.838-2.999-.803-2.871.769-.259-.966Zm0-3 2.999.804 2.871-.769.259.966-3.13.839-2.999-.804-2.871.769-.259-.966Z",
      ],
    },
    apps: {
      symbolId: "nvidia-react-gui-icons-v1-line-apps",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h3v3H2Zm4.5 0h3v3h-3ZM11 2h3v3h-3ZM2 6.5h3v3H2Zm4.5 0h3v3h-3Zm4.5 0h3v3h-3ZM2 11h3v3H2Zm4.5 0h3v3h-3Zm4.5 0h3v3h-3ZM3 3v1h1V3Zm4.5 0v1h1V3ZM12 3v1h1V3ZM3 7.5v1h1v-1Zm4.5 0v1h1v-1Zm4.5 0v1h1v-1ZM3 12v1h1v-1Zm4.5 0v1h1v-1Zm4.5 0v1h1v-1Z",
      ],
    },
    archive: {
      symbolId: "nvidia-react-gui-icons-v1-line-archive",
      viewBox: "0 0 16 16",
      paths: ["M2 3h12v3h-1v7H3V6H2Zm2 3v6h8V6Zm9-1V4H3v1Zm-3 3H6V7h4Z"],
    },
    "arrange-columns": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrange-columns",
      viewBox: "0 0 16 16",
      paths: ["M4 6v8H2V6zm7 0v8H9V6zm3 0v8h-2V6zM8 2v8H5V2zM6 9h1V3H6z"],
    },
    "arrange-rows": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrange-rows",
      viewBox: "0 0 16 16",
      paths: ["M14 14H6v-2h8zm0-3H6V9h8zm-4-3H2V5h8ZM3 7h6V6H3Zm11-3H6V2h8z"],
    },
    arrow: {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow",
      viewBox: "0 0 16 16",
      paths: [
        "M1.75 1.75 15 7.5l-3.5 2 3 3-2 2-3-3-2 3.5Zm1.926 1.926 3.946 9.094 1.659-2.903 3.219 3.219.586-.586-3.219-3.219 2.903-1.659Z",
      ],
    },
    "arrow-down": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-down",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 10.793V3h-1v7.793L4.354 7.646l-.708.708L8 12.707l4.354-4.353-.708-.708z",
      ],
    },
    "arrow-down-left": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-down-left",
      viewBox: "0 0 16 16",
      paths: ["m5.707 11 5.647-5.646-.708-.708L5 10.293V6H4v6h6v-1z"],
    },
    "arrow-down-max": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-down-max",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 9.793V2h-1v7.793L4.354 6.646l-.708.708L8 11.707l4.354-4.353-.708-.708zM3 13h10v-1H3z",
      ],
    },
    "arrow-down-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-down-right",
      viewBox: "0 0 16 16",
      paths: ["M11 10.293 5.354 4.646l-.708.708L10.293 11H6v1h6V6h-1z"],
    },
    "arrow-left": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-left",
      viewBox: "0 0 16 16",
      paths: [
        "m8.354 4.354-.707-.708L3.293 8l4.354 4.354.707-.708L5.207 8.5H13v-1H5.207z",
      ],
    },
    "arrow-left-max": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-left-max",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3v10h1V3zm3.207 5.5H14v-1H6.207l3.147-3.146-.707-.708L4.293 8l4.354 4.354.707-.708z",
      ],
    },
    "arrow-left-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-left-right",
      viewBox: "0 0 16 16",
      paths: [
        "m3.207 8.5 2.147 2.146-.707.708L1.293 8l3.354-3.354.707.708L3.207 7.5h9.586l-2.147-2.146.708-.708L14.707 8l-3.353 3.354-.708-.708L12.793 8.5Z",
      ],
    },
    "arrow-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-right",
      viewBox: "0 0 16 16",
      paths: [
        "M10.793 8.5H3v-1h7.793L7.646 4.354l.708-.708L12.707 8l-4.353 4.354-.708-.708z",
      ],
    },
    "arrow-right-max": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-right-max",
      viewBox: "0 0 16 16",
      paths: [
        "M12 3v10h1V3zM9.793 7.5H2v1h7.793l-3.147 3.146.708.708L11.707 8 7.354 3.646l-.708.708z",
      ],
    },
    "arrow-up": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-up",
      viewBox: "0 0 16 16",
      paths: [
        "M12.354 7.646 8 3.293 3.646 7.646l.708.708L7.5 5.207V13h1V5.207l3.146 3.147z",
      ],
    },
    "arrow-up-down": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-up-down",
      viewBox: "0 0 16 16",
      paths: [
        "m8 1.293 3.354 3.353-.708.708L8.5 3.207v9.586l2.146-2.147.708.708L8 14.707l-3.354-3.353.708-.708L7.5 12.793V3.207L5.354 5.354l-.708-.708Z",
      ],
    },
    "arrow-up-left": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-up-left",
      viewBox: "0 0 16 16",
      paths: ["M10 4H4v6h1V5.707l5.646 5.647.708-.708L5.707 5H10z"],
    },
    "arrow-up-max": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-up-max",
      viewBox: "0 0 16 16",
      paths: [
        "M3 4h10V3H3zm4.5 2.207V14h1V6.207l3.146 3.147.708-.708L8 4.293 3.646 8.646l.708.708z",
      ],
    },
    "arrow-up-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-arrow-up-right",
      viewBox: "0 0 16 16",
      paths: ["M12 10V4H6v1h4.293l-5.647 5.646.708.708L11 5.707V10z"],
    },
    "at-symbol": {
      symbolId: "nvidia-react-gui-icons-v1-line-at-symbol",
      viewBox: "0 0 16 16",
      paths: [
        "M4.293 2h7.414L14 4.293v4.414l-1.984 1.985-2.367-.634-.942.942H5.793L5 10.207V8.793l.741-.741L9 7.179v-.972L8.793 6H6.207l-.353.354-.708-.708L5.793 5h3.414l.793.793v3.323l1.717.46L13 8.293V4.707L11.293 3H4.707L3 4.707v6.586L4.707 13h6.586l.853-.854.708.708L11.707 14H4.293L2 11.707V4.293ZM9 9.293V8.214l-2.741.734L6 9.207v.586l.207.207h2.086Z",
      ],
    },
    atom: {
      symbolId: "nvidia-react-gui-icons-v1-line-atom",
      viewBox: "0 0 16 16",
      paths: [
        "M8.001 1c.469 0 .878.22 1.21.538.329.316.609.75.842 1.252l-.909.42c-.2-.434-.416-.75-.625-.95-.206-.198-.38-.26-.518-.26-.156 0-.361.081-.604.348-.242.267-.484.681-.697 1.235C6.275 4.689 6.001 6.25 6.001 8s.274 3.311.699 4.417c.213.554.455.968.697 1.235.243.267.448.348.604.348.138 0 .312-.062.518-.26.209-.2.425-.516.625-.95l.909.42c-.233.502-.513.936-.842 1.252-.332.318-.741.538-1.21.538-.535 0-.988-.284-1.343-.675s-.652-.928-.892-1.55C5.287 11.529 5.001 9.84 5.001 8s.286-3.529.765-4.775c.24-.622.537-1.16.892-1.55S7.466 1 8.001 1M3.254 9.442c-.265.382-.422.719-.487.993-.063.27-.03.447.037.565.07.121.213.241.493.321.283.081.672.108 1.156.062l.096.995c-.559.054-1.083.032-1.527-.095-.446-.127-.847-.372-1.084-.783-.23-.4-.247-.856-.143-1.295.102-.436.329-.887.636-1.332z",
        "M13.547 8.841c.316.45.55.908.657 1.349.108.444.092.905-.142 1.31-.372.645-1.131.877-1.909.902-.802.027-1.777-.155-2.812-.504l.319-.947c.969.326 1.819.474 2.46.452.664-.022.967-.214 1.076-.403.069-.119.102-.3.035-.575-.067-.279-.231-.622-.504-1.01zm-1.394-5.244c.778.026 1.538.258 1.91.903.267.463.248.998.087 1.501s-.478 1.028-.896 1.546c-.84 1.039-2.16 2.131-3.753 3.051-.607.35-1.213.653-1.804.905l-.393-.92a16 16 0 0 0 1.697-.852c1.515-.874 2.731-1.891 3.475-2.812.374-.462.611-.879.721-1.223.11-.343.078-.561 0-.696-.109-.189-.413-.381-1.077-.403-.641-.021-1.491.126-2.46.452l-.318-.947c1.035-.349 2.009-.532 2.811-.505",
        "M8.001 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2M3.022 3.717c.444-.127.967-.149 1.526-.095l-.095.995c-.485-.046-.874-.019-1.157.062-.28.08-.423.2-.492.321-.107.185-.125.535.173 1.105.288.552.819 1.199 1.559 1.863l-.667.745c-.792-.711-1.415-1.451-1.777-2.146-.353-.675-.52-1.433-.154-2.067.237-.41.638-.656 1.084-.783m4.674.78c.591.252 1.197.555 1.804.905.654.378 1.261.784 1.806 1.202l-.609.792A16 16 0 0 0 9 6.268a16 16 0 0 0-1.696-.85z",
      ],
    },
    "auto-record": {
      symbolId: "nvidia-react-gui-icons-v1-line-auto-record",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4a4 4 0 0 0-1.315 7.779 1.5 1.5 0 1 1-.159 1 5.001 5.001 0 1 1 6.43-5.442l.69-.691.708.708L12 9.707V8a4 4 0 0 0-4-4M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "auto-record-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-auto-record-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-4.63-4.631a2 2 0 0 1-2.739-2.739L4.84 5.547a4.002 4.002 0 0 0 1.844 6.232 1.5 1.5 0 1 1-.158 1 5 5 0 0 1-2.397-7.943L1.646 2.354ZM8 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-.966-4.259a1 1 0 0 0 1.225 1.225ZM8 4a4 4 0 0 0-1.036.135l-.791-.791a5 5 0 0 1 6.783 3.993l.69-.691.708.708L12 9.707V8a4 4 0 0 0-4-4",
      ],
    },
    "award-ribbon": {
      symbolId: "nvidia-react-gui-icons-v1-line-award-ribbon",
      viewBox: "0 0 16 16",
      paths: [
        "m8 .258 1.189 1.305 1.682-.536.378 1.725 1.724.377-.535 1.682L13.743 6l-1.305 1.189.535 1.682-.973.213v5.654l-4-1.599-4 1.599V9.084l-.973-.213.536-1.682L2.258 6l1.305-1.189-.536-1.682 1.725-.377.377-1.725 1.682.536Zm0 1.484-.881.968-1.248-.397-.279 1.279-1.279.279.397 1.247L3.743 6l.967.882-.397 1.247 1.279.279.279 1.279 1.248-.397.881.968.882-.968 1.247.397.28-1.279 1.278-.279-.397-1.247.968-.882-.968-.882.397-1.247-1.278-.279-.28-1.279-1.247.397ZM6 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-1 4.384v2.877l3-1.2 3 1.2v-2.877l-.129.589-1.682-.536L8 11.742l-1.189-1.305-1.682.536ZM8 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "award-trophy": {
      symbolId: "nvidia-react-gui-icons-v1-line-award-trophy",
      viewBox: "0 0 16 16",
      paths: [
        "M3.934 2h8.132l-.25 2h2.336l-1.34 5h-1.621l-.25 2h-1.79l.536 2H11v1H5v-1h1.312l.536-2H5.059l-.25-2H3.188l-1.34-5h2.336Zm7 1H5.066l.875 7h4.118ZM9.5 5h-3V4h3Zm1.816 3h.729l.804-3h-1.158ZM4.309 5H3.151l.804 3h.729Zm3.574 6-.535 2h1.304l-.536-2Z",
      ],
    },
    baby: {
      symbolId: "nvidia-react-gui-icons-v1-line-baby",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M6.1 3.374A5.001 5.001 0 1 0 8 3a1 1 0 1 0 .259 1.966l.258.966A2 2 0 0 1 6.1 3.374M8 11a4 4 0 0 1-2.829-1.172l.707-.707A3 3 0 0 0 8 10c.828 0 1.578-.335 2.121-.879l.707.707A4 4 0 0 1 8 11m1-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    backspace: {
      symbolId: "nvidia-react-gui-icons-v1-line-backspace",
      viewBox: "0 0 16 16",
      paths: [
        "M6.646 6.354 8.293 8 6.646 9.646l.708.708L9 8.707l1.646 1.647.708-.708L9.707 8l1.647-1.646-.708-.708L9 7.293 7.354 5.646z",
        "M14 3v10H3.809L.923 8l2.886-5ZM2.077 8l2.31 4H13V4H4.387Z",
      ],
    },
    bandaid: {
      symbolId: "nvidia-react-gui-icons-v1-line-bandaid",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5.793 15.207 4.5 4.5 15.207.793 11.5ZM8.707 5 11 7.293 13.793 4.5 11.5 2.207Zm-1.414 6L5 8.707 2.207 11.5 4.5 13.793Zm3-3L9.5 7.207 8.707 8l.793.793ZM5.707 8l.793.793L7.293 8 6.5 7.207Zm1.5-1.5L8 7.293l.793-.793L8 5.707Zm1.586 3L8 8.707l-.793.793.793.793Z",
      ],
    },
    bank: {
      symbolId: "nvidia-react-gui-icons-v1-line-bank",
      viewBox: "0 0 16 16",
      paths: [
        "m8 2.287 6 2.373V6h-2v5h1v2h1v1H2v-1h1v-2h1V6H2V4.66ZM7 6v5h2V6Zm5 7v-1H4v1ZM8 3.362 3.859 5h8.283ZM6 11V6H5v5Zm5 0V6h-1v5Z",
      ],
    },
    barcode: {
      symbolId: "nvidia-react-gui-icons-v1-line-barcode",
      viewBox: "0 0 16 16",
      paths: ["M4 3h2v10H4zm5 0h2v10H9zM7 13V3h1v10zm6 0V3h1v10zM2 13V3h1v10z"],
    },
    "battery-0": {
      symbolId: "nvidia-react-gui-icons-v1-line-battery-0",
      viewBox: "0 0 16 16",
      paths: ["M13 5v2h1v2h-1v2H2V5ZM3 10h9V6H3Z"],
    },
    "battery-0-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-battery-0-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L10.293 11H2V5h2.293L1.646 2.354ZM5.293 6H3v4h6.293ZM13 9v1.172l-1-1V6H8.828l-1-1H13v2h1v2z",
      ],
    },
    "battery-100": {
      symbolId: "nvidia-react-gui-icons-v1-line-battery-100",
      viewBox: "0 0 16 16",
      paths: [
        "M4 7v2h1V7zm2 2V7h1v2zm2-2v2h1V7zm2 2V7h1v2z",
        "M13 5v2h1v2h-1v2H2V5ZM3 10h9V6H3Z",
      ],
    },
    "battery-25": {
      symbolId: "nvidia-react-gui-icons-v1-line-battery-25",
      viewBox: "0 0 16 16",
      paths: ["M4 9V7h1v2z", "M13 5v2h1v2h-1v2H2V5ZM3 10h9V6H3Z"],
    },
    "battery-50": {
      symbolId: "nvidia-react-gui-icons-v1-line-battery-50",
      viewBox: "0 0 16 16",
      paths: ["M4 7v2h1V7zm2 2V7h1v2z", "M13 5v2h1v2h-1v2H2V5ZM3 10h9V6H3Z"],
    },
    "battery-75": {
      symbolId: "nvidia-react-gui-icons-v1-line-battery-75",
      viewBox: "0 0 16 16",
      paths: [
        "M4 9V7h1v2zm2-2v2h1V7zm2 2V7h1v2z",
        "M13 5v2h1v2h-1v2H2V5ZM3 10h9V6H3Z",
      ],
    },
    "battery-boost": {
      symbolId: "nvidia-react-gui-icons-v1-line-battery-boost",
      viewBox: "0 0 16 16",
      paths: [
        "m2.001 4.536 6-3.464 6 3.464v6.928l-6 3.464-6-3.464Zm1 6.351L5 12.041V5h2V4h2v1h2v7.042l2.001-1.155V5.113l-5-2.886-5 2.886ZM10 12.619v-.831l-1.999-1.154L6 11.789v.829l2.001 1.156ZM6 8.134l2.001-1.155L10 8.133V6H6Zm0 2.5 2.001-1.155L10 10.633V9.288L8.001 8.133 6 9.289Z",
      ],
    },
    "battery-charging": {
      symbolId: "nvidia-react-gui-icons-v1-line-battery-charging",
      viewBox: "0 0 16 16",
      paths: [
        "M9 7h1.85L7 13.93V9H5.15L9 2.07ZM8 8v2.07L9.15 8zV5.93L6.85 8Z",
        "M14 7h-1V5h-3v1h2v4h-1v1h2V9h1zM5 5H2v6h4v-1H3V6h2z",
      ],
    },
    beaker: {
      symbolId: "nvidia-react-gui-icons-v1-line-beaker",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 2h5.119v1H10v2.928l3 5.196V14H3v-2.876l3-5.196V3h-.5Zm4.542 6H5.959L4 11.392V13h8v-1.608ZM7 3v3.196L6.536 7h2.928L9 6.196V3Zm1 8v-1h1v1Zm-2 1v-1h1v1Z",
      ],
    },
    bed: {
      symbolId: "nvidia-react-gui-icons-v1-line-bed",
      viewBox: "0 0 16 16",
      paths: [
        "M1 3h1v2.165h2.315L6 5.616V7h6.7l1.3.348V6h1v7h-1v-2H2v2H1Zm1 7h12V8.384L12.568 8H2Zm0-3h3v-.616l-.817-.219H2Z",
      ],
    },
    bell: {
      symbolId: "nvidia-react-gui-icons-v1-line-bell",
      viewBox: "0 0 16 16",
      paths: [
        "M6.461 1h3.078l.386 1.384A5 5 0 0 1 13 7v3.382L14.309 13H10a2 2 0 1 1-4 0H1.691L3 10.382V7c0-2.08 1.27-3.862 3.075-4.616Zm.759 1-.319 1.144-.244.087A4 4 0 0 0 4 7v3.618L3.309 12h9.382L12 10.618V7a4 4 0 0 0-2.657-3.769l-.244-.087L8.78 2ZM7 13a1 1 0 0 0 2 0Z",
      ],
    },
    "bell-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-bell-off",
      viewBox: "0 0 16 16",
      paths: [
        "M13 7v3.172l-1-1V7a4 4 0 0 0-2.657-3.769l-.244-.087L8.78 2H7.22l-.319 1.144-.244.087a4 4 0 0 0-.42.177l-.739-.738q.278-.161.577-.286L6.461 1h3.078l.386 1.384A5 5 0 0 1 13 7m-.707 6H10a2 2 0 1 1-4 0H1.691L3 10.382V7c0-.943.261-1.825.715-2.578L1.646 2.354l.707-.708 12.001 12-.708.708ZM4.449 5.156A4 4 0 0 0 4 7v3.618L3.309 12h7.984ZM7 13a1 1 0 0 0 2 0Z",
      ],
    },
    bicycle: {
      symbolId: "nvidia-react-gui-icons-v1-line-bicycle",
      viewBox: "0 0 16 16",
      paths: [
        "M7 5v1H5.955l-.338 1.263A2.5 2.5 0 0 1 6.95 9h.357l-.281-.842.949-.316L8.361 9h.689a2.5 2.5 0 0 1 2.601-1.995L11.92 6H11V5h3v1h-1.044l-.339 1.263A2.5 2.5 0 1 1 9.05 10h-.356l.281.842-.949.316L7.64 10h-.69a2.5 2.5 0 1 1-2.299-2.996L5.188 5Zm5.349 3.263-.366 1.366-.966-.258.366-1.367a1.5 1.5 0 1 0 .966.259M4.017 9.371l.366-1.366a1.499 1.499 0 1 0 .966.258l-.366 1.366Z",
      ],
    },
    blackboard: {
      symbolId: "nvidia-react-gui-icons-v1-line-blackboard",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v8h1v3H1v-3h1Zm1 8h5V8h4v2h1V3H3Zm-1 1v1h12v-1Zm6-6H4V4h4ZM7 7H4V6h3Zm4 3V9H9v1Z",
      ],
    },
    bluetooth: {
      symbolId: "nvidia-react-gui-icons-v1-line-bluetooth",
      viewBox: "0 0 16 16",
      paths: [
        "M7 .793 11.207 5l-3 3 3 3L7 15.207v-6l-2.646 2.647-.708-.708L6.793 8 3.646 4.854l.708-.707L7 6.793Zm1 8.414v3.586L9.793 11Zm0-2.414L9.793 5 8 3.207Z",
      ],
    },
    "bluetooth-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-bluetooth-off",
      viewBox: "0 0 16 16",
      paths: [
        "m9.518 6.689-.707-.707L9.793 5 8 3.207v1.965l-1-1V.793L11.207 5zm.982 5.018-3.5 3.5v-6l-2.646 2.647-.707-.708L6.793 8 1.146 2.354l.708-.708 12 12-.708.708ZM8 9.207v3.586L9.793 11Z",
      ],
    },
    bold: {
      symbolId: "nvidia-react-gui-icons-v1-line-bold",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3h3.5a2.5 2.5 0 0 1 1.759 4.276A3 3 0 0 1 9 13H5Zm1 5v4h3a2 2 0 1 0 0-4Zm0-1h2.5a1.5 1.5 0 0 0 0-3H6Z",
      ],
    },
    bone: {
      symbolId: "nvidia-react-gui-icons-v1-line-bone",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 2A1.5 1.5 0 0 1 12 3.5a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1-.71 2.821c-.171-.092-.243-.114-.29-.114a.2.2 0 0 0-.146.061l-4.682 4.681a.2.2 0 0 0-.061.147c0 .046.023.119.116.291a1.5 1.5 0 1 1-2.823.709.5.5 0 0 0-.5-.5 1.5 1.5 0 1 1 .71-2.822c.171.092.244.115.29.115a.2.2 0 0 0 .147-.061l4.681-4.682a.2.2 0 0 0 .061-.146c0-.047-.022-.119-.114-.29A1.5 1.5 0 0 1 10.5 2m0 1a.5.5 0 0 0-.44.736c.085.159.233.436.233.764 0 .32-.127.627-.354.854l-4.681 4.681a1.2 1.2 0 0 1-.854.354c-.328 0-.604-.148-.763-.234a.5.5 0 1 0-.237.941 1.5 1.5 0 0 1 1.5 1.5.5.5 0 1 0 .941-.236c-.086-.159-.234-.436-.234-.764.001-.32.128-.628.354-.854l4.681-4.681c.227-.227.534-.354.854-.354.328 0 .606.149.765.234A.5.5 0 1 0 12.5 5 1.5 1.5 0 0 1 11 3.5a.5.5 0 0 0-.5-.5",
      ],
    },
    book: {
      symbolId: "nvidia-react-gui-icons-v1-line-book",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3.5A1.5 1.5 0 0 1 3.5 2H14v12H3.5A1.5 1.5 0 0 1 2 12.5Zm1 7.585q.236-.084.5-.085H13V3H3.5a.5.5 0 0 0-.5.5ZM13 12H3.5a.5.5 0 0 0 0 1H13Zm-1.5-7H4V4h7.5Zm0 2H4V6h7.5ZM8 9H4V8h4Z",
      ],
    },
    bookmark: {
      symbolId: "nvidia-react-gui-icons-v1-line-bookmark",
      viewBox: "0 0 16 16",
      paths: ["M3 1h10v14.35l-5-2.778-5 2.778Zm1 1v11.65l4-2.222 4 2.222V2Z"],
    },
    "bookmark-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-bookmark-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708L13 13.707v1.643l-5-2.778-5 2.778V3.707L.646 1.354ZM4 4.707v8.943l4-2.222 4 2.222v-.943Z",
        "m13 10.172-1-1V2H4.828l-1-1H13Z",
      ],
    },
    bottle: {
      symbolId: "nvidia-react-gui-icons-v1-line-bottle",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5.5h3v5.293l2.03 2.03-1.096 7.677H5.566L4.47 7.823l2.03-2.03Zm1 1v4.707l-1.97 1.97.904 6.323h3.132l.904-6.323-1.97-1.97V1.5Z",
      ],
    },
    "bounding-box": {
      symbolId: "nvidia-react-gui-icons-v1-line-bounding-box",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h3v1h6V2h3v3h-1v6h1v3h-3v-1H5v1H2v-3h1V5H2Zm2 3v6h1v1h6v-1h1V5h-1V4H5v1ZM3 3v1h1V3Zm9 1h1V3h-1Zm-9 8v1h1v-1Zm9 0v1h1v-1Z",
      ],
    },
    braille: {
      symbolId: "nvidia-react-gui-icons-v1-line-braille",
      viewBox: "0 0 16 16",
      paths: [
        "M3 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    briefcase: {
      symbolId: "nvidia-react-gui-icons-v1-line-briefcase",
      viewBox: "0 0 16 16",
      paths: [
        "M5.652 2h4.696l.536 2H14v9H2V4h3.116ZM3 5v7h10V5Zm3.152-1h3.696L9.58 3H6.42Z",
      ],
    },
    broadcast: {
      symbolId: "nvidia-react-gui-icons-v1-line-broadcast",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 13.062 3.502l-.865-.501A6 6 0 1 0 2 8c0 1.094.292 2.119.803 3.001l-.865.501A6.97 6.97 0 0 1 1 8m6 0a1 1 0 1 1 1.706.708l1.517 5.663-.966.258-.302-1.129H7.043l-.303 1.129-.966-.258 1.518-5.665A1 1 0 0 1 7 8M4 8a4 4 0 1 1 7.464 2.002l-.866-.501a3 3 0 1 0-5.196 0l-.866.501A4 4 0 0 1 4 8m3.999 1.932L7.311 12.5h1.376Z",
      ],
    },
    brush: {
      symbolId: "nvidia-react-gui-icons-v1-line-brush",
      viewBox: "0 0 16 16",
      paths: [
        "m12.25 1.543 2.207 2.207L7 11.208v.042c0 1.544-1.104 2.558-2.43 2.745-.6.085-1.296.089-1.927-.078-.634-.167-1.255-.522-1.59-1.193l-.258-.516.547-.182c.47-.157.755-.603 1.145-1.274l.016-.027c.209-.36.456-.784.786-1.112A2 2 0 0 1 4.75 9h.042ZM7.207 8 8 8.793l5.042-5.043-.792-.793ZM4.76 10h-.01c-.324 0-.55.118-.756.322-.227.226-.414.54-.642.933l-.035.059c-.25.431-.563.971-1.055 1.341q.251.195.636.295c.465.123 1.019.127 1.532.055.9-.127 1.57-.774 1.57-1.755v-.01Zm1.724.309.809-.809-.793-.793-.809.809Z",
      ],
    },
    bucket: {
      symbolId: "nvidia-react-gui-icons-v1-line-bucket",
      viewBox: "0 0 16 16",
      paths: [
        "m7.664 4.957.693-2.586.966.258-.843 3.144 3.02 3.02v.689l-1.741.466L6.5 13.207 1.793 8.5 6.5 3.793Zm-.299 1.115L6.5 5.207 3.207 8.5 6.5 11.793l2.741-2.741.87-.233-1.929-1.93-.199.74-.966-.258Zm5.489 4.074-.354.354zl.002.002.003.003.012.012.038.04q.048.051.127.143c.103.12.241.293.38.501.267.4.584 1.002.584 1.652a1.5 1.5 0 0 1-3 0c0-.65.317-1.252.584-1.652a5.3 5.3 0 0 1 .546-.684l.011-.012.003-.003.002-.002v-.001l.354-.353Zm-.354 1.135-.084.121c-.233.35-.416.748-.416 1.098a.5.5 0 0 0 1 0c0-.35-.183-.748-.416-1.098z",
      ],
    },
    bug: {
      symbolId: "nvidia-react-gui-icons-v1-line-bug",
      viewBox: "0 0 16 16",
      paths: [
        "m5.985 3.778-.576-2.149.966-.258.496 1.849C7.22 3.078 7.601 3 8 3s.78.078 1.129.22l.496-1.849.966.258-.576 2.149C10.62 4.326 11 5.118 11 6h1.616l.548-2.044.966.259L13.383 7H11v1.5h3v1h-3V11h2.384l.746 2.785-.966.259L12.616 12h-1.787a3 3 0 0 1-5.658 0H3.383l-.547 2.044-.966-.259L2.616 11H5V9.5H2v-1h3V7H2.616L1.87 4.215l.966-.259L3.383 6H5c0-.882.381-1.674.985-2.222M8 4a2 2 0 0 0-2 2v5q0 .207.04.401A2 2 0 0 0 10 11V6a2 2 0 0 0-2-2m.5 7.5h-1v-5h1Z",
      ],
    },
    "bug-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-bug-off",
      viewBox: "0 0 16 16",
      paths: [
        "M14 9.5h-1.671l-1-1H14zM11 7v1.172l-1-1V6a2 2 0 0 0-2-2c-.34 0-.659.084-.938.233L5.758 2.929l-.349-1.3.966-.258.496 1.849C7.22 3.078 7.601 3 8 3s.781.078 1.129.22l.496-1.849.966.258-.576 2.149C10.62 4.326 11 5.118 11 6h1.616l.548-2.044.966.259L13.383 7zm.293 5h-.464a3 3 0 0 1-5.658 0H3.383l-.547 2.044-.966-.259L2.616 11H5V9.5H2v-1h3V7H2.616L1.87 4.215l.966-.259L3.384 6H5q0-.141.013-.28L1.646 2.354l.708-.708 12 12-.708.708ZM7.5 8.207 6 6.707V11q0 .207.04.401A2 2 0 0 0 10 11v-.293l-1.5-1.5V11.5h-1Z",
      ],
    },
    bus: {
      symbolId: "nvidia-react-gui-icons-v1-line-bus",
      viewBox: "0 0 16 16",
      paths: [
        "M14 2v3h1v2h-1v7h-1v1h-2v-1H5v1H3v-1H2V7H1V5h1V2zM3 13h10v-3H3zm3-2v1H4v-1zm2.5-2H13V5H8.5zM3 9h4.5V5H3zm0-5h10V3H3z",
        "M12 12v-1h-2v1z",
      ],
    },
    bush: {
      symbolId: "nvidia-react-gui-icons-v1-line-bush",
      viewBox: "0 0 16 16",
      paths: [
        "M10.717 11a6.8 6.8 0 0 1-.357-1.765c-.073-.916-.008-1.88.143-2.757.151-.875.391-1.688.683-2.296a3.1 3.1 0 0 1 .507-.783C11.88 3.2 12.152 3 12.5 3c.347 0 .62.2.807.399.194.207.362.481.507.783.292.608.532 1.421.682 2.296.151.877.217 1.841.144 2.757-.071.909-.282 1.807-.711 2.522l-.146.243H3.5a2.5 2.5 0 0 1-.865-4.846 3 3 0 0 1 5.26 1.057A2 2 0 0 1 8.732 11ZM7 11a1 1 0 0 0 .309-1.951l-.287-.094-.051-.297a2 2 0 0 0-3.617-.795l-.101.146-.171.05A1.501 1.501 0 0 0 3.5 11Zm4.799 0h1.402c.242-.503.387-1.138.443-1.844.064-.819.006-1.699-.133-2.509-.14-.812-.358-1.531-.599-2.032a2.2 2.2 0 0 0-.334-.531 1 1 0 0 0-.078-.071.5.5 0 0 0-.078.071 2.2 2.2 0 0 0-.335.531c-.24.501-.458 1.219-.598 2.032-.139.81-.197 1.69-.133 2.509.056.706.201 1.341.443 1.844",
      ],
    },
    business: {
      symbolId: "nvidia-react-gui-icons-v1-line-business",
      viewBox: "0 0 16 16",
      paths: [
        "M9 7v1h1V7zm0 2v1h1V9zm0 2v1h1v-1zm2-4v1h1V7zm0 2v1h1V9zm0 2v1h1v-1zM3 5V4h1v1zm0 2V6h1v1zm0 2V8h1v1zm2-4V4h1v1zm0 2V6h1v1zm0 2V8h1v1z",
        "M1 2h7v3h6v9H1Zm6 1H2v10h1v-2h3v2h1Zm1 10h5V6H8Zm-4 0h1v-1H4Z",
      ],
    },
    calculator: {
      symbolId: "nvidia-react-gui-icons-v1-line-calculator",
      viewBox: "0 0 16 16",
      paths: [
        "M3.5 2h9v12h-9Zm8 4h-7v7h7Zm-7-3v2h7V3Zm2 5h-1V7h1Zm2 0h-1V7h1Zm2 0h-1V7h1Zm-4 2h-1V9h1Zm2 0h-1V9h1Zm2 0h-1V9h1Zm-4 2h-1v-1h1Zm2 0h-1v-1h1Zm2 0h-1v-1h1Z",
      ],
    },
    calendar: {
      symbolId: "nvidia-react-gui-icons-v1-line-calendar",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3V2h1v1h4V2h1v1h3v11H2V3Zm8 4H3v6h10ZM5 4H3v2h10V4h-2v1h-1V4H6v1H5Z",
      ],
    },
    "calendar-event": {
      symbolId: "nvidia-react-gui-icons-v1-line-calendar-event",
      viewBox: "0 0 16 16",
      paths: [
        "M8.641 9.169 8 7.87l-.641 1.299-1.433.208 1.037 1.011-.245 1.428L8 11.142l1.282.674-.245-1.428 1.038-1.011z",
        "M5 2h1v1h4V2h1v1h3v11H2V3h3ZM3 7v6h10V7Zm0-3v2h10V4h-2v1h-1V4H6v1H5V4Z",
      ],
    },
    camera: {
      symbolId: "nvidia-react-gui-icons-v1-line-camera",
      viewBox: "0 0 16 16",
      paths: [
        "M6.191 2h3.618l1 2H14v9H2V4h3.191Zm.618 1-1 2H3v7h10V5h-2.809l-1-2ZM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6",
      ],
    },
    "camera-360": {
      symbolId: "nvidia-react-gui-icons-v1-line-camera-360",
      viewBox: "0 0 16 16",
      paths: [
        "M6.191 2h3.618l1 2H14v5h-1V5h-2.809l-1-2H6.809l-1 2H3v7h1v1H2V4h3.191ZM12 11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1Zm-4 0a1 1 0 0 1 1-1h2v1.01h-1V11H9v1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Zm0-5a2 2 0 0 0-1.834 2.8l-.916.4a3 3 0 1 1 5.5 0l-.916-.4A2 2 0 0 0 8 6m-4 5v-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4v-1h2v-1H5v-1h1v-1Zm10 0h-1v3h1Zm-5 2v1h1v-1Z",
      ],
    },
    "camera-add": {
      symbolId: "nvidia-react-gui-icons-v1-line-camera-add",
      viewBox: "0 0 16 16",
      paths: [
        "M6.191 2h3.618l1 2H14v3.177h-1V5h-2.809l-1-2H6.809l-1 2H3v7h3.563v1H2V4h3.191z",
        "M8 6a2 2 0 0 0-1.042 3.707l-.522.853a3 3 0 1 1 4.124-4.124l-.853.522A2 2 0 0 0 8 6m3 5V8.5h1V11h2.5v1H12v2.5h-1V12H8.5v-1z",
      ],
    },
    "camera-linked": {
      symbolId: "nvidia-react-gui-icons-v1-line-camera-linked",
      viewBox: "0 0 16 16",
      paths: [
        "M6.191 3h3.618l1 2H14v9H2V5h3.191Zm.618 1-1 2H3v7h10V6h-2.809l-1-2ZM5 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7m6-3a3 3 0 0 0-3-3V0a4 4 0 0 1 4 4Zm-2 0a1 1 0 0 0-1-1V2a2 2 0 0 1 2 2Z",
      ],
    },
    "camera-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-camera-off",
      viewBox: "0 0 16 16",
      paths: [
        "M12.293 13H2V4h1.293L1.646 2.354l.708-.708 12 12-.708.708Zm-1-1-1.555-1.555a3 3 0 0 1-4.183-4.183L4.293 5H3v7ZM6.277 6.984a2 2 0 0 0 2.739 2.739ZM14 4v7.172l-1-1V5h-2.809l-1-2H6.809l-.327.654-.745-.746L6.191 2h3.618l1 2z",
        "M11 8q0 .084-.005.167L7.833 5.005Q7.916 5 8 5a3 3 0 0 1 3 3",
      ],
    },
    "camera-super": {
      symbolId: "nvidia-react-gui-icons-v1-line-camera-super",
      viewBox: "0 0 16 16",
      paths: [
        "M6.191 2h3.618l1 2H14v5h-1V5h-2.809l-1-2H6.809l-1 2H3v7h8v1H2V4h3.191ZM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6m4 5a1 1 0 0 1 1-1h2v1.01h-1V11h-1v1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2v-1.01h1V14h1v-1h-1a1 1 0 0 1-1-1Z",
      ],
    },
    cancel: {
      symbolId: "nvidia-react-gui-icons-v1-line-cancel",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m3.126-4.582 8.456 8.456a6 6 0 0 0-8.456-8.456m-.708.708a6 6 0 0 0 8.456 8.456Z",
      ],
    },
    car: {
      symbolId: "nvidia-react-gui-icons-v1-line-car",
      viewBox: "0 0 16 16",
      paths: [
        "M3.11 3h9.781l.625 2.5h.845l.833 2.5H14v1.562L13.39 12H13v1h-2v-1H5v1H3v-1h-.39L2 9.562V8H.806l.834-2.5h.845ZM3 8v1.438L3.391 11h9.219L13 9.438V8Zm9.86-1-.75-3H8.5v.5H9v1H7v-1h.5V4H3.891l-.75 3H8.5c0-.495.301-.883.662-1.123.364-.243.839-.377 1.338-.377s.974.134 1.338.377c.361.24.662.628.662 1.123ZM6 10H4V9h2Zm6 0h-2V9h2ZM9.717 6.709C9.535 6.83 9.5 6.943 9.5 7h2c0-.057-.035-.17-.217-.291A1.44 1.44 0 0 0 10.5 6.5c-.329 0-.605.09-.783.209",
      ],
    },
    cards: {
      symbolId: "nvidia-react-gui-icons-v1-line-cards",
      viewBox: "0 0 16 16",
      paths: [
        "m11.102 5.707.747 2.788-2.041 2.041-.909-.243-.747-2.788 2.041-2.041ZM9.266 7.803l.393 1.467 1.074-1.074-.393-1.467Z",
        "M15.288 3.723 12.44 14.348l-2.689-.721-7.214.631L1.579 3.3l5.673-.497.309-1.151Zm-9.35 7.847 5.795 1.553 2.329-8.693-5.794-1.553ZM2.662 4.208l.783 8.966 3.483-.303-2.215-.594 2.264-8.446Z",
      ],
    },
    "carousel-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-line-carousel-horizontal",
      viewBox: "0 0 16 16",
      paths: ["M14 4v8H2V4Zm-1 7V5H3v6ZM4 2h8v1H4zm8 11H4v1h8z"],
    },
    "carousel-vertical": {
      symbolId: "nvidia-react-gui-icons-v1-line-carousel-vertical",
      viewBox: "0 0 16 16",
      paths: ["M12 2v12H4V2ZM5 13h6V3H5ZM3 4v8H2V4zm10 8V4h1v8z"],
    },
    castle: {
      symbolId: "nvidia-react-gui-icons-v1-line-castle",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 1H10v2H8.5v3H9V5h1v1h1V5h1v2h1v1h1V7h1v2h-1v5H2V9H1V7h1v1h1V7h1V5h1v1h1V5h1v1h.5ZM6 7v6h1v-2h2v2h1V7ZM5 9H3v4h2Zm6 4h2V9h-2Zm0-6v1h1V7zM4 8h1V7H4z",
      ],
    },
    chart: {
      symbolId: "nvidia-react-gui-icons-v1-line-chart",
      viewBox: "0 0 16 16",
      paths: [
        "M14.854 4.854 9.5 10.207l-3-3-4.646 4.647-.708-.708L6.5 5.793l3 3 4.646-4.647Z",
      ],
    },
    "chart-bar": {
      symbolId: "nvidia-react-gui-icons-v1-line-chart-bar",
      viewBox: "0 0 16 16",
      paths: ["M9 2h4v12H3v-4h3V6h3Zm1 11h2V3h-2Zm-1 0V7H7v6Zm-3 0v-2H4v2Z"],
    },
    "chart-bubble": {
      symbolId: "nvidia-react-gui-icons-v1-line-chart-bubble",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3.5 6a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 3.5 6m5-1a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 8.5 5m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m2.5 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0M2.5 11a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 2.5 11m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m5.5-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-2 3a2 2 0 1 0 3.999.001A2 2 0 0 0 7.5 10.5",
      ],
    },
    "chart-flow": {
      symbolId: "nvidia-react-gui-icons-v1-line-chart-flow",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h5v5H5v2.05c.98.199 1.751.97 1.95 1.95h2.343L12 8.293l3.207 3.207L12 14.707 9.293 12H6.95A2.5 2.5 0 1 1 4 9.05V7H2Zm1 1v3h3V3Zm1.5 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 10m5.707 1.5L12 13.293l1.793-1.793L12 9.707Z",
      ],
    },
    "chart-hierarchy": {
      symbolId: "nvidia-react-gui-icons-v1-line-chart-hierarchy",
      viewBox: "0 0 16 16",
      paths: [
        "M6 1h4v4H8.5v2.5h5V11H15v4h-4v-4h1.5V8.5h-4V11H10v4H6v-4h1.5V8.5h-4V11H5v4H1v-4h1.5V7.5h5V5H6Zm1 1v2h2V2ZM2 12v2h2v-2Zm5 0v2h2v-2Zm5 0v2h2v-2Z",
      ],
    },
    "chart-performance": {
      symbolId: "nvidia-react-gui-icons-v1-line-chart-performance",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2H5v1h1.293L2.646 6.646l.708.708L7 3.707V5h1zm5 4v8H3v-4h3V8h3V6Zm-1 7V7h-2v6ZM7 9v4h2V9Zm-1 2H4v2h2Z",
      ],
    },
    "chart-pie": {
      symbolId: "nvidia-react-gui-icons-v1-line-chart-pie",
      viewBox: "0 0 16 16",
      paths: [
        "m5.961 2.323 1.631 6.085 6.085 1.631-.259.542A6.002 6.002 0 0 1 2 8a6 6 0 0 1 3.418-5.418ZM5.316 3.78a5 5 0 1 0 6.904 6.904L6.775 9.225Zm2.211-1.762Q7.761 2 8 2a6 6 0 0 1 5.982 6.473l-.047.6-5.527-1.481-1.481-5.527Zm.687.987 1.011 3.77 3.77 1.011a5 5 0 0 0-4.781-4.781",
      ],
    },
    "chart-scatterplot": {
      symbolId: "nvidia-react-gui-icons-v1-line-chart-scatterplot",
      viewBox: "0 0 16 16",
      paths: [
        "M12.5 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-2 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "chart-tree": {
      symbolId: "nvidia-react-gui-icons-v1-line-chart-tree",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v3H4.5v3H8V7h3v3H8V9H4.5v3H8v-1h3v3H8v-1H3.5V5H2Zm1 1v1h10V3Zm6 5v1h1V8Zm0 4v1h1v-1Z",
      ],
    },
    "chat-message": {
      symbolId: "nvidia-react-gui-icons-v1-line-chat-message",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v10H7.71l-2.467 2.467L4.582 12H2Zm1 1v8h2.349l.412 1.536L7.296 11H13V3Zm8 3H5V5h6Zm0 3H5V8h6Z",
      ],
    },
    "chat-multi": {
      symbolId: "nvidia-react-gui-icons-v1-line-chat-multi",
      viewBox: "0 0 16 16",
      paths: [
        "M4 2h11v8h-1.582l-.661 2.467L10.29 10H4Zm1 1v6h5.704l1.535 1.536L12.651 9H14V3ZM1 6h2v1H2v5h1.349l.412 1.536L5.296 12H8v-1h1v2H5.71l-2.467 2.467L2.582 13H1Z",
      ],
    },
    "chat-new": {
      symbolId: "nvidia-react-gui-icons-v1-line-chat-new",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v5.5h-1V3H3v8h2.349l.412 1.536.889-.89.707.708-2.114 2.113L4.582 12H2z",
        "M11 11V8.5h1V11h2.5v1H12v2.5h-1V12H8.5v-1z",
      ],
    },
    "chat-single": {
      symbolId: "nvidia-react-gui-icons-v1-line-chat-single",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v10H7.71l-2.467 2.467L4.582 12H2Zm1 1v8h2.349l.412 1.536L7.296 11H13V3Z",
      ],
    },
    chatbot: {
      symbolId: "nvidia-react-gui-icons-v1-line-chatbot",
      viewBox: "0 0 16 16",
      paths: [
        "M6.61 7h2.78l.5 2H13v2.5h1V11h1v2h-1v-.5h-1V15H3v-2.5H2v.5H1v-2h1v.5h1V9h3.11ZM4 10v4h8v-4Zm7 2.5H5v-1h6ZM7.14 9h1.72l-.25-1H7.39Z",
        "M7 1h8v5h-1.293l-2.478 2.48-.62-2.48H7Zm1 1v3h3.39l.381 1.523L13.293 5H14V2Z",
      ],
    },
    check: {
      symbolId: "nvidia-react-gui-icons-v1-line-check",
      viewBox: "0 0 16 16",
      paths: [
        "M14.354 4.354 6 12.707 1.646 8.354l.708-.708L6 11.293l7.646-7.647Z",
      ],
    },
    "check-circle": {
      symbolId: "nvidia-react-gui-icons-v1-line-check-circle",
      viewBox: "0 0 16 16",
      paths: [
        "m7 10.707 4.854-4.853-.708-.708L7 9.293 4.854 7.146l-.708.708z",
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8",
      ],
    },
    "check-multi-circle": {
      symbolId: "nvidia-react-gui-icons-v1-line-check-multi-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M12.646 5.646 8.5 9.793 6.353 7.646l-.707.707L8.5 11.207l4.854-4.854z",
        "m7.646 7.646 2.5-2.5.708.707-2.501 2.5zM6.207 10.5 3.353 7.646l-.707.707L5.5 11.207z",
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8",
      ],
    },
    "checkmark-badge": {
      symbolId: "nvidia-react-gui-icons-v1-line-checkmark-badge",
      viewBox: "0 0 16 16",
      paths: [
        "M7 10.707 4.146 7.854l.708-.708L7 9.293l4.146-4.147.708.708Z",
        "m9.603 2.017 2.268-.722.509 2.325 2.325.509-.722 2.268L15.742 8l-1.759 1.603.722 2.268-2.325.509-.509 2.325-2.268-.722L8 15.742l-1.603-1.759-2.268.722-.509-2.325-2.325-.509.722-2.268L.258 8l1.759-1.603-.722-2.268L3.62 3.62l.509-2.325 2.268.722L8 .258ZM6.704 3.164l-1.833-.583L4.46 4.46l-1.879.411.583 1.833L1.742 8l1.422 1.296-.583 1.833 1.879.411.411 1.879 1.833-.584L8 14.258l1.296-1.423 1.833.584.411-1.879 1.879-.411-.584-1.833L14.258 8l-1.423-1.296.584-1.833-1.879-.411-.411-1.879-1.833.583L8 1.742Z",
      ],
    },
    "chevron-double-down": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-double-down",
      viewBox: "0 0 16 16",
      paths: [
        "m8 7.293 3.646-3.647.708.708L8 8.707 3.646 4.354l.708-.708Zm0 4 3.646-3.647.708.708L8 12.707 3.646 8.354l.708-.708Z",
      ],
    },
    "chevron-double-left": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-double-left",
      viewBox: "0 0 16 16",
      paths: [
        "m7.647 3.646.707.708L4.707 8l3.647 3.646-.707.708L3.293 8Zm3.999 0 .708.708L8.707 8l3.647 3.646-.708.708L7.293 8Z",
      ],
    },
    "chevron-double-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-double-right",
      viewBox: "0 0 16 16",
      paths: [
        "M4.354 3.646 8.707 8l-4.353 4.354-.708-.708L7.293 8 3.646 4.354Zm4 0L12.707 8l-4.353 4.354-.708-.708L11.293 8 7.646 4.354Z",
      ],
    },
    "chevron-double-up": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-double-up",
      viewBox: "0 0 16 16",
      paths: [
        "m8 3.293 4.354 4.353-.708.708L8 4.707 4.354 8.354l-.708-.708Zm0 4 4.354 4.353-.708.708L8 8.707l-3.646 3.647-.708-.708Z",
      ],
    },
    "chevron-down": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-down",
      viewBox: "0 0 16 16",
      paths: ["m8 9.293 3.646-3.647.708.708L8 10.707 3.646 6.354l.708-.708Z"],
    },
    "chevron-down-left-up-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-down-left-up-right",
      viewBox: "0 0 16 16",
      paths: [
        "M2.965 8.293h1v3.742h3.742v1H2.965Zm9.071-4.329H8.293v-1h4.743v4.743h-1Z",
      ],
    },
    "chevron-left": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-left",
      viewBox: "0 0 16 16",
      paths: ["m6.707 8 3.647 3.646-.708.708L5.293 8l4.353-4.354.708.708Z"],
    },
    "chevron-left-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-left-right",
      viewBox: "0 0 16 16",
      paths: [
        "m5.647 4.646.707.708L3.707 8l2.647 2.646-.707.708L2.293 8ZM12.293 8 9.647 5.354l.707-.708L13.707 8l-3.353 3.354-.707-.708Z",
      ],
    },
    "chevron-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-right",
      viewBox: "0 0 16 16",
      paths: [
        "M9.293 8 5.646 4.354l.708-.708L10.707 8l-4.353 4.354-.708-.708Z",
      ],
    },
    "chevron-up": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-up",
      viewBox: "0 0 16 16",
      paths: ["m8 6.707-3.646 3.647-.708-.708L8 5.293l4.354 4.353-.708.708Z"],
    },
    "chevron-up-down": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-up-down",
      viewBox: "0 0 16 16",
      paths: [
        "m8 12.293 2.646-2.647.708.708L8 13.707l-3.354-3.353.708-.708Zm0-10 3.354 3.353-.708.708L8 3.707 5.354 6.354l-.708-.708Z",
      ],
    },
    "chevron-up-left-down-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-chevron-up-left-down-right",
      viewBox: "0 0 16 16",
      paths: [
        "M2.964 2.964h4.743v1H3.964v3.743h-1Zm9.072 9.072V8.293h1v4.743H8.293v-1Z",
      ],
    },
    "circle-1-q": {
      symbolId: "nvidia-react-gui-icons-v1-line-circle-1-q",
      viewBox: "0 0 16 16",
      paths: ["M13 8a5 5 0 0 0-5-5V2a6 6 0 0 1 6 6Z"],
    },
    "circle-2-q": {
      symbolId: "nvidia-react-gui-icons-v1-line-circle-2-q",
      viewBox: "0 0 16 16",
      paths: ["M13 8a5 5 0 0 0-5-5V2a6 6 0 1 1 0 12v-1a5 5 0 0 0 5-5"],
    },
    "circle-3-q": {
      symbolId: "nvidia-react-gui-icons-v1-line-circle-3-q",
      viewBox: "0 0 16 16",
      paths: ["M13 8a5 5 0 0 0-5-5V2a6 6 0 1 1-6 6h1a5 5 0 0 0 10 0"],
    },
    "circle-tick": {
      symbolId: "nvidia-react-gui-icons-v1-line-circle-tick",
      viewBox: "0 0 16 16",
      paths: [
        "m6.232 10.475-2.121 2.121-.707-.707 2.121-2.121Zm6.364-6.364-2.121 2.121-.707-.707 2.121-2.121ZM5.525 6.232 3.404 4.111l.707-.707 2.121 2.121ZM7.5 5V2h1v3ZM5 8.5H2v-1h3Zm9 0h-3v-1h3ZM7.5 14v-3h1v3Zm4.389-1.404-2.078-2.077.708-.707 2.077 2.077Z",
      ],
    },
    city: {
      symbolId: "nvidia-react-gui-icons-v1-line-city",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 3h.616l.268 1H9v1h2v2.58l2 .536V13h1v1H2v-1h1V7h2V4h.616l.268-1H6.5V1h1ZM8 5H6v8h2Zm2 1H9v7h1ZM5 8H4v5h1Zm7 .884-1-.268V13h1Z",
      ],
    },
    "clap-board": {
      symbolId: "nvidia-react-gui-icons-v1-line-clap-board",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v11H2Zm11 4H3v6h10ZM5.788 4l-.536 2h1.964l.536-2Zm3 0-.536 2h1.964l.536-2ZM3 4v2h1.216l.536-2Zm8.788 0-.536 2H13V4Z",
      ],
    },
    clipboard: {
      symbolId: "nvidia-react-gui-icons-v1-line-clipboard",
      viewBox: "0 0 16 16",
      paths: [
        "M5.348 2h5.304l-.268 1H13v11H3V3h2.616Zm.536 2H4v9h8V4h-1.884l-.268 1H6.152ZM11 8H5V7h6Zm0 3H5v-1h6ZM9.348 3H6.652l.268 1h2.16Z",
      ],
    },
    clock: {
      symbolId: "nvidia-react-gui-icons-v1-line-clock",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2m-.5 2h1v3.616l3.494.937-.259.966L7.5 8.384Z",
      ],
    },
    close: {
      symbolId: "nvidia-react-gui-icons-v1-line-close",
      viewBox: "0 0 16 16",
      paths: [
        "M7.293 8 2.646 3.354l.708-.708L8 7.293l4.646-4.647.708.708L8.707 8l4.647 4.646-.708.708L8 8.707l-4.646 4.647-.708-.708Z",
      ],
    },
    "close-circle": {
      symbolId: "nvidia-react-gui-icons-v1-line-close-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M4.646 5.354 7.293 8l-2.647 2.646.708.708L8 8.707l2.646 2.647.708-.708L8.707 8l2.647-2.646-.708-.708L8 7.293 5.354 4.646z",
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8",
      ],
    },
    "closed-caption": {
      symbolId: "nvidia-react-gui-icons-v1-line-closed-caption",
      viewBox: "0 0 16 16",
      paths: [
        "M6 6a1 1 0 0 1 1 1v.5H6V7H5v3h1v-.5h1v.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm5 0a1 1 0 0 1 1 1v.5h-1V7h-1v3h1v-.5h1v.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
        "M15 14H1V3h14ZM2 13h12V4H2Z",
      ],
    },
    cloth: {
      symbolId: "nvidia-react-gui-icons-v1-line-cloth",
      viewBox: "0 0 16 16",
      paths: [
        "M7 3H6a2 2 0 1 1 3.491 1.333l-.019.021-.623.558L14 7.886V9h-3v6.238l-3-1.2-3 1.2V9H2V7.887l5.706-3.294 1.056-.945A1 1 0 1 0 7 3m3 6H6v4.762l2-.8 2 .8ZM3.805 8h8.392L8.001 5.577Z",
      ],
    },
    cloud: {
      symbolId: "nvidia-react-gui-icons-v1-line-cloud",
      viewBox: "0 0 16 16",
      paths: [
        "M3.514 6.141a4.501 4.501 0 0 1 8.625-1.409A4.25 4.25 0 0 1 10.75 13H4.5a3.5 3.5 0 0 1-.986-6.859M8 3a3.5 3.5 0 0 0-3.5 3.5v.036l.005.428-.422.071A2.5 2.5 0 0 0 4.5 12h6.25a3.25 3.25 0 0 0 .877-6.38l-.247-.07-.088-.242A3.5 3.5 0 0 0 8 3",
      ],
    },
    "cloud-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-cloud-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-1.566-1.566a4.3 4.3 0 0 1-1.33.212H4.5a3.5 3.5 0 0 1-.986-6.859c.043-.54.181-1.053.397-1.523L1.646 2.354ZM4.68 5.388c-.117.349-.18.723-.18 1.112v.036l.005.428-.422.071A2.5 2.5 0 0 0 4.5 12h6.25q.257 0 .504-.039ZM15 8.75c0 .962-.32 1.85-.859 2.562l-.716-.715a3.25 3.25 0 0 0-1.798-4.977l-.247-.07-.088-.242A3.5 3.5 0 0 0 6.28 3.451l-.728-.727a4.5 4.5 0 0 1 6.587 2.008A4.25 4.25 0 0 1 15 8.75",
      ],
    },
    coaxial: {
      symbolId: "nvidia-react-gui-icons-v1-line-coaxial",
      viewBox: "0 0 16 16",
      paths: [
        "M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        "m13.982 8-3 5H5.017l-3-5 3-5h5.965ZM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3.182 8l2.401 4H8a4 4 0 0 1 0-8H5.583ZM12 8a4 4 0 0 1-4 4h2.416l2.4-4-2.4-4H8a4 4 0 0 1 4 4",
      ],
    },
    code: {
      symbolId: "nvidia-react-gui-icons-v1-line-code",
      viewBox: "0 0 16 16",
      paths: [
        "m6.026 12.342 3-9 .948.316-3 9ZM4.647 4.646l.707.708L2.707 8l2.647 2.646-.707.708L1.293 8ZM13.293 8l-2.647-2.646.708-.708L14.707 8l-3.353 3.354-.708-.708Z",
      ],
    },
    cog: {
      symbolId: "nvidia-react-gui-icons-v1-line-cog",
      viewBox: "0 0 16 16",
      paths: [
        "M6.817 2.117a6 6 0 0 1 2.366 0l.372.074.125 1.633c.396.16.765.374 1.095.633l1.477-.707.25.284c.521.59.928 1.285 1.185 2.049l.121.359-1.352.926a4.5 4.5 0 0 1 0 1.264l1.352.926-.121.359a6 6 0 0 1-1.185 2.05l-.25.283-1.477-.707c-.33.259-.699.473-1.095.633l-.125 1.633-.372.074a6 6 0 0 1-2.366 0l-.372-.074-.125-1.633a4.5 4.5 0 0 1-1.095-.633l-1.477.707-.25-.283a6 6 0 0 1-1.185-2.05l-.121-.359 1.352-.926a4.5 4.5 0 0 1 0-1.264l-1.352-.926.121-.359a6 6 0 0 1 1.185-2.049l.25-.284 1.477.707c.33-.259.699-.473 1.095-.633l.125-1.633Zm.566.921L7.266 4.56l-.322.102c-.49.155-.935.415-1.306.755l-.249.228-1.378-.66a5 5 0 0 0-.618 1.067l1.261.864-.072.329a3.5 3.5 0 0 0 0 1.51l.072.329-1.261.864q.244.575.618 1.067l1.378-.66.249.228c.371.34.816.6 1.306.755l.322.102.117 1.522a5 5 0 0 0 1.234 0l.117-1.522.322-.102c.49-.155.935-.415 1.306-.755l.249-.228 1.378.66q.373-.492.618-1.067l-1.261-.864.072-.329a3.5 3.5 0 0 0 0-1.51l-.072-.329 1.261-.864a5 5 0 0 0-.618-1.067l-1.378.66-.249-.228c-.371-.34-.816-.6-1.306-.755l-.322-.102-.117-1.522a5 5 0 0 0-1.234 0M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "cog-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-cog-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.755-2.756-.116-.055c-.33.259-.698.473-1.095.633l-.125 1.633-.372.074a6 6 0 0 1-2.366 0l-.372-.074-.125-1.633a4.5 4.5 0 0 1-1.095-.633l-1.477.707-.25-.283a6 6 0 0 1-1.185-2.05l-.121-.359 1.352-.926a4.5 4.5 0 0 1 0-1.264l-1.352-.926.121-.359a6 6 0 0 1 1.106-1.957L1.646 2.354ZM4.523 5.23l-.512-.245a5 5 0 0 0-.618 1.067l1.261.864-.072.329a3.5 3.5 0 0 0 0 1.51l.072.329-1.261.864c.162.382.371.74.618 1.067l1.378-.66.249.228c.371.34.816.6 1.306.755l.322.102.117 1.522a5 5 0 0 0 1.234 0l.117-1.522.322-.102a3.5 3.5 0 0 0 1.04-.535l-1.08-1.08a2 2 0 0 1-2.739-2.739Zm2.511 2.511a1 1 0 0 0 1.225 1.225Zm6.653 2.176q-.116.345-.272.67l-1.969-1.97a3.6 3.6 0 0 0-.028-1.372l-.072-.329 1.261-.864a5 5 0 0 0-.618-1.067l-1.378.66-.249-.228c-.371-.34-.816-.6-1.306-.755l-.322-.102-.117-1.522a5 5 0 0 0-1.234 0l-.108 1.408-.931-.931.101-1.324.372-.074a6 6 0 0 1 2.366 0l.372.074.125 1.633c.397.16.765.374 1.095.633l1.477-.707.25.284c.521.59.928 1.285 1.185 2.049l.121.359-1.352.926a4.5 4.5 0 0 1 0 1.264l1.352.926z",
      ],
    },
    collapse: {
      symbolId: "nvidia-react-gui-icons-v1-line-collapse",
      viewBox: "0 0 16 16",
      paths: [
        "M9 7h4V6h-2.293l2.647-2.646-.708-.708L10 5.293V3H9zM7 9H3v1h2.293l-2.647 2.646.708.708L6 10.707V13h1z",
      ],
    },
    collection: {
      symbolId: "nvidia-react-gui-icons-v1-line-collection",
      viewBox: "0 0 16 16",
      paths: [
        "M5.773 4.455a1.318 1.318 0 1 1 0 2.636 1.318 1.318 0 0 1 0-2.636m-.319 1.318a.319.319 0 0 0 .637 0 .318.318 0 0 0-.637 0",
        "M12 2v10H2V2ZM3 7.211l2.8 1.617 2.85-1.645L11 8.54V3H3Zm5.65 1.126L5.8 9.983 3 8.366V11h8V9.694Z",
        "M13 4v9H4v1h10V4z",
      ],
    },
    commit: {
      symbolId: "nvidia-react-gui-icons-v1-line-commit",
      viewBox: "0 0 16 16",
      paths: ["M8.5 5H11v6H8.5v3h-1v-3H5V5h2.5V2h1ZM6 10h4V6H6Z"],
    },
    compass: {
      symbolId: "nvidia-react-gui-icons-v1-line-compass",
      viewBox: "0 0 16 16",
      paths: [
        "m11.902 4.829-2.593 4.49-4.475 2.584-.732-.732L6.695 6.68l4.475-2.583ZM7.166 7.864l-1.332 2.307 2.299-1.327Zm1.672.271 1.332-2.306-2.299 1.327Z",
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8",
      ],
    },
    component: {
      symbolId: "nvidia-react-gui-icons-v1-line-component",
      viewBox: "0 0 16 16",
      paths: [
        "M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        "M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 1a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3",
      ],
    },
    concierge: {
      symbolId: "nvidia-react-gui-icons-v1-line-concierge",
      viewBox: "0 0 16 16",
      paths: [
        "M10.447 6.37 10.884 8H13v1h-1v6H4V9H3V8h2.116l.437-1.63.099-.37h4.696ZM5 9v5h6V9Zm1.151-1h3.697L9.58 7H6.42ZM8 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 1m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    connection: {
      symbolId: "nvidia-react-gui-icons-v1-line-connection",
      viewBox: "0 0 16 16",
      paths: ["M2 2h5v5H5v4h4V9h5v5H9v-2H4V7H2Zm1 1v3h3V3Zm7 7v3h3v-3Z"],
    },
    "copy-doc": {
      symbolId: "nvidia-react-gui-icons-v1-line-copy-doc",
      viewBox: "0 0 16 16",
      paths: [
        "M8.707 2 11 4.293V12H3V2ZM4 11h6V5H8V3H4Zm5.293-7L9 3.707V4Z",
        "M13 14V5h-1v8H6v1z",
      ],
    },
    "copy-generic": {
      symbolId: "nvidia-react-gui-icons-v1-line-copy-generic",
      viewBox: "0 0 16 16",
      paths: ["M2 2h10v10H2Zm1 1v8h8V3Zm10 10V4h1v10H4v-1Z"],
    },
    cpu: {
      symbolId: "nvidia-react-gui-icons-v1-line-cpu",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 3V2h1v1h1V2h1v1h1V2h1v1H13v2.5h1v1h-1v1h1v1h-1v1h1v1h-1V13h-2.5v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H3v-2.5H2v-1h1v-1H2v-1h1v-1H2v-1h1V3ZM4 4v8h8V4Zm2 2h4v4H6Zm1 1v2h2V7Z",
      ],
    },
    "craft-knife": {
      symbolId: "nvidia-react-gui-icons-v1-line-craft-knife",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1.793 14.207 4.5l-5.804 5.804.374 1.398-6.926 1.856L.793 12.5ZM7.845 9.448 12.793 4.5 11.5 3.207 6.552 8.155Zm-2-.586L2.307 12.4l5.246-1.405-.156-.581Z",
      ],
    },
    crop: {
      symbolId: "nvidia-react-gui-icons-v1-line-crop",
      viewBox: "0 0 16 16",
      paths: ["M4 4V2h1v9h9v1h-2v2h-1v-2H4V5H2V4Zm7 1H6V4h6v6h-1Z"],
    },
    crosshair: {
      symbolId: "nvidia-react-gui-icons-v1-line-crosshair",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 2.021V1h1v1.021A6 6 0 0 1 13.979 7.5H15v1h-1.021A6 6 0 0 1 8.5 13.979V15h-1v-1.021A6 6 0 0 1 2.021 8.5H1v-1h1.021A6 6 0 0 1 7.5 2.021m0 1.004A5 5 0 0 0 3.025 7.5H4v1h-.975A5 5 0 0 0 7.5 12.975V12h1v.975A5 5 0 0 0 12.975 8.5H12v-1h.975A5 5 0 0 0 8.5 3.025V4h-1ZM6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    crown: {
      symbolId: "nvidia-react-gui-icons-v1-line-crown",
      viewBox: "0 0 16 16",
      paths: [
        "M6 4a2 2 0 1 1 3.26 1.553l1.598 1.598 2.157-.98a1 1 0 1 1 .87.822L12.276 13H3.724L2.115 6.993a1 1 0 1 1 .87-.822l2.156.98L6.74 5.553A2 2 0 0 1 6 4m-.641 4.349-2.102-.956L4.491 12h7.018l1.234-4.607-2.101.956-2.368-2.368a1.9 1.9 0 0 1-.548 0Zm3.186-3.511a1 1 0 1 0-1.09-1.675 1 1 0 0 0 1.09 1.675",
      ],
    },
    cube: {
      symbolId: "nvidia-react-gui-icons-v1-line-cube",
      viewBox: "0 0 16 16",
      paths: [
        "m8.001 1.072 6 3.464v6.928l-6 3.464-6-3.464V4.536Zm4.5 3.753-4.5-2.599-4.5 2.599 4.5 2.598Zm-4 8.66 4.5-2.598V5.691l-4.5 2.598Zm-1 0V8.289l-4.5-2.598v5.196Z",
      ],
    },
    "cube-stack": {
      symbolId: "nvidia-react-gui-icons-v1-line-cube-stack",
      viewBox: "0 0 16 16",
      paths: [
        "m8 .923 3.75 2.165V6.84L15 8.717v4.33l-3.75 2.165L8 13.335l-3.25 1.877L1 13.047v-4.33L4.25 6.84V3.088ZM5.75 3.376 8 4.675l2.25-1.299L8 2.077ZM7.5 9.871 5.25 11.17v2.598l2.25-1.299Zm0-1.732V5.541L5.25 4.242V6.84Zm3.25-1.299V4.242L8.5 5.541v2.598Zm-6 .866L2.5 9.005l2.25 1.299L7 9.005Zm-.5 6.062V11.17L2 9.871v2.598Zm4.25-1.299 2.25 1.299V11.17L8.5 9.871ZM14 9.871l-2.25 1.299v2.598L14 12.469Zm-5-.866 2.25 1.299 2.25-1.299-2.25-1.299Z",
      ],
    },
    data: {
      symbolId: "nvidia-react-gui-icons-v1-line-data",
      viewBox: "0 0 16 16",
      paths: [
        "M2 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m7 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M4.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 3m7 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 11.5 10M11 2h1v5h-1ZM5 9v5H4V9Z",
      ],
    },
    datacenter: {
      symbolId: "nvidia-react-gui-icons-v1-line-datacenter",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 7.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
        "M14 5v9H2V7h1.116l.224-.837.966.259L4.151 7h.965l.224-.837.966.259L6.151 7h.965l.224-.837.966.259L8.151 7h1.073l.536-2Zm-1 8V6h-2.473l-1.875 7ZM3 8v5h1v-2h2v2h1.616l1.34-5Z",
      ],
    },
    db: {
      symbolId: "nvidia-react-gui-icons-v1-line-db",
      viewBox: "0 0 16 16",
      paths: [
        "M14 11c0 1.007-.875 1.755-1.904 2.223C11.022 13.711 9.573 14 8 14s-3.022-.289-4.096-.777C2.875 12.755 2 12.007 2 11V5c0-1.007.875-1.755 1.904-2.223C4.978 2.289 6.427 2 8 2s3.022.289 4.096.777C13.125 3.245 14 3.993 14 5ZM4.318 3.687C3.356 4.125 3 4.626 3 5s.356.875 1.318 1.313C5.234 6.729 6.536 7 8 7s2.766-.271 3.682-.687C12.644 5.875 13 5.374 13 5s-.356-.875-1.318-1.313C10.766 3.271 9.464 3 8 3s-2.766.271-3.682.687M13 9.698c-.271.202-.58.378-.904.525C11.022 10.711 9.573 11 8 11s-3.022-.289-4.096-.777A5 5 0 0 1 3 9.698V11c0 .374.356.875 1.318 1.313C5.234 12.729 6.536 13 8 13s2.766-.271 3.682-.687C12.644 11.875 13 11.374 13 11Zm0-3c-.271.202-.58.378-.904.525C11.022 7.711 9.573 8 8 8s-3.022-.289-4.096-.777A5 5 0 0 1 3 6.698V8c0 .374.356.875 1.318 1.313C5.234 9.729 6.536 10 8 10s2.766-.271 3.682-.687C12.644 8.875 13 8.374 13 8Z",
      ],
    },
    "delivery-truck": {
      symbolId: "nvidia-react-gui-icons-v1-line-delivery-truck",
      viewBox: "0 0 16 16",
      paths: [
        "M10 4v1h3.08L14 8.434V10h-1.085q.084.236.085.5a1.5 1.5 0 1 1-2.915-.5h-4.17q.084.236.085.5a1.5 1.5 0 1 1-2.915-.5H2V4ZM9 9V5H3v4Zm4 0v-.434L12.312 6H10v3Zm-8.5 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m6.5.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0",
      ],
    },
    denoise: {
      symbolId: "nvidia-react-gui-icons-v1-line-denoise",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 0 1 6-6V1a7 7 0 1 0 0 14v-1a6 6 0 0 1-6-6m8-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    diamond: {
      symbolId: "nvidia-react-gui-icons-v1-line-diamond",
      viewBox: "0 0 16 16",
      paths: [
        "M8 .293 15.707 8 8 15.707.293 8ZM1.707 8 8 14.293 14.293 8 8 1.707Z",
      ],
    },
    "diamond-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-diamond-off",
      viewBox: "0 0 16 16",
      paths: [
        "m13.268 10.439-.707-.707L14.293 8 8 1.707 6.268 3.439l-.707-.707L8 .293 15.707 8Z",
        "M3.793 4.5.646 1.354l.708-.708 14 14-.708.708-3.146-3.147-3.5 3.5L.293 8Zm.707.707L1.707 8 8 14.293l2.793-2.793Z",
      ],
    },
    "die-1": {
      symbolId: "nvidia-react-gui-icons-v1-line-die-1",
      viewBox: "0 0 16 16",
      paths: [
        "M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        "M14 14H2V2h12ZM3 13h10V3H3Z",
      ],
    },
    "die-2": {
      symbolId: "nvidia-react-gui-icons-v1-line-die-2",
      viewBox: "0 0 16 16",
      paths: [
        "M6 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        "M14 14H2V2h12ZM3 13h10V3H3Z",
      ],
    },
    "die-3": {
      symbolId: "nvidia-react-gui-icons-v1-line-die-3",
      viewBox: "0 0 16 16",
      paths: [
        "M5 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        "M14 14H2V2h12ZM3 13h10V3H3Z",
      ],
    },
    "die-4": {
      symbolId: "nvidia-react-gui-icons-v1-line-die-4",
      viewBox: "0 0 16 16",
      paths: [
        "M5 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        "M14 14H2V2h12ZM3 13h10V3H3Z",
      ],
    },
    "die-5": {
      symbolId: "nvidia-react-gui-icons-v1-line-die-5",
      viewBox: "0 0 16 16",
      paths: [
        "M5 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        "M14 14H2V2h12ZM3 13h10V3H3Z",
      ],
    },
    "die-6": {
      symbolId: "nvidia-react-gui-icons-v1-line-die-6",
      viewBox: "0 0 16 16",
      paths: [
        "M5 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        "M14 14H2V2h12ZM3 13h10V3H3Z",
      ],
    },
    dirt: {
      symbolId: "nvidia-react-gui-icons-v1-line-dirt",
      viewBox: "0 0 16 16",
      paths: [
        "M5.968 10.928 7 11.96v1.597l-1.987.497-1.085-1.086.51-1.53Zm7-6L14 5.96v1.597l-1.987.497-1.085-1.086.51-1.53ZM6.401 7.892l1.099.549v1.118l-1.099.549L5.293 9Zm-2-3 1.099.549v1.118l-1.099.549L3.293 6Zm6 5 1.099.549v1.118l-1.099.549L9.293 11Zm0-8 1.099.549v1.118l-1.099.549L9.293 3Zm.953 6.754-.708.708-1-1 .708-.708Zm-1-2.292-.708-.708 1-1 .708.708Zm-1.208-1.5-1-1 .708-.708 1 1Zm-5 4.5-1-1 .708-.708 1 1Zm1.5-6-1-1 .708-.708 1 1Zm1-.208 1-1 .708.708-1 1Zm0 2.208-1-1 .708-.708 1 1Zm1.708 1-.708-.708 1-1 .708.708Zm-.5.292-.708.708-1-1 .708-.708Zm-6.208 1 1-1 .708.708-1 1Zm3 0 1-1 .708.708-1 1Zm4.708 0-.708.708-1-1 .708-.708Zm.5 4.5-.708.708-1-1 .708-.708Zm-2.208-.292-1-1 .708-.708 1 1Zm1.708 1.792-.708.708-1-1 .708-.708Zm-.5-3.292-.708-.708 1-1 .708.708Zm-7.208-.708 1-1 .708.708-1 1Zm2 1 1-1 .708.708-1 1Zm8-1 1-1 .708.708-1 1Zm-6.417 2.583-.157.469.248.248.68-.17v-.402l-.302-.302Zm7-6-.157.469.248.248.68-.17v-.402l-.302-.302Z",
      ],
    },
    display: {
      symbolId: "nvidia-react-gui-icons-v1-line-display",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2Zm1 1v6h10V4Zm5 7.5-.133.5h.267Z",
      ],
    },
    "display-collection": {
      symbolId: "nvidia-react-gui-icons-v1-line-display-collection",
      viewBox: "0 0 16 16",
      paths: [
        "M13 2H1v8h1V3h11z",
        "M15 4v8H9.902l.268 1H12v1H6v-1h1.831l.268-1H3V4ZM4 11h10V5H4Zm4.867 2h.267L9 12.5Z",
      ],
    },
    "display-column": {
      symbolId: "nvidia-react-gui-icons-v1-line-display-column",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1v5H8.902l.268 1H8.134L8 6l-.133 1H6.831l.268-1H4.5V1Zm-6 4h5V2h-5Zm6 3v5H8.902l.268 1H10v1H6v-1h.831l.268-1H4.5V8Zm-6 4h5V9h-5Zm2.367 2h.267L8 13.5Z",
      ],
    },
    "display-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-display-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 13 13-.708.708L10.293 11H8.902l.268 1H11v1H5v-1h1.831l.268-1H2V3h.293L.646 1.354ZM3.293 4H3v6h6.293ZM8 11.5l-.133.5h.267Zm6-.5h-.172l-1-1H13V4H6.828l-1-1H14z",
      ],
    },
    "display-row": {
      symbolId: "nvidia-react-gui-icons-v1-line-display-row",
      viewBox: "0 0 16 16",
      paths: [
        "M1 5h14v5h-3.098l.268 1H13v1H9v-1h.831l.268-1H5.902l.268 1H7v1H3v-1h.831l.268-1H1Zm6.5 1H2v3h5.5Zm1 0v3H14V6Zm-3.633 5h.267L5 10.5Zm6 0h.267L11 10.5Z",
      ],
    },
    "display-share": {
      symbolId: "nvidia-react-gui-icons-v1-line-display-share",
      viewBox: "0 0 16 16",
      paths: [
        "M10.354 2.646 8 .293 5.646 2.646l.708.708L7.5 2.207V7h1V2.207l1.146 1.147z",
        "M5 4v1H3v6h10V5h-2V4h3v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2V4Zm2.866 9h.268L8 12.5Z",
      ],
    },
    "display-surround": {
      symbolId: "nvidia-react-gui-icons-v1-line-display-surround",
      viewBox: "0 0 16 16",
      paths: [
        "M1 3.5h1.134l.116.067C3.215 4.123 5.407 5 8 5s4.785-.877 5.75-1.433l.116-.067H15v9h-1.134l-.116-.067C12.785 11.877 10.593 11 8 11s-4.785.877-5.75 1.433l-.116.067H1Zm1 1.071v6.858C3.176 10.811 5.401 10 8 10s4.824.811 6 1.429V4.571C12.824 5.189 10.599 6 8 6s-4.824-.811-6-1.429",
      ],
    },
    displayport: {
      symbolId: "nvidia-react-gui-icons-v1-line-displayport",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8h7V7h1v2H3V7h1z",
        "M15 7.293V11H1V5h11.707ZM2 10h12V7.707L12.293 6H2Z",
      ],
    },
    divide: {
      symbolId: "nvidia-react-gui-icons-v1-line-divide",
      viewBox: "0 0 16 16",
      paths: [
        "M12.5 8.5h-9v-1h9zM6.5 5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 5M8 4.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M6.5 11a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 11m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    document: {
      symbolId: "nvidia-react-gui-icons-v1-line-document",
      viewBox: "0 0 16 16",
      paths: ["M9.707 2 13 5.293V14H3V2ZM4 13h8V6H9V3H4Zm7.293-8L10 3.707V5Z"],
    },
    "document-checkmark": {
      symbolId: "nvidia-react-gui-icons-v1-line-document-checkmark",
      viewBox: "0 0 16 16",
      paths: [
        "M3 2h6.707L13 5.293V8h-1V6H9V3H4v10h3v1H3Zm7 1.707V5h1.293Z",
        "m10.5 14.207 4.854-4.853-.708-.708-4.146 4.147-1.646-1.647-.708.708z",
      ],
    },
    "document-new": {
      symbolId: "nvidia-react-gui-icons-v1-line-document-new",
      viewBox: "0 0 16 16",
      paths: [
        "M9.707 2 13 5.293V7h-1V6H9V3H4v10h3v1H3V2Zm1.586 3L10 3.707V5Z",
        "M11 11V8.5h1V11h2.5v1H12v2.5h-1V12H8.5v-1z",
      ],
    },
    "document-preview": {
      symbolId: "nvidia-react-gui-icons-v1-line-document-preview",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 6.5a2 2 0 0 1 1.723 3.016l1.63 1.63-.707.708-1.63-1.631A2 2 0 1 1 7.5 6.5m-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
        "M9.707 2 13 5.293V14H3V2ZM4 13h8V6H9V3H4Zm7.293-8L10 3.707V5Z",
      ],
    },
    dolly: {
      symbolId: "nvidia-react-gui-icons-v1-line-dolly",
      viewBox: "0 0 16 16",
      paths: [
        "M10.3 3.6 8 1.875 5.7 3.6l.6.8 1.2-.9v8.915l-2.674-2.298-.652.758L8 14.164l3.826-3.289-.652-.758L8.5 12.415V3.5l1.2.9z",
      ],
    },
    download: {
      symbolId: "nvidia-react-gui-icons-v1-line-download",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 9.793V2h-1v7.793L4.354 6.646l-.708.708L8 11.707l4.354-4.353-.708-.708z",
        "M2.813 10.871 3.384 13h9.232l.571-2.129.966.258L13.384 14H2.616l-.769-2.871z",
      ],
    },
    "drive-cloud": {
      symbolId: "nvidia-react-gui-icons-v1-line-drive-cloud",
      viewBox: "0 0 16 16",
      paths: [
        "M8.615 15C7.242 15 6 13.949 6 12.5a2.5 2.5 0 0 1 .74-1.742c.207-.206.464-.385.758-.504.108-.511.38-.961.721-1.305A3.25 3.25 0 0 1 10.5 8c.767 0 1.527.309 2.076.76.302.248.615.609.787 1.052.367.139.678.372.911.626.434.47.726 1.131.726 1.812 0 1.587-1.363 2.75-2.885 2.75ZM1 4h14v5h-1V5H2v3h4.654v1H1Zm12.254 6.872a1.07 1.07 0 0 0-.782-.174.97.97 0 0 0-.128-.703C12.023 9.437 11.234 9 10.5 9c-.815 0-1.598.476-1.909 1.127a1.36 1.36 0 0 0-.082 1.002 1.12 1.12 0 0 0-.969.251A1.5 1.5 0 0 0 7 12.5c0 .828.723 1.5 1.615 1.5h3.5C13.156 14 14 13.217 14 12.25c0-.529-.307-1.092-.746-1.378M4 7H3V6h1Z",
      ],
    },
    "drive-cloud-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-drive-cloud-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 13 13-.708.708-.861-.862a3 3 0 0 1-1.67.508h-3.5C7.242 15 6 13.949 6 12.5a2.5 2.5 0 0 1 .74-1.742c.207-.206.464-.385.758-.504.108-.511.38-.961.721-1.305l.011-.012L4.293 5H2v3h4.654v1H1V4h2.293L1.646 2.354Zm6.583 7.998a1.8 1.8 0 0 0-.346.483 1.36 1.36 0 0 0-.082 1.002 1.12 1.12 0 0 0-.969.251A1.5 1.5 0 0 0 7 12.5c0 .828.723 1.5 1.615 1.5h3.5c.344 0 .666-.085.943-.234Zm5.337.794c.417.451.703 1.079.725 1.732l-4.15-4.149a3.4 3.4 0 0 1 1.727.739c.302.248.615.609.787 1.052.367.139.678.372.911.626M14 5H7.828l-1-1H15v5h-1z",
        "M4 7H3V6h1z",
      ],
    },
    "drive-network": {
      symbolId: "nvidia-react-gui-icons-v1-line-drive-network",
      viewBox: "0 0 16 16",
      paths: [
        "M1 4h14v5H8.5v3H10v1h4v1h-4v1H6v-1H2v-1h4v-1h1.5V9H1Zm1 1v3h12V5Zm5 9h2v-1H7ZM4 7H3V6h1Z",
      ],
    },
    "drive-network-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-drive-network-off",
      viewBox: "0 0 16 16",
      paths: [
        "M4 7H3V6h1z",
        "m2.354 1.646 13 13-.708.708L13.293 14H10v1H6v-1H2v-1h4v-1h1.5V9H1V4h2.293L1.646 2.354ZM4.293 5H2v3h5.293ZM8.5 9.207V12H10v1h2.293ZM7 14h2v-1H7Zm4.828-5-1-1H14V5H7.828l-1-1H15v5z",
      ],
    },
    "drive-removable": {
      symbolId: "nvidia-react-gui-icons-v1-line-drive-removable",
      viewBox: "0 0 16 16",
      paths: ["M1 5h14v5H1Zm1 1v3h12V6Zm11 2H6V7h7ZM4 8H3V7h1Z"],
    },
    "drive-removable-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-drive-removable-off",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8H3V7h1z",
        "m2.354 1.646 12 12-.708.708L9.293 10H1V5h3.293L1.646 2.354ZM5.293 6H2v3h6.293l-1-1H6V7h.293Zm7.535 4-1-1H14V6H8.828l-1-1H15v5z",
        "M13 8h-2.172l-1-1H13z",
      ],
    },
    "drive-usb": {
      symbolId: "nvidia-react-gui-icons-v1-line-drive-usb",
      viewBox: "0 0 16 16",
      paths: [
        "M10 2v3h1v8.214l-3 .804-3-.804V5h1V2ZM6 12.446l2 .536 2-.536V6H6ZM9 5V3H7v2Z",
      ],
    },
    "drive-usb-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-drive-usb-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L11 11.707v1.507l-3 .804-3-.804V5.707L1.646 2.354ZM6 6.707v5.739l2 .536 2-.536v-1.739Zm5 1.465-1-1V6H8.828l-1-1H9V3H7v1.172l-1-1V2h4v3h1z",
      ],
    },
    drone: {
      symbolId: "nvidia-react-gui-icons-v1-line-drone",
      viewBox: "0 0 16 16",
      paths: [
        "m3.354 5.354 2-2-.708-.708-2 2zm7.292-2 2 2 .708-.708-2-2zm-6 10-2-2 .708-.708 2 2zm8.708-2-2 2-.708-.708 2-2z",
        "M1 4a3 3 0 1 1 5.904.755L7.587 5h.826l.683-.245a3 3 0 1 1 2.108 2.138 3.1 3.1 0 0 0 0 2.214Q11.586 9.001 12 9a3 3 0 1 1-2.893 2.204 3.1 3.1 0 0 0-2.214 0q.106.382.107.796a3 3 0 1 1-2.204-2.893 3.12 3.12 0 0 0 0-2.214Q4.414 6.999 4 7a3 3 0 0 1-3-3m4.704 2.47a4.1 4.1 0 0 1 0 3.06c.299.207.559.467.766.766a4.1 4.1 0 0 1 3.06 0 3 3 0 0 1 .766-.766 4.1 4.1 0 0 1 0-3.06 3 3 0 0 1-.789-.801L9 5.852V6.5a1 1 0 0 1-2 0v-.648l-.507-.183a3 3 0 0 1-.789.801M12 10a2.006 2.006 0 0 0-2 2 2 2 0 1 0 2-2m-8 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 4 10m8-8a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 2M4 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 4 2",
      ],
    },
    dual: {
      symbolId: "nvidia-react-gui-icons-v1-line-dual",
      viewBox: "0 0 16 16",
      paths: [
        "M7 3V2h1v12H7v-1H2V3Zm6 1H9V3h5v10H9v-1h4v-1.306l-2.35-1.357-1.4.809-.5-.866 1.9-1.097L13 9.539ZM7 6.707l-4 4V12h4ZM7 4H3v5.293l4-4Zm2.318 2.318A.32.32 0 0 0 9 6V5a1.318 1.318 0 1 1 0 2.636v-1a.32.32 0 0 0 .318-.318",
      ],
    },
    dvi: {
      symbolId: "nvidia-react-gui-icons-v1-line-dvi",
      viewBox: "0 0 16 16",
      paths: [
        "M9 10H8V9h1zm2 0h-1V9h1zM7 9H4V8h3zm3 0H9V8h1zm2 0h-1V8h1zM9 8H8V7h1zm2 0h-1V7h1z",
        "M13.276 12H2.724L.849 5h14.302Zm-9.785-1h9.018l1.34-5H2.152Z",
      ],
    },
    easel: {
      symbolId: "nvidia-react-gui-icons-v1-line-easel",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 2V1h1v1H10v1h4v8h-2v1h-1.653l.636 2.371-.966.258L9.312 12H6.687l-.704 2.629-.966-.258L5.652 12H4v-1H2V3h4V2ZM3 4v6h10V4Z",
      ],
    },
    eject: {
      symbolId: "nvidia-react-gui-icons-v1-line-eject",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2.753 13.623 9H2.377ZM4.623 8h6.754L8 4.247ZM2.5 12v-1h11v1Z",
      ],
    },
    ekg: {
      symbolId: "nvidia-react-gui-icons-v1-line-ekg",
      viewBox: "0 0 16 16",
      paths: [
        "M8.32 3.828A3.44 3.44 0 0 1 13.954 7H15v1h-1.373q-.182.361-.455.68l-.012.014L8 13.866 2.84 8.694l-.012-.014A3.4 3.4 0 0 1 2.373 8H1V7h1.046A3.44 3.44 0 0 1 7.68 3.828l.012.011.308.302.308-.302ZM3.563 8l.012.014L8 12.45l4.425-4.436.012-.014H12V7h.935a2.44 2.44 0 0 0-3.951-2.424L8 5.542l-.984-.966A2.44 2.44 0 0 0 3.065 7h1.728l1.966-1.966.902 3.368L8.756 7H11v1H9.244l-2.03 2.598-.973-3.632L5.207 8Z",
      ],
    },
    elevator: {
      symbolId: "nvidia-react-gui-icons-v1-line-elevator",
      viewBox: "0 0 16 16",
      paths: [
        "m4 7.707-.646.647-.708-.707L4.5 5.793l1.854 1.854-.708.707L5 7.707V10H4zm6.354-.061.646.647V6h1v2.293l.646-.647.708.707-1.854 1.854-1.854-1.854z",
        "M15 1v14H1V1ZM2 14h5.5V2H2Zm6.5 0H14V2H8.5Z",
      ],
    },
    emergency: {
      symbolId: "nvidia-react-gui-icons-v1-line-emergency",
      viewBox: "0 0 16 16",
      paths: [
        "M9.5 2v3.401l2.945-1.7 1.5 2.599-2.946 1.699 2.946 1.702-1.5 2.599L9.5 10.597V14h-3v-3.403L3.555 12.3l-1.5-2.599L5 7.999 2.055 6.3l1.5-2.599 2.945 1.7V2zm-2 5.134L3.92 5.065l-.501.868L7 7.999l-3.581 2.067.501.867L7.5 8.865V13h1V8.865l3.579 2.068.501-.867L9 7.999l3.58-2.066-.501-.868L8.5 7.134V3h-1z",
      ],
    },
    emissive: {
      symbolId: "nvidia-react-gui-icons-v1-line-emissive",
      viewBox: "0 0 16 16",
      paths: [
        "M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m-1 5.197A5.96 5.96 0 0 0 8 14a5.96 5.96 0 0 0 3-.803l.501.866A7 7 0 0 1 8 15a7 7 0 0 1-3.501-.937ZM14 8a5.96 5.96 0 0 0-.803-3l.866-.501A7 7 0 0 1 15 8a7 7 0 0 1-.937 3.501L13.197 11A5.96 5.96 0 0 0 14 8M2.803 5A5.96 5.96 0 0 0 2 8c0 1.094.292 2.118.803 3l-.866.501A7 7 0 0 1 1 8c0-1.274.341-2.471.937-3.501ZM8 2a5.96 5.96 0 0 0-3 .803l-.501-.866A7 7 0 0 1 8 1c1.274 0 2.471.341 3.501.937L11 2.803A5.96 5.96 0 0 0 8 2m-2 9.465A4 4 0 0 0 8 12a4 4 0 0 0 2-.535l.501.865A5 5 0 0 1 8 13a5 5 0 0 1-2.501-.67ZM4.535 6A4 4 0 0 0 4 8c0 .73.195 1.412.535 2l-.866.501A5 5 0 0 1 3 8c0-.91.244-1.765.669-2.501ZM8 4a4 4 0 0 0-2 .535l-.501-.866A5 5 0 0 1 8 3c.91 0 1.765.244 2.501.669L10 4.535A4 4 0 0 0 8 4m4 4a4 4 0 0 0-.535-2l.865-.501A5 5 0 0 1 13 8a5 5 0 0 1-.67 2.501L11.465 10A4 4 0 0 0 12 8M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    engine: {
      symbolId: "nvidia-react-gui-icons-v1-line-engine",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4H7V3h3v1H9v1h2.707L13 6.293V7h1v3.049l-1-.032v.69L11.707 12H7.293l-1-1h-1L4 9.707V8.508l-1 .017v1.008H2V6.5h1v1.024l1-.016V6.293L5.293 5H8ZM5.707 6 5 6.707v2.586l.707.707h1l1 1h3.586l.707-.707V6.707L11.293 6Z",
      ],
    },
    enter: {
      symbolId: "nvidia-react-gui-icons-v1-line-enter",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2h8v12H6v-2h1v1h6V3H7v1H6z",
        "M11.207 8 8.354 5.146l-.708.708L9.293 7.5H1v1h8.293l-1.647 1.646.708.708z",
      ],
    },
    envelope: {
      symbolId: "nvidia-react-gui-icons-v1-line-envelope",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v10H2Zm11 3.411L8 9.593 3 6.411V12h10ZM3 4v1.226l5 3.181 5-3.181V4Z",
      ],
    },
    "envelope-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-envelope-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 13 13-.708.708L12.293 13H2V3h.293L.646 1.354Zm7.187 8.602L8 9.593 3 6.411V12h8.293ZM3.293 4H3v1.226l4.176 2.657ZM14 11.172l-1-1V6.411l-2.298 1.462-.725-.724L13 5.226V4H6.828l-1-1H14z",
      ],
    },
    equal: {
      symbolId: "nvidia-react-gui-icons-v1-line-equal",
      viewBox: "0 0 16 16",
      paths: ["M12.5 6.5h-9v-1h9zm0 4h-9v-1h9z"],
    },
    equalizer: {
      symbolId: "nvidia-react-gui-icons-v1-line-equalizer",
      viewBox: "0 0 16 16",
      paths: [
        "M10 4H6V3h4Zm0 2H6V5h4Zm0 2H6V7h4Zm5 0h-4V7h4ZM5 10H1V9h4Zm5 0H6V9h4Zm5 0h-4V9h4ZM5 12H1v-1h4Zm5 0H6v-1h4Zm5 0h-4v-1h4ZM5 14H1v-1h4Zm5 0H6v-1h4Zm5 0h-4v-1h4Z",
      ],
    },
    eraser: {
      symbolId: "nvidia-react-gui-icons-v1-line-eraser",
      viewBox: "0 0 16 16",
      paths: [
        "M10 2.293 14.207 6.5l-6.5 6.5H5.293l-3-3ZM3.707 10l2 2h1.586l2.5-2.5L7 6.707Zm4-4L10.5 8.793 12.793 6.5 10 3.707ZM14 13h-4v-1h4Z",
      ],
    },
    error: {
      symbolId: "nvidia-react-gui-icons-v1-line-error",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 5.5h1V9h-1Zm0 4.5h1v1h-1Z",
        "M15.707 8 8 15.707.293 8 8 .293ZM8 14.293 14.293 8 8 1.707 1.707 8Z",
      ],
    },
    escalator: {
      symbolId: "nvidia-react-gui-icons-v1-line-escalator",
      viewBox: "0 0 16 16",
      paths: [
        "M4 2.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 4 2.5M5.5 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m.707 2.5L7 5.293V7H6V5.707L5.793 5.5h-.586L5 5.707V9H4V5.293l.793-.793z",
        "M15 4v4h-2.793l-7 7H1v-4h2.793l7-7ZM4.207 12H2v2h2.793l7-7H14V5h-2.793Z",
      ],
    },
    ethernet: {
      symbolId: "nvidia-react-gui-icons-v1-line-ethernet",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 2v4h-2v1.5H14v1h-2V10h2v4H9v-4h2V8.5H5V10h2v4H2v-4h2V8.5H2v-1h5.5V6h-2V2zM10 13h3v-2h-3zm-7 0h3v-2H3zm3.5-8h3V3h-3z",
      ],
    },
    "ethernet-port": {
      symbolId: "nvidia-react-gui-icons-v1-line-ethernet-port",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v12H2Zm1 1v10h10V3Zm2.5 2h5v1h1v5h-7V6h1Zm0 2v3h1V8h1v2h1V8h1v2h1V7h-1V6h-3v1Z",
      ],
    },
    exit: {
      symbolId: "nvidia-react-gui-icons-v1-line-exit",
      viewBox: "0 0 16 16",
      paths: [
        "M10 2H2v12h8v-2H9v1H3V3h6v1h1z",
        "M13.293 7.5H5v1h8.293l-1.647 1.646.708.708L15.207 8l-2.853-2.854-.708.708z",
      ],
    },
    expand: {
      symbolId: "nvidia-react-gui-icons-v1-line-expand",
      viewBox: "0 0 16 16",
      paths: [
        "M13 3H9v1h2.293L8.647 6.646l.707.708L12 4.707V7h1zM3 13h4v-1H4.707l2.647-2.646-.708-.708L4 11.293V9H3z",
      ],
    },
    explode: {
      symbolId: "nvidia-react-gui-icons-v1-line-explode",
      viewBox: "0 0 16 16",
      paths: [
        "m13.5 3.598-2.815 1.625L12 5.982v1.482l3-1.732v6.351l-5.5 3.175v-3.214L8 12.91l-1.5-.866v3.214L1 12.083V5.732l3 1.732V5.982l1.315-.759L2.5 3.598 8 .423Zm-8 9.928V9.485L2 7.464v4.042Zm5-4.041v4.041l3.5-2.02V7.464ZM8 5.619l3.5-2.021L8 1.577 4.5 3.598ZM5 7.137v.904l1.5.866v1.982l1 .578V8.58Zm3.5 4.33 1-.578V8.907l1.5-.866v-.904L8.5 8.58Zm-3-5.196L8 7.714l2.5-1.443-.815-.471L8 6.773 6.315 5.8Z",
      ],
    },
    export: {
      symbolId: "nvidia-react-gui-icons-v1-line-export",
      viewBox: "0 0 16 16",
      paths: [
        "M3 5h2v1H4v6h8V6h-1V5h2v8H3Zm5.5 4h-1V2h1Z",
        "m8 1.293 2.354 2.353-.708.708L8 2.707 6.354 4.354l-.708-.708Z",
      ],
    },
    "export-from-clipboard": {
      symbolId: "nvidia-react-gui-icons-v1-line-export-from-clipboard",
      viewBox: "0 0 16 16",
      paths: [
        "M5.348 2h5.304l-.268 1H13v2.5h-1V4h-1.884l-.268 1H6.152l-.268-1H4v9h5.5v1H3V3h2.616ZM9.08 4l.268-1H6.652l.268 1Z",
        "m12.293 9-1.647-1.646.708-.708L14.208 9.5l-2.854 2.854-.708-.708L12.293 10H7V9z",
      ],
    },
    "export-to-clipboard": {
      symbolId: "nvidia-react-gui-icons-v1-line-export-to-clipboard",
      viewBox: "0 0 16 16",
      paths: [
        "m10.652 2-.268 1H13v11H3v-2h1v1h8V4h-1.884l-.268 1H6.152l-.268-1H4v3H3V3h2.616l-.268-1ZM6.92 4h2.16l.268-1H6.652Z",
        "M7.293 9 5.646 7.354l.708-.708L9.208 9.5l-2.854 2.854-.708-.708L7.293 10H2V9z",
      ],
    },
    eye: {
      symbolId: "nvidia-react-gui-icons-v1-line-eye",
      viewBox: "0 0 16 16",
      paths: [
        "M3.521 5.455C4.733 4.674 6.31 4 8 4s3.267.674 4.479 1.455c1.2.773 2.118 1.701 2.456 2.299l.139.246-.139.246c-.338.598-1.256 1.526-2.456 2.299C11.267 11.326 9.69 12 8 12s-3.267-.674-4.479-1.455c-1.2-.773-2.118-1.701-2.456-2.299L.926 8l.139-.246c.338-.598 1.256-1.526 2.456-2.299M2.103 8c.339.44 1.028 1.104 1.959 1.705C5.178 10.424 6.568 11 8 11s2.822-.576 3.938-1.295C12.87 9.104 13.557 8.44 13.897 8c-.34-.44-1.027-1.104-1.959-1.705C10.822 5.576 9.432 5 8 5s-2.822.576-3.938 1.295C3.131 6.896 2.442 7.56 2.103 8M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "eye-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-eye-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.907-2.908C9.894 11.78 8.965 12 8 12c-1.69 0-3.267-.674-4.479-1.455-1.2-.773-2.118-1.701-2.456-2.299L.926 8l.139-.246c.338-.598 1.256-1.526 2.456-2.299q.365-.237.773-.454L1.646 2.354Zm2.684 4.099a10 10 0 0 0-.976.55C3.131 6.896 2.442 7.56 2.103 8c.339.44 1.028 1.104 1.959 1.705C5.178 10.424 6.568 11 8 11c.67 0 1.331-.126 1.959-.334l-.943-.943a2 2 0 0 1-2.739-2.739Zm1.996 1.996a1 1 0 0 0 1.225 1.225Zm7.901.505c-.286.506-.988 1.25-1.925 1.935l-.717-.716c.752-.532 1.309-1.083 1.604-1.465-.34-.44-1.027-1.104-1.959-1.705C10.822 5.576 9.432 5 8 5q-.085 0-.169.003l-.913-.914A7 7 0 0 1 8 4c1.69 0 3.267.674 4.479 1.455 1.2.773 2.118 1.701 2.456 2.299l.139.246z",
      ],
    },
    eyedropper: {
      symbolId: "nvidia-react-gui-icons-v1-line-eyedropper",
      viewBox: "0 0 16 16",
      paths: [
        "m8.543 5.25-.897-.896.708-.708.646.647 1.146-1.147a1.916 1.916 0 0 1 2.708 0c.747.748.747 1.96 0 2.708L11.707 7l.647.646-.708.708-.896-.897-4.954 4.954-2.395 1.197-1.009-1.009 1.197-2.395Zm1.5 1.5-.793-.793-4.839 4.839-.793 1.586 1.586-.793Zm2.103-2.896a.913.913 0 0 0-1.292 0L9.707 5 11 6.293l1.146-1.147a.913.913 0 0 0 0-1.292",
      ],
    },
    "facial-recognition": {
      symbolId: "nvidia-react-gui-icons-v1-line-facial-recognition",
      viewBox: "0 0 16 16",
      paths: [
        "M2 14h2v1H1v-3h1zm13 1h-3v-1h2v-2h1zM8 3c1.443 0 2.473.51 3.13 1.334.641.805.876 1.847.876 2.833 0 2.274-.346 3.755-1.069 4.665C10.182 12.781 9.113 13 8 13c-1.333 0-2.352-.407-3.026-1.315-.647-.871-.915-2.123-.974-3.665l1-.04c.057 1.488.315 2.487.776 3.109C6.21 11.673 6.884 12 8 12c1 0 1.683-.197 2.154-.79.502-.631.852-1.817.852-4.043 0-.847-.203-1.64-.657-2.21C9.91 4.406 9.187 4 8 4c-.532 0-.967.082-1.321.218l-.358-.935C6.806 3.098 7.365 3 8 3",
        "M8.5 11h-1v-1h1zm-1-2h-1V8h1zm2 0h-1V8h1zM5 7H4V6h1zm2.5 0h-1V6h1zm2 0h-1V6h1zM6 5H5V4h1zM4 2H2v2H1V1h3zm11 2h-1V2h-2V1h3z",
      ],
    },
    factory: {
      symbolId: "nvidia-react-gui-icons-v1-line-factory",
      viewBox: "0 0 16 16",
      paths: [
        "M3 10V9h1v1zm0 1v1h1v-1zm2-1V9h1v1zm0 1v1h1v-1zm6 1H9v-1h2z",
        "M13 2v5h2v7H1V7h1.384l.536-2H5v2h.384l.536-2H8v2h2V2ZM3.152 8H2v5h5V9h6v4h1V8H7V6h-.312l-.536 2H4V6h-.313ZM12 10H8v3h4Zm0-5h-1v2h1Zm0-2h-1v1h1Z",
      ],
    },
    faders: {
      symbolId: "nvidia-react-gui-icons-v1-line-faders",
      viewBox: "0 0 16 16",
      paths: [
        "M4 5V1h1v4h2v3H5v2H4V8H2V5Zm7-2V1h1v2h2v3h-2v4h-1V6H9V3ZM3 13.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 3 13.5m7 0a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 10 13.5M10 4v1h3V4ZM3 6v1h3V6Zm1.5 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m7 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    family: {
      symbolId: "nvidia-react-gui-icons-v1-line-family",
      viewBox: "0 0 16 16",
      paths: [
        "M9 9H3.224l-1.072 4H8v1H.849l1.607-6H9zm6.151 5H8.849l1.071-4h4.16Zm-4.999-1h3.696l-.536-2h-2.624ZM12 5a2 2 0 1 1 .001 3.999A2 2 0 0 1 12 5m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0-.001 3.999A2 2 0 0 0 6 2",
      ],
    },
    fan: {
      symbolId: "nvidia-react-gui-icons-v1-line-fan",
      viewBox: "0 0 16 16",
      paths: [
        "M5 2h2.5A2.5 2.5 0 0 1 10 4.5c0 .367-.074.749-.188 1.119a6 6 0 0 1 .255-.159c.431-.254.929-.46 1.433-.46H14v2.5a2.5 2.5 0 0 1-2.5 2.5c-.367 0-.749-.074-1.12-.188q.084.126.16.255c.254.431.46.929.46 1.433V14H8.5A2.5 2.5 0 0 1 6 11.5c0-.367.074-.749.188-1.12q-.126.084-.255.16c-.431.254-.929.46-1.433.46H2V8.5A2.5 2.5 0 0 1 4.5 6c.367 0 .749.074 1.119.188a6 6 0 0 1-.159-.255C5.206 5.502 5 5.004 5 4.5Zm3.096 6.744c-.121.186-.264.421-.407.683C7.319 10.104 7 10.884 7 11.5A1.5 1.5 0 0 0 8.5 13H10v-1.5c0-.246-.106-.56-.322-.926a6.6 6.6 0 0 0-.798-1.05c-.281-.309-.563-.58-.784-.78m-.84-.648a11 11 0 0 0-.683-.407C5.895 7.319 5.116 7 4.5 7A1.5 1.5 0 0 0 3 8.5V10h1.5c.246 0 .56-.106.926-.322.358-.21.72-.498 1.05-.798.309-.281.58-.563.78-.784m1.488-.192c.186.121.421.264.683.407.677.37 1.457.689 2.073.689A1.5 1.5 0 0 0 13 7.5V6h-1.5c-.246 0-.56.106-.926.322-.358.21-.72.498-1.05.798-.309.281-.58.563-.78.784M6 3v1.5c0 .246.106.56.322.926.21.358.498.72.798 1.05.281.309.563.58.784.78.121-.186.264-.421.407-.683C8.681 5.895 9 5.116 9 4.5A1.5 1.5 0 0 0 7.5 3Z",
      ],
    },
    "fan-loud": {
      symbolId: "nvidia-react-gui-icons-v1-line-fan-loud",
      viewBox: "0 0 16 16",
      paths: [
        "M3.5 3h2a2 2 0 0 1 2 2c0 .213-.058.433-.139.639.206-.081.426-.139.639-.139h2v2a2 2 0 0 1-2 2c-.213 0-.433-.058-.639-.139.081.206.139.426.139.639v2h-2a2 2 0 0 1-2-2c0-.213.058-.433.139-.639A1.8 1.8 0 0 1 3 9.5H1v-2a2 2 0 0 1 2-2c.213 0 .433.058.639.139A1.8 1.8 0 0 1 3.5 5Zm1.656 5.731c-.18.251-.352.515-.477.758-.133.258-.179.429-.179.511a1 1 0 0 0 1 1h.999l.001-1c0-.082-.046-.253-.179-.511a6 6 0 0 0-.477-.758 13 13 0 0 0-.344-.453c-.106.134-.225.288-.344.453m1.575-.887c.251.18.515.352.758.477.258.133.429.179.511.179a1 1 0 0 0 1-1v-.999L8 6.5c-.082 0-.253.046-.511.179a6 6 0 0 0-.758.477c-.165.119-.319.238-.453.344.134.106.288.225.453.344M5.5 6.722c.106-.134.225-.288.344-.453.18-.251.352-.515.477-.758.133-.258.179-.429.179-.511a1 1 0 0 0-1-1h-.999L4.5 5c0 .082.046.253.179.511.125.243.297.507.477.758.119.165.238.319.344.453m-.778.778a13 13 0 0 0-.453-.344 6 6 0 0 0-.758-.477C3.253 6.546 3.082 6.5 3 6.5a1 1 0 0 0-1 1v.999L3 8.5c.082 0 .253-.046.511-.179.243-.125.507-.297.758-.477.165-.119.319-.238.453-.344M13 3v8h1V3zm-2 2v4h1V5z",
      ],
    },
    "fan-quiet": {
      symbolId: "nvidia-react-gui-icons-v1-line-fan-quiet",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 3h2a2 2 0 0 1 2 2c0 .213-.058.433-.139.639.206-.081.426-.139.639-.139h2v2a2 2 0 0 1-2 2c-.213 0-.433-.058-.639-.139.081.206.139.426.139.639v2h-2a2 2 0 0 1-2-2c0-.213.058-.433.139-.639A1.8 1.8 0 0 1 4 9.5H2v-2a2 2 0 0 1 2-2c.213 0 .433.058.639.139A1.8 1.8 0 0 1 4.5 5Zm1.656 5.731c-.18.251-.352.515-.477.758-.133.258-.179.429-.179.511a1 1 0 0 0 1 1h.999l.001-1c0-.082-.046-.253-.179-.511a6 6 0 0 0-.477-.758 13 13 0 0 0-.344-.453c-.106.134-.225.288-.344.453m1.575-.887c.251.18.515.352.758.477.258.133.429.179.511.179a1 1 0 0 0 1-1v-.999L9 6.5c-.082 0-.253.046-.511.179a6 6 0 0 0-.758.477c-.165.119-.319.238-.453.344.134.106.288.225.453.344M6.5 6.722c.106-.134.225-.288.344-.453.18-.251.352-.515.477-.758.133-.258.179-.429.179-.511a1 1 0 0 0-1-1h-.999L5.5 5c0 .082.046.253.179.511.125.243.297.507.477.758.119.165.238.319.344.453m-.778.778a13 13 0 0 0-.453-.344 6 6 0 0 0-.758-.477C4.253 6.546 4.082 6.5 4 6.5a1 1 0 0 0-1 1v.999L4 8.5c.082 0 .253-.046.511-.179.243-.125.507-.297.758-.477.165-.119.319-.238.453-.344M12 9V5h1v4z",
      ],
    },
    farm: {
      symbolId: "nvidia-react-gui-icons-v1-line-farm",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 6.5h-2v2h2z",
        "M7 4.5v1.258l2-.625V4.5h1v.633l3.108.972L14 9.434V14H2V4.5a2.5 2.5 0 1 1 5 0m6 8.5V9.566l-.716-2.671L9.5 6.024l-2.784.871L6 9.566V13h1V9h5v4ZM6 5H3v8h2V9.434l.892-3.329L6 6.071Zm-.085-1a1.5 1.5 0 0 0-2.83 0ZM8 12.293l.793-.793L8 10.707ZM10.293 10H8.707l.793.793ZM9.5 12.207 8.707 13h1.586Zm1.5-1.5-.793.793.793.793Z",
      ],
    },
    "fast-forward": {
      symbolId: "nvidia-react-gui-icons-v1-line-fast-forward",
      viewBox: "0 0 16 16",
      paths: [
        "M8 3.629 15.492 8 8 12.37V8.871L2 12.37V3.631l6 3.49Zm-.485 4.367L3 5.369v5.261ZM9 10.63 13.508 8 9 5.371Z",
      ],
    },
    "fast-reverse": {
      symbolId: "nvidia-react-gui-icons-v1-line-fast-reverse",
      viewBox: "0 0 16 16",
      paths: [
        "M8 3.629v3.492l6-3.49v8.739L8 8.871v3.499L.508 8Zm.485 4.367L13 10.63V5.369ZM7 5.371 2.492 8 7 10.63Z",
      ],
    },
    feedback: {
      symbolId: "nvidia-react-gui-icons-v1-line-feedback",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v10H7.71l-2.467 2.467L4.582 12H2Zm1 1v8h2.349l.412 1.536L7.296 11H13V3Zm4.5 4.5v-3h1v3Zm0 2v-1h1v1Z",
      ],
    },
    "feeling-happy": {
      symbolId: "nvidia-react-gui-icons-v1-line-feeling-happy",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3m0 8a4 4 0 0 1-2.829-1.172l.707-.707A3 3 0 0 0 8 10c.828 0 1.578-.335 2.121-.879l.707.707A4 4 0 0 1 8 11m1-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "feeling-neutral": {
      symbolId: "nvidia-react-gui-icons-v1-line-feeling-neutral",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3m3 6v1H5V9ZM9 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "feeling-sad": {
      symbolId: "nvidia-react-gui-icons-v1-line-feeling-sad",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3m0 7c-.829 0-1.578.335-2.122.879l-.707-.707A4 4 0 0 1 8 9c1.104 0 2.105.448 2.828 1.172l-.707.707A3 3 0 0 0 8 10m1-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "feeling-very-happy": {
      symbolId: "nvidia-react-gui-icons-v1-line-feeling-very-happy",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3M3.959 8h8.082l-.082.571a4 4 0 0 1-7.919 0ZM5.17 9a3.003 3.003 0 0 0 5.659 0ZM9 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "feeling-very-sad": {
      symbolId: "nvidia-react-gui-icons-v1-line-feeling-very-sad",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3m0 6a2 2 0 0 0-2 2H5a3 3 0 1 1 6 0h-1a2 2 0 0 0-2-2m-.905-2.276-1.931.518-.259-.966 1.932-.518Zm3.742.518-1.932-.518.259-.966 1.931.518Z",
      ],
    },
    "file-reel": {
      symbolId: "nvidia-react-gui-icons-v1-line-file-reel",
      viewBox: "0 0 16 16",
      paths: [
        "M7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 3m-.5 1.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m3.771 5.45a1.5 1.5 0 1 1-2.427 1.763A1.5 1.5 0 0 1 11.27 9.95m-.92 1.286a.5.5 0 1 0-.588-.81.5.5 0 0 0 .588.81m2.405-4.781a1.499 1.499 0 1 1-2.853.927 1.5 1.5 0 0 1 2.853-.927m-1.581-.012a.5.5 0 1 0 .31.952.5.5 0 0 0-.31-.952m-4.018 5.27A1.5 1.5 0 1 1 4.729 9.95a1.5 1.5 0 0 1 2.427 1.763m-1.507-.477a.5.5 0 1 0 .587-.808.5.5 0 0 0-.587.808M3.245 6.455a1.5 1.5 0 1 1 2.853.926 1.5 1.5 0 0 1-2.853-.926m1.272.939a.5.5 0 1 0 .309-.951.5.5 0 0 0-.309.951",
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2",
      ],
    },
    film: {
      symbolId: "nvidia-react-gui-icons-v1-line-film",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v13H2Zm3 1v5h6V3Zm6 11V9H5v5ZM3 3v1h1V3Zm9 0v1h1V3ZM3 6h1V5H3Zm10-1h-1v1h1ZM3 8h1V7H3Zm10-1h-1v1h1ZM3 10h1V9H3Zm10-1h-1v1h1ZM3 12h1v-1H3Zm10-1h-1v1h1Zm-9 3v-1H3v1Zm9-1h-1v1h1Z",
      ],
    },
    "film-add": {
      symbolId: "nvidia-react-gui-icons-v1-line-film-add",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v5h-3V3H5v5h4v1H5v5h4v1H2Zm9 9V8.5h1V11h2.5v1H12v2.5h-1V12H8.5v-1ZM3 4h1V3H3Zm9-1v1h1V3ZM3 6h1V5H3Zm10-1h-1v1h1ZM3 8h1V7H3Zm0 2h1V9H3Zm0 2h1v-1H3Zm1 2v-1H3v1Z",
      ],
    },
    "film-collection": {
      symbolId: "nvidia-react-gui-icons-v1-line-film-collection",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h10v9H2Zm11 10V5h1v9H4v-1ZM9 4H5v3h4Zm0 4H5v3h4ZM4 4H3v1h1Zm6 1h1V4h-1ZM4 6H3v1h1Zm6 1h1V6h-1ZM4 8H3v1h1Zm6 1h1V8h-1Zm-6 1H3v1h1Zm6 1h1v-1h-1Z",
      ],
    },
    filter: {
      symbolId: "nvidia-react-gui-icons-v1-line-filter",
      viewBox: "0 0 16 16",
      paths: ["M13 6H3V5h10Zm-2 3H5V8h6Zm-2 3H7v-1h2Z"],
    },
    fingerprint: {
      symbolId: "nvidia-react-gui-icons-v1-line-fingerprint",
      viewBox: "0 0 16 16",
      paths: [
        "M3.001 8.502a4.5 4.5 0 1 1 9.003 0A9.46 9.46 0 0 1 10.253 14l-.815-.579a8.46 8.46 0 0 0 1.566-4.919 3.502 3.502 0 0 0-7.003 0c0 .829-.672 1.501-1.501 1.501H2v-1h.5a.5.5 0 0 0 .501-.501M7.502 3a5.5 5.5 0 0 0-4.764 2.75l-.866-.5a6.502 6.502 0 1 1 10.972 6.961l-.821-.571A5.503 5.503 0 0 0 7.502 3m0 4.002a1.5 1.5 0 0 0-1.5 1.5c0 1.7-1.211 3.116-2.817 3.435l-.195-.981a2.5 2.5 0 0 0 2.012-2.454 2.5 2.5 0 1 1 5.001 0 7.5 7.5 0 0 1-2.733 5.793l-.636-.772a6.49 6.49 0 0 0 2.369-5.021 1.5 1.5 0 0 0-1.501-1.5m.5 1.5a5.5 5.5 0 0 1-3.097 4.95l-.437-.899a4.5 4.5 0 0 0 2.534-4.051Z",
      ],
    },
    fire: {
      symbolId: "nvidia-react-gui-icons-v1-line-fire",
      viewBox: "0 0 16 16",
      paths: [
        "m7 1.654.741.408C9.101 2.81 9.75 3.83 9.75 4.891c0 1.033-.619 1.956-1.473 2.525-.666.444-.777.808-.777 1.021 0 .249.147.503.353.709.135.135.371.229.647.229s.511-.094.646-.229c.319-.319.349-.596.401-1.097l.018-.167c.033-.298.087-.65.246-1.035.161-.387.419-.784.835-1.201l.255-.254.322.161c.648.324 1.089.943 1.364 1.614.279.678.413 1.462.413 2.208C13 11.969 10.719 14 8 14c-2.72 0-5-2.031-5-4.625 0-1.064.277-1.883.702-2.555.418-.659.969-1.158 1.472-1.59l.157-.134C6.299 4.267 7 3.667 7 2.5Zm.894 1.705c-.289 1.119-1.12 1.825-1.86 2.452l-.208.178c-.497.427-.947.843-1.279 1.366C4.223 7.867 4 8.501 4 9.375 4 11.337 5.749 13 8 13s4-1.663 4-3.625c0-.635-.116-1.288-.338-1.828-.157-.383-.356-.683-.582-.889-.167.21-.273.4-.345.573a2.7 2.7 0 0 0-.176.762l-.016.162c-.048.494-.108 1.117-.69 1.698-.365.366-.879.522-1.353.522s-.989-.156-1.354-.522c-.294-.294-.646-.789-.646-1.416 0-.661.388-1.297 1.222-1.853.646-.431 1.028-1.071 1.028-1.693 0-.466-.215-1.015-.856-1.532",
      ],
    },
    firecracker: {
      symbolId: "nvidia-react-gui-icons-v1-line-firecracker",
      viewBox: "0 0 16 16",
      paths: [
        "M12 1.5v1h-1v-1zm1.354 1.854 1-1-.708-.708-1 1zm-1 1L10.207 6.5l1 1L4.5 14.207 1.793 11.5 8.5 4.793l1 1 2.146-2.147ZM4.5 12.793 9.793 7.5 8.5 6.207 3.207 11.5ZM13.5 5h1V4h-1z",
      ],
    },
    firewall: {
      symbolId: "nvidia-react-gui-icons-v1-line-firewall",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h3v1h1V2h4v1h1V2h3v8H8.5v2H10v1h4v1h-4v1H6v-1H2v-1h4v-1h1.5v-2H2Zm10 1v1H9V3H7v1H4V3H3v2h10V3ZM3 7h4.5V6H3Zm10-1H8.5v1H13Zm-3 3V8H6v1ZM5 9V8H3v1Zm8-1h-2v1h2Zm-6 6h2v-1H7Z",
      ],
    },
    "firewall-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-firewall-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708L13.293 14H10v1H6v-1H2v-1h4v-1h1.5v-2H2V2.707L.646 1.354ZM9.293 10H8.5v2H10v1h2.293Zm-4-4H3v1h3.293ZM5 9V8H3v1Zm2 5h2v-1H7Zm.293-6H6v1h2.293ZM3 3.707V5h1.293Z",
        "m12.828 10-1-1H13V8h-2.172l-1-1H13V6H8.828l-1-1H13V3h-1v1H9V3H7v1h-.172L6 3.172V2h4v1h1V2h3v8Z",
      ],
    },
    firework: {
      symbolId: "nvidia-react-gui-icons-v1-line-firework",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 14v-1h1v1zm0-2v-1h1v1zM3 11v-1h1v1zm4.5-1V9h1v1zm0-2V7h1v1zm-1 0h-1V7h1zM11 2h-1V1h1zm-.5 6h-1V7h1zm2 0h-1V7h1zm-5-2V5h1v1zm1.439-.146.707-.708.707.708-.707.707Zm-2.586.707-.707-.707.707-.708.707.708ZM11 4h1v1h-1ZM4.854 5.061l-.708-.707.708-.708.707.708ZM2.5 4h-1V3h1ZM13 4h1v1h-1ZM3.439 8.354l.707-.708.707.708-.707.707zm4.207-5.208.707-.707.708.707-.708.708zm6.914 6.208-.707.707-.707-.707.707-.708z",
      ],
    },
    fit: {
      symbolId: "nvidia-react-gui-icons-v1-line-fit",
      viewBox: "0 0 16 16",
      paths: [
        "M5.002 10.291V8.997h-1v2.999l3.001.001v-1H5.711l5.291-5.291V7h1V3.999H9v1h1.295z",
        "M2 2h12v12H2Zm1 1v10h10V3Z",
      ],
    },
    "fit-to-page": {
      symbolId: "nvidia-react-gui-icons-v1-line-fit-to-page",
      viewBox: "0 0 16 16",
      paths: [
        "m8.295 7.999-2.294 2.293V8.997h-1v3h3.001l.001-1H6.711l2.291-2.291V10h1V6.999H7v1z",
        "M9.707 2 13 5.293V14H3V2ZM4 13h8V6H9V3H4Zm7.293-8L10 3.707V5Z",
      ],
    },
    flag: {
      symbolId: "nvidia-react-gui-icons-v1-line-flag",
      viewBox: "0 0 16 16",
      paths: [
        "M3 2h1v1h5.384l.535 2H14v7H9.152l-.536-2H4v4H3Zm1 7h5.384l.535 2H13V6H9.152l-.536-2H4Z",
      ],
    },
    "flight-stick": {
      symbolId: "nvidia-react-gui-icons-v1-line-flight-stick",
      viewBox: "0 0 16 16",
      paths: [
        "m7.04.882 2.591 1.496.517 4.655-.644 2.611.839.225a2 2 0 0 1 2.975.797l1.682.45v1.591L13.707 14H2.293L1 12.707v-1.591l5.685-1.523.574-2.299-.995-.498-.83-2.905-1.592-.531V2.161Zm.124 9.618L2 11.884v.409l.707.707h10.586l.707-.707v-.409L8.836 10.5Zm1.346-1 .625-2.533-.442-3.975L6.96 1.991l-1.847.739 1.137.379.854 2.99 1.32.66L7.739 9.5Z",
      ],
    },
    floppy: {
      symbolId: "nvidia-react-gui-icons-v1-line-floppy",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h9.977L14 4.312V14H2Zm1 1v10h1V8h8v5h1V4.688L11.523 3H11v4H5V3Zm8 10V9H5v4ZM6 3v3h4V3Z",
      ],
    },
    flower: {
      symbolId: "nvidia-react-gui-icons-v1-line-flower",
      viewBox: "0 0 16 16",
      paths: [
        "M6 4a2 2 0 0 1 4 0c0 .183-.043.396-.096.598l-.058.204q.076-.08.148-.151a2.4 2.4 0 0 1 .47-.383 2 2 0 1 1 2 3.464c-.159.092-.365.16-.567.216L11.691 8q.108.025.206.052c.202.055.408.124.567.216a2 2 0 0 1-2 3.464 2.4 2.4 0 0 1-.47-.383 4 4 0 0 1-.148-.152l.058.205c.053.202.096.415.096.598a2 2 0 1 1-4 0c0-.183.044-.396.097-.598q.026-.099.057-.204-.075.08-.148.151a2.4 2.4 0 0 1-.47.383 2 2 0 0 1-2-3.464c.159-.092.365-.16.567-.216L4.309 8l-.206-.052a2.5 2.5 0 0 1-.567-.216 2 2 0 0 1 2-3.464c.159.091.322.236.47.383a4 4 0 0 1 .148.152l-.057-.205A2.5 2.5 0 0 1 6 4m1.673 5.973c-.149.361-.295.731-.414 1.066a8 8 0 0 0-.195.617A1.7 1.7 0 0 0 7 12a1 1 0 0 0 2 0c0-.049-.015-.16-.064-.344a7 7 0 0 0-.195-.617 24 24 0 0 0-.414-1.066 2 2 0 0 1-.654 0m.654-3.946c.149-.361.295-.731.414-1.066a7 7 0 0 0 .195-.617C8.985 4.16 9 4.049 9 4a1 1 0 0 0-2 0c0 .049.016.16.064.344.046.175.113.384.195.617.119.335.265.705.414 1.066a2 2 0 0 1 .654 0m1.546 1.269c.386-.051.78-.109 1.129-.174.243-.045.458-.092.632-.139.183-.05.287-.092.33-.117a1 1 0 0 0-1-1.732 1.6 1.6 0 0 0-.266.227c-.129.127-.277.29-.437.477-.231.271-.478.583-.716.892q.21.254.328.566M9.545 9.27c.238.309.485.621.716.891.16.188.308.351.437.478.135.134.223.202.266.227a1 1 0 0 0 1-1.732 1.6 1.6 0 0 0-.33-.117 8 8 0 0 0-.632-.139 21 21 0 0 0-1.129-.174 2 2 0 0 1-.328.566m-3.418-.566c-.386.051-.779.109-1.129.174a8 8 0 0 0-.632.139c-.183.05-.287.092-.33.117a1 1 0 0 0 1 1.732c.043-.024.131-.093.267-.227.128-.127.276-.29.436-.477.231-.271.479-.583.716-.892a2 2 0 0 1-.328-.566m.328-1.974a22 22 0 0 0-.716-.891 8 8 0 0 0-.436-.478 1.6 1.6 0 0 0-.267-.227 1 1 0 0 0-1 1.732c.043.025.147.067.33.117.174.048.389.094.632.139.35.065.743.124 1.129.174a2 2 0 0 1 .328-.566M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    fog: {
      symbolId: "nvidia-react-gui-icons-v1-line-fog",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a3.5 3.5 0 0 0-3.5 3.5v.036l.005.428-.422.071A2.5 2.5 0 0 0 2 8.5H1a3.5 3.5 0 0 1 2.514-3.359 4.501 4.501 0 0 1 8.625-1.409A4.25 4.25 0 0 1 15 7.75h-1a3.25 3.25 0 0 0-2.373-3.13l-.247-.07-.088-.242A3.5 3.5 0 0 0 8 2m-.996 10.561a3.5 3.5 0 0 0-2.252-.302l-3.654.731-.196-.98 3.654-.731c.981-.196 2-.06 2.895.387l1.545.773a3.5 3.5 0 0 0 2.252.302l3.654-.731.196.98-3.654.731c-.981.196-2 .06-2.895-.388z",
        "M4.752 10.259a3.5 3.5 0 0 1 2.252.302l1.545.772a4.5 4.5 0 0 0 2.895.388l3.654-.731-.196-.98-3.654.731a3.5 3.5 0 0 1-2.252-.302l-1.545-.772a4.5 4.5 0 0 0-2.895-.388l-3.654.731.196.98z",
      ],
    },
    "folder-closed": {
      symbolId: "nvidia-react-gui-icons-v1-line-folder-closed",
      viewBox: "0 0 16 16",
      paths: ["m6.884 3 .536 2H14v8H2V3ZM3 4v8h10V6H6.652l-.536-2Z"],
    },
    "folder-open": {
      symbolId: "nvidia-react-gui-icons-v1-line-folder-open",
      viewBox: "0 0 16 16",
      paths: [
        "m5.884 3 .536 2H13v2h2.239l-2.402 6H1.001L1 3Zm-3.646 9h9.922l1.601-4H3.839ZM12 7V6H5.652l-.536-2H2l.001 5.9L3.162 7Z",
      ],
    },
    food: {
      symbolId: "nvidia-react-gui-icons-v1-line-food",
      viewBox: "0 0 16 16",
      paths: [
        "m11.616 6 1.107-4.129.966.258L12.651 6h3.108l-1.875 7h-3.768L8.241 6ZM9.544 7l1.34 5h2.232l1.34-5ZM2.652 8h4.696l.669 2.5-.669 2.5H2.652l-.67-2.5Zm4.196 3H3.151l.268 1H6.58Zm-3.697-1h3.697L6.58 9H3.419Z",
      ],
    },
    footprint: {
      symbolId: "nvidia-react-gui-icons-v1-line-footprint",
      viewBox: "0 0 16 16",
      paths: [
        "M7.999 2h.002c.278 0 .784 0 1.352.406.547.39 1.094 1.114 1.612 2.408.554 1.386.409 2.38.143 3.377q-.069.257-.143.512c-.228.802-.465 1.63-.465 2.797 0 1.07-.243 1.934-.688 2.544-.453.622-1.1.956-1.812.956s-1.359-.334-1.812-.956c-.444-.61-.688-1.474-.688-2.544 0-1.167-.236-1.995-.465-2.797q-.074-.255-.143-.512c-.266-.997-.41-1.991.144-3.377C5.554 3.52 6.1 2.796 6.647 2.406 7.215 2 7.722 2 7.999 2m-.771 1.219c-.328.235-.781.761-1.264 1.967-.445 1.114-.34 1.87-.106 2.748q.061.224.131.467c.202.703.439 1.529.497 2.599h3.028c.058-1.07.296-1.897.497-2.599q.07-.242.131-.467c.234-.878.34-1.634-.106-2.748C9.554 3.98 9.1 3.454 8.772 3.219 8.466 3.001 8.223 3 8 3s-.465.001-.772.219M9.478 12H6.522c.062.663.245 1.14.475 1.456.275.378.629.544 1.003.544.375 0 .728-.166 1.004-.544.229-.316.413-.792.474-1.456",
      ],
    },
    fork: {
      symbolId: "nvidia-react-gui-icons-v1-line-fork",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 2h-1v5.884l2 .536V14h1V8.42l2-.536V2h-1v5.116l-1 .268V2h-1v5.384l-1-.268z",
      ],
    },
    forward: {
      symbolId: "nvidia-react-gui-icons-v1-line-forward",
      viewBox: "0 0 16 16",
      paths: [
        "m13.207 5.5-2.854-2.854-.707.708L11.293 5H2.678l2.045 7.629.966-.258L3.982 6h7.311L9.646 7.646l.707.708z",
      ],
    },
    "forward-10": {
      symbolId: "nvidia-react-gui-icons-v1-line-forward-10",
      viewBox: "0 0 16 16",
      paths: [
        "M12 8a5 5 0 1 0-5 5v1a6 6 0 1 1 5.898-7.105l1.248-1.249.708.708L12 9.207z",
        "M4 5h1.01v1.125H5v3.75h.01V11H4zm2 1.125C6 5.422 6.649 5 7.25 5h1.5C9.351 5 10 5.422 10 6.125v3.75C10 10.578 9.351 11 8.75 11h-1.5C6.649 11 6 10.578 6 9.875Zm1.04-.058C7 6.1 7 6.123 7 6.125v3.75c0 .002 0 .025.04.058a.33.33 0 0 0 .21.067h1.5a.33.33 0 0 0 .21-.067C9 9.9 9 9.877 9 9.875v-3.75c0-.002 0-.025-.04-.058A.33.33 0 0 0 8.75 6h-1.5a.33.33 0 0 0-.21.067",
      ],
    },
    founders: {
      symbolId: "nvidia-react-gui-icons-v1-line-founders",
      viewBox: "0 0 16 16",
      paths: [
        "m8.001 1.072 6 3.464v6.928l-6 3.464-6-3.464V4.536Zm-5 4.041v5.774l5 2.887 5-2.887V5.113l-5-2.887Zm4.999 0 2.5 1.444v2.886L8 10.887 5.5 9.443V6.557ZM6.5 7.134v1.732l1.5.866 1.5-.866V7.134L8 6.268Z",
      ],
    },
    "founders-tier-1": {
      symbolId: "nvidia-react-gui-icons-v1-line-founders-tier-1",
      viewBox: "0 0 16 16",
      paths: [
        "M3.001 5.113v6.062h-1v-6.64l6-3.464 5.75 3.32-.5.866-5.25-3.031Zm10.75 3.608-8 4.619-.5-.866 8-4.619ZM5.5 6.557 8 5.113l2.25 1.299-.5.866L8 6.268l-1.5.866v2.021h-1Zm2.251 7.36 5.5-3.175.5.866-5.5 3.175Z",
      ],
    },
    "founders-tier-2": {
      symbolId: "nvidia-react-gui-icons-v1-line-founders-tier-2",
      viewBox: "0 0 16 16",
      paths: [
        "m8.001 1.071 6.5 3.753-12.5 7.217V4.535Zm-5 4.042v5.196l9.5-5.485-4.5-2.598Zm10.75 3.608-8 4.619-.5-.866 8-4.619Zm-6 5.196 5.5-3.175.5.866-5.5 3.175Z",
      ],
    },
    "founders-tier-3": {
      symbolId: "nvidia-react-gui-icons-v1-line-founders-tier-3",
      viewBox: "0 0 16 16",
      paths: [
        "m2.001 4.536 6-3.464 6.001 3.464v3.253L4.818 13.09l-2.817-1.626Zm1 6.351 1.817 1.049 8.184-4.725V5.113L8.001 2.226l-5 2.887Zm4.75 3.031 5.501-3.176.5.866-5.501 3.176Z",
      ],
    },
    fps: {
      symbolId: "nvidia-react-gui-icons-v1-line-fps",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2Zm1 1v6h10V4Zm4 1h1a1.5 1.5 0 0 1 0 3v1H7ZM4 5h2.5v1H5v.5h1v1H5V9H4Zm7.114 1.098c-.089.049-.114.13-.114.152 0 .095.024.143.3.35l.029.021c.234.175.671.5.671 1.129 0 .388-.225.807-.636 1.03-.433.236-.987.218-1.588-.083l.448-.894c.399.199.595.136.662.099.089-.049.114-.13.114-.152 0-.095-.024-.143-.3-.35l-.029-.021c-.234-.175-.671-.5-.671-1.129 0-.388.225-.807.636-1.03.433-.236.987-.218 1.588.083l-.448.894c-.399-.199-.595-.136-.662-.099M8 7a.5.5 0 0 0 0-1Zm0 4.5-.134.5h.268Z",
      ],
    },
    freehand: {
      symbolId: "nvidia-react-gui-icons-v1-line-freehand",
      viewBox: "0 0 16 16",
      paths: [
        "m12.736 5.529.006.006-.707.707c-.528-.528-1.483-1.482-2.388-2.215-.456-.37-.874-.661-1.201-.818a1.4 1.4 0 0 0-.27-.102q.006.03.019.071.088.285.443.794c.472.669 1.202 1.482 1.966 2.322l.104.115c.717.789 1.451 1.598 1.95 2.28.26.354.483.71.6 1.035.11.306.185.768-.161 1.115-.317.316-.738.303-1.054.225-.323-.081-.671-.257-1.014-.468-.692-.424-1.503-1.077-2.273-1.715l-.475-.395c-.608-.506-1.175-.98-1.65-1.326a6 6 0 0 0-.377-.259q.042.082.096.178c.272.48.696 1.075 1.143 1.701l.012.017c.433.606.887 1.242 1.188 1.773.15.266.281.539.344.789.058.225.102.608-.183.894-.245.244-.567.275-.811.254a2.8 2.8 0 0 1-.771-.21c-.512-.207-1.105-.549-1.655-.883l-.619-.382-.355-.22.192.257.01.014c.258.343.534.711.723 1.018.094.153.185.321.237.481.026.08.052.187.048.307a.63.63 0 0 1-.182.425.72.72 0 0 1-.559.202 1.3 1.3 0 0 1-.415-.105c-.223-.092-.471-.241-.677-.364L4 13.035q-.207-.126-.367-.214.03.135.083.29a6 6 0 0 0 .257.634l.019.04.005.01.001.002-.447.224-.448.223-.001-.002-.002-.004-.007-.014-.024-.051-.081-.178a7 7 0 0 1-.221-.568 3.3 3.3 0 0 1-.162-.704c-.018-.203-.02-.565.238-.824a.72.72 0 0 1 .56-.202c.155.009.3.057.415.104.167.069.347.169.514.267l-.297-.399-.011-.014c-.257-.343-.533-.711-.722-1.018a2.4 2.4 0 0 1-.238-.481.9.9 0 0 1-.048-.306.63.63 0 0 1 .181-.426.63.63 0 0 1 .501-.171c.115.01.225.044.312.077.18.068.391.179.606.301.272.156.598.358.936.568q.292.182.585.361c.549.334 1.081.636 1.511.811q.238.095.385.124a3 3 0 0 0-.211-.433c-.271-.48-.695-1.074-1.143-1.701l-.012-.017c-.433-.606-.887-1.242-1.187-1.773-.15-.265-.282-.538-.345-.789-.057-.225-.102-.608.183-.893a.73.73 0 0 1 .57-.203c.162.01.317.063.449.122.266.117.571.316.884.544.503.368 1.105.869 1.715 1.378l.458.381c.777.644 1.535 1.251 2.158 1.633.314.193.559.306.732.349l.047.01-.014-.04q-.099-.281-.466-.783c-.467-.639-1.169-1.412-1.904-2.221l-.084-.092c-.751-.827-1.528-1.689-2.043-2.42-.254-.362-.471-.729-.579-1.068-.104-.332-.143-.784.199-1.126a.93.93 0 0 1 .751-.254c.234.019.47.104.687.208.436.209.926.56 1.398.943.95.768 1.936 1.755 2.46 2.279M8.169 3.022l-.002.01zm4.181 7.183.001-.01zm.069-.094.007-.002zm-4.338 1.568v-.009zM6.092 6.463v.008z",
      ],
    },
    "fuel-can": {
      symbolId: "nvidia-react-gui-icons-v1-line-fuel-can",
      viewBox: "0 0 16 16",
      paths: [
        "m7.354 10.354-1 1-.708-.708 1-1zm-1-3.708 1 1-.708.708-1-1zm4 4-1-1-.708.708 1 1zm-1-2.292 1-1-.708-.708-1 1z",
        "M12.259 3.448 11.707 4l.5.5-1 1 .793.793V13H4V4.293L5.293 3h3.414l.793.793 1-1 .5.5.741-.741 2.13-.571.258.966ZM9 4.707V6H5v6h6V6.707ZM5.707 4 5 4.707V5h3V4Zm4.793.207-.293.293.293.293.293-.293Z",
      ],
    },
    "fuel-pump": {
      symbolId: "nvidia-react-gui-icons-v1-line-fuel-pump",
      viewBox: "0 0 16 16",
      paths: [
        "M8 6H5V5h3z",
        "M3 3h7v8h2.293l.707-.707V7h-1V4.707l-.854-.853.708-.708L14 5.293v5.414L12.707 12H10v2H3Zm6 5H4v5h5ZM4 4v3h5V4Z",
      ],
    },
    fullscreen: {
      symbolId: "nvidia-react-gui-icons-v1-line-fullscreen",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2v1H3.707l3.647 3.646-.708.708L3 3.707V6H2V2zm6.293 1H10V2h4v4h-1V3.707L9.354 7.354l-.708-.708zM3 12.293V10H2v4h4v-1H3.707l3.647-3.646-.708-.708zm5.646-2.939L12.293 13H10v1h4v-4h-1v2.293L9.354 8.646z",
      ],
    },
    "fullscreen-exit": {
      symbolId: "nvidia-react-gui-icons-v1-line-fullscreen-exit",
      viewBox: "0 0 16 16",
      paths: [
        "m.646 1.354.708-.708L5 4.293V2h1v4H2V5h2.293ZM10 2h1v2.293L14.646.646l.708.708L11.707 5H14v1h-4Zm-8 8h4v4H5v-2.293l-3.646 3.647-.708-.708L4.293 11H2Zm8 0h4v1h-2.293l3.647 3.646-.708.708L11 11.707V14h-1Z",
      ],
    },
    function: {
      symbolId: "nvidia-react-gui-icons-v1-line-function",
      viewBox: "0 0 16 16",
      paths: [
        "M9.211 4.025a.727.727 0 0 0-.891.514L7.661 7H8.5v1H7.393l-.997 3.719A1.728 1.728 0 0 1 3 11.272h1a.729.729 0 0 0 1.43.188L6.357 8H5.5V7h1.125l.729-2.72a1.728 1.728 0 0 1 3.396.447h-1a.73.73 0 0 0-.539-.702M10.293 11 8.646 9.354l.708-.708L11 10.293l1.646-1.647.708.708L11.707 11l1.647 1.646-.708.708L11 11.707l-1.646 1.647-.708-.708Z",
      ],
    },
    "gallery-strip": {
      symbolId: "nvidia-react-gui-icons-v1-line-gallery-strip",
      viewBox: "0 0 16 16",
      paths: [
        "M4 2h8v8H4Zm1 1v6h6V3Zm-4 9h2v2H1Zm3 0h2v2H4Zm3 0h2v2H7Zm3 0h2v2h-2Zm3 0h2v2h-2Z",
      ],
    },
    gamepad: {
      symbolId: "nvidia-react-gui-icons-v1-line-gamepad",
      viewBox: "0 0 16 16",
      paths: [
        "m6 3.312 1.565.42h.87l1.566-.42 2.894.776 1.938 6.162-.638 2.38-1.626.665-1.441-.387-.536-2L8 10.214l-2.592.694-.536 2-1.441.387-1.626-.665-.638-2.38 1.938-6.162Zm0 1.036-2.106.564-1.685 5.361.434 1.619.854.349.559-.149.536-2L8 9.179l3.409.913.535 2 .559.149.855-.349.434-1.619-1.686-5.361-2.105-.564-1.435.384H7.434ZM9 7.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 7.5M5 7V6h1v1h1v1H6v1H5V8H4V7Zm5.5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "gamepad-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-gamepad-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-1.064-1.065-.013.006-1.441-.387-.393-1.466-.677-.677L8 10.214l-2.592.694-.536 2-1.441.387-1.626-.665-.638-2.38 1.938-6.162.218-.058-1.677-1.676Zm1.785 3.2-.245.066-1.685 5.361.434 1.619.854.349.559-.149.536-2L8 9.179l.644.172L7 7.707V8H6v1H5V8H4V7h1V6h.293ZM6 6.707V7h.293Zm8.833 3.543-.371 1.384-.816-.817.145-.544-1.685-5.361-2.105-.564-1.435.384H7.56L6.193 3.364l1.373.368h.869l1.566-.42 2.894.776z",
        "M12 7.5c0 .458-.205.868-.528 1.143l-.715-.714a.5.5 0 1 0-.686-.686l-.714-.714A1.5 1.5 0 0 1 12 7.5",
      ],
    },
    "gamepad-start": {
      symbolId: "nvidia-react-gui-icons-v1-line-gamepad-start",
      viewBox: "0 0 16 16",
      paths: [
        "M7.566 2.732 6 2.312l-2.895.776L1.167 9.25l.638 2.38 1.626.664 1.441-.386.536-2L8 9.214l.871.233.259-.966L8 8.179l-3.408.913-.536 2-.559.149-.854-.349-.434-1.619 1.685-5.361L6 3.348l1.434.384h1.132l1.435-.384 2.105.564 1.685 5.361-.13.487.966.258.206-.768-1.938-6.162-2.894-.776-1.566.42z",
        "M5 5v1H4v1h1v1h1V7h1V6H6V5zm5.5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 5M10 6.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m4.921 5L10 14.37V8.629Zm-1.985 0L11 10.37v2.259Z",
      ],
    },
    generate: {
      symbolId: "nvidia-react-gui-icons-v1-line-generate",
      viewBox: "0 0 16 16",
      paths: [
        "M4 1a2 2 0 0 1 1.934 2.501l1.118.621a2 2 0 0 1 3.382 1.879l1.118.622a2 2 0 1 1-.001 2.752l-1.118.621a2 2 0 0 1-3.382 1.879l-1.117.622a2 2 0 1 1-.488-.875L6.565 11a2 2 0 0 1-.065-.5q.002-.261.065-.503l-1.117-.621a2 2 0 1 1-.001-2.754l1.118-.621A2 2 0 0 1 6.5 5.5q.002-.261.065-.503l-1.118-.621A2 2 0 0 1 4 5a2 2 0 1 1 0-4m5.947 5.876a1.99 1.99 0 0 1-2.896 0l-1.117.621C5.975 7.658 6 7.826 6 8c0 .173-.025.341-.066.501l1.118.621a1.99 1.99 0 0 1 2.894 0l1.119-.621A2 2 0 0 1 11 8q.002-.261.065-.503ZM13 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-9 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.5-2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    gift: {
      symbolId: "nvidia-react-gui-icons-v1-line-gift",
      viewBox: "0 0 16 16",
      paths: [
        "M4.268 4A2 2 0 0 1 6 1c.513 0 1.165.157 1.681.727q.177.193.319.442.142-.249.319-.442C8.835 1.157 9.487 1 10 1a2 2 0 0 1 1.732 3H14.5v3H14v7H2V7h-.5V4ZM6 7H3v6h10V7h-3v3.934L8 9.601l-2 1.333Zm1-2v4.066l1-.667 1 .667V5Zm3-1a1 1 0 0 0 0-2c-.315 0-.663.093-.94.398-.24.265-.476.744-.542 1.602ZM5 3a1 1 0 0 0 1 1h1.482c-.066-.858-.302-1.337-.542-1.602A1.23 1.23 0 0 0 6 2a1 1 0 0 0-1 1m1 2H2.5v1H6Zm4 1h3.5V5H10Z",
      ],
    },
    government: {
      symbolId: "nvidia-react-gui-icons-v1-line-government",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 1H10v2H8.5v1.031A4 4 0 0 1 12 8v3h1v2h1v1H2v-1h1v-2h1V8a4 4 0 0 1 3.5-3.969ZM8 5a3 3 0 0 0-2.959 2.5h5.917A3 3 0 0 0 8 5m4 7H4v1h8ZM5 8.5V11h.75V8.5Zm1.75 0V11h.75V8.5Zm1.75 0V11h.75V8.5Zm1.75 0V11H11V8.5Z",
      ],
    },
    gpu: {
      symbolId: "nvidia-react-gui-icons-v1-line-gpu",
      viewBox: "0 0 16 16",
      paths: [
        "M1 1h14v14H1Zm1 1v4h.5v4H2v4h4v-.5h4v.5h4v-4h-.5V6h.5V2h-4v.5H6V2Zm2 2h2v2H4Zm3 0h2v2H7Zm3 0h2v2h-2ZM4 7h2v2H4Zm3 0h2v2H7Zm3 0h2v2h-2Zm-6 3h2v2H4Zm3 0h2v2H7Zm3 0h2v2h-2Z",
      ],
    },
    "gpu-card": {
      symbolId: "nvidia-react-gui-icons-v1-line-gpu-card",
      viewBox: "0 0 16 16",
      paths: [
        "M2 5H1V4h2v1h11v6H9v1H4v-1H3v1H2Zm1 1v4h2v1h3v-1h5V6Zm6.5 2a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9.5 8m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "gpu-card-multi": {
      symbolId: "nvidia-react-gui-icons-v1-line-gpu-card-multi",
      viewBox: "0 0 16 16",
      paths: [
        "M1 3H0V2h2v1h11v6H8v1H3V9H2v1H1Zm1 1v4h2v1h3V8h5V4Zm12 1.5h1V11h-5v1H5v-1h4v-1h5ZM8.5 6a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 8.5 6m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "gpu-card-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-gpu-card-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L10.293 11H9v1H4v-1H3v1H2V5H1V4h2v1h1.293L1.646 2.354ZM5.293 6H3v4h2v1h3v-1h1.293ZM14 11h-.172l-1-1H13V6H8.828l-1-1H14z",
        "M12.5 8c0 .458-.205.868-.529 1.143l-.714-.714a.5.5 0 1 0-.686-.686l-.714-.714A1.5 1.5 0 0 1 12.5 8",
      ],
    },
    "gpu-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-gpu-off",
      viewBox: "0 0 16 16",
      paths: [
        "M4 7h2v2H4Zm0 3h2v2H4Zm3 0h2v2H7Z",
        "m.854.146 15 15-.708.708-.853-.854H1V1.707L.146.854ZM2 2.707V6h.5v4H2v4h4v-.5h4v.5h3.293l-2-2H10v-1.293L8.293 9H7V7.707L5.293 6H4V4.707Z",
        "m15 12.172-1-1V10h-.5V6h.5V2h-4v.5H6V2H4.828l-1-1H15Z",
        "M12 9h-.172L10 7.172V7h2ZM9 6h-.172L7 4.172V4h2Zm1-2h2v2h-2Z",
      ],
    },
    "gpu-sync": {
      symbolId: "nvidia-react-gui-icons-v1-line-gpu-sync",
      viewBox: "0 0 16 16",
      paths: [
        "M15 11a3 3 0 0 1-3 3h-.293l.647.646-.708.708L9.793 13.5l1.853-1.854.708.708-.647.646H12a2 2 0 0 0 2-2zm-.793-2.5-1.853 1.854-.708-.708.647-.646H12a2 2 0 0 0-2 2H9a3 3 0 0 1 3-3h.293l-.647-.646.708-.708zM3 3h11v2h-1V4H3v4h2v1h2v1H4V9H3v1H2V3H1V2h2z",
      ],
    },
    graduate: {
      symbolId: "nvidia-react-gui-icons-v1-line-graduate",
      viewBox: "0 0 16 16",
      paths: [
        "m14.5 6.175-.5.289V12h-1V7.041l-1 .578V10c0 .894-.508 1.656-1.234 2.175C10.038 12.694 9.059 13 8 13s-2.038-.306-2.766-.825C4.508 11.656 4 10.894 4 10V7.619L1.5 6.175 8 2.423Zm-11 0L8 8.774l4.5-2.599L8 3.577ZM5 10c0 .487.275.975.816 1.361.539.385 1.31.639 2.184.639s1.645-.254 2.184-.639c.54-.386.816-.874.816-1.361V8.196L8 9.928 5 8.196Z",
      ],
    },
    "graph-node": {
      symbolId: "nvidia-react-gui-icons-v1-line-graph-node",
      viewBox: "0 0 16 16",
      paths: [
        "M3 3h10v2.05a2.502 2.502 0 0 1 0 4.9V13H3V9h.5a1.5 1.5 0 0 0 0-3H3Zm9 6.95a2.502 2.502 0 0 1 0-4.9V4H4v1.05a2.502 2.502 0 0 1 0 4.9V12h8ZM12.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12.5 6",
      ],
    },
    "graph-node-connect": {
      symbolId: "nvidia-react-gui-icons-v1-line-graph-node-connect",
      viewBox: "0 0 16 16",
      paths: [
        "M2.5 4V3H7v2.05c.98.199 1.751.97 1.95 1.95h4.343l-1.647-1.646.708-.708L15.207 7.5l-2.853 2.854-.708-.708L13.293 8H8.95A2.5 2.5 0 0 1 7 9.95V13H2.5v-1H6V9.95a2.502 2.502 0 0 1 0-4.9V4ZM5 7.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 5 7.5",
      ],
    },
    "graph-node-delete": {
      symbolId: "nvidia-react-gui-icons-v1-line-graph-node-delete",
      viewBox: "0 0 16 16",
      paths: [
        "M6 4H2.5V3H7v2.05a2.502 2.502 0 0 1 0 4.9V13H2.5v-1H6V9.95a2.502 2.502 0 0 1 0-4.9Zm.5 2a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 6.5 6m5.293 1.5-1.647-1.646.708-.708L12.5 6.793l1.646-1.647.708.708L13.207 7.5l1.647 1.646-.708.708L12.5 8.207l-1.646 1.647-.708-.708z",
      ],
    },
    grass: {
      symbolId: "nvidia-react-gui-icons-v1-line-grass",
      viewBox: "0 0 16 16",
      paths: [
        "M9.646 8.647 10 9l.354.353.002-.002.002-.002.002-.002-.013.015q-.024.029-.08.116a3.3 3.3 0 0 0-.297.63c-.204.56-.421 1.477-.463 2.892h1.026c.13-.978.619-1.783 1.079-2.348a6.6 6.6 0 0 1 .994-.981l.074-.056.021-.016.007-.005.002-.001.001-.001L13 10l.289.408-.002.001-.012.009-.053.041a5.5 5.5 0 0 0-.834.824c-.374.459-.722 1.045-.843 1.717H14v1H2v-1h2.384c-.142-.318-.403-.629-.717-.91a5.5 5.5 0 0 0-.835-.61l-.055-.032-.013-.007-.002-.001L3 11l.238-.44.001.001.002.001.006.003.021.012.072.041q.093.054.247.155c.202.133.473.327.746.571.425.38.932.951 1.106 1.656h1.016c-.121-.672-.469-1.258-.843-1.717a5.5 5.5 0 0 0-.834-.824l-.053-.041-.012-.009-.002-.001L5 10l.289-.408.001.001.002.001.007.005.021.016.074.056a6.6 6.6 0 0 1 .994.981c.46.565.949 1.37 1.079 2.348h1.04c.042-1.52.276-2.554.523-3.233.137-.376.277-.643.391-.823q.086-.134.146-.207l.049-.058.018-.02.007-.007.003-.003Z",
      ],
    },
    gravel: {
      symbolId: "nvidia-react-gui-icons-v1-line-gravel",
      viewBox: "0 0 16 16",
      paths: [
        "M5.635 3.928 7 5.293V7.39l-2.653.664-1.419-1.419.677-2.03ZM10.793 8h2.097l.664 2.653-1.419 1.419-2.03-.677-.677-2.03Zm-4.892.892 1.599.799v1.618l-1.599.799L4.293 10.5ZM11.191 2h1.618l.799 1.599L12 5.207l-1.608-1.608ZM4.395 5.395l-.323.97.581.581L6 6.61v-.903l-.635-.635ZM11.207 9l-.635.635.323.97.97.323.581-.581L12.11 9ZM8.646 5.146l1-1 .708.708-1 1Zm-2-2.5 1-1 .708.708-1 1Zm2 5.708-1-1 .708-.708 1 1Zm0 6-1-1 .708-.708 1 1Zm-7-4.708 1-1 .708.708-1 1ZM11.809 3l-.201.401.392.392.392-.392L12.191 3Zm-5.71 7.108-.392.392.392.392.401-.201v-.382Z",
      ],
    },
    grid: {
      symbolId: "nvidia-react-gui-icons-v1-line-grid",
      viewBox: "0 0 16 16",
      paths: [
        "M5 5V2h1v3h4V2h1v3h3v1h-3v4h3v1h-3v3h-1v-3H6v3H5v-3H2v-1h3V6H2V5Zm1 1v4h4V6Z",
      ],
    },
    "grid-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-grid-off",
      viewBox: "0 0 16 16",
      paths: [
        "m14.354 13.646-.708.708L11 11.707V14h-1v-3H6v3H5v-3H2v-1h3V6H2V5h2.293L1.646 2.354l.707-.708ZM6 10h3.293L6 6.707Zm5-1.828V6h3V5h-3V2h-1v3H7.828l1 1H10v1.172z",
      ],
    },
    "grip-area": {
      symbolId: "nvidia-react-gui-icons-v1-line-grip-area",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 12.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-9 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-6 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "grip-corner": {
      symbolId: "nvidia-react-gui-icons-v1-line-grip-corner",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 12.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-6 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "grip-edge-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-line-grip-edge-horizontal",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 9.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-6 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "grip-edge-vertical": {
      symbolId: "nvidia-react-gui-icons-v1-line-grip-edge-vertical",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 12.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "grip-mini": {
      symbolId: "nvidia-react-gui-icons-v1-line-grip-mini",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 9.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    group: {
      symbolId: "nvidia-react-gui-icons-v1-line-group",
      viewBox: "0 0 16 16",
      paths: [
        "M6 11a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 11m3-5a2 2 0 1 1 3.999-.001A2 2 0 0 1 9 6M3 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 3 6M1 1h4v1H2v3H1Zm13 1h-3V1h4v4h-1ZM2 14h3v1H1v-4h1Zm13-3v4h-4v-1h3v-3Zm-7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "h-align-center": {
      symbolId: "nvidia-react-gui-icons-v1-line-h-align-center",
      viewBox: "0 0 16 16",
      paths: [
        "M13 4v3H8.5v1H11v3H8.5v3h-1v-3H5V8h2.5V7H3V4h4.5V2h1v2ZM4 5v1h8V5Zm2 5h4V9H6Z",
      ],
    },
    "h-align-left": {
      symbolId: "nvidia-react-gui-icons-v1-line-h-align-left",
      viewBox: "0 0 16 16",
      paths: ["M3 2v12h1V2zm11 2v3H5V4ZM6 6h7V5H6Zm5 2v3H5V8Zm-5 2h4V9H6Z"],
    },
    "h-align-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-h-align-right",
      viewBox: "0 0 16 16",
      paths: ["M2 4h9v3H2Zm3 4h6v3H5Zm8 6h-1V2h1ZM3 5v1h7V5Zm3 4v1h4V9Z"],
    },
    "hand-closed": {
      symbolId: "nvidia-react-gui-icons-v1-line-hand-closed",
      viewBox: "0 0 16 16",
      paths: [
        "M9.764 5.193a1.497 1.497 0 0 1 2 .5A1.5 1.5 0 0 1 14 7v4.5a3.5 3.5 0 0 1-3.5 3.5H6.427l-2.695-2.694A2.5 2.5 0 0 1 3 10.538V9.5c0-1.209.859-2.218 2-2.45V6.5a1.5 1.5 0 0 1 2.236-1.307 1.497 1.497 0 0 1 2.528 0M8.5 5.5A.5.5 0 0 0 8 6v1H7v-.5a.5.5 0 0 0-1 0V9H5v-.915A1.5 1.5 0 0 0 4 9.5v1.038c0 .398.158.779.439 1.06L6.841 14H10.5a2.5 2.5 0 0 0 2.5-2.5V7a.5.5 0 0 0-1 0v.5h-1v-1a.5.5 0 0 0-1 0V7H9V6a.5.5 0 0 0-.5-.5",
      ],
    },
    "hand-open": {
      symbolId: "nvidia-react-gui-icons-v1-line-hand-open",
      viewBox: "0 0 16 16",
      paths: [
        "M7 2.5a1.5 1.5 0 0 1 2.948-.395A1.5 1.5 0 0 1 12 3.5v.085q.236-.084.5-.085A1.5 1.5 0 0 1 14 5v6.5a3.5 3.5 0 0 1-3.5 3.5H6.409l-.149-.168-.538-.608-1.214-1.37c-.897-1.015-1.849-2.092-2.046-2.321-.535-.621-.574-1.494.026-2.094.613-.613 1.393-.479 1.988-.203.082.038.269.132.524.263V4a1.5 1.5 0 0 1 2-1.415Zm1 5H7V4a.5.5 0 0 0-1 0v6.14l-.73-.378a58 58 0 0 0-1.216-.619c-.448-.209-.692-.164-.859.003-.182.182-.215.456.025.735.191.222 1.136 1.291 2.037 2.31l1.213 1.37.389.439H10.5a2.5 2.5 0 0 0 2.5-2.5V5a.5.5 0 0 0-1 0v2.5h-1v-4a.5.5 0 0 0-1 0v4H9v-5a.5.5 0 0 0-1 0Z",
      ],
    },
    "hand-pinch": {
      symbolId: "nvidia-react-gui-icons-v1-line-hand-pinch",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1H5v1h1.293L2 6.293V5H1v3h3V7H2.707L7 2.707V4h1zm0 4.5a1.5 1.5 0 0 1 3 0v1.616l2.147.576A2.5 2.5 0 0 1 15 10.106V12.5a2.5 2.5 0 0 1-2.5 2.5H8.523l-.149-.168a790 790 0 0 1-2.912-3.299c-.535-.621-.575-1.494.025-2.094.614-.613 1.394-.479 1.988-.203.083.038.269.132.525.263ZM9.5 5a.5.5 0 0 0-.5.5v5.64l-.73-.378a60 60 0 0 0-1.216-.619c-.449-.209-.692-.164-.86.003-.181.182-.215.456.026.735.244.284 1.716 1.947 2.753 3.119H12.5a1.5 1.5 0 0 0 1.5-1.5v-2.394a1.5 1.5 0 0 0-1.112-1.448L10 7.884V5.5a.5.5 0 0 0-.5-.5",
      ],
    },
    "hand-point": {
      symbolId: "nvidia-react-gui-icons-v1-line-hand-point",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4.585a1.504 1.504 0 0 1 1.764.608 1.497 1.497 0 0 1 2 .5A1.5 1.5 0 0 1 14 7v4.5a3.5 3.5 0 0 1-3.5 3.5H6.427l-2.695-2.694A2.5 2.5 0 0 1 3 10.538V9.5c0-1.209.859-2.218 2-2.45V3.5a1.5 1.5 0 0 1 3 0ZM6.5 3a.5.5 0 0 0-.5.5V9H5v-.915A1.5 1.5 0 0 0 4 9.5v1.038c0 .398.158.779.439 1.06L6.841 14H10.5a2.5 2.5 0 0 0 2.5-2.5V7a.5.5 0 0 0-1 0v.5h-1v-1a.5.5 0 0 0-1 0V7H9V6a.5.5 0 0 0-1-.001V6.5H7v-3a.5.5 0 0 0-.5-.5",
      ],
    },
    hdmi: {
      symbolId: "nvidia-react-gui-icons-v1-line-hdmi",
      viewBox: "0 0 16 16",
      paths: [
        "M12 9H4V8h8z",
        "M15 6v4h-1.293l-1 1H3.293l-1-1H1V6ZM2 7v2h.707l1 1h8.586l1-1H14V7Z",
      ],
    },
    head: {
      symbolId: "nvidia-react-gui-icons-v1-line-head",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 2.5a4.5 4.5 0 0 0-3.601 7.2l.1.133L4 13H3v-2.838a5.5 5.5 0 1 1 9.881-4.307l1.78 4.452-1.717.572-.52 3.121H8v-1h3.576l.48-2.879 1.283-.428-1.42-3.549-.009-.045A4.5 4.5 0 0 0 7.5 2.5",
      ],
    },
    header: {
      symbolId: "nvidia-react-gui-icons-v1-line-header",
      viewBox: "0 0 16 16",
      paths: ["M5 3h1v4h4V3h1v9h-1V8H6v4H5Z"],
    },
    headset: {
      symbolId: "nvidia-react-gui-icons-v1-line-headset",
      viewBox: "0 0 16 16",
      paths: [
        "M3.076 7H4v4H1.64L.973 9l.667-2h.426c.18-1.339.727-2.486 1.588-3.346C4.722 2.586 6.231 2 8 2s3.278.586 4.346 1.654c.861.86 1.408 2.007 1.588 3.346h.426l.667 2-.667 2H14v3H9v.5H7v-2h2v.5h4v-2h-1V7h.924c-.171-1.086-.624-1.978-1.285-2.639C10.785 3.507 9.545 3 8 3s-2.786.507-3.639 1.361C3.7 5.022 3.247 5.914 3.076 7m-.715 1-.334 1 .334 1H3V8Zm11.278 0H13v2h.639l.334-1Z",
      ],
    },
    health: {
      symbolId: "nvidia-react-gui-icons-v1-line-health",
      viewBox: "0 0 16 16",
      paths: ["M6 3h4v3h3v4h-3v3H6v-3H3V6h3Zm1 1v3H4v2h3v3h2V9h3V7H9V4Z"],
    },
    heart: {
      symbolId: "nvidia-react-gui-icons-v1-line-heart",
      viewBox: "0 0 16 16",
      paths: [
        "M8.32 3.828a3.44 3.44 0 0 1 4.852 4.852l-.012.014L8 13.866 2.84 8.694l-.012-.014A3.44 3.44 0 0 1 7.68 3.828l.012.011.308.302.308-.302Zm.664.748L8 5.542l-.984-.966a2.44 2.44 0 0 0-3.441 3.438L8 12.45l4.425-4.436a2.44 2.44 0 0 0-3.441-3.438",
      ],
    },
    "heart-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-heart-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-3.07-3.071L8 13.866 2.84 8.694l-.012-.014a3.44 3.44 0 0 1 .331-4.814L1.646 2.354Zm1.513 2.928a2.44 2.44 0 0 0-.292 3.441L8 12.45l1.869-1.874Zm8.475 4.94-.707-.708.79-.791a2.441 2.441 0 0 0-3.441-3.439l-.797.783-2.334-2.334a3.4 3.4 0 0 1 1.827.803l.012.011.308.302.308-.302.013-.011a3.44 3.44 0 0 1 4.851 4.852l-.012.014z",
      ],
    },
    helicopter: {
      symbolId: "nvidia-react-gui-icons-v1-line-helicopter",
      viewBox: "0 0 16 16",
      paths: [
        "M14 5H8.5v1.742c1.173.312 2.482.684 3.685 1.035A1.502 1.502 0 0 1 15 8.5a1.5 1.5 0 0 1-2.843.67c-.964.248-1.784.74-2.671 1.271l-.18.108c-.958.573-1.996 1.164-3.306 1.373V13h4v1H2.793l-1.147-1.146.708-.708.853.854H5v-1a3 3 0 0 1-3-3c0-1.641 1.208-3 3-3 .296 0 .778.085 1.329.205.348.076.744.17 1.171.278V5H2V4h12ZM3 9a2 2 0 0 0 2 2c1.508 0 2.614-.604 3.793-1.309l.216-.129c.627-.378 1.289-.775 2.035-1.074-.995-.287-2.02-.574-2.948-.819a49 49 0 0 0-1.979-.487C5.549 7.059 5.171 7 5 7c-1.208 0-2 .879-2 2m10.079-.77-.044.453a.5.5 0 1 0 .044-.453",
      ],
    },
    "help-circle": {
      symbolId: "nvidia-react-gui-icons-v1-line-help-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 3a1 1 0 0 0-1 1H6a2 2 0 1 1 4 0c0 .466-.119.839-.31 1.146a2.8 2.8 0 0 1-.62.676l-.137.112c-.14.115-.238.196-.319.29-.082.096-.114.172-.114.276V10h-1V8.5c0-.396.156-.695.355-.927.144-.169.332-.321.482-.443l.093-.077c.178-.148.314-.278.411-.434C8.931 6.473 9 6.284 9 6a1 1 0 0 0-1-1m-.5 7v-1h1v1Z",
      ],
    },
    "high-kick": {
      symbolId: "nvidia-react-gui-icons-v1-line-high-kick",
      viewBox: "0 0 16 16",
      paths: [
        "m9.759 4.877-3.293.883 2.115 2.116 5.669-3.273.5.866L9 8.79V15H8l-.001-6.292L5.5 6.207 4.13 7.578l1.299 2.165-.858.514-1.7-2.834 2.37-2.371 2.999-.804L7.087 2.25l.866-.5z",
        "M4.5 2a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4.5 2m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "high-quality": {
      symbolId: "nvidia-react-gui-icons-v1-line-high-quality",
      viewBox: "0 0 16 16",
      paths: [
        "M0 3h16v11H0Zm1 1v9h14V4Zm11.586 5.879.768.767-.708.708-.767-.768a2.5 2.5 0 1 1 .707-.707M3 11V6h1v2h2V6h1v5H6V9H4v2Zm7.5-4a1.5 1.5 0 1 0 .647 2.854l-.501-.5.708-.708.5.501A1.5 1.5 0 0 0 10.5 7",
      ],
    },
    highlighter: {
      symbolId: "nvidia-react-gui-icons-v1-line-highlighter",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1.793 14.207 4.5l-7.5 7.5h-1l-1 1H3.293l-1-1L4 10.293v-1ZM5.707 11h.586l6.5-6.5L11.5 3.207 5 9.707v.586Zm-1.207.207L3.707 12h.586l.5-.5Z",
      ],
    },
    hill: {
      symbolId: "nvidia-react-gui-icons-v1-line-hill",
      viewBox: "0 0 16 16",
      paths: [
        "M8.356 5.936a1.5 1.5 0 0 1 2.233.124L14.54 11H1.293l3.146-3.146a1.5 1.5 0 0 1 2.122 0L8.707 10h3.753L9.808 6.685a.5.5 0 0 0-.744-.041l-1.21 1.21-.707-.708ZM7.293 10 5.854 8.561a.5.5 0 0 0-.707 0L3.707 10Z",
      ],
    },
    history: {
      symbolId: "nvidia-react-gui-icons-v1-line-history",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4a4 4 0 0 0-4 4v1.293l1.146-1.147.708.708L3.5 11.207 1.146 8.854l.708-.708L3 9.293V8a5 5 0 1 1 3.706 4.831l.258-.966Q7.46 11.998 8 12a4 4 0 0 0 0-8m.5 1v2.616l2.528.678-.259.966L7.5 8.384V5Z",
      ],
    },
    hit: {
      symbolId: "nvidia-react-gui-icons-v1-line-hit",
      viewBox: "0 0 16 16",
      paths: [
        "M12 13h-1v-2h1zm2.768-1.44-.708.708-1.414-1.414.708-.708zM9.384 7h1l.42 1.567L9.884 12H4.293l-1-1H2V6h1.293l1-1h4.555ZM4 6.707v3.586l.707.707h4.408l.653-2.433L9.615 8H6V7h2.348L8.08 6H4.707ZM15 9h-2V8h2zm-.232-3.561-1.414 1.415-.708-.708 1.414-1.414zM12 6h-1V4h1z",
      ],
    },
    home: {
      symbolId: "nvidia-react-gui-icons-v1-line-home",
      viewBox: "0 0 16 16",
      paths: [
        "m8 1.293 6.854 6.853-.708.708L13 7.707V14H9v-4H7v4H3V7.707L1.854 8.854l-.708-.708ZM4 6.707V13h2V9h4v4h2V6.707l-4-4Z",
      ],
    },
    "home-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-home-off",
      viewBox: "0 0 16 16",
      paths: [
        "M13 7.707v2.465l-1-1V6.707l-4-4-1.232 1.232-.707-.707L8 1.293l6.854 6.853-.708.708zm0 6V14H9v-4H7v4H3V7.707L1.854 8.854l-.708-.708L4.293 5 1.646 2.354l.708-.708 12 12-.708.708Zm-8-8-1 1V13h2V9h2.293Zm5 5V13h2v-.293Z",
      ],
    },
    "hot-air-balloon": {
      symbolId: "nvidia-react-gui-icons-v1-line-hot-air-balloon",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1c1.341 0 2.586.409 3.505 1.186C12.432 2.971 13 4.111 13 5.5c0 1.447-.873 2.572-1.632 3.396a31 31 0 0 1-.504.529l-.056.057c-.176.182-.332.344-.463.494a2.5 2.5 0 0 0-.283.374c-.06.103-.062.148-.062.15v.5H6v-.5c0-.002-.002-.047-.062-.15a2.5 2.5 0 0 0-.283-.374c-.131-.15-.286-.312-.463-.494l-.056-.058a28 28 0 0 1-.504-.528C3.873 8.072 3 6.947 3 5.5c0-1.389.568-2.529 1.495-3.314C5.414 1.409 6.659 1 8 1m0 1c-.229 0-.528.144-.797.719-.269.576-.453 1.494-.453 2.781 0 1.23.286 2.013.584 2.698l.114.258c.209.47.43.964.515 1.544h.074c.085-.58.306-1.074.515-1.544l.114-.258c.298-.685.584-1.468.584-2.698 0-1.287-.184-2.205-.453-2.781C8.528 2.144 8.229 2 8 2M5.5 13v-1h5v1H10v2H6v-2ZM5.141 2.95C4.439 3.544 4 4.404 4 5.5c0 1.038.627 1.914 1.368 2.718q.245.264.486.51l.056.058c.175.18.347.359.498.531.149.17.29.35.396.533q.041.07.078.15h.068c-.075-.363-.225-.702-.412-1.127l-.122-.277C6.089 7.84 5.75 6.917 5.75 5.5c0-1.36.191-2.442.547-3.204l.004-.009c-.439.16-.831.384-1.16.663M9.05 10h.068q.037-.08.078-.15c.106-.183.247-.363.396-.533.151-.172.323-.351.498-.531l.056-.058q.24-.246.486-.51C11.373 7.414 12 6.538 12 5.5c0-1.096-.439-1.956-1.141-2.55a3.8 3.8 0 0 0-1.16-.663l.004.009c.356.762.547 1.844.547 3.204 0 1.417-.339 2.34-.666 3.096l-.122.277c-.187.425-.337.764-.412 1.127M7 13v1h2v-1Z",
      ],
    },
    hourglass: {
      symbolId: "nvidia-react-gui-icons-v1-line-hourglass",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v2.634L10.479 8 13 12.366V15H3v-2.634L5.521 8 3 3.634Zm8.634 3H4.366l2.309 4-2.309 4h7.268L9.325 8ZM4 3h8V2H4Zm0 11h8v-1H4Z",
      ],
    },
    "hourglass-end": {
      symbolId: "nvidia-react-gui-icons-v1-line-hourglass-end",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v2.634L10.479 8 13 12.366V15H3v-2.634L5.521 8 3 3.634Zm8.634 3H4.366l2.309 4-2.309 4h7.268L9.325 8ZM4 2v1h8V2Zm8 11H4v1h8Zm-2-2H6v-1h4ZM9 9H7V8h2Z",
      ],
    },
    "hourglass-mid": {
      symbolId: "nvidia-react-gui-icons-v1-line-hourglass-mid",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v2.634L10.479 8 13 12.366V15H3v-2.634L5.521 8 3 3.634Zm8.634 3H4.366l2.309 4-2.309 4h7.268L9.325 8ZM4 2v1h8V2Zm8 11H4v1h8ZM9.5 7h-3V6h3Zm0 3h-3V9h3Zm-1-1.5h-1v-1h1Z",
      ],
    },
    "hourglass-start": {
      symbolId: "nvidia-react-gui-icons-v1-line-hourglass-start",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v2.634L10.479 8 13 12.366V15H3v-2.634L5.521 8 3 3.634Zm8.634 3H4.366l2.309 4-2.309 4h7.268L9.325 8ZM4 2v1h8V2Zm8 11H4v1h8Zm-2-7H6V5h4ZM9 8H7V7h2Z",
      ],
    },
    hud: {
      symbolId: "nvidia-react-gui-icons-v1-line-hud",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2Zm5.367 7H13V4H3v6Zm.143-1H4.5V8h3.01ZM12 6h-1V5h1Zm-2 3H9V8h1Zm2 0h-1V8h1Zm-4 2.5-.134.5h.268Z",
      ],
    },
    hydrant: {
      symbolId: "nvidia-react-gui-icons-v1-line-hydrant",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 8.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 8.5M8 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
        "M8.5 2.541A3 3 0 0 1 10.958 5h.542v1H11v1h2v1h.5v1H13v1h-2v3h1v1H4v-1h1v-3H3V9h-.5V8H3V7h2V6h-.5V5h.541A3.005 3.005 0 0 1 7.5 2.541V2h1ZM10 13V6H6v7ZM8 3.5A2 2 0 0 0 6.063 5h3.874A2 2 0 0 0 8 3.5M5 9V8H4v1Zm6-1v1h1V8Z",
      ],
    },
    identification: {
      symbolId: "nvidia-react-gui-icons-v1-line-identification",
      viewBox: "0 0 16 16",
      paths: [
        "M6 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 6m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5.92 9h4.16l1.072 4H4.849Zm.768 1-.536 2h3.697l-.536-2Z",
        "M5 0v1h6V0h1v1h2v14H2V1h2V0Zm6 2H5v1H4V2H3v12h10V2h-1v1h-1Z",
      ],
    },
    image: {
      symbolId: "nvidia-react-gui-icons-v1-line-image",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v12H2Zm1 1v5.211l3.534 2.036 3.483-2.007L13 9.959V3Zm10 8.113-2.983-1.719-3.483 2.007L3 9.365V13h10ZM5 6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 5 6.5M6.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    ime: {
      symbolId: "nvidia-react-gui-icons-v1-line-ime",
      viewBox: "0 0 16 16",
      paths: [
        "m11.947 4.276.362.724H15v2.5h-1V6H9v1.5H8V5h3.191l-.138-.276z",
        "m13.416 7.277-.001.002-.003.005-.01.014-.037.053q-.048.07-.134.188a11 11 0 0 1-.476.599 7.3 7.3 0 0 1-.862.862H15v1h-3.5v.5A1.5 1.5 0 0 1 10 12h-.5v-1h.5a.5.5 0 0 0 .5-.5V10H8V9h2.5v-.309l.276-.138c.24-.12.494-.321.737-.553H9.5V7h2.586c.132 0 .26-.053.353-.147l.207-.207zM4.451 4.5l2.06 5.319-.933.362-.644-1.665H3.108l-.642 1.664-.933-.36L3.585 4.5Zm.096 3.016-.528-1.362-.525 1.362Z",
      ],
    },
    import: {
      symbolId: "nvidia-react-gui-icons-v1-line-import",
      viewBox: "0 0 16 16",
      paths: [
        "m8.5 8.793 1.146-1.147.708.708L8 10.707 5.646 8.354l.708-.708L7.5 8.793V3h1z",
        "M5 5H3v8h10V5h-2v1h1v6H4V6h1z",
      ],
    },
    "import-image": {
      symbolId: "nvidia-react-gui-icons-v1-line-import-image",
      viewBox: "0 0 16 16",
      paths: [
        "m8.5 3.793 1.146-1.147.708.708L8 5.707 5.646 3.354l.708-.708L7.5 3.793V1h1z",
        "M3 5h2v1H4v3.211l2.8 1.617 2.85-1.645L12 10.54V6h-1V5h2v9H3Zm9 6.694-2.35-1.357-2.85 1.646L4 10.366V13h8Z",
        "M5.454 7.773a1.319 1.319 0 1 1 2.637.001 1.319 1.319 0 0 1-2.637-.001m1.319-.318a.318.318 0 1 0-.001.637.318.318 0 0 0 .001-.637",
      ],
    },
    inbox: {
      symbolId: "nvidia-react-gui-icons-v1-line-inbox",
      viewBox: "0 0 16 16",
      paths: [
        "M13 10.435V14H3v-3.565L3.652 8h8.696ZM4 13h8v-2H9.207L8 12.207 6.793 11H4Zm.151-3h3.056l.793.793.793-.793h3.056l-.269-1H4.42ZM8.5 4.793l1.146-1.147.708.708L8 6.707 5.646 4.354l.708-.708L7.5 4.793V2h1z",
      ],
    },
    infinity: {
      symbolId: "nvidia-react-gui-icons-v1-line-infinity",
      viewBox: "0 0 16 16",
      paths: [
        "M2.295 5h3.414l2.293 2.293L10.295 5h3.414l1.293 1.293v3.414L13.709 11h-3.414L8.002 8.707 5.709 11H2.295L1.002 9.707V6.293Zm6.414 3 2 2h2.586l.707-.707V6.707L13.295 6h-2.586ZM7.295 8l-2-2H2.709l-.707.707v2.586l.707.707h2.586Z",
      ],
    },
    "info-circle": {
      symbolId: "nvidia-react-gui-icons-v1-line-info-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2m.5 4v6h-1V6Zm0-2v1h-1V4Z",
      ],
    },
    instance: {
      symbolId: "nvidia-react-gui-icons-v1-line-instance",
      viewBox: "0 0 16 16",
      paths: [
        "M9.938 3.291 8 2.173 6.062 3.291l.5.866L8 3.327l1.438.83zM4.5 5.348l.938-.541-.5-.866L3 5.059v2.238h1V6.214l.938.541.5-.866zm7 0-.938-.541.5-.866L13 5.059v2.238h-1V6.214l-.938.541-.5-.866zM4 8.596v1.659l1.438.83-.5.866L3 10.833V8.596zm8 0v1.659l-1.438.83.5.866L13 10.833V8.596zm-3.5 3.68v-1.082h-1v1.082l-.938-.541-.5.866L8 13.72l1.938-1.119-.5-.866zm.938-5.737L8 7.369l-1.438-.83-.5.866 1.438.83v1.66h1v-1.66l1.438-.83z",
      ],
    },
    isp: {
      symbolId: "nvidia-react-gui-icons-v1-line-isp",
      viewBox: "0 0 16 16",
      paths: [
        "M3 6a5 5 0 1 1 5.5 4.975V12H10v1h4v1h-4v1H6v-1H2v-1h4v-1h1.5v-1.025A5 5 0 0 1 3 6m5.961 1Q9 6.52 9 6t-.039-1H7.039A12 12 0 0 0 7 6q0 .52.039 1ZM4 6q.001.519.126 1h1.91a13.6 13.6 0 0 1 0-2h-1.91Q4.001 5.481 4 6m6 0q0 .513-.036 1h1.91a4 4 0 0 0 0-2h-1.91Q10 5.486 10 6M8.008 2.002 8 2l-.008.002a.1.1 0 0 0-.033.016.6.6 0 0 0-.15.145c-.13.165-.269.435-.395.813A7 7 0 0 0 7.163 4h1.674a7 7 0 0 0-.251-1.024c-.126-.378-.265-.648-.395-.813a.6.6 0 0 0-.15-.145.1.1 0 0 0-.033-.016m0 7.996a.1.1 0 0 0 .033-.016.6.6 0 0 0 .15-.145c.13-.165.269-.435.395-.813.099-.296.184-.641.251-1.024H7.163c.067.383.152.728.251 1.024.126.378.265.648.395.813a.6.6 0 0 0 .15.145.1.1 0 0 0 .033.016L8 10zM9 14v-1H7v1Zm.851-6a8.5 8.5 0 0 1-.316 1.34 5 5 0 0 1-.158.417A4.02 4.02 0 0 0 11.465 8Zm-.474-5.757q.086.2.158.417c.131.392.237.845.316 1.34h1.614a4.02 4.02 0 0 0-2.088-1.757M4.535 8a4.02 4.02 0 0 0 2.088 1.757 5 5 0 0 1-.158-.417A8.5 8.5 0 0 1 6.149 8Zm1.614-4c.079-.495.185-.948.316-1.34q.072-.218.158-.417A4.02 4.02 0 0 0 4.535 4Z",
      ],
    },
    "isp-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-isp-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708L13.293 14H10v1H6v-1H2v-1h4v-1h1.5v-1.025a5 5 0 0 1-4.121-6.889L.646 1.354Zm8.56 9.975a5 5 0 0 1-1.414.354V12H10v1h2.293ZM4.293 5h-.167a4 4 0 0 0 0 2h1.91a8 8 0 0 1-.017-.274ZM9 14v-1H7v1ZM6.623 9.757a5 5 0 0 1-.158-.417A8.4 8.4 0 0 1 6.149 8H4.535a4.02 4.02 0 0 0 2.088 1.757M7.293 8h-.13L8 10l.008-.002a.1.1 0 0 0 .033-.016.6.6 0 0 0 .15-.145 2.4 2.4 0 0 0 .324-.615ZM13 6c0 1.17-.402 2.245-1.075 3.097l-.713-.713q.138-.184.253-.384h-.637L8.999 6.171 9 6q0-.52-.039-1H7.828L6.256 3.428q.091-.414.209-.768.072-.218.158-.417a4 4 0 0 0-1.007.545l-.713-.714A5 5 0 0 1 13 6M9.964 5a13.6 13.6 0 0 1 0 2h1.91a4 4 0 0 0 0-2ZM8 2l-.008.002a.1.1 0 0 0-.033.016.6.6 0 0 0-.15.145c-.13.165-.269.435-.395.813A7 7 0 0 0 7.163 4h1.674a7 7 0 0 0-.251-1.024c-.126-.378-.265-.648-.395-.813a.6.6 0 0 0-.15-.145.1.1 0 0 0-.033-.016Zm3.465 2a4.02 4.02 0 0 0-2.088-1.757q.086.2.158.417c.131.392.237.845.316 1.34Z",
      ],
    },
    italic: {
      symbolId: "nvidia-react-gui-icons-v1-line-italic",
      viewBox: "0 0 16 16",
      paths: ["M8.55 4H7.2V3h4v1H9.585l-2.143 8H8.79v1h-4v-1h1.616Z"],
    },
    iterate: {
      symbolId: "nvidia-react-gui-icons-v1-line-iterate",
      viewBox: "0 0 16 16",
      paths: [
        "m11.646 4.354.708-.708L15.207 6.5l-2.853 2.854-.708-.708L13.293 7H7a2 2 0 1 0 1.932 1.482l.966-.258q.101.373.102.776a3 3 0 1 1-3-3h6.293zM4 7H1V6h3z",
      ],
    },
    "joystick-classic": {
      symbolId: "nvidia-react-gui-icons-v1-line-joystick-classic",
      viewBox: "0 0 16 16",
      paths: [
        "M9.5 2v7.643l1.338.358.308-1.149 2.966.794-.308 1.15 1.196.32v1.591L13.707 14H2.293L1 12.707v-1.591l5.5-1.473V2ZM2 11.884v.409l.707.707h10.586l.707-.707v-.409l-5.066-1.358H7.066ZM7.5 4.5v5.026h1V4.5Zm1-1V3h-1v.5Zm4.388 6.854-1.034-.278-.05.184 1.034.277Z",
      ],
    },
    key: {
      symbolId: "nvidia-react-gui-icons-v1-line-key",
      viewBox: "0 0 16 16",
      paths: [
        "M7 5a3 3 0 1 1 1.262 2.445L6.707 9l1.647 1.646-.708.708L6 9.707l-.793.793 1.647 1.646-.708.708L4.5 11.207l-1.146 1.147-.708-.708 4.909-4.908A3 3 0 0 1 7 5m3-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 10 3",
      ],
    },
    keyboard: {
      symbolId: "nvidia-react-gui-icons-v1-line-keyboard",
      viewBox: "0 0 16 16",
      paths: [
        "M1 3h14v9H1Zm1 1v7h12V4Zm9 6H5V9h6ZM4 6H3V5h1Zm1.5 0h-1V5h1ZM7 6H6V5h1Zm1.5 0h-1V5h1ZM10 6H9V5h1Zm1.5 0h-1V5h1ZM13 6h-1V5h1ZM4 8H3V7h1Zm1.5 0h-1V7h1ZM7 8H6V7h1Zm1.5 0h-1V7h1ZM10 8H9V7h1Zm1.5 0h-1V7h1ZM13 8h-1V7h1Zm-9 2H3V9h1Zm9 0h-1V9h1Z",
      ],
    },
    keyframe: {
      symbolId: "nvidia-react-gui-icons-v1-line-keyframe",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2.293 13.707 8 8 13.707 2.293 8ZM3.707 8 8 12.293 12.293 8 8 3.707Z",
      ],
    },
    knife: {
      symbolId: "nvidia-react-gui-icons-v1-line-knife",
      viewBox: "0 0 16 16",
      paths: ["M9 1.5V9h-.5v5h-1V9H6V4.753L7.878 1.5ZM7 5.021V8h1V3.289Z"],
    },
    lamp: {
      symbolId: "nvidia-react-gui-icons-v1-line-lamp",
      viewBox: "0 0 16 16",
      paths: [
        "m2.849 8.5 1.875-7h6.66l1.876 7H11V11h-1V8.5H8.5V14H10v1H6v-1h1.5V8.5Zm1.303-1h7.804l-1.339-5H5.492Z",
      ],
    },
    laptop: {
      symbolId: "nvidia-react-gui-icons-v1-line-laptop",
      viewBox: "0 0 16 16",
      paths: ["M3 3h10v7H3Zm1 1v5h8V4Zm10 8H2v-1h12Z"],
    },
    laser: {
      symbolId: "nvidia-react-gui-icons-v1-line-laser",
      viewBox: "0 0 16 16",
      paths: [
        "M11.924 2.265 9.825 5.621q.317.245.561.564l1.857-1.114.514.858-1.905 1.141q.067.209.105.43H15v1h-4.043q-.038.22-.105.429l1.905 1.142-.514.858-1.857-1.115q-.244.32-.561.564l2.099 3.357-.848.53-2.136-3.417a3 3 0 0 1-.44.109V13h-1v-2.043a3 3 0 0 1-.441-.109l-2.135 3.417-.848-.53 2.098-3.357a3 3 0 0 1-.561-.564l-1.856 1.115-.514-.858 1.904-1.142a3 3 0 0 1-.104-.429H1v-1h4.043q.037-.221.104-.43L3.243 5.929l.514-.858 1.856 1.114q.243-.319.561-.563L4.076 2.265l.848-.53 2.135 3.416a3 3 0 0 1 .441-.109V3h1v2.042q.227.038.44.109l2.136-3.416zM8 6c-1.086 0-2 .912-2 2s.914 2 2 2c1.088 0 2-.914 2-2s-.912-2-2-2",
      ],
    },
    lasso: {
      symbolId: "nvidia-react-gui-icons-v1-line-lasso",
      viewBox: "0 0 16 16",
      paths: [
        "M10.779 3.843a5 5 0 0 0-1.802-.748l.195-.981a6 6 0 0 1 2.162.897zm-3.754-.747a5 5 0 0 0-1.803.746l-.555-.832a6 6 0 0 1 2.163-.895zM3.844 5.222a5 5 0 0 0-.748 1.802l-.981-.195a6 6 0 0 1 .897-2.162zm-.747 3.753c.127.64.378 1.254.746 1.804l-.832.555a6 6 0 0 1-.895-2.164zm2.126 3.182a5 5 0 0 0 1.802.748l-.195.981a6 6 0 0 1-2.162-.897zM14.207 9.5l-4.5 4.5H8v-1.707l4.5-4.5ZM9 13h.293l3.5-3.5-.293-.293-3.5 3.5Z",
      ],
    },
    layers: {
      symbolId: "nvidia-react-gui-icons-v1-line-layers",
      viewBox: "0 0 16 16",
      paths: [
        "M8 .921 14.992 5 8 9.079 1.008 5ZM2.992 5 8 7.921 13.008 5 8 2.079ZM1.238 7.926l.524-.852L8 10.913l6.238-3.839.524.852L8 12.087Zm0 3 .524-.852L8 13.913l6.238-3.839.524.852L8 15.087Z",
      ],
    },
    "layers-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-layers-off",
      viewBox: "0 0 16 16",
      paths: [
        "m14.762 10.926-.624.384-.727-.727.827-.509zm0-3-2.481 1.527-.727-.727 2.684-1.652zm-5.397 2.147-1.13-1.131L8 9.079 1.008 5l2.075-1.21-1.437-1.436.708-.708 12 12-.708.708-1.696-1.697L8 15.087l-6.762-4.161.524-.852L8 13.913l3.223-1.983-1.131-1.13L8 12.087 1.238 7.926l.524-.852L8 10.913ZM3.814 4.521 2.992 5l3.122 1.821ZM14.992 5l-4.524 2.639-.731-.731L13.008 5 8 2.079 6.047 3.218l-.731-.731L8 .921z",
      ],
    },
    "layout-columns": {
      symbolId: "nvidia-react-gui-icons-v1-line-layout-columns",
      viewBox: "0 0 16 16",
      paths: ["M3 2h10v12H3Zm1 1v10h2V3Zm3 0v10h2V3Zm3 0v10h2V3Z"],
    },
    "layout-detail": {
      symbolId: "nvidia-react-gui-icons-v1-line-layout-detail",
      viewBox: "0 0 16 16",
      paths: ["M2 2h12v12H2Zm1 1v10h3V3Zm4 0v4.5h6V3Zm6 5.5H7V13h6Z"],
    },
    "layout-grid": {
      symbolId: "nvidia-react-gui-icons-v1-line-layout-grid",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v10H2Zm4.5 1v3.5h3V4Zm3 8V8.5h-3V12ZM3 4v3.5h2.5V4Zm7.5 0v3.5H13V4Zm-5 8V8.5H3V12ZM13 8.5h-2.5V12H13Z",
      ],
    },
    "layout-list": {
      symbolId: "nvidia-react-gui-icons-v1-line-layout-list",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h3v3H2Zm0 4h3v3H2Zm0 4h3v3H2Zm12-6H6V3h8Zm0 4H6V7h8Zm0 4H6v-1h8ZM3 3v1h1V3Zm0 4v1h1V7Zm0 4v1h1v-1Z",
      ],
    },
    "layout-rows": {
      symbolId: "nvidia-react-gui-icons-v1-line-layout-rows",
      viewBox: "0 0 16 16",
      paths: ["M2 3h12v10H2Zm1 1v2h10V4Zm10 3H3v2h10Zm0 3H3v2h10Z"],
    },
    library: {
      symbolId: "nvidia-react-gui-icons-v1-line-library",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3h3v1h2v1.053l1.785-.479 2.071 7.728-2.898.776L10 9.502V13H3V5h2Zm1 9h1V4H6Zm2 0h1V5H8Zm-3 0V6H4v6Zm5.112-5.942 1.553 5.796.966-.259-1.553-5.796Z",
      ],
    },
    "library-games": {
      symbolId: "nvidia-react-gui-icons-v1-line-library-games",
      viewBox: "0 0 16 16",
      paths: [
        "m5.232 7.312 1.017.273h.502l1.017-.273 1.979.531 1.274 4.052-.442 1.647-1.171.479-1.075-.288-.34-1.268-1.493-.4-1.493.4-.34 1.268-1.075.288-1.171-.479-.442-1.647 1.275-4.052ZM6 2h3v1h2v1.053l1.785-.479 2.071 7.728-2.898.776L10.464 6.5H10V4H9v2.5H8V3H7v3.5H6V5H5v1.5H4V4h2Zm-.768 6.348-1.189.319-1.022 3.25.237.887.401.164.192-.052.34-1.267L6.5 11.03l2.31.619.339 1.267.193.052.4-.164.237-.887-1.022-3.25-1.189-.319-.885.237h-.766Zm5.881-3.29 1.552 5.796.966-.259-1.553-5.796Z",
      ],
    },
    license: {
      symbolId: "nvidia-react-gui-icons-v1-line-license",
      viewBox: "0 0 16 16",
      paths: [
        "M1 2h14v12H1Zm1 1v10h12V3Z",
        "M4.14 9h3.72l1 3H3.14ZM4 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 4 6m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7 3h-3V7h3Zm0 2h-3V9h3Zm0 2h-3v-1h3Zm-8.14-2-.333 1h2.946l-.333-1ZM11 5.5h-1v-1h1Z",
      ],
    },
    lifebuoy: {
      symbolId: "nvidia-react-gui-icons-v1-line-lifebuoy",
      viewBox: "0 0 16 16",
      paths: [
        "M4.999 2.803A6 6 0 0 1 8 2c1.092 0 2.117.292 3 .803a6 6 0 0 1 2.196 2.196C13.708 5.882 14 6.908 14 8a6 6 0 0 1-.803 3.001 6.04 6.04 0 0 1-2.196 2.196A6 6 0 0 1 8 14a5.97 5.97 0 0 1-3.001-.804 6 6 0 0 1-2.196-2.195A6 6 0 0 1 2 8c0-1.092.292-2.118.803-3.001a6.04 6.04 0 0 1 2.196-2.196M8 6a1.99 1.99 0 0 0-1.733 1A2 2 0 0 0 6 8a1.99 1.99 0 0 0 1 1.732A2 2 0 0 0 8 10a1.99 1.99 0 0 0 1.733-1A2 2 0 0 0 10 8a1.99 1.99 0 0 0-1-1.733A2 2 0 0 0 8 6m2.055 6.56-1.009-1.748A3 3 0 0 1 8 11c-.368 0-.721-.066-1.047-.188l-1.009 1.747A5 5 0 0 0 8 13c.733 0 1.429-.158 2.055-.44m2.504-6.615-1.747 1.008C10.934 7.28 11 7.632 11 8s-.066.72-.188 1.046l1.748 1.009C12.842 9.429 13 8.733 13 8s-.158-1.429-.441-2.055m-9.119 4.11 1.748-1.009A3 3 0 0 1 5 8c0-.368.066-.72.188-1.046L3.44 5.945A5 5 0 0 0 3 8c0 .733.157 1.428.44 2.055M5.945 3.44l1.009 1.748A3 3 0 0 1 8 5c.367 0 .72.066 1.046.188l1.009-1.748A5 5 0 0 0 8 3c-.733 0-1.429.158-2.055.44m4.975.501L9.912 5.688q.218.18.4.4l1.747-1.009a5 5 0 0 0-1.139-1.138m1.139 6.98-1.747-1.009a3 3 0 0 1-.4.4l1.009 1.747a5.1 5.1 0 0 0 1.138-1.138M3.941 5.079l1.747 1.009q.182-.219.4-.4L5.079 3.941a5.1 5.1 0 0 0-1.138 1.138m1.138 6.98 1.009-1.748a3 3 0 0 1-.4-.399L3.941 10.92c.316.438.7.823 1.138 1.139",
      ],
    },
    "light-rect": {
      symbolId: "nvidia-react-gui-icons-v1-line-light-rect",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v12H2Zm1 1v10h10V3Zm2 4a3 3 0 1 1 6 0c0 .895-.54 1.575-.965 2.037-.098.106-.196.207-.284.298l-.031.032a7 7 0 0 0-.25.266c-.07.079-.11.135-.132.173l-.005.008v1.004l-.848.849h-.97l-.848-.849V9.814l-.005-.008a1 1 0 0 0-.132-.173 7 7 0 0 0-.281-.298c-.088-.091-.186-.192-.283-.298C5.54 8.575 5 7.895 5 7m3-2a2 2 0 0 0-2 2c0 .486.293.917.701 1.36q.133.143.266.279l.031.032c.097.099.197.203.285.303.079.092.162.194.229.304h.976c.067-.11.15-.212.229-.304.088-.1.188-.204.285-.303l.031-.032q.133-.136.266-.279C9.707 7.917 10 7.486 10 7a2 2 0 0 0-2-2m0 2.441.776-.388.448.894L8 8.559l-1.224-.612.448-.894Zm.333 2.837h-.666v.126l.262.263h.142l.262-.263Z",
      ],
    },
    "light-rotate": {
      symbolId: "nvidia-react-gui-icons-v1-line-light-rotate",
      viewBox: "0 0 16 16",
      paths: [
        "M13 8a5 5 0 0 0-5-5V2a6 6 0 0 1 6 6v.293l.647-.647.707.708-1.854 1.853-1.853-1.853.707-.708.646.647zm-11.646.354L2 7.707V8a6 6 0 0 0 6 6v-1a5 5 0 0 1-5-5v-.293l.647.647.707-.708L2.5 5.793.647 7.646z",
        "M6.833 10.638V9.154a1 1 0 0 0-.084-.107 7 7 0 0 0-.196-.209l-.025-.025c-.071-.073-.15-.155-.229-.241-.342-.371-.799-.94-.799-1.697a2.5 2.5 0 1 1 5 0c0 .757-.457 1.326-.799 1.697q-.12.13-.229.241l-.025.025a7 7 0 0 0-.196.209 1 1 0 0 0-.084.107v1.484l-.738.737h-.858ZM6.5 6.875c0 .348.21.668.534 1.02q.105.113.212.221l.024.026c.078.08.159.164.231.247.071.081.148.176.208.28.059.102.124.25.124.428v1.126l.152.152h.03l.152-.152V9.097c0-.178.065-.326.124-.428.06-.104.137-.199.208-.28.072-.083.153-.167.231-.247l.024-.026q.107-.108.212-.221c.324-.352.534-.672.534-1.02a1.5 1.5 0 0 0-3 0",
      ],
    },
    lightbulb: {
      symbolId: "nvidia-react-gui-icons-v1-line-lightbulb",
      viewBox: "0 0 16 16",
      paths: [
        "M3 7a5 5 0 0 1 10 0c0 1.447-.873 2.572-1.632 3.396a31 31 0 0 1-.504.529l-.056.057c-.176.182-.332.344-.463.494a2.5 2.5 0 0 0-.283.374c-.06.103-.062.148-.062.15v1.707L8.707 15H7.293L6 13.707V12c0-.002-.002-.047-.062-.15a2.5 2.5 0 0 0-.283-.374c-.131-.15-.286-.312-.463-.494l-.056-.057a31 31 0 0 1-.504-.529C3.873 9.572 3 8.447 3 7m5-4a4 4 0 0 0-4 4c0 1.038.627 1.914 1.368 2.718q.133.145.265.282h1.715l-.903-3.371.966-.258L8 8.568l.589-2.197.966.258L8.652 10h1.715q.133-.137.265-.282C11.373 8.914 12 8.038 12 7a4 4 0 0 0-4-4m1 10H7v.293l.707.707h.586L9 13.293Zm-2-1h.884l-.268-1H6.561q.138.171.243.35c.104.181.196.402.196.65m2.439-1H8.384l-.268 1H9c0-.248.092-.469.196-.65q.105-.179.243-.35",
      ],
    },
    lighthouse: {
      symbolId: "nvidia-react-gui-icons-v1-line-lighthouse",
      viewBox: "0 0 16 16",
      paths: [
        "M10 1.616V5h1v2.115l-.889.238L12.161 15H3.839l2.048-7.647L5 7.115V5h1V1.616l2-.536ZM6 6.348l1.112.298L5.143 14h5.714L8.888 6.646 10 6.348V6H6Zm1-3.965V5h2V2.383l-1.001-.268Zm-1.87-.114-.255.946.255.947-4 1.072-.26-.965 3.929-1.054L.87 2.162l.26-.966zm10-.107L11.2 3.215l3.93 1.054-.26.965-4-1.072.13-.482.124-.465-.253-.946 3.999-1.073z",
      ],
    },
    lightning: {
      symbolId: "nvidia-react-gui-icons-v1-line-lightning",
      viewBox: "0 0 16 16",
      paths: [
        "M6.116 2h4.035L9.079 6h3.283L7 15.383V10H3.972Zm.767 1L5.276 9H8v2.617L10.638 7H7.776l1.072-4Z",
      ],
    },
    "line-segment": {
      symbolId: "nvidia-react-gui-icons-v1-line-line-segment",
      viewBox: "0 0 16 16",
      paths: [
        "M10 4a2 2 0 1 1 .984 1.723l-5.261 5.261a2 2 0 1 1-.707-.707l5.261-5.261A2 2 0 0 1 10 4m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    link: {
      symbolId: "nvidia-react-gui-icons-v1-line-link",
      viewBox: "0 0 16 16",
      paths: [
        "M2 6h5v2h2V6h5v5H9V9H7v2H2Zm4 2V7H3v3h3V9H4.5V8Zm4 1v1h3V7h-3v1h1.5v1Z",
      ],
    },
    "link-break": {
      symbolId: "nvidia-react-gui-icons-v1-line-link-break",
      viewBox: "0 0 16 16",
      paths: [
        "m10.732 5.438 4.83 1.294-1.294 4.83-4.83-1.294.529-1.972-1.104-.315.274-.962 1.088.311Zm-5.464 0 .507 1.892 1.088-.311.274.962-1.103.315.528 1.972-4.83 1.294-1.294-4.83Zm5.66 3.133-.265.99 2.898.776.776-2.898-2.898-.776-.252.942 1.45.414-.274.962Zm-6.115-.966-.252-.942-2.898.776.777 2.898 2.897-.776-.265-.99-1.435.41-.274-.962ZM8.5 2.5V5h-1V2.5ZM5.853 3.646l1.5 1.5-.707.708-1.5-1.5Zm5.001.708-1.5 1.5-.708-.708 1.5-1.5Z",
      ],
    },
    "list-bullet": {
      symbolId: "nvidia-react-gui-icons-v1-line-list-bullet",
      viewBox: "0 0 16 16",
      paths: [
        "M2 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m0 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M4.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 3m0 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 10M14 5H9V4h5Zm0 7H9v-1h5Z",
      ],
    },
    "list-checkmark": {
      symbolId: "nvidia-react-gui-icons-v1-line-list-checkmark",
      viewBox: "0 0 16 16",
      paths: [
        "M7.354 2.354 3.5 6.207 1.646 4.354l.708-.708L3.5 4.793l3.146-3.147Zm0 7L3.5 13.207l-1.854-1.853.708-.708L3.5 11.793l3.146-3.147ZM14 12H9v-1h5Zm0-7H9V4h5Z",
      ],
    },
    "list-number": {
      symbolId: "nvidia-react-gui-icons-v1-line-list-number",
      viewBox: "0 0 16 16",
      paths: [
        "M2 9h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3v1h1v-.01h1V14H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1v-1H3v.01H2Zm12-4H7V4h7Zm0 7H7v-1h7ZM3 2h1.01v1H4v3h.01v1H3Z",
      ],
    },
    location: {
      symbolId: "nvidia-react-gui-icons-v1-line-location",
      viewBox: "0 0 16 16",
      paths: [
        "m8 14.25-.321.383-.005-.004-.011-.009-.041-.035-.149-.132a19 19 0 0 1-2.115-2.255C4.217 10.756 3 8.742 3 6.647 3 4.227 5.264 2 8 2s5 2.227 5 4.647c0 2.095-1.217 4.109-2.358 5.551a19 19 0 0 1-2.115 2.255l-.149.132-.041.035-.011.009-.004.003-.001.001ZM8 3C5.765 3 4 4.829 4 6.647c0 1.742 1.033 3.529 2.142 4.93A18 18 0 0 0 8 13.58q.151-.138.353-.336a18 18 0 0 0 1.505-1.667C10.967 10.176 12 8.389 12 6.647 12 4.829 10.235 3 8 3M6 7a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 7m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 8.25.321.383-.321.269-.321-.269z",
      ],
    },
    "location-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-location-off",
      viewBox: "0 0 16 16",
      paths: [
        "m11.582 10.875 2.772 2.771-.708.708-2.637-2.638q-.183.25-.367.482a19 19 0 0 1-1.589 1.761c-.338.33-.691.639-1.053.943a19 19 0 0 1-1.053-.943 19 19 0 0 1-1.589-1.761C4.217 10.756 3 8.742 3 6.647c0-.8.247-1.578.677-2.263l-2.031-2.03.708-.708 8.502 8.502C11.516 9.052 12 7.839 12 6.647 12 4.829 10.235 3 8 3c-.637 0-1.237.149-1.768.404l-.739-.74A5.1 5.1 0 0 1 8 2c2.736 0 5 2.227 5 4.647 0 .985-.269 1.953-.673 2.851-.217.482-.472.943-.745 1.377M10.293 11 4.409 5.116A3.2 3.2 0 0 0 4 6.647c0 1.742 1.033 3.529 2.142 4.93A18 18 0 0 0 8 13.58q.151-.138.353-.336a18 18 0 0 0 1.505-1.667q.221-.28.435-.577",
      ],
    },
    "lock-closed": {
      symbolId: "nvidia-react-gui-icons-v1-line-lock-closed",
      viewBox: "0 0 16 16",
      paths: [
        "M5 5a3 3 0 1 1 6 0v2h1v7H4V7h1Zm0 3v5h6V8Zm5-1V5a2 2 0 1 0-4 0v2Z",
      ],
    },
    "lock-open": {
      symbolId: "nvidia-react-gui-icons-v1-line-lock-open",
      viewBox: "0 0 16 16",
      paths: [
        "M8 5a3 3 0 0 1 5.94-.599l.01.049V7h-1V4.553A2.001 2.001 0 0 0 9 5v2h1v7H2V7h6Zm1 3H3v5h6Z",
      ],
    },
    loop: {
      symbolId: "nvidia-react-gui-icons-v1-line-loop",
      viewBox: "0 0 16 16",
      paths: [
        "M5 4a4 4 0 0 0 0 8h2.293l-1.147 1.146.708.708L9.207 11.5 6.854 9.146l-.708.708L7.293 11H5a3 3 0 1 1 0-6h6a3 3 0 1 1 0 6v1a4 4 0 0 0 0-8z",
      ],
    },
    "loop-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-loop-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-9.285-9.286A3.001 3.001 0 0 0 5 11h2.293L6.146 9.854l.708-.708L9.207 11.5l-2.353 2.354-.708-.708L7.293 12H5a4 4 0 0 1-1.44-7.733L1.646 2.354zM15 8a4 4 0 0 1-1.259 2.913l-.707-.708A3 3 0 0 0 11 5H7.828l-1-1H11a4 4 0 0 1 4 4",
      ],
    },
    mac: {
      symbolId: "nvidia-react-gui-icons-v1-line-mac",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v8H9.902l.268 1H11v1H5v-1h.831l.268-1H2Zm1 1v4h10V4Zm10 5H3v1h10Zm-5.866 2-.268 1h2.268l-.268-1Z",
      ],
    },
    "mac-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-mac-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 13 13-.708.708L10.293 11h-.391l.268 1H11v1H5v-1h.831l.268-1H2V3h.293L.646 1.354ZM3.293 4H3v4h4.293Zm5 5H3v1h6.293Zm-1.159 2-.268 1h2.268l-.268-1ZM14 11h-.172l-1-1H13V9h-1.172l-1-1H13V4H6.828l-1-1H14z",
      ],
    },
    magnet: {
      symbolId: "nvidia-react-gui-icons-v1-line-magnet",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8.354a6 6 0 1 1 12 0v6h-4v-6a2 2 0 1 0-4 0v6H2Zm6-5a5 5 0 0 0-5 5v3h2v-3a3 3 0 1 1 6 0v3h2v-3a5 5 0 0 0-5-5m-3 9H3v1h2Zm8 0h-2v1h2Z",
      ],
    },
    "magnifying-glass": {
      symbolId: "nvidia-react-gui-icons-v1-line-magnifying-glass",
      viewBox: "0 0 16 16",
      paths: [
        "M2 6.5a4.5 4.5 0 1 1 8.016 2.809l4.338 4.337-.707.708-4.338-4.338A4.5 4.5 0 0 1 2 6.5M6.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7",
      ],
    },
    "magnifying-glass-minus": {
      symbolId: "nvidia-react-gui-icons-v1-line-magnifying-glass-minus",
      viewBox: "0 0 16 16",
      paths: [
        "M2 6.5a4.5 4.5 0 1 1 8.016 2.809l4.338 4.337-.708.708-4.337-4.338A4.5 4.5 0 0 1 2 6.5M6.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M9 7H4V6h5Z",
      ],
    },
    "magnifying-glass-plus": {
      symbolId: "nvidia-react-gui-icons-v1-line-magnifying-glass-plus",
      viewBox: "0 0 16 16",
      paths: [
        "M2 6.5a4.5 4.5 0 1 1 8.016 2.809l4.338 4.337-.708.708-4.337-4.338A4.5 4.5 0 0 1 2 6.5M6.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M6 6V4h1v2h2v1H7v2H6V7H4V6Z",
      ],
    },
    man: {
      symbolId: "nvidia-react-gui-icons-v1-line-man",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 1M7 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m4 8V6H5v5h1v4h1v-5H6V7h4v3H9v5h1v-4z",
      ],
    },
    "man-woman": {
      symbolId: "nvidia-react-gui-icons-v1-line-man-woman",
      viewBox: "0 0 16 16",
      paths: [
        "M4 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 4 1M3 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m8-2a2 2 0 1 1 .001 3.999A2 2 0 0 1 11 1m-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-.338 3h2.676l2.401 6H13v3h-1v-4h1.261l-1.599-4h-1.324l-1.599 4H10v4H9v-3H7.261zM7 11V6H1v5h1v4h1v-5H2V7h4v3H5v5h1v-4z",
      ],
    },
    map: {
      symbolId: "nvidia-react-gui-icons-v1-line-map",
      viewBox: "0 0 16 16",
      paths: [
        "M14.5 1.778v10.569l-4.47 1.676L6 13.015 1.5 14.14V3.11l4.53-1.133L10 3.466Zm-9 10.332V3.14l-3 .75v8.97Zm4-7.764-3-1.125v8.889l3 .75Zm1 8.432 3-1.125V3.221l-3 1.125Z",
      ],
    },
    "map-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-map-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708-2.226-2.227-2.39.896L6 13.015 1.5 14.14V3.11l.722-.181L.646 1.354Zm1.693 3.108L2.5 3.89v8.97l3-.75V6.207ZM6.5 7.207v4.903l3 .75v-2.653Zm4 4v1.571l1.143-.428Z",
        "m14.5 11.646-1-1.017V3.222l-3 1.125v3.23l-1-1.017V4.347L6.053 3.054 6 3l-.849-.803.879-.22L10 3.466l4.5-1.687Z",
      ],
    },
    mapping: {
      symbolId: "nvidia-react-gui-icons-v1-line-mapping",
      viewBox: "0 0 16 16",
      paths: [
        "M2 14h2v-2.5h1V15H1v-3.5h1zm5 0h2v-2.5h1V15H6v-3.5h1zm5 0h2v-2.5h1V15h-4v-3.5h1zM8.5 8.793l.646-.647.708.708L8 10.707 6.146 8.854l.708-.708.646.647V6h1zM8 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 1m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    markdown: {
      symbolId: "nvidia-react-gui-icons-v1-line-markdown",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 7.098 4.289 5H2v6h1V6h.711L5.5 9.098 7.289 6H8v5h1V5H6.711zM13 9.293V5h-1v4.293l-1.646-1.647-.708.708 2.854 2.853 2.854-2.853-.708-.708z",
      ],
    },
    martini: {
      symbolId: "nvidia-react-gui-icons-v1-line-martini",
      viewBox: "0 0 16 16",
      paths: [
        "M9.592 2h.695L11.641.646l.707.708-.647.646H14v3.113L8.5 8.289V14H11v1H5v-1h2.5V8.289L2 5.113V2h7.402a2 2 0 0 1 .19 0m1.321 1q.082.235.084.497A1.5 1.5 0 0 1 8.85 4.851l-.999 1-.708-.707 1-1A1.5 1.5 0 0 1 8.081 3H3v1.536l5 2.887 5-2.887V3ZM9.552 3h-.11a.5.5 0 1 0 .11 0",
      ],
    },
    "mask-inside": {
      symbolId: "nvidia-react-gui-icons-v1-line-mask-inside",
      viewBox: "0 0 16 16",
      paths: [
        "M7.111 3.682 3.682 7.111l.707.707 3.429-3.429zm2.513.487L4.169 9.624l.707.707 5.455-5.455zm1.5 1.5-5.455 5.455.707.707 5.455-5.455zm-2.235 6.649 3.429-3.429-.707-.707-3.429 3.429z",
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M3 8a5 5 0 1 0 10.001-.001A5 5 0 0 0 3 8",
      ],
    },
    "mask-outside": {
      symbolId: "nvidia-react-gui-icons-v1-line-mask-outside",
      viewBox: "0 0 16 16",
      paths: [
        "m1.854 5.854 4-4-.708-.708-4 4zm0-3 1-1-.708-.708-1 1zm6.292-1.708L6.521 2.772l.707.707 1.626-1.625zm3 0L9.349 2.944l.707.707 1.798-1.797zm3 0-2.964 2.965.707.707 2.965-2.964zm-1.09 5.505 1.798-1.797-.708-.708-1.797 1.798zM2.774 6.519 1.146 8.146l.708.708 1.627-1.628zm11.372.627-1.627 1.628.707.707 1.628-1.627zM2.944 9.349l-1.798 1.797.708.708 1.797-1.798zm7.91 5.505 4-4-.708-.708-4 4zm-6.743-3.672-2.965 2.964.708.708 2.964-2.965zm.743 3.672 1.797-1.798-.707-.707-1.798 1.797zm3.92-2.335-1.628 1.627.708.708 1.627-1.628zm5.08 2.335 1-1-.708-.708-1 1zM8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8M5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0",
      ],
    },
    material: {
      symbolId: "nvidia-react-gui-icons-v1-line-material",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3M5.858 4.467c.425-.085.912-.024 1.262.327.35.35.411.837.326 1.262-.086.429-.326.859-.679 1.212s-.784.594-1.213.68c-.425.085-.912.024-1.262-.326s-.411-.837-.326-1.262c.086-.43.326-.86.679-1.213s.784-.594 1.213-.68M8 11a3 3 0 0 0 3-3h1a4 4 0 0 1-4 4ZM6.054 5.448c-.21.042-.469.173-.702.406s-.364.491-.406.702c-.043.214.013.319.053.359s.144.095.359.052c.21-.042.469-.173.702-.406s.364-.491.406-.701c.043-.215-.013-.319-.053-.359-.04-.041-.144-.096-.359-.053m-.34 5.835.503-.861 1 .483-.36.929a4 4 0 0 1-1.143-.551",
      ],
    },
    math: {
      symbolId: "nvidia-react-gui-icons-v1-line-math",
      viewBox: "0 0 16 16",
      paths: [
        "m14.354 2.583-12 12-.708-.707 12-12ZM4 4.229v-2.5h1v2.5h2.5v1H5v2.5H4v-2.5H1.5v-1Zm10.5 8h-6v-1h6Z",
      ],
    },
    meal: {
      symbolId: "nvidia-react-gui-icons-v1-line-meal",
      viewBox: "0 0 16 16",
      paths: [
        "m10.384 10 3.47-.916.758 2.832L10.565 13H5v1H2V8h7.848ZM5 12h5.432l2.955-.792-.241-.9-2.581.692H7v-1h2.348L9.08 9H5Zm-2 1h1V9H3ZM8.5 1.792c2.332.22 4.224 1.966 4.472 4.208H14v1H2V6h1.028c.248-2.242 2.14-3.988 4.472-4.208V1h1ZM8 2.77C5.948 2.77 4.298 4.197 4.037 6h7.926C11.702 4.197 10.052 2.77 8 2.77",
      ],
    },
    "media-optical": {
      symbolId: "nvidia-react-gui-icons-v1-line-media-optical",
      viewBox: "0 0 16 16",
      paths: [
        "M6.318 1.72a6.5 6.5 0 1 1 3.364 12.56A6.5 6.5 0 0 1 6.318 1.72m.747.859L7.982 6H8a2 2 0 1 1-1.927 1.465L3.005 5.694A5.5 5.5 0 1 0 13.5 8a5.5 5.5 0 0 0-6.435-5.421M3.506 4.828l3.067 1.771q.196-.2.443-.34l-.917-3.422a5.5 5.5 0 0 0-2.593 1.991M8 7a1 1 0 1 0-.001 1.999A1 1 0 0 0 8 7",
      ],
    },
    medicine: {
      symbolId: "nvidia-react-gui-icons-v1-line-medicine",
      viewBox: "0 0 16 16",
      paths: [
        "M7.999 3.052a3.5 3.5 0 1 1 4.949 4.95l-4.946 4.946a3.5 3.5 0 1 1-4.949-4.95ZM10.5 3a2.5 2.5 0 0 0-1.788.753l-.004.005-2.122 2.121 3.536 3.535 2.125-2.125A2.5 2.5 0 0 0 10.5 3m-1.085 7.121L5.879 6.586 3.754 8.711a2.5 2.5 0 1 0 3.535 3.536l.004-.005Z",
      ],
    },
    megaphone: {
      symbolId: "nvidia-react-gui-icons-v1-line-megaphone",
      viewBox: "0 0 16 16",
      paths: [
        "M13 5.585a1.5 1.5 0 0 1 0 2.83v2.823L7.404 9H6v4H3V9H2V5h1V4h3v1h1.404L13 2.761ZM6 8h1.596L12 9.761V4.239L7.596 6H6ZM4 5v1H3v2h1v4h1V5Z",
      ],
    },
    menu: {
      symbolId: "nvidia-react-gui-icons-v1-line-menu",
      viewBox: "0 0 16 16",
      paths: ["M13 4H3V3h10Zm0 4H3V7h10Zm0 4H3v-1h10Z"],
    },
    microphone: {
      symbolId: "nvidia-react-gui-icons-v1-line-microphone",
      viewBox: "0 0 16 16",
      paths: [
        "M5 4a3 3 0 1 1 6 0v4a3 3 0 1 1-6 0Zm3-2a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2m-.103 9.999L8 12l.135-.002A4 4 0 0 0 12 8h1a5 5 0 0 1-3.448 4.755L10.151 15H5.848l.602-2.245A5 5 0 0 1 3 8h1a4 4 0 0 0 3.897 3.999m-.469.969L7.152 14h1.697l-.275-1.033a5 5 0 0 1-.445.031Q8.065 13.001 8 13q-.12 0-.239-.006a5 5 0 0 1-.333-.026",
      ],
    },
    "microphone-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-microphone-off",
      viewBox: "0 0 16 16",
      paths: [
        "M13 8c0 .645-.122 1.261-.344 1.827l-.792-.791C11.953 8.706 12 8.358 12 8zm-2 0q0 .084-.005.167L10 7.172V4a2 2 0 0 0-3.873-.702l-.752-.751A3 3 0 0 1 11 4zm-1.262 2.445A3 3 0 0 1 5 8V5.707L1.646 2.354l.708-.708 12 12-.708.708-2.482-2.482a5 5 0 0 1-1.612.883L10.151 15H5.848l.602-2.245A5 5 0 0 1 3 8h1a4 4 0 0 0 3.897 3.999L8 12l.137-.002a4 4 0 0 0 2.316-.838Zm-.722-.722L6 6.707V8a2 2 0 0 0 3.016 1.723m-1.588 3.245L7.152 14h1.697l-.275-1.033a5 5 0 0 1-.445.031Q8.065 13.001 8 13a5 5 0 0 1-.572-.032",
      ],
    },
    microscope: {
      symbolId: "nvidia-react-gui-icons-v1-line-microscope",
      viewBox: "0 0 16 16",
      paths: [
        "M9 1h2v1h1v7h-1.116l-.268 1H9.384l-.268-1H8V5.915q-.183.065-.383.081L6.008 12h7.876l.804 3H1.312l.804-3h.857l2.143-8h.969A1.5 1.5 0 0 1 8 3.085V2h1ZM2.884 13l-.268 1h10.768l-.268-1ZM9 3v5h2V3ZM6.085 5h-.201l-1.876 7h.965l1.678-6.263A1.5 1.5 0 0 1 6.085 5M8 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0",
      ],
    },
    "mini-displayport": {
      symbolId: "nvidia-react-gui-icons-v1-line-mini-displayport",
      viewBox: "0 0 16 16",
      paths: [
        "M11 9H5V7h6z",
        "M13 4v5.707L10.707 12H5.293L3 9.707V4ZM4 5v4.293L5.707 11h4.586L12 9.293V5Z",
      ],
    },
    "mirror-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-line-mirror-horizontal",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3.293 6.707 8 2 12.707Zm12 0v9.414L9.293 8ZM8.5 14h-1V2h1Zm2.207-6L13 10.293V5.707ZM3 5.707v4.586L5.293 8Z",
      ],
    },
    "mirror-vertical": {
      symbolId: "nvidia-react-gui-icons-v1-line-mirror-vertical",
      viewBox: "0 0 16 16",
      paths: [
        "M8 9.293 12.707 14H3.293ZM3.293 2h9.414L8 6.707ZM14 7.5v1H2v-1ZM5.707 13h4.586L8 10.707Zm0-10L8 5.293 10.293 3Z",
      ],
    },
    "mode-component": {
      symbolId: "nvidia-react-gui-icons-v1-line-mode-component",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M1 1h4v1H2v3H1Zm13 1h-3V1h4v4h-1ZM2 14h3v1H1v-4h1Zm13-3v4h-4v-1h3v-3Z",
      ],
    },
    money: {
      symbolId: "nvidia-react-gui-icons-v1-line-money",
      viewBox: "0 0 16 16",
      paths: [
        "M9 7.337a3.5 3.5 0 1 1-1.741 4.486A8.3 8.3 0 0 1 5.5 12c-.867 0-1.673-.116-2.279-.319-.301-.1-.58-.23-.795-.399C2.217 11.117 2 10.857 2 10.5v-6c0-.357.217-.617.426-.782.215-.169.494-.299.795-.399C3.827 3.116 4.633 3 5.5 3s1.673.116 2.279.319c.301.1.58.23.795.399.209.165.426.425.426.782ZM10.5 8a2.49 2.49 0 0 0-2.225 1.358 2.5 2.5 0 0 0-.203 1.741A2.5 2.5 0 1 0 10.5 8M8 5.601a4 4 0 0 1-.221.08C7.173 5.884 6.367 6 5.5 6s-1.673-.116-2.279-.319A4 4 0 0 1 3 5.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236C4.016 6.893 4.71 7 5.5 7s1.484-.107 1.963-.267c.243-.081.403-.166.492-.236A.4.4 0 0 0 8 6.456Zm0 2a4 4 0 0 1-.221.08C7.173 7.884 6.367 8 5.5 8s-1.673-.116-2.279-.319A4 4 0 0 1 3 7.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236C4.016 8.893 4.71 9 5.5 9c.806 0 1.507-.112 1.982-.274q.218-.37.518-.675Zm-5 2v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236.479.16 1.173.267 1.963.267.57 0 1.091-.056 1.518-.148a3.4 3.4 0 0 1 .04-.988A8.6 8.6 0 0 1 5.5 10c-.867 0-1.673-.116-2.279-.319A4 4 0 0 1 3 9.601M3.05 4.5c.09.07.248.153.487.233C4.016 4.893 4.71 5 5.5 5s1.484-.107 1.963-.267c.239-.08.397-.163.487-.233a1.7 1.7 0 0 0-.487-.233C6.984 4.107 6.29 4 5.5 4s-1.484.107-1.963.267c-.239.08-.397.163-.487.233",
      ],
    },
    "money-coin": {
      symbolId: "nvidia-react-gui-icons-v1-line-money-coin",
      viewBox: "0 0 16 16",
      paths: [
        "m5.146 5.854.708-.708.767.768a2.5 2.5 0 0 1 2.758 0l.767-.768.708.708-.768.767a2.5 2.5 0 0 1 0 2.758l.768.767-.708.708-.767-.768a2.5 2.5 0 0 1-2.758 0l-.767.768-.708-.708.768-.767a2.5 2.5 0 0 1 0-2.758Zm1.793 1.085A1.5 1.5 0 0 0 6.5 8 1.495 1.495 0 0 0 8 9.5 1.495 1.495 0 0 0 9.5 8 1.495 1.495 0 0 0 8 6.5c-.414 0-.789.167-1.061.439",
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M3 8a5 5 0 1 0 10.001-.001A5 5 0 0 0 3 8",
      ],
    },
    "money-paper": {
      symbolId: "nvidia-react-gui-icons-v1-line-money-paper",
      viewBox: "0 0 16 16",
      paths: [
        "M8 6a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 6M7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
        "M15 4v8H1V4ZM2 9h2v2h8V9h2V7h-2V5H4v2H2Zm0-3h1V5H2Zm11 0h1V5h-1ZM3 10H2v1h1Zm10 0v1h1v-1Z",
      ],
    },
    moon: {
      symbolId: "nvidia-react-gui-icons-v1-line-moon",
      viewBox: "0 0 16 16",
      paths: [
        "m7.311 2.946 1.004.063a5 5 0 1 1-4.48 7.76l-.556-.839 1.004.063a4 4 0 0 0 3.584-6.209Zm1.882 1.235A4.99 4.99 0 0 1 8.866 8.5a5 5 0 0 1-3.576 2.443q.318.294.71.521a4 4 0 1 0 3.193-7.283",
      ],
    },
    "moon-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-moon-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.481-2.482a5 5 0 0 1-7.33-1.103l-.556-.839 1.004.063a4 4 0 0 0 3.435-1.568L1.646 2.354ZM8.43 9.137a5 5 0 0 1-3.14 1.806q.318.294.71.521a4 4 0 0 0 4.453-.304ZM10.5 3.67a5 5 0 0 1 2.155 6.157l-.791-.791a4 4 0 0 0-2.671-4.855c.306.783.413 1.638.3 2.483l-.968-.968a4 4 0 0 0-.658-1.912l-.556-.838 1.004.063a5 5 0 0 1 2.185.661",
      ],
    },
    "more-horiz": {
      symbolId: "nvidia-react-gui-icons-v1-line-more-horiz",
      viewBox: "0 0 16 16",
      paths: [
        "M11 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 11 8M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8M1 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 1 8m12-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "more-vert": {
      symbolId: "nvidia-react-gui-icons-v1-line-more-vert",
      viewBox: "0 0 16 16",
      paths: [
        "M6 13a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 13m0-5a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m0-5a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 3m2 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    mosaic: {
      symbolId: "nvidia-react-gui-icons-v1-line-mosaic",
      viewBox: "0 0 16 16",
      paths: [
        "M1 1.86 5.562 3h4.876L15 1.86v12.28L10.438 13H5.562L1 14.14ZM6 6h4V4H6Zm0 6h4v-2H6Zm0-3h4V7H6ZM5 6.941l-3-.375v2.868l3-.375Zm9-.375-3 .375v2.118l3 .375ZM5 3.89l-3-.75v2.419l3 .375Zm6 0v2.044l3-.375V3.14Zm-6 6.176-3 .375v2.419l3-.75Zm9 .375-3-.375v2.044l3 .75Z",
      ],
    },
    mountain: {
      symbolId: "nvidia-react-gui-icons-v1-line-mountain",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1.456 14.842 14H1.158Zm2.313 6.329-1.639-.252-1.11 1.11-1.72-1.146L2.842 13h10.316ZM6.325 6.616l1.111.741.89-.89 1.385.214L8 3.544Z",
      ],
    },
    "mouse-2b": {
      symbolId: "nvidia-react-gui-icons-v1-line-mouse-2b",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v9a5 5 0 0 1-10 0Zm9 5.5H4V10a4 4 0 0 0 8 0ZM4 2v3.5h3.5V2Zm4.5 0v3.5H12V2Z",
      ],
    },
    "mouse-2b-right-click": {
      symbolId: "nvidia-react-gui-icons-v1-line-mouse-2b-right-click",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v9a5 5 0 0 1-10 0Zm9 5.5H4V10a4 4 0 0 0 8 0ZM4 2v3.5h3.5V2Zm4.5 0v3.5H12V2ZM9 3.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m1.25-.25a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5",
      ],
    },
    "mouse-3-b": {
      symbolId: "nvidia-react-gui-icons-v1-line-mouse-3-b",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v9a5 5 0 0 1-10 0Zm9 5.5H4V10a4 4 0 0 0 8 0ZM4 2v3.5h2V2Zm3 0v3.5h2V2Zm3 0v3.5h2V2Z",
      ],
    },
    "mouse-scrollwheel": {
      symbolId: "nvidia-react-gui-icons-v1-line-mouse-scrollwheel",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v9a5 5 0 0 1-10 0Zm9 5.5H9.5V7a1.5 1.5 0 0 1-3 0v-.5H4V10a4 4 0 0 0 8 0ZM8.5 2v1.585A1.5 1.5 0 0 1 9.5 5v.5H12V2ZM4 2v3.5h2.5V5a1.5 1.5 0 0 1 1-1.415V2Zm4 2.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5",
      ],
    },
    "mouse-scrollwheel-active": {
      symbolId: "nvidia-react-gui-icons-v1-line-mouse-scrollwheel-active",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h10v9a5 5 0 0 1-10 0Zm9 5.5H9.5V7a1.5 1.5 0 0 1-3 0v-.5H4V10a4 4 0 0 0 8 0ZM8.5 2v1.585A1.5 1.5 0 0 1 9.5 5v.5H12V2ZM4 2v3.5h2.5V5a1.5 1.5 0 0 1 1-1.415V2Zm3.5 4a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0",
      ],
    },
    move: {
      symbolId: "nvidia-react-gui-icons-v1-line-move",
      viewBox: "0 0 16 16",
      paths: [
        "m8 1.293 2.354 2.353-.708.708L8.5 3.207V7.5h4.293l-1.147-1.146.708-.708L14.707 8l-2.353 2.354-.708-.708L12.793 8.5H8.5v4.293l1.146-1.147.708.708L8 14.707l-2.354-2.353.708-.708L7.5 12.793V8.5H3.207l1.147 1.146-.708.708L1.293 8l2.353-2.354.708.708L3.207 7.5H7.5V3.207L6.354 4.354l-.708-.708z",
      ],
    },
    "move-global": {
      symbolId: "nvidia-react-gui-icons-v1-line-move-global",
      viewBox: "0 0 16 16",
      paths: [
        "m10.354 3.271-.708.708L8.5 2.832V4.5h-1V2.832L6.354 3.979l-.708-.708L8 .918Z",
        "M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M6.5 8a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 6.5 8",
        "M2.832 7.5H4.5v1H2.832l1.147 1.146-.708.708L.918 8l2.353-2.354.708.708Zm12.25.5-2.353 2.354-.708-.708L13.168 8.5H11.5v-1h1.668l-1.147-1.146.708-.707ZM8 15.082l-2.354-2.353.708-.708L7.5 13.168V11.5h1v1.668l1.146-1.147.708.708Z",
      ],
    },
    mud: {
      symbolId: "nvidia-react-gui-icons-v1-line-mud",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 14c0-.365-.077-.626-.189-.817a1.2 1.2 0 0 0-.487-.454c-.443-.241-1.084-.322-1.803-.292-.706.03-1.422.163-1.969.292-.271.064-.497.126-.654.172l-.181.054-.046.015-.01.004h-.003L2 12.5l-.158-.474.002-.001.004-.001.015-.005.055-.018.2-.06c.171-.05.414-.117.705-.185a12 12 0 0 1 2.156-.318c.514-.021 1.063.004 1.572.129a5 5 0 0 0-.834-.718 6.6 6.6 0 0 0-1.694-.822l-.112-.033-.027-.008-.005-.001L4 9.5l.122-.485.002.001h.003l.012.004.04.011q.051.014.142.042a7.5 7.5 0 0 1 1.962.953c.633.434 1.285 1.047 1.717 1.877.432-.83 1.085-1.443 1.717-1.877a7.5 7.5 0 0 1 2.104-.995l.04-.011.012-.004h.004l.001-.001L12 9.5l.122.485-.006.001-.026.008-.113.033a6.6 6.6 0 0 0-1.694.822 5 5 0 0 0-.834.718c.509-.125 1.058-.15 1.572-.129a12 12 0 0 1 2.156.318c.292.068.534.135.705.185l.201.06.054.018.015.005.004.001h.001c.001.001.001.001-.157.475l-.158.474h-.002l-.011-.004-.046-.015-.181-.054a13 13 0 0 0-.654-.172 11 11 0 0 0-1.969-.292c-.719-.03-1.36.051-1.803.292a1.2 1.2 0 0 0-.487.454c-.111.191-.189.452-.189.817ZM8 2.382l.447.894c.129.258.312.539.519.856q.178.271.37.581c.166.268.327.551.449.83.118.273.215.579.215.886a2 2 0 0 1-4 0c0-.307.097-.613.216-.886.121-.279.283-.562.448-.83q.193-.31.37-.581c.207-.317.39-.598.519-.856Zm-.867 3.559c-.096.22-.133.38-.133.488a1 1 0 0 0 2 0c0-.108-.037-.268-.133-.488a6 6 0 0 0-.382-.704c-.094-.153-.202-.318-.311-.487L8 4.482l-.173.268c-.11.169-.218.334-.312.487-.156.254-.289.49-.382.704",
      ],
    },
    mug: {
      symbolId: "nvidia-react-gui-icons-v1-line-mug",
      viewBox: "0 0 16 16",
      paths: [
        "M2 5h9v1h3.393l-1.607 6H11v.566L10.616 14H2.384L2 12.566Zm8 1H3v6.434l.152.566h6.696l.152-.566Zm1 5h1.018l1.072-4H11ZM5.5 4V1h1v3ZM3 4V2h1v2Zm5 0V2h1v2Z",
      ],
    },
    "mug-beer": {
      symbolId: "nvidia-react-gui-icons-v1-line-mug-beer",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8v5h1V8zm2 3v2h1v-2zm2 0v2h1v-2z",
        "M4.5 1c.889 0 1.669.464 2.112 1.162a2.5 2.5 0 0 1 2.214.219A2 2 0 1 1 11 5.732V6h3v7h-3v.566L10.616 15H2.384L2 13.566V5.915a1.5 1.5 0 0 1 .036-2.842A2.5 2.5 0 0 1 4.5 1M10 6q-.238 0-.461-.053-.227.319-.539.553v2a1.5 1.5 0 0 1-3 0v-2a2.5 2.5 0 0 1-.612-.662 2.5 2.5 0 0 1-2.025-.111A1.5 1.5 0 0 1 3 5.915v7.519l.152.566h6.696l.152-.566ZM3 3.5V4h-.5a.5.5 0 1 0 .4.8l.301-.4.399.3c.251.189.562.3.9.3.309 0 .596-.093.834-.253l.536-.36.214.61c.119.339.358.624.666.803l.25.144V8.5a.5.5 0 0 0 1 0V5.944l.25-.144c.268-.155.483-.391.613-.673l.218-.473.464.237q.206.107.455.109a1 1 0 1 0-.763-1.647l-.337.398-.383-.354A1.5 1.5 0 0 0 7.5 3a1.5 1.5 0 0 0-.834.253l-.536.36-.214-.61A1.5 1.5 0 0 0 3 3.5M13 12V7h-2v5Z",
      ],
    },
    multidrive: {
      symbolId: "nvidia-react-gui-icons-v1-line-multidrive",
      viewBox: "0 0 16 16",
      paths: ["M1 3h14v9H1Zm1 1v3h12V4Zm12 4H2v3h12ZM4 6H3V5h1Zm0 4H3V9h1Z"],
    },
    network: {
      symbolId: "nvidia-react-gui-icons-v1-line-network",
      viewBox: "0 0 16 16",
      paths: [
        "M6 3a2 2 0 1 1 2.5 1.937v1.626c.512.132.944.461 1.211.902l1.291-.387Q10.999 7.039 11 7a2 2 0 1 1 .289 1.035l-1.29.387L10 8.5c0 .513-.193.98-.51 1.334l.852 1.277a2 2 0 1 1-.832.555l-.852-1.277a2 2 0 0 1-1.316 0l-.852 1.277a2 2 0 1 1-.832-.555l.852-1.277A2 2 0 0 1 6 8.5l.001-.078-1.29-.387A2 2 0 1 1 5 7l-.001.078 1.29.387c.267-.441.699-.77 1.211-.902V4.937A2 2 0 0 1 6 3m2 4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 4.5a.997.997 0 0 0-1 1 1 1 0 1 0 1-1m-6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "network-connection": {
      symbolId: "nvidia-react-gui-icons-v1-line-network-connection",
      viewBox: "0 0 16 16",
      paths: [
        "m4.147 4.646.707.708L2.207 8l2.647 2.646-.707.708L.793 8ZM13.793 8l-2.647-2.646.708-.708L15.207 8l-3.353 3.354-.708-.708ZM10 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0M4 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "network-pcs": {
      symbolId: "nvidia-react-gui-icons-v1-line-network-pcs",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2h4v3H6ZM1 9h4v3H1Zm10 0h4v3h-4Zm-2.5 1.08 1.629.437-.258.966L8 10.982l-1.871.501-.258-.966L7.5 10.08V7.964h1ZM10 7H6V6h4Zm-5 7H1v-1h4Zm10 0h-4v-1h4ZM7 3v1h2V3Zm-5 7v1h2v-1Zm10 0v1h2v-1Z",
      ],
    },
    "network-signal": {
      symbolId: "nvidia-react-gui-icons-v1-line-network-signal",
      viewBox: "0 0 16 16",
      paths: [
        "M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8M1 8c0-1.657.672-3.157 1.757-4.243l.708.707A4.98 4.98 0 0 0 2 8c0 1.381.559 2.63 1.465 3.535l-.708.708A6 6 0 0 1 1 8m12.243-4.243A6 6 0 0 1 15 8a6 6 0 0 1-1.757 4.243l-.707-.708A4.98 4.98 0 0 0 14 8c0-1.381-.559-2.63-1.464-3.536Zm-1.415 1.415A4 4 0 0 1 13 8a4 4 0 0 1-1.172 2.828l-.707-.707A3 3 0 0 0 12 8c0-.829-.335-1.578-.879-2.121ZM3 8c0-1.104.448-2.105 1.172-2.828l.707.707A3 3 0 0 0 4 8c0 .829.335 1.578.879 2.121l-.707.707A4 4 0 0 1 3 8m5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "network-signal-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-network-signal-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-4.63-4.631a2 2 0 0 1-2.739-2.739l-4.631-4.63Zm4.68 6.095a1 1 0 0 0 1.225 1.225Zm4.795 1.26.762.762C12.853 9.231 13 8.633 13 8a4 4 0 0 0-1.172-2.828l-.707.707C11.665 6.422 12 7.171 12 8c0 .351-.06.688-.171 1.001",
        "M15 8a5.97 5.97 0 0 1-.942 3.229l-.728-.727c.426-.736.67-1.59.67-2.502 0-1.381-.559-2.63-1.464-3.536l.707-.707A6 6 0 0 1 15 8M4.393 6.514l-.726-.726A4 4 0 0 0 3 8c0 1.104.448 2.105 1.172 2.828l.707-.707A3 3 0 0 1 4 8c0-.541.143-1.048.393-1.486",
        "M2 8c0-1.095.351-2.107.948-2.93l-.714-.715A5.97 5.97 0 0 0 1 8c0 1.657.672 3.157 1.757 4.243l.707-.707A5 5 0 0 1 2 8",
      ],
    },
    "neural-network": {
      symbolId: "nvidia-react-gui-icons-v1-line-neural-network",
      viewBox: "0 0 16 16",
      paths: [
        "m4.286 8-.683-1.092Q3.316 6.999 3 7a2 2 0 1 1 1.612-3.183l1.404-.562a2 2 0 1 1 3.968 0l1.404.561a2 2 0 1 1 1.01 3.092L11.715 8l.683 1.092Q12.684 9.001 13 9a2 2 0 1 1-1.612 3.184l-1.404.561Q10 12.87 10 13a2 2 0 1 1-3.984-.255l-1.404-.562a2 2 0 1 1-1.009-3.091ZM14 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-5 2a1 1 0 1 0-2 0 1 1 0 0 0 2 0m5-8a1 1 0 1 0-2 0 1 1 0 0 0 2 0M3 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5.603-1.092a2 2 0 0 1-1.205 0L6.421 6.47l.176.105A2 2 0 0 1 8 6a2 2 0 0 1 1.403.575l.176-.105ZM8 11q.317.001.603.092l.976-1.561-.176-.106A2 2 0 0 1 8 10a2 2 0 0 1-1.403-.575l-.176.105.977 1.562Q7.684 11.001 8 11M6.388 4.184l-1.404.561Q5 4.871 5 5q-.001.297-.082.568l.646.387.986-1.578a2 2 0 0 1-.162-.193m-.824 5.861-.646.387a2 2 0 0 1 .066.823l1.404.561q.075-.102.162-.193Zm5.452-5.3-1.404-.562a2 2 0 0 1-.162.194l.987 1.578.645-.387a2 2 0 0 1-.066-.823M9.45 11.623q.088.092.162.194l1.404-.562a2 2 0 0 1 .066-.823l-.645-.387Zm.659-2.941L10.536 8l-.427-.682-.191.114a2 2 0 0 1 0 1.136ZM5.891 7.318 5.465 8l.426.682.191-.114a2 2 0 0 1 0-1.136Zm5.234 1.625-.158.254.507.304Zm-.158-2.14.158.254.349-.558Zm-6.44 2.698.507-.304-.159-.254Zm.507-2.698-.507-.304.348.558Z",
      ],
    },
    news: {
      symbolId: "nvidia-react-gui-icons-v1-line-news",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v12h-1.185l-.753-.646-1.312.715-1.375-.75-1.375.75-1.375-.75-1.365.745-1.411-.706-.642.642H2Zm1 1v9.793l.651-.651 1.589.794 1.385-.755 1.375.75 1.375-.75 1.375.75 1.438-.785.812.696V3Zm1 1h4v3H4Zm0 5V8h8v1Zm8 1v1H4v-1Zm0-5H9V4h3Zm0 2H9V6h3ZM5 5v1h2V5Z",
      ],
    },
    next: {
      symbolId: "nvidia-react-gui-icons-v1-line-next",
      viewBox: "0 0 16 16",
      paths: [
        "M11 7.713V3.5h1v9h-1V8.287L4 12.37V3.629ZM5 5.371v5.259L9.508 8Z",
      ],
    },
    "not-equal": {
      symbolId: "nvidia-react-gui-icons-v1-line-not-equal",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L9.793 10.5H3.5v-1h5.293l-3-3H3.5v-1h1.293L1.646 2.354zM12.5 6.5H9.328l-1-1H12.5z",
      ],
    },
    notes: {
      symbolId: "nvidia-react-gui-icons-v1-line-notes",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3h8v9a2 2 0 1 1-2-2h1V6H6v6a2 2 0 1 1-2-2h1Zm1 2h6V4H6Zm6 6h-1a1 1 0 1 0 1 1Zm-7 0H4a1 1 0 1 0 1 1Z",
      ],
    },
    numbers: {
      symbolId: "nvidia-react-gui-icons-v1-line-numbers",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 1.5h1v5h-1zm1 7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1v1h2v1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1v-1h-1v.01h-1V8.5zm3-2h2v1h-1v1h1v1h-2v1h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2z",
      ],
    },
    "nvidia-shield": {
      symbolId: "nvidia-react-gui-icons-v1-line-nvidia-shield",
      viewBox: "0 0 16 16",
      paths: [
        "M15 4v8H1V4Zm-4.013 5.04L13.584 5H3.483ZM4.99 6.947 2.411 11h7.316l.717-1.116ZM14 10.663V6.202l-2.13 3.314ZM2 5.337v4.446l2.107-3.311Zm9.327 5.023-.411.64h1.601Z",
      ],
    },
    "nvidia-shield-stand": {
      symbolId: "nvidia-react-gui-icons-v1-line-nvidia-shield-stand",
      viewBox: "0 0 16 16",
      paths: [
        "M2.5 15v-1.23L4 12.484V1h8v14ZM5 11.627l.89-.764 3.15-5.85L5 2.416Zm4.884-6.072L6.947 11.01 11 13.589V6.273ZM3.768 14h6.015l-3.452-2.197Zm5.748-9.87L10.663 2h-4.46ZM11 5.084V3.483l-.64 1.189Z",
      ],
    },
    "open-external": {
      symbolId: "nvidia-react-gui-icons-v1-line-open-external",
      viewBox: "0 0 16 16",
      paths: [
        "M14 2H9v1h3.293L6.646 8.646l.708.708L13 3.707V7h1z",
        "M7 3H2v11h11V9h-1v4H3V4h4z",
      ],
    },
    os: {
      symbolId: "nvidia-react-gui-icons-v1-line-os",
      viewBox: "0 0 16 16",
      paths: [
        "M15 3v11H1V3zM2 13h12V4H2z",
        "M7 8.5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 7 8.5m1 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m1.604.896c.403.404.828.604 1.396.604.867 0 1-.4 1-.5s-.133-.5-1-.5c-1.133 0-2-.6-2-1.5S9.867 6 11 6c.866 0 1.537.33 2.104.896l-.708.708C11.993 7.2 11.568 7 11 7c-.867 0-1 .4-1 .5s.133.5 1 .5c1.133 0 2 .6 2 1.5s-.867 1.5-2 1.5c-.866 0-1.537-.331-2.104-.896z",
      ],
    },
    outbox: {
      symbolId: "nvidia-react-gui-icons-v1-line-outbox",
      viewBox: "0 0 16 16",
      paths: [
        "M13 10.435V14H3v-3.565L3.652 8h8.696ZM4 13h8v-2H9.207L8 12.207 6.793 11H4Zm.151-3h3.056l.793.793.793-.793h3.056l-.269-1H4.42Zm6.203-5.354-.708.708L8.5 4.207V7h-1V4.207L6.354 5.354l-.708-.708L8 2.293z",
      ],
    },
    "outlet-a": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-a",
      viewBox: "0 0 16 16",
      paths: [
        "M5 9V6h1v3zm5-3v3h1V6z",
        "M4.293 2h7.414L14 4.293v7.414L11.707 14H4.293L2 11.707V4.293Zm.414 1L3 4.707v6.586L4.707 13h6.586L13 11.293V4.707L11.293 3Z",
      ],
    },
    "outlet-b": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-b",
      viewBox: "0 0 16 16",
      paths: [
        "M5 5v3h1V5zm5 3V5h1v3zM8 9a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1",
        "M11.707 2 14 4.293v7.414L11.707 14H4.293L2 11.707V4.293L4.293 2ZM3 4.707v6.586L4.707 13h6.586L13 11.293V4.707L11.293 3H4.707Z",
      ],
    },
    "outlet-c": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-c",
      viewBox: "0 0 16 16",
      paths: [
        "M5 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3",
      ],
    },
    "outlet-e": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-e",
      viewBox: "0 0 16 16",
      paths: [
        "M6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M3 8a5 5 0 1 0 10.001-.001A5 5 0 0 0 3 8",
      ],
    },
    "outlet-g": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-g",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 5v2h1V5zM7 10H5V9h2zm2 0h2V9H9z",
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M3 8a5 5 0 1 0 10.001-.001A5 5 0 0 0 3 8",
      ],
    },
    "outlet-h": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-h",
      viewBox: "0 0 16 16",
      paths: [
        "m4.646 6.854 1.5 1.5.708-.708-1.5-1.5zm4.5.792 1.5-1.5.708.708-1.5 1.5zM7.5 9.5V12h1V9.5z",
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M3 8a5 5 0 1 0 10.001-.001A5 5 0 0 0 3 8",
      ],
    },
    "outlet-i": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-i",
      viewBox: "0 0 16 16",
      paths: [
        "m9.146 6.854 2 2 .708-.708-2-2zm-5 1.292 2-2 .708.708-2 2zM7.5 9.5V12h1V9.5z",
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M3 8a5 5 0 1 0 10.001-.001A5 5 0 0 0 3 8",
      ],
    },
    "outlet-j": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-j",
      viewBox: "0 0 16 16",
      paths: [
        "M8 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
        "M13.207 4 15 5.793v4.414L13.207 12H2.793L1 10.207V5.793L2.793 4ZM2 6.207v3.586L3.207 11h9.586L14 9.793V6.207L12.793 5H3.207Z",
      ],
    },
    "outlet-k": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-k",
      viewBox: "0 0 16 16",
      paths: [
        "M5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 3v1a1 1 0 0 1-2 0v-1zm2-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M3 8a5 5 0 1 0 10.001-.001A5 5 0 0 0 3 8",
      ],
    },
    "outlet-l": {
      symbolId: "nvidia-react-gui-icons-v1-line-outlet-l",
      viewBox: "0 0 16 16",
      paths: [
        "M5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
        "M13.207 4 15 5.793v4.414L13.207 12H2.793L1 10.207V5.793L2.793 4ZM2 6.207v3.586L3.207 11h9.586L14 9.793V6.207L12.793 5H3.207Z",
      ],
    },
    outpainting: {
      symbolId: "nvidia-react-gui-icons-v1-line-outpainting",
      viewBox: "0 0 16 16",
      paths: [
        "M9 2v7H2V2ZM3 8h5V3H3Zm7.646 2.854L11.793 12H2v1h9.793l-1.147 1.146.708.708 2.353-2.354-2.353-2.354zM10 3h1V2h-1zm2 0h1v1h1V2h-2zm1 2v1h1V5zm0 2v1h-1v1h2V7zm-2 1h-1v1h1z",
      ],
    },
    package: {
      symbolId: "nvidia-react-gui-icons-v1-line-package",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v12H2Zm1 1v10h10V3h-3v3H6V3Zm1.646 4.568L8.51 8.603l-1.035 3.864-3.864-1.036Zm.708 1.224-.518 1.932 1.932.518.517-1.932ZM7 3v2h2V3Zm4.5 7H9V9h2.5Zm-.5 1v1H9v-1Z",
      ],
    },
    palette: {
      symbolId: "nvidia-react-gui-icons-v1-line-palette",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8c0-3.349 3.213-6 7-6 1.877 0 3.62.499 4.906 1.511C14.204 4.534 15 6.055 15 8c0 1.451-.769 2.458-1.851 2.881-1.055.412-2.35.253-3.426-.465-.92-.613-1.473-.653-1.972-.493a.77.77 0 0 0-.489.464c-.075.205-.074.494.154.836.341.511.521 1.019.49 1.489a1.35 1.35 0 0 1-.705 1.113c-.759.423-1.897.24-2.958-.396-1.245-.747-2.069-1.555-2.575-2.474S1 9.052 1 8m7-5C4.607 3 2 5.349 2 8c0 .948.146 1.749.545 2.473.398.723 1.074 1.415 2.212 2.098.933.56 1.658.547 1.957.38a.34.34 0 0 0 .194-.305c.011-.171-.052-.46-.324-.869-.388-.581-.456-1.201-.262-1.733.189-.518.613-.91 1.125-1.074.88-.281 1.75-.106 2.83.614.835.557 1.79.647 2.508.366C13.475 9.68 14 9.049 14 8c0-1.644-.659-2.874-1.713-3.703C11.22 3.456 9.712 3 8 3m2 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0M3 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M4 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    paperclip: {
      symbolId: "nvidia-react-gui-icons-v1-line-paperclip",
      viewBox: "0 0 16 16",
      paths: [
        "M3.725 8.732a2.501 2.501 0 0 0 3.535 3.536l4.889-4.889.708.707-4.889 4.889a3.5 3.5 0 1 1-4.95-4.95l5.657-5.657a2.5 2.5 0 1 1 3.535 3.536l-5.657 5.657a1.501 1.501 0 0 1-2.121-2.122L9.321 4.55l.707.707-4.889 4.889a.5.5 0 0 0 .707.708l5.657-5.657a1.5 1.5 0 0 0-2.121-2.122Z",
      ],
    },
    paperplane: {
      symbolId: "nvidia-react-gui-icons-v1-line-paperplane",
      viewBox: "0 0 16 16",
      paths: [
        "M.747 1.623 15.241 8 .747 14.377 2.456 8ZM3.357 8.5l-1.104 4.123L12.758 8 2.253 3.378 3.357 7.5H8v1Z",
      ],
    },
    paragraph: {
      symbolId: "nvidia-react-gui-icons-v1-line-paragraph",
      viewBox: "0 0 16 16",
      paths: [
        "M10 4v9H9V4H7v9H6V8h-.5a2.5 2.5 0 1 1 0-5H12v1ZM6 4h-.5a1.5 1.5 0 0 0 0 3H6Z",
      ],
    },
    park: {
      symbolId: "nvidia-react-gui-icons-v1-line-park",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1a3.5 3.5 0 0 1 3.355 4.5A3.502 3.502 0 0 1 12 9.965V13h1.5v1H2v-1h.882l2-1-2-1H2.5v-1h7v1h-.382l-2 1 2 1H11V9.965A3.502 3.502 0 0 1 8.145 5.5 3.5 3.5 0 0 1 11.5 1M9 4.5c0 .293.05.573.142.833l.059.167-.059.167a2.5 2.5 0 1 0 4.716 0l-.059-.167.059-.167q.14-.392.142-.833a2.5 2.5 0 1 0-5 0m-3 6.941L6.882 11H5.118ZM6.882 13 6 12.559 5.118 13Z",
      ],
    },
    pause: {
      symbolId: "nvidia-react-gui-icons-v1-line-pause",
      viewBox: "0 0 16 16",
      paths: ["M5 12V4h1v8Zm5 0V4h1v8Z"],
    },
    pawn: {
      symbolId: "nvidia-react-gui-icons-v1-line-pawn",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a3 3 0 0 1 1.898 5.322l1.05 3.919L12 11.293V12h1v3H3v-3h1v-.707l1.051-1.052 1.05-3.919A3 3 0 0 1 8 1m0 1a2 2 0 0 0-1.061 3.696l.313.197-1.304 4.866-.948.948V12h6v-.293l-.948-.948-1.304-4.866.313-.197A2 2 0 0 0 8 2M4 14h8v-1H4Z",
      ],
    },
    pawprint: {
      symbolId: "nvidia-react-gui-icons-v1-line-pawprint",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 4.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 4.5 4.5M6 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M2 7.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 2 7.5M3.5 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M10 3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10 3m-.5 1.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m1.5 3a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 11 7.5m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M8 7c.648 0 1.266.109 1.873.639.569.498 1.087 1.334 1.671 2.659.316.716.412 1.351.273 1.9-.142.562-.507.954-.943 1.215C10.042 13.912 8.856 14 8 14c-.898 0-2.073-.193-2.894-.74-.421-.281-.78-.677-.922-1.215-.142-.539-.043-1.136.285-1.774.582-1.132 1.095-1.944 1.639-2.473C6.679 7.243 7.285 7 8 7m-2.642 3.729c-.25.487-.269.827-.207 1.061.062.236.227.45.51.638.586.39 1.532.572 2.339.572.849 0 1.785-.1 2.359-.444.268-.161.426-.356.488-.602.066-.259.045-.656-.218-1.252-.573-1.3-1.019-1.964-1.415-2.31C8.856 8.078 8.51 8 8 8c-.442 0-.801.132-1.195.515-.42.408-.872 1.096-1.447 2.214",
      ],
    },
    "payment-card": {
      symbolId: "nvidia-react-gui-icons-v1-line-payment-card",
      viewBox: "0 0 16 16",
      paths: [
        "M1 3h14v10H1Zm13 4.5H2V12h12ZM2 4v1h12V4Zm12 2H2v.5h12Zm-5 4H3V9h6Zm4 0h-2V9h2Z",
      ],
    },
    pen: {
      symbolId: "nvidia-react-gui-icons-v1-line-pen",
      viewBox: "0 0 16 16",
      paths: [
        "m14.207 3.5-1.5 1.5.5.5-8.5 8.5h-2l-.353.354-.708-.708.354-.353v-2L8.793 4.5 8 3.707 4.354 7.354l-.708-.708L8 2.293l1.5 1.5 1-1 .5.5 1.5-1.5ZM3 11.707V13h1.293l7.5-7.5L10.5 4.207ZM11.707 4l.293.293.793-.793-.293-.293Z",
      ],
    },
    pencil: {
      symbolId: "nvidia-react-gui-icons-v1-line-pencil",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1.793 14.207 4.5l-9.5 9.5H2v-2.707ZM3 11.707V13h1.293l6.5-6.5L9.5 5.207ZM10.207 4.5 11.5 5.793 12.793 4.5 11.5 3.207Z",
      ],
    },
    "performance-high": {
      symbolId: "nvidia-react-gui-icons-v1-line-performance-high",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 0 0-3.213 11.068l-.536.845a7 7 0 1 1 7.498-.001l-.536-.844A6 6 0 0 0 8 2M6.5 8a1.5 1.5 0 0 1 2.995-.117l2.982.799-.259.966-2.981-.799A1.5 1.5 0 0 1 6.5 8M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "performance-low": {
      symbolId: "nvidia-react-gui-icons-v1-line-performance-low",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 0 0-3.213 11.068l-.536.845a7 7 0 1 1 7.498-.001l-.536-.844A6 6 0 0 0 8 2M6.504 7.883a1.5 1.5 0 1 1 .259.966l-2.981.799-.259-.966ZM8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "performance-medium": {
      symbolId: "nvidia-react-gui-icons-v1-line-performance-medium",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 0 0-3.213 11.068l-.536.845a7 7 0 1 1 7.498-.001l-.536-.844A6 6 0 0 0 8 2m.273 4.525L9.817 3.85l.866.5-1.544 2.674a1.5 1.5 0 1 1-.866-.499M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "phone-laptop": {
      symbolId: "nvidia-react-gui-icons-v1-line-phone-laptop",
      viewBox: "0 0 16 16",
      paths: [
        "M14 2H4v3h1V3h8v5H8v1h6zm-6 9h7v-1H8z",
        "M7 6v8H2V6Zm-4 5h3V7H5v1H4V7H3Zm0 1v1h3v-1Z",
      ],
    },
    "physical-exit": {
      symbolId: "nvidia-react-gui-icons-v1-line-physical-exit",
      viewBox: "0 0 16 16",
      paths: [
        "M14 14h-3v-1h2V2H8V1h6z",
        "M10.117 6.17 8.718 8.272l-2.463-.659-.546 2.037 2.7.725.862 3.221-.965.258-.714-2.664-2.142-.574-.614 2.292-3.278.879-.261-.966 2.723-.73 1.23-4.59H3.376L2.324 9.082l-.832-.554 1.349-2.027h3.127l2.315.619 1.001-1.505z",
        "M6.514 3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.514 3m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "picture-in-picture": {
      symbolId: "nvidia-react-gui-icons-v1-line-picture-in-picture",
      viewBox: "0 0 16 16",
      paths: ["M1 3h14v10H1Zm1 1v8h12V4Zm5 1h6v4H7Zm1 1v2h4V6Z"],
    },
    "pill-bar-stack": {
      symbolId: "nvidia-react-gui-icons-v1-line-pill-bar-stack",
      viewBox: "0 0 16 16",
      paths: [
        "M14 2v3H2V2ZM3 4h10V3H3ZM2 8h12V7H2zm0 3h12v-1H2zm12 3H2v-1h12z",
      ],
    },
    pin: {
      symbolId: "nvidia-react-gui-icons-v1-line-pin",
      viewBox: "0 0 16 16",
      paths: [
        "M5.454 2H4.5V1h7v1h-.955l.423 4.84L12 7.116V10H8.5v5h-1v-5H4V7.116l1.032-.276Zm1.004 0-.49 5.624-.968.26V9h6V7.884l-.968-.26L9.542 2Z",
      ],
    },
    "pin-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-pin-off",
      viewBox: "0 0 16 16",
      paths: [
        "M12 7.116v2.056l-1-1v-.288l-.393-.106-.615-.614L9.542 2H6.458l-.13 1.499-.924-.923L5.455 2h-.627L4.5 1.672V1h7v1h-.954l.422 4.84zM9.293 10H8.5v5h-1v-5H4V7.116l1.032-.276.089-1.012-3.475-3.474.708-.708 12 12-.708.708ZM6.044 6.751l-.076.873-.968.26V9h3.293Z",
      ],
    },
    pizza: {
      symbolId: "nvidia-react-gui-icons-v1-line-pizza",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 7M8 8.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0",
        "M3.5 2c4.627 0 8.666 2.514 10.827 6.249l.251.433L3 15.366V2ZM4 8.915v4.719l1.608-.928A1.499 1.499 0 1 1 7.99 11.33l3.477-2.007A9.5 9.5 0 0 0 4 5.013v1.072q.236-.084.5-.085A1.5 1.5 0 1 1 4 8.915m0-4.903c3.5.164 6.551 2.041 8.334 4.81l.867-.5A11.49 11.49 0 0 0 4 3.011ZM4 7.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M6.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    placesetting: {
      symbolId: "nvidia-react-gui-icons-v1-line-placesetting",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 3a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 11.5 3m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M2.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M7 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M1 6v5h1V6zm13 5V6h1v5zm-2-5v5h1V6z",
      ],
    },
    platformer: {
      symbolId: "nvidia-react-gui-icons-v1-line-platformer",
      viewBox: "0 0 16 16",
      paths: [
        "M9 14H2v-3h7Zm-6-1h5v-1H3Zm2-3H4V9h1zm9-1H7V6h7ZM8 8h5V7H8Zm0-4a3 3 0 0 0-3 3v1H4V7a4 4 0 0 1 4-4zm2.5-2a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 2m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    play: {
      symbolId: "nvidia-react-gui-icons-v1-line-play",
      viewBox: "0 0 16 16",
      paths: ["M5 3.629 12.492 8 5 12.37ZM6 5.37v5.26L10.508 8Z"],
    },
    "plug-receptacle": {
      symbolId: "nvidia-react-gui-icons-v1-line-plug-receptacle",
      viewBox: "0 0 16 16",
      paths: [
        "m5.5 7.793 1.646-1.647.708.707L6.207 8.5 7.5 9.793l1.646-1.647.708.708L8.207 10.5l1.147 1.146-.708.708L8 11.707l-.704.704-2.395 1.197L4 12.707l-1.646 1.647-.708-.708L3.293 12l-.901-.901 1.197-2.395L4.293 8l-.647-.646.708-.708.646.647Zm6.5-4.5 1.646-1.647.708.708L12.707 4l.901.901-1.197 2.395-.704.704.647.646-.707.708L11 8.707 6.647 4.354l.707-.708.646.647.704-.704 2.395-1.197Zm-1 4 .589-.589.803-1.605-1.491-1.491-1.605.803L8.707 5ZM5 8.707l-.589.589-.803 1.605 1.491 1.491 1.605-.803.589-.589Z",
      ],
    },
    "plug-usb": {
      symbolId: "nvidia-react-gui-icons-v1-line-plug-usb",
      viewBox: "0 0 16 16",
      paths: [
        "M4 1h8v7h1v3.678l-3 .804V15H6v-2.518l-3-.804V8h1Zm7 7V2H5v6ZM4 9v1.911l4 1.071 4-1.071V9Zm3 3.75V14h2v-1.25l-1 .268ZM6 5V3h1v2Zm3 0V3h1v2Z",
      ],
    },
    plugin: {
      symbolId: "nvidia-react-gui-icons-v1-line-plugin",
      viewBox: "0 0 16 16",
      paths: [
        "M6 4V1h1v3h2V1h1v3h3v1h-1v2.365L11.294 10H8.5v1.5A2.5 2.5 0 0 1 6 14H3v-1h3a1.5 1.5 0 0 0 1.5-1.5V10H4.706L4 7.365V5H3V4ZM5 5v2.233L5.473 9h5.054L11 7.233V5Z",
      ],
    },
    podium: {
      symbolId: "nvidia-react-gui-icons-v1-line-podium",
      viewBox: "0 0 16 16",
      paths: [
        "M11 2v1h2.151l-1.339 5H8.5v5H10v1H6v-1h1.5V8H4.188l-1.34-5H5V2ZM4.151 4l.804 3H7.5V5.5h1V7h2.544l.804-3Z",
      ],
    },
    power: {
      symbolId: "nvidia-react-gui-icons-v1-line-power",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 1v7h1V1z",
        "M10.5 3.669a5 5 0 1 1-5 0l-.501-.866a6 6 0 1 0 6.002 0z",
      ],
    },
    "power-supply-unit": {
      symbolId: "nvidia-react-gui-icons-v1-line-power-supply-unit",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M2.048 8.749a5.998 5.998 0 0 0 11.936-.346L7.5 12.394V5.395ZM8 2a6 6 0 0 0-5.985 5.596L8.5 3.605v7.001l5.451-3.356A6 6 0 0 0 8 2",
      ],
    },
    "prayer-room": {
      symbolId: "nvidia-react-gui-icons-v1-line-prayer-room",
      viewBox: "0 0 16 16",
      paths: [
        "m6.5 1.293 1.5 1.5 1.5-1.5 4.488 4.488.484 8.219H15v1H1v-1h.529l.483-8.219ZM2.53 14h3.187L7 11.862V7.5H5.991l-.491.85v2.15h-1V8.082l2.699-4.675-.699-.7-3.512 3.512Zm7.753 0h3.187l-.458-7.781L9.5 2.707l-.699.7L11.5 8.082V10.5h-1V8.35l-.491-.85H9v4.362ZM6.568 6.5h2.864L8 4.02Zm.315 7.5h2.234L8 12.139Z",
      ],
    },
    previous: {
      symbolId: "nvidia-react-gui-icons-v1-line-previous",
      viewBox: "0 0 16 16",
      paths: [
        "M4 12.5v-9h1v4.213l7-4.084v8.741L5 8.287V12.5ZM6.492 8 11 10.63V5.371Z",
      ],
    },
    profile: {
      symbolId: "nvidia-react-gui-icons-v1-line-profile",
      viewBox: "0 0 16 16",
      paths: [
        "M4.456 8h7.088l1.607 6H2.848ZM5 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m.223 5-1.072 4h7.697l-1.072-4ZM8 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 2",
      ],
    },
    "profile-group": {
      symbolId: "nvidia-react-gui-icons-v1-line-profile-group",
      viewBox: "0 0 16 16",
      paths: [
        "M2.456 8h7.088l1.607 6H.848ZM3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m.223 5-1.072 4h7.697L8.776 9ZM6 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 6 2m6.244 8h-1.316V9h2.084l1.339 5H12v-1h1.048Zm-2.4-7.495Q9.922 2.5 10 2.5a2.5 2.5 0 0 1 .317 4.98l-.126-.992a1.5 1.5 0 0 0-.285-2.985Z",
      ],
    },
    "profile-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-profile-off",
      viewBox: "0 0 16 16",
      paths: [
        "m12.582 11.875 1.772 1.771-.708.708-12-12 .708-.708 2.661 2.662a3 3 0 1 1 2.676 2.676L8.707 8h2.837ZM8 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 2m1.707 7 1.461 1.461L10.776 9ZM5.223 9h.949l-1-1h-.716l-1.608 6h8.324l-1-1H4.151z",
      ],
    },
    projector: {
      symbolId: "nvidia-react-gui-icons-v1-line-projector",
      viewBox: "0 0 16 16",
      paths: [
        "M1 2h14v2h-1v7h-3.92l.903 3.37-.966.259L9.58 13H6.419l-.436 1.629-.966-.259L5.92 11H2V4H1Zm2 8h10V4H3Zm3.955 1-.268 1h2.625l-.268-1Z",
      ],
    },
    pulse: {
      symbolId: "nvidia-react-gui-icons-v1-line-pulse",
      viewBox: "0 0 16 16",
      paths: [
        "m5.552 1.263 2.436 9.089 2.588-7L11.554 7H15v1h-4.214l-.362-1.352-2.589 7-2.387-8.911L4.36 8H1V7h2.64Z",
      ],
    },
    puzzle: {
      symbolId: "nvidia-react-gui-icons-v1-line-puzzle",
      viewBox: "0 0 16 16",
      paths: [
        "M6 4a2 2 0 1 1 4 0h3v3h-1a1 1 0 0 0 0 2h1v4H9v-1a1 1 0 0 0-2 0v1H4v-3a2 2 0 1 1 0-4V4Zm2-1a1 1 0 0 0-1 1v1H5v2H4a1 1 0 0 0 0 2h1v3h1a2 2 0 1 1 4 0h2v-2a2 2 0 1 1 0-4V5H9V4a1 1 0 0 0-1-1",
      ],
    },
    qrcode: {
      symbolId: "nvidia-react-gui-icons-v1-line-qrcode",
      viewBox: "0 0 16 16",
      paths: [
        "M2.5 2.5h2v2h-2z",
        "M6 1v5H1V1ZM2 5h3V2H2Zm5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8.5-1.5h2v2h-2z",
        "M6 10v5H1v-5Zm-4 4h3v-3H2Zm9.5-11.5h2v2h-2z",
        "M15 1v5h-5V1Zm-4 4h3V2h-3Z",
      ],
    },
    radar: {
      symbolId: "nvidia-react-gui-icons-v1-line-radar",
      viewBox: "0 0 16 16",
      paths: [
        "m9.329 1.108.483.129a7.003 7.003 0 0 1 4.951 8.575l-.129.483-7.246-1.941Zm-1.635.9a6 6 0 1 0 5.344 9.253l.839.544A7 7 0 1 1 7.644 1.009Zm2.337.344L8.612 7.646l5.294 1.419Q13.999 8.547 14 8c0-2.6-1.655-4.815-3.969-5.648M6.982 5.177a3 3 0 1 0 2.952 5.116l.645.764a4 4 0 1 1-3.937-6.82Z",
      ],
    },
    radioactive: {
      symbolId: "nvidia-react-gui-icons-v1-line-radioactive",
      viewBox: "0 0 16 16",
      paths: [
        "M4.499 1.937A7 7 0 0 1 8 1c1.274 0 2.471.341 3.501.937l.432.25-2.25 3.898-.433-.251A2.5 2.5 0 0 0 8 5.5c-.456 0-.883.122-1.25.334l-.433.251-2.25-3.898ZM1 7.5h4.5V8a2.5 2.5 0 0 0 1.25 2.166l.433.25-2.251 3.898-.433-.251A7 7 0 0 1 1 8Zm14 0V8a7 7 0 0 1-3.499 6.063l-.433.251-2.251-3.898.433-.25A2.5 2.5 0 0 0 10.5 8v-.5ZM5.443 2.571l1.258 2.178C7.103 4.588 7.541 4.5 8 4.5s.897.088 1.299.249l1.258-2.178A6 6 0 0 0 8 2c-.915 0-1.782.205-2.557.571M11.465 8.5a3.5 3.5 0 0 1-1.3 2.25l1.258 2.179A6 6 0 0 0 13.979 8.5Zm-9.444 0a6 6 0 0 0 2.556 4.429l1.258-2.179a3.5 3.5 0 0 1-1.3-2.25ZM6.5 8a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 8M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    ram: {
      symbolId: "nvidia-react-gui-icons-v1-line-ram",
      viewBox: "0 0 16 16",
      paths: [
        "M3.5 5V3h1v2h1V3h1v2h1V3h1v2h1V3h1v2h1V3h1v2H14v6h-1.5v2h-1v-2h-1v2h-1v-2h-1v2h-1v-2h-1v2h-1v-2h-1v2h-1v-2H2V5ZM3 6v4h10V6Z",
      ],
    },
    "ranking-xp": {
      symbolId: "nvidia-react-gui-icons-v1-line-ranking-xp",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 6h-1v1.44l.7.56-.7.56V10h1v-.96l.5-.4.5.4V10h1V8.56L6.8 8l.7-.56V6h-1v.96l-.5.4-.5-.4zM11 6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1v1H9V6Zm-1 2h1V7h-1Z",
        "M14.001 4.536v6.928l-6 3.464-6-3.464V4.536l6-3.464Zm-11 6.351 5 2.887 5-2.887V5.113l-5-2.887-5 2.887Z",
      ],
    },
    record: {
      symbolId: "nvidia-react-gui-icons-v1-line-record",
      viewBox: "0 0 16 16",
      paths: [
        "M3 8a5 5 0 1 1 10.001.001A5 5 0 0 1 3 8m5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "rectangle-group": {
      symbolId: "nvidia-react-gui-icons-v1-line-rectangle-group",
      viewBox: "0 0 16 16",
      paths: [
        "M3 2h5v6H3Zm1 1v4h3V3ZM2 9h6v5H2Zm1 1v3h4v-3Zm6-6h5v8H9Zm1 1v6h3V5Z",
      ],
    },
    redo: {
      symbolId: "nvidia-react-gui-icons-v1-line-redo",
      viewBox: "0 0 16 16",
      paths: [
        "M5.175 5.172c1.536-1.536 3.881-1.409 5.471.182l1.646 1.645L10 7l.001 1 3.997-.002L14 4h-1l-.001 2.292-1.645-1.646c-1.925-1.924-4.906-2.161-6.886-.182a5 5 0 0 0 0 7.072l.707-.708a4 4 0 0 1 0-5.656",
      ],
    },
    reference: {
      symbolId: "nvidia-react-gui-icons-v1-line-reference",
      viewBox: "0 0 16 16",
      paths: [
        "M11 2h4v4h-1V3.707l-3.646 3.647-.708-.708L13.293 3H11zM8.938 3.291 7 2.173 5.062 3.291l.5.866L7 3.327l1.438.83zM3.5 5.348l.938-.541-.5-.866L2 5.059v2.238h1V6.214l.938.541.5-.866zM3 8.596v1.66l1.438.829-.5.866L2 10.833V8.596zm8 0v1.66l-1.438.829.5.866L12 10.833V8.596zm-3.5 3.68v-1.082h-1v1.082l-.938-.541-.5.866L7 13.72l1.938-1.119-.5-.866zm0-4.618L5.562 6.539l-.5.866 1.438.83v1.66h1z",
      ],
    },
    refresh: {
      symbolId: "nvidia-react-gui-icons-v1-line-refresh",
      viewBox: "0 0 16 16",
      paths: [
        "M8 3a5 5 0 1 0 1.294 9.831l-.258-.966Q8.54 11.998 8 12a4 4 0 1 1 4-4v1.293l-1.646-1.647-.708.708 2.854 2.853 2.854-2.853-.708-.708L13 9.293V8a5 5 0 0 0-5-5",
      ],
    },
    remote: {
      symbolId: "nvidia-react-gui-icons-v1-line-remote",
      viewBox: "0 0 16 16",
      paths: [
        "M5.25 2.236A5.47 5.47 0 0 1 8 1.5c1.003 0 1.941.268 2.75.736l.501-.866A6.5 6.5 0 0 0 8 .5a6.5 6.5 0 0 0-3.251.87zm1 1.732A3.5 3.5 0 0 1 8 3.5c.638 0 1.236.171 1.75.468l.501-.865A4.5 4.5 0 0 0 8 2.5c-.819 0-1.588.219-2.251.603zM8 6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 6.5M7.5 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m-.75 3.5v-1h1v1zm1.5-1v1h1v-1zM6.75 13v-1h1v1zm1.5-1v1h1v-1z",
        "M5 5h6v10H5Zm1 1v8h4V6Z",
      ],
    },
    rename: {
      symbolId: "nvidia-react-gui-icons-v1-line-rename",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 2.385 6.935 2H8v1h-.933L6 3.285v9.429L7.067 13H8v1H6.935L5.5 13.615 4.065 14H3v-1h.934L5 12.714V3.285L3.933 3H3V2h1.065z",
        "m13.493 11.87-.966.26-.57-2.13H9.045l-.57 2.13-.967-.26L9.617 4h1.767ZM9.313 9h2.376l-1.072-4h-.232Z",
      ],
    },
    render: {
      symbolId: "nvidia-react-gui-icons-v1-line-render",
      viewBox: "0 0 16 16",
      paths: [
        "M4 3h10v10H4Zm1 1v4.211l2.8 1.617 2.85-1.645L13 9.54V4Zm8 6.694-2.35-1.357-2.85 1.646L5 9.366V12h8ZM2 12V4h1v8Zm4.455-5.227a1.318 1.318 0 1 1 2.636 0 1.318 1.318 0 0 1-2.636 0m1.318-.318a.318.318 0 1 0-.001.635.318.318 0 0 0 .001-.635",
      ],
    },
    replay: {
      symbolId: "nvidia-react-gui-icons-v1-line-replay",
      viewBox: "0 0 16 16",
      paths: [
        "M7.354 1.646 9.707 4H8a4 4 0 0 0-2.116 7.395l-.53.848a5 5 0 0 1 1.983-9.199l-.691-.69ZM12 8a4 4 0 0 0-1.884-3.395l.53-.848a5 5 0 0 1-1.983 9.199l.691.69-.708.708L6.293 12H8a4 4 0 0 0 4-4M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "replay-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-replay-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.482-2.483c-.7.573-1.559.96-2.501 1.085l.691.69-.708.708L6.293 12H8c.924 0 1.775-.314 2.453-.84L9.016 9.723a2 2 0 0 1-2.739-2.739L4.84 5.547A4 4 0 0 0 4 8c0 1.432.751 2.688 1.884 3.395l-.53.848A5 5 0 0 1 3 8c0-1.2.423-2.302 1.129-3.164L1.646 2.354Zm4.68 6.095a1 1 0 0 0 1.225 1.225ZM13 8a5 5 0 0 1-.619 2.411l-.658-.946a3.996 3.996 0 0 0-1.607-4.86l.53-.848A5 5 0 0 1 13 8M8 4c-.358 0-.706.047-1.036.136l-.791-.791a5 5 0 0 1 1.164-.301l-.691-.69.708-.708L9.707 4z",
      ],
    },
    reply: {
      symbolId: "nvidia-react-gui-icons-v1-line-reply",
      viewBox: "0 0 16 16",
      paths: [
        "m4.707 5 1.647-1.646-.708-.708L2.793 5.5l2.853 2.854.708-.708L4.707 6h7.311l-1.707 6.371.966.258L13.322 5z",
      ],
    },
    reset: {
      symbolId: "nvidia-react-gui-icons-v1-line-reset",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8a4 4 0 1 1 2.964 3.865l-.258.966A5 5 0 1 0 3 8v1.293L1.354 7.646l-.708.708L3.5 11.207l2.854-2.853-.708-.708L4 9.293z",
      ],
    },
    retry: {
      symbolId: "nvidia-react-gui-icons-v1-line-retry",
      viewBox: "0 0 16 16",
      paths: [
        "M11.207 3.5 8.354.646l-.708.708L9.293 3H8a5 5 0 1 0 5 5h-1a4 4 0 1 1-4-4h1.293L7.646 5.646l.708.708z",
      ],
    },
    return: {
      symbolId: "nvidia-react-gui-icons-v1-line-return",
      viewBox: "0 0 16 16",
      paths: [
        "m4.707 5 1.647-1.646-.707-.708L2.793 5.5l2.854 2.854.707-.708L4.707 6h7.311l-1.607 6H3v1h8.178l2.144-8z",
      ],
    },
    "reverse-10": {
      symbolId: "nvidia-react-gui-icons-v1-line-reverse-10",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8a5 5 0 1 1 5 5v1a6 6 0 1 0-5.898-7.105L1.854 5.646l-.708.708L4 9.207z",
        "M6 5h1.01v1.125H7v3.75h.01V11H6zm2 1.125C8 5.422 8.649 5 9.25 5h1.5c.601 0 1.25.422 1.25 1.125v3.75c0 .703-.649 1.125-1.25 1.125h-1.5C8.649 11 8 10.578 8 9.875Zm1.04-.058C9 6.1 9 6.123 9 6.125v3.75c0 .002 0 .025.04.058a.33.33 0 0 0 .21.067h1.5a.33.33 0 0 0 .21-.067c.04-.033.04-.056.04-.058v-3.75c0-.002 0-.025-.04-.058A.33.33 0 0 0 10.75 6h-1.5a.33.33 0 0 0-.21.067",
      ],
    },
    river: {
      symbolId: "nvidia-react-gui-icons-v1-line-river",
      viewBox: "0 0 16 16",
      paths: [
        "M2.348 10.541C1.857 10.214 1.5 9.694 1.5 9h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541-.475.317-1.078.459-1.652.459s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 10.858 8.574 11 8 11s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C5.177 10.858 4.574 11 4 11s-1.177-.142-1.652-.459m0-4C1.857 6.214 1.5 5.694 1.5 5h1c0 .306.143.536.402.709C3.177 5.892 3.574 6 4 6s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 5.892 7.574 6 8 6s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 6.858 12.574 7 12 7s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 6.858 8.574 7 8 7s-1.177-.142-1.652-.459A2 2 0 0 1 6 6.251a2 2 0 0 1-.348.29C5.177 6.858 4.574 7 4 7s-1.177-.142-1.652-.459",
      ],
    },
    robot: {
      symbolId: "nvidia-react-gui-icons-v1-line-robot",
      viewBox: "0 0 16 16",
      paths: [
        "M12 4H4v4h8zm-1 1.5v1H5v-1zM7.141 3h1.718l-.25-1H7.391zM13 5.5h1V5h1v2h-1v-.5h-1V9H3V6.5H2V7H1V5h1v.5h1V3h3.109l.5-2h2.782l.5 2H13zM11.544 10l1.339 5H3.117l1.339-5zM4.42 14h7.16l-.803-3H5.223z",
      ],
    },
    "robot-arm": {
      symbolId: "nvidia-react-gui-icons-v1-line-robot-arm",
      viewBox: "0 0 16 16",
      paths: [
        "M10 3c0 .385-.109.744-.297 1.049l1.793 1.748.297-.297h1.914l1.647 1.646-.708.708L13.293 6.5h-1.086l-.353.354-.354.353v1.086l1.354 1.353-.708.708L10.5 8.707V6.793l.288-.289-1.806-1.761-.002.001a2 2 0 0 1-1.996-.021L5.586 6.121l.031.048a2.5 2.5 0 0 1 .271 2.073L9.646 12h4.238l.804 3H1.313l.804-3h3.287L3.402 9.998a2.5 2.5 0 1 1 1.477-4.584l1.398-1.398A2 2 0 1 1 10 3m3.116 10H2.884l-.268 1h10.768ZM3.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 3.5 6m1.88 3.148a2.5 2.5 0 0 1-.804.609L6.818 12h1.414ZM8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "robot-delivery": {
      symbolId: "nvidia-react-gui-icons-v1-line-robot-delivery",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3h1.348l.536 2h7l.937 3.5-.529 1.975A2 2 0 1 1 11 12h-1a2 2 0 1 1-4 0H5a2 2 0 1 1-3-1.731V5.434L2.657 3H4V2h1Zm-2 7c.74 0 1.385.403 1.73 1h1.54a1.996 1.996 0 0 1 3.46 0h1.539a2 2 0 0 1 2.105-.964l.412-1.536-.67-2.5H3Zm10 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m.152-6h2.696L5.58 4H3.423Z",
      ],
    },
    "robot-torso": {
      symbolId: "nvidia-react-gui-icons-v1-line-robot-torso",
      viewBox: "0 0 16 16",
      paths: [
        "M10 5H6V4h4z",
        "M9.136 2H12v2h1v1h-1v2H8.5v1h2.383l.268 1h1.484a1 1 0 0 1 .527-.441l.587-2.189.966.26-.567 2.11A1 1 0 1 1 12.635 10h-1.216l.804 3H8.5v1H10v1H6v-1h1.5v-1H3.776l.804-3H3.365a1 1 0 1 1-1.572-1.208l-.58-2.162.967-.26.579 2.165c.258.069.475.239.606.465h1.483l.268-1H7.5V7H4V5H3V4h1V2h2.864l.242-1h1.788ZM5 6h6V3H5Zm.08 6h5.84l-.804-3H5.883Z",
      ],
    },
    "robot-wheels": {
      symbolId: "nvidia-react-gui-icons-v1-line-robot-wheels",
      viewBox: "0 0 16 16",
      paths: [
        "M10 5H6V4h4z",
        "M9.136 2H12v2h1v1h-1v2H8.5v1h3.384l.535 2H14v5h-4v-2H6v2H2v-5h1.58l.536-2H7.5V7H4V5H3V4h1V2h2.864l.242-1h1.788ZM5 6h6V3H5Zm-.384 4H6v2h4v-2h1.384l-.268-1H4.884ZM3 14h2v-3H3Zm8 0h2v-3h-2Z",
      ],
    },
    rock: {
      symbolId: "nvidia-react-gui-icons-v1-line-rock",
      viewBox: "0 0 16 16",
      paths: [
        "M4.462 7.96 7.77 9.063l2.23 2.23v2.475l-1.874 1.249-4.855-.539-1.806-1.806.584-3.505Zm.076 1.08-1.587.793-.415 2.495 1.194 1.194 4.144.461L9 13.232v-1.525l-1.77-1.77Zm6.062-7.1 2.885 2.308.535 8.551-2.296 1.148-.448-.894 1.704-.852-.465-7.449L10.4 3.06l-2.481.828-.934 3.733-.97-.242 1.067-4.267Z",
      ],
    },
    rocket: {
      symbolId: "nvidia-react-gui-icons-v1-line-rocket",
      viewBox: "0 0 16 16",
      paths: [
        "M8 11.707v2l-1.5 1.5L4.793 13.5l1-1L5 11.707l-1.146 1.147-.707-.708L4.293 11l-.793-.793-1 1L.793 9.5l1.5-1.5h2l3.096-3.096q.402-.402.867-.75c1.268-.946 2.956-1.61 4.402-1.128l.237.079.079.237c.483 1.447-.182 3.134-1.128 4.402q-.348.465-.75.867Zm2.776-4.224L8.517 5.224a7 7 0 0 0-.421.387L4.207 9.5l.793.793.647-.647.707.708-.647.646.793.793 3.889-3.889q.2-.2.387-.421M9.335 4.628l2.038 2.037c.588-.946.877-1.947.718-2.756-.809-.159-1.81.13-2.756.719M7 12.707l-.793.793.293.293.5-.5ZM3.293 9h-.586l-.5.5.293.293Z",
      ],
    },
    rotate: {
      symbolId: "nvidia-react-gui-icons-v1-line-rotate",
      viewBox: "0 0 16 16",
      paths: [
        "M2 7.5c0-.516.474-1.141 1.613-1.667C4.71 5.326 6.261 5 8 5s3.29.326 4.387.833C13.526 6.359 14 6.984 14 7.5c0 .298-.15.628-.519.97-.37.343-.93.664-1.651.925l.34.94c.801-.289 1.491-.669 1.99-1.131.501-.463.84-1.041.84-1.704 0-1.141-.981-2.015-2.194-2.575C11.55 4.345 9.85 4 8 4s-3.55.345-4.806.925C1.981 5.485 1 6.359 1 7.5s.981 2.015 2.194 2.575C4.45 10.655 6.15 11 8 11h.293l-.647.646.708.708 1.853-1.854-1.853-1.854-.708.708.647.646H8c-1.739 0-3.29-.326-4.387-.833C2.474 8.642 2 8.016 2 7.5",
      ],
    },
    "rotate-3d": {
      symbolId: "nvidia-react-gui-icons-v1-line-rotate-3d",
      viewBox: "0 0 16 16",
      paths: [
        "M5.016 7.309c.033-.707.118-1.386.246-2.019a8.4 8.4 0 0 0-1.649.543C2.474 6.359 2 6.984 2 7.5s.474 1.142 1.613 1.667C4.71 9.674 6.261 10 8 10h.293l-.647-.646.708-.708 1.853 1.854-1.853 1.854-.708-.708.647-.646H8c-1.85 0-3.55-.345-4.806-.925C1.981 9.515 1 8.641 1 7.5s.981-2.015 2.194-2.575c.669-.309 1.465-.551 2.342-.71q.171-.549.389-1.021C6.485 1.981 7.359 1 8.5 1s2.015.981 2.575 2.194c.177.384.333.81.463 1.268q.69.196 1.268.463C14.019 5.485 15 6.359 15 7.5c0 1.007-.769 1.806-1.757 2.354l-.486-.874C13.642 8.489 14 7.951 14 7.5c0-.516-.474-1.141-1.613-1.667a7 7 0 0 0-.591-.24C11.928 6.346 12 7.157 12 8c0 1.85-.345 3.55-.925 4.806C10.515 14.019 9.641 15 8.5 15c-.663 0-1.241-.34-1.704-.84s-.842-1.189-1.131-1.99l.94-.34c.261.721.582 1.281.925 1.651.342.369.672.519.97.519.516 0 1.142-.474 1.667-1.613C10.674 11.29 11 9.739 11 8c0-.981-.104-1.902-.285-2.715A12.6 12.6 0 0 0 8 5c-.582 0-1.143.037-1.673.104a12 12 0 0 0-.308 2.17l.627-.628.708.708L5.5 9.207 3.646 7.354l.708-.708Zm1.817-3.696a7 7 0 0 0-.188.45Q7.305 4.001 8 4c.843 0 1.654.072 2.407.204a7 7 0 0 0-.24-.591C9.642 2.474 9.016 2 8.5 2s-1.141.474-1.667 1.613",
      ],
    },
    "rotate-90-clockwise": {
      symbolId: "nvidia-react-gui-icons-v1-line-rotate-90-clockwise",
      viewBox: "0 0 16 16",
      paths: [
        "M7.793 3.5 6.646 2.354l.708-.708L9.707 4 7.354 6.354l-.708-.708L7.793 4.5H6.5A2.5 2.5 0 0 0 4 7H3a3.5 3.5 0 0 1 3.5-3.5zM5 7h6v6H5Zm1 1v4h4V8Z",
      ],
    },
    "rotate-90-counter": {
      symbolId: "nvidia-react-gui-icons-v1-line-rotate-90-counter",
      viewBox: "0 0 16 16",
      paths: [
        "m8.207 3.5 1.147-1.146-.708-.708L6.293 4l2.353 2.354.708-.708L8.207 4.5H9.5A2.5 2.5 0 0 1 12 7h1a3.5 3.5 0 0 0-3.5-3.5zM5 7h6v6H5Zm1 1v4h4V8Z",
      ],
    },
    "rotate-global": {
      symbolId: "nvidia-react-gui-icons-v1-line-rotate-global",
      viewBox: "0 0 16 16",
      paths: [
        "M13 8a5 5 0 0 0-5-5V2a6 6 0 0 1 6 6v.293l.647-.647.707.708-1.854 1.853-1.853-1.853.707-.708.646.647zm-11.646.354L2 7.707V8a6 6 0 0 0 6 6v-1a5 5 0 0 1-5-5v-.293l.647.647.707-.708L2.5 5.793.647 7.646z",
        "M8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M6.5 8a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 6.5 8",
      ],
    },
    route: {
      symbolId: "nvidia-react-gui-icons-v1-line-route",
      viewBox: "0 0 16 16",
      paths: [
        "M11.642 9.939c-.337.426-.728.783-1.142 1.13-.414-.347-.805-.704-1.142-1.13-.391-.494-.858-1.241-.858-2.057C8.5 6.875 9.421 6 10.5 6s2 .875 2 1.882c0 .816-.467 1.563-.858 2.057M10.5 7c-.578 0-1 .477-1 .882 0 .464.283.983.642 1.437.124.157.249.295.358.408.109-.113.234-.251.358-.408.359-.454.642-.973.642-1.437 0-.405-.422-.882-1-.882",
        "M14.5 1.779v10.568l-4.47 1.676L6 13.016l-4.5 1.125V3.11l4.53-1.133L10 3.466Zm-12 7.928v3.153l3.5-.875 3.97.992 3.53-1.323V3.222L10 4.534 5.97 3.023 2.5 3.89v4.403l1.5-1.5 2 2L6.793 8H8v1h-.793L6 10.207l-2-2Z",
      ],
    },
    ruler: {
      symbolId: "nvidia-react-gui-icons-v1-line-ruler",
      viewBox: "0 0 16 16",
      paths: [
        "M11 1.293 14.707 5 5 14.707 1.293 11ZM2.707 11 5 13.293l.793-.793-.647-.646.708-.708.646.647.793-.793-1.647-1.646.708-.708L8 10.293l.793-.793-.647-.646.708-.708.646.647.793-.793-1.647-1.646.708-.708L11 7.293l.793-.793-.647-.646.708-.708.646.647.793-.793L11 2.707Z",
      ],
    },
    running: {
      symbolId: "nvidia-react-gui-icons-v1-line-running",
      viewBox: "0 0 16 16",
      paths: [
        "m6.418 3.143 6 3.464 1.961-1.961.707.708-2.504 2.503-3-1.732-1.768 1.768 3 1.732-3.46 3.461-.708-.707 2.54-2.54-2.104-1.214-5.228 5.229-.708-.708 7.54-7.539-2.104-1.214-1.96 1.961-.707-.708ZM10 3.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 10 3.5m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    sailboat: {
      symbolId: "nvidia-react-gui-icons-v1-line-sailboat",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1v.866L11.542 8H8v1h6v4H4.293L1.5 10.207V9H7V1ZM4.707 12H13v-2H2.707ZM8 7h1.809L8 3.866Z",
      ],
    },
    sand: {
      symbolId: "nvidia-react-gui-icons-v1-line-sand",
      viewBox: "0 0 16 16",
      paths: [
        "M12 2v7h.5a.5.5 0 0 0 .5-.5V6h1v2.5a1.5 1.5 0 0 1-1.5 1.5H12v1.092A49 49 0 0 1 15 11v1c-3.959 0-7.299.495-9.647.989a37 37 0 0 0-2.728.678 22 22 0 0 0-.897.283l-.045.015-.01.004-.002.001-.525-.824L6.5 7.793l3.467 3.467q.505-.052 1.033-.096V8h-.5A1.5 1.5 0 0 1 9 6.5V4h1v2.5a.5.5 0 0 0 .5.5h.5V2Zm-3.299 9.408L6.5 9.207l-3.25 3.25c.533-.14 1.169-.293 1.897-.446a47 47 0 0 1 3.554-.603",
      ],
    },
    "saw-wave": {
      symbolId: "nvidia-react-gui-icons-v1-line-saw-wave",
      viewBox: "0 0 16 16",
      paths: [
        "M8.519 4.606v3.998l5.718-3.53.526.851-7.244 4.471V6.393L1.762 9.926l-.523-.852Z",
      ],
    },
    scale: {
      symbolId: "nvidia-react-gui-icons-v1-line-scale",
      viewBox: "0 0 16 16",
      paths: [
        "M14 2H2v4h1V3h10v10h-3v1h4z",
        "M10.294 4.999 8.646 6.646l.707.708 1.649-1.648V7h1V3.999H9v1zM8 8v6H2V8Zm-5 5h4V9H3Z",
      ],
    },
    "scale-balance": {
      symbolId: "nvidia-react-gui-icons-v1-line-scale-balance",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 4V3h1v1H15v1h-2v2h2.152l-.804 3h-3.696l-.804-3H12V5H8.5v7H10v1H6v-1h1.5V5H4v2h2.152l-.804 3H1.652L.848 7H3V5H1V4ZM2.152 8l.268 1h2.16l.268-1Zm9 0 .268 1h2.16l.268-1Z",
      ],
    },
    "scale-down": {
      symbolId: "nvidia-react-gui-icons-v1-line-scale-down",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 3.793 6.354 2.646l-.708.708L8 5.707l2.354-2.353-.708-.708L8.5 3.793V1h-1zM14 7.5H2v-1h12zm-12 1h12v1H2zm4.354 4.854L7.5 12.207V15h1v-2.793l1.146 1.147.708-.708L8 10.293l-2.354 2.353z",
      ],
    },
    "scale-relative": {
      symbolId: "nvidia-react-gui-icons-v1-line-scale-relative",
      viewBox: "0 0 16 16",
      paths: [
        "M1 3h14v10.5H1Zm1 1v8.5h12V4Zm2 3.5H3v-1h1Zm2 0H5v-1h1Zm2 0H7v-1h1Zm1 0v-1h1v1Zm0 2v-1h1v1Zm0 2v-1h1v1Z",
      ],
    },
    "scale-relative-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-scale-relative-off",
      viewBox: "0 0 16 16",
      paths: [
        "M4 7.5H3v-1h1Z",
        "m1.354.646 14 14-.708.708-1.853-1.854H1V3h1.293L.646 1.354ZM3.293 4H2v8.5h9.793L10 10.707v.793H9v-1h.793L6 6.707V7.5H5v-1h.793Z",
        "M15 3v9.172l-1-1V4H6.828l-1-1Z",
      ],
    },
    "scale-reset": {
      symbolId: "nvidia-react-gui-icons-v1-line-scale-reset",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12V2H2zm6 1a4 4 0 0 0-4 4v.293l-.646-.647-.708.708L4.5 10.207l1.854-1.853-.708-.708L5 8.293V8a3 3 0 1 1 3 3v1a4 4 0 0 0 0-8m6 10v-1H2v1z",
      ],
    },
    "scale-up": {
      symbolId: "nvidia-react-gui-icons-v1-line-scale-up",
      viewBox: "0 0 16 16",
      paths: [
        "M14 3H2V2h12zM8.5 5.207v5.586l1.146-1.147.708.708L8 12.707l-2.354-2.353.708-.708L7.5 10.793V5.207L6.354 6.354l-.708-.708L8 3.293l2.354 2.353-.708.708zM14 14H2v-1h12z",
      ],
    },
    school: {
      symbolId: "nvidia-react-gui-icons-v1-line-school",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 2H10v2H8.5v.26l2.5 2V9h3v5H2V9h3V6.26l2.5-2ZM8 5.14l-2 1.6V13h1v-2h2v2h1V6.74ZM6.5 8a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 8M5 13v-3H3v3Zm6 0h2v-3h-2ZM8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    scissors: {
      symbolId: "nvidia-react-gui-icons-v1-line-scissors",
      viewBox: "0 0 16 16",
      paths: [
        "M2 4.5a2.5 2.5 0 1 1 4.45 1.564l2.354 1.359 4.946-2.856.5.866L9.804 8l4.446 2.567-.5.866-4.946-2.856L6.45 9.936a2.5 2.5 0 1 1-.833-.673L7.804 8 5.617 6.737A2.5 2.5 0 0 1 2 4.5M4.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 3m0 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 10",
      ],
    },
    "scm-branch": {
      symbolId: "nvidia-react-gui-icons-v1-line-scm-branch",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h4v4H4.5v4H6v.268l5.5-3.175V6H10V2h4v4h-1.5v1.67L6 11.423V14H2v-4h1.5V6H2Zm1 1v2h2V3Zm8 2h2V3h-2Zm-6 6H3v2h2Z",
      ],
    },
    "scm-compare": {
      symbolId: "nvidia-react-gui-icons-v1-line-scm-compare",
      viewBox: "0 0 16 16",
      paths: [
        "m10.354 5.646-.708.708L7.293 4l2.353-2.354.708.708L9.207 3.5H12.5V10H14v4h-4v-4h1.5V4.5H9.207ZM11 13h2v-2h-2ZM6 2v4H4.5v5.5h2.293l-1.147-1.146.708-.708L8.707 12l-2.353 2.354-.708-.708L6.793 12.5H3.5V6H2V2ZM3 5h2V3H3Z",
      ],
    },
    "scm-fork": {
      symbolId: "nvidia-react-gui-icons-v1-line-scm-fork",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2v4h-.946l.535 2h4.822l.535-2H10V2h4v4h-2.018l-.804 3H8.5v1H10v4H6v-4h1.5V9H4.822l-.804-3H2V2ZM3 5h2V3H3Zm8 0h2V3h-2Zm-4 8h2v-2H7Z",
      ],
    },
    "scm-merge": {
      symbolId: "nvidia-react-gui-icons-v1-line-scm-merge",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h4v2.577l6.5 3.753V10H14v4h-4v-4h1.5V8.908L6 5.732V6H4.5v4H6v4H2v-4h1.5V6H2Zm3 3V3H3v2Zm-2 6v2h2v-2Zm8 2h2v-2h-2Z",
      ],
    },
    "scm-pull": {
      symbolId: "nvidia-react-gui-icons-v1-line-scm-pull",
      viewBox: "0 0 16 16",
      paths: [
        "M10.354 2.354 9.207 3.5H12.5V10H14v4h-4v-4h1.5V4.5H9.207l1.147 1.146-.708.708L7.293 4l2.353-2.354ZM11 13h2v-2h-2ZM4.5 6v4H6v4H2v-4h1.5V6H2V2h4v4ZM3 5h2V3H3Zm0 6v2h2v-2Z",
      ],
    },
    "scm-pull-close": {
      symbolId: "nvidia-react-gui-icons-v1-line-scm-pull-close",
      viewBox: "0 0 16 16",
      paths: [
        "M9.646 2.354 11.293 4 9.646 5.646l.708.708L12 4.707l1.646 1.647.708-.708L12.707 4l1.647-1.646-.708-.708L12 3.293l-1.646-1.647zM6 2v4H4.5v4H6v4H2v-4h1.5V6H2V2ZM3 5h2V3H3Zm0 8h2v-2H3Zm7-3h1.5V7h1v3H14v4h-4Zm1 3h2v-2h-2Z",
      ],
    },
    "scm-pull-draft": {
      symbolId: "nvidia-react-gui-icons-v1-line-scm-pull-draft",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h4v4H4.5v4H6v4H2v-4h1.5V6H2Zm1 1v2h2V3Zm0 8v2h2v-2Zm7-1h4v4h-4Zm1 1v2h2v-2Zm0-5h2v2h-2zm2-3h-2v2h2z",
      ],
    },
    "sd-card": {
      symbolId: "nvidia-react-gui-icons-v1-line-sd-card",
      viewBox: "0 0 16 16",
      paths: [
        "M4.793 2H13v3h-.5v1h.5v8H3V3.793ZM12 7h-.5V4h.5V3H5.207L4 4.207V13h8ZM7 7V4h1v3Zm2 0V4h1v3ZM5 7V4.5h1V7Z",
      ],
    },
    sea: {
      symbolId: "nvidia-react-gui-icons-v1-line-sea",
      viewBox: "0 0 16 16",
      paths: [
        "M2.348 12.541C1.857 12.214 1.5 11.694 1.5 11h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541-.475.317-1.078.459-1.652.459s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 12.858 8.574 13 8 13s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C5.177 12.858 4.574 13 4 13s-1.177-.142-1.652-.459m0-4C1.857 8.214 1.5 7.694 1.5 7h1c0 .306.143.536.402.709C3.177 7.892 3.574 8 4 8s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 7.892 7.574 8 8 8s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 8.858 12.574 9 12 9s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 8.858 8.574 9 8 9s-1.177-.142-1.652-.459A2 2 0 0 1 6 8.251a2 2 0 0 1-.348.29C5.177 8.858 4.574 9 4 9s-1.177-.142-1.652-.459m0-4C1.857 4.214 1.5 3.694 1.5 3h1c0 .306.143.536.402.709C3.177 3.892 3.574 4 4 4s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 3.892 7.574 4 8 4s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 4.858 12.574 5 12 5s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 4.858 8.574 5 8 5s-1.177-.142-1.652-.459A2 2 0 0 1 6 4.251a2 2 0 0 1-.348.29C5.177 4.858 4.574 5 4 5s-1.177-.142-1.652-.459",
      ],
    },
    section: {
      symbolId: "nvidia-react-gui-icons-v1-line-section",
      viewBox: "0 0 16 16",
      paths: [
        "M5.967 13.666A6 6 0 0 1 9.062 2.115L9.393.871l.966.258L6.608 15.13l-.966-.26ZM8.803 3.085a5 5 0 0 0-2.576 9.611Zm-.369 9.918a5 5 0 0 0 1.677-.451l.423.906a6 6 0 0 1-2.013.541Zm3.1-1.447c.406-.405.746-.884.996-1.422l.907.422a6 6 0 0 1-1.196 1.708Zm.56-6.404a5 5 0 0 0-1.227-1.229l.573-.819a6 6 0 0 1 1.473 1.475Zm.886 3.303a5 5 0 0 0-.152-1.729l.966-.259c.179.664.245 1.366.182 2.077Z",
      ],
    },
    "section-bottom": {
      symbolId: "nvidia-react-gui-icons-v1-line-section-bottom",
      viewBox: "0 0 16 16",
      paths: [
        "M2.021 7.499a6 6 0 0 1 11.958 0l1.267-.001.002 1H.752l.002-1Zm1.004.001h9.95a5 5 0 0 0-9.95 0m3.954 6.41a6 6 0 0 1-1.96-.713l.501-.866a5 5 0 0 0 1.631.594Zm6.681-3.857a6 6 0 0 1-1.044 1.804l-.765-.643c.371-.443.668-.95.869-1.503Zm-2.639 3.144a6 6 0 0 1-1.959.713l-.173-.985a5 5 0 0 0 1.631-.594Zm-7.597-1.34a6 6 0 0 1-1.043-1.804l.939-.342c.202.553.498 1.06.87 1.503Z",
      ],
    },
    "section-top": {
      symbolId: "nvidia-react-gui-icons-v1-line-section-top",
      viewBox: "0 0 16 16",
      paths: [
        "M2.5 7.497h11l1.747.002-.001 1-1.267-.001a6 6 0 0 1-11.959 0l-1.267.001-.001-1Zm10.475 1H3.024a5 5 0 0 0 9.951 0m-.256-2.211a5 5 0 0 0-.869-1.503l.766-.643c.445.53.801 1.14 1.043 1.804Zm-2.199-2.62a5 5 0 0 0-1.631-.594l.172-.985a6 6 0 0 1 1.959.713ZM4.189 4.783c-.372.443-.668.95-.869 1.503l-.94-.342A6 6 0 0 1 3.424 4.14Zm2.962-1.711a5 5 0 0 0-1.631.594L5.019 2.8a6 6 0 0 1 1.959-.713Z",
      ],
    },
    secure: {
      symbolId: "nvidia-react-gui-icons-v1-line-secure",
      viewBox: "0 0 16 16",
      paths: [
        "m7.524 10.231 3.852-4.402-.752-.658-3.148 3.597-1.622-1.622-.708.707z",
        "m13.978 3.61.021.361v.003L14 3.98l.001.021.003.077q.004.102.006.286c.002.245-.002.594-.027 1.016a16 16 0 0 1-.5 3.188c-.645 2.384-2.102 5.102-5.362 5.917l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016q.002-.184.006-.286l.003-.077L2 3.98l.001-.006v-.002L2.5 4l-.499-.029.021-.361L8 2.009ZM3.015 5.323c.045.798.167 1.871.468 2.984.596 2.208 1.86 4.455 4.517 5.176 2.657-.721 3.921-2.968 4.517-5.176.301-1.113.423-2.186.468-2.984.022-.39.026-.711.025-.937L8 3.044 2.99 4.386c-.002.226.002.547.025.937",
      ],
    },
    seed: {
      symbolId: "nvidia-react-gui-icons-v1-line-seed",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 2.207v1.246l4.632 1.241L14.017 8H12.75l-1.364 5.088L8 15.043l-3.387-1.955L3.25 8H1.982l.886-3.306L7.5 3.453v-1.66L8.646.646l.707.708ZM11.714 8H4.285l1.187 4.429L8 13.889l2.527-1.46ZM8 4.354 3.685 5.51 3.285 7h9.429l-.399-1.49Z",
      ],
    },
    segmap: {
      symbolId: "nvidia-react-gui-icons-v1-line-segmap",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h10v10H2Zm9 8.707-4.5-4.5-3.5 3.5V12h8ZM3 4v5.293L8.293 4Zm6.707 0-2.5 2.5L11 10.293V4ZM13 12V4h1v8Z",
      ],
    },
    segment: {
      symbolId: "nvidia-react-gui-icons-v1-line-segment",
      viewBox: "0 0 16 16",
      paths: [
        "m7 1.226 5.5 3.176-5 2.887v5.773L2 9.887V4.113Zm3.5 3.176L7 2.381 3.5 4.402 7 6.423ZM3 9.309l3.5 2.021V7.289L3 5.268Z",
        "M9.5 15.062V8.711L15 5.536v6.351Zm1-1.732 3.5-2.021V7.268l-3.5 2.021Z",
      ],
    },
    "select-brush": {
      symbolId: "nvidia-react-gui-icons-v1-line-select-brush",
      viewBox: "0 0 16 16",
      paths: [
        "m12.25 1.543 2.207 2.207L10 8.207v.043c0 1.544-1.104 2.558-2.43 2.745-.6.085-1.296.089-1.927-.078-.634-.167-1.255-.522-1.59-1.193l-.258-.516.547-.182c.47-.157.755-.603 1.145-1.274l.016-.027c.209-.36.456-.784.786-1.112A2 2 0 0 1 7.75 6h.042ZM9 8.24 7.76 7h-.01c-.324 0-.55.118-.756.322-.227.226-.414.54-.642.933l-.035.059c-.25.431-.563.971-1.055 1.341q.251.195.636.295c.465.123 1.019.127 1.532.055C8.33 9.878 9 9.231 9 8.25Zm2-2.447 2.042-2.043-.792-.793L10.207 5Zm-.707.707L9.5 5.707l-.809.809.792.793ZM3.224 7.768a5 5 0 0 0-.63.489l.677.737a4 4 0 0 1 .505-.392zm10.181.489a5 5 0 0 0-.629-.489l-.552.834q.282.187.505.392zM1.65 9.63a2.6 2.6 0 0 0 .105 1.999l.907-.422A1.65 1.65 0 0 1 2.5 10.5q0-.274.094-.54zm12.85.87q-.002-.452-.15-.87l-.944.33q.093.265.094.54 0 .36-.162.707l.907.422A2.7 2.7 0 0 0 14.5 10.5M3.198 13.215a7.1 7.1 0 0 0 1.847.857l.295-.956a6.1 6.1 0 0 1-1.586-.733zm7.757.857a7.1 7.1 0 0 0 1.847-.857l-.556-.832a6.1 6.1 0 0 1-1.586.733zm-3.949.382q.487.046.994.046t.994-.046l-.092-.995a10 10 0 0 1-1.804 0z",
      ],
    },
    "select-ellipse": {
      symbolId: "nvidia-react-gui-icons-v1-line-select-ellipse",
      viewBox: "0 0 16 16",
      paths: [
        "M8.976 12.905a5 5 0 0 0 1.802-.748l.555.832a6 6 0 0 1-2.162.897Zm-1.952-9.81a5 5 0 0 0-1.802.748l-.555-.832a6 6 0 0 1 2.162-.897ZM3.095 8.976c.124.625.37 1.237.748 1.802l-.832.555a6 6 0 0 1-.897-2.162Zm9.81-1.952a5 5 0 0 0-.748-1.802l.832-.555c.451.675.748 1.41.897 2.162Zm-.747 3.755c.368-.55.619-1.164.746-1.804l.981.195a6 6 0 0 1-.895 2.164ZM3.842 5.221a5 5 0 0 0-.746 1.803l-.981-.195a6 6 0 0 1 .895-2.163Zm1.379 6.937c.55.368 1.164.619 1.804.746l-.195.981a6 6 0 0 1-2.164-.895Zm5.558-8.316a5 5 0 0 0-1.803-.746l.195-.981a6 6 0 0 1 2.163.895Z",
      ],
    },
    "select-polygon": {
      symbolId: "nvidia-react-gui-icons-v1-line-select-polygon",
      viewBox: "0 0 16 16",
      paths: [
        "M4 2H2v2h1V3h1zm5.5 0h-3v1h3zM2 6.5v3h1v-3zM3 12H2v2h2v-1H3zm3.5 2h3v-1h-3zm7.707-12H12v.793l-.354.353.708.708zm-3.561 2.146-1.499 1.5.707.708 1.5-1.5zM8.854 7.354l-.707-.708L6.793 8l1.354 1.354.707-.708L8.207 8zm.293 3 1.499 1.5.708-.708-1.5-1.5zm2.499 2.5.354.353V14h2.207l-1.853-1.854z",
      ],
    },
    "select-rectangle": {
      symbolId: "nvidia-react-gui-icons-v1-line-select-rectangle",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h2v1H3v1H2Zm4.5 0h3v1h-3ZM12 2h2v2h-1V3h-1ZM2 9.5v-3h1v3Zm12-3v3h-1v-3ZM2 12h1v1h1v1H2Zm12 0v2h-2v-1h1v-1Zm-4.5 2h-3v-1h3Z",
      ],
    },
    "send-image": {
      symbolId: "nvidia-react-gui-icons-v1-line-send-image",
      viewBox: "0 0 16 16",
      paths: [
        "M10.354 3.646 8 1.293 5.646 3.646l.708.708L7.5 3.207V6h1V3.207l1.146 1.147z",
        "M3 5h2v1H4v3.211l2.8 1.617 2.85-1.645L12 10.54V6h-1V5h2v9H3Zm9 6.694-2.35-1.357-2.85 1.646L4 10.366V13h8Z",
        "M5.454 7.773a1.319 1.319 0 1 1 2.637.001 1.319 1.319 0 0 1-2.637-.001m1.319-.318a.318.318 0 1 0-.001.637.318.318 0 0 0 .001-.637",
      ],
    },
    sensor: {
      symbolId: "nvidia-react-gui-icons-v1-line-sensor",
      viewBox: "0 0 16 16",
      paths: [
        "M4.94 4.111a3.5 3.5 0 0 0-.636 4.079 3.57 3.57 0 0 0 1.527 1.515q.357.182.733.277a3.5 3.5 0 0 0 3.326-.921l.707.707a4.5 4.5 0 0 1-4.26 1.187l.815 3.041H1.848l1.481-5.525a4.5 4.5 0 0 1 .904-5.067ZM9 2a5 5 0 0 0 5 5v1a6 6 0 0 1-6-6ZM4.066 9.585l-.914 3.411h2.696l-.672-2.51a4.6 4.6 0 0 1-1.11-.901M11 2a3 3 0 0 0 3 3v1a4 4 0 0 1-4-4Zm2 0a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2Z",
      ],
    },
    "service-account": {
      symbolId: "nvidia-react-gui-icons-v1-line-service-account",
      viewBox: "0 0 16 16",
      paths: [
        "m12.221 6.394 1.245-.872a6 6 0 0 0-.59-1.017l-1.377.642a5.53 5.53 0 0 0-2.778-1.604l-.133-1.514a6.3 6.3 0 0 0-1.177 0l-.132 1.514a5.5 5.5 0 0 0-2.778 1.604l-1.377-.642a6 6 0 0 0-.59 1.018l1.245.871c-.322 1.106-.323 2.105 0 3.21l-1.245.872q.246.54.589 1.018l1.054-.49.422.906-1.769.824a9.2 9.2 0 0 1-1.518-2.623l1.318-.923a5.6 5.6 0 0 1 0-2.377l-1.318-.922A9.3 9.3 0 0 1 2.83 3.265l1.455.678a5.5 5.5 0 0 1 2.059-1.188l.14-1.602a9.2 9.2 0 0 1 3.032 0l.139 1.601a5.5 5.5 0 0 1 2.059 1.189l1.456-.678a9.2 9.2 0 0 1 1.518 2.624l-1.318.922a5.6 5.6 0 0 1 0 2.377l1.318.923a9.3 9.3 0 0 1-1.517 2.624l-1.77-.825.423-.906 1.052.49q.344-.478.59-1.018l-1.245-.872c.323-1.103.325-2.096 0-3.21",
        "m10.08 11 1.072 4H4.849l1.071-4zm-3.928 3h3.696l-.535-2H6.688zM9 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m1 0a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8",
      ],
    },
    shader: {
      symbolId: "nvidia-react-gui-icons-v1-line-shader",
      viewBox: "0 0 16 16",
      paths: [
        "M11 9.05V8h1v1.05a2.5 2.5 0 0 1 1.371.792l.911-.525.5.866-.91.525a2.5 2.5 0 0 1 0 1.584l.91.525-.5.866-.911-.525A2.5 2.5 0 0 1 12 13.95V15h-1v-1.05a2.5 2.5 0 0 1-1.371-.792l-.911.525-.5-.866.91-.525a2.5 2.5 0 0 1 0-1.584l-.91-.525.5-.866.911.525A2.5 2.5 0 0 1 11 9.05M8 3a5 5 0 0 0-1.568 9.75l-.313.949a6 6 0 1 1 7.58-7.58l-.949.313A5 5 0 0 0 8 3M5.858 4.467c.425-.085.912-.024 1.262.327.35.35.411.837.326 1.262-.086.429-.326.859-.679 1.212s-.784.594-1.213.68c-.425.085-.912.024-1.262-.326s-.411-.837-.326-1.262c.086-.43.326-.86.679-1.213s.784-.594 1.213-.68M11.5 10a1.503 1.503 0 0 0-1.5 1.5 1.495 1.495 0 0 0 1.5 1.5 1.503 1.503 0 0 0 1.5-1.5 1.495 1.495 0 0 0-1.5-1.5M6.054 5.448c-.21.042-.469.173-.702.406s-.364.491-.406.702c-.043.214.013.319.053.359s.144.095.359.052c.21-.042.469-.173.702-.406s.364-.491.406-.701c.043-.215-.013-.319-.053-.359-.04-.041-.144-.096-.359-.053",
      ],
    },
    "shader-ball": {
      symbolId: "nvidia-react-gui-icons-v1-line-shader-ball",
      viewBox: "0 0 16 16",
      paths: [
        "M2.5 6.5a5.5 5.5 0 1 1 9.283 3.992c.305.097.578.208.811.331.235.125.45.276.613.459.165.186.293.429.293.718v1c0 .45-.302.777-.604.992-.315.223-.738.404-1.217.548-.963.288-2.264.46-3.679.46s-2.716-.172-3.679-.46c-.479-.144-.902-.325-1.217-.548-.302-.215-.604-.542-.604-.992v-1c0-.289.128-.532.293-.718.163-.183.378-.334.613-.459q.352-.185.811-.331A5.5 5.5 0 0 1 2.5 6.5M8 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-2.759 9.259c-.587.123-1.051.28-1.365.447a1.2 1.2 0 0 0-.334.239.2.2 0 0 0-.042.06v.988c.004.012.032.076.182.183.191.135.5.278.926.406C5.455 13.836 6.654 14 8 14s2.545-.164 3.392-.418c.426-.128.735-.271.926-.406.15-.107.178-.171.182-.183v-.988a.2.2 0 0 0-.042-.06 1.2 1.2 0 0 0-.334-.239c-.314-.167-.778-.324-1.365-.447A5.5 5.5 0 0 1 8 12a5.5 5.5 0 0 1-2.759-.741m1.117-7.792c.425-.085.912-.024 1.262.327.35.35.411.837.326 1.262-.086.429-.326.859-.679 1.212s-.784.594-1.213.68c-.425.085-.912.024-1.262-.326s-.411-.837-.326-1.262c.086-.43.326-.86.679-1.213s.784-.594 1.213-.68M8 9.5a3 3 0 0 0 3-3h1a4 4 0 0 1-4 4ZM6.554 4.448c-.21.042-.469.173-.702.406s-.364.491-.406.702c-.043.214.013.319.053.359s.144.095.359.052c.21-.042.469-.173.702-.406s.364-.491.406-.701c.043-.215-.013-.319-.053-.359-.04-.041-.144-.096-.359-.053m.161 4.764q.4.19.856.258l-.142.99a4 4 0 0 1-1.144-.345Z",
      ],
    },
    "shape-circle": {
      symbolId: "nvidia-react-gui-icons-v1-line-shape-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3",
      ],
    },
    "shape-circle-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-shape-circle-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-1.771-1.772a6 6 0 0 1-8.456-8.456L1.646 2.354Zm1.775 3.19a5 5 0 0 0 7.035 7.036ZM14 8c0 .926-.21 1.804-.585 2.587l-.759-.76a5 5 0 0 0-6.483-6.483l-.76-.759A6 6 0 0 1 14 8",
      ],
    },
    "shape-hexagon": {
      symbolId: "nvidia-react-gui-icons-v1-line-shape-hexagon",
      viewBox: "0 0 16 16",
      paths: [
        "m2.001 4.536 6-3.464 6 3.464v6.928l-6 3.464-6-3.464Zm1 6.351 5 2.887 5-2.887V5.113l-5-2.886-5 2.886Z",
      ],
    },
    "shape-octagon": {
      symbolId: "nvidia-react-gui-icons-v1-line-shape-octagon",
      viewBox: "0 0 16 16",
      paths: [
        "M5.515 2h4.97L14 5.515v4.97L10.485 14h-4.97L2 10.485v-4.97Zm.414 1L3 5.929v4.142L5.929 13h4.142L13 10.071V5.929L10.071 3Z",
      ],
    },
    "shape-square": {
      symbolId: "nvidia-react-gui-icons-v1-line-shape-square",
      viewBox: "0 0 16 16",
      paths: ["M2 2h12v12H2Zm1 1v10h10V3Z"],
    },
    "shape-square-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-shape-square-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.353.646 14 14-.707.708L13.293 14H2V2.707L.646 1.354ZM3 3.707V13h9.293Z",
        "M14 2v9.172l-1-1V3H5.828l-1-1Z",
      ],
    },
    "shape-triangle": {
      symbolId: "nvidia-react-gui-icons-v1-line-shape-triangle",
      viewBox: "0 0 16 16",
      paths: ["m8 1.24 7.366 12.758H.634ZM2.366 12.998h11.268L8 3.24Z"],
    },
    shapes: {
      symbolId: "nvidia-react-gui-icons-v1-line-shapes",
      viewBox: "0 0 16 16",
      paths: [
        "M7.362 7H1.638L4.5 1.992ZM5.638 6 4.5 4.008 3.362 6Zm6.655-3L9.646 5.646l.708.708L13 3.707V5h1V2h-3v1zM4.5 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 11.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 3 11.5M14 9v5H9V9Zm-1 4v-3h-3v3Z",
      ],
    },
    share: {
      symbolId: "nvidia-react-gui-icons-v1-line-share",
      viewBox: "0 0 16 16",
      paths: [
        "M9 3.5a2.5 2.5 0 1 1 .688 1.722L7.157 6.804l-.53-.848 2.53-1.581A2.5 2.5 0 0 1 9 3.5m2 6.55V7.5h1v2.55a2.5 2.5 0 1 1-1 0M1 8.5a2.5 2.5 0 1 1 4.915.648l2.23 1.116-.447.894-2.231-1.115A2.5 2.5 0 0 1 1 8.5M3.5 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 3.5 7m8-5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 11.5 2m0 9a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 11.5 11",
      ],
    },
    shield: {
      symbolId: "nvidia-react-gui-icons-v1-line-shield",
      viewBox: "0 0 16 16",
      paths: [
        "m8 2.009 5.978 1.601.021.361v.003L14 3.98l.001.021.003.077q.004.102.006.286c.002.245-.002.594-.027 1.016a16 16 0 0 1-.5 3.188c-.645 2.384-2.102 5.102-5.362 5.917l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016q.002-.184.006-.286l.003-.077L2 3.98l.001-.006v-.002L2.5 4l-.499-.029.021-.361ZM2.99 4.386c-.002.226.002.547.025.937.045.798.167 1.871.468 2.984.596 2.208 1.86 4.455 4.517 5.176 2.657-.721 3.921-2.968 4.517-5.176.301-1.113.423-2.186.468-2.984.022-.39.026-.711.025-.937L8 3.044ZM13.5 4l.499-.029z",
      ],
    },
    "shield-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-shield-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 13 13-.708.708-2.032-2.033a6.58 6.58 0 0 1-3.493 2.164l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016c.003-.3.015-.468.032-.754l.695-.186-2.071-2.07Zm2.18 3.595-.544.145c-.002.226.003.547.025.937.045.798.167 1.871.468 2.984.596 2.208 1.86 4.455 4.517 5.176a5.6 5.6 0 0 0 2.904-1.872Zm9.949 4.327a12 12 0 0 1-.534 1.552l-.768-.768q.196-.519.336-1.045c.301-1.113.423-2.186.468-2.984.023-.39.026-.711.025-.937L8 3.044l-1.678.45-.817-.817L8 2.009l5.978 1.601c.015.252.03.502.032.754.002.245-.002.594-.026 1.016a16 16 0 0 1-.501 3.188",
      ],
    },
    ship: {
      symbolId: "nvidia-react-gui-icons-v1-line-ship",
      viewBox: "0 0 16 16",
      paths: [
        "M13 4v3h1v2h1v4H3.217L1.5 10.139V9h2.691l1-2h4.621l.804-3ZM2.583 10l1.2 2H14v-2Zm3.226-2-.5 1H13V8ZM12 7V5h-.616l-.536 2Z",
      ],
    },
    "ship-wheel": {
      symbolId: "nvidia-react-gui-icons-v1-line-ship-wheel",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 2.021V1h1v1.021a5.97 5.97 0 0 1 3.374 1.397l.722-.721.707.707-.721.722A5.97 5.97 0 0 1 13.979 7.5H15v1h-1.021a5.97 5.97 0 0 1-1.397 3.374l.721.722-.707.707-.722-.721A5.97 5.97 0 0 1 8.5 13.979V15h-1v-1.021a5.97 5.97 0 0 1-3.374-1.397l-.722.721-.707-.707.721-.722A5.97 5.97 0 0 1 2.021 8.5H1v-1h1.021a5.97 5.97 0 0 1 1.397-3.374l-.721-.722.707-.707.722.721A5.97 5.97 0 0 1 7.5 2.021m1 4.042q.276.072.516.214l2.148-2.148A4.97 4.97 0 0 0 8.5 3.025Zm2.664 5.809L9.016 9.723a2 2 0 0 1-.516.214v3.038a4.97 4.97 0 0 0 2.664-1.103m.708-7.036L9.723 6.984q.142.24.214.516h3.038a4.97 4.97 0 0 0-1.103-2.664M3.025 7.5h3.038q.072-.276.214-.516L4.129 4.836A4.97 4.97 0 0 0 3.025 7.5M7.5 3.025a4.97 4.97 0 0 0-2.664 1.104l2.148 2.148q.24-.142.516-.214Zm0 9.95V9.937a2 2 0 0 1-.516-.214l-2.148 2.149A4.97 4.97 0 0 0 7.5 12.975M12.975 8.5H9.937q-.072.276-.214.516l2.149 2.148A4.97 4.97 0 0 0 12.975 8.5m-8.846 2.664 2.148-2.148a2 2 0 0 1-.214-.516H3.025a4.97 4.97 0 0 0 1.104 2.664M8 7a1 1 0 0 0-.707.293A1 1 0 0 0 7 8c0 .276.111.526.293.707A1 1 0 0 0 8 9a1 1 0 0 0 .707-.293A1 1 0 0 0 9 8a1 1 0 0 0-.293-.707A1 1 0 0 0 8 7",
      ],
    },
    "shopping-bag": {
      symbolId: "nvidia-react-gui-icons-v1-line-shopping-bag",
      viewBox: "0 0 16 16",
      paths: [
        "M11 4h2v10H3V4h2a3 3 0 1 1 6 0M4 5v8h8V5Zm2 1a2 2 0 1 0 4 0h1a3 3 0 1 1-6 0Zm2-4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2",
      ],
    },
    "shopping-basket": {
      symbolId: "nvidia-react-gui-icons-v1-line-shopping-basket",
      viewBox: "0 0 16 16",
      paths: [
        "m4.796 7 1.149-4.289.966.259L5.831 7h4.338l-1.08-4.03.966-.259L11.204 7h2.948l-1.608 6H3.456L1.848 7ZM3.152 8l1.071 4h7.554l1.071-4Z",
      ],
    },
    "shopping-cart": {
      symbolId: "nvidia-react-gui-icons-v1-line-shopping-cart",
      viewBox: "0 0 16 16",
      paths: [
        "M2.877 3H1V2h2.643l.269 1h9.21l-1.306 5H5.255l.268 1H11v1H4.757Zm2.109 4h6.058l.784-3H4.181ZM4 12.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 4 12.5m5 0a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 12.5M5.5 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "shopping-cart-open": {
      symbolId: "nvidia-react-gui-icons-v1-line-shopping-cart-open",
      viewBox: "0 0 16 16",
      paths: [
        "M2.877 3H1V2h2.643l1.343 5h6.058l1.078-4.126.967.252L11.816 8H5.255l.268 1H11v1H4.757ZM4 12.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 4 12.5m5 0a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 12.5M5.5 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    shuffle: {
      symbolId: "nvidia-react-gui-icons-v1-line-shuffle",
      viewBox: "0 0 16 16",
      paths: [
        "m14.207 11.5-2.353 2.354-.708-.708L12.293 12h-2l-1.879-1.879.707-.707L10.707 11h1.586l-1.147-1.146.708-.708zm0-7-2.353 2.354-.708-.708L12.293 5h-1.586l-7 7H2v-1h1.293l7-7h2l-1.147-1.146.708-.708zM5.586 5.879l-.707.707L3.293 5H2V4h1.707z",
      ],
    },
    signature: {
      symbolId: "nvidia-react-gui-icons-v1-line-signature",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 3.793 10.207 5.5l-6.5 6.5H2v-1.707ZM14 12H6v-1h8ZM3 10.707V11h.293l5.5-5.5-.293-.293Z",
      ],
    },
    signpost: {
      symbolId: "nvidia-react-gui-icons-v1-line-signpost",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4h3.707l2.5 2.5-2.5 2.5H8v5H7V9H3V4h4V2h1ZM4 8h7.293l1.5-1.5-1.5-1.5H4Z",
      ],
    },
    "sin-wave": {
      symbolId: "nvidia-react-gui-icons-v1-line-sin-wave",
      viewBox: "0 0 16 16",
      paths: [
        "M2.297 6.322C2.927 5.613 3.739 5 5 5c1.751 0 2.64 1.185 3.364 2.152L8.4 7.2C9.169 8.226 9.78 9 11 9c.868 0 1.43-.395 1.955-.986.221-.249.423-.519.64-.808l.152-.202c.269-.355.565-.731.912-1.055l.682.731c-.279.261-.53.576-.796.927l-.14.187c-.218.291-.451.601-.702.884C13.073 9.387 12.261 10 11 10c-1.751 0-2.64-1.185-3.364-2.152L7.6 7.8C6.831 6.774 6.219 6 5 6c-.869 0-1.43.395-1.955.986-.221.249-.423.519-.64.808l-.152.202c-.269.355-.565.731-.912 1.055L.659 8.32c.279-.261.53-.576.796-.927l.14-.187c.218-.291.451-.601.702-.884",
      ],
    },
    skeleton: {
      symbolId: "nvidia-react-gui-icons-v1-line-skeleton",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 2.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 2.5m3.979 12.629-1.34-5 .966-.258 1.34 5Zm-5.926-.258 1.34-5 .966.258-1.34 5ZM8.499 5v5h-1V5Zm3.842 3.354-3-3 .707-.708 3 3Zm-9.39-.708 3-3 .707.708-3 3ZM8 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    skip: {
      symbolId: "nvidia-react-gui-icons-v1-line-skip",
      viewBox: "0 0 16 16",
      paths: [
        "M8 3a5 5 0 0 0-5 5v1h1V8a4 4 0 0 1 8 0v.293l-.646-.647-.708.708 1.854 1.853 1.854-1.853-.708-.708-.646.647V8a5 5 0 0 0-5-5",
        "M8 6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 6.5M7.5 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0",
      ],
    },
    skull: {
      symbolId: "nvidia-react-gui-icons-v1-line-skull",
      viewBox: "0 0 16 16",
      paths: [
        "M8 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5.5 6a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.5 6m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m5-1a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 6m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
        "M8 2a6 6 0 0 1 6 6l-.947 3.602-1.139.303L11.391 14H4.609l-.524-2.095-1.138-.303L2 8.065C2 4.771 4.678 2 8 2m0 1a5 5 0 0 0-4.999 4.938l.763 2.846 1.15.309L5.391 13H6.5v-1h1v1h1v-1h1v1h1.109l.477-1.907 1.149-.309.763-2.846A5 5 0 0 0 8 3",
      ],
    },
    sky: {
      symbolId: "nvidia-react-gui-icons-v1-line-sky",
      viewBox: "0 0 16 16",
      paths: [
        "M10.829 13H14v1H2v-1h3.171a3 3 0 1 1 5.658 0M8 10a2 2 0 0 0-1.733 3h3.466A2 2 0 0 0 8 10M6.191 2.487c-.37.056-.609.284-.676.61l-.2.98-.664-.749c-.22-.249-.541-.326-.889-.19-.359.14-.778.53-1.031 1.278l-.948-.32c.325-.959.919-1.618 1.615-1.889.476-.186.983-.18 1.422.023a1.8 1.8 0 0 1 1.22-.731c.738-.113 1.582.16 2.343.829l-.66.751c-.594-.522-1.152-.65-1.532-.592m4.99 2.743a1.8 1.8 0 0 1 1.422-.024c.696.272 1.29.931 1.614 1.89l-.947.32c-.253-.748-.672-1.138-1.031-1.278-.348-.136-.669-.059-.89.19l-.663.749-.201-.98c-.066-.326-.305-.554-.675-.61-.381-.058-.938.07-1.532.592l-.66-.752c.76-.668 1.604-.941 2.343-.829.505.077.941.336 1.22.732",
      ],
    },
    sliders: {
      symbolId: "nvidia-react-gui-icons-v1-line-sliders",
      viewBox: "0 0 16 16",
      paths: [
        "M5 2h3v2h6v1H8v2H5V5H2V4h3Zm3 6h3v2h3v1h-3v2H8v-2H2v-1h6ZM6 3v3h1V3Zm3 6v3h1V9Z",
      ],
    },
    smartphone: {
      symbolId: "nvidia-react-gui-icons-v1-line-smartphone",
      viewBox: "0 0 16 16",
      paths: [
        "M4 2.5A1.5 1.5 0 0 1 5.5 1h5A1.5 1.5 0 0 1 12 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 13.5ZM5.5 2a.5.5 0 0 0-.5.5V11h6V2.5a.5.5 0 0 0-.5-.5H9v1H7V2ZM11 12H5v1.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5Zm-2.5 1.5h-1v-1h1Z",
      ],
    },
    "smartphone-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-smartphone-off",
      viewBox: "0 0 16 16",
      paths: [
        "M12 2.5v6.672l-1-1V2.5a.5.5 0 0 0-.5-.5H9v1H7V2H5.5a.5.5 0 0 0-.429.243l-.714-.714A1.5 1.5 0 0 1 5.5 1h5A1.5 1.5 0 0 1 12 2.5m-3.5 11h-1v-1h1z",
        "M12 12.707v.793a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 13.5V4.707L1.646 2.354l.708-.708 12 12-.708.708Zm-7-7V11h5.293ZM11 12H5v1.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5Z",
      ],
    },
    snow: {
      symbolId: "nvidia-react-gui-icons-v1-line-snow",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 3.793V2h1v1.793l.647-.647.707.708L8.5 5.207v1.927l1.669-.963.495-1.849.966.258-.236.883 1.552-.896.5.866-1.552.896.883.237-.259.966-1.849-.495L9 8l1.669.963 1.849-.495.259.966-.883.237 1.552.896-.5.866-1.552-.896.236.883-.966.258-.495-1.849L8.5 8.866v1.927l1.354 1.353-.707.708-.647-.647V14h-1v-1.793l-.646.647-.707-.708L7.5 10.793V8.866l-1.669.963-.495 1.849-.966-.258.237-.883-1.553.896-.5-.866 1.553-.896-.883-.237.258-.966 1.849.495L7 8l-1.669-.963-1.849.495-.258-.966.883-.237-1.553-.896.5-.866 1.553.896-.237-.883.966-.258.495 1.849 1.669.963V5.207L6.147 3.854l.707-.708Z",
      ],
    },
    soccer: {
      symbolId: "nvidia-react-gui-icons-v1-line-soccer",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a6.99 6.99 0 0 1 5.529 2.707 7.03 7.03 0 0 1 1.465 4.574 6.97 6.97 0 0 1-1.225 3.686 7 7 0 0 1-3.845 2.765 7.005 7.005 0 0 1-8.918-6.444 7.01 7.01 0 0 1 4.618-6.874A7 7 0 0 1 8 1M5.719 2.448a6 6 0 0 0-2.323 1.705l.698 2.121 1.43.456L7.5 5.277V3.753ZM8.5 3.754v1.523l1.972 1.451 1.423-.471.679-2.135a6 6 0 0 0-2.284-1.669Zm2.282 3.925-.755 2.352.836 1.137 2.221.013a5.96 5.96 0 0 0 .894-2.678l-1.771-1.296Zm-8.76.831a5.96 5.96 0 0 0 .879 2.649l2.247.014.824-1.139-.754-2.352-1.43-.455Zm3.935 3.25.686 2.082c.902.208 1.85.206 2.751-.008l.661-2.077-.835-1.135H6.782Zm.244-4.286.69 2.148h2.217l.69-2.148L7.999 6.15Zm-2.52 4.69a6 6 0 0 0 1.774 1.27l-.415-1.262ZM12.88 6.46l1.069.783a6 6 0 0 0-.659-2.071ZM8 2q-.55 0-1.072.095L8 2.88l1.079-.783A6 6 0 0 0 8 2M2.69 5.207a6 6 0 0 0-.642 2.048l1.061-.772Zm7.885 8.212a6 6 0 0 0 1.732-1.243l-1.333-.007Z",
      ],
    },
    sort: {
      symbolId: "nvidia-react-gui-icons-v1-line-sort",
      viewBox: "0 0 16 16",
      paths: ["M13 6H3V5h10ZM9 9H3V8h6Zm-3 3H3v-1h3Z"],
    },
    "sort-ascending": {
      symbolId: "nvidia-react-gui-icons-v1-line-sort-ascending",
      viewBox: "0 0 16 16",
      paths: [
        "M14.854 5.147 12 2.293 9.146 5.147l.708.707L11.5 4.207V9h1V4.207l1.646 1.647zM3 12h10v1H3zm0-3h6v1H3zm0-3h3v1H3z",
      ],
    },
    "sort-descending": {
      symbolId: "nvidia-react-gui-icons-v1-line-sort-descending",
      viewBox: "0 0 16 16",
      paths: [
        "M3 4h10V3H3zm0 3h6V6H3zm0 3h3V9H3zm11.854.854L12 13.707l-2.854-2.853.708-.708 1.646 1.647V7h1v4.793l1.646-1.647z",
      ],
    },
    soundwaves: {
      symbolId: "nvidia-react-gui-icons-v1-line-soundwaves",
      viewBox: "0 0 16 16",
      paths: [
        "M6 13V3h1v10Zm-2-2V5h1v6Zm4 0V5h1v6Zm4 0V5h1v6Zm-2-1V6h1v4ZM2 9V7h1v2Z",
      ],
    },
    sparkle: {
      symbolId: "nvidia-react-gui-icons-v1-line-sparkle",
      viewBox: "0 0 16 16",
      paths: [
        "M10 5.5V4.366l-.982.567-.5-.866L9.5 3.5l-.982-.567.5-.866.982.567V1.5h1v1.134l.982-.567.5.866-.982.567.982.567-.5.866L11 4.366V5.5zm1 10v-3.134l-2.714 1.567-.5-.866L10.5 11.5 7.786 9.933l.5-.866L11 10.634V7.5h1v3.134l2.714-1.567.5.866L12.5 11.5l2.714 1.567-.5.866L12 12.366V15.5zm-7.5-8L1.652 6.433l.5-.866L4 6.634V4.5h1v2.134l1.848-1.067.5.866L5.5 7.5l1.848 1.067-.5.866L5 8.366V10.5H4V8.366L2.152 9.433l-.5-.866z",
      ],
    },
    speaker: {
      symbolId: "nvidia-react-gui-icons-v1-line-speaker",
      viewBox: "0 0 16 16",
      paths: [
        "M11 2.413v11.174L6.815 10H5V6h1.815Zm-1 2.174L7.185 7H6v2h1.185L10 11.413Z",
      ],
    },
    "speaker-high": {
      symbolId: "nvidia-react-gui-icons-v1-line-speaker-high",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2.413v11.174L3.815 10H2V6h1.815ZM7 4.587 4.185 7H3v2h1.185L7 11.413ZM13 12V4h1v8Zm-2-1V5h1v6Zm-2-1V6h1v4Z",
      ],
    },
    "speaker-low": {
      symbolId: "nvidia-react-gui-icons-v1-line-speaker-low",
      viewBox: "0 0 16 16",
      paths: [
        "M10 2.413v11.174L5.815 10H4V6h1.815ZM9 4.587 6.185 7H5v2h1.185L9 11.413ZM11 10V6h1v4Z",
      ],
    },
    "speaker-medium": {
      symbolId: "nvidia-react-gui-icons-v1-line-speaker-medium",
      viewBox: "0 0 16 16",
      paths: [
        "M9 2.413v11.174L4.815 10H3V6h1.815ZM8 4.587 5.185 7H4v2h1.185L8 11.413ZM12 11V5h1v6Zm-2-1V6h1v4Z",
      ],
    },
    "speaker-mute": {
      symbolId: "nvidia-react-gui-icons-v1-line-speaker-mute",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2.413v11.174L3.815 10H2V6h1.815ZM7 4.587 4.185 7H3v2h1.185L7 11.413ZM10.793 8.5 9.146 6.854l.708-.708L11.5 7.793l1.646-1.647.708.708L12.207 8.5l1.647 1.646-.708.708L11.5 9.207l-1.646 1.647-.708-.708Z",
      ],
    },
    "speaker-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-speaker-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L10 10.707v2.88L5.815 10H4V6h1.293L1.646 2.354ZM6.243 6.95 6.185 7H5v2h1.185L9 11.413V9.707ZM10 2.413v4.759l-1-1V4.587l-.853.731-.709-.709z",
      ],
    },
    split: {
      symbolId: "nvidia-react-gui-icons-v1-line-split",
      viewBox: "0 0 16 16",
      paths: [
        "M6 6.5h-.793L8 9.293 10.793 6.5H10v-1h2.5V8h-1v-.793l-3 3V13h-1v-2.793l-3-3V8h-1V5.5H6z",
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2",
      ],
    },
    "split-file": {
      symbolId: "nvidia-react-gui-icons-v1-line-split-file",
      viewBox: "0 0 16 16",
      paths: [
        "M4 14h8v-4h1v5H3v-5h1zM3 9H1V8h2zm3 0H4V8h2zm3 0H7V8h2zm3 0h-2V8h2zm3 0h-2V8h2zm-2-4.707V7h-1V5H9V2H4v5H3V1h6.707ZM10 4h1.293L10 2.707Z",
      ],
    },
    spoon: {
      symbolId: "nvidia-react-gui-icons-v1-line-spoon",
      viewBox: "0 0 16 16",
      paths: [
        "M8.766 9.065c-.227.257-.266.384-.266.435V14h-1V9.5c0-.051-.039-.178-.266-.435a9 9 0 0 0-.492-.499l-.346-.337C5.766 7.598 5 6.72 5 5.5 5 3.656 6.262 2 8 2s3 1.656 3 3.5c0 1.22-.766 2.098-1.396 2.729q-.186.183-.346.337a9 9 0 0 0-.492.499M6 5.5c0 .78.484 1.402 1.104 2.021q.14.14.291.285c.209.202.423.409.589.598L8 8.421l.016-.017c.166-.189.38-.396.589-.598q.151-.146.291-.285C9.516 6.902 10 6.28 10 5.5 10 4.03 9.023 3 8 3S6 4.03 6 5.5",
      ],
    },
    "square-wave": {
      symbolId: "nvidia-react-gui-icons-v1-line-square-wave",
      viewBox: "0 0 16 16",
      paths: ["M2 5h6.5v4H13V5h1v5H7.5V6H3v4H2Z"],
    },
    "stack-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-line-stack-horizontal",
      viewBox: "0 0 16 16",
      paths: ["M14 3v10H6V3Zm-7 9h6V4H7ZM5 4v8H4V4zM3 5v6H2V5z"],
    },
    stair: {
      symbolId: "nvidia-react-gui-icons-v1-line-stair",
      viewBox: "0 0 16 16",
      paths: ["M11 2h3v1h-2v3H9v3H6v3H3v2H2v-3h3V8h3V5h3Z"],
    },
    star: {
      symbolId: "nvidia-react-gui-icons-v1-line-star",
      viewBox: "0 0 16 16",
      paths: [
        "m8 1.37 2.186 4.43 4.889.71-3.538 3.448.835 4.869L8 12.528l-4.372 2.299.835-4.869L.926 6.51l4.888-.71Zm0 2.26L6.478 6.714l-3.403.494 2.462 2.401-.581 3.39L8 11.398l3.044 1.601-.581-3.39 2.462-2.401-3.403-.494Z",
      ],
    },
    "steering-wheel": {
      symbolId: "nvidia-react-gui-icons-v1-line-steering-wheel",
      viewBox: "0 0 16 16",
      paths: [
        "M8 7.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
        "M8 2a6 6 0 0 1 6 6v.107a6.003 6.003 0 0 1-6.431 5.878 6.003 6.003 0 0 1-5.568-5.878L2 8a6 6 0 0 1 6-6m0 4.107 4.969 1.331a5 5 0 0 0-9.938 0Zm0 1.035L3.022 8.476l.005.05 4.057 1.086L7.992 13h.017l.908-3.388 4.056-1.086.005-.05Zm1.733 3.287-.658 2.455a5.01 5.01 0 0 0 3.655-3.258Zm-3.466 0L3.27 9.626a5.01 5.01 0 0 0 3.655 3.258Z",
      ],
    },
    "step-forward": {
      symbolId: "nvidia-react-gui-icons-v1-line-step-forward",
      viewBox: "0 0 16 16",
      paths: [
        "M6 3.629 13.492 8 6 12.37Zm1 1.742v5.259L11.508 8ZM3 12.5v-9h1v9Z",
      ],
    },
    "step-reverse": {
      symbolId: "nvidia-react-gui-icons-v1-line-step-reverse",
      viewBox: "0 0 16 16",
      paths: [
        "M10 3.629v8.741L2.508 8ZM4.492 8 9 10.63V5.371ZM13 12.5h-1v-9h1Z",
      ],
    },
    sticker: {
      symbolId: "nvidia-react-gui-icons-v1-line-sticker",
      viewBox: "0 0 16 16",
      paths: ["M14 2v12H6.293L2 9.707V2ZM3 9h4v4h6V3H3Zm.707 1L6 12.293V10Z"],
    },
    "sticker-image": {
      symbolId: "nvidia-react-gui-icons-v1-line-sticker-image",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 5M6 6.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0",
        "M14 2v12H6.293L2 9.707V2ZM3 9h4v4h6v-1.887l-2.983-1.719-1.767 1.018-.5-.866 2.267-1.306L13 9.959V3H3Zm.707 1L6 12.293V10Z",
      ],
    },
    "sticker-shape": {
      symbolId: "nvidia-react-gui-icons-v1-line-sticker-shape",
      viewBox: "0 0 16 16",
      paths: [
        "M9.259 5.921 8 3.37 6.741 5.921l-2.815.41 1.725 1.681.698-.716-.275-.267 1.331-.194L8 5.63l.595 1.205 1.331.194-.963.938.227 1.325-.457-.24-.466.885 2.251 1.183-.481-2.804 2.038-1.985z",
        "M14 2v12H6.293L2 9.707V2ZM3 9h4v4h6V3H3Zm.707 1L6 12.293V10Z",
      ],
    },
    "sticker-text": {
      symbolId: "nvidia-react-gui-icons-v1-line-sticker-text",
      viewBox: "0 0 16 16",
      paths: [
        "M6 6h2v5h1V6h2V5H6z",
        "M14 2v12H6.293L2 9.707V2ZM3 9h4v4h6V3H3Zm.707 1L6 12.293V10Z",
      ],
    },
    "sticker-zoom": {
      symbolId: "nvidia-react-gui-icons-v1-line-sticker-zoom",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 4a2.5 2.5 0 0 1 2.086 3.879l1.768 1.768-.708.707-1.767-1.768A2.5 2.5 0 1 1 8.5 4M7 6.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 7 6.5",
        "M14 2v12H6.293L2 9.707V2ZM3 9h4v4h6V3H3Zm.707 1L6 12.293V10Z",
      ],
    },
    stone: {
      symbolId: "nvidia-react-gui-icons-v1-line-stone",
      viewBox: "0 0 16 16",
      paths: [
        "M3.348 1h9.304l-.804 3H11v8h.848l.804 3H3.348l.804-3H5V4h-.848ZM6 4v8h1.5V4Zm2.5 0v8H10V4ZM4.652 2l.268 1h6.16l.268-1Zm.268 11-.268 1h6.696l-.268-1Z",
      ],
    },
    stop: {
      symbolId: "nvidia-react-gui-icons-v1-line-stop",
      viewBox: "0 0 16 16",
      paths: ["M4 4h8v8H4Zm1 1v6h6V5Z"],
    },
    straw: {
      symbolId: "nvidia-react-gui-icons-v1-line-straw",
      viewBox: "0 0 16 16",
      paths: [
        "M4.03 2.171 4.5 2l.47-.171v.002l.002.003.005.014.017.05q.024.065.066.19a39 39 0 0 1 .927 3.297c.477 2.03.957 4.746 1.009 7.615h1.007c.028-2.567.265-4.783.502-6.386a38 38 0 0 1 .464-2.542l.033-.142.009-.037.003-.01.001-.003v-.001L9.5 4l.485.121v.002l-.002.007-.008.033-.03.131q-.041.175-.111.517a37 37 0 0 0-.339 1.95A46.5 46.5 0 0 0 9.003 13h1.002c.051-2.869.531-5.585 1.008-7.615a39 39 0 0 1 .927-3.297q.042-.125.066-.19l.017-.05.005-.014.002-.004s.004 0 .47.17l.47.171-.001.003-.004.01-.016.045-.061.179c-.053.158-.13.392-.223.692a40 40 0 0 0-.678 2.515c-.467 1.983-.931 4.618-.982 7.385H14v1H2v-1h1.992c-.066-2.035-.517-4.147-.974-5.805a35 35 0 0 0-.9-2.795l-.062-.162-.015-.04-.004-.01-.001-.002L2.5 4l.464-.185.002.004.005.012.018.045.065.172c.056.149.136.366.231.639.19.548.444 1.324.697 2.243.469 1.699.944 3.91 1.01 6.07h1.003c-.051-2.767-.515-5.402-.982-7.385A40 40 0 0 0 4.335 3.1c-.093-.3-.169-.534-.223-.692l-.061-.179-.016-.045-.004-.01Z",
      ],
    },
    strikethrough: {
      symbolId: "nvidia-react-gui-icons-v1-line-strikethrough",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4c-1.299 0-2 .846-2 1.5 0 .596.21.917.514 1.149.348.266.836.431 1.449.624l.073.023c.198.063.408.129.62.204H14v1h-3.671c.324.357.564.817.664 1.418.152.911-.161 1.702-.746 2.251C9.673 12.709 8.858 13 8 13c-1.683 0-3-1.035-3-2.5h1c0 .744.683 1.5 2 1.5.642 0 1.2-.219 1.563-.559.351-.331.538-.79.444-1.359-.1-.598-.386-.952-.777-1.213a3.7 3.7 0 0 0-.752-.369H2v-1h3.983l-.076-.056C5.353 7.021 5 6.404 5 5.5 5 4.154 6.299 3 8 3c1.683 0 3 1.035 3 2.5h-1C10 4.756 9.317 4 8 4",
      ],
    },
    "stroke-width": {
      symbolId: "nvidia-react-gui-icons-v1-line-stroke-width",
      viewBox: "0 0 16 16",
      paths: ["M2 9h12v4H2Zm0-4h12v3H2Zm1 5v2h10v-2Zm11-6H2V3h12ZM3 6v1h10V6Z"],
    },
    style: {
      symbolId: "nvidia-react-gui-icons-v1-line-style",
      viewBox: "0 0 16 16",
      paths: [
        "m13.25.543 2.207 2.207L11 7.207v.043c0 1.544-1.104 2.558-2.43 2.745-.6.085-1.296.089-1.927-.078-.634-.167-1.255-.522-1.59-1.193l-.258-.516.547-.182c.47-.157.755-.603 1.145-1.274l.016-.027c.209-.36.456-.784.786-1.112A2 2 0 0 1 8.75 5h.042ZM10 7.24 8.76 6h-.01c-.324 0-.55.118-.756.322-.227.226-.414.54-.642.933l-.035.059c-.25.431-.563.971-1.055 1.341q.251.195.636.295c.465.123 1.019.127 1.532.055.9-.127 1.57-.774 1.57-1.755Zm2-2.447 2.042-2.043-.792-.793L11.207 4Zm-.707.707-.793-.793-.809.809.792.793Z",
        "M8 3H1v10h14V6h-1v6H2V4h6z",
      ],
    },
    subtract: {
      symbolId: "nvidia-react-gui-icons-v1-line-subtract",
      viewBox: "0 0 16 16",
      paths: ["M3.5 7.5h9v1h-9z"],
    },
    "subtract-circle": {
      symbolId: "nvidia-react-gui-icons-v1-line-subtract-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M12 7.5H4v1h8z",
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8",
      ],
    },
    "suit-club": {
      symbolId: "nvidia-react-gui-icons-v1-line-suit-club",
      viewBox: "0 0 16 16",
      paths: [
        "M5 5a3 3 0 1 1 5.828 1.005 3 3 0 1 1-1.08 5.722L10.357 14H5.643l.609-2.273a3 3 0 1 1-1.079-5.722A3 3 0 0 1 5 5m3-2a2 2 0 0 0-1.217 3.587l-.601.8a2 2 0 1 0 .55 2.614l.916.38L6.946 13h2.108l-.702-2.619.916-.38a2 2 0 1 0 .55-2.614l-.601-.8A2 2 0 0 0 8 3",
      ],
    },
    "suit-diamond": {
      symbolId: "nvidia-react-gui-icons-v1-line-suit-diamond",
      viewBox: "0 0 16 16",
      paths: [
        "M7.211 2h1.577l3.464 6-3.464 6H7.211L3.747 8Zm.578 1L4.902 8l2.887 5h.422l2.887-5-2.887-5Z",
      ],
    },
    "suit-spade": {
      symbolId: "nvidia-react-gui-icons-v1-line-suit-spade",
      viewBox: "0 0 16 16",
      paths: [
        "m8 1.492.434.76c.804 1.407 1.684 2.388 2.473 3.266q.241.268.469.528C12.26 7.056 13 8.053 13 9.5a2.5 2.5 0 0 1-3.205 2.399L10.358 14H5.643l.563-2.101A2.5 2.5 0 0 1 3 9.5c0-1.447.74-2.444 1.624-3.454q.227-.26.469-.528c.789-.878 1.669-1.859 2.473-3.266ZM5.376 6.704C4.51 7.694 4 8.447 4 9.5a1.5 1.5 0 0 0 2.638.977l.862.456L6.946 13h2.108l-.553-2.066.862-.456A1.5 1.5 0 0 0 12 9.5c0-1.053-.51-1.806-1.376-2.796q-.212-.24-.447-.501C9.517 5.469 8.74 4.604 8 3.461c-.74 1.143-1.517 2.008-2.177 2.742q-.235.26-.447.501",
      ],
    },
    suitcase: {
      symbolId: "nvidia-react-gui-icons-v1-line-suitcase",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 2H5V1h6v1H9.5v2.5H12V14h-1.5v1h-1v-1h-3v1h-1v-1H4V4.5h2.5ZM5 5.5V13h6V5.5ZM5.812 9h4.375l-.803 3H6.616ZM7.5 2v2.5h1V2ZM9 7.5H7v-1h2ZM7.115 10l.268 1h1.233l.268-1Z",
      ],
    },
    "sun-high": {
      symbolId: "nvidia-react-gui-icons-v1-line-sun-high",
      viewBox: "0 0 16 16",
      paths: [
        "M5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6m-.5-2V2h1v2ZM4 8.5H2v-1h2Zm10 0h-2v-1h2ZM8.5 12v2h-1v-2ZM4.818 5.525 3.404 4.111l.707-.707 1.414 1.414Zm6.364 0-.707-.707 1.414-1.414.707.707Zm-7.071 7.071-.707-.707 1.414-1.414.707.707Zm7.778 0-1.414-1.414.707-.707 1.414 1.414Z",
      ],
    },
    "sun-low": {
      symbolId: "nvidia-react-gui-icons-v1-line-sun-low",
      viewBox: "0 0 16 16",
      paths: [
        "M5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6m-3.182-.475-.707-.707.707-.707.707.707ZM7.5 4V3h1v1ZM4 8.5H3v-1h1Zm9 0h-1v-1h1ZM8.5 12v1h-1v-1Zm-4.389-.818.707-.707.707.707-.707.707Zm6.364-6.364.707-.707.707.707-.707.707Zm.707 7.071-.707-.707.707-.707.707.707Z",
      ],
    },
    "sun-off-high": {
      symbolId: "nvidia-react-gui-icons-v1-line-sun-off-high",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-3.908-3.909a3 3 0 0 1-4.183-4.183L1.646 2.354Zm3.923 5.338a2 2 0 0 0 2.739 2.739ZM11 8q0 .084-.005.167L7.833 5.005Q7.916 5 8 5a3 3 0 0 1 3 3M7.5 4V2h1v2zm3.682 1.525-.707-.707 1.414-1.414.707.707zM4 8.5H2v-1h2zm10 0h-2v-1h2zm-9.889 4.096-.707-.707 1.414-1.414.707.707z",
        "M8.5 12v2h-1v-2z",
      ],
    },
    swatches: {
      symbolId: "nvidia-react-gui-icons-v1-line-swatches",
      viewBox: "0 0 16 16",
      paths: [
        "m8.976 2.194 5.797 1.554-2.588 9.659L6.934 12H5.566l-1.868.501-2.071-7.728L5 3.869V3h3.76Zm-1.364 8.952 3.866 1.036 2.071-7.727-3.866-1.036ZM8.492 4H6v7h.616ZM5 11.116V4.905l-2.148.575 1.553 5.796Z",
      ],
    },
    sword: {
      symbolId: "nvidia-react-gui-icons-v1-line-sword",
      viewBox: "0 0 16 16",
      paths: [
        "M14 4.707 7.207 11.5l1.147 1.146-.708.708-1.439-1.44-3 3-2.121-2.121 3-3-1.44-1.439.708-.708L4.5 8.793 11.293 2H14ZM5.207 9.5 6.5 10.793l6.5-6.5V3h-1.293ZM2.5 12.793l.707.707L5.5 11.207l-.707-.707Z",
      ],
    },
    sync: {
      symbolId: "nvidia-react-gui-icons-v1-line-sync",
      viewBox: "0 0 16 16",
      paths: [
        "M11.211 3.505 8.354.646l-.708.707 1.651 1.652H8.004a5 5 0 0 0-4.831 6.294l.966-.258a4 4 0 0 1 3.865-5.036h1.29L7.647 5.646l.706.708zm1.623 3.196q.168.623.169 1.295a5 5 0 0 1-5 5l-1.295-.001 1.646 1.652-.708.706-2.849-2.858 2.849-2.849.707.708-1.642 1.641 1.292.001a4 4 0 0 0 3.865-5.036z",
      ],
    },
    "sync-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-sync-off",
      viewBox: "0 0 16 16",
      paths: [
        "M13.003 7.996c0 .647-.123 1.265-.346 1.832l-.791-.79a4 4 0 0 0 .002-2.078l.966-.259q.168.623.169 1.295M9.294 4.005 8.061 5.233l.707.707 2.443-2.435L8.354.646l-.708.707 1.651 1.652H8.004c-.645 0-1.261.122-1.827.344l.791.791a4 4 0 0 1 1.036-.135zm1.158 7.154L4.844 5.551a4.01 4.01 0 0 0-.705 3.49l-.966.258a5 5 0 0 1-.169-1.294c0-1.201.423-2.303 1.129-3.165L1.646 2.354l.707-.708 12.001 12-.708.708-2.483-2.483a4.98 4.98 0 0 1-3.16 1.125l-1.295-.001 1.646 1.652-.708.706-2.849-2.858 2.849-2.849.707.708-1.642 1.641 1.292.001c.923 0 1.772-.313 2.449-.837",
      ],
    },
    "sync-warning": {
      symbolId: "nvidia-react-gui-icons-v1-line-sync-warning",
      viewBox: "0 0 16 16",
      paths: [
        "m8.354.647 3.356 3.358H8.004a4 4 0 0 0-3.865 5.036l-.966.258a5 5 0 0 1 4.831-6.294h1.293L7.646 1.353Zm4.48 6.054q.168.623.169 1.295a5 5 0 0 1-5 4.999H6.708l1.646 1.652-.708.706-3.347-3.358h3.704a4 4 0 0 0 3.865-5.035ZM8.002 5.5 10.6 10H5.404ZM7.136 9h1.732l-.866-1.5Z",
      ],
    },
    tablet: {
      symbolId: "nvidia-react-gui-icons-v1-line-tablet",
      viewBox: "0 0 16 16",
      paths: [
        "M3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5ZM4.5 2a.5.5 0 0 0-.5.5V11h8V2.5a.5.5 0 0 0-.5-.5ZM12 12H4v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5Zm-3.5 1.5h-1v-1h1Z",
      ],
    },
    "tablet-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-tablet-off",
      viewBox: "0 0 16 16",
      paths: [
        "M13 2.5v7.672l-1-1V2.5a.5.5 0 0 0-.5-.5H4.828l-.891-.891C4.111 1.039 4.301 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5m-4.5 11h-1v-1h1z",
        "M12.988 13.695A1.5 1.5 0 0 1 11.5 15h-7A1.5 1.5 0 0 1 3 13.5V3.707L1.646 2.354l.708-.708 13 13-.708.708ZM4 4.707V11h6.293ZM11.293 12H4v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.793Z",
      ],
    },
    tag: {
      symbolId: "nvidia-react-gui-icons-v1-line-tag",
      viewBox: "0 0 16 16",
      paths: [
        "M8.293 2h3.414L14 4.293v3.414l-6.5 6.5L1.793 8.5Zm.414 1-5.5 5.5L7.5 12.793l5.5-5.5V4.707L11.293 3ZM9 5.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 5.5m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "tag-label": {
      symbolId: "nvidia-react-gui-icons-v1-line-tag-label",
      viewBox: "0 0 16 16",
      paths: [
        "M8.293 2h3.414L14 4.293v3.414l-6.5 6.5L1.793 8.5Zm.414 1-5.5 5.5L7.5 12.793l5.5-5.5V4.707L11.293 3ZM9 5.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 5.5m-1.853 5.354-2-2 .707-.708 2 2Zm1.707-1.708-.707.708-2-2 .707-.708ZM10.5 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    teapot: {
      symbolId: "nvidia-react-gui-icons-v1-line-teapot",
      viewBox: "0 0 16 16",
      paths: [
        "M7 4.5h2V5h1.91l.804 3h.403l.803-3h1.58v1h-.812l-.804 3h-.902l.518 1.934V11c0 .424-.332.685-.56.82-.262.154-.607.276-.991.372-.774.194-1.816.308-2.949.308s-2.176-.114-2.95-.308c-.383-.096-.729-.218-.99-.372-.229-.135-.56-.396-.56-.82v-.066L3.75 10H1.848L2.92 6h1.902l.268-1H7ZM5.857 6l-1.323 4.938.034.021c.144.084.384.178.725.263.673.169 1.631.278 2.707.278s2.033-.109 2.707-.278c.341-.085.581-.179.724-.263l.034-.021L10.143 6ZM4.554 7h-.866l-.536 2h.866Zm6.978 3.884-.005.006zm-7.065 0 .005.006z",
      ],
    },
    telephone: {
      symbolId: "nvidia-react-gui-icons-v1-line-telephone",
      viewBox: "0 0 16 16",
      paths: [
        "m11.081 2.136 2.494.669.096.219-.458.201c.458-.2.458-.199.459-.199v.002l.002.004.006.013.016.041q.02.051.05.141c.04.12.089.291.134.506a6.2 6.2 0 0 1 .095 1.786c-.131 1.497-.811 3.481-2.91 5.561-2.097 2.079-4.08 2.757-5.57 2.893a6.1 6.1 0 0 1-1.776-.086 5 5 0 0 1-.643-.178l-.041-.016-.013-.005-.004-.002-.002-.001-.002-.001.199-.459-.199.459-.221-.096-.669-2.495 3.528-2.037 1.759 1.016c.473-.186 1.024-.519 1.612-1.102.545-.541.872-1.051 1.065-1.498L9.044 5.665Zm1.746 1.504-1.264-.339-1.364 2.364.991 1.716-.078.218c-.23.646-.655 1.357-1.385 2.081-.778.771-1.535 1.198-2.212 1.416l-.211.069-1.652-.954-2.363 1.365.338 1.261q.116.034.289.07c.348.07.858.128 1.488.07 1.251-.114 3.019-.686 4.957-2.607 1.937-1.919 2.508-3.685 2.618-4.938a5.2 5.2 0 0 0-.079-1.496 4 4 0 0 0-.073-.296",
      ],
    },
    "telephone-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-telephone-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.934-2.935c-1.966 1.815-3.811 2.426-5.217 2.554a6.1 6.1 0 0 1-1.776-.086 5 5 0 0 1-.643-.178l-.041-.016-.013-.005-.004-.002-.002-.001s-.001-.001.197-.46l-.198.459-.222-.096-.669-2.495 3.528-2.037 1.759 1.016a4.4 4.4 0 0 0 1.214-.74L1.646 2.354Zm6.981 8.396c-.639.547-1.258.873-1.82 1.054l-.211.069-1.652-.954-2.363 1.365.338 1.262q.116.033.289.069c.348.07.858.128 1.488.07 1.174-.107 2.802-.617 4.6-2.266Zm4.64-4.523c-.099 1.125-.507 2.524-1.594 4.034l-.717-.718c.912-1.313 1.235-2.493 1.315-3.403a5.2 5.2 0 0 0-.078-1.496 4 4 0 0 0-.074-.296l-1.264-.339-1.364 2.364.991 1.716-.078.218a5 5 0 0 1-.203.481L9.797 6.968l-.753-1.303 2.037-3.528 2.494.668.096.22-.458.2.458-.2.001.001v.002l.002.004.006.013.016.041q.02.051.05.141c.04.12.089.291.134.506a6.2 6.2 0 0 1 .095 1.786",
      ],
    },
    teleport: {
      symbolId: "nvidia-react-gui-icons-v1-line-teleport",
      viewBox: "0 0 16 16",
      paths: [
        "M4.848 5.675h6.304L9.189 13H6.811Zm-2.729 6.611c-.108.115-.119.186-.119.214 0 .04.027.172.305.374.267.194.684.39 1.246.562C4.668 13.78 6.241 14 8 14s3.333-.22 4.449-.564c.562-.172.98-.368 1.246-.562.278-.202.305-.334.305-.374 0-.028-.011-.099-.119-.214-.11-.118-.296-.252-.574-.39-.552-.274-1.373-.514-2.386-.677l.158-.987c1.067.171 1.996.432 2.673.769.338.167.637.366.858.601.223.238.39.541.39.898 0 .513-.336.906-.717 1.183-.391.284-.925.52-1.54.709C11.507 14.772 9.831 15 8 15s-3.507-.228-4.743-.608c-.615-.189-1.149-.425-1.54-.709C1.336 13.406 1 13.013 1 12.5c0-.357.167-.66.39-.898.221-.235.52-.434.858-.601.677-.337 1.606-.598 2.673-.769l.158.987c-1.013.163-1.834.403-2.386.677-.278.138-.464.272-.574.39M6 3a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 3m.152 3.675L7.578 12h.844l1.426-5.325ZM8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    telescope: {
      symbolId: "nvidia-react-gui-icons-v1-line-telescope",
      viewBox: "0 0 16 16",
      paths: [
        "m13.016 1.828 1.357 5.064-2.332.625-.183-.683-2.117.567 1.739 6.492-.966.259-.634-2.368a4.5 4.5 0 0 1-2.765-.001l-.635 2.369-.966-.259 1.548-5.774-2.034.545-.183-.683-1.767.473.074.273-.966.259-.777-2.898.966-.259.079.293 1.766-.473-.183-.683 6.83-1.83-.183-.683Zm-1.89 2.274L5.262 5.673l.473 1.766 5.864-1.571ZM8.177 7.82l-.803 2.995c.353.12.732.185 1.126.185a3.5 3.5 0 0 0 1.121-.183L8.775 7.66Zm3.732-4.66.839 3.132.4-.107-.839-3.132Zm-7.43 3.455-1.766.473.107.4 1.766-.473Z",
      ],
    },
    television: {
      symbolId: "nvidia-react-gui-icons-v1-line-television",
      viewBox: "0 0 16 16",
      paths: ["M15 3v9h-1.5v1h-1v-1h-9v1h-1v-1H1V3Zm-1 6V4H2v5Zm0 2v-1H2v1Z"],
    },
    "television-retro": {
      symbolId: "nvidia-react-gui-icons-v1-line-television-retro",
      viewBox: "0 0 16 16",
      paths: [
        "M12 7v5H6V7ZM7 8v3h4V8Zm-3.5.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M4 11v1h1v-1z",
        "M7.884 4h.233L8.955.871l.966.258L9.152 4h.927l.268 1H14v9H2V5h3.652l.268-1h.928l-.769-2.871.966-.258ZM3 6v7h10V6Z",
      ],
    },
    text: {
      symbolId: "nvidia-react-gui-icons-v1-line-text",
      viewBox: "0 0 16 16",
      paths: ["M7.5 4H4V3h8v1H8.5v9h-1Z"],
    },
    "text-align-center": {
      symbolId: "nvidia-react-gui-icons-v1-line-text-align-center",
      viewBox: "0 0 16 16",
      paths: ["M14 4H2V3h12Zm-1 6H3V9h10Zm-1-3H4V6h8Zm-1 6H5v-1h6Z"],
    },
    "text-align-full": {
      symbolId: "nvidia-react-gui-icons-v1-line-text-align-full",
      viewBox: "0 0 16 16",
      paths: ["M14 4H2V3h12Zm0 3H2V6h12Zm0 3H2V9h12Zm-6 3H2v-1h6Z"],
    },
    "text-align-left": {
      symbolId: "nvidia-react-gui-icons-v1-line-text-align-left",
      viewBox: "0 0 16 16",
      paths: ["M14 4H2V3h12Zm-2 6H2V9h10Zm-2-3H2V6h8Zm-2 6H2v-1h6Z"],
    },
    "text-align-right": {
      symbolId: "nvidia-react-gui-icons-v1-line-text-align-right",
      viewBox: "0 0 16 16",
      paths: ["M14 4H2V3h12Zm0 6H4V9h10Zm0-3H6V6h8Zm0 6H8v-1h6Z"],
    },
    "text-framed": {
      symbolId: "nvidia-react-gui-icons-v1-line-text-framed",
      viewBox: "0 0 16 16",
      paths: ["M2 2h12v12H2Zm1 1v10h10V3Zm4.5 3H5V5h6v1H8.5v5h-1Z"],
    },
    texture: {
      symbolId: "nvidia-react-gui-icons-v1-line-texture",
      viewBox: "0 0 16 16",
      paths: [
        "M14 2v12H2V2Zm-3.293 1L3 10.707v1.586L12.293 3ZM13 3.707 3.707 13h1.586L13 5.293ZM7.707 3 3 7.707v1.586L9.293 3ZM13 6.707 6.707 13h1.586L13 8.293Zm0 3L9.707 13h1.586L13 11.293Zm-10-5v1.586L6.293 3H4.707Zm10 8-.293.293H13ZM3 3.293 3.293 3H3Z",
      ],
    },
    thermometer: {
      symbolId: "nvidia-react-gui-icons-v1-line-thermometer",
      viewBox: "0 0 16 16",
      paths: [
        "M8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        "M10 9.766a3 3 0 1 1-4-.001V1h4Zm-3 .484-.2.149a2 2 0 1 0 2.399 0L9 10.25V8H8V7h1V6H8V5h1V4H8V3h1V2H7Z",
      ],
    },
    "thumb-down": {
      symbolId: "nvidia-react-gui-icons-v1-line-thumb-down",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 3H14v8h-3.211l-1.895 3.281a1.437 1.437 0 0 1-2.633-1.09L6.848 11H2.482l-.763-2.848L3.1 3h5.6l1.8.482Zm0 1.518L8.568 4H3.867L2.755 8.152 3.25 10h4.902l-.925 3.45a.438.438 0 0 0 .801.331l2.072-3.588.4-.4Zm1 5.482H13V4h-1.5Z",
      ],
    },
    "thumb-up": {
      symbolId: "nvidia-react-gui-icons-v1-line-thumb-up",
      viewBox: "0 0 16 16",
      paths: [
        "m5.211 5 1.895-3.281a1.437 1.437 0 0 1 2.633 1.09L9.152 5h4.366l.763 2.848L12.9 13H7.3l-1.8-.482V13H2V5ZM8.35 2c-.156 0-.3.083-.378.219L5.9 5.807l-.4.4v5.275L7.432 12h4.701l1.112-4.152L12.75 6H7.848l.925-3.45A.438.438 0 0 0 8.35 2M4.5 12V6H3v6Z",
      ],
    },
    ticket: {
      symbolId: "nvidia-react-gui-icons-v1-line-ticket",
      viewBox: "0 0 16 16",
      paths: [
        "M8.641 7.169 8 5.87l-.641 1.299-1.433.208 1.037 1.011-.245 1.428L8 9.142l1.282.674-.245-1.428 1.038-1.011z",
        "M15 3v4h-1a1 1 0 0 0 0 2h1v4H1V9h1a1 1 0 0 0 0-2H1V3ZM2 6a2 2 0 1 1 0 4v2h12v-2a2 2 0 1 1 0-4V4H2Z",
      ],
    },
    timer: {
      symbolId: "nvidia-react-gui-icons-v1-line-timer",
      viewBox: "0 0 16 16",
      paths: [
        "M7 3H6V2h4v1H9v1.1A5.002 5.002 0 0 1 8 14a5 5 0 0 1-1-9.9Zm1 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-.707 3.293L6.74 6.231l.966-.259.553 2.062a1 1 0 1 1-.966.259",
      ],
    },
    toolbox: {
      symbolId: "nvidia-react-gui-icons-v1-line-toolbox",
      viewBox: "0 0 16 16",
      paths: [
        "M5 2h6v2h3v9H2V4h3Zm8 6h-3v1H6V8H3v4h10ZM3 5v2h3V6h4v1h3V5Zm3-1h4V3H6Zm1 3v1h2V7Z",
      ],
    },
    "traffic-cone": {
      symbolId: "nvidia-react-gui-icons-v1-line-traffic-cone",
      viewBox: "0 0 16 16",
      paths: [
        "M6.614 3h2.768l2.411 9h2.205v1h-12v-1h2.205Zm-1.376 9h5.52L8.614 4H7.382l-.938 3.5H8v1H6.176l-.268 1H9v1H5.64Z",
      ],
    },
    "transfer-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-line-transfer-horizontal",
      viewBox: "0 0 16 16",
      paths: [
        "m6.854 1.854-.708-.708L2.793 4.5l3.353 3.354.708-.708L4.707 5H12V4H4.707zM4 11h7.293L9.146 8.854l.708-.708 3.353 3.354-3.353 3.354-.708-.708L11.293 12H4z",
      ],
    },
    "transfer-vertical": {
      symbolId: "nvidia-react-gui-icons-v1-line-transfer-vertical",
      viewBox: "0 0 16 16",
      paths: [
        "M14.854 6.146 11.5 2.793 8.146 6.146l.708.708L11 4.707V12h1V4.707l2.146 2.147zm-13 3-.708.708L4.5 13.207l3.354-3.353-.708-.708L5 11.293V4H4v7.293z",
      ],
    },
    transform: {
      symbolId: "nvidia-react-gui-icons-v1-line-transform",
      viewBox: "0 0 16 16",
      paths: [
        "M14 4.333v7.334l-6 3.147-6-3.147V4.333l6-3.147ZM6.302 6.67v2.223L8 9.784l1.698-.891V6.67L8 5.778ZM8 10.914l-1.698-.891v2.771L8 13.686l1.698-.892v-2.771Zm1.076-5.7 1.622.851v2.303L13 7.161V4.938l-1.698-.892ZM3 4.938v2.223l2.302 1.207V6.065l1.621-.851-2.226-1.168Zm7.698 4.56v2.771L13 11.061V8.29ZM3 11.061l2.302 1.208V9.498L3 8.29Zm2.774-7.58L8 4.649l2.225-1.168L8 2.313Z",
      ],
    },
    transparency: {
      symbolId: "nvidia-react-gui-icons-v1-line-transparency",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 1H8a7 7 0 1 1 0 14h-.5Zm1 1.021v11.958a6 6 0 0 0 0-11.958M2.09 9.043c.123.702.368 1.362.713 1.957l-.866.501a7 7 0 0 1-.832-2.286ZM5.947 2.36a6 6 0 0 0-1.804 1.044L3.5 2.638a7 7 0 0 1 2.105-1.217ZM2.803 5a6 6 0 0 0-.713 1.957l-.985-.172a7 7 0 0 1 .832-2.286Zm1.34 7.596a6 6 0 0 0 1.804 1.044l-.342.939A7 7 0 0 1 3.5 13.362Z",
      ],
    },
    trash: {
      symbolId: "nvidia-react-gui-icons-v1-line-trash",
      viewBox: "0 0 16 16",
      paths: ["M5 13h6V5h1v9H4V5h1ZM6 1h4v2h3v1H3V3h3Zm1 2h2V2H7Z"],
    },
    "trash-delete": {
      symbolId: "nvidia-react-gui-icons-v1-line-trash-delete",
      viewBox: "0 0 16 16",
      paths: [
        "M6 1h4v2h3v1H3V3h3Zm4.793 10.5L8.646 9.354l.708-.708 2.146 2.147 2.146-2.147.708.708-2.147 2.146 2.147 2.146-.708.708-2.146-2.147-2.146 2.147-.708-.708ZM4 5h1v8h1.889v1H4Zm3-2h2V2H7Z",
      ],
    },
    tree: {
      symbolId: "nvidia-react-gui-icons-v1-line-tree",
      viewBox: "0 0 16 16",
      paths: [
        "M6.473 2.037a2.5 2.5 0 0 1 4.504 1.126 3 3 0 0 1 .751 5.29A4 4 0 0 1 8.5 10.969V13H13v1H3v-1h4.5v-2.031a4 4 0 0 1-2.151-.973A2.5 2.5 0 0 1 3.301 6.31a3 3 0 0 1 3.172-4.273M8.5 2a1.5 1.5 0 0 0-1.341.827l-.188.374-.401-.119a2 2 0 0 0-2.266 2.979l.179.286-.198.273A1.5 1.5 0 0 0 5.5 9h.038l.211-.006.151.148a3 3 0 0 0 4.941-1.176l.058-.17.152-.094A1.999 1.999 0 0 0 10.4 4.04l-.411-.083.011-.419V3.5A1.5 1.5 0 0 0 8.5 2",
      ],
    },
    trees: {
      symbolId: "nvidia-react-gui-icons-v1-line-trees",
      viewBox: "0 0 16 16",
      paths: [
        "M10.371 7.696H8.866l3 5.196H7V15H6v-2.108H1.134l3-5.196H2.639L6.505 1Zm-6-1h1.495l-3 5.196h7.268l-3-5.196h1.505L6.505 3ZM10 15v-1h1v1zm4.37-7.304L10.505 1 8.938 3.714l.866.5L10.505 3l2.134 3.696h-1.505l3 5.196h-1.402v1h3.134l-3-5.196z",
      ],
    },
    "triangle-wave": {
      symbolId: "nvidia-react-gui-icons-v1-line-triangle-wave",
      viewBox: "0 0 16 16",
      paths: [
        "m5.667 4.842 4.666 4 4.342-3.722.65.76-4.992 4.279-4.666-4L1.325 9.88l-.65-.76Z",
      ],
    },
    trident: {
      symbolId: "nvidia-react-gui-icons-v1-line-trident",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 1v6.977c.518-.048 1.054-.175 1.453-.408q.384-.226.529-.542c.094-.207.136-.495.033-.906a95 95 0 0 0-.586-2.238l-.158-.556-.04-.138-.01-.033-.002-.008-.454-1.492 2.539 1.947-.608.794-.116-.089q.173.643.405 1.571c.147.589.112 1.114-.094 1.563-.203.445-.549.765-.933.989-.589.346-1.319.499-1.958.549V14h-1V8.98c-.639-.05-1.369-.203-1.958-.549-.384-.224-.73-.544-.933-.989-.205-.449-.241-.974-.094-1.563q.233-.928.405-1.571l-.116.089-.608-.794 2.539-1.947-.453 1.489v.003l-.003.008-.01.033-.04.138q-.054.184-.158.556a95 95 0 0 0-.586 2.238c-.103.411-.061.699.034.906q.144.316.529.542c.398.233.934.359 1.452.408V1z",
      ],
    },
    typography: {
      symbolId: "nvidia-react-gui-icons-v1-line-typography",
      viewBox: "0 0 16 16",
      paths: [
        "m5.483 3.37 2.278 8.5-.966.26L5.956 9H3.044l-.838 3.13-.483-.13-.484-.129 2.279-8.5L3.616 3h1.768ZM3.312 8h2.376L4.616 4h-.232ZM14 6.793v3.642l.385 1.435-.966.26-.178-.664-.534.534H9.793L9 11.207V9.793l.741-.741L13 8.179v-.972L12.793 7h-2.586l-.353.354-.708-.708L9.793 6h3.414Zm-3.741 3.155-.259.259v.586l.207.207h2.086l.707-.707V9.214Z",
      ],
    },
    umbrella: {
      symbolId: "nvidia-react-gui-icons-v1-line-umbrella",
      viewBox: "0 0 16 16",
      paths: [
        "M9 12.5a1.5 1.5 0 0 1-3 0h1a.5.5 0 0 0 1 0V8H.849l.935-3.491 2.359-2.36L8 1.116l3.857 1.033 2.36 2.36L15.151 8H9ZM4.659 3.046 2.68 5.026 2.151 7h11.698l-.53-1.975-1.979-1.979L8 2.151Z",
      ],
    },
    underline: {
      symbolId: "nvidia-react-gui-icons-v1-line-underline",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 3v6.5a2.5 2.5 0 1 0 5 0V3h1v6.5a3.5 3.5 0 1 1-7 0V3ZM14 14v1H2v-1Z",
      ],
    },
    undo: {
      symbolId: "nvidia-react-gui-icons-v1-line-undo",
      viewBox: "0 0 16 16",
      paths: [
        "M11.532 4.464c-1.98-1.979-4.961-1.742-6.886.182L3.001 6.292 3 4H2l.002 3.998L6 8V7l-2.292-.001 1.646-1.645c1.59-1.591 3.935-1.718 5.471-.182a4 4 0 0 1 0 5.656l.707.708a5 5 0 0 0 0-7.072",
      ],
    },
    upload: {
      symbolId: "nvidia-react-gui-icons-v1-line-upload",
      viewBox: "0 0 16 16",
      paths: [
        "M2.813 5.129 3.384 3h9.232l.571 2.129.966-.258L13.384 2H2.616l-.769 2.871z",
        "M7.5 6.207V14h1V6.207l3.146 3.147.708-.708L8 4.293 3.646 8.646l.708.708z",
      ],
    },
    usb: {
      symbolId: "nvidia-react-gui-icons-v1-line-usb",
      viewBox: "0 0 16 16",
      paths: [
        "m9.854 2.647-.708.707-.646-.647v5.641l2.5-.67V7h-1V4h3v3h-1v1.446l-3.5.938v1.679a2 2 0 1 1-1 0v-.179L4 9.946V7.915a1.5 1.5 0 1 1 1 0v1.264l2.5.669V2.707l-.646.647-.708-.707L8 .793ZM7 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0m5-8h-1v1h1ZM4 6.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0",
      ],
    },
    "v-align-bottom": {
      symbolId: "nvidia-react-gui-icons-v1-line-v-align-bottom",
      viewBox: "0 0 16 16",
      paths: ["M7 2v9H4V2Zm4 3v6H8V5Zm3 7v1H2v-1ZM5 3v7h1V3Zm4 3v4h1V6Z"],
    },
    "v-align-center": {
      symbolId: "nvidia-react-gui-icons-v1-line-v-align-center",
      viewBox: "0 0 16 16",
      paths: [
        "M4 13V8.5H2v-1h2V3h3v4.5h1V5h3v2.5h3v1h-3V11H8V8.5H7V13Zm1-1h1V4H5Zm5-2V6H9v4Z",
      ],
    },
    "v-align-top": {
      symbolId: "nvidia-react-gui-icons-v1-line-v-align-top",
      viewBox: "0 0 16 16",
      paths: ["M7 5v9H4V5Zm1 0h3v6H8Zm6-1H2V3h12ZM5 6v7h1V6Zm4 0v4h1V6Z"],
    },
    vga: {
      symbolId: "nvidia-react-gui-icons-v1-line-vga",
      viewBox: "0 0 16 16",
      paths: [
        "M5 10H4V9h1zm2 0H6V9h1zm2 0H8V9h1zm2 0h-1V9h1zM6 9H5V8h1zm2 0H7V8h1zm2 0H9V8h1zm2 0h-1V8h1zM5 8H4V7h1zm2 0H6V7h1zm2 0H8V7h1zm2 0h-1V7h1z",
        "M13.276 12H2.724L.849 5h14.302Zm-9.785-1h9.018l1.34-5H2.152Z",
      ],
    },
    videocam: {
      symbolId: "nvidia-react-gui-icons-v1-line-videocam",
      viewBox: "0 0 16 16",
      paths: [
        "M1 4h11v1.691l3-1.5v7.618l-3-1.5V12H1Zm1 1v6h9V8.691l3 1.5V5.809l-3 1.5V5Z",
      ],
    },
    "videocam-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-videocam-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L11.293 12H1V4h2.293L1.646 2.354ZM4.293 5H2v6h8.293ZM11 5H7.828l-1-1H12v1.691l3-1.5v7.618l-2.224-1.112.448-.894.776.388V5.809l-3 1.5z",
      ],
    },
    vr: {
      symbolId: "nvidia-react-gui-icons-v1-line-vr",
      viewBox: "0 0 16 16",
      paths: [
        "m12.384 5 .937 3.498-.937 3.497H8.883L8.616 11H7.384l-.267.995H3.616l-.937-3.498L3.616 5Zm-8 1-.67 2.497.67 2.498H6.35L6.616 10h2.768l.266.995h1.966l.67-2.497L11.616 6Zm9.902 2.498-.635-2.369.966-.258.704 2.627-.705 2.631-.966-.258ZM1.383 5.871l.966.258-.635 2.368.636 2.374-.966.258-.705-2.632ZM10 4H6V3h4Z",
      ],
    },
    wand: {
      symbolId: "nvidia-react-gui-icons-v1-line-wand",
      viewBox: "0 0 16 16",
      paths: [
        "M10 3.793 12.207 6 3.5 14.707 1.293 12.5ZM8.543 8.25l-.793-.793L2.707 12.5l.793.793Zm-.086-1.5.793.793L10.793 6 10 5.207Zm2.932 2.502.518 1.932-.966.259-.518-1.932Zm2.122-2.829 1.932.518-.259.966-1.932-.518Zm-7.022-.846-1.932-.518.258-.966 1.933.518Zm2.122-2.829L8.093.815l.966-.258.518 1.932Zm3.51.424 1.414-1.415.708.707-1.415 1.415Z",
      ],
    },
    warning: {
      symbolId: "nvidia-react-gui-icons-v1-line-warning",
      viewBox: "0 0 16 16",
      paths: [
        "m8 .984 7.357 13.014H.643ZM2.357 12.998h11.286L8 3.016ZM7.5 10V6.5h1V10Zm0 2v-1h1v1Z",
      ],
    },
    watch: {
      symbolId: "nvidia-react-gui-icons-v1-line-watch",
      viewBox: "0 0 16 16",
      paths: [
        "M5 1h6v3a5 5 0 0 1 1.9 3h.6v2h-.6a5 5 0 0 1-1.9 3v3H5v-3a5 5 0 0 1-2-4c0-1.636.786-3.088 2-4Zm3 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m.408 3.592 2.137.572-.259.966-2.694-.722-.722-2.694.966-.259ZM6 3.416A5 5 0 0 1 8 3c.711 0 1.388.148 2 .416V2H6Zm0 9.168V14h4v-1.416A5 5 0 0 1 8 13a5 5 0 0 1-2-.416",
      ],
    },
    "watch-party": {
      symbolId: "nvidia-react-gui-icons-v1-line-watch-party",
      viewBox: "0 0 16 16",
      paths: [
        "M15 1H1v9h1V2h12v8h1z",
        "M7 3.254 9.992 5 7 6.745ZM8 8.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 8.5M7.5 10a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m-4.39 1H5.5v1H3.89l-.25 1H5v1H2.36zm9.78 0H10.5v1h1.61l.25 1H11v1h2.64zm-3.5 1 .75 3H5.86l.75-3Zm-2.25 2h1.72l-.25-1H7.39Zm4.36-6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 11.5 7.5M11 9a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M3 9a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 3 9m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    water: {
      symbolId: "nvidia-react-gui-icons-v1-line-water",
      viewBox: "0 0 16 16",
      paths: [
        "m8 2.382.447.894c.317.633.779 1.344 1.278 2.11.27.416.551.848.826 1.293.379.616.737 1.246 1.001 1.853.262.602.448 1.219.448 1.801a4 4 0 0 1-8 0c0-.582.186-1.199.448-1.801.264-.607.622-1.237 1.001-1.853.275-.445.556-.877.826-1.293.499-.766.961-1.477 1.278-2.11ZM5.365 8.931C5.126 9.479 5 9.949 5 10.333a3 3 0 1 0 6 0c0-.384-.127-.854-.365-1.402-.236-.543-.565-1.126-.936-1.727a59 59 0 0 0-.767-1.2A47 47 0 0 1 8 4.53c-.281.471-.606.972-.932 1.474-.263.404-.526.809-.767 1.2-.371.601-.7 1.184-.936 1.727",
      ],
    },
    "weather-cloud": {
      symbolId: "nvidia-react-gui-icons-v1-line-weather-cloud",
      viewBox: "0 0 16 16",
      paths: [
        "M14 9c0-.671-.33-1.264-.839-1.628l-.165-.118-.036-.2A2.5 2.5 0 0 0 9.797 5.1l-.218.075A2.5 2.5 0 0 0 8 7.5V8h-.5a1.5 1.5 0 0 0 0 3H12a2 2 0 0 0 2-2m1 0a3 3 0 0 1-3 3H7.5a2.5 2.5 0 0 1-2.45-2H3.5a2.5 2.5 0 0 1-.47-4.955 3.5 3.5 0 0 1 6.673-.954 3.497 3.497 0 0 1 4.196 2.587A3 3 0 0 1 15 9M2 7.5A1.5 1.5 0 0 0 3.5 9h1.55a2.5 2.5 0 0 1 1.981-1.955 3.5 3.5 0 0 1 1.741-2.589A2.5 2.5 0 0 0 4 5.5V6h-.5A1.5 1.5 0 0 0 2 7.5",
      ],
    },
    "weather-fog": {
      symbolId: "nvidia-react-gui-icons-v1-line-weather-fog",
      viewBox: "0 0 16 16",
      paths: [
        "M5.927 11.205c.552-.115 1.004-.088 1.399.044.436.146.757.408 1.005.605.263.211.453.357.696.438.228.076.549.108 1.068-.031l2.775-.744.26.965-2.776.745c-.666.178-1.192.164-1.643.013-.436-.145-.757-.406-1.005-.604-.263-.21-.453-.357-.696-.438-.199-.066-.47-.099-.882-.013l-2.998.797-.26-.965z",
        "M5.927 9.205c.552-.115 1.004-.088 1.399.044.436.146.757.408 1.005.605.263.211.453.357.696.438.228.076.549.108 1.068-.031l2.775-.744.26.965-2.776.745c-.666.178-1.192.164-1.643.013-.436-.145-.757-.406-1.005-.604-.263-.21-.453-.357-.696-.438-.199-.066-.47-.099-.882-.013l-2.998.797-.26-.965zM8.5 3a3.5 3.5 0 0 1 3.399 2.678 2.99 2.99 0 0 1 .885 3.441l-.928-.373a1.996 1.996 0 0 0-.695-2.374l-.165-.118-.036-.2A2.5 2.5 0 0 0 6 6.5V7h-.5c-.841 0-1.532.721-1.499 1.561l-.999.039A2.524 2.524 0 0 1 5.03 6.045 3.5 3.5 0 0 1 8.5 3",
      ],
    },
    "weather-lightning": {
      symbolId: "nvidia-react-gui-icons-v1-line-weather-lightning",
      viewBox: "0 0 16 16",
      paths: [
        "M9.093 9h2.279l-3.223 5.5H6.863V12H5.201l.182-.637 1.137-4L6.622 7h3.04Zm-2.569 2h1.339v2.01L9.627 10H7.77l.568-2h-.96Z",
        "M8.5 2a3.5 3.5 0 0 1 3.399 2.678A3 3 0 0 1 13 7a3 3 0 0 1-.601 1.801l-.798-.601c.251-.334.399-.749.399-1.2 0-.671-.33-1.264-.839-1.628l-.165-.118-.036-.2A2.5 2.5 0 0 0 6 5.5V6h-.5a1.5 1.5 0 0 0-.375 2.953l-.25.968a2.501 2.501 0 0 1 .155-4.876A3.5 3.5 0 0 1 8.5 2",
      ],
    },
    "weather-partial-cloud-day": {
      symbolId: "nvidia-react-gui-icons-v1-line-weather-partial-cloud-day",
      viewBox: "0 0 16 16",
      paths: [
        "M13 9c0-.671-.33-1.264-.839-1.628l-.165-.118-.036-.2A2.5 2.5 0 0 0 7 7.5V8h-.5a1.5 1.5 0 0 0 0 3H11a2 2 0 0 0 2-2m1 0a3 3 0 0 1-3 3H6.5a2.5 2.5 0 0 1-2.415-3.146 2.999 2.999 0 1 1 3.539-4.309 3.497 3.497 0 0 1 5.275 2.133A3 3 0 0 1 14 9M3 6c0 .947.659 1.739 1.543 1.945a2.5 2.5 0 0 1 1.487-.901c.09-.691.381-1.318.812-1.821A2 2 0 0 0 3 6",
      ],
    },
    "weather-partial-cloud-night": {
      symbolId: "nvidia-react-gui-icons-v1-line-weather-partial-cloud-night",
      viewBox: "0 0 16 16",
      paths: [
        "M4.545 3.036A2.99 2.99 0 0 1 7.62 4.549a3.497 3.497 0 0 1 5.279 2.129A3 3 0 0 1 11 12H6.5a2.5 2.5 0 0 1-2.416-3.147 3 3 0 0 1-.586-.255 3 3 0 0 1-1.194-1.283l-.099-.226a3.1 3.1 0 0 1-.2-.915l.815.256a1.498 1.498 0 0 0 1.462-2.531l-.629-.579c.28-.14.582-.24.892-.284M9.5 5A2.5 2.5 0 0 0 7 7.5V8h-.5a1.5 1.5 0 0 0 0 3H11a2 2 0 0 0 1.161-3.628l-.165-.118-.036-.2A2.5 2.5 0 0 0 9.5 5m-3.908-.909a2.49 2.49 0 0 1-1.949 3.376c.248.23.574.403.901.479a2.5 2.5 0 0 1 1.486-.901c.09-.688.381-1.313.81-1.815a2 2 0 0 0-1.248-1.139",
      ],
    },
    "weather-rain": {
      symbolId: "nvidia-react-gui-icons-v1-line-weather-rain",
      viewBox: "0 0 16 16",
      paths: [
        "m5.983 11.13-.803 2.999-.967-.259.804-3zm6 0-.803 2.999-.967-.259.804-3zm-3.268 0-.536 1.999-.966-.259.536-2zM8.5 2a3.5 3.5 0 0 1 3.399 2.678A3 3 0 0 1 10 10H5.5a2.5 2.5 0 0 1-.47-4.955A3.5 3.5 0 0 1 8.5 2m0 1A2.5 2.5 0 0 0 6 5.5V6h-.5a1.5 1.5 0 0 0 0 3H10a2 2 0 0 0 1.161-3.628l-.165-.118-.036-.2A2.5 2.5 0 0 0 8.5 3",
      ],
    },
    "weather-snow": {
      symbolId: "nvidia-react-gui-icons-v1-line-weather-snow",
      viewBox: "0 0 16 16",
      paths: [
        "M9.854 7.854 9 8.707v.927l.803-.463.312-1.166.966.259-.236.882.882.237-.258.966-1.166-.313-.804.463.804.465 1.166-.313.258.966-.882.237.236.882-.966.259-.312-1.166L9 11.365v.928l.854.853-.708.708-.646-.647-.646.647-.708-.708.854-.853v-.928l-.803.464-.312 1.166-.966-.259.236-.882-.883-.237.259-.966 1.166.313.803-.465-.803-.463-1.166.313-.259-.966.883-.237-.236-.882.966-.259.312 1.166.803.463v-.927l-.854-.853.708-.708.646.647.646-.647z",
        "M8.5 2a3.5 3.5 0 0 1 3.399 2.678 2.99 2.99 0 0 1 .827 3.576l-.909-.418a1.996 1.996 0 0 0-.656-2.464l-.165-.118-.036-.2A2.5 2.5 0 0 0 6 5.5V6h-.5a1.5 1.5 0 0 0-.946 2.664l-.631.775A2.5 2.5 0 0 1 5.03 5.045 3.5 3.5 0 0 1 8.5 2",
      ],
    },
    "weather-wind": {
      symbolId: "nvidia-react-gui-icons-v1-line-weather-wind",
      viewBox: "0 0 16 16",
      paths: [
        "M13 10.5a1.5 1.5 0 0 1-3 0H9A2.5 2.5 0 1 0 11.5 8H3v1h8.5a1.5 1.5 0 0 1 1.5 1.5M9 5a1 1 0 1 1 1 1H4v1h6a2 2 0 1 0-2-2z",
        "M7 10v1H2v-1z",
      ],
    },
    webcam: {
      symbolId: "nvidia-react-gui-icons-v1-line-webcam",
      viewBox: "0 0 16 16",
      paths: [
        "M1 6.5A3.5 3.5 0 0 1 4.5 3h7a3.5 3.5 0 1 1 0 7H9.902l.268 1H11v1H5v-1h.831l.268-1H4.5A3.5 3.5 0 0 1 1 6.5M4.5 4a2.5 2.5 0 1 0 0 5h7a2.5 2.5 0 1 0 0-5ZM3 6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 3 6.5M7.134 10l-.268 1h2.268l-.268-1ZM12 7h-1V6h1ZM4.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    "webcam-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-webcam-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L11 11.707V12H5v-1h.831l.268-1H4.5a3.5 3.5 0 0 1-1.743-6.536l-1.111-1.11Zm1.147 2.562A2.5 2.5 0 0 0 4.5 9h3.793L5.987 6.695a1.5 1.5 0 1 1-1.682-1.683ZM7.134 10l-.268 1h2.268l-.268-1ZM4.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m5.624 4.832.046.168h.123ZM15 6.5a3.5 3.5 0 0 1-2.361 3.31l-.83-.829A2.5 2.5 0 0 0 11.5 4H6.828l-1-1H11.5A3.5 3.5 0 0 1 15 6.5",
        "M12 7h-1V6h1z",
      ],
    },
    "webcam-settings": {
      symbolId: "nvidia-react-gui-icons-v1-line-webcam-settings",
      viewBox: "0 0 16 16",
      paths: [
        "M1 5.5A3.5 3.5 0 0 1 4.5 2h7a3.5 3.5 0 0 1 3.194 4.934l-.912-.41A2.5 2.5 0 0 0 11.5 3h-7a2.5 2.5 0 1 0 0 5h2.902l-.803 3H5v-1h.831l.268-1H4.5A3.5 3.5 0 0 1 1 5.5m10 3.55V8h1v1.05a2.5 2.5 0 0 1 1.371.792l.91-.525.5.866-.909.525a2.5 2.5 0 0 1 0 1.584l.909.525-.5.866-.91-.525A2.5 2.5 0 0 1 12 13.95V15h-1v-1.05a2.5 2.5 0 0 1-1.371-.792l-.911.525-.5-.866.91-.525a2.5 2.5 0 0 1 0-1.584l-.91-.525.5-.866.911.525A2.5 2.5 0 0 1 11 9.05m.5.95a1.5 1.5 0 1 0-.002 3 1.5 1.5 0 0 0 .002-3M3 5.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 3 5.5m9 .5h-1V5h1ZM4.5 5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    weight: {
      symbolId: "nvidia-react-gui-icons-v1-line-weight",
      viewBox: "0 0 16 16",
      paths: [
        "M9.732 5h2.276l2.144 8H1.848l2.144-8h2.276a2 2 0 1 1 3.464 0M4.759 6l-1.607 6h9.696l-1.607-6ZM8 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 7V7h1v3Zm3 0V7h1v3Z",
      ],
    },
    "weight-bar": {
      symbolId: "nvidia-react-gui-icons-v1-line-weight-bar",
      viewBox: "0 0 16 16",
      paths: [
        "M4 4h1v3.5h6V4h1v8h-1V8.5H5V12H4ZM2 7.5V5h1v6H2V8.5H1v-1ZM13 5h1v2.5h1v1h-1V11h-1Z",
      ],
    },
    wheel: {
      symbolId: "nvidia-react-gui-icons-v1-line-wheel",
      viewBox: "0 0 16 16",
      paths: [
        "M2.203 6.447A6.002 6.002 0 0 1 14 8 6 6 0 1 1 2.203 6.447m1.12-.218 3.44.922a1.5 1.5 0 0 1 2.474 0l3.44-.922a5.003 5.003 0 0 0-9.354 0M7.5 12.975v-3.56a1.5 1.5 0 0 1-.996-1.298l-3.44-.922a5 5 0 0 0 4.436 5.78m5.436-5.78-3.441.922A1.5 1.5 0 0 1 8.5 9.415v3.56a5 5 0 0 0 4.436-5.78M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    wheelchair: {
      symbolId: "nvidia-react-gui-icons-v1-line-wheelchair",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 3a2 2 0 1 1 3.999-.001A2 2 0 0 1 5.5 3m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6.188 7.254A3.502 3.502 0 0 0 7.5 14c1.105 0 2.09-.511 2.733-1.313l.78.626a4.5 4.5 0 1 1-5.201-6.986z",
        "M8 7V6H7v5h3.711l1.299 2.25.866-.5L11.289 10H8V8h2V7z",
      ],
    },
    whispermode: {
      symbolId: "nvidia-react-gui-icons-v1-line-whispermode",
      viewBox: "0 0 16 16",
      paths: [
        "M6.188 4H8c1.001 0 1.812.811 1.812 1.812 0 .153-.032.308-.08.456.148-.048.303-.081.456-.081H12V8a1.81 1.81 0 0 1-1.812 1.812c-.153 0-.308-.032-.456-.08.048.148.08.303.08.456V12H8a1.81 1.81 0 0 1-1.812-1.812c0-.153.032-.308.08-.456-.148.048-.303.08-.456.08H4V8c0-1.001.811-1.813 1.812-1.813.153 0 .308.033.456.081a1.5 1.5 0 0 1-.08-.456Zm.698 3.75a5 5 0 0 0-.655-.413c-.224-.116-.362-.15-.419-.15A.813.813 0 0 0 5 8v.812h.812c.057 0 .195-.034.419-.149.209-.107.437-.256.655-.413q.18-.13.332-.25a10 10 0 0 0-.332-.25m1.364-.864c.157-.218.306-.446.413-.655.115-.224.149-.362.149-.419A.81.81 0 0 0 8 5h-.812v.812c0 .057.034.195.149.419.107.209.256.437.413.655.085.119.171.231.25.332q.12-.152.25-.332m.864 1.364c.218.157.446.306.655.413.224.115.362.149.419.149A.81.81 0 0 0 11 8v-.812l-.812-.001c-.057 0-.195.034-.419.15a5 5 0 0 0-.655.413 10 10 0 0 0-.332.25q.152.12.332.25m-.864.864A10 10 0 0 0 8 8.782a10 10 0 0 0-.25.332 5 5 0 0 0-.413.655c-.115.224-.149.362-.149.419 0 .448.363.812.812.812l.812-.001v-.811c0-.057-.034-.195-.149-.419a5 5 0 0 0-.413-.655",
        "m8.001 1.072 6 3.464v6.928l-6 3.464-6-3.464V4.536Zm0 12.702 5-2.887V5.113l-5-2.887-5 2.887v5.774Z",
      ],
    },
    wifi: {
      symbolId: "nvidia-react-gui-icons-v1-line-wifi",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4a8.97 8.97 0 0 0-6.364 2.636l-.707-.707A9.97 9.97 0 0 1 8 3a9.97 9.97 0 0 1 7.071 2.929l-.707.707A8.97 8.97 0 0 0 8 4m-2 7a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 11m2-4a5.98 5.98 0 0 0-4.243 1.757L3.05 8.05A6.98 6.98 0 0 1 8 6a6.98 6.98 0 0 1 4.95 2.05l-.707.707A5.98 5.98 0 0 0 8 7m0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "wifi-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-wifi-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-3.671-3.672q.024.155.025.318a2 2 0 1 1-1.682-1.975L6.486 7.193a6 6 0 0 0-2.729 1.564L3.05 8.05a7 7 0 0 1 2.635-1.658L4.154 4.861a9 9 0 0 0-2.518 1.775l-.707-.707a10 10 0 0 1 2.479-1.814L1.646 2.354ZM8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.243-1.243a6 6 0 0 0-1.969-1.311l-1.39-1.391A7 7 0 0 1 12.95 8.05zM8 4q-.561 0-1.105.067l-.871-.872A10 10 0 0 1 8 3a9.97 9.97 0 0 1 7.071 2.929l-.707.707A8.97 8.97 0 0 0 8 4",
      ],
    },
    window: {
      symbolId: "nvidia-react-gui-icons-v1-line-window",
      viewBox: "0 0 16 16",
      paths: ["M2 3h12v10H2Zm11 3H3v6h10ZM3 4v1h10V4Z"],
    },
    "window-code": {
      symbolId: "nvidia-react-gui-icons-v1-line-window-code",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v10H2Zm11 3H3v6h10ZM3 4v1h10V4Zm7.793 5L9.646 7.854l.708-.708L12.207 9l-1.853 1.854-.708-.708ZM5.646 7.146l.708.708L5.207 9l1.147 1.146-.708.708L3.793 9Zm1.213 3.696 1.333-4 .949.316-1.333 4Z",
      ],
    },
    "window-grid": {
      symbolId: "nvidia-react-gui-icons-v1-line-window-grid",
      viewBox: "0 0 16 16",
      paths: [
        "M1 1h6v6H1Zm8 0h6v6H9ZM1 9h6v6H1Zm8 0h6v6H9ZM6 4H2v2h4Zm8 0h-4v2h4Zm-8 8H2v2h4Zm8 0h-4v2h4ZM2 2v1h4V2Zm8 0v1h4V2Zm-8 8v1h4v-1Zm8 0v1h4v-1Z",
      ],
    },
    "window-stack": {
      symbolId: "nvidia-react-gui-icons-v1-line-window-stack",
      viewBox: "0 0 16 16",
      paths: ["M2 3h10v8H2Zm9 3H3v4h8Zm2 6V5h1v8H3v-1ZM3 4v1h8V4Z"],
    },
    "window-terminal": {
      symbolId: "nvidia-react-gui-icons-v1-line-window-terminal",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v10H2Zm11 3H3v6h10ZM3 4v1h10V4Zm2.293 5L4.146 7.854l.708-.708L6.707 9l-1.853 1.854-.708-.708ZM10 11H7v-1h3Z",
      ],
    },
    "wine-glass": {
      symbolId: "nvidia-react-gui-icons-v1-line-wine-glass",
      viewBox: "0 0 16 16",
      paths: [
        "m10.46 2 .564 6.831L8.5 10.289V14H11v1H5v-1h2.5v-3.712L4.976 8.831 5.54 2ZM6.024 8.282 8 9.423l1.976-1.141L9.54 3H6.46Z",
      ],
    },
    "wireless-modem": {
      symbolId: "nvidia-react-gui-icons-v1-line-wireless-modem",
      viewBox: "0 0 16 16",
      paths: [
        "M7 5a1 1 0 1 1 1.5.866V9H14v5H2V9h5.5V5.866A1 1 0 0 1 7 5m-4 5v3h10v-3Zm1.535-7A4 4 0 0 0 4 5c0 .73.195 1.412.535 2l-.866.501A5 5 0 0 1 3 5c0-.91.244-1.765.669-2.501ZM12 5c0-.729-.195-1.412-.535-2l.866-.501C12.756 3.235 13 4.09 13 5a5 5 0 0 1-.67 2.501L11.465 7A4 4 0 0 0 12 5m-2 0a2 2 0 0 0-.267-1l.865-.5c.256.441.402.954.402 1.5s-.146 1.059-.402 1.501L9.733 6A2 2 0 0 0 10 5M6.267 4A2 2 0 0 0 6 5c0 .365.097.706.267 1l-.865.501A3 3 0 0 1 5 5c0-.546.146-1.059.402-1.501ZM8 11v1H7v-1Zm2 1H9v-1h1Zm2 0h-1v-1h1Z",
      ],
    },
    "wireless-modem-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-wireless-modem-off",
      viewBox: "0 0 16 16",
      paths: [
        "M8 11v1H7v-1zm2 1H9v-1h1z",
        "m2.354 1.646 13 13-.708.708L13.293 14H2V9h5.5v-.793l-1.85-1.85-.248.144a3 3 0 0 1-.288-.68L4.01 4.717Q4 4.857 4 5c0 .73.195 1.412.535 2l-.865.501A5 5 0 0 1 3 5q.002-.598.135-1.158L1.646 2.354ZM9.293 10H3v3h9.293ZM14 11.172l-1-1V10h-.172l-1-1H14zM9 5c0 .32-.15.605-.384.788L7.212 4.384A1 1 0 0 1 9 5m3 0c0-.729-.195-1.412-.535-2l.866-.501C12.757 3.235 13 4.09 13 5s-.244 1.765-.669 2.501L11.465 7A4 4 0 0 0 12 5m-2 0a2 2 0 0 0-.267-1l.865-.501c.256.442.402.955.402 1.501s-.146 1.059-.402 1.501L9.733 6A2 2 0 0 0 10 5",
      ],
    },
    woman: {
      symbolId: "nvidia-react-gui-icons-v1-line-woman",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 1M7 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m2.339 3H6.662l-2.401 6H6v3h1v-4H5.739l1.6-4h1.323l1.599 4H9v4h1v-3h1.739z",
      ],
    },
    workspace: {
      symbolId: "nvidia-react-gui-icons-v1-line-workspace",
      viewBox: "0 0 16 16",
      paths: ["M2 3h12v10H2Zm1 1v3h10V4Zm10 4H7v4h6Zm-7 4V8H3v4Z"],
    },
    "workspace-group": {
      symbolId: "nvidia-react-gui-icons-v1-line-workspace-group",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h10v8H2Zm11 9V5h1v8H3v-1ZM3 4v2h8V4Zm8 3H6v3h5Zm-6 3V7H3v3Z",
      ],
    },
    workstation: {
      symbolId: "nvidia-react-gui-icons-v1-line-workstation",
      viewBox: "0 0 16 16",
      paths: ["M4 2h8v12H4Zm1 1v10h6V3Zm5 4H6V6h4Zm0 2H6V8h4Zm0-4H9V4h1Z"],
    },
    "workstation-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-workstation-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L12 12.707V14H4V4.707L1.646 2.354ZM5 5.707V13h6v-1.293L8.293 9H6V8h1.293Zm7 3.465-1-1V3H5.828l-1-1H12z",
        "M10 7h-.172l-1-1H10zm0-2H9V4h1z",
      ],
    },
    "workstation-system": {
      symbolId: "nvidia-react-gui-icons-v1-line-workstation-system",
      viewBox: "0 0 16 16",
      paths: [
        "M1 5h10v1h2v1h-2v1h2v1h-2v3H6.902l.268 1H9v1H3v-1h1.831l.268-1H1Zm9 1H2v5h8ZM7 2h8v12h-5v-1h4V3H8v1H7Zm5 2h1v1h-1Zm-6 8.5-.134.5h.268Z",
      ],
    },
    "workstation-system-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-workstation-system-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 13 13-.708.708L13.293 14H10v-1h2.293L11 11.707V12H6.902l.268 1H9v1H3v-1h1.831l.268-1H1V5h3.293L1.646 2.354ZM5.293 6H2v5h8v-.293ZM6 12.5l-.134.5h.268Zm9-.328-1-1V3H8v1H7V2h8z",
        "M13 9h-1.172L10 7.172V6H8.828l-1-1H11v1h2v1h-2v1h2zm-1-5h1v1h-1z",
      ],
    },
    world: {
      symbolId: "nvidia-react-gui-icons-v1-line-world",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m1.957 5H6.043a11.6 11.6 0 0 0 0 2h3.914a11.6 11.6 0 0 0 0-2M8 3c-.374 0-.875.356-1.313 1.318A7.4 7.4 0 0 0 6.179 6h3.642a7.4 7.4 0 0 0-.508-1.682C8.875 3.356 8.374 3 8 3m1.821 7H6.179c.12.642.295 1.212.508 1.682C7.125 12.644 7.626 13 8 13s.875-.356 1.313-1.318c.213-.47.388-1.04.508-1.682m1.139-1h1.94a5 5 0 0 0 0-2h-1.94a12.6 12.6 0 0 1 0 2M3.1 7a5 5 0 0 0 0 2h1.94Q5 8.51 5 8t.04-1Zm6.862 5.6a5.02 5.02 0 0 0 2.622-2.6h-1.747a8.6 8.6 0 0 1-.614 2.096 5 5 0 0 1-.261.504m.875-6.6h1.747a5.02 5.02 0 0 0-2.622-2.6q.143.242.261.504c.271.597.481 1.31.614 2.096m-4.799 6.6a5 5 0 0 1-.261-.504A8.6 8.6 0 0 1 5.163 10H3.416a5.02 5.02 0 0 0 2.622 2.6M3.416 6h1.747a8.6 8.6 0 0 1 .614-2.096q.118-.262.261-.504A5.02 5.02 0 0 0 3.416 6",
      ],
    },
    "world-off": {
      symbolId: "nvidia-react-gui-icons-v1-line-world-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-1.771-1.772a6 6 0 0 1-8.456-8.456L1.646 2.354ZM9.293 10H6.179c.12.642.295 1.212.508 1.682C7.125 12.644 7.626 13 8 13s.875-.356 1.313-1.318c.163-.36.305-.78.416-1.246ZM3.1 7a5 5 0 0 0 0 2h1.94a12.6 12.6 0 0 1 0-2Zm2.938 5.6a5 5 0 0 1-.261-.504A8.6 8.6 0 0 1 5.163 10H3.416a5.02 5.02 0 0 0 2.622 2.6M6.293 7h-.25a11.6 11.6 0 0 0 0 2h2.25ZM4.129 4.836A5 5 0 0 0 3.416 6h1.747l.019-.111Zm6.413 6.414q-.14.454-.319.846a5 5 0 0 1-.261.504c.436-.186.84-.432 1.202-.728ZM14 8c0 .926-.21 1.804-.585 2.587L11.828 9H12.9a5 5 0 0 0 0-2h-1.94q.04.49.04 1l-.001.17-1.031-1.03L9.957 7h-.129l-1-1h.993a7.4 7.4 0 0 0-.508-1.682C8.875 3.356 8.374 3 8 3c-.331 0-.762.279-1.16 1.011L5.413 2.585A6 6 0 0 1 14 8m-3.163-2h1.747a5.02 5.02 0 0 0-2.622-2.6q.143.242.261.504c.271.597.481 1.31.614 2.096",
      ],
    },
    wrench: {
      symbolId: "nvidia-react-gui-icons-v1-line-wrench",
      viewBox: "0 0 16 16",
      paths: [
        "M11 1q.29 0 .57.04l.43.062v1.105l-1.471 1.47.379 1.414 1.414.379L13.793 4h1.105l.062.43q.04.28.04.57a4 4 0 0 1-5.131 3.837L3.5 15.207.793 12.5l6.369-6.37A4 4 0 0 1 11 1M8 5c0 .383.071.748.201 1.084l.118.304L2.207 12.5 3.5 13.793l6.112-6.112.304.118a3 3 0 0 0 4.075-2.584l-1.37 1.371-.279-.074-1.972-.529-.278-.075-.075-.278-.529-1.973-.074-.278 1.37-1.371A3 3 0 0 0 8 5",
      ],
    },
    yoke: {
      symbolId: "nvidia-react-gui-icons-v1-line-yoke",
      viewBox: "0 0 16 16",
      paths: [
        "M6 9h4V8H6z",
        "M4 6h8v3h1.348l-.635-2.37.966-.259.972 3.629H12v.446l-4 1.072-4-1.072V10H1.348l.973-3.629.965.259L2.651 9H4Zm1 1v2.679l3 .803 3-.804V7Z",
      ],
    },
  },
  fill: {
    "2b-left-click": {
      symbolId: "nvidia-react-gui-icons-v1-fill-2b-left-click",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3.25a.25.25 0 1 1 .5 0 .25.25 0 0 1-.5 0",
        "M7.5 1v4.5H3V1ZM5.25 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M13 5.5H8.5V1H13zM3 10V6.5h10V10a5 5 0 0 1-10 0",
      ],
    },
    "3-square-plus": {
      symbolId: "nvidia-react-gui-icons-v1-fill-3-square-plus",
      viewBox: "0 0 16 16",
      paths: [
        "M7 2H2v5h5zm2 9v1h2v2h1v-2h2v-1h-2V9h-1v2zM7 9H2v5h5zm7-7H9v5h5z",
      ],
    },
    "3d-axis": {
      symbolId: "nvidia-react-gui-icons-v1-fill-3d-axis",
      viewBox: "0 0 16 16",
      paths: [
        "m8 2.293 2.354 2.353-.707.708L8.5 4.207v4.504l3.901 2.252-.42-1.566.966-.258.862 3.215-3.215.861-.259-.966 1.566-.419L8 9.577 4.099 11.83l1.566.419-.259.966-3.215-.861.862-3.215.966.258-.42 1.567L7.5 8.711V4.207L6.354 5.354l-.707-.708Z",
      ],
    },
    "4-square": {
      symbolId: "nvidia-react-gui-icons-v1-fill-4-square",
      viewBox: "0 0 16 16",
      paths: ["M7 2H2v5h5zm0 7H2v5h5zm7 0H9v5h5zm0-7H9v5h5z"],
    },
    accessibility: {
      symbolId: "nvidia-react-gui-icons-v1-fill-accessibility",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 5.482-3.37-.903-.26.967 3.13.838v.982l-1.954 3.385.866.499L8 9.5l1.588 2.75.866-.499L8.5 8.364v-.98l3.13-.838-.259-.967ZM8 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8 3",
      ],
    },
    "account-add": {
      symbolId: "nvidia-react-gui-icons-v1-fill-account-add",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4.456 8h4.215A4.5 4.5 0 0 0 7 11.5c0 .925.279 1.785.758 2.5h-4.91zM11 14.5V12H8.5v-1H11V8.5h1V11h2.5v1H12v2.5z",
      ],
    },
    "account-check": {
      symbolId: "nvidia-react-gui-icons-v1-fill-account-check",
      viewBox: "0 0 16 16",
      paths: [
        "M5 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3.671 4H4.456l-1.608 6h4.91A4.5 4.5 0 0 1 7 11.5c0-1.414.652-2.675 1.671-3.5m1.829 6.207 4.854-4.853-.708-.708-4.146 4.147-1.646-1.647-.708.708z",
      ],
    },
    "account-more": {
      symbolId: "nvidia-react-gui-icons-v1-fill-account-more",
      viewBox: "0 0 16 16",
      paths: [
        "M5 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-.544 4h3.215A4.5 4.5 0 0 0 6 11.5c0 .925.279 1.785.758 2.5h-3.91zM8.5 10.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1.5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "account-remove": {
      symbolId: "nvidia-react-gui-icons-v1-fill-account-remove",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4.456 8h4.215A4.5 4.5 0 0 0 7 11.5c0 .925.279 1.785.758 2.5h-4.91zM8.5 12h6v-1h-6z",
      ],
    },
    add: {
      symbolId: "nvidia-react-gui-icons-v1-fill-add",
      viewBox: "0 0 16 16",
      paths: ["M7.5 7.5V2h1v5.5H14v1H8.5V14h-1V8.5H2v-1Z"],
    },
    "add-circle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-add-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.5 4V8.5H12v-1H8.5V4h-1v3.5H4v1h3.5V12Z",
      ],
    },
    "address-book": {
      symbolId: "nvidia-react-gui-icons-v1-fill-address-book",
      viewBox: "0 0 16 16",
      paths: [
        "M9.2 4.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m1.647 3.8H7.552l-.804 3h4.903z",
        "M14 2v12H3v-3H2v-1h1V8.5H2v-1h1V6H2V5h1V2ZM4 11v2h9V3H4v2h1v1H4v1.5h1v1H4V10h1v1Z",
      ],
    },
    airplane: {
      symbolId: "nvidia-react-gui-icons-v1-fill-airplane",
      viewBox: "0 0 16 16",
      paths: [
        "M7 2v4H4.384l-.268-1H1.179l.804 3-.804 3h2.937l.268-1H7v4h2.384l1.072-4H13a2 2 0 1 0 0-4h-2.544L9.384 2z",
      ],
    },
    airport: {
      symbolId: "nvidia-react-gui-icons-v1-fill-airport",
      viewBox: "0 0 16 16",
      paths: [
        "M11.707 1 13 2.293v2.414l-1 1V8h2v1h-1v4h1v1H2v-1h1V9H2V8h7V5.707l-1-1V2.293L9.293 1ZM11 6h-1v7h1Zm.293-1L12 4.293V4H9v.293L9.707 5ZM9 2.707V3h3v-.293L11.293 2H9.707ZM6 11v-1H5v1Zm2 0v-1H7v1Z",
      ],
    },
    alarm: {
      symbolId: "nvidia-react-gui-icons-v1-fill-alarm",
      viewBox: "0 0 16 16",
      paths: [
        "m5.354 2.354-2 2-.708-.708 2-2zm6-.708 2 2-.708.708-2-2zM3 8a5 5 0 1 1 8.504 3.567l.483 1.804-.966.258-.372-1.388A4.97 4.97 0 0 1 8 13a5 5 0 0 1-2.646-.757l-.371 1.386-.966-.258.482-1.801A5 5 0 0 1 3 8m4.706-3.028-.966.259.852 3.177 3.177.852.259-.966-2.62-.702Z",
      ],
    },
    anchor: {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor",
      viewBox: "0 0 16 16",
      paths: [
        "M6 3a2 2 0 1 1 2.5 1.937V7H10v1H8.5v5.42c.177-.114.361-.217.544-.315.239-.127.491-.25.739-.371l.093-.046c.282-.138.561-.276.835-.426.976-.536 1.833-1.199 2.248-2.383l-1.13-.409.342-.94 1.987.721-.102.433c-.44 1.856-1.669 2.798-2.863 3.454-.297.163-.595.31-.877.449l-.093.045c-.251.123-.487.238-.709.356-.507.269-.883.523-1.124.824L8 15.3l-.39-.488c-.241-.301-.617-.555-1.124-.824-.222-.118-.458-.233-.709-.356l-.093-.045c-.282-.139-.58-.286-.877-.449-1.194-.656-2.423-1.598-2.863-3.454l-.102-.433L3.83 8.53l.34.94-1.128.409c.414 1.184 1.271 1.847 2.247 2.383.274.15.553.288.835.426l.093.046c.248.121.5.244.739.371q.277.146.544.315V8H6V7h1.5V4.937A2 2 0 0 1 6 3",
      ],
    },
    "anchor-center": {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor-center",
      viewBox: "0 0 16 16",
      paths: ["M3 3h10v10H3Zm3 3v4h4V6Zm1 1h2v2H7Z"],
    },
    "anchor-e": {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor-e",
      viewBox: "0 0 16 16",
      paths: ["M3 3h10v3h-3v4h3v3H3Zm4 4V6H6v1Zm0 3V9H6v1Z", "M13 7h-2v2h2z"],
    },
    "anchor-n": {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor-n",
      viewBox: "0 0 16 16",
      paths: ["M3 13V3h3v3h4V3h3v10Zm4-4H6v1h1Zm3 0H9v1h1Z", "M7 3v2h2V3z"],
    },
    "anchor-ne": {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor-ne",
      viewBox: "0 0 16 16",
      paths: ["M9 7h4v6H3V3h6Zm4-2h-2V3h2ZM7 7V6H6v1Zm-1 3h1V9H6Zm3 0h1V9H9Z"],
    },
    "anchor-nw": {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor-nw",
      viewBox: "0 0 16 16",
      paths: ["M7 7V3h6v10H3V7ZM5 3v2H3V3Zm5 4V6H9v1ZM7 9H6v1h1Zm3 1V9H9v1Z"],
    },
    "anchor-s": {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor-s",
      viewBox: "0 0 16 16",
      paths: ["M13 3v10h-3v-3H6v3H3V3ZM6 7h1V6H6Zm3 0h1V6H9Z", "M9 13v-2H7v2z"],
    },
    "anchor-se": {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor-se",
      viewBox: "0 0 16 16",
      paths: ["M9 9v4H3V3h10v6Zm2 4v-2h2v2ZM6 6v1h1V6Zm3 1h1V6H9ZM6 9v1h1V9Z"],
    },
    "anchor-sw": {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor-sw",
      viewBox: "0 0 16 16",
      paths: ["M7 9H3V3h10v10H7Zm-4 2h2v2H3Zm4-5H6v1h1Zm3 0H9v1h1ZM9 9v1h1V9Z"],
    },
    "anchor-w": {
      symbolId: "nvidia-react-gui-icons-v1-fill-anchor-w",
      viewBox: "0 0 16 16",
      paths: ["M13 13H3v-3h3V6H3V3h10ZM9 6v1h1V6Zm0 3v1h1V9Z", "M3 9h2V7H3z"],
    },
    approximately: {
      symbolId: "nvidia-react-gui-icons-v1-fill-approximately",
      viewBox: "0 0 16 16",
      paths: [
        "m6.501 8.482 2.999.804 2.871-.769.259.966-3.13.838-2.999-.803-2.871.769-.259-.966Zm0-3 2.999.804 2.871-.769.259.966-3.13.839-2.999-.804-2.871.769-.259-.966Z",
      ],
    },
    apps: {
      symbolId: "nvidia-react-gui-icons-v1-fill-apps",
      viewBox: "0 0 16 16",
      paths: [
        "M5 2H2v3h3zm4.5 0h-3v3h3zM14 2h-3v3h3zM5 6.5H2v3h3zm4.5 0h-3v3h3zm4.5 0h-3v3h3zM5 11H2v3h3zm4.5 0h-3v3h3zm4.5 0h-3v3h3z",
      ],
    },
    archive: {
      symbolId: "nvidia-react-gui-icons-v1-fill-archive",
      viewBox: "0 0 16 16",
      paths: ["M14 3H2v2h12zm-1 3v7H3V6ZM6 7v1h4V7Z"],
    },
    "arrange-columns": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrange-columns",
      viewBox: "0 0 16 16",
      paths: ["M4 14H2V6h2zm7 0H9V6h2zm3 0h-2V6h2zm-6-4H5V2h3z"],
    },
    "arrange-rows": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrange-rows",
      viewBox: "0 0 16 16",
      paths: ["M14 14H6v-2h8zm0-3H6V9h8zm-4-3H2V5h8zm4-4H6V2h8z"],
    },
    arrow: {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow",
      viewBox: "0 0 16 16",
      paths: [
        "M15 7.5 1.75 1.75 7.5 15l2.129-3.725 3.048 3.048 1.646-1.646-3.048-3.048z",
      ],
    },
    "arrow-down": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-down",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 3v7.793l3.146-3.147.708.708L8 12.707 3.646 8.354l.708-.708L7.5 10.793V3Z",
      ],
    },
    "arrow-down-left": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-down-left",
      viewBox: "0 0 16 16",
      paths: ["M4 12V6h1v4.293l5.646-5.647.708.708L5.707 11H10v1Z"],
    },
    "arrow-down-max": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-down-max",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 2v7.793l3.146-3.147.708.708L8 11.707 3.646 7.354l.708-.708L7.5 9.793V2ZM13 12v1H3v-1Z",
      ],
    },
    "arrow-down-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-down-right",
      viewBox: "0 0 16 16",
      paths: ["M12 12H6v-1h4.293L4.646 5.354l.708-.708L11 10.293V6h1Z"],
    },
    "arrow-left": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-left",
      viewBox: "0 0 16 16",
      paths: [
        "m7.647 3.646.707.708L5.207 7.5H13v1H5.207l3.147 3.146-.707.708L3.293 8Z",
      ],
    },
    "arrow-left-max": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-left-max",
      viewBox: "0 0 16 16",
      paths: [
        "m8.646 3.646.708.708L6.207 7.5H14v1H6.207l3.147 3.146-.708.708L4.293 8ZM3 13V3h1v10Z",
      ],
    },
    "arrow-left-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-left-right",
      viewBox: "0 0 16 16",
      paths: [
        "m3.207 8.5 2.147 2.146-.707.708L1.293 8l3.354-3.354.707.708L3.207 7.5h9.586l-2.147-2.146.708-.708L14.707 8l-3.353 3.354-.708-.708L12.793 8.5Z",
      ],
    },
    "arrow-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-right",
      viewBox: "0 0 16 16",
      paths: [
        "M10.793 7.5 7.646 4.354l.708-.708L12.707 8l-4.353 4.354-.708-.708L10.793 8.5H3v-1Z",
      ],
    },
    "arrow-right-max": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-right-max",
      viewBox: "0 0 16 16",
      paths: [
        "M9.793 7.5 6.646 4.354l.708-.708L11.707 8l-4.353 4.354-.708-.708L9.793 8.5H2v-1ZM13 13h-1V3h1Z",
      ],
    },
    "arrow-up": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-up",
      viewBox: "0 0 16 16",
      paths: [
        "m8 3.293 4.354 4.353-.708.708L8.5 5.207V13h-1V5.207L4.354 8.354l-.708-.708Z",
      ],
    },
    "arrow-up-down": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-up-down",
      viewBox: "0 0 16 16",
      paths: [
        "m8 1.293 3.354 3.353-.708.708L8.5 3.207v9.586l2.146-2.147.708.708L8 14.707l-3.354-3.353.708-.708L7.5 12.793V3.207L5.354 5.354l-.708-.708Z",
      ],
    },
    "arrow-up-left": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-up-left",
      viewBox: "0 0 16 16",
      paths: ["M4 4h6v1H5.707l5.647 5.646-.708.708L5 5.707V10H4Z"],
    },
    "arrow-up-max": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-up-max",
      viewBox: "0 0 16 16",
      paths: [
        "m8 4.293 4.354 4.353-.708.708L8.5 6.207V14h-1V6.207L4.354 9.354l-.708-.708ZM13 4H3V3h10Z",
      ],
    },
    "arrow-up-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-arrow-up-right",
      viewBox: "0 0 16 16",
      paths: ["M12 4v6h-1V5.707l-5.646 5.647-.708-.708L10.293 5H6V4Z"],
    },
    "at-symbol": {
      symbolId: "nvidia-react-gui-icons-v1-fill-at-symbol",
      viewBox: "0 0 16 16",
      paths: [
        "M4.293 2h7.414L14 4.293v4.414l-1.984 1.985-2.367-.634-.942.942H5.793L5 10.207V8.793l.741-.741L9 7.179v-.972L8.793 6H6.207l-.353.354-.708-.708L5.793 5h3.414l.793.793v3.323l1.717.46L13 8.293V4.707L11.293 3H4.707L3 4.707v6.586L4.707 13h6.586l.853-.854.708.708L11.707 14H4.293L2 11.707V4.293ZM9 9.293V8.214l-2.741.734L6 9.207v.586l.207.207h2.086Z",
      ],
    },
    atom: {
      symbolId: "nvidia-react-gui-icons-v1-fill-atom",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1c.469 0 .878.22 1.21.538.329.316.609.75.842 1.252l-.908.42c-.201-.434-.416-.75-.625-.95C8.312 2.062 8.138 2 8 2c-.156 0-.361.081-.604.348-.242.267-.484.681-.697 1.235C6.274 4.689 6 6.25 6 8s.274 3.311.699 4.417c.213.554.455.968.697 1.235.243.267.448.348.604.348.138 0 .312-.062.519-.26.209-.2.424-.516.625-.95l.908.42c-.233.502-.513.936-.842 1.252C8.878 14.78 8.469 15 8 15c-.534 0-.987-.284-1.343-.675-.355-.391-.652-.928-.891-1.55C5.286 11.529 5 9.84 5 8s.286-3.529.766-4.775c.239-.622.536-1.16.891-1.55C7.013 1.284 7.466 1 8 1M3.254 9.442c-.265.383-.423.719-.487.993-.064.27-.03.447.038.565.069.12.212.241.492.321.283.081.672.108 1.156.062l.095.995c-.559.053-1.082.032-1.526-.095-.446-.127-.846-.372-1.084-.783-.23-.4-.248-.856-.144-1.295.103-.436.33-.887.638-1.332z",
        "M13.546 8.841c.316.45.55.907.657 1.349.108.444.092.905-.141 1.31-.373.645-1.132.877-1.91.902-.801.027-1.776-.155-2.811-.504l.319-.947c.969.326 1.818.474 2.459.452.665-.022.968-.214 1.077-.403.069-.119.102-.3.036-.575-.068-.279-.232-.622-.504-1.01zm-1.393-5.244c.778.026 1.537.258 1.909.903.268.463.249.998.088 1.501-.16.503-.478 1.028-.897 1.546-.84 1.039-2.159 2.131-3.753 3.051-.607.35-1.213.653-1.804.905l-.392-.92A16 16 0 0 0 9 9.731c1.515-.874 2.732-1.891 3.477-2.812.373-.462.61-.879.72-1.223.11-.343.077-.561-.001-.696-.109-.189-.411-.381-1.076-.403-.641-.022-1.492.125-2.461.452l-.318-.947c1.035-.349 2.01-.532 2.812-.505",
        "M8 6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 6.5M3.022 3.717c.444-.127.967-.149 1.526-.095l-.096.995c-.484-.046-.873-.019-1.156.062-.28.08-.423.2-.492.321-.107.185-.124.535.174 1.105.288.552.818 1.199 1.558 1.863l-.668.745c-.792-.711-1.415-1.451-1.777-2.146-.352-.675-.519-1.433-.153-2.067.237-.411.638-.656 1.084-.783m4.674.78c.591.252 1.198.555 1.804.905.654.378 1.26.784 1.805 1.202l-.608.792A16 16 0 0 0 9 6.268a16 16 0 0 0-1.695-.85z",
      ],
    },
    "auto-record": {
      symbolId: "nvidia-react-gui-icons-v1-fill-auto-record",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8a4 4 0 0 1 8 0v1.707l2.354-2.353-.708-.708-.69.691a5 5 0 1 0-6.43 5.442 1.5 1.5 0 1 0 .159-1A4 4 0 0 1 4 8",
        "M8 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6",
      ],
    },
    "auto-record-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-auto-record-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-4.63-4.631a2 2 0 0 1-2.739-2.739L4.84 5.547a4.002 4.002 0 0 0 1.844 6.232 1.5 1.5 0 1 1-.158 1 5 5 0 0 1-2.397-7.943L1.646 2.354zM8 4c-.358 0-.706.047-1.036.136l-.791-.792a5 5 0 0 1 6.783 3.993l.69-.691.708.708L12 9.707V8a4 4 0 0 0-4-4",
      ],
    },
    "award-ribbon": {
      symbolId: "nvidia-react-gui-icons-v1-fill-award-ribbon",
      viewBox: "0 0 16 16",
      paths: [
        "m8 .258 1.189 1.305 1.682-.536.378 1.725 1.724.377-.535 1.682L13.743 6l-1.305 1.189.535 1.682-.973.213v5.654l-4-1.599-4 1.599V9.084l-.973-.213.536-1.682L2.258 6l1.305-1.189-.536-1.682 1.725-.377.377-1.725 1.682.536ZM6 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-1 4.384v2.877l3-1.2 3 1.2v-2.877l-.129.589-1.682-.536L8 11.742l-1.189-1.305-1.682.536ZM8 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
      ],
    },
    "award-trophy": {
      symbolId: "nvidia-react-gui-icons-v1-fill-award-trophy",
      viewBox: "0 0 16 16",
      paths: [
        "M3.934 2h8.132l-.25 2h2.336l-1.34 5h-1.621l-.25 2h-1.79l.536 2H11v1H5v-1h1.312l.536-2H5.059l-.25-2H3.188l-1.34-5h2.336ZM9.5 5V4h-3v1Zm1.816 3h.729l.804-3h-1.158ZM4.309 5H3.151l.804 3h.729Zm3.574 6-.535 2h1.304l-.536-2Z",
      ],
    },
    baby: {
      symbolId: "nvidia-react-gui-icons-v1-fill-baby",
      viewBox: "0 0 16 16",
      paths: [
        "M7 4c0-.508.34-.999.956-1.391a4 4 0 0 1 1.19-.5A6.002 6.002 0 0 1 8 14 6 6 0 0 1 6.983 2.086C6.424 2.56 6 3.205 6 4a2 2 0 0 0 2.517 1.932l-.258-.966A1 1 0 0 1 7 4m1 7a4 4 0 0 0 2.828-1.172l-.707-.707A3 3 0 0 1 8 10a3 3 0 0 1-2.122-.879l-.707.707A4 4 0 0 0 8 11m1-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
      ],
    },
    backspace: {
      symbolId: "nvidia-react-gui-icons-v1-fill-backspace",
      viewBox: "0 0 16 16",
      paths: [
        "M3.809 3H14v10H3.809L.923 8Zm2.837 3.354L8.293 8 6.646 9.646l.708.708L9 8.707l1.646 1.647.708-.708L9.707 8l1.647-1.646-.708-.708L9 7.293 7.354 5.646Z",
      ],
    },
    bandaid: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bandaid",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5.793 15.207 4.5 4.5 15.207.793 11.5ZM10.293 8 9.5 7.207 8.707 8l.793.793ZM5.707 8l.793.793L7.293 8 6.5 7.207Zm1.5-1.5L8 7.293l.793-.793L8 5.707Zm1.586 3L8 8.707l-.793.793.793.793Z",
      ],
    },
    bank: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bank",
      viewBox: "0 0 16 16",
      paths: [
        "M14 4.66V6h-2v5h1v2h1v1H2v-1h1v-2h1V6H2V4.66l6-2.373ZM9 6H7v5h2ZM6 6H5v5h1Zm5 0h-1v5h1Z",
      ],
    },
    barcode: {
      symbolId: "nvidia-react-gui-icons-v1-fill-barcode",
      viewBox: "0 0 16 16",
      paths: ["M2 13V3h1v10zM4 3h2v10H4zm5 0h2v10H9zM7 13V3h1v10zm6 0V3h1v10z"],
    },
    "battery-0": {
      symbolId: "nvidia-react-gui-icons-v1-fill-battery-0",
      viewBox: "0 0 16 16",
      paths: ["M13 5v2h1v2h-1v2H2V5Z"],
    },
    "battery-0-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-battery-0-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L10.293 11H2V5h2.293L1.646 2.354zM13 9v1.172L7.828 5H13v2h1v2z",
      ],
    },
    "battery-100": {
      symbolId: "nvidia-react-gui-icons-v1-fill-battery-100",
      viewBox: "0 0 16 16",
      paths: [
        "M13 5v2h1v2h-1v2H2V5ZM4 7v2h1V7Zm3 0H6v2h1Zm1 0v2h1V7Zm3 0h-1v2h1Z",
      ],
    },
    "battery-25": {
      symbolId: "nvidia-react-gui-icons-v1-fill-battery-25",
      viewBox: "0 0 16 16",
      paths: ["M13 5v2h1v2h-1v2H2V5ZM4 7v2h1V7Z"],
    },
    "battery-50": {
      symbolId: "nvidia-react-gui-icons-v1-fill-battery-50",
      viewBox: "0 0 16 16",
      paths: ["M13 5v2h1v2h-1v2H2V5ZM4 7v2h1V7Zm3 0H6v2h1Z"],
    },
    "battery-75": {
      symbolId: "nvidia-react-gui-icons-v1-fill-battery-75",
      viewBox: "0 0 16 16",
      paths: ["M13 5v2h1v2h-1v2H2V5ZM4 7v2h1V7Zm3 0H6v2h1Zm1 0v2h1V7Z"],
    },
    "battery-boost": {
      symbolId: "nvidia-react-gui-icons-v1-fill-battery-boost",
      viewBox: "0 0 16 16",
      paths: [
        "M10 6v2.133L8.001 6.979 6 8.134V6z",
        "M10 9.288v1.345L8.001 9.479 6 10.634V9.289l2.001-1.156z",
        "m2.001 4.536 6-3.464 6 3.464v6.928l-6 3.464-6-3.464ZM10 12.619l1-.577V5H9V4H7v1H5v7.041l1 .577v-.829l2.001-1.156L10 11.788Z",
      ],
    },
    "battery-charging": {
      symbolId: "nvidia-react-gui-icons-v1-fill-battery-charging",
      viewBox: "0 0 16 16",
      paths: [
        "M9 7h1.85L7 13.93V9H5.15L9 2.07Z",
        "M6.229 5H2v6h4v-1H3.451zm3.542 6H13V9h1V7h-1V5h-3v1h2.549z",
      ],
    },
    beaker: {
      symbolId: "nvidia-react-gui-icons-v1-fill-beaker",
      viewBox: "0 0 16 16",
      paths: [
        "M10.619 1v1H10v3.928l3 5.196V14H3v-2.876l3-5.196V2h-.5V1ZM9.464 7 9 6.196V2H7v4.196L6.536 7ZM8 10v1h1v-1Zm-2 1v1h1v-1Z",
      ],
    },
    bed: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bed",
      viewBox: "0 0 16 16",
      paths: [
        "M1 3h1v2.165h2.315L6 5.616V7h6.7l1.3.348V6h1v7h-1v-2H2v2H1Zm1 4h3v-.616l-.817-.219H2Z",
      ],
    },
    bell: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bell",
      viewBox: "0 0 16 16",
      paths: [
        "m9.539 1 .386 1.384A5 5 0 0 1 13 7v3.382L14.309 13H10a2 2 0 1 1-4 0H1.691L3 10.382V7c0-2.08 1.27-3.862 3.075-4.616L6.461 1Z",
      ],
    },
    "bell-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-bell-off",
      viewBox: "0 0 16 16",
      paths: [
        "M13 10.171V7c0-2.08-1.27-3.862-3.075-4.616L9.539 1H6.461l-.386 1.384a5 5 0 0 0-.577.286zM12.293 13l1.353 1.354.708-.708-12-12-.708.708 2.069 2.068A5 5 0 0 0 3 7v3.382L1.691 13H6a2 2 0 1 0 4 0z",
      ],
    },
    bicycle: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bicycle",
      viewBox: "0 0 16 16",
      paths: [
        "M7 5v1H5.955l-.338 1.263A2.5 2.5 0 0 1 6.95 9h.357l-.281-.842.949-.316L8.361 9h.689a2.5 2.5 0 0 1 2.601-1.995L11.92 6H11V5h3v1h-1.044l-.339 1.263A2.5 2.5 0 1 1 9.05 10h-.356l.281.842-.949.316L7.64 10h-.69a2.5 2.5 0 1 1-2.299-2.996L5.188 5z",
      ],
    },
    blackboard: {
      symbolId: "nvidia-react-gui-icons-v1-fill-blackboard",
      viewBox: "0 0 16 16",
      paths: ["M2 2h12v8h-2V8H8v2H2Zm6 2H4v1h4ZM4 6v1h3V6Zm11 7v-2H1v2z"],
    },
    bluetooth: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bluetooth",
      viewBox: "0 0 16 16",
      paths: [
        "M7 .793 11.207 5l-3 3 3 3L7 15.207v-6l-2.646 2.647-.708-.708L6.793 8 3.646 4.854l.708-.707L7 6.793Zm1 8.414v3.586L9.793 11Zm0-2.414L9.793 5 8 3.207Z",
      ],
    },
    "bluetooth-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-bluetooth-off",
      viewBox: "0 0 16 16",
      paths: [
        "M11.207 5 9.518 6.689l-.707-.707L9.793 5 8 3.207v1.965l-1-1V.793zm-.707 6.707-3.5 3.5v-6l-2.646 2.647-.707-.708L6.793 8 1.146 2.354l.708-.707 12 11.999-.708.708ZM8 9.207v3.586L9.793 11Z",
      ],
    },
    bold: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bold",
      viewBox: "0 0 16 16",
      paths: [
        "M4 3h3.5a2.5 2.5 0 0 1 1.759 4.276A3 3 0 0 1 8 13H4Zm1 5v4h3a2 2 0 1 0 0-4Zm0-1h2.5a1.5 1.5 0 0 0 0-3H5Z",
      ],
    },
    bone: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bone",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 2A1.5 1.5 0 0 1 12 3.5a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1-.71 2.821c-.171-.092-.243-.114-.29-.114a.2.2 0 0 0-.146.061l-4.682 4.681a.2.2 0 0 0-.061.147c0 .047.023.119.116.291a1.5 1.5 0 1 1-2.823.709.5.5 0 0 0-.5-.5 1.5 1.5 0 1 1 .71-2.822c.171.093.244.115.29.115a.2.2 0 0 0 .147-.061l4.681-4.682a.2.2 0 0 0 .061-.146c0-.047-.022-.119-.114-.29A1.5 1.5 0 0 1 10.5 2",
      ],
    },
    book: {
      symbolId: "nvidia-react-gui-icons-v1-fill-book",
      viewBox: "0 0 16 16",
      paths: [
        "M3.5 2H14v12H3.5A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2M13 12H3.5a.5.5 0 0 0 0 1H13ZM4 5h7.5V4H4Zm0 2h7.5V6H4Zm0 2h4V8H4Z",
      ],
    },
    bookmark: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bookmark",
      viewBox: "0 0 16 16",
      paths: ["M13 1H3v14.35l5-2.778 5 2.778z"],
    },
    "bookmark-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-bookmark-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708L13 13.707v1.643l-5-2.778-5 2.778V3.707L.646 1.354ZM13 1v9.172L3.828 1Z",
      ],
    },
    bottle: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bottle",
      viewBox: "0 0 16 16",
      paths: [
        "M9.5.5h-3v5.293l-2.03 2.03L5.566 15.5h4.868l1.096-7.677-2.03-2.03z",
      ],
    },
    "bounding-box": {
      symbolId: "nvidia-react-gui-icons-v1-fill-bounding-box",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h3v1h6V2h3v3h-1v6h1v3h-3v-1H5v1H2v-3h1V5H2Zm2 3v6h1v1h6v-1h1V5h-1V4H5v1Z",
      ],
    },
    braille: {
      symbolId: "nvidia-react-gui-icons-v1-fill-braille",
      viewBox: "0 0 16 16",
      paths: [
        "M3 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    briefcase: {
      symbolId: "nvidia-react-gui-icons-v1-fill-briefcase",
      viewBox: "0 0 16 16",
      paths: [
        "m10.348 2 .536 2H14v9H2V4h3.116l.536-2Zm-.5 2L9.58 3H6.42l-.268 1Z",
      ],
    },
    broadcast: {
      symbolId: "nvidia-react-gui-icons-v1-fill-broadcast",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 13.062 3.502l-.865-.501A6 6 0 1 0 2 8c0 1.094.292 2.119.803 3.001l-.865.501A6.97 6.97 0 0 1 1 8m6 0a1 1 0 1 1 1.706.708l1.517 5.663-.966.258-.302-1.129H7.043l-.303 1.129-.966-.258 1.518-5.665A1 1 0 0 1 7 8M4 8a4 4 0 1 1 7.464 2.002l-.866-.501a3 3 0 1 0-5.196 0l-.866.501A4 4 0 0 1 4 8m3.999 1.932L7.311 12.5h1.376Z",
      ],
    },
    brush: {
      symbolId: "nvidia-react-gui-icons-v1-fill-brush",
      viewBox: "0 0 16 16",
      paths: [
        "M7 11.207 4.792 9H4.75a2 2 0 0 0-1.461.613c-.33.328-.577.752-.786 1.112l-.016.027c-.39.671-.675 1.117-1.145 1.274l-.547.182.258.516c.335.671.956 1.026 1.59 1.193.631.167 1.327.163 1.927.078C5.896 13.808 7 12.794 7 11.25zm.146-3.854L5.853 8.646l1.5 1.5 1.293-1.293zm.707-.707 1.5 1.5L13.75 3.75l-1.5-1.5z",
      ],
    },
    bucket: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bucket",
      viewBox: "0 0 16 16",
      paths: [
        "M6.847 4.14 5.792 8.078l.966.259 1.599-5.966.966.258-.843 3.144 3.02 3.02v.689l-1.741.466L6.5 13.207 1.793 8.5 6.5 3.793zm4.737 6.708c.26-.39.577-.733.916-1.055.339.322.656.665.916 1.055.267.4.584 1.002.584 1.652a1.5 1.5 0 0 1-3 0c0-.65.317-1.252.584-1.652",
      ],
    },
    bug: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bug",
      viewBox: "0 0 16 16",
      paths: [
        "m5.985 3.778-.576-2.149.966-.258.496 1.849C7.22 3.078 7.601 3 8 3s.78.078 1.129.22l.496-1.849.966.258-.576 2.149C10.62 4.326 11 5.118 11 6h1.616l.548-2.044.966.259L13.383 7H11v1.5h3v1h-3V11h2.384l.746 2.785-.966.259L12.616 12h-1.787a3 3 0 0 1-5.658 0H3.383l-.547 2.044-.966-.259L2.616 11H5V9.5H2v-1h3V7H2.616L1.87 4.215l.966-.259L3.383 6H5c0-.882.381-1.674.985-2.222M7.5 6.5v5h1v-5Z",
      ],
    },
    "bug-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-bug-off",
      viewBox: "0 0 16 16",
      paths: [
        "M14 9.5h-1.671l-1-1H14zM11 7v1.172L5.758 2.929l-.349-1.3.966-.258.496 1.849C7.22 3.078 7.601 3 8 3s.781.078 1.129.22l.496-1.849.966.258-.576 2.149C10.62 4.326 11 5.118 11 6h1.616l.548-2.044.966.259L13.383 7zm.293 5h-.464a3 3 0 0 1-5.658 0H3.383l-.547 2.044-.966-.259L2.616 11H5V9.5H2v-1h3V7H2.616L1.87 4.215l.966-.259L3.384 6H5q0-.141.013-.28L1.646 2.354l.708-.708 12 12-.708.708ZM8.5 9.207l-1-1V11.5h1Z",
      ],
    },
    bus: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bus",
      viewBox: "0 0 16 16",
      paths: [
        "M14 5h1v2h-1v7h-1v1h-2v-1H5v1H3v-1H2V7H1V5h1V2h12ZM3 9h4.5V5H3Zm5.5 0H13V5H8.5ZM3 4h10V3H3Zm1 8h2v-1H4Zm6 0h2v-1h-2Z",
      ],
    },
    bush: {
      symbolId: "nvidia-react-gui-icons-v1-fill-bush",
      viewBox: "0 0 16 16",
      paths: [
        "M12.5 3c-.348 0-.62.2-.807.399a3.1 3.1 0 0 0-.507.783c-.292.608-.532 1.421-.682 2.296a11.3 11.3 0 0 0-.144 2.757c.048.611.159 1.216.356 1.765H8.732a2 2 0 0 0-.837-2.789 3 3 0 0 0-5.26-1.057A2.5 2.5 0 0 0 3.5 12h10.283l.146-.243c.429-.716.64-1.613.711-2.522.073-.916.007-1.88-.144-2.757-.15-.875-.39-1.688-.682-2.296a3.1 3.1 0 0 0-.508-.783C13.12 3.2 12.847 3 12.5 3",
      ],
    },
    business: {
      symbolId: "nvidia-react-gui-icons-v1-fill-business",
      viewBox: "0 0 16 16",
      paths: [
        "M1 2h7v3h6v9H5.5v-2h-2v2H1Zm3 2H3v1h1Zm2 0H5v1h1ZM4 6H3v1h1Zm1 0v1h1V6Zm4 1v1h1V7Zm2 0v1h1V7ZM4 8H3v1h1Zm1 0v1h1V8Zm4 1v1h1V9Zm3 0h-1v1h1Zm-3 2v1h1v-1Zm3 0h-1v1h1Z",
      ],
    },
    calculator: {
      symbolId: "nvidia-react-gui-icons-v1-fill-calculator",
      viewBox: "0 0 16 16",
      paths: [
        "M3.5 2h9v12h-9Zm8 1h-7v2h7Zm-5 4h-1v1h1Zm1 0v1h1V7Zm3 0h-1v1h1Zm-5 2v1h1V9Zm3 0h-1v1h1Zm1 0v1h1V9Zm-3 2h-1v1h1Zm1 0v1h1v-1Zm3 0h-1v1h1Z",
      ],
    },
    calendar: {
      symbolId: "nvidia-react-gui-icons-v1-fill-calendar",
      viewBox: "0 0 16 16",
      paths: ["M5 3V2h1v1h4V2h1v1h3v11H2V3Zm0 1H3v2h10V4h-2v1h-1V4H6v1H5Z"],
    },
    "calendar-event": {
      symbolId: "nvidia-react-gui-icons-v1-fill-calendar-event",
      viewBox: "0 0 16 16",
      paths: [
        "M5 2h1v1h4V2h1v1h3v11H2V3h3ZM3 4v2h10V4h-2v1h-1V4H6v1H5V4Zm5 3.87-.641 1.299-1.433.208 1.037 1.012-.245 1.427L8 11.142l1.282.674-.245-1.427 1.038-1.012-1.434-.208Z",
      ],
    },
    camera: {
      symbolId: "nvidia-react-gui-icons-v1-fill-camera",
      viewBox: "0 0 16 16",
      paths: [
        "M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8",
        "M6.191 2h3.618l1 2H14v9H2V4h3.191ZM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
      ],
    },
    "camera-360": {
      symbolId: "nvidia-react-gui-icons-v1-fill-camera-360",
      viewBox: "0 0 16 16",
      paths: [
        "M6.191 2h3.618l1 2H14v5h-3.171a3 3 0 1 0-5.658 0H3v3h1v1H2V4h3.191z",
        "M10 8c0 .364-.097.706-.268 1H6.268A2 2 0 1 1 10 8m-6 2v1h2v1H5v1h1v1H4v1h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm5 0h2v1.01h-1V11H9v1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m0 4h1v-1H9Zm4-4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m0 1v3h1v-3Z",
      ],
    },
    "camera-add": {
      symbolId: "nvidia-react-gui-icons-v1-fill-camera-add",
      viewBox: "0 0 16 16",
      paths: [
        "M6.191 2h3.618l1 2H14v3.758a4.48 4.48 0 0 0-3.155-.711 3 3 0 1 0-3.798 3.798A4.6 4.6 0 0 0 7.256 13H2V4h3.191z",
        "M8 6c.859 0 1.592.542 1.875 1.302a4.52 4.52 0 0 0-2.573 2.573A2.001 2.001 0 0 1 8 6m3 8.5V12H8.5v-1H11V8.5h1V11h2.5v1H12v2.5z",
      ],
    },
    "camera-linked": {
      symbolId: "nvidia-react-gui-icons-v1-fill-camera-linked",
      viewBox: "0 0 16 16",
      paths: [
        "M14 4a3 3 0 0 0-3-3V0a4 4 0 0 1 4 4z",
        "M12 4a1 1 0 0 0-1-1V2a2 2 0 0 1 2 2zM6 9a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 9",
        "M6.191 3h3.618l1 2H14v9H2V5h3.191ZM8 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
      ],
    },
    "camera-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-camera-off",
      viewBox: "0 0 16 16",
      paths: [
        "M12.293 13H2V4h1.293L1.646 2.354l.708-.708 12 12-.708.708Zm-2.555-2.555-.722-.722a2 2 0 0 1-2.739-2.739l-.722-.722a3 3 0 0 0 4.183 4.183M14 4v7.172l-3.005-3.005Q11 8.084 11 8a3 3 0 0 0-3.167-2.995L5.737 2.908 6.191 2h3.618l1 2z",
      ],
    },
    "camera-super": {
      symbolId: "nvidia-react-gui-icons-v1-fill-camera-super",
      viewBox: "0 0 16 16",
      paths: [
        "M6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8",
        "M6.191 2h3.618l1 2H14v5h-3v4H2V4h3.191ZM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
        "M13 10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1v1h-1v-.01h-1V15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1v-1h1v.01h1V10z",
      ],
    },
    cancel: {
      symbolId: "nvidia-react-gui-icons-v1-fill-cancel",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m3.126-4.582 8.456 8.456a6 6 0 0 0-8.456-8.456m-.708.708a6 6 0 0 0 8.456 8.456Z",
      ],
    },
    car: {
      symbolId: "nvidia-react-gui-icons-v1-fill-car",
      viewBox: "0 0 16 16",
      paths: [
        "m12.89 3 .625 2.5h.845l.834 2.5H14v1.562L13.39 12H13v1h-2v-1H5v1H3v-1h-.391L2 9.562V8H.806l.833-2.5h.845L3.109 3Zm-.031 4-.75-3H8.5v.5H9v1H7v-1h.5V4H3.89l-.75 3H8.5c0-.495.301-.883.662-1.123.364-.243.839-.377 1.338-.377s.974.134 1.338.377c.361.24.662.628.662 1.123ZM12 10V9h-2v1Zm-6 0V9H4v1Zm5.5-3c0-.057-.035-.17-.217-.291A1.44 1.44 0 0 0 10.5 6.5c-.329 0-.605.09-.783.209-.182.121-.217.234-.217.291Z",
      ],
    },
    cards: {
      symbolId: "nvidia-react-gui-icons-v1-fill-cards",
      viewBox: "0 0 16 16",
      paths: [
        "M15.287 3.723 12.44 14.348l-7.727-2.071L7.56 1.652ZM8.709 7.654l.598 2.231.351.094 1.633-1.633-.598-2.231-.35-.094Z",
        "m3.488 12.984 1.938.519-2.434.214-.872-9.962 3.933-.345z",
      ],
    },
    "carousel-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-fill-carousel-horizontal",
      viewBox: "0 0 16 16",
      paths: ["M4 2h8v1H4zM2 4v8h12V4zm10 9H4v1h8z"],
    },
    "carousel-vertical": {
      symbolId: "nvidia-react-gui-icons-v1-fill-carousel-vertical",
      viewBox: "0 0 16 16",
      paths: ["M12 2H4v12h8zm1 2v8h1V4zM2 4h1v8H2z"],
    },
    castle: {
      symbolId: "nvidia-react-gui-icons-v1-fill-castle",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 1H10v2H8.5v3H9V5h1v1h1V5h1v2h-1v1h1V7h1v1h1V7h1v2h-1v5H9v-3H7v3H2V9H1V7h1v1h1V7h1v1h1V7H4V5h1v1h1V5h1v1h.5z",
      ],
    },
    chart: {
      symbolId: "nvidia-react-gui-icons-v1-fill-chart",
      viewBox: "0 0 16 16",
      paths: [
        "M14.854 4.854 9.5 10.207l-3-3-4.646 4.647-.708-.708L6.5 5.793l3 3 4.646-4.647Z",
      ],
    },
    "chart-bar": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chart-bar",
      viewBox: "0 0 16 16",
      paths: ["M2 10h3v4H2zm4-4h3v8H6zm4-4h3v12h-3z"],
    },
    "chart-bubble": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chart-bubble",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 10 3.5m3.5 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 9.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4 9.5m5.5-2a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
      ],
    },
    "chart-flow": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chart-flow",
      viewBox: "0 0 16 16",
      paths: [
        "M7 2H2v5h2v2.05A2.5 2.5 0 1 0 6.95 12h2.343L12 14.707l3.207-3.207L12 8.293 9.293 11H6.95A2.5 2.5 0 0 0 5 9.05V7h2z",
      ],
    },
    "chart-hierarchy": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chart-hierarchy",
      viewBox: "0 0 16 16",
      paths: [
        "M10 1H6v4h1.5v2.5h-5V11H1v4h4v-4H3.5V8.5h4V11H6v4h4v-4H8.5V8.5h4V11H11v4h4v-4h-1.5V7.5h-5V5H10z",
      ],
    },
    "chart-performance": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chart-performance",
      viewBox: "0 0 16 16",
      paths: [
        "M5 2h3v3H7V3.707L3.354 7.354l-.708-.708L6.293 3H5Zm-3 8h3v4H2zm4-2h3v6H6zm4-2h3v8h-3z",
      ],
    },
    "chart-pie": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chart-pie",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2q-.239 0-.473.018l-.6.047 1.481 5.527 5.527 1.481.047-.6Q14 8.239 14 8a6 6 0 0 0-6-6",
        "M7.592 8.408 5.961 2.323l-.543.259A6.003 6.003 0 0 0 8 14a6 6 0 0 0 5.418-3.419l.259-.542z",
      ],
    },
    "chart-scatterplot": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chart-scatterplot",
      viewBox: "0 0 16 16",
      paths: [
        "M12.5 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-2 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "chart-tree": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chart-tree",
      viewBox: "0 0 16 16",
      paths: ["M14 2H2v3h1.5v8H8v1h3v-3H8v1H4.5V9H8v1h3V7H8v1H4.5V5H14z"],
    },
    "chat-message": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chat-message",
      viewBox: "0 0 16 16",
      paths: ["M2 2h12v10H7.71l-2.467 2.467L4.582 12H2Zm9 4V5H5v1Zm0 3V8H5v1Z"],
    },
    "chat-multi": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chat-multi",
      viewBox: "0 0 16 16",
      paths: [
        "M15 2H4v8h6.29l2.467 2.467.661-2.467H15z",
        "M3 6H1v7h1.582l.661 2.467L5.71 13H9v-2H8v1H5.296l-1.535 1.536L3.349 12H2V7h1z",
      ],
    },
    "chat-new": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chat-new",
      viewBox: "0 0 16 16",
      paths: [
        "M14.002 2h-12v10h2.582l.661 2.467 1.887-1.887a4.5 4.5 0 0 1 6.87-4.822z",
        "M11.002 14.5V12h-2.5v-1h2.5V8.5h1V11h2.5v1h-2.5v2.5z",
      ],
    },
    "chat-single": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chat-single",
      viewBox: "0 0 16 16",
      paths: ["M14 2H2v10h2.582l.661 2.467L7.71 12H14z"],
    },
    chatbot: {
      symbolId: "nvidia-react-gui-icons-v1-fill-chatbot",
      viewBox: "0 0 16 16",
      paths: [
        "M6.61 7h2.78l.5 2H13v2.5h1V11h1v2h-1v-.5h-1V15H3v-2.5H2v.5H1v-2h1v.5h1V9h3.11ZM5 12.5h6v-1H5Z",
        "M15 1H7v5h3.61l.619 2.48L13.707 6H15z",
      ],
    },
    check: {
      symbolId: "nvidia-react-gui-icons-v1-fill-check",
      viewBox: "0 0 16 16",
      paths: [
        "M14.354 4.354 6 12.707 1.646 8.354l.708-.708L6 11.293l7.646-7.647Z",
      ],
    },
    "check-circle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-check-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m6 2.707 4.854-4.853-.708-.708L7 9.293 4.854 7.146l-.708.708Z",
      ],
    },
    "check-multi-circle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-check-multi-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.5 1.793L6.354 7.646l-.708.708L8.5 11.207l4.854-4.853-.708-.708ZM3.354 7.646l-.708.708L5.5 11.207l.707-.707Zm4.292 0 .708.708 2.5-2.5-.708-.708Z",
      ],
    },
    "checkmark-badge": {
      symbolId: "nvidia-react-gui-icons-v1-fill-checkmark-badge",
      viewBox: "0 0 16 16",
      paths: [
        "m8 .258 1.603 1.759 2.268-.722.509 2.325 2.325.509-.722 2.268L15.742 8l-1.759 1.603.722 2.268-2.325.509-.509 2.325-2.268-.722L8 15.742l-1.603-1.759-2.268.722-.509-2.325-2.325-.509.722-2.268L.258 8l1.759-1.603-.722-2.268L3.62 3.62l.509-2.325 2.268.722ZM7 10.707l4.854-4.853-.708-.708L7 9.293 4.854 7.146l-.708.708Z",
      ],
    },
    "chevron-double-down": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-double-down",
      viewBox: "0 0 16 16",
      paths: [
        "m8 7.293 3.646-3.647.708.708L8 8.707 3.646 4.354l.708-.708Zm0 4 3.646-3.647.708.708L8 12.707 3.646 8.354l.708-.708Z",
      ],
    },
    "chevron-double-left": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-double-left",
      viewBox: "0 0 16 16",
      paths: [
        "m7.647 3.646.707.708L4.707 8l3.647 3.646-.707.708L3.293 8Zm3.999 0 .708.708L8.707 8l3.647 3.646-.708.708L7.293 8Z",
      ],
    },
    "chevron-double-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-double-right",
      viewBox: "0 0 16 16",
      paths: [
        "M4.354 3.646 8.707 8l-4.353 4.354-.708-.708L7.293 8 3.646 4.354Zm4 0L12.707 8l-4.353 4.354-.708-.708L11.293 8 7.646 4.354Z",
      ],
    },
    "chevron-double-up": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-double-up",
      viewBox: "0 0 16 16",
      paths: [
        "m8 3.293 4.354 4.353-.708.708L8 4.707 4.354 8.354l-.708-.708Zm0 4 4.354 4.353-.708.708L8 8.707l-3.646 3.647-.708-.708Z",
      ],
    },
    "chevron-down": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-down",
      viewBox: "0 0 16 16",
      paths: ["m8 9.293 3.646-3.647.708.708L8 10.707 3.646 6.354l.708-.708Z"],
    },
    "chevron-down-left-up-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-down-left-up-right",
      viewBox: "0 0 16 16",
      paths: [
        "M2.965 8.293h1v3.742h3.742v1H2.965Zm9.071-4.329H8.293v-1h4.743v4.743h-1Z",
      ],
    },
    "chevron-left": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-left",
      viewBox: "0 0 16 16",
      paths: ["m6.707 8 3.647 3.646-.707.708L5.293 8l4.354-4.354.707.708Z"],
    },
    "chevron-left-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-left-right",
      viewBox: "0 0 16 16",
      paths: [
        "m5.647 4.646.707.708L3.707 8l2.647 2.646-.707.708L2.293 8ZM12.293 8 9.647 5.354l.707-.708L13.707 8l-3.353 3.354-.707-.708Z",
      ],
    },
    "chevron-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-right",
      viewBox: "0 0 16 16",
      paths: [
        "M9.293 8 5.646 4.354l.708-.708L10.707 8l-4.353 4.354-.708-.708Z",
      ],
    },
    "chevron-up": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-up",
      viewBox: "0 0 16 16",
      paths: ["m8 6.707-3.646 3.647-.708-.708L8 5.293l4.354 4.353-.708.708Z"],
    },
    "chevron-up-down": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-up-down",
      viewBox: "0 0 16 16",
      paths: [
        "m8 12.293 2.646-2.647.708.708L8 13.707l-3.354-3.353.708-.708Zm0-10 3.354 3.353-.708.708L8 3.707 5.354 6.354l-.708-.708Z",
      ],
    },
    "chevron-up-left-down-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-chevron-up-left-down-right",
      viewBox: "0 0 16 16",
      paths: [
        "M2.964 2.964h4.743v1H3.964v3.743h-1Zm9.072 9.072V8.293h1v4.743H8.293v-1Z",
      ],
    },
    "circle-1-q": {
      symbolId: "nvidia-react-gui-icons-v1-fill-circle-1-q",
      viewBox: "0 0 16 16",
      paths: ["M13 8a5 5 0 0 0-5-5V2a6 6 0 0 1 6 6Z"],
    },
    "circle-2-q": {
      symbolId: "nvidia-react-gui-icons-v1-fill-circle-2-q",
      viewBox: "0 0 16 16",
      paths: ["M13 8a5 5 0 0 0-5-5V2a6 6 0 1 1 0 12v-1a5 5 0 0 0 5-5"],
    },
    "circle-3-q": {
      symbolId: "nvidia-react-gui-icons-v1-fill-circle-3-q",
      viewBox: "0 0 16 16",
      paths: ["M13 8a5 5 0 0 0-5-5V2a6 6 0 1 1-6 6h1a5 5 0 0 0 10 0"],
    },
    "circle-tick": {
      symbolId: "nvidia-react-gui-icons-v1-fill-circle-tick",
      viewBox: "0 0 16 16",
      paths: [
        "m6.232 10.475-2.121 2.121-.707-.707 2.121-2.121Zm6.364-6.364-2.121 2.121-.707-.707 2.121-2.121ZM5.525 6.232 3.404 4.111l.707-.707 2.121 2.121ZM7.5 5V2h1v3ZM5 8.5H2v-1h3Zm9 0h-3v-1h3ZM7.5 14v-3h1v3Zm4.389-1.404-2.078-2.077.708-.707 2.077 2.077Z",
      ],
    },
    city: {
      symbolId: "nvidia-react-gui-icons-v1-fill-city",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 3V1h-1v2h-.616l-.268 1H5v3H3v6H2v1h12v-1h-1V8.116l-2-.536V5H9V4h-.616l-.268-1z",
      ],
    },
    "clap-board": {
      symbolId: "nvidia-react-gui-icons-v1-fill-clap-board",
      viewBox: "0 0 16 16",
      paths: [
        "M14 4v11H2V4ZM5.788 5l-.536 2h1.964l.536-2Zm3 0-.536 2h1.964l.536-2ZM4.216 7l.536-2H3v2ZM13 5h-1.212l-.536 2H13Z",
      ],
    },
    clipboard: {
      symbolId: "nvidia-react-gui-icons-v1-fill-clipboard",
      viewBox: "0 0 16 16",
      paths: [
        "M5.348 2h5.304l-.268 1H13v11H3V3h2.616ZM11 8V7H5v1Zm0 3v-1H5v1ZM9.348 3H6.652l.268 1h2.16Z",
      ],
    },
    clock: {
      symbolId: "nvidia-react-gui-icons-v1-fill-clock",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m6.5-4v4.384l4.235 1.135.259-.966L8.5 7.616V4Z",
      ],
    },
    close: {
      symbolId: "nvidia-react-gui-icons-v1-fill-close",
      viewBox: "0 0 16 16",
      paths: [
        "M7.293 8 2.646 3.354l.708-.708L8 7.293l4.646-4.647.708.708L8.707 8l4.647 4.646-.708.708L8 8.707l-4.646 4.647-.708-.708Z",
      ],
    },
    "close-circle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-close-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m3.646-2.646L7.293 8l-2.647 2.646.708.708L8 8.707l2.646 2.647.708-.708L8.707 8l2.647-2.646-.708-.708L8 7.293 5.354 4.646Z",
      ],
    },
    "closed-caption": {
      symbolId: "nvidia-react-gui-icons-v1-fill-closed-caption",
      viewBox: "0 0 16 16",
      paths: [
        "M15 3v11H1V3ZM9 7v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-.5h-1v.5h-1V7h1v.5h1V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1M5 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-.5H6v.5H5V7h1v.5h1V7a1 1 0 0 0-1-1Z",
      ],
    },
    cloth: {
      symbolId: "nvidia-react-gui-icons-v1-fill-cloth",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a1 1 0 0 0-1 1H6a2 2 0 1 1 3.491 1.333l-.019.021-.623.558L14 7.886V9h-3v6.238l-3-1.2-3 1.2V9H2V7.887l5.706-3.294 1.056-.945A1 1 0 0 0 8 2m4.197 6L8.001 5.577 3.805 8Z",
      ],
    },
    cloud: {
      symbolId: "nvidia-react-gui-icons-v1-fill-cloud",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a4.5 4.5 0 0 0-4.486 4.141A3.501 3.501 0 0 0 4.5 13h6.25a4.25 4.25 0 0 0 1.389-8.268A4.5 4.5 0 0 0 8 2",
      ],
    },
    "cloud-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-cloud-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-1.565-1.566A4.3 4.3 0 0 1 10.75 13H4.5a3.5 3.5 0 0 1-.986-6.859c.043-.54.181-1.053.397-1.523L1.646 2.354zM15 8.75c0 .962-.32 1.85-.859 2.562L5.552 2.724a4.5 4.5 0 0 1 6.587 2.008A4.25 4.25 0 0 1 15 8.75",
      ],
    },
    coaxial: {
      symbolId: "nvidia-react-gui-icons-v1-fill-coaxial",
      viewBox: "0 0 16 16",
      paths: [
        "m13.982 8-3 5H5.017l-3-5 3-5h5.965Zm-10.8 0 2.401 4H8a4 4 0 0 1 0-8H5.583ZM12 8a4 4 0 0 1-4 4h2.416l2.4-4-2.4-4H8a4 4 0 0 1 4 4M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    code: {
      symbolId: "nvidia-react-gui-icons-v1-fill-code",
      viewBox: "0 0 16 16",
      paths: [
        "m6.026 12.342 3-9 .948.316-3 9ZM4.647 4.646l.707.708L2.707 8l2.647 2.646-.707.708L1.293 8ZM13.293 8l-2.647-2.646.708-.708L14.707 8l-3.353 3.354-.708-.708Z",
      ],
    },
    cog: {
      symbolId: "nvidia-react-gui-icons-v1-fill-cog",
      viewBox: "0 0 16 16",
      paths: [
        "M6.817 2.117a6 6 0 0 1 2.366 0l.372.074.125 1.633c.396.16.765.374 1.095.633l1.477-.707.25.284c.521.59.928 1.285 1.185 2.049l.121.359-1.352.926a4.5 4.5 0 0 1 0 1.264l1.352.926-.121.359a6 6 0 0 1-1.185 2.05l-.25.283-1.477-.707c-.33.259-.699.473-1.095.633l-.125 1.633-.372.074a6 6 0 0 1-2.366 0l-.372-.074-.125-1.633a4.5 4.5 0 0 1-1.095-.633l-1.477.707-.25-.283a6 6 0 0 1-1.185-2.05l-.121-.359 1.352-.926a4.5 4.5 0 0 1 0-1.264l-1.352-.926.121-.359a6 6 0 0 1 1.185-2.049l.25-.284 1.477.707c.33-.259.699-.473 1.095-.633l.125-1.633ZM8 10a2 2 0 1 0 .001-3.999A2 2 0 0 0 8 10",
      ],
    },
    "cog-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-cog-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.755-2.756-.116-.055a4.5 4.5 0 0 1-1.095.633l-.125 1.633-.372.074a6 6 0 0 1-2.366 0l-.372-.074-.125-1.633a4.5 4.5 0 0 1-1.095-.633l-1.477.707-.25-.283a6 6 0 0 1-1.185-2.05l-.121-.359 1.352-.926a4.5 4.5 0 0 1 0-1.264l-1.352-.926.121-.359a6 6 0 0 1 1.105-1.957L1.646 2.354Zm3.923 5.338a2 2 0 0 0 2.739 2.739Zm7.138 3.603q.156-.326.272-.67l.121-.359-1.352-.926a4.6 4.6 0 0 0 0-1.264l1.352-.926-.121-.359a6 6 0 0 0-1.185-2.049l-.25-.284-1.477.707a4.5 4.5 0 0 0-1.095-.633l-.125-1.633-.372-.074a6 6 0 0 0-2.366 0l-.372.074-.102 1.324z",
      ],
    },
    collapse: {
      symbolId: "nvidia-react-gui-icons-v1-fill-collapse",
      viewBox: "0 0 16 16",
      paths: [
        "M9 7h4V6h-2.293l2.647-2.646-.708-.708L10 5.293V3H9zM7 9H3v1h2.293l-2.647 2.646.708.708L6 10.707V13h1z",
      ],
    },
    collection: {
      symbolId: "nvidia-react-gui-icons-v1-fill-collection",
      viewBox: "0 0 16 16",
      paths: [
        "M5.773 4.455a1.319 1.319 0 1 0 0 2.637 1.319 1.319 0 0 0 0-2.637",
        "M12 2v10H2V2ZM3 7.211l2.8 1.617 2.85-1.645L11 8.54V3H3Z",
        "M13 4v9H4v1h10V4z",
      ],
    },
    commit: {
      symbolId: "nvidia-react-gui-icons-v1-fill-commit",
      viewBox: "0 0 16 16",
      paths: ["M8.5 2h-1v3H5v6h2.5v3h1v-3H11V5H8.5z"],
    },
    compass: {
      symbolId: "nvidia-react-gui-icons-v1-fill-compass",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m8.206.499 2.33-4.036L7.5 6.793Zm-4.738 3.038 4.033-2.329-1.704-1.704Z",
      ],
    },
    component: {
      symbolId: "nvidia-react-gui-icons-v1-fill-component",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 1a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 3",
      ],
    },
    concierge: {
      symbolId: "nvidia-react-gui-icons-v1-fill-concierge",
      viewBox: "0 0 16 16",
      paths: [
        "M12 15H4v-5h8zm-1.116-7H13v1H3V8h2.116l.536-2h4.696zM8 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 1",
      ],
    },
    connection: {
      symbolId: "nvidia-react-gui-icons-v1-fill-connection",
      viewBox: "0 0 16 16",
      paths: ["M2 2h5v5H5v4h4V9h5v5H9v-2H4V7H2z"],
    },
    "copy-doc": {
      symbolId: "nvidia-react-gui-icons-v1-fill-copy-doc",
      viewBox: "0 0 16 16",
      paths: [
        "M8.707 2 11 4.293V12H3V2ZM8 2.707V5h2.293Z",
        "M13 14V5h-1v8H6v1z",
      ],
    },
    "copy-generic": {
      symbolId: "nvidia-react-gui-icons-v1-fill-copy-generic",
      viewBox: "0 0 16 16",
      paths: ["M12 2H2v10h10z", "M13 4v9H4v1h10V4z"],
    },
    cpu: {
      symbolId: "nvidia-react-gui-icons-v1-fill-cpu",
      viewBox: "0 0 16 16",
      paths: [
        "M7 9V7h2v2z",
        "M5.5 3V2h1v1h1V2h1v1h1V2h1v1H13v2.5h1v1h-1v1h1v1h-1v1h1v1h-1V13h-2.5v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H3v-2.5H2v-1h1v-1H2v-1h1v-1H2v-1h1V3ZM6 6v4h4V6Z",
      ],
    },
    "craft-knife": {
      symbolId: "nvidia-react-gui-icons-v1-fill-craft-knife",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1.793 14.207 4.5l-5.804 5.804.375 1.398-6.927 1.856L.793 12.5ZM5.845 8.862 2.307 12.4l5.246-1.405-.156-.581Z",
      ],
    },
    crop: {
      symbolId: "nvidia-react-gui-icons-v1-fill-crop",
      viewBox: "0 0 16 16",
      paths: ["M4 4V2h1v9h9v1h-2v2h-1v-2H4V5H2V4Zm7 1H6V4h6v6h-1Z"],
    },
    crosshair: {
      symbolId: "nvidia-react-gui-icons-v1-fill-crosshair",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 2.021V1h1v1.021A6 6 0 0 1 13.979 7.5H15v1h-1.021A6 6 0 0 1 8.5 13.979V15h-1v-1.021A6 6 0 0 1 2.021 8.5H1v-1h1.021A6 6 0 0 1 7.5 2.021m0 1.004A5 5 0 0 0 3.025 7.5H4v1h-.975A5 5 0 0 0 7.5 12.975V12h1v.975A5 5 0 0 0 12.975 8.5H12v-1h.975A5 5 0 0 0 8.5 3.025V4h-1ZM6 8a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 8m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    crown: {
      symbolId: "nvidia-react-gui-icons-v1-fill-crown",
      viewBox: "0 0 16 16",
      paths: [
        "M6 4a2 2 0 1 1 3.26 1.553l1.598 1.598 2.157-.98a1 1 0 1 1 .87.822L12.276 13H3.724l-1.61-6.006a1 1 0 1 1 .871-.823l2.156.98L6.74 5.553A2 2 0 0 1 6 4m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    cube: {
      symbolId: "nvidia-react-gui-icons-v1-fill-cube",
      viewBox: "0 0 16 16",
      paths: [
        "m2.501 4.247 5.5-3.175 5.5 3.175-5.5 3.176zm-.5.866v6.351l5.5 3.175v-6.35zm6.5 9.526 5.5-3.175V5.113l-5.5 3.176z",
      ],
    },
    "cube-stack": {
      symbolId: "nvidia-react-gui-icons-v1-fill-cube-stack",
      viewBox: "0 0 16 16",
      paths: [
        "M4.75 3.954v2.598L7.5 8.139V5.541zm-.5 3.464L2 8.717l2.75 1.587L7 9.005zM1.5 9.583v3.175l2.75 1.588V11.17zm3.75 4.763 2.25-1.299V9.871L5.25 11.17zm3.25-1.299 2.25 1.299V11.17L8.5 9.871zm3.25 1.299 2.75-1.588V9.583l-2.75 1.587zM14 8.717l-2.25-1.299L9 9.005l2.25 1.299zm-2.75-2.165V3.954L8.5 5.541v2.598zm-.5-3.464L8 1.5 5.25 3.088 8 4.675z",
      ],
    },
    data: {
      symbolId: "nvidia-react-gui-icons-v1-fill-data",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M12 2h-1v5h1zM5 14V9H4v5zm6.5-5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
      ],
    },
    datacenter: {
      symbolId: "nvidia-react-gui-icons-v1-fill-datacenter",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
        "M9.76 5H14v9H6v-3H4v3H2V7h1.116l.224-.837.966.259L4.151 7h.965l.224-.837.966.259L6.151 7h.965l.224-.837.966.259L8.151 7h1.073Zm-1.108 8H13V6h-2.473Z",
      ],
    },
    db: {
      symbolId: "nvidia-react-gui-icons-v1-fill-db",
      viewBox: "0 0 16 16",
      paths: [
        "M2 4.72C2 6 4.865 7 8 7c3.136 0 6-1 6-2.28 0-.72-.973-1.52-1.904-1.943C11.022 2.289 9.573 2 8 2s-3.022.289-4.096.777C2.973 3.2 2 4 2 4.72m10.627 5.971c.51-.212.984-.476 1.373-.798V11c0 1.007-.875 1.755-1.904 2.223C11.022 13.711 9.573 14 8 14s-3.022-.289-4.096-.777C2.875 12.755 2 12.007 2 11V9.893c.389.322.863.586 1.373.798 1.235.514 2.871.809 4.627.809s3.393-.295 4.627-.809",
        "M8 8c1.756 0 3.393-.295 4.627-.809.51-.213.984-.476 1.373-.798v2.5c-.389.322-.863.585-1.373.798-1.234.514-2.871.809-4.627.809s-3.392-.295-4.627-.809c-.51-.213-.984-.476-1.373-.798v-2.5c.389.322.863.585 1.373.798C4.608 7.705 6.244 8 8 8",
      ],
    },
    "delivery-truck": {
      symbolId: "nvidia-react-gui-icons-v1-fill-delivery-truck",
      viewBox: "0 0 16 16",
      paths: [
        "M2 4h7v4h1V5h3.08L14 8.434V10h-1.085q.084.236.085.5a1.5 1.5 0 1 1-2.915-.5h-4.17q.084.236.085.5a1.5 1.5 0 1 1-2.915-.5H2z",
      ],
    },
    denoise: {
      symbolId: "nvidia-react-gui-icons-v1-fill-denoise",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 0 1 7-7v14a7 7 0 0 1-7-7m9-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    diamond: {
      symbolId: "nvidia-react-gui-icons-v1-fill-diamond",
      viewBox: "0 0 16 16",
      paths: ["M15.5 8 8 15.5.5 8 8 .5Z"],
    },
    "diamond-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-diamond-off",
      viewBox: "0 0 16 16",
      paths: [
        "m15.5 8-2.336 2.336-7.5-7.5L8 .5Zm-4.104 4.104L8 15.5.5 8l3.396-3.396-3.25-3.25.708-.708 14 14-.708.708Z",
      ],
    },
    "die-1": {
      symbolId: "nvidia-react-gui-icons-v1-fill-die-1",
      viewBox: "0 0 16 16",
      paths: ["M14 14H2V2h12ZM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"],
    },
    "die-2": {
      symbolId: "nvidia-react-gui-icons-v1-fill-die-2",
      viewBox: "0 0 16 16",
      paths: [
        "M14 14H2V2h12Zm-4-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "die-3": {
      symbolId: "nvidia-react-gui-icons-v1-fill-die-3",
      viewBox: "0 0 16 16",
      paths: [
        "M14 14H2V2h12Zm-9-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "die-4": {
      symbolId: "nvidia-react-gui-icons-v1-fill-die-4",
      viewBox: "0 0 16 16",
      paths: [
        "M14 14H2V2h12Zm-3-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "die-5": {
      symbolId: "nvidia-react-gui-icons-v1-fill-die-5",
      viewBox: "0 0 16 16",
      paths: [
        "M14 14H2V2h12Zm-3-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "die-6": {
      symbolId: "nvidia-react-gui-icons-v1-fill-die-6",
      viewBox: "0 0 16 16",
      paths: [
        "M14 14H2V2h12Zm-3-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    dirt: {
      symbolId: "nvidia-react-gui-icons-v1-fill-dirt",
      viewBox: "0 0 16 16",
      paths: [
        "m4.646 2.354 1 1 .708-.708-1-1zM11.5 3.559l-1.099.549L9.293 3l1.108-1.108 1.099.549zm-6 3-1.099.549L3.293 6l1.108-1.108 1.099.549zM14 5.96l-1.032-1.032-1.53.51-.51 1.53 1.085 1.086L14 7.557zm-7 6-1.032-1.032-1.53.51-.51 1.53 1.085 1.086L7 13.557zm.5-2.401V8.441l-1.099-.549L5.293 9l1.108 1.108zm4 2-1.099.549L9.293 11l1.108-1.108 1.099.549zM7.646 7.354l.708-.708 1 1-.708.708zm2 1 1 1 .708-.708-1-1zm-5.5 1-1-1 .708-.708 1 1zm1.5-5 1 1 .708-.708-1-1zm3.5.5-1-1 .708-.708 1 1zm-3 1.5 1 1 .708-.708-1-1zm1.5 7 .708-.708 1 1-.708.708zm-1-2.5 1 1 .708-.708-1-1zm1.5 1 .708-.708 1 1-.708.708zm-5.5-3.208-1 1 .708.708 1-1zm-1-1 1-1 .708.708-1 1zm6-5.5-1 1 .708.708 1-1zm0 3.5 1-1 .708.708-1 1zm3-1-1 1 .708.708 1-1zm-6 3 1-1 .708.708-1 1zm4.5 1-1 1 .708.708 1-1zm2.5 1 1-1 .708.708-1 1zm-6.292.708-.708-.708-1 1 .708.708z",
      ],
    },
    display: {
      symbolId: "nvidia-react-gui-icons-v1-fill-display",
      viewBox: "0 0 16 16",
      paths: [
        "M14 3v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2V3Zm-6.133 9h.267L8 11.5Z",
      ],
    },
    "display-collection": {
      symbolId: "nvidia-react-gui-icons-v1-fill-display-collection",
      viewBox: "0 0 16 16",
      paths: [
        "M13 2H1v8h1V3h11z",
        "M3 4h12v8H9.902l.268 1H12v1H6v-1h1.831l.268-1H3Zm6 8.5-.133.5h.267Z",
      ],
    },
    "display-column": {
      symbolId: "nvidia-react-gui-icons-v1-fill-display-column",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1h-7v5h2.599l-.268 1h1.036L8 6l.134 1H9.17l-.268-1H11.5zm0 7v5H8.902l.268 1H10v1H6v-1h.831l.268-1H4.5V8Zm-3.633 6h.267L8 13.5Z",
      ],
    },
    "display-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-display-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 13 13-.708.708L10.293 11H8.902l.268 1H11v1H5v-1h1.831l.268-1H2V3h.293L.646 1.354ZM7.867 12h.267L8 11.5ZM14 11h-.172l-8-8H14z",
      ],
    },
    "display-row": {
      symbolId: "nvidia-react-gui-icons-v1-fill-display-row",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 5v5H5.902l.268 1H7v1H3v-1h.831l.268-1H1V5ZM5 10.5l-.133.5h.267Zm3.5-.5V5H15v5h-3.098l.268 1H13v1H9v-1h.831l.268-1Zm2.5.5-.133.5h.267Z",
      ],
    },
    "display-share": {
      symbolId: "nvidia-react-gui-icons-v1-fill-display-share",
      viewBox: "0 0 16 16",
      paths: [
        "M2 4h3v1H3v6h10V5h-2V4h3v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2ZM8 .293l2.354 2.353-.708.708L8.5 2.207V7h-1V2.207L6.354 3.354l-.708-.708ZM8 12.5l-.134.5h.268Z",
      ],
    },
    "display-surround": {
      symbolId: "nvidia-react-gui-icons-v1-fill-display-surround",
      viewBox: "0 0 16 16",
      paths: [
        "M2.134 3.5H1v9h1.134l.116-.067C3.215 11.877 5.407 11 8 11s4.785.877 5.75 1.433l.116.067H15v-9h-1.134l-.116.067C12.785 4.123 10.593 5 8 5s-4.785-.877-5.75-1.433z",
      ],
    },
    displayport: {
      symbolId: "nvidia-react-gui-icons-v1-fill-displayport",
      viewBox: "0 0 16 16",
      paths: ["M15 7.293V11H1V5h11.707ZM3 7v2h9V7h-1v1H4V7Z"],
    },
    divide: {
      symbolId: "nvidia-react-gui-icons-v1-fill-divide",
      viewBox: "0 0 16 16",
      paths: [
        "M8 3.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8 3.5m-4.5 5v-1h9v1zm4.5 1a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8 9.5",
      ],
    },
    document: {
      symbolId: "nvidia-react-gui-icons-v1-fill-document",
      viewBox: "0 0 16 16",
      paths: ["M3 2h6.707L13 5.293V14H3Zm6 1v3h3Z"],
    },
    "document-checkmark": {
      symbolId: "nvidia-react-gui-icons-v1-fill-document-checkmark",
      viewBox: "0 0 16 16",
      paths: [
        "M3 2h6.707L13 5.293v1.963A4.5 4.5 0 0 0 7.758 14H3Zm6 1v3h3Z",
        "m10.5 14.207 4.854-4.853-.708-.708-4.146 4.147-1.646-1.647-.708.708z",
      ],
    },
    "document-new": {
      symbolId: "nvidia-react-gui-icons-v1-fill-document-new",
      viewBox: "0 0 16 16",
      paths: [
        "M9.707 2 13 5.293v1.963A4.5 4.5 0 0 0 7.758 14H3V2ZM9 6h3L9 3Z",
        "M11 11V8.5h1V11h2.5v1H12v2.5h-1V12H8.5v-1z",
      ],
    },
    "document-preview": {
      symbolId: "nvidia-react-gui-icons-v1-fill-document-preview",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 8.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
        "M3 2h7.134L13 4.751V14H3Zm4.5 4.5a2 2 0 1 0 1.016 3.723l1.63 1.631.707-.708-1.63-1.63A2 2 0 0 0 7.5 6.5m1.75-.9h2.866L9.25 2.849Z",
      ],
    },
    dolly: {
      symbolId: "nvidia-react-gui-icons-v1-fill-dolly",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1.875 10.3 3.6l-.6.8-1.2-.9v8.915l2.674-2.299.652.759L8 14.164l-3.826-3.289.652-.759L7.5 12.415V3.5l-1.2.9-.6-.8Z",
      ],
    },
    download: {
      symbolId: "nvidia-react-gui-icons-v1-fill-download",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 2v7.793l3.146-3.147.708.708L8 11.707 3.646 7.354l.708-.708L7.5 9.793V2ZM3.384 13h9.232l.571-2.129.966.258L13.384 14H2.616l-.769-2.871.966-.258Z",
      ],
    },
    "drive-cloud": {
      symbolId: "nvidia-react-gui-icons-v1-fill-drive-cloud",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 8.5c-.735 0-1.444.313-1.926.8-.347.352-.595.819-.623 1.336-.337.071-.631.25-.859.477-.36.359-.592.872-.592 1.387 0 1.139.983 2 2.115 2h3.5c1.282 0 2.385-.973 2.385-2.25 0-.543-.236-1.086-.593-1.474a1.83 1.83 0 0 0-.945-.561c-.093-.435-.384-.807-.703-1.069C11.79 8.761 11.14 8.5 10.5 8.5",
        "M15 4v5h-1.517a3.4 3.4 0 0 0-.589-.626c-.63-.518-1.5-.874-2.394-.874a3.75 3.75 0 0 0-2.637 1.098A3 3 0 0 0 7.524 9H1V4ZM3 6v1h1V6Z",
      ],
    },
    "drive-cloud-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-drive-cloud-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 13 13-.708.708-1.222-1.223c-.38.234-.832.369-1.309.369h-3.5c-1.132 0-2.115-.861-2.115-2 0-.515.232-1.028.592-1.387.228-.227.522-.405.859-.477.028-.517.276-.984.623-1.336l.01-.009-.707-.707-.014.014A3 3 0 0 0 7.524 9H1V4h2.293L1.646 2.354ZM3 6v1h1V6Zm7.5 1.5a3 3 0 0 0-.168.004L6.828 4H15v5h-1.517a3.4 3.4 0 0 0-.589-.627c-.63-.517-1.5-.873-2.394-.873",
      ],
    },
    "drive-network": {
      symbolId: "nvidia-react-gui-icons-v1-fill-drive-network",
      viewBox: "0 0 16 16",
      paths: [
        "M1 4h14v5H8.5v3H10v1h4v1h-4v1H6v-1H2v-1h4v-1h1.5V9H1Zm3 2H3v1h1Z",
      ],
    },
    "drive-network-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-drive-network-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 13 13-.708.708L13.293 14H10v1H6v-1H2v-1h4v-1h1.5V9H1V4h2.293L1.646 2.354ZM8.5 9.207V12H10v1h2.293ZM4 6H3v1h1Zm11 3h-3.172l-5-5H15z",
      ],
    },
    "drive-removable": {
      symbolId: "nvidia-react-gui-icons-v1-fill-drive-removable",
      viewBox: "0 0 16 16",
      paths: ["M1 5h14v5H1Zm12 2H6v1h7ZM3 7v1h1V7Z"],
    },
    "drive-removable-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-drive-removable-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L9.293 10H1V5h3.293L1.646 2.354ZM3 7v1h1V7Zm3.293 0H6v1h1.293ZM15 10h-2.172l-2-2H13V7H9.828l-2-2H15z",
      ],
    },
    "drive-usb": {
      symbolId: "nvidia-react-gui-icons-v1-fill-drive-usb",
      viewBox: "0 0 16 16",
      paths: ["M10 2v3h1v8.214l-3 .804-3-.804V5h1V2ZM9 5V3H7v2Z"],
    },
    "drive-usb-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-drive-usb-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L11 11.707v1.507l-3 .804-3-.804V5.707L1.646 2.354zM11 5v3.172L7.828 5H9V3H7v1.172l-1-1V2h4v3z",
      ],
    },
    drone: {
      symbolId: "nvidia-react-gui-icons-v1-fill-drone",
      viewBox: "0 0 16 16",
      paths: [
        "m3.354 5.354 2-2-.708-.708-2 2zm7.292-2 2 2 .708-.708-2-2zm-8 8 2 2 .708-.708-2-2zm10.708 0-2 2-.708-.708 2-2z",
        "M1 4a3 3 0 1 1 5.904.755L7.587 5h.826l.683-.245a3 3 0 1 1 2.108 2.138 3.1 3.1 0 0 0 0 2.214Q11.586 9.001 12 9a3 3 0 1 1-2.893 2.204 3.1 3.1 0 0 0-2.214 0q.106.382.107.796a3 3 0 1 1-2.204-2.893 3.12 3.12 0 0 0 0-2.214Q4.414 6.999 4 7a3 3 0 0 1-3-3m11 6a2.006 2.006 0 0 0-2 2 2 2 0 1 0 2-2m-8 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 4 10m8-8a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 2M4 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 4 2m5 3.5H7v1a1 1 0 0 0 2 0Z",
      ],
    },
    dual: {
      symbolId: "nvidia-react-gui-icons-v1-fill-dual",
      viewBox: "0 0 16 16",
      paths: [
        "M7 14v-1H2V3h5V2h1v12Zm0-8.707V4H3v5.293ZM13 4H9V3h5v10H9V9.135l1.65-.952L13 9.539z",
        "M10.318 6.318c0 .728-.59 1.318-1.318 1.318V5c.728 0 1.318.59 1.318 1.318",
      ],
    },
    dvi: {
      symbolId: "nvidia-react-gui-icons-v1-fill-dvi",
      viewBox: "0 0 16 16",
      paths: [
        "M13.276 12H2.724L.849 5h14.302ZM4 9h3V8H4Zm4-1h1V7H8Zm2 0h1V7h-1ZM9 9h1V8H9Zm2 0h1V8h-1Zm-3 1h1V9H8Zm2-1v1h1V9Z",
      ],
    },
    easel: {
      symbolId: "nvidia-react-gui-icons-v1-fill-easel",
      viewBox: "0 0 16 16",
      paths: [
        "M12 5H4v4h8z",
        "M6 2h1.5V1h1v1H10v1h4v8h-2v1h-1.653l.636 2.371-.966.258L9.312 12H6.687l-.704 2.629-.966-.258L5.652 12H4v-1H2V3h4Zm-3 8h10V4H3Z",
      ],
    },
    eject: {
      symbolId: "nvidia-react-gui-icons-v1-fill-eject",
      viewBox: "0 0 16 16",
      paths: ["M13.623 9 8 2.753 2.377 9zM2.5 11v1h11v-1z"],
    },
    ekg: {
      symbolId: "nvidia-react-gui-icons-v1-fill-ekg",
      viewBox: "0 0 16 16",
      paths: [
        "M8.32 3.828A3.44 3.44 0 0 1 13.954 7H12v1h1.627q-.182.361-.455.68l-.012.014L8 13.866 2.84 8.694l-.012-.014A3.4 3.4 0 0 1 2.373 8h2.834l1.034-1.034.973 3.632L9.244 8H11V7H8.756L7.661 8.402l-.902-3.368L4.793 7H2.046A3.44 3.44 0 0 1 7.68 3.828l.012.011.308.302.308-.302z",
        "M13.627 8c.162-.318.271-.655.327-1H15v1zM2.046 7c.056.345.165.682.327 1H1V7z",
      ],
    },
    elevator: {
      symbolId: "nvidia-react-gui-icons-v1-fill-elevator",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 15V1H15v14Zm1.854-7.354-.708.708 1.854 1.853 1.854-1.853-.708-.708-.646.647V6h-1v2.293ZM7.5 1v14H1V1ZM4 7.707V10h1V7.707l.646.647.708-.708L4.5 5.793 2.646 7.646l.708.708Z",
      ],
    },
    emergency: {
      symbolId: "nvidia-react-gui-icons-v1-fill-emergency",
      viewBox: "0 0 16 16",
      paths: [
        "m9.5 5.401 2.945-1.7 1.5 2.599-2.946 1.699 2.946 1.702-1.5 2.598L9.5 10.598V14h-3v-3.403L3.555 12.3l-1.5-2.599 2.944-1.702-2.946-1.7 1.502-2.598 2.945 1.7V2h3z",
      ],
    },
    emissive: {
      symbolId: "nvidia-react-gui-icons-v1-fill-emissive",
      viewBox: "0 0 16 16",
      paths: [
        "M8 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6m-3 7.197A5.96 5.96 0 0 0 8 14a5.96 5.96 0 0 0 3-.803l.501.866A7 7 0 0 1 8 15a7 7 0 0 1-3.501-.937ZM14 8a5.96 5.96 0 0 0-.803-3l.866-.501A7 7 0 0 1 15 8a7 7 0 0 1-.937 3.501L13.197 11A5.96 5.96 0 0 0 14 8M2.803 5A5.96 5.96 0 0 0 2 8c0 1.094.292 2.118.803 3l-.866.501A7 7 0 0 1 1 8c0-1.274.341-2.471.937-3.501ZM8 2a5.96 5.96 0 0 0-3 .803l-.501-.866A7 7 0 0 1 8 1c1.274 0 2.471.341 3.501.937L11 2.803A5.96 5.96 0 0 0 8 2m-2 9.465A4 4 0 0 0 8 12a4 4 0 0 0 2-.535l.501.865A5 5 0 0 1 8 13a5 5 0 0 1-2.501-.67ZM4.535 6A4 4 0 0 0 4 8c0 .73.195 1.412.535 2l-.866.501A5 5 0 0 1 3 8c0-.91.244-1.765.669-2.501ZM8 4a4 4 0 0 0-2 .535l-.501-.866A5 5 0 0 1 8 3c.91 0 1.765.244 2.501.669L10 4.535A4 4 0 0 0 8 4m4 4a4 4 0 0 0-.535-2l.865-.501A5 5 0 0 1 13 8a5 5 0 0 1-.67 2.501L11.465 10A4 4 0 0 0 12 8",
      ],
    },
    engine: {
      symbolId: "nvidia-react-gui-icons-v1-fill-engine",
      viewBox: "0 0 16 16",
      paths: [
        "M7 4h1v1H5.293L4 6.293v1.215l-1 .016V6.5H2v3.033h1V8.525l1-.017v1.199L5.293 11h1l1 1h4.414L13 10.707v-.69l1 .032V7h-1v-.707L11.707 5H9V4h1V3H7z",
      ],
    },
    enter: {
      symbolId: "nvidia-react-gui-icons-v1-fill-enter",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2h8v12H6v-2h1v1h6V3H7v1H6z",
        "M11.207 8 8.354 5.146l-.708.708L9.293 7.5H1v1h8.293l-1.647 1.646.708.708z",
      ],
    },
    envelope: {
      symbolId: "nvidia-react-gui-icons-v1-fill-envelope",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v1.589L8 8.407 2 4.589z",
        "M2 5.774V13h12V5.774L8 9.593z",
      ],
    },
    "envelope-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-envelope-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 13 13-.708.708L12.293 13H2V5.774l6 3.819.541-.345-1.365-1.365L2 4.589V3h.293L.646 1.354zM14 5.774v5.398l-3.298-3.299zm0-1.185-4.023 2.56L5.828 3H14z",
      ],
    },
    equal: {
      symbolId: "nvidia-react-gui-icons-v1-fill-equal",
      viewBox: "0 0 16 16",
      paths: ["M12.5 6.5h-9v-1h9zm0 4h-9v-1h9z"],
    },
    equalizer: {
      symbolId: "nvidia-react-gui-icons-v1-fill-equalizer",
      viewBox: "0 0 16 16",
      paths: [
        "M10 4H6V3h4Zm0 2H6V5h4Zm0 2H6V7h4Zm5 0h-4V7h4ZM5 10H1V9h4Zm5 0H6V9h4Zm5 0h-4V9h4ZM5 12H1v-1h4Zm5 0H6v-1h4Zm5 0h-4v-1h4ZM5 14H1v-1h4Zm5 0H6v-1h4Zm5 0h-4v-1h4Z",
      ],
    },
    eraser: {
      symbolId: "nvidia-react-gui-icons-v1-fill-eraser",
      viewBox: "0 0 16 16",
      paths: [
        "M10 2.293 14.207 6.5l-3 3L7 5.293zM6.293 6l-4 4 3 3h2.414l2.793-2.793zM14 13h-4v-1h4z",
      ],
    },
    error: {
      symbolId: "nvidia-react-gui-icons-v1-fill-error",
      viewBox: "0 0 16 16",
      paths: ["M8 .5 15.5 8 8 15.5.5 8Zm-.5 5V9h1V5.5Zm0 4.5v1h1v-1Z"],
    },
    escalator: {
      symbolId: "nvidia-react-gui-icons-v1-fill-escalator",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 1a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 5.5 1m.707 3.5H4.793L4 5.293v4.086l3-3V5.293z",
        "M15 4h-4.207l-7 7H1v4h4.207l7-7H15z",
      ],
    },
    ethernet: {
      symbolId: "nvidia-react-gui-icons-v1-fill-ethernet",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 6h-2v1.5H14v1h-2V10h2v4H9v-4h2V8.5H5V10h2v4H2v-4h2V8.5H2v-1h5.5V6h-2V2h5z",
      ],
    },
    "ethernet-port": {
      symbolId: "nvidia-react-gui-icons-v1-fill-ethernet-port",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 10V7h1V6h3v1h1v3h-1V8h-1v2h-1V8h-1v2z",
        "M2 2h12v12H2Zm8.5 3h-5v1h-1v5h7V6h-1Z",
      ],
    },
    exit: {
      symbolId: "nvidia-react-gui-icons-v1-fill-exit",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h8v2H9V3H3v10h6v-1h1v2H2Zm11.293 5.5-1.647-1.646.708-.708L15.207 8l-2.853 2.854-.708-.708L13.293 8.5H5v-1Z",
      ],
    },
    expand: {
      symbolId: "nvidia-react-gui-icons-v1-fill-expand",
      viewBox: "0 0 16 16",
      paths: [
        "M13 3H9v1h2.293L8.647 6.646l.707.708L12 4.707V7h1zM3 13h4v-1H4.707l2.647-2.646-.708-.708L4 11.293V9H3z",
      ],
    },
    explode: {
      symbolId: "nvidia-react-gui-icons-v1-fill-explode",
      viewBox: "0 0 16 16",
      paths: [
        "m8 .423 5.5 3.175-2.815 1.625L12 5.982v1.482l3-1.732v6.351l-5.5 3.175v-3.214L8 12.91l-1.5-.866v3.214L1 12.083V5.732l3 1.732V5.982l1.315-.759L2.5 3.598Zm-.5 11.044V8.58L5 7.137v.904l1.5.866v1.982Zm3.5-4.33L8.5 8.58v2.887l1-.578V8.907l1.5-.866ZM6.315 5.8l-.815.471L8 7.714l2.5-1.443-.815-.471L8 6.773Z",
      ],
    },
    export: {
      symbolId: "nvidia-react-gui-icons-v1-fill-export",
      viewBox: "0 0 16 16",
      paths: [
        "M3 5h2v1H4v6h8V6h-1V5h2v8H3Zm5-3.707 2.354 2.353-.708.708L8.5 3.207V9h-1V3.207L6.354 4.354l-.708-.708Z",
      ],
    },
    "export-from-clipboard": {
      symbolId: "nvidia-react-gui-icons-v1-fill-export-from-clipboard",
      viewBox: "0 0 16 16",
      paths: [
        "M5.349 2h5.303l-.268 1H13v2.5h-1V4h-1.884l-.268 1H6.152l-.267-1H4v9h5.5v1H3V3h2.617z",
        "m12.293 9-1.647-1.646.708-.708L14.208 9.5l-2.854 2.854-.708-.708L12.293 10H7V9z",
      ],
    },
    "export-to-clipboard": {
      symbolId: "nvidia-react-gui-icons-v1-fill-export-to-clipboard",
      viewBox: "0 0 16 16",
      paths: [
        "M5.348 2h5.304l-.268 1H13v11H3v-2h1v1h8V4h-1.884l-.268 1H6.152l-.268-1H4v3H3V3h2.616z",
        "M7.293 9 5.646 7.354l.708-.708L9.208 9.5l-2.854 2.854-.708-.708L7.293 10H2V9z",
      ],
    },
    eye: {
      symbolId: "nvidia-react-gui-icons-v1-fill-eye",
      viewBox: "0 0 16 16",
      paths: [
        "M3.521 5.455C4.733 4.674 6.31 4 8 4s3.267.674 4.479 1.455c1.2.773 2.118 1.701 2.456 2.299l.139.246-.139.246c-.338.598-1.256 1.526-2.456 2.299C11.267 11.326 9.69 12 8 12s-3.267-.674-4.479-1.455c-1.2-.773-2.118-1.701-2.456-2.299L.926 8l.139-.246c.338-.598 1.256-1.526 2.456-2.299M6 8a2 2 0 1 0 3.999.001A2 2 0 0 0 6 8m2-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
      ],
    },
    "eye-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-eye-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.907-2.908C9.894 11.78 8.965 12 8 12c-1.69 0-3.267-.674-4.479-1.455-1.2-.773-2.118-1.701-2.456-2.299L.926 8l.139-.246c.338-.598 1.256-1.526 2.456-2.299q.365-.237.773-.454L1.646 2.354Zm3.923 5.338a2 2 0 0 0 2.739 2.739l-.757-.757a1 1 0 0 1-1.225-1.225Zm8.658 1.262c-.286.506-.988 1.25-1.925 1.935L6.918 4.09Q7.449 4.002 8 4c1.69 0 3.267.674 4.479 1.455 1.2.773 2.118 1.701 2.456 2.299l.139.246z",
      ],
    },
    eyedropper: {
      symbolId: "nvidia-react-gui-icons-v1-fill-eyedropper",
      viewBox: "0 0 16 16",
      paths: [
        "M3.589 10.204 8.543 5.25l-.897-.896.708-.708.646.647 1.146-1.147a1.916 1.916 0 0 1 2.708 0c.747.748.747 1.96 0 2.708L11.707 7l.647.646-.708.708-.896-.897-4.954 4.954-2.395 1.197-1.009-1.009ZM9.25 5.957l-4.839 4.839-.793 1.586 1.586-.793 4.839-4.839Z",
      ],
    },
    "facial-recognition": {
      symbolId: "nvidia-react-gui-icons-v1-fill-facial-recognition",
      viewBox: "0 0 16 16",
      paths: [
        "M2 14h2v1H1v-3h1zm13 1h-3v-1h2v-2h1zM8.001 3c1.442 0 2.473.51 3.13 1.334.641.805.876 1.847.876 2.833 0 2.273-.347 3.755-1.069 4.665C10.184 12.781 9.114 13 8.001 13s-2.183-.219-2.938-1.168c-.723-.91-1.07-2.391-1.07-4.665C3.993 7.129 4 7 4 7h1V6h-.887c.074-.345.184-.682.339-1H6V3.425C6.548 3.152 7.213 3 8.001 3M6.5 7h1V6h-1Zm2 0h1V6h-1Zm-2 2h1V8h-1Zm2 0h1V8h-1Zm-1 2h1v-1h-1ZM4 2H2v2H1V1h3zm11 2h-1V2h-2V1h3z",
      ],
    },
    factory: {
      symbolId: "nvidia-react-gui-icons-v1-fill-factory",
      viewBox: "0 0 16 16",
      paths: [
        "M13 2v5h2v7h-3v-4H8v4H1V7h1.384l.536-2H5v2h.384l.536-2H8v2h2V2ZM3 9v1h1V9Zm3 0H5v1h1Zm-3 2v1h1v-1Zm3 0H5v1h1Z",
        "M11 11H9v1h2z",
      ],
    },
    faders: {
      symbolId: "nvidia-react-gui-icons-v1-fill-faders",
      viewBox: "0 0 16 16",
      paths: [
        "M2 5h2V1h1v4h2v3H5v2H4V8H2zm9-4v2H9v3h2v4h1V6h2V3h-2V1zM4.5 12a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 12m7 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 11.5 12",
      ],
    },
    family: {
      symbolId: "nvidia-react-gui-icons-v1-fill-family",
      viewBox: "0 0 16 16",
      paths: [
        "M9.188 9.134 7.884 14H.849l1.607-6h6.428zM15.151 14H8.849l1.071-4h4.16zM12 5a2 2 0 1 1 .001 3.999A2 2 0 0 1 12 5M6 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6",
      ],
    },
    fan: {
      symbolId: "nvidia-react-gui-icons-v1-fill-fan",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 2.25H5.25V4.5c0 .44.181.892.425 1.306.192.326.43.643.677.933-.584-.268-1.247-.489-1.852-.489A2.25 2.25 0 0 0 2.25 8.5v2.25H4.5c.44 0 .892-.181 1.306-.425.326-.192.643-.43.933-.677-.268.584-.489 1.247-.489 1.852a2.25 2.25 0 0 0 2.25 2.25h2.25V11.5c0-.44-.181-.892-.425-1.306a7 7 0 0 0-.677-.933c.584.268 1.247.489 1.852.489a2.25 2.25 0 0 0 2.25-2.25V5.25H11.5c-.44 0-.892.181-1.306.425-.326.192-.643.43-.933.677.268-.584.489-1.247.489-1.852A2.25 2.25 0 0 0 7.5 2.25",
      ],
    },
    "fan-loud": {
      symbolId: "nvidia-react-gui-icons-v1-fill-fan-loud",
      viewBox: "0 0 16 16",
      paths: [
        "M11 9V5h1v4zm2 2V3h1v8zM3.647 3v1.853c0 .285.125.608.278.905q.1.194.22.387a6 6 0 0 0-.387-.22c-.297-.153-.62-.278-.905-.278C1.83 5.647 1 6.477 1 7.5v1.853h1.853c.285 0 .608-.125.905-.278q.194-.1.387-.22a6 6 0 0 0-.22.387c-.153.297-.278.62-.278.905C3.647 11.17 4.477 12 5.5 12h1.853v-1.853c0-.285-.125-.608-.278-.905a6 6 0 0 0-.22-.387q.194.12.387.22c.297.153.62.278.905.278C9.17 9.353 10 8.523 10 7.5V5.647H8.147c-.285 0-.608.125-.905.278a6 6 0 0 0-.387.22q.12-.194.22-.387c.153-.297.278-.62.278-.905C7.353 3.83 6.523 3 5.5 3z",
      ],
    },
    "fan-quiet": {
      symbolId: "nvidia-react-gui-icons-v1-fill-fan-quiet",
      viewBox: "0 0 16 16",
      paths: [
        "M4.647 3H6.5c1.023 0 1.853.83 1.853 1.853 0 .285-.125.608-.278.905a6 6 0 0 1-.22.387q.194-.12.387-.22c.297-.153.62-.278.905-.278H11V7.5c0 1.023-.83 1.853-1.853 1.853-.285 0-.608-.125-.905-.278a6 6 0 0 1-.387-.22q.12.194.22.387c.153.297.278.62.278.905V12H6.5a1.853 1.853 0 0 1-1.853-1.853c0-.285.125-.608.278-.905q.1-.194.22-.387a6 6 0 0 1-.387.22c-.297.153-.62.278-.905.278H2V7.5c0-1.023.83-1.853 1.853-1.853.285 0 .608.125.905.278q.194.1.387.22a6 6 0 0 1-.22-.387c-.153-.297-.278-.62-.278-.905zM12 5v4h1V5z",
      ],
    },
    farm: {
      symbolId: "nvidia-react-gui-icons-v1-fill-farm",
      viewBox: "0 0 16 16",
      paths: [
        "M2 4.5a2.5 2.5 0 1 1 5 0v1.258l2-.625V4.5h1v.633l3.108.972L14 9.434V14h-2V9H7v5H2ZM6 5H3v8h2V9.434l.892-3.329L6 6.071Zm4.5 1.5h-2v2h2Z",
        "M8.793 11.5 8 10.707v1.586zm.707.707.793.793H8.707zm1.5.086-.793-.793.793-.793zM8.707 10h1.586l-.793.793z",
      ],
    },
    "fast-forward": {
      symbolId: "nvidia-react-gui-icons-v1-fill-fast-forward",
      viewBox: "0 0 16 16",
      paths: ["M15.492 8 8 3.629v3.492l-6-3.49v8.739l6-3.5v3.5z"],
    },
    "fast-reverse": {
      symbolId: "nvidia-react-gui-icons-v1-fill-fast-reverse",
      viewBox: "0 0 16 16",
      paths: ["M8 7.121V3.629L.508 8 8 12.37v-3.5l6 3.5V3.631z"],
    },
    feedback: {
      symbolId: "nvidia-react-gui-icons-v1-fill-feedback",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v10H7.71l-2.467 2.467L4.582 12H2Zm5.5 2.5v3h1v-3Zm0 4v1h1v-1Z",
      ],
    },
    "feeling-happy": {
      symbolId: "nvidia-react-gui-icons-v1-fill-feeling-happy",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m3.171 1.828A4 4 0 0 0 8 11a4 4 0 0 0 2.828-1.172l-.707-.707A3 3 0 0 1 8 10a3 3 0 0 1-2.122-.879ZM10 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "feeling-neutral": {
      symbolId: "nvidia-react-gui-icons-v1-fill-feeling-neutral",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m3 1v1h6V9Zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "feeling-sad": {
      symbolId: "nvidia-react-gui-icons-v1-fill-feeling-sad",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m3.878 2.879A3 3 0 0 1 8 10c.828 0 1.578.335 2.121.879l.707-.707A4 4 0 0 0 8 9a4 4 0 0 0-2.829 1.172ZM10 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "feeling-very-happy": {
      symbolId: "nvidia-react-gui-icons-v1-fill-feeling-very-happy",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M4.04 8.571a4 4 0 0 0 7.919 0l.01-.071H4.03ZM9 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "feeling-very-sad": {
      symbolId: "nvidia-react-gui-icons-v1-fill-feeling-very-sad",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m4 3a2 2 0 1 1 4 0h1a3 3 0 1 0-6 0Zm2.905-4.276 1.932.518.258-.966-1.931-.518Zm-3.741.518 1.931-.518-.258-.966-1.932.518Z",
      ],
    },
    "file-reel": {
      symbolId: "nvidia-react-gui-icons-v1-fill-file-reel",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m2.378 6.228a1 1 0 1 0 1.902-.618 1 1 0 0 0-1.902.618m-5.244 3.016a1 1 0 1 0 1.617 1.176 1 1 0 0 0-1.617-1.176M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5.622 7.228a1 1 0 1 0-1.903-.619 1 1 0 0 0 1.903.619m3.626 4.191a1 1 0 1 0 1.62-1.177 1 1 0 0 0-1.62 1.177",
      ],
    },
    film: {
      symbolId: "nvidia-react-gui-icons-v1-fill-film",
      viewBox: "0 0 16 16",
      paths: [
        "M14 2v13H2V2Zm-3 6V3H5v5ZM5 9v5h6V9ZM3 4h1V3H3Zm9-1v1h1V3ZM3 6h1V5H3Zm9-1v1h1V5ZM3 8h1V7H3Zm10 0V7h-1v1ZM3 9v1h1V9Zm9 1h1V9h-1Zm-8 2v-1H3v1Zm8 0h1v-1h-1Zm-9 2h1v-1H3Zm9-1v1h1v-1Z",
      ],
    },
    "film-add": {
      symbolId: "nvidia-react-gui-icons-v1-fill-film-add",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v5h-3V3H5v5h4v1H5v5h4v1H2Zm9 9V8.5h1V11h2.5v1H12v2.5h-1V12H8.5v-1ZM3 4h1V3H3Zm9-1v1h1V3ZM3 6h1V5H3Zm10-1h-1v1h1ZM3 8h1V7H3Zm0 2h1V9H3Zm0 2h1v-1H3Zm1 2v-1H3v1Z",
      ],
    },
    "film-collection": {
      symbolId: "nvidia-react-gui-icons-v1-fill-film-collection",
      viewBox: "0 0 16 16",
      paths: [
        "M12 3v9H2V3ZM5 4v3h4V4Zm4 7V8H5v3ZM3 5h1V4H3Zm7-1v1h1V4ZM3 7h1V6H3Zm8-1h-1v1h1ZM3 9h1V8H3Zm8-1h-1v1h1Zm-7 3v-1H3v1Zm7 0v-1h-1v1Z",
        "M13 5h1v9H4v-1h9z",
      ],
    },
    filter: {
      symbolId: "nvidia-react-gui-icons-v1-fill-filter",
      viewBox: "0 0 16 16",
      paths: ["M13 6H3V5h10Zm-2 3H5V8h6Zm-2 3H7v-1h2Z"],
    },
    fingerprint: {
      symbolId: "nvidia-react-gui-icons-v1-fill-fingerprint",
      viewBox: "0 0 16 16",
      paths: [
        "M3.001 8.502a4.5 4.5 0 1 1 9.003 0A9.46 9.46 0 0 1 10.253 14l-.815-.579a8.46 8.46 0 0 0 1.566-4.919 3.502 3.502 0 0 0-7.003 0c0 .829-.672 1.501-1.501 1.501H2v-1h.5a.5.5 0 0 0 .501-.501M7.502 3a5.5 5.5 0 0 0-4.764 2.75l-.866-.5a6.502 6.502 0 1 1 10.972 6.961l-.821-.571A5.503 5.503 0 0 0 7.502 3m0 4.002a1.5 1.5 0 0 0-1.5 1.5c0 1.7-1.211 3.116-2.817 3.435l-.195-.981a2.5 2.5 0 0 0 2.012-2.454 2.5 2.5 0 1 1 5.001 0 7.5 7.5 0 0 1-2.733 5.793l-.636-.772a6.49 6.49 0 0 0 2.369-5.021 1.5 1.5 0 0 0-1.501-1.5m.5 1.5a5.5 5.5 0 0 1-3.097 4.95l-.437-.899a4.5 4.5 0 0 0 2.534-4.051Z",
      ],
    },
    fire: {
      symbolId: "nvidia-react-gui-icons-v1-fill-fire",
      viewBox: "0 0 16 16",
      paths: [
        "M7.741 2.062 7 1.654V2.5c0 1.167-.701 1.767-1.669 2.596l-.157.134c-.503.432-1.053.931-1.471 1.59C3.277 7.492 3 8.311 3 9.375 3 11.969 5.28 14 8 14s5-2.031 5-4.625c0-.746-.134-1.53-.412-2.208-.276-.671-.717-1.29-1.364-1.614l-.323-.161-.255.254c-.416.417-.674.814-.834 1.201-.16.385-.213.737-.246 1.035l-.018.166c-.053.502-.082.779-.402 1.098-.135.135-.37.229-.646.229s-.511-.094-.646-.229c-.206-.206-.354-.46-.354-.709 0-.213.111-.577.777-1.021.854-.569 1.473-1.492 1.473-2.525 0-1.061-.649-2.081-2.009-2.829",
      ],
    },
    firecracker: {
      symbolId: "nvidia-react-gui-icons-v1-fill-firecracker",
      viewBox: "0 0 16 16",
      paths: [
        "M12 1.5v1h-1v-1zm1.354 1.854 1-1-.708-.708-1 1zM10.207 6.5l2.147-2.146-.708-.708L9.5 5.793l-1-1L1.793 11.5 4.5 14.207 11.207 7.5zM13.5 5h1V4h-1z",
      ],
    },
    firewall: {
      symbolId: "nvidia-react-gui-icons-v1-fill-firewall",
      viewBox: "0 0 16 16",
      paths: [
        "M5 2H2v2h12V2h-3v1h-1V2H6v1H5zM2 7V5h5.5v2zm0 3V8h3v2z",
        "M7.5 10H6V8h4v2H8.5v2H10v1h4v1h-4v1H6v-1H2v-1h4v-1h1.5z",
        "M14 10h-3V8h3zm0-5v2H8.5V5z",
      ],
    },
    "firewall-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-firewall-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708L13.293 14H10v1H6v-1H2v-1h4v-1h1.5v-2H6V8h1.293l-1-1H2V5h2.293l-1-1H2V2.707L.646 1.354ZM9.293 10H8.5v2H10v1h2.293Z",
        "M14 10h-1.172l-2-2H14Zm0-3H9.828L8.5 5.672V5H14Zm0-3H6.828L6 3.172V2h4v1h1V2h3ZM2 8h3v2H2Z",
      ],
    },
    firework: {
      symbolId: "nvidia-react-gui-icons-v1-fill-firework",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 14v-1h1v1zm0-2v-1h1v1zM3 11v-1h1v1zm4.5-1V9h1v1zm0-2V7h1v1zm-1 0h-1V7h1zM11 2h-1V1h1zm-.5 6h-1V7h1zm2 0h-1V7h1zm-5-2V5h1v1zm1.439-.146.707-.708.707.708-.707.707Zm-2.586.707-.707-.707.707-.708.707.708ZM11 4h1v1h-1ZM4.854 5.061l-.708-.707.708-.708.707.708ZM2.5 4h-1V3h1ZM13 4h1v1h-1ZM3.439 8.354l.707-.708.707.708-.707.707zm4.207-5.208.707-.707.708.707-.708.708zm6.914 6.208-.707.707-.707-.707.707-.708z",
      ],
    },
    fit: {
      symbolId: "nvidia-react-gui-icons-v1-fill-fit",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v12H2Zm1 1v10h10V3Zm9.002.999V7h-1V5.706l-5.291 5.291h1.292v1H4.002v-3h1v1.294l5.293-5.292H9v-1Z",
      ],
    },
    "fit-to-page": {
      symbolId: "nvidia-react-gui-icons-v1-fill-fit-to-page",
      viewBox: "0 0 16 16",
      paths: [
        "M10.134 2 13 4.751V14H3V2Zm-.132 8V6.999H7v1h1.295l-2.294 2.293V8.997h-1v3h3.001l.001-1H6.711l2.291-2.291V10ZM9.25 2.849V5.6h2.866Z",
      ],
    },
    flag: {
      symbolId: "nvidia-react-gui-icons-v1-fill-flag",
      viewBox: "0 0 16 16",
      paths: ["M4 2H3v12h1v-4h4.616l.536 2H14V5H9.919l-.535-2H4z"],
    },
    "flight-stick": {
      symbolId: "nvidia-react-gui-icons-v1-fill-flight-stick",
      viewBox: "0 0 16 16",
      paths: [
        "M9.631 2.378 7.04.882 3.842 2.161V3.36l1.592.531.83 2.905 1.44.721L7.208 9.5h-.175L1 11.116v1.591L2.293 14h11.414L15 12.707v-1.591l-1.682-.45a2 2 0 0 0-2.975-.797l-.839-.225.644-2.611z",
      ],
    },
    floppy: {
      symbolId: "nvidia-react-gui-icons-v1-fill-floppy",
      viewBox: "0 0 16 16",
      paths: ["M11.977 2 14 4.312V14H2V2ZM11 9H5v4h6ZM5 3v3h5V3Z"],
    },
    flower: {
      symbolId: "nvidia-react-gui-icons-v1-fill-flower",
      viewBox: "0 0 16 16",
      paths: [
        "M6 4a2 2 0 0 1 4 0c0 .183-.043.396-.096.598l-.058.204q.076-.08.148-.151a2.4 2.4 0 0 1 .47-.383 2 2 0 1 1 2 3.464c-.159.092-.365.16-.567.216L11.691 8q.108.025.206.052c.202.055.408.124.567.216a2 2 0 0 1-2 3.464 2.4 2.4 0 0 1-.47-.383 4 4 0 0 1-.148-.152l.058.205c.053.202.096.415.096.598a2 2 0 1 1-4 0c0-.183.044-.396.097-.598q.026-.099.057-.204-.075.08-.148.151a2.4 2.4 0 0 1-.47.383 2 2 0 0 1-2-3.464c.159-.092.365-.16.567-.216L4.309 8l-.206-.052a2.5 2.5 0 0 1-.567-.216 2 2 0 0 1 2-3.464c.159.091.322.236.47.383a4 4 0 0 1 .148.152l-.057-.205A2.5 2.5 0 0 1 6 4m2 5.5a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 8 9.5",
      ],
    },
    fog: {
      symbolId: "nvidia-react-gui-icons-v1-fill-fog",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a4.5 4.5 0 0 0-4.486 4.141 3.5 3.5 0 0 0-2.441 2.645l-.154.74 3.833-.767a3.5 3.5 0 0 1 2.252.302l1.545.772a4.5 4.5 0 0 0 2.895.388L15 8.51v-.76a4.25 4.25 0 0 0-2.861-4.018A4.5 4.5 0 0 0 8 1m-.996 11.561a3.5 3.5 0 0 0-2.252-.302l-3.654.731-.196-.98 3.654-.731c.981-.196 2-.06 2.895.387l1.545.773a3.5 3.5 0 0 0 2.252.302l3.654-.731.196.98-3.654.731c-.981.196-2 .06-2.895-.388z",
        "M4.752 10.259a3.5 3.5 0 0 1 2.252.302l1.545.772a4.5 4.5 0 0 0 2.895.388l3.654-.731-.196-.98-3.654.731a3.5 3.5 0 0 1-2.252-.302l-1.545-.772a4.5 4.5 0 0 0-2.895-.388l-3.654.731.196.98z",
      ],
    },
    "folder-closed": {
      symbolId: "nvidia-react-gui-icons-v1-fill-folder-closed",
      viewBox: "0 0 16 16",
      paths: ["M14 5H7.42l-.536-2H2v10h12z"],
    },
    "folder-open": {
      symbolId: "nvidia-react-gui-icons-v1-fill-folder-open",
      viewBox: "0 0 16 16",
      paths: [
        "M6.42 5H13v2H3.161l-2.16 5.398L1 3h4.884z",
        "M1.837 13h11l2.001-5h-11z",
      ],
    },
    food: {
      symbolId: "nvidia-react-gui-icons-v1-fill-food",
      viewBox: "0 0 16 16",
      paths: [
        "M12.723 1.871 11.616 6H8.241l1.875 7h3.768l1.875-7h-3.107l1.037-3.871zM7.348 8H2.652l-.536 2h5.768zm.536 3H2.116l.536 2h4.696z",
      ],
    },
    footprint: {
      symbolId: "nvidia-react-gui-icons-v1-fill-footprint",
      viewBox: "0 0 16 16",
      paths: [
        "M7.999 2h.002c.277 0 .784 0 1.352.406.547.39 1.093 1.114 1.611 2.408.555 1.386.41 2.38.144 3.377q-.07.257-.143.512c-.194.682-.395 1.383-.45 2.297h-5.03c-.056-.914-.256-1.615-.45-2.297q-.075-.255-.143-.512c-.266-.997-.41-1.991.144-3.377C5.553 3.52 6.1 2.796 6.647 2.406 7.215 2 7.722 2 7.999 2M5.518 12c.065.841.297 1.532.67 2.044.453.622 1.1.956 1.812.956s1.359-.334 1.812-.956c.373-.512.604-1.203.669-2.044z",
      ],
    },
    fork: {
      symbolId: "nvidia-react-gui-icons-v1-fill-fork",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 2h-1v5.884l2 .536V14h1V8.42l2-.536V2h-1v5.116l-1 .268V2h-1v5.384l-1-.268z",
      ],
    },
    forward: {
      symbolId: "nvidia-react-gui-icons-v1-fill-forward",
      viewBox: "0 0 16 16",
      paths: [
        "M10.353 2.646 13.207 5.5l-2.854 2.854-.707-.708L11.293 6H3.982l1.707 6.371-.966.258L2.678 5h8.615L9.646 3.354Z",
      ],
    },
    "forward-10": {
      symbolId: "nvidia-react-gui-icons-v1-fill-forward-10",
      viewBox: "0 0 16 16",
      paths: [
        "M12 8a5 5 0 1 0-5 5v1a6 6 0 1 1 5.898-7.105l1.248-1.249.708.708L12 9.207z",
        "M4 5h1.01v1.125H5v3.75h.01V11H4zm2 1.125C6 5.422 6.649 5 7.25 5h1.5C9.351 5 10 5.422 10 6.125v3.75C10 10.578 9.351 11 8.75 11h-1.5C6.649 11 6 10.578 6 9.875Zm1.04-.058C7 6.1 7 6.123 7 6.125v3.75c0 .002 0 .025.04.058a.33.33 0 0 0 .21.067h1.5a.33.33 0 0 0 .21-.067C9 9.9 9 9.877 9 9.875v-3.75c0-.002 0-.025-.04-.058A.33.33 0 0 0 8.75 6h-1.5a.33.33 0 0 0-.21.067",
      ],
    },
    founders: {
      symbolId: "nvidia-react-gui-icons-v1-fill-founders",
      viewBox: "0 0 16 16",
      paths: [
        "m8 9.732-1.5-.866V7.134L8 6.268l1.5.866v1.732z",
        "m2.001 4.536 6-3.464 6 3.464v6.928l-6 3.464-6-3.464ZM8 5.113 5.5 6.557v2.886L8 10.887l2.5-1.444V6.557Z",
      ],
    },
    "founders-tier-1": {
      symbolId: "nvidia-react-gui-icons-v1-fill-founders-tier-1",
      viewBox: "0 0 16 16",
      paths: [
        "m2.001 4.535 6-3.464 6 3.465-3.5 2.021L8 5.113 5.5 6.557v2.887l-3.499 2.02z",
        "m6.5 8.867 3.001-1.733L8 6.268l-1.5.866zm-1 4.618-1-.578 9.501-5.485v1.155zm8.501-2.021-6 3.464L7 14.351l7.001-4.042z",
      ],
    },
    "founders-tier-2": {
      symbolId: "nvidia-react-gui-icons-v1-fill-founders-tier-2",
      viewBox: "0 0 16 16",
      paths: [
        "m2.001 4.535 6-3.464 6 3.465-12 6.928zm3.499 8.95-1-.578 9.501-5.485v1.155zm8.501-2.021-6 3.464L7 14.351l7.001-4.042z",
      ],
    },
    "founders-tier-3": {
      symbolId: "nvidia-react-gui-icons-v1-fill-founders-tier-3",
      viewBox: "0 0 16 16",
      paths: [
        "M2.001 4.536v6.928l2.817 1.626 9.184-5.301V4.536L8.001 1.072zm12 5.774-7 4.041 1 .577 6-3.464z",
      ],
    },
    fps: {
      symbolId: "nvidia-react-gui-icons-v1-fill-fps",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2Zm5 2v4h1V8a1.5 1.5 0 0 0 0-3ZM4 5v4h1V7.5h1v-1H5V6h1.5V5Zm7.114 1.098c.067-.037.263-.1.662.099l.448-.894c-.601-.301-1.155-.319-1.588-.083A1.2 1.2 0 0 0 10 6.25c0 .629.437.954.671 1.129l.029.021c.276.207.3.255.3.35 0 .022-.025.103-.114.152-.067.037-.263.1-.662-.099l-.448.894c.601.301 1.155.319 1.588.083.411-.223.636-.642.636-1.03 0-.629-.437-.954-.671-1.129L11.3 6.6c-.276-.207-.3-.255-.3-.35 0-.022.025-.103.114-.152M8 7V6a.5.5 0 0 1 0 1m0 4.5-.134.5h.268Z",
      ],
    },
    freehand: {
      symbolId: "nvidia-react-gui-icons-v1-fill-freehand",
      viewBox: "0 0 16 16",
      paths: [
        "m12.736 5.529.006.006-.707.707c-.528-.528-1.483-1.482-2.388-2.215-.456-.37-.874-.661-1.201-.818a1.4 1.4 0 0 0-.27-.102q.006.03.019.071.088.285.443.794c.472.669 1.202 1.482 1.966 2.322l.104.115c.717.789 1.451 1.598 1.95 2.28.26.354.483.71.6 1.035.11.306.185.768-.161 1.115-.317.316-.738.303-1.054.225-.323-.081-.671-.257-1.014-.468-.692-.424-1.503-1.077-2.273-1.715l-.475-.395c-.608-.506-1.175-.98-1.65-1.326a6 6 0 0 0-.377-.259q.042.082.096.178c.272.48.696 1.075 1.143 1.701l.012.017c.433.606.887 1.242 1.188 1.773.15.266.281.539.344.789.058.225.102.608-.183.894-.245.244-.567.275-.811.254a2.8 2.8 0 0 1-.771-.21c-.512-.207-1.105-.549-1.655-.883l-.619-.382-.355-.22.192.257.01.014c.258.343.534.711.723 1.018.094.153.185.321.237.481.026.08.052.187.048.307a.63.63 0 0 1-.182.425.72.72 0 0 1-.559.202 1.3 1.3 0 0 1-.415-.105c-.223-.092-.471-.241-.677-.364L4 13.035q-.207-.126-.367-.214.03.135.083.29a6 6 0 0 0 .257.634l.019.04.005.01.001.002-.447.224-.448.223-.001-.002-.002-.004-.007-.014-.024-.051-.081-.178a7 7 0 0 1-.221-.568 3.3 3.3 0 0 1-.162-.704c-.018-.203-.02-.565.238-.824a.72.72 0 0 1 .56-.202c.155.009.3.057.415.104.167.069.347.169.514.267l-.297-.399-.011-.014c-.257-.343-.533-.711-.722-1.018a2.4 2.4 0 0 1-.238-.481.9.9 0 0 1-.048-.306.63.63 0 0 1 .181-.426.63.63 0 0 1 .501-.171c.115.01.225.044.312.077.18.068.391.179.606.301.272.156.598.358.936.568q.292.182.585.361c.549.334 1.081.636 1.511.811q.238.095.385.124a3 3 0 0 0-.211-.433c-.271-.48-.695-1.074-1.143-1.701l-.012-.017c-.433-.606-.887-1.242-1.187-1.773-.15-.265-.282-.538-.345-.789-.057-.225-.102-.608.183-.893a.73.73 0 0 1 .57-.203c.162.01.317.063.449.122.266.117.571.316.884.544.503.368 1.105.869 1.715 1.378l.458.381c.777.644 1.535 1.251 2.158 1.633.314.193.559.306.732.349l.047.01-.014-.04q-.099-.281-.466-.783c-.467-.639-1.169-1.412-1.904-2.221l-.084-.092c-.751-.827-1.528-1.689-2.043-2.42-.254-.362-.471-.729-.579-1.068-.104-.332-.143-.784.199-1.126a.93.93 0 0 1 .751-.254c.234.019.47.104.687.208.436.209.926.56 1.398.943.95.768 1.936 1.755 2.46 2.279",
      ],
    },
    "fuel-can": {
      symbolId: "nvidia-react-gui-icons-v1-fill-fuel-can",
      viewBox: "0 0 16 16",
      paths: [
        "m14.129 2.947-1.87.501-.552.552.5.5-1 1 .793.793V13H4V4.293L5.293 3h3.414l.793.793 1-1 .5.5.741-.741 2.13-.571ZM5 4.707V5h3V4H5.707Zm4.354 3.647 1-1-.708-.708-1 1Zm-2 2-.708-.708-1 1 .708.708Zm-1-3.708-.708.708 1 1 .708-.708Zm4 4-1-1-.708.708 1 1ZM10.207 4.5l.293.293.293-.293-.293-.293Z",
      ],
    },
    "fuel-pump": {
      symbolId: "nvidia-react-gui-icons-v1-fill-fuel-pump",
      viewBox: "0 0 16 16",
      paths: [
        "M5 6h3V5H5z",
        "M10 3v8h2.293l.707-.707V7h-1V4.707l-.854-.853.708-.708L14 5.293v5.414L12.707 12H10v2H3V3ZM4 7h5V4H4Z",
      ],
    },
    fullscreen: {
      symbolId: "nvidia-react-gui-icons-v1-fill-fullscreen",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2v1H3.707l3.647 3.646-.708.708L3 3.707V6H2V2zm6.293 1H10V2h4v4h-1V3.707L9.354 7.354l-.708-.708zM3 12.293V10H2v4h4v-1H3.707l3.647-3.646-.708-.708zm5.646-2.939L12.293 13H10v1h4v-4h-1v2.293L9.354 8.646z",
      ],
    },
    "fullscreen-exit": {
      symbolId: "nvidia-react-gui-icons-v1-fill-fullscreen-exit",
      viewBox: "0 0 16 16",
      paths: [
        "m.646 1.354.708-.708L5 4.293V2h1v4H2V5h2.293ZM10 2h1v2.293L14.646.646l.708.708L11.707 5H14v1h-4Zm-8 8h4v4H5v-2.293l-3.646 3.647-.708-.708L4.293 11H2Zm8 0h4v1h-2.293l3.647 3.646-.708.708L11 11.707V14h-1Z",
      ],
    },
    function: {
      symbolId: "nvidia-react-gui-icons-v1-fill-function",
      viewBox: "0 0 16 16",
      paths: [
        "M8.32 4.539a.727.727 0 0 1 1.43.188h1a1.727 1.727 0 0 0-3.396-.447L6.625 7H5.5v1h.857l-.927 3.46A.728.728 0 0 1 4 11.272H3a1.729 1.729 0 0 0 3.396.447L7.393 8H8.5V7h-.839zM10.293 11 8.646 9.354l.708-.708L11 10.293l1.646-1.647.708.708L11.707 11l1.647 1.646-.708.708L11 11.707l-1.646 1.647-.708-.708z",
      ],
    },
    "gallery-strip": {
      symbolId: "nvidia-react-gui-icons-v1-fill-gallery-strip",
      viewBox: "0 0 16 16",
      paths: [
        "M12 2H4v8h8zM3 12H1v2h2zm3 0H4v2h2zm3 0H7v2h2zm3 0h-2v2h2zm3 0h-2v2h2z",
      ],
    },
    gamepad: {
      symbolId: "nvidia-react-gui-icons-v1-fill-gamepad",
      viewBox: "0 0 16 16",
      paths: [
        "m6 3.312 1.565.42h.87l1.566-.42 2.894.776 1.938 6.162-.638 2.38-1.626.665-1.441-.387-.536-2L8 10.214l-2.592.694-.536 2-1.441.387-1.626-.665-.638-2.38 1.938-6.162ZM10.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 10.5 6M5 6v1H4v1h1v1h1V8h1V7H6V6Z",
      ],
    },
    "gamepad-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-gamepad-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-1.064-1.065-.013.006-1.441-.387-.393-1.466-.677-.677L8 10.214l-2.592.694-.536 2-1.441.387-1.626-.665-.638-2.38 1.938-6.162.218-.058-1.677-1.676ZM5.293 6H5v1H4v1h1v1h1V8h1v-.293L6.293 7H6v-.293Zm9.54 4.25-.371 1.384-2.99-2.991a1.5 1.5 0 1 0-2.115-2.114L6.193 3.364l1.373.368h.869l1.566-.42 2.894.776z",
      ],
    },
    "gamepad-start": {
      symbolId: "nvidia-react-gui-icons-v1-fill-gamepad-start",
      viewBox: "0 0 16 16",
      paths: [
        "m5.998 2.312 1.566.42h.869l1.565-.42 2.894.776 1.937 6.16-.241.9-3.748-2.187A1.5 1.5 0 1 0 9 6.5v2.98l-1.002-.268-2.591.694-.536 2-1.441.386-1.625-.664-.638-2.38 1.938-6.16ZM5 6H4v1h1v1h1V7h1V6H6V5H5Z",
        "M10.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m4.421 5.5L10 8.629v5.741z",
      ],
    },
    generate: {
      symbolId: "nvidia-react-gui-icons-v1-fill-generate",
      viewBox: "0 0 16 16",
      paths: [
        "M4 1a2 2 0 0 1 1.934 2.501l1.118.622a2 2 0 0 1 3.382 1.878l1.118.622a2 2 0 1 1 0 2.753l-1.118.622a2 2 0 0 1-3.382 1.878l-1.118.622a2 2 0 1 1-.487-.876l1.118-.621A2 2 0 0 1 6.5 10.5q.002-.26.065-.502l-1.118-.621a2 2 0 1 1 0-2.755l1.118-.621A2 2 0 0 1 6.5 5.5q.002-.26.065-.502l-1.118-.621A2 2 0 1 1 4 1m5.947 5.876a1.99 1.99 0 0 1-2.895 0l-1.118.621C5.975 7.658 6 7.826 6 8c0 .173-.025.341-.066.501l1.118.621a1.99 1.99 0 0 1 2.895 0l1.118-.621A2 2 0 0 1 11 8q.002-.26.065-.502Z",
      ],
    },
    gift: {
      symbolId: "nvidia-react-gui-icons-v1-fill-gift",
      viewBox: "0 0 16 16",
      paths: [
        "M1.5 4h2.768A2 2 0 0 1 6 1c.513 0 1.165.157 1.681.727q.177.193.319.442.142-.249.319-.442C8.835 1.157 9.487 1 10 1a2 2 0 0 1 1.732 3H14.5v2h-5V5h-3v1h-5ZM11 3a1 1 0 0 0-1-1c-.315 0-.663.093-.94.398-.24.265-.476.744-.542 1.602H10a1 1 0 0 0 1-1M6 2a1 1 0 0 0 0 2h1.482c-.066-.858-.302-1.337-.542-1.602A1.23 1.23 0 0 0 6 2m.5 5v3.5l1.5-1 1.5 1V7H14v7H2V7z",
      ],
    },
    government: {
      symbolId: "nvidia-react-gui-icons-v1-fill-government",
      viewBox: "0 0 16 16",
      paths: [
        "M10 1v2H8.5v1.031A4 4 0 0 1 12 8v3h1v2h1v1H2v-1h1v-2h1V8a4 4 0 0 1 3.5-3.969V1ZM5.75 8.5H5V11h.75Zm1.75 0h-.75V11h.75Zm1.75 0H8.5V11h.75Zm1.75 0h-.75V11H11Z",
      ],
    },
    gpu: {
      symbolId: "nvidia-react-gui-icons-v1-fill-gpu",
      viewBox: "0 0 16 16",
      paths: [
        "M1.5 6.5v-5h5V2h3v-.5h5v5H14v3h.5v5h-5V14h-3v.5h-5v-5H2v-3ZM4 4v2h2V4Zm3 0v2h2V4Zm3 0v2h2V4ZM4 7v2h2V7Zm3 0v2h2V7Zm3 0v2h2V7Zm-6 3v2h2v-2Zm3 0v2h2v-2Zm3 0v2h2v-2Z",
      ],
    },
    "gpu-card": {
      symbolId: "nvidia-react-gui-icons-v1-fill-gpu-card",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 8a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0",
        "M2 5H1V4h2v1h11v6H9v1H4v-1H3v1H2Zm9 1.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 11 6.5",
      ],
    },
    "gpu-card-multi": {
      symbolId: "nvidia-react-gui-icons-v1-fill-gpu-card-multi",
      viewBox: "0 0 16 16",
      paths: [
        "M10 5.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
        "M0 3V2h2v1h11v6H8v1H3V9H2v1H1V3Zm8.5 3a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 8.5 6",
        "M15 11V5.5h-1V10H9v1H5v1h5v-1z",
      ],
    },
    "gpu-card-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-gpu-card-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L10.293 11H9v1H4v-1H3v1H2V5H1V4h2v1h1.293L1.646 2.354zM14 11h-.172l-1.857-1.857a1.5 1.5 0 1 0-2.114-2.114L7.828 5H14z",
        "M11.5 8a.5.5 0 0 1-.243.429l-.686-.686A.5.5 0 0 1 11.5 8",
      ],
    },
    "gpu-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-gpu-off",
      viewBox: "0 0 16 16",
      paths: [
        "m.854.146 15 15-.708.708-1.353-1.354H9.5V14h-3v.5h-5v-5H2v-3h-.5V2.207L.146.854ZM4 10v2h2v-2Zm3 0v2h2v-2ZM4 7v2h2V7Zm6 3.707V12h1.293Zm-6-6V6h1.293Zm3 3V9h1.293ZM14.5 9.5v2.172l-2.5-2.5V7H9.828L9 6.172V4H6.828l-2.5-2.5H6.5V2h3v-.5h5v5H14v3ZM10 4v2h2V4Z",
      ],
    },
    "gpu-sync": {
      symbolId: "nvidia-react-gui-icons-v1-fill-gpu-sync",
      viewBox: "0 0 16 16",
      paths: [
        "M15 11a3 3 0 0 1-3 3h-.293l.647.646-.708.708L9.793 13.5l1.853-1.854.708.708-.647.646H12a2 2 0 0 0 2-2zm-.793-2.5-1.853 1.854-.708-.708.647-.646H12a2 2 0 0 0-2 2H9a3 3 0 0 1 3-3h.293l-.647-.646.708-.708z",
        "M3 3h11v2.916A5 5 0 0 0 7.024 10H4V9H3v1H2V3H1V2h2z",
      ],
    },
    graduate: {
      symbolId: "nvidia-react-gui-icons-v1-fill-graduate",
      viewBox: "0 0 16 16",
      paths: [
        "M14.646 5.746 8 2.423 1.354 5.746 8 8.889l5-2.365V12h1V6.051z",
        "M4 10V8.103l4 1.892 4-1.892V10c0 .894-.508 1.656-1.235 2.175S9.059 13 8 13s-2.038-.306-2.765-.825S4 10.894 4 10",
      ],
    },
    "graph-node": {
      symbolId: "nvidia-react-gui-icons-v1-fill-graph-node",
      viewBox: "0 0 16 16",
      paths: [
        "M13 3H3v3h.5a1.5 1.5 0 0 1 0 3H3v4h10V9.95a2.5 2.5 0 0 1-3-2.45 2.5 2.5 0 0 1 3-2.45z",
        "M11 7.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 11 7.5",
      ],
    },
    "graph-node-connect": {
      symbolId: "nvidia-react-gui-icons-v1-fill-graph-node-connect",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h5v2.05A2.5 2.5 0 0 0 4 7.5a2.5 2.5 0 0 0 3 2.45V13H2z",
        "M6.5 6a1.5 1.5 0 1 0 1.415 2h5.378l-1.647 1.646.708.708L15.207 7.5l-2.853-2.854-.708.708L13.293 7H7.915A1.5 1.5 0 0 0 6.5 6",
      ],
    },
    "graph-node-delete": {
      symbolId: "nvidia-react-gui-icons-v1-fill-graph-node-delete",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h5v2.05A2.5 2.5 0 0 0 4 7.5a2.5 2.5 0 0 0 3 2.45V13H2z",
        "M6.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 6.5 6m4.354 3.854L12.5 8.207l1.646 1.647.708-.708L13.207 7.5l1.647-1.646-.708-.708L12.5 6.793l-1.646-1.647-.708.708L11.793 7.5l-1.647 1.646z",
      ],
    },
    grass: {
      symbolId: "nvidia-react-gui-icons-v1-fill-grass",
      viewBox: "0 0 16 16",
      paths: [
        "M9.97 10.108c.113-.311.223-.513.297-.63l.093-.131-.714-.7s-.159.192-.225.297c-.114.18-.254.447-.391.823-.247.679-.481 1.713-.523 3.233h-1.04c-.13-.978-.619-1.783-1.079-2.348a7 7 0 0 0-.745-.774c-.114-.1-.23-.198-.354-.286l-.576.817q.139.104.269.22c.172.151.401.373.63.654.374.459.722 1.045.843 1.717H5.439c-.174-.706-.681-1.276-1.106-1.655a6.4 6.4 0 0 0-.746-.572c-.113-.074-.346-.211-.346-.211s-.421.8-.464.886a5.6 5.6 0 0 1 .89.642c.314.281.575.592.717.91H2v1h12v-1h-2.455c.121-.672.469-1.258.843-1.717.229-.281.458-.503.63-.654.087-.077.271-.221.271-.221l-.578-.816s-.24.186-.354.286a6.6 6.6 0 0 0-.745.774c-.46.565-.949 1.37-1.079 2.348H9.507c.042-1.415.259-2.332.463-2.892",
      ],
    },
    gravel: {
      symbolId: "nvidia-react-gui-icons-v1-fill-gravel",
      viewBox: "0 0 16 16",
      paths: [
        "m7.646 1.646-1 1 .708.708 1-1zM11.191 2h1.618l.799 1.599L12 5.207l-1.608-1.608zM5.635 3.928 7 5.293V7.39l-2.653.664-1.419-1.419.677-2.03zM10.793 8 9.428 9.365l.677 2.03 2.03.677 1.419-1.419L12.89 8zm-4.892.892 1.599.799v1.618l-1.599.799L4.293 10.5zm2.745-.538-1-1 .708-.708 1 1zm-1 5 1 1 .708-.708-1-1zm-6-3.708 1-1 .708.708-1 1zm8-5.5-1 1 .708.708 1-1z",
      ],
    },
    grid: {
      symbolId: "nvidia-react-gui-icons-v1-fill-grid",
      viewBox: "0 0 16 16",
      paths: [
        "M5 5V2h1v3h4V2h1v3h3v1h-3v4h3v1h-3v3h-1v-3H6v3H5v-3H2v-1h3V6H2V5Zm1 1v4h4V6Z",
      ],
    },
    "grid-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-grid-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.353 1.646 12.001 12-.708.708L11 11.707V14h-1v-3H6v3H5v-3H2v-1h3V6H2V5h2.293L1.646 2.354ZM6 6.707V10h3.293ZM11 6v2.172l-1-1V6H8.828l-1-1H10V2h1v3h3v1z",
      ],
    },
    "grip-area": {
      symbolId: "nvidia-react-gui-icons-v1-fill-grip-area",
      viewBox: "0 0 16 16",
      paths: [
        "M3.5 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-9 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-9 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-9 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "grip-corner": {
      symbolId: "nvidia-react-gui-icons-v1-fill-grip-corner",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 12.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-6 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      ],
    },
    "grip-edge-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-fill-grip-edge-horizontal",
      viewBox: "0 0 16 16",
      paths: [
        "M3.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-9 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "grip-edge-vertical": {
      symbolId: "nvidia-react-gui-icons-v1-fill-grip-edge-vertical",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "grip-mini": {
      symbolId: "nvidia-react-gui-icons-v1-fill-grip-mini",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    group: {
      symbolId: "nvidia-react-gui-icons-v1-fill-group",
      viewBox: "0 0 16 16",
      paths: [
        "M5 1H1v4h1V2h3zm6 1h3v3h1V1h-4zM5 4a2 2 0 1 0-.001 3.999A2 2 0 0 0 5 4m6 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 11 4M8 9a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 9m-6 2v3h3v1H1v-4zm9 3v1h4v-4h-1v3z",
      ],
    },
    "h-align-center": {
      symbolId: "nvidia-react-gui-icons-v1-fill-h-align-center",
      viewBox: "0 0 16 16",
      paths: ["M7.5 4V2h1v2H13v3H8.5v1H11v3H8.5v3h-1v-3H5V8h2.5V7H3V4z"],
    },
    "h-align-left": {
      symbolId: "nvidia-react-gui-icons-v1-fill-h-align-left",
      viewBox: "0 0 16 16",
      paths: ["M3 2v12h1V2zm2 2h9v3H5zm0 4h6v3H5z"],
    },
    "h-align-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-h-align-right",
      viewBox: "0 0 16 16",
      paths: ["M12 2v12h1V2zm-1 2H2v3h9zm0 4H5v3h6z"],
    },
    "hand-closed": {
      symbolId: "nvidia-react-gui-icons-v1-fill-hand-closed",
      viewBox: "0 0 16 16",
      paths: [
        "M10.5 5c-.267 0-.518.07-.736.192a1.498 1.498 0 0 0-2.528 0A1.503 1.503 0 0 0 5 6.5v.55A2.5 2.5 0 0 0 3 9.5v1.038c0 .664.264 1.299.732 1.768L6.427 15H10.5a3.5 3.5 0 0 0 3.5-3.5V7a1.5 1.5 0 0 0-2.236-1.308A1.5 1.5 0 0 0 10.5 5",
      ],
    },
    "hand-open": {
      symbolId: "nvidia-react-gui-icons-v1-fill-hand-open",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 1A1.5 1.5 0 0 0 7 2.5v.085A1.5 1.5 0 0 0 5 4v4.499a20 20 0 0 0-.524-.263c-.595-.276-1.375-.41-1.988.203-.6.6-.561 1.473-.026 2.095.197.228 1.149 1.305 2.046 2.32l1.214 1.37.687.776H10.5a3.5 3.5 0 0 0 3.5-3.5V5a1.5 1.5 0 0 0-2-1.415V3.5a1.5 1.5 0 0 0-2.052-1.395A1.5 1.5 0 0 0 8.5 1",
      ],
    },
    "hand-pinch": {
      symbolId: "nvidia-react-gui-icons-v1-fill-hand-pinch",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1H5v1h1.293L2 6.293V5H1v3h3V7H2.707L7 2.707V4h1zm0 4.5a1.5 1.5 0 0 1 3 0v1.616l2.147.576A2.5 2.5 0 0 1 15 10.106V12.5a2.5 2.5 0 0 1-2.5 2.5H8.523l-.149-.168a884 884 0 0 1-2.912-3.298c-.535-.622-.575-1.495.025-2.095.614-.613 1.394-.479 1.988-.203.083.038.269.132.525.263z",
      ],
    },
    "hand-point": {
      symbolId: "nvidia-react-gui-icons-v1-fill-hand-point",
      viewBox: "0 0 16 16",
      paths: [
        "M8 3.5v1.085a1.504 1.504 0 0 1 1.764.607 1.503 1.503 0 0 1 2 .5A1.503 1.503 0 0 1 14 7v4.5a3.5 3.5 0 0 1-3.5 3.5H6.427l-2.695-2.694A2.5 2.5 0 0 1 3 10.538V9.5c0-1.209.859-2.218 2-2.45V3.5a1.5 1.5 0 0 1 3 0",
      ],
    },
    hdmi: {
      symbolId: "nvidia-react-gui-icons-v1-fill-hdmi",
      viewBox: "0 0 16 16",
      paths: ["M15 10h-1.293l-1 1H3.293l-1-1H1V6h14ZM4 8v1h8V8Z"],
    },
    head: {
      symbolId: "nvidia-react-gui-icons-v1-fill-head",
      viewBox: "0 0 16 16",
      paths: [
        "M2 7a5.5 5.5 0 0 1 10.881-1.145l1.78 4.452-1.717.572-.52 3.121H8.366l-.577-1H3v-2.838C2.37 9.268 2 8.176 2 7",
      ],
    },
    header: {
      symbolId: "nvidia-react-gui-icons-v1-fill-header",
      viewBox: "0 0 16 16",
      paths: ["M5 3h1v4h4V3h1v9h-1V8H6v4H5Z"],
    },
    headset: {
      symbolId: "nvidia-react-gui-icons-v1-fill-headset",
      viewBox: "0 0 16 16",
      paths: [
        "M2.066 7H1.64L.973 9l.667 2H4V7h-.924c.171-1.086.624-1.978 1.285-2.639C5.214 3.507 6.455 3 8 3s2.786.507 3.639 1.361c.661.661 1.114 1.553 1.285 2.639H12v4h1v2H9v-.5H7v2h2V14h5v-3h.36l.667-2-.667-2h-.426c-.18-1.339-.727-2.486-1.588-3.346C11.278 2.586 9.769 2 8 2s-3.278.586-4.346 1.654C2.793 4.514 2.246 5.661 2.066 7",
      ],
    },
    health: {
      symbolId: "nvidia-react-gui-icons-v1-fill-health",
      viewBox: "0 0 16 16",
      paths: ["M10 3H6v3H3v4h3v3h4v-3h3V6h-3z"],
    },
    heart: {
      symbolId: "nvidia-react-gui-icons-v1-fill-heart",
      viewBox: "0 0 16 16",
      paths: [
        "M12.992 4.008a3.44 3.44 0 0 0-4.672-.18l-.012.011L8 4.141l-.308-.302-.012-.011A3.44 3.44 0 0 0 2.828 8.68l.012.014L8 13.866l5.16-5.172.012-.014a3.44 3.44 0 0 0-.18-4.672",
      ],
    },
    "heart-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-heart-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-3.07-3.071L8 13.866 2.84 8.694l-.012-.014a3.44 3.44 0 0 1 .331-4.814L1.646 2.354zM13.16 8.694l-.818.82-6.489-6.489a3.4 3.4 0 0 1 1.827.803l.012.011.308.302.308-.302.013-.011a3.44 3.44 0 0 1 4.851 4.852z",
      ],
    },
    helicopter: {
      symbolId: "nvidia-react-gui-icons-v1-fill-helicopter",
      viewBox: "0 0 16 16",
      paths: [
        "M2 5V4h12v1H8.5v1.742c1.173.312 2.482.684 3.685 1.035A1.502 1.502 0 0 1 15 8.5a1.5 1.5 0 0 1-2.843.67c-.964.248-1.784.74-2.671 1.271l-.18.108c-.958.573-1.996 1.164-3.306 1.373V13h4v1H2.793l-1.147-1.146.708-.708.853.854H5v-1a3 3 0 0 1-3-3c0-1.641 1.208-3 3-3 .296 0 .778.085 1.329.205.348.076.744.17 1.171.278V5Zm11.079 3.23-.044.453a.5.5 0 1 0 .044-.453",
      ],
    },
    "help-circle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-help-circle",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m6-2a1 1 0 0 1 2 0c0 .284-.069.473-.159.619-.097.156-.233.286-.411.434l-.093.077c-.15.122-.338.274-.482.443A1.38 1.38 0 0 0 7.5 8.5V10h1V8.5c0-.104.032-.18.114-.276.081-.094.179-.175.319-.29l.137-.112c.197-.164.436-.378.62-.676.191-.307.31-.68.31-1.146a2 2 0 1 0-4 0Zm.5 5v1h1v-1Z",
      ],
    },
    "high-kick": {
      symbolId: "nvidia-react-gui-icons-v1-fill-high-kick",
      viewBox: "0 0 16 16",
      paths: [
        "m9.759 4.876-3.293.884 2.115 2.116 5.669-3.273.5.866L8.999 8.79V15L8 14.999l-.001-6.291L5.5 6.207 4.13 7.578l1.299 2.165-.858.514-1.7-2.834 2.37-2.371 2.999-.804L7.087 2.25l.866-.5z",
        "M4.5 2a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4.5 2",
      ],
    },
    "high-quality": {
      symbolId: "nvidia-react-gui-icons-v1-fill-high-quality",
      viewBox: "0 0 16 16",
      paths: [
        "M0 3h16v11H0Zm12.586 6.879a2.5 2.5 0 1 0-.707.707l.767.768.708-.708ZM3 11h1V9h2v2h1V6H6v2H4V6H3Zm7.5-4a1.5 1.5 0 0 1 1.354 2.147l-.5-.501-.708.708.501.5A1.5 1.5 0 1 1 10.5 7",
      ],
    },
    highlighter: {
      symbolId: "nvidia-react-gui-icons-v1-fill-highlighter",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1.793 14.207 4.5l-7.5 7.5h-1l-1 1H3.293l-1-1L4 10.293v-1Zm-7 9.414L3.707 12h.586l.5-.5Z",
      ],
    },
    hill: {
      symbolId: "nvidia-react-gui-icons-v1-fill-hill",
      viewBox: "0 0 16 16",
      paths: [
        "M10.588 6.06a1.5 1.5 0 0 0-2.231-.124L7.206 7.087l.062.059L11.121 11h3.419zm-4.09 1.735q.032.028.063.059L9.707 11H1.293l3.146-3.146a1.5 1.5 0 0 1 2.059-.059",
      ],
    },
    history: {
      symbolId: "nvidia-react-gui-icons-v1-fill-history",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4a4 4 0 0 0-4 4v1.293l1.146-1.147.708.708L3.5 11.207 1.146 8.854l.708-.708L3 9.293V8a5 5 0 1 1 3.706 4.831l.258-.966Q7.46 11.998 8 12a4 4 0 0 0 0-8m.5 1v2.616l2.528.678-.259.966L7.5 8.384V5Z",
      ],
    },
    hit: {
      symbolId: "nvidia-react-gui-icons-v1-fill-hit",
      viewBox: "0 0 16 16",
      paths: [
        "M12 13h-1v-2h1zm2.768-1.44-.708.708-1.414-1.414.708-.708zM9.25 6.5H6v1h4.519l.285 1.067L9.884 12H4.293L4 11.707V5.293L4.293 5h4.555zM3 11H2V6h1zm12-2h-2V8h2zm-.232-3.561-1.414 1.415-.708-.708 1.414-1.414zM12 6h-1V4h1z",
      ],
    },
    home: {
      symbolId: "nvidia-react-gui-icons-v1-fill-home",
      viewBox: "0 0 16 16",
      paths: [
        "M14.854 8.146 8 1.293 1.146 8.146l.708.708L3 7.707V14h4v-4h2v4h4V7.707l1.146 1.147z",
      ],
    },
    "home-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-home-off",
      viewBox: "0 0 16 16",
      paths: [
        "M13 10.172V7.707l1.146 1.147.708-.708L8 1.293 6.061 3.232zm0 3.535.646.647.708-.708-12-12-.708.708L4.293 5 1.146 8.146l.708.708L3 7.707V14h4v-4h2v4h4z",
      ],
    },
    "hot-air-balloon": {
      symbolId: "nvidia-react-gui-icons-v1-fill-hot-air-balloon",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1c-1.341 0-2.586.409-3.505 1.186C3.568 2.971 3 4.111 3 5.5c0 1.447.873 2.572 1.632 3.396.173.187.345.365.504.528l.056.058c.177.182.332.344.463.494.132.151.225.273.283.374.06.103.062.148.062.15v.5h1v-.5c0-.581-.192-1.016-.462-1.627l-.122-.277C6.089 7.84 5.75 6.917 5.75 5.5c0-1.36.191-2.442.547-3.204C6.653 1.533 7.229 1 8 1m1 10v-.5c0-.581.192-1.016.462-1.627l.122-.277c.327-.756.666-1.679.666-3.096 0-1.36-.191-2.442-.547-3.204C9.347 1.533 8.771 1 8 1c1.341 0 2.586.409 3.505 1.186C12.432 2.971 13 4.111 13 5.5c0 1.447-.873 2.572-1.632 3.396-.173.187-.345.365-.504.528l-.056.058c-.176.182-.332.344-.463.494a2.5 2.5 0 0 0-.283.374c-.06.103-.062.148-.062.15v.5zm-3.5 2v-1h5v1H10v2H6v-2z",
        "M6.75 5.5c0-1.287.184-2.205.453-2.781C7.472 2.144 7.771 2 8 2s.528.144.797.719c.269.576.453 1.494.453 2.781 0 1.23-.286 2.013-.584 2.698l-.114.258C8.285 9.055 8 9.693 8 10.5c0-.807-.285-1.445-.552-2.044l-.114-.258C7.036 7.513 6.75 6.73 6.75 5.5",
      ],
    },
    hourglass: {
      symbolId: "nvidia-react-gui-icons-v1-fill-hourglass",
      viewBox: "0 0 16 16",
      paths: [
        "M13 1H3v2h10zM5.521 8l-2.31-4h9.578l-2.31 4 2.31 4H3.211Zm3.804 0 1.732-3H4.943l1.732 3-1.732 3h6.114ZM3 15v-2h10v2z",
      ],
    },
    "hourglass-end": {
      symbolId: "nvidia-react-gui-icons-v1-fill-hourglass-end",
      viewBox: "0 0 16 16",
      paths: [
        "M13 1H3v2h10zM5.521 8l-2.31-4h9.578l-2.31 4 2.31 4H3.211Zm5.536-3H4.943l1.732 3h2.65ZM3 15v-2h10v2z",
      ],
    },
    "hourglass-mid": {
      symbolId: "nvidia-react-gui-icons-v1-fill-hourglass-mid",
      viewBox: "0 0 16 16",
      paths: [
        "M13 1H3v2h10zM5.521 8l-2.31-4h9.578l-2.31 4 2.31 4H3.211Zm-.578-3 .866 1.5h4.382l.866-1.5Zm6.114 6-.866-1.5H5.809L4.943 11ZM3 15v-2h10v2z",
      ],
    },
    "hourglass-start": {
      symbolId: "nvidia-react-gui-icons-v1-fill-hourglass-start",
      viewBox: "0 0 16 16",
      paths: [
        "M13 1H3v2h10zM5.521 8l-2.31-4h9.578l-2.31 4 2.31 4H3.211Zm3.804 0h-2.65l-1.732 3h6.114ZM3 15v-2h10v2z",
      ],
    },
    hud: {
      symbolId: "nvidia-react-gui-icons-v1-fill-hud",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v8H8.902l.268 1H11v1H5v-1h1.831l.268-1H2Zm5.51 6V8H4.5v1ZM12 6V5h-1v1Zm-2 3V8H9v1Zm2 0V8h-1v1Zm-4 2.5-.134.5h.268Z",
      ],
    },
    hydrant: {
      symbolId: "nvidia-react-gui-icons-v1-fill-hydrant",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 8.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0",
        "M8.5 2.541A3 3 0 0 1 10.958 5h.542v1H11v1h2v1h.5v1H13v1h-2v3h1v1H4v-1h1v-3H3V9h-.5V8H3V7h2V6h-.5V5h.541A3.005 3.005 0 0 1 7.5 2.541V2h1ZM8 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8 7m2.5-1V5h-5v1Z",
      ],
    },
    identification: {
      symbolId: "nvidia-react-gui-icons-v1-fill-identification",
      viewBox: "0 0 16 16",
      paths: [
        "M6 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 6m-.08 3h4.16l1.072 4H4.849z",
        "M5 0v1h6V0h1v1h2v14H2V1h2V0Zm6 2H5v1H4V2H3v12h10V2h-1v1h-1Z",
      ],
    },
    image: {
      symbolId: "nvidia-react-gui-icons-v1-fill-image",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 5",
        "M14 2v12H2V2ZM3 8.211l3.534 2.036 3.483-2.007L13 9.959V3H3Z",
      ],
    },
    ime: {
      symbolId: "nvidia-react-gui-icons-v1-fill-ime",
      viewBox: "0 0 16 16",
      paths: [
        "m11.947 4.276.362.724H15v2.5h-1V6H9v1.5H8V5h3.191l-.138-.276z",
        "m13.416 7.277-.001.002-.003.005-.01.014-.037.053q-.048.07-.134.188a11 11 0 0 1-.476.599 7.3 7.3 0 0 1-.862.862H15v1h-3.5v.5A1.5 1.5 0 0 1 10 12h-.5v-1h.5a.5.5 0 0 0 .5-.5V10H8V9h2.5v-.309l.276-.138c.24-.12.494-.32.737-.553H9.5V7h2.586c.132 0 .26-.053.353-.146l.207-.208zM4.451 4.5l2.06 5.319-.933.362-.644-1.665H3.108l-.642 1.664-.933-.36L3.585 4.5Zm.096 3.016-.528-1.362-.525 1.362Z",
      ],
    },
    import: {
      symbolId: "nvidia-react-gui-icons-v1-fill-import",
      viewBox: "0 0 16 16",
      paths: [
        "M3 5h2v1H4v6h8V6h-1V5h2v8H3Zm4.5 3.793V3h1v5.793l1.146-1.147.708.708L8 10.707 5.646 8.354l.708-.708Z",
      ],
    },
    "import-image": {
      symbolId: "nvidia-react-gui-icons-v1-fill-import-image",
      viewBox: "0 0 16 16",
      paths: [
        "M10.354 3.354 8 5.707 5.646 3.354l.708-.708L7.5 3.793V1h1v2.793l1.146-1.147z",
        "M3 5h2v1H4v3.211l2.8 1.617 2.85-1.645L12 10.54V6h-1V5h2v9H3z",
        "M5.454 7.773a1.319 1.319 0 1 1 2.637.001 1.319 1.319 0 0 1-2.637-.001",
      ],
    },
    inbox: {
      symbolId: "nvidia-react-gui-icons-v1-fill-inbox",
      viewBox: "0 0 16 16",
      paths: [
        "M13 10.435V14H3v-3.565L3.652 8h8.696ZM4.151 10 4 11h3.207l.793.793.793-.793H12l-.151-1-.269-1H4.42ZM8.5 4.793l1.146-1.147.708.708L8 6.707 5.646 4.354l.708-.708L7.5 4.793V2h1z",
      ],
    },
    infinity: {
      symbolId: "nvidia-react-gui-icons-v1-fill-infinity",
      viewBox: "0 0 16 16",
      paths: [
        "M2.295 5h3.414l2.293 2.293L10.295 5h3.414l1.293 1.293v3.414L13.709 11h-3.414L8.002 8.707 5.709 11H2.295L1.002 9.707V6.293Zm6.414 3 2 2h2.586l.707-.707V6.707L13.295 6h-2.586ZM7.295 8l-2-2H2.709l-.707.707v2.586l.707.707h2.586Z",
      ],
    },
    "info-circle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-info-circle",
      viewBox: "0 0 16 16",
      paths: ["M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.5 4V6h-1v6Zm0-7V4h-1v1Z"],
    },
    instance: {
      symbolId: "nvidia-react-gui-icons-v1-fill-instance",
      viewBox: "0 0 16 16",
      paths: [
        "m8 7.369 1.438-.83.5.866-1.438.83v1.66h-1v-1.66l-1.438-.83.5-.866ZM4 6.214v1.083H3V5.059l1.938-1.118.5.866-.938.541.938.541-.5.866Zm7.5-.866-.938-.541.5-.866L13 5.059v2.238h-1V6.214l-.938.541-.5-.866Zm-4 6.928v-1.082h1v1.082l.938-.541.5.866L8 13.72l-1.938-1.119.5-.866ZM4 10.255l1.438.83-.5.866L3 10.833V8.596h1Zm8 0V8.596h1v2.237l-1.938 1.118-.5-.866ZM8 2.173l1.938 1.118-.5.866L8 3.327l-1.438.83-.5-.866Z",
      ],
    },
    isp: {
      symbolId: "nvidia-react-gui-icons-v1-fill-isp",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a5 5 0 0 1 .5 9.975V12H10v1h4v1h-4v1H6v-1H2v-1h4v-1h1.5v-1.025A5 5 0 0 1 8 1m-.961 6h1.922Q9 6.52 9 6t-.039-1H7.039A12 12 0 0 0 7 6q0 .52.039 1M4.126 5a4 4 0 0 0 0 2h1.91a13.6 13.6 0 0 1 0-2Zm5.838 0a13.6 13.6 0 0 1 0 2h1.91a4 4 0 0 0 0-2ZM8 2l-.008.002a.1.1 0 0 0-.033.016.6.6 0 0 0-.15.145c-.13.165-.269.435-.395.813A7 7 0 0 0 7.163 4h1.674a7 7 0 0 0-.251-1.024c-.126-.378-.265-.648-.395-.813a.6.6 0 0 0-.15-.145.1.1 0 0 0-.033-.016zm0 8 .008-.002a.1.1 0 0 0 .033-.016.6.6 0 0 0 .15-.145c.13-.165.269-.435.395-.813.099-.296.184-.641.251-1.024H7.163c.067.383.152.728.251 1.024.126.378.265.648.395.813a.6.6 0 0 0 .15.145.1.1 0 0 0 .033.016Zm3.465-2H9.851a8.5 8.5 0 0 1-.316 1.34 5 5 0 0 1-.158.417A4.02 4.02 0 0 0 11.465 8m0-4a4.02 4.02 0 0 0-2.088-1.757q.086.2.158.417c.131.392.237.845.316 1.34ZM6.149 8H4.535a4.02 4.02 0 0 0 2.088 1.757 5 5 0 0 1-.158-.417A8.5 8.5 0 0 1 6.149 8M4.535 4h1.614c.079-.495.185-.948.316-1.34q.072-.218.158-.417A4.02 4.02 0 0 0 4.535 4",
      ],
    },
    "isp-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-isp-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708L13.293 14H10v1H6v-1H2v-1h4v-1h1.5v-1.025a5 5 0 0 1-4.121-6.889L.646 1.354Zm8.56 9.975a5 5 0 0 1-1.414.354V12H10v1h2.293ZM4.293 5h-.167a4 4 0 0 0 0 2h1.91a8 8 0 0 1-.017-.274Zm2.172 4.34A8.4 8.4 0 0 1 6.149 8H4.535a4.02 4.02 0 0 0 2.088 1.757 5 5 0 0 1-.158-.417M7.293 8h-.13L8 10l.008-.002a.1.1 0 0 0 .033-.016.6.6 0 0 0 .15-.145 2.4 2.4 0 0 0 .324-.615ZM13 6c0 1.17-.402 2.245-1.075 3.097l-.713-.713q.138-.184.253-.384h-.637L8.999 6.171 9 6q0-.52-.039-1H7.828L6.256 3.428q.091-.414.209-.768.072-.218.158-.417a4 4 0 0 0-1.007.545l-.713-.714A5 5 0 0 1 13 6m-3 0q0 .513-.036 1h1.91a4 4 0 0 0 0-2h-1.91Q10 5.486 10 6M8.008 2.002 8 2l-.008.002a.1.1 0 0 0-.033.016.6.6 0 0 0-.15.145c-.13.165-.269.435-.395.813A7 7 0 0 0 7.163 4h1.674a7 7 0 0 0-.251-1.024c-.126-.378-.265-.648-.395-.813a.6.6 0 0 0-.15-.145.1.1 0 0 0-.033-.016m1.369.241q.086.2.158.417c.131.392.237.845.316 1.34h1.614a4.02 4.02 0 0 0-2.088-1.757",
      ],
    },
    italic: {
      symbolId: "nvidia-react-gui-icons-v1-fill-italic",
      viewBox: "0 0 16 16",
      paths: ["M8.55 4H7.2V3h4v1H9.585l-2.143 8H8.79v1h-4v-1h1.616Z"],
    },
    iterate: {
      symbolId: "nvidia-react-gui-icons-v1-fill-iterate",
      viewBox: "0 0 16 16",
      paths: [
        "M12.354 3.646 15.207 6.5l-2.853 2.854-.708-.708L13.293 7H7a2 2 0 1 0 1.932 1.482l.966-.258q.101.373.102.776a3 3 0 1 1-3-3h6.293l-1.647-1.646ZM1 7V6h3v1Z",
      ],
    },
    "joystick-classic": {
      symbolId: "nvidia-react-gui-icons-v1-fill-joystick-classic",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 2h3v1.5h-3zm0 2.5V9h3V4.5zm4.646 4.352 2.966.794-.308 1.15 1.196.32v1.591L13.707 14H2.293L1 12.707v-1.591l5.934-1.59h2.132l1.772.475z",
      ],
    },
    key: {
      symbolId: "nvidia-react-gui-icons-v1-fill-key",
      viewBox: "0 0 16 16",
      paths: [
        "M7 5a3 3 0 1 1 1.262 2.445L6.707 9l1.647 1.646-.708.708L6 9.707l-.793.793 1.647 1.646-.708.708L4.5 11.207l-1.146 1.147-.708-.708 4.909-4.908A3 3 0 0 1 7 5m3-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 10 3",
      ],
    },
    keyboard: {
      symbolId: "nvidia-react-gui-icons-v1-fill-keyboard",
      viewBox: "0 0 16 16",
      paths: [
        "M1 3h14v9H1Zm10 7V9H5v1ZM4 6V5H3v1Zm1.5 0V5h-1v1ZM6 6h1V5H6Zm2.5 0V5h-1v1ZM9 6h1V5H9Zm2.5 0V5h-1v1Zm.5 0h1V5h-1ZM4 8V7H3v1Zm.5 0h1V7h-1ZM7 8V7H6v1Zm.5 0h1V7h-1ZM10 8V7H9v1Zm.5 0h1V7h-1ZM13 8V7h-1v1ZM3 10h1V9H3Zm9 0h1V9h-1Z",
      ],
    },
    keyframe: {
      symbolId: "nvidia-react-gui-icons-v1-fill-keyframe",
      viewBox: "0 0 16 16",
      paths: ["M13.707 8 8 2.293 2.293 8 8 13.707z"],
    },
    knife: {
      symbolId: "nvidia-react-gui-icons-v1-fill-knife",
      viewBox: "0 0 16 16",
      paths: ["M9 1.5H7.878L6 4.753V9h1.5v5h1V9H9z"],
    },
    lamp: {
      symbolId: "nvidia-react-gui-icons-v1-fill-lamp",
      viewBox: "0 0 16 16",
      paths: [
        "M2.849 8.5H7.5V14H6v1h4v-1H8.5V8.5H10V11h1V8.5h2.26l-1.876-7h-6.66z",
      ],
    },
    laptop: {
      symbolId: "nvidia-react-gui-icons-v1-fill-laptop",
      viewBox: "0 0 16 16",
      paths: ["M13 3H3v7h10zM2 12h12v-1H2z"],
    },
    laser: {
      symbolId: "nvidia-react-gui-icons-v1-fill-laser",
      viewBox: "0 0 16 16",
      paths: [
        "M11.924 2.265 9.825 5.621q.317.245.561.564l1.857-1.114.514.858-1.905 1.141q.067.209.105.43H15v1h-4.043q-.038.22-.105.429l1.905 1.142-.514.858-1.857-1.115q-.244.32-.561.564l2.099 3.357-.848.53-2.136-3.417a3 3 0 0 1-.44.109V13h-1v-2.043a3 3 0 0 1-.441-.109l-2.135 3.417-.848-.53 2.098-3.357a3 3 0 0 1-.561-.564l-1.856 1.115-.514-.858 1.904-1.142a3 3 0 0 1-.104-.429H1v-1h4.043q.037-.221.104-.43L3.243 5.929l.514-.858 1.856 1.114q.243-.319.561-.563L4.076 2.265l.848-.53 2.135 3.416a3 3 0 0 1 .441-.109V3h1v2.042q.227.038.44.109l2.136-3.416ZM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    lasso: {
      symbolId: "nvidia-react-gui-icons-v1-fill-lasso",
      viewBox: "0 0 16 16",
      paths: [
        "M10.779 3.843a5 5 0 0 0-1.802-.748l.195-.981a6 6 0 0 1 2.162.897zm-3.754-.747a5 5 0 0 0-1.803.746l-.555-.832a6 6 0 0 1 2.163-.895zM3.844 5.222a5 5 0 0 0-.748 1.802l-.981-.195a6 6 0 0 1 .897-2.162zm-.747 3.753c.127.64.378 1.254.746 1.804l-.832.555a6 6 0 0 1-.895-2.164zm2.126 3.182a5 5 0 0 0 1.802.748l-.195.981a6 6 0 0 1-2.162-.897zM12.5 7.793 14.207 9.5l-4.5 4.5H8v-1.707z",
      ],
    },
    layers: {
      symbolId: "nvidia-react-gui-icons-v1-fill-layers",
      viewBox: "0 0 16 16",
      paths: [
        "M14.992 5 8 .921 1.008 5 8 9.079z",
        "m1.238 7.926.524-.852L8 10.913l6.238-3.839.524.852L8 12.087z",
        "m1.238 10.926.524-.852L8 13.913l6.238-3.839.524.852L8 15.087z",
      ],
    },
    "layers-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-layers-off",
      viewBox: "0 0 16 16",
      paths: [
        "m14.762 10.926-.624.384-.727-.727.827-.509zm0-3-2.481 1.527-.727-.727 2.684-1.652zm-5.397 2.147-1.13-1.131L8 9.079 1.008 5l2.075-1.21-1.437-1.436.708-.708 12 12-.708.708-1.696-1.697L8 15.087l-6.762-4.161.524-.852L8 13.913l3.223-1.983-1.131-1.13L8 12.087 1.238 7.926l.524-.852L8 10.913zM14.992 5l-4.524 2.639-5.152-5.152L8 .921z",
      ],
    },
    "layout-columns": {
      symbolId: "nvidia-react-gui-icons-v1-fill-layout-columns",
      viewBox: "0 0 16 16",
      paths: ["M9.333 2H6.667v12h2.666zm1 12H13V2h-2.667zM3 2h2.667v12H3z"],
    },
    "layout-detail": {
      symbolId: "nvidia-react-gui-icons-v1-fill-layout-detail",
      viewBox: "0 0 16 16",
      paths: ["M2 2h4v12H2zm5 6.5V14h7V8.5zm7-1V2H7v5.5z"],
    },
    "layout-grid": {
      symbolId: "nvidia-react-gui-icons-v1-fill-layout-grid",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 3h3v4.5h-3zm-1 4.5V3H2v4.5zM2 8.5h3.5V13H2zm4.5 0h3V13h-3zm4 0V13H14V8.5zm3.5-1V3h-3.5v4.5z",
      ],
    },
    "layout-list": {
      symbolId: "nvidia-react-gui-icons-v1-fill-layout-list",
      viewBox: "0 0 16 16",
      paths: [
        "M5 2H2v3h3zm1 2h8V3H6zM5 6H2v3h3zm1 2h8V7H6zm-1 2H2v3h3zm1 2h8v-1H6z",
      ],
    },
    "layout-rows": {
      symbolId: "nvidia-react-gui-icons-v1-fill-layout-rows",
      viewBox: "0 0 16 16",
      paths: ["M14 3H2v2.667h12zM2 9.333V6.667h12v2.666zm0 1V13h12v-2.667z"],
    },
    library: {
      symbolId: "nvidia-react-gui-icons-v1-fill-library",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 3h-2v10h2zM5 5H3v8h2zm3-1h2v1.053l1.785-.479 2.12 7.911-1.932.518L10 5.639V13H8z",
      ],
    },
    "library-games": {
      symbolId: "nvidia-react-gui-icons-v1-fill-library-games",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2h3v1h2v1.053l1.785-.479 2.071 7.728-2.898.776L10.464 6.5H10V4H9v2.5H8V3H7v3.5H6V5H5v1.5H4V4h2Zm6.665 8.854.966-.259-1.553-5.796-.965.259Z",
        "m5.232 7.312 1.017.273h.502l1.017-.273 1.979.531 1.274 4.052-.442 1.647-1.171.479-1.075-.288-.34-1.268-1.493-.4-1.493.4-.34 1.268-1.075.288-1.171-.479-.442-1.647 1.275-4.052z",
      ],
    },
    license: {
      symbolId: "nvidia-react-gui-icons-v1-fill-license",
      viewBox: "0 0 16 16",
      paths: [
        "M1 2h14v12H1Zm6.86 7H4.14l-1 3h5.72ZM4 6a2 2 0 1 0 3.999.001A2 2 0 0 0 4 6m6 2h3V7h-3Zm0 2h3V9h-3Zm3 2v-1h-3v1Zm-2-6.5v-1h-1v1Z",
      ],
    },
    lifebuoy: {
      symbolId: "nvidia-react-gui-icons-v1-fill-lifebuoy",
      viewBox: "0 0 16 16",
      paths: [
        "M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m-4 0a2 2 0 1 0-3.999-.001A2 2 0 0 0 10 8m2.331-2.501a5.03 5.03 0 0 0-1.831-1.83l-1 1.732c.455.264.835.643 1.099 1.099ZM6.5 5.401l-1-1.732A5 5 0 0 0 3.669 5.5l1.733 1A3 3 0 0 1 6.5 5.401m5.831 5.099-1.732-1A3 3 0 0 1 9.5 10.598l1 1.733a5 5 0 0 0 1.831-1.831m-8.662 0a5.03 5.03 0 0 0 1.83 1.831L6.5 10.598A3 3 0 0 1 5.402 9.5Z",
      ],
    },
    "light-rect": {
      symbolId: "nvidia-react-gui-icons-v1-fill-light-rect",
      viewBox: "0 0 16 16",
      paths: [
        "M7.224 7.053 8 7.441l.776-.388.448.894L8 8.559l-1.224-.612z",
        "M2 2h12v12H2Zm6 2a3 3 0 0 0-3 3c0 .895.54 1.575.966 2.037q.118.129.228.241h3.612q.11-.112.229-.241C10.46 8.575 11 7.895 11 7a3 3 0 0 0-3-3m-1.333 6.818.848.849h.97l.848-.849v-.54H6.667Z",
      ],
    },
    "light-rotate": {
      symbolId: "nvidia-react-gui-icons-v1-fill-light-rotate",
      viewBox: "0 0 16 16",
      paths: [
        "M13 8a5 5 0 0 0-5-5V2a6 6 0 0 1 6 6v.293l.647-.647.707.708-1.854 1.853-1.853-1.853.707-.708.646.647ZM2.5 5.793l1.854 1.853-.707.708L3 7.707V8a5 5 0 0 0 5 5v1a6 6 0 0 1-6-6v-.293l-.646.647-.707-.708Z",
        "M8 4.375a2.5 2.5 0 0 0-2.5 2.5c0 .757.457 1.326.799 1.697.079.086.158.168.229.241l.025.025c.079.082.143.149.196.209a1 1 0 0 1 .084.107v1.484l.738.737h.858l.738-.737V9.154a1 1 0 0 1 .084-.107q.079-.088.196-.209l.025-.025c.071-.073.15-.155.229-.241.342-.371.799-.94.799-1.697a2.5 2.5 0 0 0-2.5-2.5",
      ],
    },
    lightbulb: {
      symbolId: "nvidia-react-gui-icons-v1-fill-lightbulb",
      viewBox: "0 0 16 16",
      paths: [
        "M3 7a5 5 0 0 1 10 0c0 1.447-.873 2.572-1.632 3.396a31 31 0 0 1-.504.529l-.056.057c-.176.182-.332.344-.463.494a2.5 2.5 0 0 0-.283.374c-.06.103-.062.148-.062.15v1.707L8.707 15H7.293L6 13.707V12c0-.002-.002-.047-.062-.15a2.5 2.5 0 0 0-.283-.374c-.131-.15-.286-.312-.463-.494l-.056-.057a31 31 0 0 1-.504-.529C3.873 9.572 3 8.447 3 7m5-4a4 4 0 0 0-4 4c0 1.038.627 1.914 1.368 2.718q.133.145.265.282h1.715l-.903-3.371.966-.258L8 8.568l.589-2.197.966.258L8.652 10h1.715q.133-.137.265-.282C11.373 8.914 12 8.038 12 7a4 4 0 0 0-4-4m1 10H7v.293l.707.707h.586L9 13.293Zm-2-1h.884l-.268-1H6.561q.138.171.243.35c.104.181.196.402.196.65m2.439-1H8.384l-.268 1H9c0-.248.092-.469.196-.65q.105-.179.243-.35",
      ],
    },
    lighthouse: {
      symbolId: "nvidia-react-gui-icons-v1-fill-lighthouse",
      viewBox: "0 0 16 16",
      paths: [
        "m11 7.117-.371.1-.518.137 2.05 7.648H3.839l2.048-7.648-.517-.137-.37-.1V6h6zM5.13 2.271l-.255.946.255.947-4 1.072-.26-.965 3.929-1.054L.87 2.164l.26-.966zm10-.107L11.2 3.217l3.93 1.054-.26.965-4-1.072.13-.482.124-.465-.253-.946 3.999-1.073zM8.129 1.116 10 1.618V5H6V1.618l1.87-.502.13-.034z",
      ],
    },
    lightning: {
      symbolId: "nvidia-react-gui-icons-v1-fill-lightning",
      viewBox: "0 0 16 16",
      paths: ["M10.151 2H6.116l-2.144 8H7v5.383L12.362 6H9.079z"],
    },
    "line-segment": {
      symbolId: "nvidia-react-gui-icons-v1-fill-line-segment",
      viewBox: "0 0 16 16",
      paths: [
        "M12 2a2 2 0 0 0-1.723 3.016l-5.261 5.261a2 2 0 1 0 .707.707l5.261-5.261A2 2 0 1 0 12 2",
      ],
    },
    link: {
      symbolId: "nvidia-react-gui-icons-v1-fill-link",
      viewBox: "0 0 16 16",
      paths: [
        "M2 6h5v2h2V6h5v5H9V9H7v2H2Zm4 2V7H3v3h3V9H4.5V8Zm4 1v1h3V7h-3v1h1.5v1Z",
      ],
    },
    "link-break": {
      symbolId: "nvidia-react-gui-icons-v1-fill-link-break",
      viewBox: "0 0 16 16",
      paths: [
        "m10.732 5.438 4.83 1.294-1.294 4.83-4.83-1.294.529-1.972-1.104-.315.274-.962 1.088.311Zm-5.464 0 .507 1.892 1.088-.311.274.962-1.103.315.528 1.972-4.83 1.294-1.294-4.83Zm5.66 3.133-.265.99 2.898.776.776-2.898-2.898-.776-.252.942 1.45.414-.274.962Zm-6.115-.966-.252-.942-2.898.776.777 2.898 2.897-.776-.265-.99-1.435.41-.274-.962ZM8.5 2.5V5h-1V2.5ZM5.853 3.646l1.5 1.5-.707.708-1.5-1.5Zm5.001.708-1.5 1.5-.708-.708 1.5-1.5Z",
      ],
    },
    "list-bullet": {
      symbolId: "nvidia-react-gui-icons-v1-fill-list-bullet",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 5h5V4H9zM4.5 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 12h5v-1H9z",
      ],
    },
    "list-checkmark": {
      symbolId: "nvidia-react-gui-icons-v1-fill-list-checkmark",
      viewBox: "0 0 16 16",
      paths: [
        "M14 5H9V4h5zm0 7H9v-1h5zM7.354 2.354 3.5 6.207 1.646 4.354l.708-.708L3.5 4.793l3.146-3.147Zm0 7L3.5 13.207l-1.854-1.853.708-.708L3.5 11.793l3.146-3.147Z",
      ],
    },
    "list-number": {
      symbolId: "nvidia-react-gui-icons-v1-fill-list-number",
      viewBox: "0 0 16 16",
      paths: [
        "M2 9h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3v1h1v-.01h1V14H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1v-1H3v.01H2Zm12-4H7V4h7Zm0 7H7v-1h7ZM3 2h1.01v1H4v3h.01v1H3Z",
      ],
    },
    location: {
      symbolId: "nvidia-react-gui-icons-v1-fill-location",
      viewBox: "0 0 16 16",
      paths: [
        "M5.358 12.198C4.217 10.756 3 8.742 3 6.647 3 4.227 5.264 2 8 2s5 2.227 5 4.647c0 2.095-1.217 4.109-2.358 5.551a19 19 0 0 1-1.589 1.761c-.339.332-.69.639-1.053.943l-.07-.054c-.11-.081-.302-.222-.983-.889a19 19 0 0 1-1.589-1.761M8 8.5a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 8 8.5",
      ],
    },
    "location-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-location-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.637-2.638q-.183.25-.367.482a19 19 0 0 1-1.589 1.761c-.339.332-.69.639-1.053.943-.117-.098-.209-.117-1.053-.943a19 19 0 0 1-1.589-1.761C4.217 10.756 3 8.742 3 6.647c0-.8.247-1.578.677-2.263l-2.031-2.03zM13 6.647c0 .985-.269 1.953-.673 2.851L5.493 2.664A5.1 5.1 0 0 1 8 2c2.736 0 5 2.227 5 4.647",
      ],
    },
    "lock-closed": {
      symbolId: "nvidia-react-gui-icons-v1-fill-lock-closed",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a3 3 0 0 1 3 3v2h1v7H4V7h1V5a3 3 0 0 1 3-3M6 5v2h4V5a2 2 0 1 0-4 0",
      ],
    },
    "lock-open": {
      symbolId: "nvidia-react-gui-icons-v1-fill-lock-open",
      viewBox: "0 0 16 16",
      paths: [
        "M11 2a3 3 0 0 0-3 3v2H2v7h8V7H9V5a2 2 0 0 1 3.95-.447V7h1V4.45l-.01-.049A3 3 0 0 0 11 2",
      ],
    },
    loop: {
      symbolId: "nvidia-react-gui-icons-v1-fill-loop",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8a4 4 0 0 1 4-4h6a4 4 0 0 1 0 8v-1a3 3 0 1 0 0-6H5a3 3 0 1 0 0 6h2.293L6.146 9.854l.708-.708L9.207 11.5l-2.353 2.354-.708-.708L7.293 12H5a4 4 0 0 1-4-4",
      ],
    },
    "loop-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-loop-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-9.285-9.286A3.001 3.001 0 0 0 5 11h2.293L6.146 9.854l.708-.708L9.207 11.5l-2.353 2.354-.708-.708L7.293 12H5a4 4 0 0 1-1.44-7.733L1.646 2.354zM15 8a4 4 0 0 1-1.259 2.913l-.707-.708A3 3 0 0 0 11 5H7.828l-1-1H11a4 4 0 0 1 4 4",
      ],
    },
    mac: {
      symbolId: "nvidia-react-gui-icons-v1-fill-mac",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h12v5H2zm0 6h12v2H9.902l.268 1H11v1H5v-1h.831l.268-1H2Zm5.134 2-.268 1h2.268l-.268-1Z",
      ],
    },
    "mac-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mac-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 13 13-.708.708L10.293 11h-.391l.268 1H11v1H5v-1h.831l.268-1H2V9h6.293l-1-1H2V3h.293L.646 1.354ZM7.134 11l-.268 1h2.268l-.268-1ZM14 11h-.172l-2-2H14zm0-3h-3.172l-5-5H14z",
      ],
    },
    magnet: {
      symbolId: "nvidia-react-gui-icons-v1-fill-magnet",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8.354a6 6 0 1 1 12 0v6h-4v-6a2 2 0 1 0-4 0v6H2Zm1 5h2v-1H3Zm8 0h2v-1h-2Z",
      ],
    },
    "magnifying-glass": {
      symbolId: "nvidia-react-gui-icons-v1-fill-magnifying-glass",
      viewBox: "0 0 16 16",
      paths: [
        "M2 6.5a4.5 4.5 0 1 1 8.016 2.809l4.338 4.337-.707.708-4.338-4.338A4.5 4.5 0 0 1 2 6.5M6.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7",
      ],
    },
    "magnifying-glass-minus": {
      symbolId: "nvidia-react-gui-icons-v1-fill-magnifying-glass-minus",
      viewBox: "0 0 16 16",
      paths: [
        "M2 6.5a4.5 4.5 0 1 1 8.016 2.809l4.338 4.337-.708.708-4.337-4.338A4.5 4.5 0 0 1 2 6.5M6.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M9 7H4V6h5Z",
      ],
    },
    "magnifying-glass-plus": {
      symbolId: "nvidia-react-gui-icons-v1-fill-magnifying-glass-plus",
      viewBox: "0 0 16 16",
      paths: [
        "M2 6.5a4.5 4.5 0 1 1 8.016 2.809l4.338 4.337-.708.708-4.337-4.338A4.5 4.5 0 0 1 2 6.5M6.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M6 6V4h1v2h2v1H7v2H6V7H4V6Z",
      ],
    },
    man: {
      symbolId: "nvidia-react-gui-icons-v1-fill-man",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 1M6 15v-4H5V6h6v5h-1v4H9v-4H7v4z",
      ],
    },
    "man-woman": {
      symbolId: "nvidia-react-gui-icons-v1-fill-man-woman",
      viewBox: "0 0 16 16",
      paths: [
        "M4 1a2 2 0 1 0-.001 3.999A2 2 0 0 0 4 1m7 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 11 1m1.338 5H9.662l-2.401 6H9v3h1v-3h2v3h1v-3h1.739zM7 6H1v5h1v4h1v-4h2v4h1v-4h1z",
      ],
    },
    map: {
      symbolId: "nvidia-react-gui-icons-v1-fill-map",
      viewBox: "0 0 16 16",
      paths: [
        "m9.5 3.279-3-1.125V13.14l3 .75zm1 10.568 4-1.5V1.778l-4 1.501zM1.5 3.11l4-1v11.03l-4 1z",
      ],
    },
    "map-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-map-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708-2.226-2.227-1.92.72v-2.64l-1-1v3.684l-3-.75V7.207l-1-1v6.934l-4 1V3.11l.722-.181L.646 1.354ZM14.5 1.779v9.893l-4-4V3.279Zm-5 1.5v3.393l-3-3V2.154Z",
      ],
    },
    mapping: {
      symbolId: "nvidia-react-gui-icons-v1-fill-mapping",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 1m.5 5v2.793l.646-.647.708.708L8 10.707 6.146 8.854l.708-.708.646.647V6zM2 11.5V13h2v-1.5h1V15H1v-3.5zm5 0V13h2v-1.5h1V15H6v-3.5zm5 0V13h2v-1.5h1V15h-4v-3.5z",
      ],
    },
    markdown: {
      symbolId: "nvidia-react-gui-icons-v1-fill-markdown",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 7.098 4.289 5H2v6h1V6h.711L5.5 9.098 7.289 6H8v5h1V5H6.711zM13 9.293V5h-1v4.293l-1.646-1.647-.708.708 2.854 2.853 2.854-2.853-.708-.708z",
      ],
    },
    martini: {
      symbolId: "nvidia-react-gui-icons-v1-fill-martini",
      viewBox: "0 0 16 16",
      paths: [
        "M8.997 3.497a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0",
        "M9.497 1.997a1.5 1.5 0 0 0-1.353 2.147l-1 1 .707.707 1-1a1.5 1.5 0 0 0 2-2.001l1.497-1.496.646.645L14 2v3.113L8.5 8.289V14H11v1H5v-1h2.5V8.289L2 5.113V2z",
      ],
    },
    "mask-inside": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mask-inside",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2q-.297 0-.588.028l.097.996a5 5 0 0 1 .982 0l.097-.996A6 6 0 0 0 8 2m2.829.708a6 6 0 0 0-1.087-.451l-.29.957q.475.145.905.375zm-4.571-.451a6 6 0 0 0-1.087.451l.472.881q.43-.23.905-.375zm6.38 1.936a6 6 0 0 0-.831-.831l-.635.773q.38.313.693.693zm-8.445-.831a6 6 0 0 0-.831.831l.773.635q.313-.38.693-.693zm9.55 2.896a6 6 0 0 0-.451-1.087l-.881.472q.23.43.375.905zM2.708 5.171a6 6 0 0 0-.451 1.087l.957.29q.145-.475.375-.905zM14 8q0-.297-.028-.588l-.996.097a5 5 0 0 1 0 .982l.996.097A6 6 0 0 0 14 8M2.028 7.412a6.4 6.4 0 0 0 0 1.176l.996-.097a5 5 0 0 1 0-.982zm.229 2.33q.174.571.451 1.087l.881-.472a5 5 0 0 1-.375-.905zm11.035 1.087a6 6 0 0 0 .451-1.087l-.957-.29a5 5 0 0 1-.375.905zm-9.93.978q.375.456.831.831l.635-.773a5 5 0 0 1-.693-.693zm8.445.831q.456-.375.831-.831l-.773-.635q-.313.38-.693.693zm-6.636.654a6 6 0 0 0 1.087.451l.29-.957a5 5 0 0 1-.905-.375zm4.571.451a6 6 0 0 0 1.087-.451l-.472-.881a5 5 0 0 1-.905.375zM8 14q.297 0 .588-.028l-.097-.996a5 5 0 0 1-.982 0l-.097.996q.291.027.588.028m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
      ],
    },
    "mask-outside": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mask-outside",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4q-.265 0-.522.034l.13.991a3.2 3.2 0 0 1 .784 0l.13-.991A4 4 0 0 0 8 4m2.435.827a4 4 0 0 0-.904-.523l-.383.923q.367.153.678.393zm-3.966-.523a4 4 0 0 0-.904.523l.609.793q.311-.24.678-.393zM4.827 5.565a4 4 0 0 0-.523.904l.923.383q.153-.367.393-.678zm6.869.904a4 4 0 0 0-.523-.904l-.793.609q.24.311.393.678zM12 8q0-.265-.034-.522l-.991.13a3.2 3.2 0 0 1 0 .784l.991.13Q12 8.266 12 8m-7.966-.522a4 4 0 0 0 0 1.044l.991-.13a3.2 3.2 0 0 1 0-.784zm7.139 2.957q.32-.414.523-.904l-.923-.383a3 3 0 0 1-.393.678zm-6.869-.904q.204.49.523.904l.793-.609a3 3 0 0 1-.393-.678zm1.261 1.642q.414.32.904.523l.383-.923a3 3 0 0 1-.678-.393zm3.966.523q.49-.204.904-.523l-.609-.793a3 3 0 0 1-.678.393zM8 12q.265 0 .522-.034l-.13-.991a3.2 3.2 0 0 1-.784 0l-.13.991Q7.734 12 8 12",
        "M1 1h14v14H1Zm12 7a5 5 0 1 0-10.001.001A5 5 0 0 0 13 8",
      ],
    },
    material: {
      symbolId: "nvidia-react-gui-icons-v1-fill-material",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 9v1a4 4 0 0 0 4-4h-1a3 3 0 0 1-3 3M6.413 6.915c.586-.586.744-1.377.354-1.768-.391-.39-1.182-.232-1.768.354-.586.585-.744 1.377-.354 1.767.391.391 1.182.233 1.768-.353m-.699 4.368c.345.24.73.428 1.143.551l.36-.929-1-.483Z",
      ],
    },
    math: {
      symbolId: "nvidia-react-gui-icons-v1-fill-math",
      viewBox: "0 0 16 16",
      paths: [
        "M4 1.729v2.5H1.5v1H4v2.5h1v-2.5h2.5v-1H5v-2.5zM2.354 14.583l12-12-.708-.707-12 12zM8.5 12.229h6v-1h-6z",
      ],
    },
    meal: {
      symbolId: "nvidia-react-gui-icons-v1-fill-meal",
      viewBox: "0 0 16 16",
      paths: [
        "M4 14H2V8h2zm6.25-4.501H7v1h3.565l3.422-.917.625 2.334L10.565 13H5V8h4.848zM8.5 1.792c2.332.22 4.224 1.966 4.472 4.208H14v1H2V6h1.028c.248-2.242 2.14-3.988 4.472-4.208V1h1z",
      ],
    },
    "media-optical": {
      symbolId: "nvidia-react-gui-icons-v1-fill-media-optical",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13M3.236 5.249 5.835 6.75a2.5 2.5 0 0 1 1.518-1.165l-.777-2.899a5.52 5.52 0 0 0-3.34 2.563M9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8",
      ],
    },
    medicine: {
      symbolId: "nvidia-react-gui-icons-v1-fill-medicine",
      viewBox: "0 0 16 16",
      paths: [
        "M7.999 3.052a3.5 3.5 0 1 1 4.949 4.95l-4.946 4.946a3.5 3.5 0 1 1-4.949-4.95ZM10.5 3a2.5 2.5 0 0 0-1.788.753l-.004.005-2.122 2.121 3.536 3.535 2.125-2.125A2.5 2.5 0 0 0 10.5 3",
      ],
    },
    megaphone: {
      symbolId: "nvidia-react-gui-icons-v1-fill-megaphone",
      viewBox: "0 0 16 16",
      paths: [
        "M13 8.415v2.824L7.404 9H6v4H3V9H2V5h1V4h3v1h1.404L13 2.761v2.824a1.5 1.5 0 0 1 0 2.83",
      ],
    },
    menu: {
      symbolId: "nvidia-react-gui-icons-v1-fill-menu",
      viewBox: "0 0 16 16",
      paths: ["M13 4H3V3h10Zm0 4H3V7h10Zm0 4H3v-1h10Z"],
    },
    microphone: {
      symbolId: "nvidia-react-gui-icons-v1-fill-microphone",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0V4a3 3 0 0 0-3-3",
        "M8 12a4 4 0 0 1-4-4H3a5 5 0 0 0 3.45 4.755L5.848 15h4.303l-.599-2.245A5 5 0 0 0 13 8h-1a4 4 0 0 1-4 4",
      ],
    },
    "microphone-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-microphone-off",
      viewBox: "0 0 16 16",
      paths: [
        "M13 8c0 .645-.122 1.261-.344 1.827l-.792-.791C11.953 8.706 12 8.358 12 8zm-2 0q0 .084-.005.167l-5.62-5.62A3 3 0 0 1 11 4zm-.547 3.16A4 4 0 0 1 4 8H3a5 5 0 0 0 3.45 4.755L5.848 15h4.303l-.599-2.245a5 5 0 0 0 1.612-.884l2.482 2.483.708-.708-12-12-.708.708L5 5.707V8a3 3 0 0 0 4.738 2.445z",
      ],
    },
    microscope: {
      symbolId: "nvidia-react-gui-icons-v1-fill-microscope",
      viewBox: "0 0 16 16",
      paths: [
        "M9 1h2v1h1v7h-1.116l-.268 1H9.384l-.268-1H8V5.915q-.183.065-.383.081L6.008 12h7.876l.804 3H1.312l.804-3h.857l2.143-8h.969A1.5 1.5 0 0 1 8 3.085V2h1ZM7.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1",
      ],
    },
    "mini-displayport": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mini-displayport",
      viewBox: "0 0 16 16",
      paths: ["M13 9.707 10.707 12H5.293L3 9.707V4h10ZM5 7v2h6V7Z"],
    },
    "mirror-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mirror-horizontal",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 14h1V2h-1zm-.793-6L2 3.293v9.414zm2.586 0L14 12.707V3.293z",
      ],
    },
    "mirror-vertical": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mirror-vertical",
      viewBox: "0 0 16 16",
      paths: [
        "M8 6.707 12.707 2H3.293zM14 8.5v-1H2v1zM12.707 14 8 9.293 3.293 14z",
      ],
    },
    "mode-component": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mode-component",
      viewBox: "0 0 16 16",
      paths: [
        "M1 1h4v1H2v3H1Zm13 1h-3V1h4v4h-1Zm1 9v4h-4v-1h3v-3ZM2 14h3v1H1v-4h1ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
      ],
    },
    money: {
      symbolId: "nvidia-react-gui-icons-v1-fill-money",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 8c-.867 0-1.673-.116-2.279-.319A4 4 0 0 1 3 7.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236C4.016 8.893 4.71 9 5.5 9q.405 0 .769-.035-.178.488-.24 1.02Q5.769 10 5.5 10c-.867 0-1.673-.116-2.279-.319A4 4 0 0 1 3 9.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236.479.16 1.173.267 1.963.267q.271 0 .526-.016.055.514.22.987A10 10 0 0 1 5.5 12c-.867 0-1.673-.116-2.279-.319-.301-.1-.58-.23-.795-.399C2.217 11.117 2 10.857 2 10.5v-6c0-.357.217-.617.426-.782.215-.169.494-.299.795-.399C3.827 3.116 4.633 3 5.5 3s1.673.116 2.279.319c.301.1.58.23.795.399.209.165.426.425.426.782v1.756a4.5 4.5 0 0 0-2.176 1.648A9 9 0 0 1 5.5 8M8 5.601a4 4 0 0 1-.221.08C7.173 5.884 6.367 6 5.5 6s-1.673-.116-2.279-.319A4 4 0 0 1 3 5.601v.855a.4.4 0 0 0 .045.041c.089.07.249.155.492.236C4.016 6.893 4.71 7 5.5 7s1.484-.107 1.963-.267c.243-.081.403-.166.492-.236A.4.4 0 0 0 8 6.456ZM3.05 4.5c.09.07.248.153.487.233C4.016 4.893 4.71 5 5.5 5s1.484-.107 1.963-.267c.239-.08.397-.163.487-.233a1.7 1.7 0 0 0-.487-.233C6.984 4.107 6.29 4 5.5 4s-1.484.107-1.963.267c-.239.08-.397.163-.487.233",
        "M7 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0",
      ],
    },
    "money-coin": {
      symbolId: "nvidia-react-gui-icons-v1-fill-money-coin",
      viewBox: "0 0 16 16",
      paths: [
        "M6.939 6.939A1.5 1.5 0 0 1 8 6.5 1.495 1.495 0 0 1 9.5 8 1.495 1.495 0 0 1 8 9.5 1.495 1.495 0 0 1 6.5 8c0-.414.167-.789.439-1.061",
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m3.146-2.146.768.767a2.5 2.5 0 0 0 0 2.758l-.768.767.708.708.767-.768a2.5 2.5 0 0 0 2.758 0l.767.768.708-.708-.768-.767a2.5 2.5 0 0 0 0-2.758l.768-.767-.708-.708-.767.768a2.5 2.5 0 0 0-2.758 0l-.767-.768Z",
      ],
    },
    "money-paper": {
      symbolId: "nvidia-react-gui-icons-v1-fill-money-paper",
      viewBox: "0 0 16 16",
      paths: [
        "M1 4h14v8H1Zm5 4a2 2 0 1 0 3.999.001A2 2 0 0 0 6 8M2 5v2h2V5Zm12 0h-2v2h2ZM4 9H2v2h2Zm8 0v2h2V9Z",
      ],
    },
    moon: {
      symbolId: "nvidia-react-gui-icons-v1-fill-moon",
      viewBox: "0 0 16 16",
      paths: [
        "m8.315 3.009-1.004-.063.556.839a4 4 0 0 1-3.584 6.208L3.279 9.93l.556.839A5 5 0 1 0 10.5 3.67a5 5 0 0 0-2.185-.661",
      ],
    },
    "moon-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-moon-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.481-2.482a5 5 0 0 1-7.33-1.103l-.556-.839 1.004.063a4 4 0 0 0 3.435-1.568L1.646 2.354zM10.5 3.67a5 5 0 0 1 2.155 6.157l-4.13-4.131a4 4 0 0 0-.658-1.911l-.556-.839 1.004.063a5 5 0 0 1 2.185.661",
      ],
    },
    "more-horiz": {
      symbolId: "nvidia-react-gui-icons-v1-fill-more-horiz",
      viewBox: "0 0 16 16",
      paths: [
        "M3 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 3 6m5 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6m5 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 13 6",
      ],
    },
    "more-vert": {
      symbolId: "nvidia-react-gui-icons-v1-fill-more-vert",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 1m0 5a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6m0 5a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 11",
      ],
    },
    mosaic: {
      symbolId: "nvidia-react-gui-icons-v1-fill-mosaic",
      viewBox: "0 0 16 16",
      paths: [
        "M1 1.86 5.562 3h4.876L15 1.86v12.28L10.438 13H5.562L1 14.14ZM6 6h4V4H6Zm0 6h4v-2H6Zm0-3h4V7H6ZM5 6.941l-3-.375v2.868l3-.375Zm9-.375-3 .375v2.118l3 .375ZM5 3.89l-3-.75v2.419l3 .375Zm6 0v2.044l3-.375V3.14Zm-6 6.176-3 .375v2.419l3-.75Zm9 .375-3-.375v2.044l3 .75Z",
      ],
    },
    mountain: {
      symbolId: "nvidia-react-gui-icons-v1-fill-mountain",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1.456 14.842 14H1.158Zm.326 5.011 1.385.214L8 3.544 6.325 6.616l1.111.741Z",
      ],
    },
    "mouse-2b": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mouse-2b",
      viewBox: "0 0 16 16",
      paths: ["M7.5 1H3v4.5h4.5zm1 4.5V1H13v4.5zM3 6.5V10a5 5 0 0 0 10 0V6.5z"],
    },
    "mouse-2b-right-click": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mouse-2b-right-click",
      viewBox: "0 0 16 16",
      paths: [
        "M11 3.25a.25.25 0 1 0-.5 0 .25.25 0 0 0 .5 0",
        "M8.5 1H13v4.5H8.5Zm2.25 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M3 5.5h4.5V1H3zM13 10V6.5H3V10a5 5 0 0 0 10 0",
      ],
    },
    "mouse-3-b": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mouse-3-b",
      viewBox: "0 0 16 16",
      paths: [
        "M5.667 1H3v4.5h2.667zM3 10V6.5h10V10a5 5 0 0 1-10 0m3.667-9h2.666v4.5H6.667zM13 1h-2.667v4.5H13z",
      ],
    },
    "mouse-scrollwheel": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mouse-scrollwheel",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h4.5v2.585A1.5 1.5 0 0 0 6.5 5v.5H3zm3.5 5.5H3V10a5 5 0 0 0 10 0V6.5H9.5V7a1.5 1.5 0 0 1-3 0zm3-1H13V1H8.5v2.585A1.5 1.5 0 0 1 9.5 5z",
        "M7.5 5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0z",
      ],
    },
    "mouse-scrollwheel-active": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mouse-scrollwheel-active",
      viewBox: "0 0 16 16",
      paths: [
        "M3 1h4.5v2.585A1.5 1.5 0 0 0 6.5 5v.5H3zm3.5 5.5H3V10a5 5 0 0 0 10 0V6.5H9.5V7a1.5 1.5 0 0 1-3 0zm3-1H13V1H8.5v2.585A1.5 1.5 0 0 1 9.5 5z",
      ],
    },
    move: {
      symbolId: "nvidia-react-gui-icons-v1-fill-move",
      viewBox: "0 0 16 16",
      paths: [
        "m8 1.293 2.354 2.353-.708.708L8.5 3.207V7.5h4.293l-1.147-1.146.708-.708L14.707 8l-2.353 2.354-.708-.708L12.793 8.5H8.5v4.293l1.146-1.147.708.708L8 14.707l-2.354-2.353.708-.708L7.5 12.793V8.5H3.207l1.147 1.146-.708.708L1.293 8l2.353-2.354.708.708L3.207 7.5H7.5V3.207L6.354 4.354l-.708-.708Z",
      ],
    },
    "move-global": {
      symbolId: "nvidia-react-gui-icons-v1-fill-move-global",
      viewBox: "0 0 16 16",
      paths: [
        "m8 .918 2.354 2.353-.708.708L8.5 2.832V4.5h-1V2.832L6.354 3.979l-.708-.708ZM8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m2.354 7.229L8 15.082l-2.354-2.353.708-.708L7.5 13.168V11.5h1v1.668l1.146-1.147ZM15.082 8l-2.353 2.354-.708-.708L13.168 8.5H11.5v-1h1.668l-1.147-1.146.708-.707ZM3.271 5.646l.708.708L2.832 7.5H4.5v1H2.832l1.147 1.146-.708.708L.918 8Z",
      ],
    },
    mud: {
      symbolId: "nvidia-react-gui-icons-v1-fill-mud",
      viewBox: "0 0 16 16",
      paths: [
        "m8 2.382.447.894c.129.258.312.539.519.856q.178.271.37.581c.166.268.327.551.449.83.118.273.215.579.215.886a2 2 0 0 1-4 0c0-.307.097-.613.216-.886.121-.279.283-.562.448-.83q.193-.31.37-.581c.207-.317.39-.598.519-.856zm-.689 10.801c.112.191.189.452.189.817h1c0-.365.078-.626.189-.817q.168-.283.487-.454c.443-.24 1.084-.322 1.803-.292.706.029 1.423.163 1.969.292a13 13 0 0 1 .835.227l.046.014.011.004h.002L14 12.5c.158-.474.158-.475.157-.475h-.001l-.004-.001-.015-.005-.055-.018-.2-.06c-.171-.05-.413-.117-.704-.185a12 12 0 0 0-2.157-.318c-.514-.022-1.063.004-1.572.129.255-.279.542-.516.834-.717a6.5 6.5 0 0 1 1.807-.856l.026-.008.006-.001L12 9.5l-.122-.485-.001.001h-.004l-.012.004-.04.011-.142.042a7.5 7.5 0 0 0-1.962.952c-.632.435-1.285 1.048-1.717 1.878-.432-.83-1.084-1.443-1.717-1.878a7.5 7.5 0 0 0-2.104-.994l-.04-.011-.012-.004h-.003l-.002-.001L4 9.5l-.121.485.005.001.027.008.112.033a6.5 6.5 0 0 1 1.694.823c.292.201.579.438.834.717-.509-.125-1.058-.151-1.572-.129a12 12 0 0 0-2.156.318c-.291.068-.534.135-.705.185l-.2.06-.055.018-.015.005-.004.001-.002.001L2 12.5l.155.463.003.011h.003l.01-.004.046-.014.181-.055c.157-.046.383-.108.654-.172a11 11 0 0 1 1.969-.292c.719-.03 1.36.052 1.803.292q.32.17.487.454",
      ],
    },
    mug: {
      symbolId: "nvidia-react-gui-icons-v1-fill-mug",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 1v3h1V1zM3 2v2h1V2zm5 0v2h1V2zm6.393 4-1.607 6H11v.566L10.616 14H2.384L2 12.566V5h9v1Zm-2.375 5 1.072-4H11v4Z",
      ],
    },
    "mug-beer": {
      symbolId: "nvidia-react-gui-icons-v1-fill-mug-beer",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 1c.889 0 1.669.464 2.112 1.162a2.5 2.5 0 0 1 2.214.219A2 2 0 1 1 11 5.732V6h3v7h-3v.566L10.616 15H2.384L2 13.566V5.915a1.5 1.5 0 0 1 .036-2.842A2.5 2.5 0 0 1 4.5 1M3 3.5V4h-.5a.5.5 0 1 0 .4.8l.301-.4.399.3c.251.189.562.3.9.3.309 0 .596-.093.834-.253l.536-.36.214.61c.119.339.358.624.666.803l.25.144V8.5a.5.5 0 0 0 1 0V5.944l.25-.144c.268-.155.483-.391.613-.673l.218-.473.464.237q.206.107.455.109a1 1 0 1 0-.763-1.647l-.337.398-.383-.354A1.5 1.5 0 0 0 7.5 3a1.5 1.5 0 0 0-.834.253l-.536.36-.214-.61A1.5 1.5 0 0 0 3 3.5M13 12V7h-2v5Zm-9 1h1V8H4Zm2 0h1v-2H6Zm2 0h1v-2H8Z",
      ],
    },
    multidrive: {
      symbolId: "nvidia-react-gui-icons-v1-fill-multidrive",
      viewBox: "0 0 16 16",
      paths: ["M15 3v4H1V3ZM3.5 4.5h-1v1h1ZM15 8v4H1V8ZM3.5 9.5h-1v1h1Z"],
    },
    network: {
      symbolId: "nvidia-react-gui-icons-v1-fill-network",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a2 2 0 0 0-.5 3.937v1.626a2 2 0 0 0-1.211.902l-1.29-.387L5 7a2 2 0 1 0-.289 1.035l1.29.387L6 8.5c0 .513.193.98.51 1.334l-.852 1.277a2 2 0 1 0 .832.555l.852-1.277a2 2 0 0 0 1.316 0l.852 1.277a2 2 0 1 0 .832-.555L9.49 9.834c.317-.354.51-.821.51-1.334l-.001-.078 1.29-.387a2 2 0 1 0-.287-.957l-1.291.387A2 2 0 0 0 8.5 6.563V4.937A2 2 0 0 0 8 1",
      ],
    },
    "network-connection": {
      symbolId: "nvidia-react-gui-icons-v1-fill-network-connection",
      viewBox: "0 0 16 16",
      paths: [
        "m4.854 5.354-.707-.708L.793 8l3.354 3.354.707-.708L2.207 8zm6.292 0L13.793 8l-2.647 2.646.708.708L15.207 8l-3.353-3.354z",
        "M5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "network-pcs": {
      symbolId: "nvidia-react-gui-icons-v1-fill-network-pcs",
      viewBox: "0 0 16 16",
      paths: [
        "M10 2H6v3h4zM6 7h4V6H6zm4.129 3.517L8.5 10.08V7.964h-1v2.116l-1.629.437.258.966L8 10.982l1.871.501zM5 9H1v3h4zm10 0h-4v3h4zM1 14h4v-1H1zm10 0h4v-1h-4z",
      ],
    },
    "network-signal": {
      symbolId: "nvidia-react-gui-icons-v1-fill-network-signal",
      viewBox: "0 0 16 16",
      paths: [
        "M2.757 3.757A6 6 0 0 0 1 8c0 1.657.672 3.157 1.757 4.243l.707-.707A5 5 0 0 1 2 8c0-1.381.559-2.63 1.464-3.536zM15 8a6 6 0 0 0-1.757-4.243l-.707.707A5 5 0 0 1 14 8c0 1.381-.559 2.63-1.464 3.536l.707.707A6 6 0 0 0 15 8",
        "M4.172 5.172A4 4 0 0 0 3 8c0 1.104.448 2.105 1.172 2.828l.707-.707A3 3 0 0 1 4 8c0-.829.335-1.578.879-2.121zM13 8a4 4 0 0 0-1.172-2.828l-.707.707C11.665 6.422 12 7.171 12 8s-.335 1.578-.879 2.121l.707.707A4 4 0 0 0 13 8M8 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6",
      ],
    },
    "network-signal-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-network-signal-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-4.63-4.631a2 2 0 0 1-2.739-2.739l-4.631-4.63zm.594 3.424-.714-.715A5.97 5.97 0 0 0 1 8c0 1.657.672 3.157 1.757 4.243l.707-.707A5 5 0 0 1 2 8c0-1.095.351-2.107.948-2.93",
        "m4.393 6.514-.726-.726A4 4 0 0 0 3 8c0 1.104.448 2.105 1.172 2.828l.707-.707A3 3 0 0 1 4 8c0-.541.143-1.048.393-1.486M15 8a5.97 5.97 0 0 1-.942 3.229l-.728-.727c.426-.736.67-1.59.67-2.502 0-1.381-.559-2.63-1.464-3.536l.707-.707A6 6 0 0 1 15 8",
        "M13 8c0 .633-.147 1.231-.409 1.763l-.762-.762A3 3 0 0 0 12 8c0-.829-.335-1.578-.879-2.121l.707-.707A4 4 0 0 1 13 8",
      ],
    },
    "neural-network": {
      symbolId: "nvidia-react-gui-icons-v1-fill-neural-network",
      viewBox: "0 0 16 16",
      paths: [
        "m9.499 3.061 2.374.949a1.5 1.5 0 1 1 .802 2.455L11.715 8l.96 1.535Q12.832 9.5 13 9.5a1.5 1.5 0 1 1-1.127 2.49l-2.374.949L9.5 13a1.5 1.5 0 0 1-3 0l.001-.061-2.374-.95a1.5 1.5 0 1 1-.801-2.453L4.286 8l-.96-1.536a1.5 1.5 0 1 1 .801-2.453l2.374-.95L6.5 3a1.5 1.5 0 0 1 3 0zM8.326 4.464a1.5 1.5 0 0 1-.652.001L6.421 6.47l.623.374a1.495 1.495 0 0 1 1.911 0l.624-.374Zm0 7.071 1.253-2.004-.624-.375A1.5 1.5 0 0 1 8 9.5a1.5 1.5 0 0 1-.955-.344l-.624.374 1.253 2.005a1.5 1.5 0 0 1 .652 0M6.765 4.032l-2.266.907L4.5 5q0 .153-.03.299l1.094.656ZM4.5 11l-.001.061 2.266.906-1.201-1.922-1.094.656q.03.146.03.299m4.735-6.968 1.202 1.923 1.093-.656A1.5 1.5 0 0 1 11.5 5l.001-.061Zm0 7.935 2.266-.906L11.5 11q0-.153.03-.299l-1.093-.656Zm.874-4.649-.639.383a1.5 1.5 0 0 1 0 .598l.639.383.427-.682ZM6.5 8q0-.153.03-.299l-.639-.383L5.465 8l.426.682.639-.383A1.5 1.5 0 0 1 6.5 8m4.625.943-.158.254.507.304Zm.349-2.444-.507.304.158.254ZM4.875 8.943l-.348.558.507-.304Zm.159-2.14-.507-.304.348.558Z",
      ],
    },
    news: {
      symbolId: "nvidia-react-gui-icons-v1-fill-news",
      viewBox: "0 0 16 16",
      paths: [
        "M5 6V5h2v1z",
        "M2 2h12v12h-1.185l-.753-.646-1.312.715-1.375-.75-1.375.75-1.375-.75-1.365.745-1.411-.706-.642.642H2Zm6 2H4v3h4ZM4 8v1h8V8Zm8 3v-1H4v1ZM9 5h3V4H9Zm0 2h3V6H9Z",
      ],
    },
    next: {
      symbolId: "nvidia-react-gui-icons-v1-fill-next",
      viewBox: "0 0 16 16",
      paths: ["M11 3.5v4.213L4 3.629v8.741l7-4.083V12.5h1v-9z"],
    },
    "not-equal": {
      symbolId: "nvidia-react-gui-icons-v1-fill-not-equal",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L9.793 10.5H3.5v-1h5.293l-3-3H3.5v-1h1.293L1.646 2.354zM9.328 6.5H12.5v-1H8.328z",
      ],
    },
    notes: {
      symbolId: "nvidia-react-gui-icons-v1-fill-notes",
      viewBox: "0 0 16 16",
      paths: ["M13 3v9a2 2 0 1 1-2-2h1V6H6v6a2 2 0 1 1-2-2h1V3Z"],
    },
    numbers: {
      symbolId: "nvidia-react-gui-icons-v1-fill-numbers",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 1.5h1v5h-1zm1 7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1v1h2v1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1v-1h-2v-1zm3-2h2v1h-1v1h1v1h-2v1h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2z",
      ],
    },
    "nvidia-shield": {
      symbolId: "nvidia-react-gui-icons-v1-fill-nvidia-shield",
      viewBox: "0 0 16 16",
      paths: [
        "M1.774 12H9.12l1.348-2.103-5.478-2.95zm8.537 0h4.063l-3.026-1.63zM15 11.201V4.607l-3.114 4.918zM14.194 4H1.626l9.361 5.04zM1 4.799v6.555l3.107-4.882z",
      ],
    },
    "nvidia-shield-stand": {
      symbolId: "nvidia-react-gui-icons-v1-fill-nvidia-shield-stand",
      viewBox: "0 0 16 16",
      paths: [
        "M4.607 1h6.594L9.525 4.114zM12 5.689V1.626l-1.63 3.026zM4 1.806v9.361L6.154 9.32l.423.269L9.04 5.013zm8 5.074v6.16l-4.578-2.913 2.475-4.595zM2.5 15v-1.23l3.742-3.209L12 14.226V15Zm7.283-1-3.452-2.197L3.768 14Z",
      ],
    },
    "open-external": {
      symbolId: "nvidia-react-gui-icons-v1-fill-open-external",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h5v1H3v9h9V9h1v5H2Zm7-1h5v5h-1V3.707L7.354 9.354l-.708-.708L12.293 3H9Z",
      ],
    },
    os: {
      symbolId: "nvidia-react-gui-icons-v1-fill-os",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.5 7",
        "M15 14H1V3h14ZM5.5 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M11 6c-1.133 0-2 .6-2 1.5S9.867 9 11 9c.867 0 1 .4 1 .5s-.133.5-1 .5c-.568 0-.993-.2-1.396-.604l-.708.708C9.463 10.67 10.134 11 11 11c1.133 0 2-.6 2-1.5S12.133 8 11 8c-.867 0-1-.4-1-.5s.133-.5 1-.5c.568 0 .993.2 1.396.604l.708-.708C12.538 6.33 11.866 6 11 6",
      ],
    },
    outbox: {
      symbolId: "nvidia-react-gui-icons-v1-fill-outbox",
      viewBox: "0 0 16 16",
      paths: [
        "M13 10.435V14H3v-3.565L3.652 8h8.696ZM4.151 10 4 11h3.207l.793.793.793-.793H12l-.151-1-.269-1H4.42Zm6.203-5.354-.708.708L8.5 4.207V7h-1V4.207L6.354 5.354l-.708-.708L8 2.293z",
      ],
    },
    "outlet-a": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-a",
      viewBox: "0 0 16 16",
      paths: [
        "M11.707 2 14 4.293v7.414L11.707 14H4.293L2 11.707V4.293L4.293 2ZM5 9h1V6H5Zm5-3v3h1V6Z",
      ],
    },
    "outlet-b": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-b",
      viewBox: "0 0 16 16",
      paths: [
        "M4.293 2h7.414L14 4.293v7.414L11.707 14H4.293L2 11.707V4.293ZM8 9a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1M5 5v3h1V5Zm5 3h1V5h-1Z",
      ],
    },
    "outlet-c": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-c",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m2 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
      ],
    },
    "outlet-e": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-e",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m7 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "outlet-g": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-g",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m5.5-3v2h1V5ZM7 10V9H5v1Zm2 0h2V9H9Z",
      ],
    },
    "outlet-h": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-h",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m5.5 1.5V12h1V9.5Zm1.646-1.854.708.708 1.5-1.5-.708-.708Zm-4.5-.792 1.5 1.5.708-.708-1.5-1.5Z",
      ],
    },
    "outlet-i": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-i",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m7.146-1.146 2 2 .708-.708-2-2Zm-5 1.292.708.708 2-2-.708-.708ZM7.5 9.5V12h1V9.5Z",
      ],
    },
    "outlet-j": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-j",
      viewBox: "0 0 16 16",
      paths: [
        "M2.793 4h10.414L15 5.793v4.414L13.207 12H2.793L1 10.207V5.793ZM11 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
      ],
    },
    "outlet-k": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-k",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m7 2H7v1a1 1 0 0 0 2 0Zm2-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "outlet-l": {
      symbolId: "nvidia-react-gui-icons-v1-fill-outlet-l",
      viewBox: "0 0 16 16",
      paths: [
        "M2.793 4h10.414L15 5.793v4.414L13.207 12H2.793L1 10.207V5.793ZM11 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    outpainting: {
      symbolId: "nvidia-react-gui-icons-v1-fill-outpainting",
      viewBox: "0 0 16 16",
      paths: [
        "M9 2H2v7h7zm2.354 8.146-.708.708L11.793 12H2v1h9.793l-1.147 1.146.708.708 2.353-2.354zM10 3h1V2h-1zm2 0h1v1h1V2h-2zm1 2v1h1V5zm0 2v1h-1v1h2V7zm-2 1h-1v1h1z",
      ],
    },
    package: {
      symbolId: "nvidia-react-gui-icons-v1-fill-package",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2v3h4V2h4v12H2V2ZM4.646 7.568l-1.035 3.863 3.864 1.036L8.51 8.603ZM9 10h2.5V9H9Zm0 1v1h2v-1Z",
        "M7 2h2v2H7z",
      ],
    },
    palette: {
      symbolId: "nvidia-react-gui-icons-v1-fill-palette",
      viewBox: "0 0 16 16",
      paths: [
        "M1 8c0-3.349 3.213-6 7-6 1.877 0 3.62.499 4.906 1.511C14.204 4.534 15 6.055 15 8c0 1.451-.769 2.458-1.851 2.881-1.055.412-2.35.253-3.426-.465-.92-.613-1.473-.653-1.972-.493a.77.77 0 0 0-.489.464c-.075.205-.074.494.154.836.341.511.521 1.019.49 1.489a1.35 1.35 0 0 1-.705 1.113c-.759.423-1.897.24-2.958-.396-1.245-.747-2.069-1.555-2.575-2.474S1 9.052 1 8m10-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    paperclip: {
      symbolId: "nvidia-react-gui-icons-v1-fill-paperclip",
      viewBox: "0 0 16 16",
      paths: [
        "M3.725 8.732a2.501 2.501 0 0 0 3.535 3.536l4.889-4.889.708.707-4.889 4.889a3.5 3.5 0 1 1-4.95-4.95l5.657-5.657a2.5 2.5 0 1 1 3.535 3.536l-5.657 5.657a1.501 1.501 0 0 1-2.121-2.122L9.321 4.55l.707.707-4.889 4.889a.5.5 0 0 0 .707.708l5.657-5.657a1.5 1.5 0 0 0-2.121-2.122Z",
      ],
    },
    paperplane: {
      symbolId: "nvidia-react-gui-icons-v1-fill-paperplane",
      viewBox: "0 0 16 16",
      paths: ["M.747 1.623 15.242 8 .747 14.377 2.322 8.5H8v-1H2.322z"],
    },
    paragraph: {
      symbolId: "nvidia-react-gui-icons-v1-fill-paragraph",
      viewBox: "0 0 16 16",
      paths: [
        "M10 4v9H9V4H7v9H6V8h-.5a2.5 2.5 0 1 1 0-5H12v1ZM6 4h-.5a1.5 1.5 0 0 0 0 3H6Z",
      ],
    },
    park: {
      symbolId: "nvidia-react-gui-icons-v1-fill-park",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1a3.5 3.5 0 0 1 3.355 4.5A3.502 3.502 0 0 1 12 9.965V13h1.5v1H2v-1h.882l2-1-2-1H2.5v-1h7v1h-.382l-2 1 2 1H11V9.965A3.502 3.502 0 0 1 8.145 5.5 3.5 3.5 0 0 1 11.5 1M5.118 11l.882.441.882-.441ZM6 12.559 5.118 13h1.764Z",
      ],
    },
    pause: {
      symbolId: "nvidia-react-gui-icons-v1-fill-pause",
      viewBox: "0 0 16 16",
      paths: ["M5 12V4h1v8Zm5 0V4h1v8Z"],
    },
    pawn: {
      symbolId: "nvidia-react-gui-icons-v1-fill-pawn",
      viewBox: "0 0 16 16",
      paths: [
        "M13 15H3v-2h10zM8 1a3 3 0 0 1 1.898 5.322l1.05 3.919L12 11.293V12H4v-.707l1.051-1.052 1.05-3.919A3 3 0 0 1 8 1",
      ],
    },
    pawprint: {
      symbolId: "nvidia-react-gui-icons-v1-fill-pawprint",
      viewBox: "0 0 16 16",
      paths: [
        "M6 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 6 3M3.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 3.5 6M10 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 10 3m2.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12.5 6M8 7c-.715 0-1.321.243-1.892.798-.544.529-1.057 1.341-1.639 2.473-.328.638-.427 1.235-.285 1.774s.501.934.922 1.215c.821.547 1.996.74 2.894.74.856 0 2.042-.088 2.874-.587.436-.261.801-.652.943-1.215.139-.549.043-1.184-.273-1.9-.584-1.325-1.102-2.161-1.671-2.659C9.266 7.109 8.648 7 8 7",
      ],
    },
    "payment-card": {
      symbolId: "nvidia-react-gui-icons-v1-fill-payment-card",
      viewBox: "0 0 16 16",
      paths: ["M15 3H1v2h14zm0 4v6H1V7ZM3 9v1h6V9Zm10 0h-2v1h2Z"],
    },
    pen: {
      symbolId: "nvidia-react-gui-icons-v1-fill-pen",
      viewBox: "0 0 16 16",
      paths: [
        "M9.604 3.896 10 3.5 12.5 6l-8 8H2.707l-.353.354-.708-.708.354-.353V11.5l6.896-6.896L8 3.707 4.354 7.354l-.708-.708L8 2.293zM14 3.5 12.5 5 11 3.5 12.5 2z",
      ],
    },
    pencil: {
      symbolId: "nvidia-react-gui-icons-v1-fill-pencil",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1.793 14.207 4.5l-2 2L9.5 3.793zM8.793 4.5 2 11.293V14h2.707L11.5 7.207z",
      ],
    },
    "performance-high": {
      symbolId: "nvidia-react-gui-icons-v1-fill-performance-high",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 9.213 5.068l.536.844a7 7 0 1 0-7.498 0l.536-.844A6 6 0 0 1 2 8",
        "M8 6.5a1.5 1.5 0 1 0 1.237 2.349l2.981.799.259-.966-2.982-.799A1.5 1.5 0 0 0 8 6.5",
      ],
    },
    "performance-low": {
      symbolId: "nvidia-react-gui-icons-v1-fill-performance-low",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 0 0-3.213 11.068l-.536.845a7 7 0 1 1 7.498-.001l-.536-.844A6 6 0 0 0 8 2M6.504 7.883a1.5 1.5 0 1 1 .259.966l-2.981.799-.259-.966Z",
      ],
    },
    "performance-medium": {
      symbolId: "nvidia-react-gui-icons-v1-fill-performance-medium",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 9.213 5.068l.536.844a7 7 0 1 0-7.498 0l.536-.844A6 6 0 0 1 2 8",
        "M8 6.5q.14 0 .273.025L9.817 3.85l.866.5-1.544 2.674A1.5 1.5 0 1 1 8 6.5",
      ],
    },
    "phone-laptop": {
      symbolId: "nvidia-react-gui-icons-v1-fill-phone-laptop",
      viewBox: "0 0 16 16",
      paths: [
        "M4 2h10v7H8V5H4zm11 9H8v-1h7z",
        "M2 6h2v1h1V6h2v5H2zm0 6v2h5v-2z",
      ],
    },
    "physical-exit": {
      symbolId: "nvidia-react-gui-icons-v1-fill-physical-exit",
      viewBox: "0 0 16 16",
      paths: [
        "M14 14h-3v-1h2V2H8V1h6z",
        "M10.117 6.17 8.718 8.272l-2.463-.659-.546 2.037 2.7.725.862 3.221-.965.258-.714-2.664-2.142-.574-.614 2.292-3.278.879-.261-.966 2.723-.73 1.23-4.59H3.376L2.324 9.082l-.832-.554 1.349-2.027h3.127l2.315.619 1.001-1.505z",
        "M6.514 3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.514 3",
      ],
    },
    "picture-in-picture": {
      symbolId: "nvidia-react-gui-icons-v1-fill-picture-in-picture",
      viewBox: "0 0 16 16",
      paths: ["M1 3h14v10H1Zm11.5 2.5h-5v3h5Z"],
    },
    "pill-bar-stack": {
      symbolId: "nvidia-react-gui-icons-v1-fill-pill-bar-stack",
      viewBox: "0 0 16 16",
      paths: ["M14 2H2v3h12zm0 6H2V7h12zm0 3H2v-1h12zM2 14h12v-1H2z"],
    },
    pin: {
      symbolId: "nvidia-react-gui-icons-v1-fill-pin",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 2h.954l-.422 4.84L4 7.116V10h3.5v5h1v-5H12V7.116l-1.032-.276L10.546 2h.954V1h-7z",
      ],
    },
    "pin-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-pin-off",
      viewBox: "0 0 16 16",
      paths: [
        "M12 7.116v2.056L5.404 2.576 5.455 2h-.627L4.5 1.672V1h7v1h-.954l.422 4.84zM9.293 10l4.353 4.354.708-.708-12-12-.708.708 3.475 3.474-.089 1.012L4 7.116V10h3.5v5h1v-5z",
      ],
    },
    pizza: {
      symbolId: "nvidia-react-gui-icons-v1-fill-pizza",
      viewBox: "0 0 16 16",
      paths: [
        "M3.5 2H3v2h.5c3.887 0 7.28 2.112 9.095 5.249l.25.433 1.733-1-.251-.433A12.5 12.5 0 0 0 3.5 2",
        "M3 15.366V5h.5a9.5 9.5 0 0 1 8.229 4.75l.25.432ZM6.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-4-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0",
      ],
    },
    placesetting: {
      symbolId: "nvidia-react-gui-icons-v1-fill-placesetting",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 3a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 11.5 3m-9 5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M1 6v5h1V6zm13 5V6h1v5zm-2-5v5h1V6z",
      ],
    },
    platformer: {
      symbolId: "nvidia-react-gui-icons-v1-fill-platformer",
      viewBox: "0 0 16 16",
      paths: [
        "M9 14H2v-3h7zm-4-4H4V9h1zm9-1H7V6h7zM8 4a3 3 0 0 0-3 3v1H4V7a4 4 0 0 1 4-4zm2.5-2a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 2",
      ],
    },
    play: {
      symbolId: "nvidia-react-gui-icons-v1-fill-play",
      viewBox: "0 0 16 16",
      paths: ["M12.492 8 5 3.63v8.741z"],
    },
    "plug-receptacle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-plug-receptacle",
      viewBox: "0 0 16 16",
      paths: [
        "m11.099 2.392.901.901 1.646-1.647.708.708L12.707 4l.901.901-1.197 2.395-.704.704.647.646-.707.708-5-5 .707-.708.646.647.704-.704zM7.146 6.146 5.5 7.793 4.354 6.646l-.708.707.647.647-.704.704-1.197 2.395.901.901-1.647 1.646.708.708L4 12.707l.901.901 2.395-1.197.704-.704.646.647.708-.708L8.207 10.5l1.647-1.647-.708-.707L7.5 9.793 6.207 8.5l1.647-1.647z",
      ],
    },
    "plug-usb": {
      symbolId: "nvidia-react-gui-icons-v1-fill-plug-usb",
      viewBox: "0 0 16 16",
      paths: [
        "M6 3v2h1V3zm3 0v2h1V3z",
        "M12 1v7h1v3.678l-3 .804V15H6v-2.518l-3-.804V8h1V1ZM5 8h6V2H5Zm2 6h2v-1.25l-1 .268-1-.268Z",
      ],
    },
    plugin: {
      symbolId: "nvidia-react-gui-icons-v1-fill-plugin",
      viewBox: "0 0 16 16",
      paths: [
        "M6 1v3H3v1h1v2.365L4.706 10H7.5v1.5A1.5 1.5 0 0 1 6 13H3v1h3a2.5 2.5 0 0 0 2.5-2.5V10h2.794L12 7.365V5h1V4h-3V1H9v3H7V1z",
      ],
    },
    podium: {
      symbolId: "nvidia-react-gui-icons-v1-fill-podium",
      viewBox: "0 0 16 16",
      paths: ["M11 2H5v1H2.848l1.34 5H7.5v5H6v1h4v-1H8.5V8h3.312l1.339-5H11z"],
    },
    power: {
      symbolId: "nvidia-react-gui-icons-v1-fill-power",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 1v7h1V1z",
        "M10.5 3.669a5 5 0 1 1-5 0l-.501-.866a6 6 0 1 0 6.002 0z",
      ],
    },
    "power-supply-unit": {
      symbolId: "nvidia-react-gui-icons-v1-fill-power-supply-unit",
      viewBox: "0 0 16 16",
      paths: [
        "m7.5 12.395 7.494-4.613q.005.109.006.218A7 7 0 0 1 1.125 9.317L7.5 5.395z",
        "M8 1a7 7 0 0 1 6.874 5.683L8.5 10.605v-7L1.005 8.217Q1.001 8.109 1 8a7 7 0 0 1 7-7",
      ],
    },
    "prayer-room": {
      symbolId: "nvidia-react-gui-icons-v1-fill-prayer-room",
      viewBox: "0 0 16 16",
      paths: [
        "M1 15v-1h.529l.483-8.219L6.5 1.293l1.5 1.5 1.5-1.5 4.488 4.488.483 8.219H15v1Zm4-4.5h1V8.35l.491-.85H7.5v4.361L6.217 14h3.566L8.5 11.861V7.5h1.009l.491.85v2.15h1V8.082L8 2.886 5 8.082Z",
      ],
    },
    previous: {
      symbolId: "nvidia-react-gui-icons-v1-fill-previous",
      viewBox: "0 0 16 16",
      paths: ["M4 3.5v9h1V8.287l7 4.083V3.629L5 7.713V3.5z"],
    },
    profile: {
      symbolId: "nvidia-react-gui-icons-v1-fill-profile",
      viewBox: "0 0 16 16",
      paths: [
        "M8.152 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m5.151 13-1.608-6H4.608L3 14z",
      ],
    },
    "profile-group": {
      symbolId: "nvidia-react-gui-icons-v1-fill-profile-group",
      viewBox: "0 0 16 16",
      paths: [
        "M6 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m5.152 13L9.544 8H2.456L.849 14zm1.093-4 .804 3h-1.165l.268 1h2.2l-1.34-5h-2.2l.268 1zM11.5 5a1.5 1.5 0 0 0-1.594-1.497l-.062-.998Q9.922 2.5 10 2.5a2.5 2.5 0 0 1 .402 4.968l-.261-.974A1.5 1.5 0 0 0 11.5 5",
      ],
    },
    "profile-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-profile-off",
      viewBox: "0 0 16 16",
      paths: [
        "M12.582 11.875 11.544 8H8.707L7.691 6.984Q7.844 7 8 7a3 3 0 1 0-2.985-2.692L2.354 1.646l-.708.708 12 12 .708-.708zM2.848 14h8.324l-6-6h-.716z",
      ],
    },
    projector: {
      symbolId: "nvidia-react-gui-icons-v1-fill-projector",
      viewBox: "0 0 16 16",
      paths: [
        "M15 2H1v2h14zm-1 3v6h-3.92l.903 3.37-.966.259L9.58 13H6.419l-.436 1.629-.966-.259L5.92 11H2V5Zm-7.313 7h2.625l-.268-1H6.955Z",
      ],
    },
    pulse: {
      symbolId: "nvidia-react-gui-icons-v1-fill-pulse",
      viewBox: "0 0 16 16",
      paths: [
        "m5.552 1.263 2.436 9.089 2.588-7L11.554 7H15v1h-4.214l-.362-1.352-2.589 7-2.387-8.911L4.36 8H1V7h2.64Z",
      ],
    },
    puzzle: {
      symbolId: "nvidia-react-gui-icons-v1-fill-puzzle",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a2 2 0 0 0-2 2H4v2a2 2 0 1 0 0 4v3h3v-1a1 1 0 0 1 2 0v1h4V9h-1a1 1 0 0 1 0-2h1V4h-3a2 2 0 0 0-2-2",
      ],
    },
    qrcode: {
      symbolId: "nvidia-react-gui-icons-v1-fill-qrcode",
      viewBox: "0 0 16 16",
      paths: [
        "M2.5 2.5h2v2h-2z",
        "M6 1v5H1V1ZM2 5h3V2H2Zm5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8.5-1.5h2v2h-2z",
        "M6 10v5H1v-5Zm-4 4h3v-3H2Zm9.5-11.5h2v2h-2z",
        "M15 1v5h-5V1Zm-4 4h3V2h-3Z",
      ],
    },
    radar: {
      symbolId: "nvidia-react-gui-icons-v1-fill-radar",
      viewBox: "0 0 16 16",
      paths: [
        "M7.694 2.008a6 6 0 1 0 5.344 9.253l.839.544A7 7 0 1 1 7.644 1.009z",
        "M6.982 5.177a3 3 0 1 0 2.952 5.116l.645.764a4 4 0 1 1-3.937-6.82z",
        "m9.812 1.237-.483-.129-1.941 7.246 7.246 1.941.129-.483a7.003 7.003 0 0 0-4.951-8.575",
      ],
    },
    radioactive: {
      symbolId: "nvidia-react-gui-icons-v1-fill-radioactive",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a7 7 0 0 0-3.501.937l-.432.25 2.25 3.898.433-.251A2.5 2.5 0 0 1 8 5.5c.456 0 .883.122 1.25.334l.433.251 2.25-3.898-.432-.25A7 7 0 0 0 8 1M5.5 7.5H1V8a7 7 0 0 0 3.499 6.063l.433.25 2.251-3.897-.433-.25A2.5 2.5 0 0 1 5.5 8zm9.5 0V8a7 7 0 0 1-3.499 6.063l-.433.25-2.251-3.897.433-.25A2.5 2.5 0 0 0 10.5 8v-.5zM6.5 8a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 8",
      ],
    },
    ram: {
      symbolId: "nvidia-react-gui-icons-v1-fill-ram",
      viewBox: "0 0 16 16",
      paths: [
        "M2 5h1.5V3h1v2h1V3h1v2h1V3h1v2h1V3h1v2h1V3h1v2H14v6h-1.5v2h-1v-2h-1v2h-1v-2h-1v2h-1v-2h-1v2h-1v-2h-1v2h-1v-2H2z",
      ],
    },
    "ranking-xp": {
      symbolId: "nvidia-react-gui-icons-v1-fill-ranking-xp",
      viewBox: "0 0 16 16",
      paths: [
        "M10 8h1V7h-1z",
        "m8.001 1.072 6 3.464v6.928l-6 3.464-6-3.464V4.536ZM11 6H9v4h1V9h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1M5.5 6h-1v1.44l.7.56-.7.56V10h1v-.96l.5-.4.5.4V10h1V8.56L6.8 8l.7-.56V6h-1v.96l-.5.4-.5-.4Z",
      ],
    },
    record: {
      symbolId: "nvidia-react-gui-icons-v1-fill-record",
      viewBox: "0 0 16 16",
      paths: [
        "M3 8a5 5 0 1 1 10.001.001A5 5 0 0 1 3 8m5-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6",
      ],
    },
    "rectangle-group": {
      symbolId: "nvidia-react-gui-icons-v1-fill-rectangle-group",
      viewBox: "0 0 16 16",
      paths: ["M8 2H3v6h5zm0 7H2v5h6zm6-5H9v8h5z"],
    },
    redo: {
      symbolId: "nvidia-react-gui-icons-v1-fill-redo",
      viewBox: "0 0 16 16",
      paths: [
        "M10.646 5.353c-1.59-1.59-3.935-1.717-5.471-.181a4 4 0 0 0 0 5.656l-.707.707a5 5 0 0 1 0-7.071c1.98-1.979 4.961-1.742 6.886.182l1.645 1.646L13 4h1l-.002 3.998L10 8V7l2.292-.001Z",
      ],
    },
    reference: {
      symbolId: "nvidia-react-gui-icons-v1-fill-reference",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 12.276v-1.082h1v1.082l.938-.541.5.866L7 13.72l-1.938-1.119.5-.866ZM3 6.214v1.083H2V5.059l1.938-1.118.5.866-.938.541.938.541-.5.866Zm2.562.325L7.5 7.657v2.238h-1v-1.66l-1.438-.83ZM7 2.173l1.938 1.118-.5.866L7 3.327l-1.438.83-.5-.866Zm-4 8.083 1.438.829-.5.866L2 10.833V8.596h1Zm8 0v-1.66h1v2.237l-1.938 1.118-.5-.866ZM11 2h4v4h-1V3.707l-3.646 3.647-.708-.708L13.293 3H11Z",
      ],
    },
    refresh: {
      symbolId: "nvidia-react-gui-icons-v1-fill-refresh",
      viewBox: "0 0 16 16",
      paths: [
        "M3 8a5 5 0 0 1 10 0v1.293l1.646-1.647.708.708-2.854 2.853-2.854-2.853.708-.708L12 9.293V8a4 4 0 1 0-2.964 3.865l.258.966A5 5 0 0 1 3 8",
      ],
    },
    remote: {
      symbolId: "nvidia-react-gui-icons-v1-fill-remote",
      viewBox: "0 0 16 16",
      paths: [
        "M5.25 2.236A5.47 5.47 0 0 1 8 1.5c1.003 0 1.941.268 2.75.736l.501-.866A6.5 6.5 0 0 0 8 .5a6.5 6.5 0 0 0-3.251.87zm1 1.732A3.5 3.5 0 0 1 8 3.5c.638 0 1.236.171 1.75.468l.501-.865A4.5 4.5 0 0 0 8 2.5c-.819 0-1.588.219-2.251.603zM7.5 8a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0",
        "M11 5v10H5V5ZM8 6.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8 6.5m-1.25 4v1h1v-1Zm2.5 0h-1v1h1ZM6.75 12v1h1v-1Zm2.5 0h-1v1h1Z",
      ],
    },
    rename: {
      symbolId: "nvidia-react-gui-icons-v1-fill-rename",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 2.385 6.935 2H8v1h-.933L6 3.285v9.429L7.067 13H8v1H6.935L5.5 13.615 4.065 14H3v-1h.934L5 12.714V3.285L3.933 3H3V2h1.065z",
        "m13.493 11.87-.966.26-.57-2.13H9.045l-.57 2.13-.967-.26L9.617 4h1.767ZM9.313 9h2.376l-1.072-4h-.232Z",
      ],
    },
    render: {
      symbolId: "nvidia-react-gui-icons-v1-fill-render",
      viewBox: "0 0 16 16",
      paths: [
        "M6.455 6.773a1.318 1.318 0 1 1 2.636 0 1.318 1.318 0 0 1-2.636 0",
        "M4 3h10v10H4Zm9 1H5v4.211l2.8 1.617 2.85-1.645L13 9.539ZM2 4v8h1V4z",
      ],
    },
    replay: {
      symbolId: "nvidia-react-gui-icons-v1-fill-replay",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8c0 1.432.751 2.688 1.884 3.395l-.53.848a5 5 0 0 1 1.983-9.199l-.691-.69.708-.708L9.707 4H8a4 4 0 0 0-4 4",
        "M6 8a2 2 0 1 0 3.999.001A2 2 0 0 0 6 8",
        "M10.116 4.605A4 4 0 0 1 8 12H6.293l2.353 2.354.708-.708-.691-.69a5 5 0 0 0 1.983-9.199z",
      ],
    },
    "replay-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-replay-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-2.482-2.483c-.7.573-1.559.96-2.501 1.085l.691.69-.708.708L6.293 12H8c.924 0 1.775-.314 2.453-.84L9.016 9.723a2 2 0 0 1-2.739-2.739L4.84 5.547A4 4 0 0 0 4 8c0 1.432.751 2.688 1.884 3.395l-.53.848A5 5 0 0 1 3 8c0-1.201.423-2.302 1.129-3.164L1.646 2.354zM13 8a5 5 0 0 1-.619 2.411l-.658-.946a3.996 3.996 0 0 0-1.607-4.86l.53-.848A5 5 0 0 1 13 8M8 4c-.358 0-.706.047-1.036.136l-.791-.791a5 5 0 0 1 1.164-.301l-.691-.691.708-.707L9.707 4z",
      ],
    },
    reply: {
      symbolId: "nvidia-react-gui-icons-v1-fill-reply",
      viewBox: "0 0 16 16",
      paths: [
        "m4.707 6 1.647 1.646-.708.708L2.793 5.5l2.853-2.854.708.708L4.707 5h8.614l-2.044 7.629-.966-.258L12.018 6Z",
      ],
    },
    reset: {
      symbolId: "nvidia-react-gui-icons-v1-fill-reset",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4a4 4 0 0 0-4 4v1.293l1.146-1.147.708.708L3.5 11.207 1.146 8.854l.708-.708L3 9.293V8a5 5 0 1 1 3.706 4.831l.258-.966Q7.46 11.998 8 12a4 4 0 0 0 0-8",
      ],
    },
    retry: {
      symbolId: "nvidia-react-gui-icons-v1-fill-retry",
      viewBox: "0 0 16 16",
      paths: [
        "M8.354.646 11.207 3.5 8.354 6.354l-.708-.708L9.293 4H8a4 4 0 1 0 4 4h1a5 5 0 1 1-5-5h1.293L7.646 1.354Z",
      ],
    },
    return: {
      symbolId: "nvidia-react-gui-icons-v1-fill-return",
      viewBox: "0 0 16 16",
      paths: [
        "m4.707 6 1.647 1.646-.707.708L2.793 5.5l2.854-2.854.707.708L4.707 5h8.615l-2.144 8H3v-1h7.411l1.607-6Z",
      ],
    },
    "reverse-10": {
      symbolId: "nvidia-react-gui-icons-v1-fill-reverse-10",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8a5 5 0 1 1 5 5v1a6 6 0 1 0-5.898-7.105L1.854 5.646l-.708.708L4 9.207z",
        "M6 5h1.01v1.125H7v3.75h.01V11H6zm2 1.125C8 5.422 8.649 5 9.25 5h1.5c.601 0 1.25.422 1.25 1.125v3.75c0 .703-.649 1.125-1.25 1.125h-1.5C8.649 11 8 10.578 8 9.875Zm1.04-.058C9 6.1 9 6.123 9 6.125v3.75c0 .002 0 .025.04.058a.33.33 0 0 0 .21.067h1.5a.33.33 0 0 0 .21-.067c.04-.033.04-.056.04-.058v-3.75c0-.002 0-.025-.04-.058A.33.33 0 0 0 10.75 6h-1.5a.33.33 0 0 0-.21.067",
      ],
    },
    river: {
      symbolId: "nvidia-react-gui-icons-v1-fill-river",
      viewBox: "0 0 16 16",
      paths: [
        "M1.5 5c0 .694.357 1.214.848 1.541C2.823 6.858 3.426 7 4 7s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29C6.823 6.858 7.426 7 8 7s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29C10.823 6.858 11.426 7 12 7s1.177-.142 1.652-.459c.491-.327.848-.847.848-1.541h-1c0 .306-.143.536-.402.709C12.823 5.892 12.426 6 12 6s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709h-1c0 .306-.143.536-.402.709C8.823 5.892 8.426 6 8 6s-.823-.108-1.098-.291C6.643 5.536 6.5 5.306 6.5 5h-1c0 .306-.143.536-.402.709C4.823 5.892 4.426 6 4 6s-.823-.108-1.098-.291C2.643 5.536 2.5 5.306 2.5 5zm0 4c0 .694.357 1.214.848 1.541C2.823 10.858 3.426 11 4 11s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29C6.823 10.858 7.426 11 8 11s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29c.475.317 1.078.459 1.652.459s1.177-.142 1.652-.459c.491-.327.848-.847.848-1.541h-1c0 .306-.143.536-.402.709-.275.183-.672.291-1.098.291s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709h-1c0 .306-.143.536-.402.709C8.823 9.892 8.426 10 8 10s-.823-.108-1.098-.291C6.643 9.536 6.5 9.306 6.5 9h-1c0 .306-.143.536-.402.709C4.823 9.892 4.426 10 4 10s-.823-.108-1.098-.291C2.643 9.536 2.5 9.306 2.5 9z",
      ],
    },
    robot: {
      symbolId: "nvidia-react-gui-icons-v1-fill-robot",
      viewBox: "0 0 16 16",
      paths: [
        "M12.884 15H3.116l1.34-5h7.088zM9.891 3H13v2.5h1V5h1v2h-1v-.5h-1V9H3V6.5H2V7H1V5h1v.5h1V3h3.109l.5-2h2.782ZM5 5.5v1h6v-1Z",
      ],
    },
    "robot-arm": {
      symbolId: "nvidia-react-gui-icons-v1-fill-robot-arm",
      viewBox: "0 0 16 16",
      paths: [
        "M8.982 4.743C8.692 4.907 8.357 5 8 5a2 2 0 0 1-1.016-.277L5.586 6.121C5.848 6.517 6 6.99 6 7.5q-.001.388-.112.742L9.646 12h4.238l.804 3H1.313l.804-3h3.287L3.402 9.998a2.5 2.5 0 1 1 1.477-4.584l1.398-1.398a2 2 0 1 1 3.426.033l1.793 1.748.297-.297h1.914l1.647 1.646-.708.708L13.293 6.5h-1.086l-.707.707v1.086l1.354 1.353-.708.708L10.5 8.707V6.793l.288-.289ZM3.535 9A1.5 1.5 0 1 0 3.5 9zM9 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0",
      ],
    },
    "robot-delivery": {
      symbolId: "nvidia-react-gui-icons-v1-fill-robot-delivery",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3h1.348l.536 2h7l.937 3.5-.529 1.975A2 2 0 1 1 11 12h-1a2 2 0 1 1-4 0H5a2 2 0 1 1-3-1.731V5.434L2.657 3H4V2h1Zm8 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "robot-torso": {
      symbolId: "nvidia-react-gui-icons-v1-fill-robot-torso",
      viewBox: "0 0 16 16",
      paths: [
        "M9.136 2H12v2h1v1h-1v2H8.5v1h2.383l.268 1h1.484a1 1 0 0 1 .527-.441l.587-2.189.966.26-.567 2.11A1 1 0 1 1 12.635 10h-1.216l.804 3H8.5v1H10v1H6v-1h1.5v-1H3.776l.804-3H3.365a1 1 0 1 1-1.572-1.208l-.58-2.162.967-.26.579 2.165c.258.069.475.239.606.465h1.483l.268-1H7.5V7H4V5H3V4h1V2h2.864l.242-1h1.788ZM6 4v1h4V4Z",
      ],
    },
    "robot-wheels": {
      symbolId: "nvidia-react-gui-icons-v1-fill-robot-wheels",
      viewBox: "0 0 16 16",
      paths: [
        "M9.136 2H12v2h1v1h-1v2H8.5v1h3.383l.536 2H14v5h-4v-2H6v2H2v-5h1.58l.536-2H7.5V7H4V5H3V4h1V2h2.864l.242-1h1.788ZM3 14h2v-3H3Zm8-3v3h2v-3ZM6 5h4V4H6Z",
      ],
    },
    rock: {
      symbolId: "nvidia-react-gui-icons-v1-fill-rock",
      viewBox: "0 0 16 16",
      paths: [
        "M13.485 4.248 10.6 1.94 7.087 3.111 5.938 7.398l2.372.791 2.69 2.69v3.642l3.018-1.743z",
        "M4.461 7.96 7.77 9.063l2.23 2.23v2.475l-1.874 1.249-4.856-.539-1.806-1.806.585-3.505z",
      ],
    },
    rocket: {
      symbolId: "nvidia-react-gui-icons-v1-fill-rocket",
      viewBox: "0 0 16 16",
      paths: [
        "M7.808 4.515a8 8 0 0 0-.419.389L4.293 8h-2l-1.5 1.5L2.5 11.207l1-1 .793.793-1.146 1.146.707.708L5 11.707l.793.793-1 1L6.5 15.207l1.5-1.5v-2l3.096-3.096q.201-.2.389-.419zm4.288 2.874c.807-1.217 1.317-2.732.878-4.047l-.079-.237-.237-.079c-1.315-.439-2.829.071-4.046.878z",
      ],
    },
    rotate: {
      symbolId: "nvidia-react-gui-icons-v1-fill-rotate",
      viewBox: "0 0 16 16",
      paths: [
        "M3.613 5.833C2.474 6.359 2 6.984 2 7.5s.474 1.142 1.613 1.667C4.71 9.674 6.261 10 8 10h.293l-.647-.646.708-.708 1.853 1.854-1.853 1.854-.708-.708.647-.646H8c-1.85 0-3.55-.345-4.806-.925C1.981 9.515 1 8.641 1 7.5s.981-2.015 2.194-2.575C4.45 4.345 6.15 4 8 4s3.55.345 4.806.925C14.019 5.485 15 6.359 15 7.5c0 .663-.34 1.241-.84 1.704s-1.189.842-1.99 1.131l-.34-.94c.721-.261 1.281-.582 1.651-.925.369-.342.519-.672.519-.97 0-.516-.474-1.141-1.613-1.667C11.29 5.326 9.739 5 8 5s-3.29.326-4.387.833",
      ],
    },
    "rotate-3d": {
      symbolId: "nvidia-react-gui-icons-v1-fill-rotate-3d",
      viewBox: "0 0 16 16",
      paths: [
        "M10.08 12.502c.551-1.1.92-2.691.92-4.502 0-.981-.108-1.897-.295-2.705A12 12 0 0 0 8 5c-.579 0-1.135.038-1.66.107a11.6 11.6 0 0 0-.32 2.166l.626-.627.708.708L5.5 9.207 3.646 7.354l.708-.708.663.664c.034-.706.121-1.381.253-2.009a8 8 0 0 0-1.773.619C2.337 6.5 2 7.116 2 7.5s.337 1 1.497 1.58C4.598 9.631 6.189 10 8 10q.146 0 .29-.003l-.644-.643.708-.708 1.853 1.854-1.853 1.854-.708-.708.65-.649Q8.149 11 8 11c-3.866 0-7-1.567-7-3.5 0-1.503 1.894-2.784 4.554-3.28C6.176 2.283 7.263 1 8.5 1c1.29 0 2.418 1.397 3.025 3.475C13.603 5.082 15 6.21 15 7.5c0 .988-.819 1.881-2.137 2.518q.081-.589.115-1.205C13.758 8.317 14 7.825 14 7.5c0-.384-.337-1-1.498-1.58a7 7 0 0 0-.71-.305C11.927 6.359 12 7.162 12 8c0 3.866-1.567 7-3.5 7-1.233 0-2.317-1.276-2.941-3.203q.542.093 1.112.144.117.3.249.561C7.5 13.663 8.116 14 8.5 14s1-.337 1.58-1.498m.305-8.294a7 7 0 0 0-.305-.711C9.5 2.337 8.884 2 8.5 2s-1 .337-1.58 1.497a7 7 0 0 0-.25.566Q7.316 4.001 8 4c.838 0 1.641.074 2.385.208",
      ],
    },
    "rotate-90-clockwise": {
      symbolId: "nvidia-react-gui-icons-v1-fill-rotate-90-clockwise",
      viewBox: "0 0 16 16",
      paths: [
        "M6.646 5.646 7.793 4.5H6.5A2.5 2.5 0 0 0 4 7H3a3.5 3.5 0 0 1 3.5-3.5h1.293L6.646 2.354l.708-.708L9.707 4 7.354 6.354zM5 7h6v6H5z",
      ],
    },
    "rotate-90-counter": {
      symbolId: "nvidia-react-gui-icons-v1-fill-rotate-90-counter",
      viewBox: "0 0 16 16",
      paths: [
        "M9.354 5.646 8.207 4.5H9.5A2.5 2.5 0 0 1 12 7h1a3.5 3.5 0 0 0-3.5-3.5H8.207l1.147-1.146-.708-.708L6.293 4l2.353 2.354zM5 7h6v6H5z",
      ],
    },
    "rotate-global": {
      symbolId: "nvidia-react-gui-icons-v1-fill-rotate-global",
      viewBox: "0 0 16 16",
      paths: [
        "M8 3a5 5 0 0 1 5 5v.293l-.646-.647-.707.708 1.853 1.853 1.854-1.853-.707-.708-.647.647V8a6 6 0 0 0-6-6zM4.354 7.646 2.5 5.793.647 7.646l.707.708L2 7.707V8a6 6 0 0 0 6 6v-1a5 5 0 0 1-5-5v-.293l.647.647zM5.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0",
      ],
    },
    route: {
      symbolId: "nvidia-react-gui-icons-v1-fill-route",
      viewBox: "0 0 16 16",
      paths: [
        "m14.5 12.347-4.47 1.676L6 13.016l-4.5 1.125v-3.434l2.5-2.5 2 2L7.207 9H8V8H6.793L6 8.793l-2-2-2.5 2.5V3.11l4.53-1.133L10 3.466l4.5-1.687Zm-2.858-2.408c.391-.494.858-1.241.858-2.057 0-1.007-.921-1.882-2-1.882s-2 .875-2 1.882c0 .816.467 1.563.858 2.057.337.426.728.783 1.142 1.13.414-.347.805-.704 1.142-1.13",
      ],
    },
    ruler: {
      symbolId: "nvidia-react-gui-icons-v1-fill-ruler",
      viewBox: "0 0 16 16",
      paths: [
        "M11 1.293 14.707 5l-1.5 1.5-1.353-1.354-.708.708L12.5 7.207 11.707 8 9.354 5.646l-.707.708L11 8.707l-.793.793-1.353-1.354-.707.708L9.5 10.207 8.707 11 6.354 8.646l-.707.708L8 11.707l-.793.793-1.353-1.354-.707.708L6.5 13.207l-1.5 1.5L1.293 11z",
      ],
    },
    running: {
      symbolId: "nvidia-react-gui-icons-v1-fill-running",
      viewBox: "0 0 16 16",
      paths: [
        "M10 3.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 10 3.5",
        "m12.418 6.607-6-3.464-2.503 2.503.707.708 1.96-1.961 2.104 1.214-7.54 7.539.708.708 5.228-5.229 2.104 1.214-2.54 2.54.708.707 3.46-3.461-3-1.732 1.768-1.768 3 1.732 2.504-2.503-.707-.708z",
      ],
    },
    sailboat: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sailboat",
      viewBox: "0 0 16 16",
      paths: ["M8 1v.866L11.541 8H8v1h6v4H4.293L1.5 10.207V9H7V1z"],
    },
    sand: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sand",
      viewBox: "0 0 16 16",
      paths: [
        "M12 9V2h-1v5h-.5a.5.5 0 0 1-.5-.5V4H9v2.5A1.5 1.5 0 0 0 10.5 8h.5v3.164q-.528.044-1.033.096L6.5 7.793l-5.354 5.353.525.824h.001l.006-.003.025-.008.105-.037q.14-.048.421-.135c.371-.116.922-.276 1.63-.454a44.5 44.5 0 0 1 5.978-1.053c1.556-.169 3.29-.28 5.163-.28v-1c-1.044 0-2.046.034-3 .092V10h.5A1.5 1.5 0 0 0 14 8.5V6h-1v2.5a.5.5 0 0 1-.5.5z",
      ],
    },
    "saw-wave": {
      symbolId: "nvidia-react-gui-icons-v1-fill-saw-wave",
      viewBox: "0 0 16 16",
      paths: [
        "M8.519 4.606v3.998l5.718-3.53.526.851-7.244 4.471V6.393L1.762 9.926l-.523-.852Z",
      ],
    },
    scale: {
      symbolId: "nvidia-react-gui-icons-v1-fill-scale",
      viewBox: "0 0 16 16",
      paths: [
        "M8 8H2v6h6z",
        "M14 2H2v4h1V3h10v10h-3v1h4z",
        "M10.294 4.999 8.646 6.646l.707.708 1.649-1.648V7h1V3.999H9v1z",
      ],
    },
    "scale-balance": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scale-balance",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 3v1H1v1h2v2H.848l.804 3h3.696l.804-3H4V5h3.5v7H6v1h4v-1H8.5V5H12v2H9.848l.804 3h3.696l.804-3H13V5h2V4H8.5V3z",
      ],
    },
    "scale-down": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scale-down",
      viewBox: "0 0 16 16",
      paths: [
        "M14 6.5v1H2v-1Zm-12 3v-1h12v1Zm6 .793 2.354 2.353-.708.708L8.5 12.207V15h-1v-2.793l-1.146 1.147-.708-.708ZM8.5 1v2.793l1.146-1.147.708.708L8 5.707 5.646 3.354l.708-.708L7.5 3.793V1Z",
      ],
    },
    "scale-relative": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scale-relative",
      viewBox: "0 0 16 16",
      paths: [
        "M15 3v10.5h-5v-1H9v1H1v-6h1v-1H1V3ZM3 7.5h1v-1H3Zm2 0h1v-1H5Zm3 0v-1H7v1Zm1 0h1v-1H9Zm0 1v1h1v-1Zm0 3h1v-1H9Z",
      ],
    },
    "scale-relative-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scale-relative-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708-1.853-1.854H10v-1H9v1H1v-6h1v-1H1V3h1.293L.646 1.354ZM3 7.5h1v-1H3Zm2.793-1H5v1h1v-.793Zm4 4H9v1h1v-.793Z",
        "M15 3v9.172L5.828 3Z",
      ],
    },
    "scale-reset": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scale-reset",
      viewBox: "0 0 16 16",
      paths: [
        "M4 8a4 4 0 1 1 4 4v-1a3 3 0 1 0-3-3v.293l.646-.647.708.708L4.5 10.207 2.646 8.354l.708-.708.646.647Zm10-5H2V2h12Zm0 10v1H2v-1Z",
      ],
    },
    "scale-up": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scale-up",
      viewBox: "0 0 16 16",
      paths: [
        "m8 3.293 2.354 2.353-.708.708L8.5 5.207v5.586l1.146-1.147.708.708L8 12.707l-2.354-2.353.708-.708L7.5 10.793V5.207L6.354 6.354l-.708-.708ZM14 3H2V2h12Zm0 10v1H2v-1Z",
      ],
    },
    school: {
      symbolId: "nvidia-react-gui-icons-v1-fill-school",
      viewBox: "0 0 16 16",
      paths: [
        "M10 2v2H8.5v.26l2.5 2V14H9v-3H7v3H5V6.26l2.5-2V2ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 1v4h3v-4zM1 10h3v4H1z",
      ],
    },
    scissors: {
      symbolId: "nvidia-react-gui-icons-v1-fill-scissors",
      viewBox: "0 0 16 16",
      paths: [
        "M2 4.5a2.5 2.5 0 1 1 4.45 1.564l2.354 1.359 4.946-2.856.5.866L9.804 8l4.446 2.567-.5.866-4.946-2.856L6.45 9.936a2.5 2.5 0 1 1-.833-.673L7.804 8 5.617 6.737A2.5 2.5 0 0 1 2 4.5M4.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 3m0 7a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 10",
      ],
    },
    "scm-branch": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scm-branch",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h4v4H4.5v4H6v.268l5.5-3.175V6H10V2h4v4h-1.5v1.67L6 11.423V14H2v-4h1.5V6H2z",
      ],
    },
    "scm-compare": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scm-compare",
      viewBox: "0 0 16 16",
      paths: [
        "M10.354 5.646 9.207 4.5H11.5V10H10v4h4v-4h-1.5V3.5H9.207l1.147-1.146-.708-.708L7.293 4l2.353 2.354zM6 2H2v4h1.5v6.5h3.293l-1.147 1.146.708.708L8.707 12 6.354 9.646l-.708.708L6.793 11.5H4.5V6H6z",
      ],
    },
    "scm-fork": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scm-fork",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2H2v4h2.018l.804 3H7.5v1H6v4h4v-4H8.5V9h2.678l.804-3H14V2h-4v4h.947l-.536 2H5.589l-.535-2H6z",
      ],
    },
    "scm-merge": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scm-merge",
      viewBox: "0 0 16 16",
      paths: [
        "M2 14h4v-4H4.5V6H6v-.268l5.5 3.175V10H10v4h4v-4h-1.5V8.33L6 4.577V2H2v4h1.5v4H2z",
      ],
    },
    "scm-pull": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scm-pull",
      viewBox: "0 0 16 16",
      paths: [
        "m9.207 4.5 1.147 1.146-.707.708L7.293 4l2.354-2.354.707.708L9.207 3.5H12.5V10H14v4h-4v-4h1.5V4.5zM6 2H2v4h1.5v4H2v4h4v-4H4.5V6H6z",
      ],
    },
    "scm-pull-close": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scm-pull-close",
      viewBox: "0 0 16 16",
      paths: [
        "M9.646 2.354 11.293 4 9.646 5.646l.708.708L12 4.707l1.646 1.647.708-.708L12.707 4l1.647-1.646-.708-.708L12 3.293l-1.646-1.647zM2 2h4v4H4.5v4H6v4H2v-4h1.5V6H2zm9.5 8H10v4h4v-4h-1.5V7h-1z",
      ],
    },
    "scm-pull-draft": {
      symbolId: "nvidia-react-gui-icons-v1-fill-scm-pull-draft",
      viewBox: "0 0 16 16",
      paths: [
        "M6 2H2v4h1.5v4H2v4h4v-4H4.5V6H6zm8 8h-4v4h4zm-1-4h-2v2h2zm0-3h-2v2h2z",
      ],
    },
    "sd-card": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sd-card",
      viewBox: "0 0 16 16",
      paths: [
        "M4.793 2H13v3h-.5v1h.5v8H3V3.793ZM7 4v3h1V4Zm3 0H9v3h1Zm-4 .5H5V7h1Z",
      ],
    },
    sea: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sea",
      viewBox: "0 0 16 16",
      paths: [
        "M2.348 4.541C1.857 4.214 1.5 3.694 1.5 3h1c0 .306.143.536.402.709C3.177 3.892 3.574 4 4 4s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 3.892 7.574 4 8 4s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 4.858 12.574 5 12 5s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 4.858 8.574 5 8 5s-1.177-.142-1.652-.459A2 2 0 0 1 6 4.251a2 2 0 0 1-.348.29C5.177 4.858 4.574 5 4 5s-1.177-.142-1.652-.459m0 4C1.857 8.214 1.5 7.694 1.5 7h1c0 .306.143.536.402.709C3.177 7.892 3.574 8 4 8s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709C7.177 7.892 7.574 8 8 8s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .306.143.536.402.709.275.183.672.291 1.098.291s.823-.108 1.098-.291c.259-.173.402-.403.402-.709h1c0 .694-.357 1.214-.848 1.541C13.177 8.858 12.574 9 12 9s-1.177-.142-1.652-.459a2 2 0 0 1-.348-.29 2 2 0 0 1-.348.29C9.177 8.858 8.574 9 8 9s-1.177-.142-1.652-.459A2 2 0 0 1 6 8.251a2 2 0 0 1-.348.29C5.177 8.858 4.574 9 4 9s-1.177-.142-1.652-.459M1.5 11c0 .694.357 1.214.848 1.541C2.823 12.858 3.426 13 4 13s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29C6.823 12.858 7.426 13 8 13s1.177-.142 1.652-.459q.19-.126.348-.29.158.164.348.29c.475.317 1.078.459 1.652.459s1.177-.142 1.652-.459c.491-.327.848-.847.848-1.541h-1c0 .306-.143.536-.402.709-.275.183-.672.291-1.098.291s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709h-1c0 .306-.143.536-.402.709C8.823 11.892 8.426 12 8 12s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709h-1c0 .306-.143.536-.402.709C4.823 11.892 4.426 12 4 12s-.823-.108-1.098-.291c-.259-.173-.402-.403-.402-.709z",
      ],
    },
    section: {
      symbolId: "nvidia-react-gui-icons-v1-fill-section",
      viewBox: "0 0 16 16",
      paths: [
        "m5.642 14.87.325-1.204A6 6 0 0 1 9.062 2.115L9.393.871l.967.258L6.608 15.13zm4.469-2.318a5 5 0 0 1-1.677.451l.087.996a6 6 0 0 0 2.013-.541zm2.419-2.418a5 5 0 0 1-.996 1.422l.707.708a6 6 0 0 0 1.196-1.708zm.299-3.408c.148.554.203 1.138.151 1.729l.996.089a6 6 0 0 0-.182-2.077zm-1.962-2.803c.482.338.895.755 1.227 1.229l.819-.573a6 6 0 0 0-1.473-1.475z",
      ],
    },
    "section-bottom": {
      symbolId: "nvidia-react-gui-icons-v1-fill-section-bottom",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 0 0-5.979 5.499L.754 7.498l-.002 1h14.495l-.001-1-1.267.001A6 6 0 0 0 8 2m-5.619 8.053a6 6 0 0 0 1.043 1.804l.766-.643a5 5 0 0 1-.87-1.503zm10.235 1.804a6 6 0 0 0 1.044-1.804l-.94-.342a5 5 0 0 1-.87 1.503zm-7.597 1.34c.596.344 1.257.59 1.96.713l.172-.985a5 5 0 0 1-1.631-.594zm4.042.713a6 6 0 0 0 1.96-.713l-.501-.866a5 5 0 0 1-1.631.594z",
      ],
    },
    "section-top": {
      symbolId: "nvidia-react-gui-icons-v1-fill-section-top",
      viewBox: "0 0 16 16",
      paths: [
        "M8.889 3.072a5 5 0 0 1 1.631.594l.5-.866a6 6 0 0 0-1.959-.713zm-3.369.594a5 5 0 0 1 1.631-.594l-.173-.985a6 6 0 0 0-1.959.713zm6.33 1.117c.372.443.668.95.87 1.503l.939-.342a6 6 0 0 0-1.043-1.804zM3.32 6.286c.201-.553.497-1.06.869-1.503l-.765-.643A6 6 0 0 0 2.38 5.944zM13.5 7.497h-11l-1.748.002.001 1 1.267-.001a6.001 6.001 0 0 0 11.959 0l1.267.001.001-1z",
      ],
    },
    secure: {
      symbolId: "nvidia-react-gui-icons-v1-fill-secure",
      viewBox: "0 0 16 16",
      paths: [
        "m8 2.009 5.978 1.601.021.361v.003L14 3.98l.001.021.003.077q.004.102.006.286c.002.245-.002.594-.027 1.016a16 16 0 0 1-.5 3.188c-.645 2.384-2.102 5.102-5.362 5.917l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016q.002-.184.006-.286l.003-.077L2 3.98l.001-.006v-.002L2.5 4l-.499-.029.021-.361Zm-.476 8.222 3.852-4.402-.752-.658-3.148 3.597-1.622-1.622-.708.707Z",
      ],
    },
    seed: {
      symbolId: "nvidia-react-gui-icons-v1-fill-seed",
      viewBox: "0 0 16 16",
      paths: [
        "m9.353 1.354-.853.853v1.246l4.632 1.241L14.018 8H1.982l.886-3.306L7.5 3.453v-1.66L8.646.646zM12.482 9H3.518l1.095 4.088L8 15.043l3.386-1.955z",
      ],
    },
    segmap: {
      symbolId: "nvidia-react-gui-icons-v1-fill-segmap",
      viewBox: "0 0 16 16",
      paths: [
        "M2 3h10v10H2Zm1 1v5.293L8.293 4Zm8 6.293V4H9.707l-2.5 2.5ZM13 4v8h1V4z",
      ],
    },
    segment: {
      symbolId: "nvidia-react-gui-icons-v1-fill-segment",
      viewBox: "0 0 16 16",
      paths: [
        "m7 1.226 5.5 3.176-5 2.887v5.773L2 9.887V4.113Zm8 4.31v6.351l-5.5 3.175V8.711Zm-8 .887 3.5-2.021L7 2.381 3.5 4.402ZM3 5.268v4.041l3.5 2.021V7.289Z",
      ],
    },
    "select-brush": {
      symbolId: "nvidia-react-gui-icons-v1-fill-select-brush",
      viewBox: "0 0 16 16",
      paths: [
        "m12.353 5.146-1.5-1.5L13 1.5 14.5 3zm-2.207-.793L8.853 5.646l1.501 1.5 1.292-1.293zM10 8.207 7.792 6H7.75a2 2 0 0 0-1.461.613c-.33.328-.577.752-.786 1.112l-.016.027c-.39.671-.675 1.117-1.145 1.274l-.547.182.258.516c.335.671.956 1.026 1.59 1.193.631.167 1.327.163 1.927.078C8.896 10.808 10 9.794 10 8.25zm-6.776-.439a5 5 0 0 0-.63.489l.677.737a4 4 0 0 1 .505-.392zm10.181.489a5 5 0 0 0-.629-.489l-.552.834q.282.187.505.392zM1.65 9.63a2.6 2.6 0 0 0 .105 1.999l.907-.422A1.65 1.65 0 0 1 2.5 10.5q0-.274.094-.54zm12.85.87q-.002-.452-.15-.87l-.944.33q.093.265.094.54 0 .36-.162.707l.907.422A2.7 2.7 0 0 0 14.5 10.5M3.198 13.215a7.1 7.1 0 0 0 1.847.857l.295-.956a6.1 6.1 0 0 1-1.586-.733zm7.757.857a7.1 7.1 0 0 0 1.847-.857l-.556-.832a6.1 6.1 0 0 1-1.586.733zm-3.949.382q.487.046.994.046t.994-.046l-.092-.995a10 10 0 0 1-1.804 0z",
      ],
    },
    "select-ellipse": {
      symbolId: "nvidia-react-gui-icons-v1-fill-select-ellipse",
      viewBox: "0 0 16 16",
      paths: [
        "M8.976 12.905a5 5 0 0 0 1.802-.748l.555.832a6 6 0 0 1-2.162.897Zm-1.952-9.81a5 5 0 0 0-1.802.748l-.555-.832a6 6 0 0 1 2.162-.897ZM3.095 8.976c.124.625.37 1.237.748 1.802l-.832.555a6 6 0 0 1-.897-2.162Zm9.81-1.952a5 5 0 0 0-.748-1.802l.832-.555c.451.675.748 1.41.897 2.162Zm-.747 3.755c.368-.55.619-1.164.746-1.804l.981.195a6 6 0 0 1-.895 2.164ZM3.842 5.221a5 5 0 0 0-.746 1.803l-.981-.195a6 6 0 0 1 .895-2.163Zm1.379 6.937c.55.368 1.164.619 1.804.746l-.195.981a6 6 0 0 1-2.164-.895Zm5.558-8.316a5 5 0 0 0-1.803-.746l.195-.981a6 6 0 0 1 2.163.895Z",
      ],
    },
    "select-polygon": {
      symbolId: "nvidia-react-gui-icons-v1-fill-select-polygon",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h2v1H3v1H2Zm4.5 0h3v1h-3ZM2 9.5v-3h1v3ZM2 12h1v1h1v1H2Zm7.5 2h-3v-1h3ZM8.146 6.646l.708.708L8.207 8l.647.646-.708.708L6.793 8ZM12 13.207l-.354-.353.708-.708L14.207 14H12ZM12 2h2.207l-1.853 1.854-.708-.708.354-.353Zm-1.354 9.854-1.5-1.5.708-.708 1.5 1.5Zm-1.5-6.208 1.5-1.5.708.708-1.5 1.5Z",
      ],
    },
    "select-rectangle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-select-rectangle",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h2v1H3v1H2Zm4.5 0h3v1h-3ZM12 2h2v2h-1V3h-1ZM2 9.5v-3h1v3Zm12-3v3h-1v-3ZM2 12h1v1h1v1H2Zm12 0v2h-2v-1h1v-1Zm-4.5 2h-3v-1h3Z",
      ],
    },
    "send-image": {
      symbolId: "nvidia-react-gui-icons-v1-fill-send-image",
      viewBox: "0 0 16 16",
      paths: [
        "M10.354 3.646 8 1.293 5.646 3.646l.708.708L7.5 3.207V6h1V3.207l1.146 1.147z",
        "M3 5h2v1H4v3.211l2.8 1.617 2.85-1.645L12 10.54V6h-1V5h2v9H3Z",
        "M5.454 7.773a1.319 1.319 0 1 1 2.637.001 1.319 1.319 0 0 1-2.637-.001",
      ],
    },
    sensor: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sensor",
      viewBox: "0 0 16 16",
      paths: [
        "M9 2a5 5 0 0 0 5 5v1a6 6 0 0 1-6-6z",
        "M14 5a3 3 0 0 1-3-3h-1a4 4 0 0 0 4 4z",
        "M14 3a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2zM4.94 4.111a3.5 3.5 0 0 0-.636 4.079 3.57 3.57 0 0 0 1.527 1.515q.357.182.733.277a3.5 3.5 0 0 0 3.326-.921l.707.707a4.5 4.5 0 0 1-4.26 1.188l.815 3.04H1.848l1.481-5.525a4.5 4.5 0 0 1 .904-5.067z",
      ],
    },
    "service-account": {
      symbolId: "nvidia-react-gui-icons-v1-fill-service-account",
      viewBox: "0 0 16 16",
      paths: [
        "M11.151 15H4.849l1.071-4h4.16z",
        "m9.516 1.153.139 1.601a5.5 5.5 0 0 1 2.059 1.189l1.456-.678a9.3 9.3 0 0 1 1.518 2.624l-1.318.922a5.6 5.6 0 0 1 0 2.377l1.318.923a9.2 9.2 0 0 1-1.517 2.624l-1.726-.804-.718-2.68a3 3 0 1 0-5.455 0l-.717 2.68-1.725.803a9.2 9.2 0 0 1-1.518-2.623l1.318-.923a5.6 5.6 0 0 1 0-2.377l-1.318-.922A9.3 9.3 0 0 1 2.83 3.265l1.455.678a5.5 5.5 0 0 1 2.059-1.188l.14-1.602a9.2 9.2 0 0 1 3.032 0",
        "M8 6a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 6",
      ],
    },
    shader: {
      symbolId: "nvidia-react-gui-icons-v1-fill-shader",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 0 1 11.995-.246 4.5 4.5 0 0 0-6.241 6.241A6 6 0 0 1 2 8m2.645-.732c.391.391 1.182.233 1.768-.353s.744-1.377.354-1.768c-.391-.39-1.182-.232-1.768.354-.586.585-.744 1.377-.354 1.767",
        "M11 9.05V8h1v1.05a2.5 2.5 0 0 1 1.371.792l.911-.525.5.866-.91.525a2.5 2.5 0 0 1 0 1.584l.91.525-.5.866-.911-.525A2.5 2.5 0 0 1 12 13.95V15h-1v-1.05a2.5 2.5 0 0 1-1.371-.792l-.91.525-.5-.866.909-.525a2.5 2.5 0 0 1 0-1.584l-.909-.525.5-.866.91.525A2.5 2.5 0 0 1 11 9.05m.5.95a1.503 1.503 0 0 0-1.5 1.5 1.495 1.495 0 0 0 1.5 1.5 1.5 1.5 0 1 0 0-3",
      ],
    },
    "shader-ball": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shader-ball",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a5.5 5.5 0 0 1 3.783 9.492c.305.097.578.208.811.331.235.125.45.276.613.459.165.186.293.429.293.718v1c0 .45-.302.777-.604.992-.315.223-.738.404-1.217.548-.963.288-2.264.46-3.679.46s-2.716-.172-3.679-.46c-.479-.144-.902-.325-1.217-.548-.302-.215-.604-.542-.604-.992v-1c0-.289.128-.532.293-.718.163-.183.378-.334.613-.459q.352-.185.811-.331A5.5 5.5 0 0 1 8 1M3.876 11.706a1.2 1.2 0 0 0-.334.239.2.2 0 0 0-.042.06v.988c.004.012.032.076.182.183.191.135.5.278.926.406C5.455 13.836 6.654 14 8 14s2.545-.164 3.392-.418c.426-.128.735-.271.926-.406.15-.107.178-.171.182-.183v-.988a.2.2 0 0 0-.042-.06 1.2 1.2 0 0 0-.334-.239c-.314-.167-.778-.324-1.365-.447A5.5 5.5 0 0 1 8 12a5.5 5.5 0 0 1-2.759-.741c-.587.123-1.051.28-1.365.447M11 6.325a3 3 0 0 1-3 3v1a4 4 0 0 0 4-4ZM6.913 5.74c.586-.586.744-1.378.354-1.768-.391-.391-1.182-.232-1.768.353-.586.586-.744 1.378-.354 1.768.391.391 1.182.232 1.768-.353m.658 3.554a3 3 0 0 1-.856-.258l-.43.904c.356.168.74.286 1.144.344Zm-4.072 2.715.001-.002Z",
      ],
    },
    "shape-circle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shape-circle",
      viewBox: "0 0 16 16",
      paths: ["M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8"],
    },
    "shape-circle-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shape-circle-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-1.772-1.772a6 6 0 0 1-8.455-8.456L1.646 2.354zM14 8c0 .926-.21 1.804-.585 2.587L5.413 2.585A6 6 0 0 1 14 8",
      ],
    },
    "shape-hexagon": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shape-hexagon",
      viewBox: "0 0 16 16",
      paths: ["m2.001 4.536 6-3.464 6 3.464v6.928l-6 3.464-6-3.464z"],
    },
    "shape-octagon": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shape-octagon",
      viewBox: "0 0 16 16",
      paths: ["M5.515 2h4.97L14 5.515v4.97L10.485 14h-4.97L2 10.485v-4.97z"],
    },
    "shape-square": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shape-square",
      viewBox: "0 0 16 16",
      paths: ["M2 2h12v12H2z"],
    },
    "shape-square-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shape-square-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 14 14-.708.708L13.293 14H2V2.707L.646 1.354ZM14 2v9.172L4.828 2Z",
      ],
    },
    "shape-triangle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shape-triangle",
      viewBox: "0 0 16 16",
      paths: ["m8 1.24 7.366 12.758H.634z"],
    },
    shapes: {
      symbolId: "nvidia-react-gui-icons-v1-fill-shapes",
      viewBox: "0 0 16 16",
      paths: [
        "M7.362 7 4.5 1.992 1.638 7zM14 2h-3v1h1.293L9.646 5.646l.708.708L13 3.707V5h1zM4.5 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M14 9H9v5h5z",
      ],
    },
    share: {
      symbolId: "nvidia-react-gui-icons-v1-fill-share",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 1a2.5 2.5 0 0 0-2.343 3.375l-2.53 1.581.53.848 2.531-1.582A2.5 2.5 0 1 0 11.5 1m-8 5a2.5 2.5 0 1 0 1.967 4.043l2.231 1.115.447-.894-2.23-1.116q.084-.31.085-.648A2.5 2.5 0 0 0 3.5 6M9 12.5a2.5 2.5 0 0 1 2-2.45V7.5h1v2.55a2.5 2.5 0 1 1-3 2.45",
      ],
    },
    shield: {
      symbolId: "nvidia-react-gui-icons-v1-fill-shield",
      viewBox: "0 0 16 16",
      paths: [
        "m13.978 3.61.021.361v.003L14 3.98l.001.021.003.077q.004.102.006.286c.002.245-.002.594-.027 1.016a16 16 0 0 1-.5 3.188c-.645 2.384-2.102 5.102-5.362 5.917l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016q.002-.184.006-.286l.003-.077L2 3.98l.001-.006v-.002L2.5 4l-.499-.029.021-.361L8 2.009Z",
      ],
    },
    "shield-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shield-off",
      viewBox: "0 0 16 16",
      paths: [
        "m1.354.646 13 13-.708.708-2.032-2.033a6.58 6.58 0 0 1-3.493 2.164l-.121.03-.121-.03c-3.26-.815-4.717-3.533-5.362-5.917a16 16 0 0 1-.501-3.188 16 16 0 0 1-.026-1.016c.002-.252.017-.502.032-.754l.695-.186-2.071-2.07zm12.129 7.922a12 12 0 0 1-.534 1.552L5.506 2.677 8 2.009l5.978 1.601c.015.252.03.502.032.754.002.245-.002.594-.026 1.016a16 16 0 0 1-.501 3.188",
      ],
    },
    ship: {
      symbolId: "nvidia-react-gui-icons-v1-fill-ship",
      viewBox: "0 0 16 16",
      paths: [
        "M10.616 4H13v3h1v2H4.191l1-2h4.621ZM12 5h-.616l-.536 2H12ZM1.5 10v.139L3.217 13H15v-3z",
      ],
    },
    "ship-wheel": {
      symbolId: "nvidia-react-gui-icons-v1-fill-ship-wheel",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 1h1v1.021a5.97 5.97 0 0 1 3.374 1.397l.722-.721.707.707-.721.722A5.97 5.97 0 0 1 13.979 7.5H15v1h-1.021a5.97 5.97 0 0 1-1.397 3.374l.721.722-.707.707-.722-.721A5.97 5.97 0 0 1 8.5 13.979V15h-1v-1.021a5.97 5.97 0 0 1-3.374-1.397l-.722.721-.707-.707.721-.722A5.97 5.97 0 0 1 2.021 8.5H1v-1h1.021a5.97 5.97 0 0 1 1.397-3.374l-.721-.722.707-.707.722.721A5.97 5.97 0 0 1 7.5 2.021Zm1.516 5.277 2.148-2.148A4.97 4.97 0 0 0 8.5 3.025v3.038q.276.072.516.214m0 3.446a2 2 0 0 1-.516.214v3.038a4.97 4.97 0 0 0 2.664-1.103Zm.707-2.739q.142.24.214.516h3.038a4.97 4.97 0 0 0-1.103-2.664Zm-3.66.516q.072-.276.214-.516L4.129 4.836A4.97 4.97 0 0 0 3.025 7.5ZM4.836 4.129l2.148 2.148q.24-.142.516-.214V3.025a4.97 4.97 0 0 0-2.664 1.104M7.5 9.937a2 2 0 0 1-.516-.214l-2.148 2.149A4.97 4.97 0 0 0 7.5 12.975ZM9.937 8.5q-.072.276-.214.516l2.149 2.148A4.97 4.97 0 0 0 12.975 8.5Zm-3.66.516a2 2 0 0 1-.214-.516H3.025a4.97 4.97 0 0 0 1.104 2.664Z",
      ],
    },
    "shopping-bag": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shopping-bag",
      viewBox: "0 0 16 16",
      paths: [
        "M5 4a3 3 0 1 1 6 0h2v10H3V4Zm1 2H5a3 3 0 1 0 6 0h-1a2 2 0 1 1-4 0m0-2h4a2 2 0 1 0-4 0",
      ],
    },
    "shopping-basket": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shopping-basket",
      viewBox: "0 0 16 16",
      paths: [
        "M5.945 2.711 4.796 7H1.848l1.608 6h9.088l1.608-6h-2.948l-1.149-4.289-.966.259L10.169 7H5.831l1.08-4.03z",
      ],
    },
    "shopping-cart": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shopping-cart",
      viewBox: "0 0 16 16",
      paths: [
        "M1 3h1.877l1.88 7H11V9H5.523l-.268-1h6.561l1.306-5h-9.21l-.269-1H1zm4.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 5.5 11m5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 10.5 11",
      ],
    },
    "shopping-cart-open": {
      symbolId: "nvidia-react-gui-icons-v1-fill-shopping-cart-open",
      viewBox: "0 0 16 16",
      paths: [
        "M2.877 3H1V2h2.643l1.343 5h6.058l1.078-4.126.967.252L11.816 8H5.255l.268 1H11v1H4.757ZM4 12.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 4 12.5m5 0a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 9 12.5M5.5 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
      ],
    },
    shuffle: {
      symbolId: "nvidia-react-gui-icons-v1-fill-shuffle",
      viewBox: "0 0 16 16",
      paths: [
        "m14.207 11.5-2.353 2.354-.708-.708L12.293 12h-2l-1.879-1.879.707-.707L10.707 11h1.586l-1.147-1.146.708-.708zm0-7-2.353 2.354-.708-.708L12.293 5h-1.586l-7 7H2v-1h1.293l7-7h2l-1.147-1.146.708-.708zM5.586 5.879l-.707.707L3.293 5H2V4h1.707z",
      ],
    },
    signature: {
      symbolId: "nvidia-react-gui-icons-v1-fill-signature",
      viewBox: "0 0 16 16",
      paths: ["M10.207 5.5 8.5 3.793l-6.5 6.5V12h1.707zM6 12h8v-1H6z"],
    },
    signpost: {
      symbolId: "nvidia-react-gui-icons-v1-fill-signpost",
      viewBox: "0 0 16 16",
      paths: ["M8 4V2H7v2H3v5h4v5h1V9h3.707l2.5-2.5-2.5-2.5z"],
    },
    "sin-wave": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sin-wave",
      viewBox: "0 0 16 16",
      paths: [
        "M2.297 6.322C2.927 5.613 3.739 5 5 5c1.751 0 2.64 1.185 3.364 2.152L8.4 7.2C9.169 8.226 9.78 9 11 9c.868 0 1.43-.395 1.955-.986.221-.249.423-.519.64-.808l.152-.202c.269-.355.565-.731.912-1.055l.682.731c-.279.261-.53.576-.796.927l-.14.187c-.218.291-.451.601-.702.884C13.073 9.387 12.261 10 11 10c-1.751 0-2.64-1.185-3.364-2.152L7.6 7.8C6.831 6.774 6.219 6 5 6c-.869 0-1.43.395-1.955.986-.221.249-.423.519-.64.808l-.152.202c-.269.355-.565.731-.912 1.055L.659 8.32c.279-.261.53-.576.796-.927l.14-.187c.218-.291.451-.601.702-.884",
      ],
    },
    skeleton: {
      symbolId: "nvidia-react-gui-icons-v1-fill-skeleton",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 2.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 2.5m2.841 2.854 3 3 .707-.708-3-3zm-3.39-.708-3 3 .707.708 3-3zM8.499 10V5h-1v5zm-2.606-.129-1.34 5 .966.258 1.34-5zm3.246.258 1.34 5 .966-.258-1.34-5z",
      ],
    },
    skip: {
      symbolId: "nvidia-react-gui-icons-v1-fill-skip",
      viewBox: "0 0 16 16",
      paths: [
        "M8 3a5 5 0 0 0-5 5v1h1V8a4 4 0 0 1 8 0v.293l-.646-.647-.708.708 1.854 1.853 1.854-1.853-.708-.708-.646.647V8a5 5 0 0 0-5-5",
        "M8 6.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8 6.5",
      ],
    },
    skull: {
      symbolId: "nvidia-react-gui-icons-v1-fill-skull",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2c3.322 0 6 2.771 6 6.065l-.947 3.537-1.139.303L11.391 14H10v-1.5H9V14H7v-1.5H6V14H4.609l-.524-2.095-1.138-.303L2 8.065C2 4.771 4.678 2 8 2M5.5 6a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 5.5 6m5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 10.5 6M8 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    sky: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sky",
      viewBox: "0 0 16 16",
      paths: [
        "M4.82 2.23a1.8 1.8 0 0 0-1.422-.023c-.696.271-1.29.93-1.615 1.889l.948.32c.253-.748.672-1.138 1.031-1.278.348-.136.669-.059.889.19l.664.749.2-.98c.067-.326.306-.554.676-.61.38-.058.938.07 1.532.592l.66-.751c-.761-.669-1.605-.942-2.343-.829a1.8 1.8 0 0 0-1.22.731M5 12a3 3 0 1 1 5.829 1H14v1H2v-1h3.171A3 3 0 0 1 5 12m4.961-7.502c.505.077.941.336 1.22.732a1.8 1.8 0 0 1 1.422-.024c.696.272 1.29.931 1.614 1.89l-.947.32c-.253-.748-.672-1.138-1.031-1.278-.348-.136-.669-.059-.89.19l-.663.749-.201-.98c-.066-.326-.305-.554-.675-.61-.381-.058-.938.07-1.532.592l-.66-.751c.76-.669 1.604-.942 2.343-.83",
      ],
    },
    sliders: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sliders",
      viewBox: "0 0 16 16",
      paths: ["M8 2H5v2H2v1h3v2h3V5h6V4H8zm3 6H8v2H2v1h6v2h3v-2h3v-1h-3z"],
    },
    smartphone: {
      symbolId: "nvidia-react-gui-icons-v1-fill-smartphone",
      viewBox: "0 0 16 16",
      paths: [
        "M4 2.5A1.5 1.5 0 0 1 5.5 1h5A1.5 1.5 0 0 1 12 2.5V11H4ZM9 2H7v1h2ZM4 12h8v1.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 13.5Zm4.5 1h-1v1h1Z",
      ],
    },
    "smartphone-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-smartphone-off",
      viewBox: "0 0 16 16",
      paths: [
        "M12 2.5v6.672L4.357 1.529A1.5 1.5 0 0 1 5.5 1h5A1.5 1.5 0 0 1 12 2.5M9 2H7v1h2ZM4 4.707 1.646 2.354l.708-.708 12 12-.708.708L12 12.707v.793a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 13.5V12h7.293l-1-1H4ZM8.5 13h-1v1h1Z",
      ],
    },
    snow: {
      symbolId: "nvidia-react-gui-icons-v1-fill-snow",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 3.793V2h1v1.793l.646-.647.708.708L8.5 5.207v1.927l1.669-.963.495-1.849.966.258-.237.883 1.553-.896.5.866-1.553.896.883.237-.258.966-1.849-.495L9 8l1.669.963 1.849-.495.258.966-.883.237 1.553.896-.5.866-1.553-.896.237.883-.966.258-.495-1.849L8.5 8.866v1.927l1.354 1.353-.708.708-.646-.647V14h-1v-1.793l-.646.647-.708-.708L7.5 10.793V8.866l-1.669.963-.495 1.849-.966-.258.236-.883-1.552.896-.5-.866 1.552-.896-.883-.237.259-.966 1.849.495L7 8l-1.669-.963-1.849.495-.259-.966.883-.237-1.552-.896.5-.866 1.552.896-.236-.883.966-.258.495 1.849 1.669.963V5.207L6.146 3.854l.708-.708z",
      ],
    },
    soccer: {
      symbolId: "nvidia-react-gui-icons-v1-fill-soccer",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a6.99 6.99 0 0 1 5.53 2.707 7.03 7.03 0 0 1 1.464 4.574 6.97 6.97 0 0 1-1.225 3.686 7 7 0 0 1-3.845 2.765 7.04 7.04 0 0 1-3.804.012 7 7 0 0 1-3.907-2.804 6.97 6.97 0 0 1-1.207-3.652 7.03 7.03 0 0 1 1.434-4.54A6.99 6.99 0 0 1 8 1M5.719 2.448a6 6 0 0 0-2.323 1.705l.698 2.121 1.431.456L7.5 5.277V3.753ZM8.5 3.754v1.523l1.972 1.451 1.423-.471.68-2.135a6 6 0 0 0-2.285-1.669Zm2.283 3.925-.755 2.352.836 1.137 2.22.013a5.95 5.95 0 0 0 .894-2.678l-1.771-1.296Zm-8.761.831a5.95 5.95 0 0 0 .88 2.649l2.247.014.823-1.139-.754-2.352-1.43-.455Zm3.935 3.25.686 2.082c.902.208 1.85.206 2.751-.008l.661-2.077-.835-1.135H6.783Z",
      ],
    },
    sort: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sort",
      viewBox: "0 0 16 16",
      paths: ["M13 6H3V5h10ZM9 9H3V8h6Zm-3 3H3v-1h3Z"],
    },
    "sort-ascending": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sort-ascending",
      viewBox: "0 0 16 16",
      paths: [
        "M13 12v1H3v-1ZM9 9v1H3V9ZM6 6v1H3V6Zm6-3.707 2.854 2.854-.708.707L12.5 4.207V9h-1V4.207L9.854 5.854l-.708-.707Z",
      ],
    },
    "sort-descending": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sort-descending",
      viewBox: "0 0 16 16",
      paths: [
        "M3 4h10V3H3zm0 3h6V6H3zm0 3h3V9H3zm11.854.854L12 13.707l-2.854-2.853.708-.708 1.646 1.647V7h1v4.793l1.646-1.647z",
      ],
    },
    soundwaves: {
      symbolId: "nvidia-react-gui-icons-v1-fill-soundwaves",
      viewBox: "0 0 16 16",
      paths: [
        "M6 13V3h1v10Zm-2-2V5h1v6Zm4 0V5h1v6Zm4 0V5h1v6Zm-2-1V6h1v4ZM2 9V7h1v2Z",
      ],
    },
    sparkle: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sparkle",
      viewBox: "0 0 16 16",
      paths: [
        "M10 5.5V4.366l-.982.567-.5-.866L9.5 3.5l-.982-.567.5-.866.982.567V1.5h1v1.134l.982-.567.5.866-.982.567.982.567-.5.866L11 4.366V5.5zm1 10v-3.134l-2.714 1.567-.5-.866L10.5 11.5 7.786 9.933l.5-.866L11 10.634V7.5h1v3.134l2.714-1.567.5.866L12.5 11.5l2.714 1.567-.5.866L12 12.366V15.5zm-7.5-8L1.652 6.433l.5-.866L4 6.634V4.5h1v2.134l1.848-1.067.5.866L5.5 7.5l1.848 1.067-.5.866L5 8.366V10.5H4V8.366L2.152 9.433l-.5-.866z",
      ],
    },
    speaker: {
      symbolId: "nvidia-react-gui-icons-v1-fill-speaker",
      viewBox: "0 0 16 16",
      paths: ["M11 13.587V2.413L6.815 6H5v4h1.815z"],
    },
    "speaker-high": {
      symbolId: "nvidia-react-gui-icons-v1-fill-speaker-high",
      viewBox: "0 0 16 16",
      paths: [
        "M8 13.587V2.413L3.815 6H2v4h1.815zM13 4v8h1V4zm-2 1v6h1V5zM9 6v4h1V6z",
      ],
    },
    "speaker-low": {
      symbolId: "nvidia-react-gui-icons-v1-fill-speaker-low",
      viewBox: "0 0 16 16",
      paths: ["M10 13.587V2.413L5.815 6H4v4h1.815zM11 6v4h1V6z"],
    },
    "speaker-medium": {
      symbolId: "nvidia-react-gui-icons-v1-fill-speaker-medium",
      viewBox: "0 0 16 16",
      paths: ["M9 13.587V2.413L4.815 6H3v4h1.815zM12 5v6h1V5zm-2 1v4h1V6z"],
    },
    "speaker-mute": {
      symbolId: "nvidia-react-gui-icons-v1-fill-speaker-mute",
      viewBox: "0 0 16 16",
      paths: [
        "M8 13.587V2.413L3.815 6H2v4h1.815zm1.146-6.733L10.793 8.5l-1.647 1.646.708.708L11.5 9.207l1.646 1.647.708-.708L12.207 8.5l1.647-1.646-.708-.708L11.5 7.793 9.854 6.146z",
      ],
    },
    "speaker-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-speaker-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L10 10.707v2.88L5.815 10H4V6h1.293L1.646 2.354zM10 2.413v4.759L7.438 4.609z",
      ],
    },
    split: {
      symbolId: "nvidia-react-gui-icons-v1-fill-split",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M3.5 5.5V8h1v-.793l3 3V13h1v-2.793l3-3V8h1V5.5H10v1h.793L8 9.293 5.207 6.5H6v-1Z",
      ],
    },
    "split-file": {
      symbolId: "nvidia-react-gui-icons-v1-fill-split-file",
      viewBox: "0 0 16 16",
      paths: [
        "M13 14H3v-4h10zM3 9H1V8h2zm3 0H4V8h2zm3 0H7V8h2zm3 0h-2V8h2zm3 0h-2V8h2zm-2-3.707V7H3V2h6.707ZM9 6h3L9 3Z",
      ],
    },
    spoon: {
      symbolId: "nvidia-react-gui-icons-v1-fill-spoon",
      viewBox: "0 0 16 16",
      paths: [
        "M8.766 9.065c-.227.257-.266.384-.266.435V14h-1V9.5c0-.051-.039-.178-.266-.435a9 9 0 0 0-.492-.499l-.346-.337C5.766 7.598 5 6.72 5 5.5 5 3.656 6.262 2 8 2s3 1.656 3 3.5c0 1.22-.766 2.098-1.396 2.729q-.186.183-.346.337a9 9 0 0 0-.492.499",
      ],
    },
    "square-wave": {
      symbolId: "nvidia-react-gui-icons-v1-fill-square-wave",
      viewBox: "0 0 16 16",
      paths: ["M2 5h6.5v4H13V5h1v5H7.5V6H3v4H2Z"],
    },
    "stack-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-fill-stack-horizontal",
      viewBox: "0 0 16 16",
      paths: ["M14 3H6v10h8zM4 4h1v8H4zM3 5H2v6h1z"],
    },
    stair: {
      symbolId: "nvidia-react-gui-icons-v1-fill-stair",
      viewBox: "0 0 16 16",
      paths: ["M11 2h3v1h-2v3H9v3H6v3H3v2H2v-3h3V8h3V5h3Z"],
    },
    star: {
      symbolId: "nvidia-react-gui-icons-v1-fill-star",
      viewBox: "0 0 16 16",
      paths: [
        "M10.186 5.8 8 1.37 5.814 5.8l-4.888.71 3.537 3.448-.835 4.869L8 12.528l4.372 2.299-.835-4.869 3.538-3.448z",
      ],
    },
    "steering-wheel": {
      symbolId: "nvidia-react-gui-icons-v1-fill-steering-wheel",
      viewBox: "0 0 16 16",
      paths: [
        "M2 8a6 6 0 1 1 12 0v.107a6.003 6.003 0 0 1-6.431 5.878 6.003 6.003 0 0 1-5.568-5.878zm1.031-.562L8 6.107l4.969 1.331a5 5 0 0 0-9.938 0m9.699 2.188-2.997.803-.658 2.455a5.01 5.01 0 0 0 3.655-3.258m-5.805 3.258-.658-2.455-2.997-.803a5.01 5.01 0 0 0 3.655 3.258M8 7.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "step-forward": {
      symbolId: "nvidia-react-gui-icons-v1-fill-step-forward",
      viewBox: "0 0 16 16",
      paths: ["M3 3.5v9h1v-9zM13.492 8 6 3.629v8.741z"],
    },
    "step-reverse": {
      symbolId: "nvidia-react-gui-icons-v1-fill-step-reverse",
      viewBox: "0 0 16 16",
      paths: ["M12 12.5h1v-9h-1zM2.508 8 10 12.37V3.629z"],
    },
    sticker: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sticker",
      viewBox: "0 0 16 16",
      paths: ["M2 2h12v12H6.293L2 9.707Zm4 10.293V10H3.707Z"],
    },
    "sticker-image": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sticker-image",
      viewBox: "0 0 16 16",
      paths: [
        "M14 2v12H5.586L2 10.414V2ZM5 6.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 5 6.5m8 3.459L10.017 8.24 7.75 9.546l.5.866 1.767-1.018L13 11.113ZM6 13v-3H3Z",
      ],
    },
    "sticker-shape": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sticker-shape",
      viewBox: "0 0 16 16",
      paths: [
        "M2 2h12v12H5.586L2 10.414Zm6 1.37L6.741 5.921l-2.815.41 1.725 1.681.698-.716-.274-.267 1.33-.194L8 5.63l.595 1.205 1.331.194-.963.938.227 1.325-.457-.24-.466.885 2.251 1.183-.481-2.804 2.038-1.985-2.816-.41ZM6 10H3l3 3Z",
      ],
    },
    "sticker-text": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sticker-text",
      viewBox: "0 0 16 16",
      paths: ["M14 2v12H5.586L2 10.414V2ZM8 6v5h1V6h2V5H6v1Zm-2 7v-3H3Z"],
    },
    "sticker-zoom": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sticker-zoom",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 5",
        "M14 2v12H5.586L2 10.414V2ZM6 6.5a2.5 2.5 0 0 0 3.879 2.086l1.767 1.768.708-.707-1.768-1.768A2.5 2.5 0 1 0 6 6.5M6 13v-3H3Z",
      ],
    },
    stone: {
      symbolId: "nvidia-react-gui-icons-v1-fill-stone",
      viewBox: "0 0 16 16",
      paths: [
        "M11.848 4H11v8h.848l.804 3H3.348l.804-3H5V4h-.848l-.804-3h9.304ZM7.375 4H6.25v8h1.125Zm1.25 0v8H9.75V4Z",
      ],
    },
    stop: {
      symbolId: "nvidia-react-gui-icons-v1-fill-stop",
      viewBox: "0 0 16 16",
      paths: ["M12 4H4v8h8z"],
    },
    straw: {
      symbolId: "nvidia-react-gui-icons-v1-fill-straw",
      viewBox: "0 0 16 16",
      paths: [
        "m12.03 1.829.94.342q-.042.118-.082.237c-.053.158-.13.392-.223.692a40 40 0 0 0-.678 2.515c-.467 1.983-.931 4.618-.982 7.385H14v1H2v-1h1.992c-.066-2.035-.517-4.147-.974-5.805a35 35 0 0 0-.9-2.795l-.082-.214.928-.371q.046.116.09.233a33 33 0 0 1 .928 2.882c.469 1.699.944 3.91 1.01 6.07h1.003c-.051-2.767-.515-5.402-.982-7.385A40 40 0 0 0 4.335 3.1c-.093-.3-.17-.534-.223-.692l-.082-.237.94-.342.09.259a39 39 0 0 1 .927 3.297c.477 2.03.957 4.746 1.008 7.615h1.008c.028-2.567.265-4.783.502-6.386a38 38 0 0 1 .349-2.003 17 17 0 0 1 .161-.732l.97.242-.04.173q-.041.175-.111.517a37 37 0 0 0-.339 1.95A46.5 46.5 0 0 0 9.003 13h1.002c.051-2.869.531-5.585 1.008-7.615a39 39 0 0 1 .927-3.297q.044-.13.09-.259",
      ],
    },
    strikethrough: {
      symbolId: "nvidia-react-gui-icons-v1-fill-strikethrough",
      viewBox: "0 0 16 16",
      paths: [
        "M8 4c-1.299 0-2 .846-2 1.5 0 .596.21.917.514 1.149.348.266.836.431 1.449.624l.073.023c.198.063.408.129.62.204H14v1h-3.671c.324.357.564.817.664 1.418.152.911-.161 1.702-.746 2.251C9.673 12.709 8.858 13 8 13c-1.683 0-3-1.035-3-2.5h1c0 .744.683 1.5 2 1.5.642 0 1.2-.219 1.563-.559.351-.331.538-.79.444-1.359-.1-.598-.386-.952-.777-1.213a3.7 3.7 0 0 0-.752-.369H2v-1h3.983l-.076-.056C5.353 7.021 5 6.404 5 5.5 5 4.154 6.299 3 8 3c1.683 0 3 1.035 3 2.5h-1C10 4.756 9.317 4 8 4",
      ],
    },
    "stroke-width": {
      symbolId: "nvidia-react-gui-icons-v1-fill-stroke-width",
      viewBox: "0 0 16 16",
      paths: ["M2 4h12V3H2zm12 1H2v3h12zm0 4H2v4h12z"],
    },
    style: {
      symbolId: "nvidia-react-gui-icons-v1-fill-style",
      viewBox: "0 0 16 16",
      paths: [
        "M15.5 2 14 .5l-3 3L12.5 5z",
        "M8 3H1v10h14V6h-1v6H2V4h6z",
        "M6.49 6.75C6.94 5.97 7.51 5 8.75 5l-.01-.01c.218 0 .436.044.647.123l.903-.903 1.5 1.5-.912.912c.072.202.112.41.112.618 0 1.44-.98 2.55-2.43 2.75-.28.04-.56.06-.82.06-1.28 0-2.26-.47-2.69-1.33l-.26-.52.55-.18c.507-.159.816-.693 1.144-1.259z",
      ],
    },
    subtract: {
      symbolId: "nvidia-react-gui-icons-v1-fill-subtract",
      viewBox: "0 0 16 16",
      paths: ["M3.5 7.5h9v1h-9z"],
    },
    "subtract-circle": {
      symbolId: "nvidia-react-gui-icons-v1-fill-subtract-circle",
      viewBox: "0 0 16 16",
      paths: ["M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m11-.5H4v1h8Z"],
    },
    "suit-club": {
      symbolId: "nvidia-react-gui-icons-v1-fill-suit-club",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a3 3 0 0 0-2.827 4.005 3 3 0 1 0 1.079 5.722L5.643 14h4.714l-.609-2.273a3 3 0 1 0 1.08-5.722A3 3 0 0 0 8 2",
      ],
    },
    "suit-diamond": {
      symbolId: "nvidia-react-gui-icons-v1-fill-suit-diamond",
      viewBox: "0 0 16 16",
      paths: ["M8.788 2H7.211L3.747 8l3.464 6h1.577l3.464-6z"],
    },
    "suit-spade": {
      symbolId: "nvidia-react-gui-icons-v1-fill-suit-spade",
      viewBox: "0 0 16 16",
      paths: [
        "M8.434 2.252 8 1.492l-.434.76C6.762 3.659 5.882 4.64 5.093 5.518q-.241.268-.469.528C3.74 7.056 3 8.053 3 9.5a2.5 2.5 0 0 0 3.206 2.399L5.643 14h4.715l-.563-2.101q.336.1.705.101A2.5 2.5 0 0 0 13 9.5c0-1.447-.74-2.444-1.624-3.454a40 40 0 0 0-.469-.528c-.788-.878-1.669-1.859-2.473-3.266",
      ],
    },
    suitcase: {
      symbolId: "nvidia-react-gui-icons-v1-fill-suitcase",
      viewBox: "0 0 16 16",
      paths: [
        "m7.383 11-.268-1h1.769l-.268 1z",
        "M6.5 2H5V1h6v1H9.5v2.5H12V14h-1.5v1h-1v-1h-3v1h-1v-1H4V4.5h2.5Zm3.688 7H5.812l.804 3h2.768ZM8.5 2h-1v2.5h1ZM7 7.5h2v-1H7Z",
      ],
    },
    "sun-high": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sun-high",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 2v2h1V2zM3.404 4.111l1.414 1.414.707-.707-1.414-1.414zm7.071.707.707.707 1.414-1.414-.707-.707zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M2 8.5h2v-1H2zm10 0h2v-1h-2zm-8.596 3.389.707.707 1.414-1.414-.707-.707zm7.071-.707 1.414 1.414.707-.707-1.414-1.414zM8.5 14v-2h-1v2z",
      ],
    },
    "sun-low": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sun-low",
      viewBox: "0 0 16 16",
      paths: [
        "M7.5 3v1h1V3zM4.111 4.818l.707.707.707-.707-.707-.707zm7.071-.707-.707.707.707.707.707-.707zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 8.5h1v-1H3zm9 0h1v-1h-1zm-7.182 1.975-.707.707.707.707.707-.707zm5.657.707.707.707.707-.707-.707-.707zM8.5 13v-1h-1v1z",
      ],
    },
    "sun-off-high": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sun-off-high",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-3.908-3.909a3 3 0 0 1-4.183-4.183L1.646 2.354zM11 8q0 .084-.005.167L7.833 5.005Q7.916 5 8 5a3 3 0 0 1 3 3M7.5 4V2h1v2zm2.975.818.707.707 1.414-1.414-.707-.707zM2 8.5h2v-1H2zm12 0h-2v-1h2zM3.404 11.889l.707.707 1.414-1.414-.707-.707z",
        "M8.5 14v-2h-1v2z",
      ],
    },
    swatches: {
      symbolId: "nvidia-react-gui-icons-v1-fill-swatches",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3h2.725l-2.432 9.073-.293.079zM4 4.137l-2.373.636 2.071 7.728L4 12.42zm4.976-1.943 5.797 1.554-2.588 9.659-5.797-1.553z",
      ],
    },
    sword: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sword",
      viewBox: "0 0 16 16",
      paths: [
        "M14 4.707 7.207 11.5l1.147 1.146-.708.708L6 11.707l-3 3L1.293 13l3-3-1.647-1.646.708-.708L4.5 8.793 11.293 2H14z",
      ],
    },
    sync: {
      symbolId: "nvidia-react-gui-icons-v1-fill-sync",
      viewBox: "0 0 16 16",
      paths: [
        "m8.354.646 2.857 2.859-2.858 2.849-.706-.708 1.647-1.641h-1.29a4 4 0 0 0-3.865 5.036l-.966.258a5 5 0 0 1 4.831-6.294h1.293L7.646 1.353Zm4.48 6.055a5 5 0 0 1-4.831 6.294H6.708l1.646 1.652-.708.706-2.849-2.858 2.85-2.849.706.708-1.642 1.641h1.292a4 4 0 0 0 3.865-5.036Z",
      ],
    },
    "sync-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sync-off",
      viewBox: "0 0 16 16",
      paths: [
        "M9.294 4.005 8.061 5.233l.707.707 2.443-2.435L8.354.646l-.708.707 1.651 1.652H8.004c-.645 0-1.261.122-1.827.344l.791.791a4 4 0 0 1 1.036-.135zm3.709 3.99c0 .648-.123 1.266-.346 1.833l-.791-.79q.136-.5.137-1.043a4 4 0 0 0-.135-1.036l.966-.258c.111.414.169.848.169 1.294m-1.84 3.876a4.98 4.98 0 0 1-3.16 1.124H6.708l1.646 1.652-.708.706-2.849-2.858 2.849-2.849.707.708-1.642 1.641h1.292c.923 0 1.772-.312 2.449-.836L4.844 5.551a4.01 4.01 0 0 0-.705 3.49l-.966.258a5 5 0 0 1-.169-1.294c0-1.201.423-2.303 1.129-3.165L1.646 2.354l.707-.708 12.001 12-.708.708z",
      ],
    },
    "sync-warning": {
      symbolId: "nvidia-react-gui-icons-v1-fill-sync-warning",
      viewBox: "0 0 16 16",
      paths: [
        "M11.71 4.005 8.354.646l-.708.707 1.651 1.652H8.004a5 5 0 0 0-4.831 6.294l.966-.258a4 4 0 0 1 3.865-5.036z",
        "M10.6 10 8.002 5.5 5.404 10z",
        "M13.003 7.995c0-.446-.058-.88-.169-1.294l-.966.258a4 4 0 0 1-3.865 5.036H4.299l3.347 3.358.708-.706-1.646-1.652h1.295a5 5 0 0 0 5-5",
      ],
    },
    tablet: {
      symbolId: "nvidia-react-gui-icons-v1-fill-tablet",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 1A1.5 1.5 0 0 0 3 2.5V11h10V2.5A1.5 1.5 0 0 0 11.5 1zM3 13.5V12h10v1.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5m5.5-.5h-1v1h1Z",
      ],
    },
    "tablet-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-tablet-off",
      viewBox: "0 0 16 16",
      paths: [
        "M13 2.5v7.672L3.937 1.109C4.111 1.039 4.301 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5M11.293 12l-1-1H3V3.707L1.646 2.354l.708-.708 13 13-.708.708-1.658-1.659A1.5 1.5 0 0 1 11.5 15h-7A1.5 1.5 0 0 1 3 13.5V12ZM8.5 13h-1v1h1Z",
      ],
    },
    tag: {
      symbolId: "nvidia-react-gui-icons-v1-fill-tag",
      viewBox: "0 0 16 16",
      paths: [
        "M8.293 2h3.414L14 4.293v3.414l-6.5 6.5L1.793 8.5ZM10.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
      ],
    },
    "tag-label": {
      symbolId: "nvidia-react-gui-icons-v1-fill-tag-label",
      viewBox: "0 0 16 16",
      paths: [
        "M8.293 2h3.414L14 4.293v3.414l-6.5 6.5L1.793 8.5ZM10.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3.353 4.354.707-.708-2-2-.707.708Zm-.293-3.708-.707.708 2 2 .707-.708Z",
      ],
    },
    teapot: {
      symbolId: "nvidia-react-gui-icons-v1-fill-teapot",
      viewBox: "0 0 16 16",
      paths: [
        "M7 4.5h2V5h1.91l.804 3h.403l.803-3h1.58v1h-.812l-.804 3h-.902l.518 1.934V11c0 .424-.332.685-.56.82-.262.154-.607.276-.991.372-.774.194-1.816.308-2.949.308s-2.176-.114-2.95-.308c-.383-.096-.729-.218-.99-.372-.229-.135-.56-.396-.56-.82v-.066L3.75 10H1.848L2.92 6h1.902l.268-1H7ZM3.688 7l-.536 2h.866l.536-2Z",
      ],
    },
    telephone: {
      symbolId: "nvidia-react-gui-icons-v1-fill-telephone",
      viewBox: "0 0 16 16",
      paths: [
        "M13.726 5.497c.074-.853-.017-1.704-.334-2.482l-2.19-.587-1.869 3.237 1.034 1.791a5.4 5.4 0 0 1-1.168 1.692 5.3 5.3 0 0 1-1.808 1.201L5.652 9.345l-3.237 1.869.587 2.191c.783.315 1.611.398 2.47.32 1.431-.131 3.359-.782 5.417-2.822 2.059-2.04 2.711-3.97 2.837-5.406",
      ],
    },
    "telephone-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-telephone-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-3.111-3.112c-1.924 1.774-3.715 2.36-5.063 2.483-.859.078-1.687-.005-2.47-.32l-.587-2.191 3.237-1.869 1.739 1.004a5.2 5.2 0 0 0 1.41-.84L1.646 2.354zm9.848 7.727-1.86-1.859.025-.058-1.034-1.791 1.869-3.237 2.19.587c.317.778.408 1.629.334 2.482-.094 1.071-.481 2.416-1.524 3.876",
      ],
    },
    teleport: {
      symbolId: "nvidia-react-gui-icons-v1-fill-teleport",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 1m3.152 4.675H4.848L6.811 13h2.378z",
        "m5.069 10.229.26.971c-.742.117-1.399.28-1.942.474-.571.204-.962.423-1.192.617a.8.8 0 0 0-.189.209.8.8 0 0 0 .189.209c.23.194.621.413 1.192.617C4.52 13.731 6.151 14 8 14s3.48-.269 4.613-.674c.571-.204.962-.423 1.192-.617a.8.8 0 0 0 .189-.209.8.8 0 0 0-.189-.209c-.23-.194-.621-.413-1.192-.617-.543-.194-1.2-.357-1.942-.474l.26-.971C13.333 10.625 15 11.493 15 12.5c0 1.381-3.134 2.5-7 2.5s-7-1.119-7-2.5c0-1.007 1.667-1.875 4.069-2.271",
      ],
    },
    telescope: {
      symbolId: "nvidia-react-gui-icons-v1-fill-telescope",
      viewBox: "0 0 16 16",
      paths: [
        "m10.867 3.136.991 3.698-2.117.567 1.739 6.492-.966.259-.634-2.368a4.5 4.5 0 0 1-2.765-.001l-.635 2.369-.966-.259 1.548-5.774-1.068.286-.991-3.698ZM8.775 7.66l-.598.16-.803 2.995c.353.12.732.185 1.126.185a3.5 3.5 0 0 0 1.121-.183Zm4.232-.402 1.366-.366-1.357-5.064-1.366.366zm-8.162.723L4.22 5.649l-1.766.473-.079-.293-.966.259.777 2.898.966-.259-.074-.273z",
      ],
    },
    television: {
      symbolId: "nvidia-react-gui-icons-v1-fill-television",
      viewBox: "0 0 16 16",
      paths: ["M15 3v9h-1.5v1h-1v-1h-9v1h-1v-1H1V3Zm-1 8v-1H2v1Z"],
    },
    "television-retro": {
      symbolId: "nvidia-react-gui-icons-v1-fill-television-retro",
      viewBox: "0 0 16 16",
      paths: [
        "M7.045.871 7.884 4h.233L8.955.871l.966.258L9.152 4h.927l.268 1H14v9H2V5h3.652l.268-1h.928l-.769-2.871ZM12 7H6v5h6ZM3.5 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 12h1v-1H4Z",
      ],
    },
    text: {
      symbolId: "nvidia-react-gui-icons-v1-fill-text",
      viewBox: "0 0 16 16",
      paths: ["M7.5 4H4V3h8v1H8.5v9h-1Z"],
    },
    "text-align-center": {
      symbolId: "nvidia-react-gui-icons-v1-fill-text-align-center",
      viewBox: "0 0 16 16",
      paths: ["M14 4H2V3h12Zm-1 6H3V9h10Zm-1-3H4V6h8Zm-1 6H5v-1h6Z"],
    },
    "text-align-full": {
      symbolId: "nvidia-react-gui-icons-v1-fill-text-align-full",
      viewBox: "0 0 16 16",
      paths: ["M14 4H2V3h12Zm0 3H2V6h12Zm0 3H2V9h12Zm-6 3H2v-1h6Z"],
    },
    "text-align-left": {
      symbolId: "nvidia-react-gui-icons-v1-fill-text-align-left",
      viewBox: "0 0 16 16",
      paths: ["M14 4H2V3h12Zm-2 6H2V9h10Zm-2-3H2V6h8Zm-2 6H2v-1h6Z"],
    },
    "text-align-right": {
      symbolId: "nvidia-react-gui-icons-v1-fill-text-align-right",
      viewBox: "0 0 16 16",
      paths: ["M14 4H2V3h12Zm0 6H4V9h10Zm0-3H6V6h8Zm0 6H8v-1h6Z"],
    },
    "text-framed": {
      symbolId: "nvidia-react-gui-icons-v1-fill-text-framed",
      viewBox: "0 0 16 16",
      paths: ["M2 2h12v12H2Zm5.5 4v5h1V6H11V5H5v1Z"],
    },
    texture: {
      symbolId: "nvidia-react-gui-icons-v1-fill-texture",
      viewBox: "0 0 16 16",
      paths: [
        "M14 2v12H2V2Zm-3.293 1L3 10.707v1.586L12.293 3ZM13 3.707 3.707 13h1.586L13 5.293ZM7.707 3 3 7.707v1.586L9.293 3ZM13 6.707 6.707 13h1.586L13 8.293Zm0 3L9.707 13h1.586L13 11.293Zm-10-5v1.586L6.293 3H4.707Zm10 8-.293.293H13ZM3 3.293 3.293 3H3Z",
      ],
    },
    thermometer: {
      symbolId: "nvidia-react-gui-icons-v1-fill-thermometer",
      viewBox: "0 0 16 16",
      paths: [
        "M10 3H8.5v1H10v1H8.5v1H10v1H8.5v1H10v1.766a3 3 0 1 1-4-.001V1h4Zm-2 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
      ],
    },
    "thumb-down": {
      symbolId: "nvidia-react-gui-icons-v1-fill-thumb-down",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 11H14V3h-2.5zm-1-7.518L8.7 3H3.1L1.719 8.152 2.482 11h4.366l-.587 2.191a1.438 1.438 0 0 0 2.633 1.09L10.5 11.5z",
      ],
    },
    "thumb-up": {
      symbolId: "nvidia-react-gui-icons-v1-fill-thumb-up",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 5H2v8h2.5zm1 7.518L7.3 13h5.6l1.381-5.152L13.518 5H9.152l.587-2.191a1.438 1.438 0 0 0-2.633-1.09L5.5 4.5z",
      ],
    },
    ticket: {
      symbolId: "nvidia-react-gui-icons-v1-fill-ticket",
      viewBox: "0 0 16 16",
      paths: [
        "M15 3v3.5h-1a1.5 1.5 0 0 0 0 3h1V13H1V9.5h1a1.5 1.5 0 0 0 0-3H1V3ZM8 5.87l-.641 1.299-1.433.208 1.037 1.011-.245 1.428L8 9.142l1.282.674-.245-1.428 1.038-1.011-1.434-.208Z",
      ],
    },
    timer: {
      symbolId: "nvidia-react-gui-icons-v1-fill-timer",
      viewBox: "0 0 16 16",
      paths: [
        "M7 3H6V2h4v1H9v1.1A5.002 5.002 0 0 1 8 14a5 5 0 0 1-1-9.9Zm0 6a1 1 0 1 0 1.259-.966l-.553-2.062-.966.259.553 2.062A1 1 0 0 0 7 9",
      ],
    },
    toolbox: {
      symbolId: "nvidia-react-gui-icons-v1-fill-toolbox",
      viewBox: "0 0 16 16",
      paths: [
        "M5 2h6v2h3v3h-4V6H6v1H2V4h3Zm5 1H6v1h4ZM2 8v5h12V8h-4v1H6V8zm7 0H7V7h2z",
      ],
    },
    "traffic-cone": {
      symbolId: "nvidia-react-gui-icons-v1-fill-traffic-cone",
      viewBox: "0 0 16 16",
      paths: [
        "M6.614 3h2.768l2.411 9h2.205v1h-12v-1h2.205l.402-1.5H9v-1H4.873l.268-1H8v-1H5.409z",
      ],
    },
    "transfer-horizontal": {
      symbolId: "nvidia-react-gui-icons-v1-fill-transfer-horizontal",
      viewBox: "0 0 16 16",
      paths: [
        "m6.146 1.15.708.707-2.147 2.147H12v1H4.707L6.854 7.15l-.708.707-3.353-3.353Zm5.147 9.853L9.146 8.857l.708-.707 3.353 3.353-3.353 3.354-.708-.707 2.147-2.147H4v-1Z",
      ],
    },
    "transfer-vertical": {
      symbolId: "nvidia-react-gui-icons-v1-fill-transfer-vertical",
      viewBox: "0 0 16 16",
      paths: [
        "m1.146 9.857.708-.707L4 11.296V4.004h1v7.292L7.146 9.15l.708.707L4.5 13.211ZM11 4.711 8.854 6.857l-.708-.707L11.5 2.796l3.354 3.354-.708.707L12 4.711v7.293h-1Z",
      ],
    },
    transform: {
      symbolId: "nvidia-react-gui-icons-v1-fill-transform",
      viewBox: "0 0 16 16",
      paths: [
        "M10.25 13.634 8 14.815l-2.25-1.181V10.27L8 11.45l2.25-1.18zm-5.5-3.889v3.364L2 11.667V8.302zM14 11.667l-2.75 1.442V9.745L14 8.302z",
        "M10.25 6.381v2.76L8 10.321l-2.25-1.18v-2.76L8 5.2z",
        "M6.924 4.635 4.75 5.776v2.839L2 7.172V4.333l2.174-1.141zM14 4.333v2.839l-2.75 1.443V5.776l-2.174-1.14 2.75-1.444zm-3.25-1.705L8 4.07 5.249 2.628 8 1.186z",
      ],
    },
    transparency: {
      symbolId: "nvidia-react-gui-icons-v1-fill-transparency",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1h-.5v14H8A7 7 0 1 0 8 1M4.143 3.404A6 6 0 0 1 5.947 2.36l-.342-.939A7 7 0 0 0 3.5 2.638zM2.09 6.957A6 6 0 0 1 2.803 5l-.866-.501a7 7 0 0 0-.832 2.286zM2.803 11a6 6 0 0 1-.713-1.957l-.985.172c.144.82.43 1.591.832 2.286zm3.144 2.64a6 6 0 0 1-1.804-1.044l-.643.766a7 7 0 0 0 2.105 1.217z",
      ],
    },
    trash: {
      symbolId: "nvidia-react-gui-icons-v1-fill-trash",
      viewBox: "0 0 16 16",
      paths: ["M10 1H6v2H3v1h10V3h-3zm2 4H4v10h8z"],
    },
    "trash-delete": {
      symbolId: "nvidia-react-gui-icons-v1-fill-trash-delete",
      viewBox: "0 0 16 16",
      paths: [
        "M10 1v2h3v1H3V3h3V1Zm1.889 4H4v10h3.257a5.5 5.5 0 0 1 4.632-8.986z",
        "M10.793 11.5 8.646 9.354l.708-.708 2.146 2.147 2.146-2.147.708.708-2.147 2.146 2.147 2.146-.708.708-2.146-2.147-2.146 2.147-.708-.708z",
      ],
    },
    tree: {
      symbolId: "nvidia-react-gui-icons-v1-fill-tree",
      viewBox: "0 0 16 16",
      paths: [
        "M6.473 2.037a2.5 2.5 0 0 1 4.504 1.126 3 3 0 0 1 .751 5.29A4 4 0 0 1 8.5 10.969V13H13v1H3v-1h4.5v-2.031a4 4 0 0 1-2.151-.973A2.5 2.5 0 0 1 3.301 6.31a3 3 0 0 1 3.172-4.273",
      ],
    },
    trees: {
      symbolId: "nvidia-react-gui-icons-v1-fill-trees",
      viewBox: "0 0 16 16",
      paths: [
        "M6.505 1 2.639 7.696h1.495l-3 5.196H6V15h1v-2.108h4.866l-3-5.196h1.505zM10 15v-1.108h1V15z",
        "M12.103 8.696 9.082 3.464 10.505 1l3.866 6.696h-1.505l3 5.196h-2.845l-2.423-4.196z",
      ],
    },
    "triangle-wave": {
      symbolId: "nvidia-react-gui-icons-v1-fill-triangle-wave",
      viewBox: "0 0 16 16",
      paths: [
        "m5.667 4.842 4.666 4 4.342-3.722.65.76-4.992 4.279-4.666-4L1.325 9.88l-.65-.76Z",
      ],
    },
    trident: {
      symbolId: "nvidia-react-gui-icons-v1-fill-trident",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 1v6.977c.518-.048 1.054-.175 1.453-.408q.384-.226.529-.542c.094-.207.136-.495.033-.906a95 95 0 0 0-.586-2.238l-.158-.556-.04-.138-.01-.033-.002-.008-.454-1.492 2.539 1.947-.608.794-.116-.089q.173.643.405 1.571c.147.589.112 1.114-.094 1.563-.203.445-.549.765-.933.989-.589.346-1.319.499-1.958.549V14h-1V8.98c-.639-.05-1.369-.203-1.958-.549-.384-.224-.73-.544-.933-.989-.205-.449-.241-.974-.094-1.563q.233-.928.405-1.571l-.116.089-.608-.794 2.539-1.947-.453 1.489v.003l-.003.008-.01.033-.04.138q-.054.184-.158.556a95 95 0 0 0-.586 2.238c-.103.411-.061.699.034.906q.144.316.529.542c.398.233.934.359 1.452.408V1z",
      ],
    },
    typography: {
      symbolId: "nvidia-react-gui-icons-v1-fill-typography",
      viewBox: "0 0 16 16",
      paths: [
        "m5.483 3.37 2.278 8.5-.966.26L5.956 9H3.044l-.838 3.13-.483-.13-.484-.129 2.279-8.5L3.616 3h1.768ZM3.312 8h2.376L4.616 4h-.232ZM14 6.793v3.642l.385 1.435-.966.26-.178-.664-.534.534H9.793L9 11.207V9.793l.741-.741L13 8.179v-.972L12.793 7h-2.586l-.353.354-.708-.708L9.793 6h3.414Zm-3.741 3.155-.259.259v.586l.207.207h2.086l.707-.707V9.214Z",
      ],
    },
    umbrella: {
      symbolId: "nvidia-react-gui-icons-v1-fill-umbrella",
      viewBox: "0 0 16 16",
      paths: [
        "M7 12.5a.5.5 0 0 0 1 0V8H.849l.935-3.491 2.359-2.36L8 1.116l3.857 1.033 2.36 2.36L15.151 8H9v4.5a1.5 1.5 0 0 1-3 0z",
      ],
    },
    underline: {
      symbolId: "nvidia-react-gui-icons-v1-fill-underline",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 3v6.5a2.5 2.5 0 1 0 5 0V3h1v6.5a3.5 3.5 0 1 1-7 0V3ZM14 14v1H2v-1Z",
      ],
    },
    undo: {
      symbolId: "nvidia-react-gui-icons-v1-fill-undo",
      viewBox: "0 0 16 16",
      paths: [
        "M4.647 4.646c1.924-1.924 4.905-2.161 6.885-.182a5 5 0 0 1 0 7.071l-.707-.707a4 4 0 0 0 0-5.656c-1.536-1.536-3.881-1.409-5.471.181L3.708 6.999 6 7v1l-3.998-.002L2 4h1l.001 2.292Z",
      ],
    },
    upload: {
      symbolId: "nvidia-react-gui-icons-v1-fill-upload",
      viewBox: "0 0 16 16",
      paths: [
        "m8 4.293 4.354 4.353-.708.708L8.5 6.207V14h-1V6.207L4.354 9.354l-.708-.708ZM3.384 3l-.571 2.129-.966-.258L2.616 2h10.768l.769 2.871-.966.258L12.616 3Z",
      ],
    },
    usb: {
      symbolId: "nvidia-react-gui-icons-v1-fill-usb",
      viewBox: "0 0 16 16",
      paths: [
        "M9.854 2.647 8 .793 6.146 2.647l.708.707.646-.647v7.141L5 9.179V7.915a1.5 1.5 0 1 0-1 0v2.031l3.5.938v.179a2 2 0 1 0 1 0V9.384l3.5-.938V7h1V4h-3v3h1v.678l-2.5.67V2.707l.646.647z",
      ],
    },
    "v-align-bottom": {
      symbolId: "nvidia-react-gui-icons-v1-fill-v-align-bottom",
      viewBox: "0 0 16 16",
      paths: ["M14 13H2v-1h12zM4 2v9h3V2zm4 3v6h3V5z"],
    },
    "v-align-center": {
      symbolId: "nvidia-react-gui-icons-v1-fill-v-align-center",
      viewBox: "0 0 16 16",
      paths: ["M4 8.5V13h3V8.5h1V11h3V8.5h3v-1h-3V5H8v2.5H7V3H4v4.5H2v1z"],
    },
    "v-align-top": {
      symbolId: "nvidia-react-gui-icons-v1-fill-v-align-top",
      viewBox: "0 0 16 16",
      paths: ["M2 4h12V3H2zm2 1v9h3V5zm4 0v6h3V5z"],
    },
    vga: {
      symbolId: "nvidia-react-gui-icons-v1-fill-vga",
      viewBox: "0 0 16 16",
      paths: [
        "M13.276 12H2.724L.849 5h14.302ZM4 8h1V7H4Zm2 0h1V7H6Zm2 0h1V7H8Zm2 0h1V7h-1ZM5 9h1V8H5Zm2 0h1V8H7Zm2 0h1V8H9Zm2 0h1V8h-1Zm-7 1h1V9H4Zm2 0h1V9H6Zm2 0h1V9H8Zm2-1v1h1V9Z",
      ],
    },
    videocam: {
      symbolId: "nvidia-react-gui-icons-v1-fill-videocam",
      viewBox: "0 0 16 16",
      paths: ["M12 4H1v8h11v-1.691l3 1.5V4.191l-3 1.5z"],
    },
    "videocam-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-videocam-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L11.293 12H1V4h2.293L1.646 2.354zM15 11.809l-.725-.363L6.828 4H12v1.691l3-1.5z",
      ],
    },
    vr: {
      symbolId: "nvidia-react-gui-icons-v1-fill-vr",
      viewBox: "0 0 16 16",
      paths: [
        "M6 4h4V3H6zm7.321 4.498L12.384 5H3.616l-.937 3.497.937 3.498h3.501L7.384 11h1.232l.267.995h3.501zM2.349 6.129l-.966-.258-.704 2.626.705 2.632.966-.258-.636-2.374zm11.302 0 .635 2.369-.636 2.373.966.258.705-2.631-.704-2.627z",
      ],
    },
    wand: {
      symbolId: "nvidia-react-gui-icons-v1-fill-wand",
      viewBox: "0 0 16 16",
      paths: [
        "m8.093.815.518 1.933.966-.259L9.059.557zm5.443.942-1.415 1.415.707.707 1.415-1.415zM4.557 5.059l1.932.518.259-.966-1.933-.518zm10.886 1.882-1.932-.518-.259.966 1.932.518zm-3.536 4.243-.518-1.932-.966.259.518 1.932zm-3.261-2.33L3.5 14 2 12.5l5.146-5.146zm.708-.708L11.5 6 10 4.5 7.854 6.646z",
      ],
    },
    warning: {
      symbolId: "nvidia-react-gui-icons-v1-fill-warning",
      viewBox: "0 0 16 16",
      paths: ["m8 .984 7.357 13.014H.643ZM7.5 6.5V10h1V6.5Zm0 4.5v1h1v-1Z"],
    },
    watch: {
      symbolId: "nvidia-react-gui-icons-v1-fill-watch",
      viewBox: "0 0 16 16",
      paths: [
        "M11 1H5v1.803A5.97 5.97 0 0 1 8 2c1.093 0 2.117.292 3 .803zm0 11c-.836.628-1.874 1-3 1a4.98 4.98 0 0 1-3-1 5 5 0 0 1-2-4c0-1.636.786-3.088 2-4 .836-.628 1.874-1 3-1s2.164.372 3 1a5 5 0 0 1 1.9 3h.6v2h-.6a5 5 0 0 1-1.9 3M7.836 5.455l-.966.259.722 2.694 2.694.722.259-.966-2.137-.572ZM5 13.197A5.97 5.97 0 0 0 8 14a5.97 5.97 0 0 0 3-.803V15H5z",
      ],
    },
    "watch-party": {
      symbolId: "nvidia-react-gui-icons-v1-fill-watch-party",
      viewBox: "0 0 16 16",
      paths: [
        "M15 1H1v9h1V2h12v8h1z",
        "M7 3.254 9.992 5 7 6.745ZM4.5 7.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 4.5 7.5m7 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 11.5 7.5m-5 2.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 10m.11 2h2.78l.75 3H5.86zm4.311 2h2.719l-.75-3h-2.719zm-5.092-3H3.11l-.75 3h2.719z",
      ],
    },
    water: {
      symbolId: "nvidia-react-gui-icons-v1-fill-water",
      viewBox: "0 0 16 16",
      paths: [
        "M8.447 3.276 8 2.382l-.447.894c-.317.633-.779 1.344-1.278 2.11-.27.416-.551.848-.826 1.293-.379.616-.737 1.246-1.001 1.853C4.186 9.134 4 9.751 4 10.333a4 4 0 1 0 8 0c0-.582-.186-1.199-.448-1.801-.264-.607-.622-1.237-1.001-1.853-.275-.445-.556-.877-.826-1.293-.499-.766-.961-1.477-1.278-2.11",
      ],
    },
    "weather-cloud": {
      symbolId: "nvidia-react-gui-icons-v1-fill-weather-cloud",
      viewBox: "0 0 16 16",
      paths: [
        "M6.5 2c1.433 0 2.66.862 3.201 2.095.257-.06.524-.095.799-.095a3.5 3.5 0 0 1 3.399 2.678A3 3 0 0 1 12 12H7.5a2.5 2.5 0 0 1-2.45-2H3.5a2.5 2.5 0 0 1-.47-4.955A3.5 3.5 0 0 1 6.5 2m0 1A2.5 2.5 0 0 0 4 5.5V6h-.5a1.5 1.5 0 0 0 0 3h1.552A2.5 2.5 0 0 1 7.03 7.045a3.5 3.5 0 0 1 1.741-2.586A2.5 2.5 0 0 0 6.5 3",
      ],
    },
    "weather-fog": {
      symbolId: "nvidia-react-gui-icons-v1-fill-weather-fog",
      viewBox: "0 0 16 16",
      paths: [
        "M5.927 11.205c.552-.115 1.004-.088 1.399.044.436.146.757.408 1.005.605.263.211.453.357.696.438.228.076.549.108 1.068-.031l2.775-.744.26.965-2.776.745c-.666.178-1.192.164-1.643.013-.436-.145-.757-.406-1.005-.604-.263-.21-.453-.357-.696-.438-.199-.066-.47-.099-.882-.013l-2.998.797-.26-.965z",
        "M5.927 9.205c.552-.115 1.004-.088 1.399.044.436.146.757.408 1.005.605.263.211.453.357.696.438.228.076.549.108 1.068-.031l2.775-.744.26.965-2.776.745c-.666.178-1.192.164-1.643.013-.436-.145-.757-.406-1.005-.604-.263-.21-.453-.357-.696-.438-.199-.066-.47-.099-.882-.013l-2.998.797-.26-.965z",
        "M8.5 3c1.65 0 3.03 1.142 3.4 2.679A3 3 0 0 1 13 8c0 .175-.014.35-.023.524l-2.623.703c-.665.178-1.192.164-1.643.013-.436-.145-.756-.407-1.004-.604-.263-.21-.454-.357-.696-.438-.199-.066-.471-.099-.883-.013l-3.078.818a2.8 2.8 0 0 1-.016-.912A2.5 2.5 0 0 1 5.03 6.044 3.5 3.5 0 0 1 8.5 3",
      ],
    },
    "weather-lightning": {
      symbolId: "nvidia-react-gui-icons-v1-fill-weather-lightning",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 2a3.5 3.5 0 0 1 3.399 2.678 2.996 2.996 0 0 1-1.037 5.191L8.149 14.5H6.863V12H5.201l.57-2H5.5a2.5 2.5 0 0 1-.47-4.955A3.5 3.5 0 0 1 8.5 2m-1.976 9h1.339v2.01L9.627 10H7.77l.568-2h-.96Z",
      ],
    },
    "weather-partial-cloud-day": {
      symbolId: "nvidia-react-gui-icons-v1-fill-weather-partial-cloud-day",
      viewBox: "0 0 16 16",
      paths: [
        "M5 3c1.13 0 2.112.625 2.624 1.547a3.497 3.497 0 0 1 5.275 2.131A3 3 0 0 1 11 12H6.5a2.5 2.5 0 0 1-2.416-3.146A3 3 0 0 1 5 3m0 1a2 2 0 0 0-.456 3.945 2.5 2.5 0 0 1 1.486-.9c.09-.69.382-1.315.813-1.818A2 2 0 0 0 5 4",
      ],
    },
    "weather-partial-cloud-night": {
      symbolId: "nvidia-react-gui-icons-v1-fill-weather-partial-cloud-night",
      viewBox: "0 0 16 16",
      paths: [
        "M4.545 3.036A2.99 2.99 0 0 1 7.621 4.55 3.5 3.5 0 0 1 9.5 4a3.5 3.5 0 0 1 3.399 2.678A3 3 0 0 1 11 12H6.5a2.5 2.5 0 0 1-2.416-3.145 2.98 2.98 0 0 1-1.78-1.541l-.099-.225a3.1 3.1 0 0 1-.2-.915l.815.256a1.498 1.498 0 0 0 1.462-2.532l-.629-.579c.28-.14.582-.24.892-.283m1.047 1.055a2.49 2.49 0 0 1-1.949 3.376c.248.23.573.404.9.48a2.5 2.5 0 0 1 1.487-.902c.09-.689.381-1.314.811-1.816a2 2 0 0 0-1.249-1.138",
      ],
    },
    "weather-rain": {
      symbolId: "nvidia-react-gui-icons-v1-fill-weather-rain",
      viewBox: "0 0 16 16",
      paths: [
        "m5.983 11.13-.804 2.999-.966-.259.804-3zm6 0-.804 2.999-.966-.259.804-3zm-3.268 0-.536 1.999-.966-.259.536-2zM8.5 2a3.5 3.5 0 0 1 3.399 2.678A3 3 0 0 1 10 10H5.5a2.5 2.5 0 0 1-.47-4.955A3.5 3.5 0 0 1 8.5 2",
      ],
    },
    "weather-snow": {
      symbolId: "nvidia-react-gui-icons-v1-fill-weather-snow",
      viewBox: "0 0 16 16",
      paths: [
        "M8.5 2a3.5 3.5 0 0 1 3.399 2.678 2.99 2.99 0 0 1 .316 4.34 4 4 0 1 1-7.656.797 2.499 2.499 0 0 1 .471-4.77A3.5 3.5 0 0 1 8.5 2m0 5.793-.646-.647-.708.708.854.853v.927l-.803-.463-.312-1.166-.966.259.236.882-.883.237.259.966 1.166-.313.803.463-.803.465-1.166-.313-.259.966.883.237-.236.882.966.259.312-1.166.803-.464v.928l-.854.853.708.708.646-.647.646.647.708-.708L9 12.293v-.928l.803.464.312 1.166.966-.259-.236-.882.882-.237-.258-.966-1.166.313-.804-.465.804-.463 1.166.313.258-.966-.882-.237.236-.882-.966-.259-.312 1.166L9 9.634v-.927l.854-.853-.708-.708Z",
      ],
    },
    "weather-wind": {
      symbolId: "nvidia-react-gui-icons-v1-fill-weather-wind",
      viewBox: "0 0 16 16",
      paths: [
        "M11.5 8A2.5 2.5 0 1 1 9 10.5h1A1.5 1.5 0 1 0 11.5 9H3V8z",
        "M7 11H2v-1h5zm3-8a2 2 0 1 1 0 4H4V6h6a1 1 0 1 0-1-1H8a2 2 0 0 1 2-2",
      ],
    },
    webcam: {
      symbolId: "nvidia-react-gui-icons-v1-fill-webcam",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
        "M4.5 3h7a3.5 3.5 0 1 1 0 7H9.902l.268 1H11v1H5v-1h.831l.268-1H4.5a3.5 3.5 0 1 1 0-7M3 6.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 3 6.5M6.866 11h2.268l-.268-1H7.134ZM12 6h-1v1h1Z",
      ],
    },
    "webcam-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-webcam-off",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
        "m2.354 1.646 12 12-.708.708L11 11.707V12H5v-1h.831l.268-1H4.5a3.5 3.5 0 0 1-1.743-6.536l-1.111-1.11Zm1.951 3.366A1.502 1.502 0 0 0 4.5 8a1.5 1.5 0 0 0 1.487-1.305ZM6.866 11h2.268l-.268-1H7.134ZM15 6.5a3.5 3.5 0 0 1-2.361 3.311L5.828 3H11.5A3.5 3.5 0 0 1 15 6.5M12 6h-1v1h1Z",
      ],
    },
    "webcam-settings": {
      symbolId: "nvidia-react-gui-icons-v1-fill-webcam-settings",
      viewBox: "0 0 16 16",
      paths: [
        "M4.5 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",
        "M4.5 3h7a3.5 3.5 0 0 1 3.243 4.819A5.002 5.002 0 0 0 7.416 10h-.282l-.535 2H5v-1h.831l.268-1H4.5a3.5 3.5 0 1 1 0-7M3 6.5a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 3 6.5M11 5v1h1V5Z",
        "M9.629 9.842A2.5 2.5 0 0 1 11 9.05V8h1v1.05a2.5 2.5 0 0 1 1.371.792l.91-.525.5.866-.909.525a2.5 2.5 0 0 1 0 1.584l.909.525-.5.866-.91-.525A2.5 2.5 0 0 1 12 13.95V15h-1v-1.05a2.5 2.5 0 0 1-1.371-.792l-.911.525-.5-.866.91-.525a2.5 2.5 0 0 1 0-1.584l-.91-.525.5-.866Zm.571.908c-.127.22-.2.476-.2.75a1.495 1.495 0 0 0 1.5 1.5 1.5 1.5 0 1 0-1.3-2.25",
      ],
    },
    weight: {
      symbolId: "nvidia-react-gui-icons-v1-fill-weight",
      viewBox: "0 0 16 16",
      paths: [
        "M10 4c0 .364-.097.706-.268 1h2.276l2.144 8H1.848l2.144-8h2.276A2 2 0 1 1 10 4M8 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 7v3h1V7Zm3 0v3h1V7Z",
      ],
    },
    "weight-bar": {
      symbolId: "nvidia-react-gui-icons-v1-fill-weight-bar",
      viewBox: "0 0 16 16",
      paths: [
        "M4 4h1v3.5h6V4h1v8h-1V8.5H5V12H4ZM2 7.5V5h1v6H2V8.5H1v-1ZM13 5h1v2.5h1v1h-1V11h-1Z",
      ],
    },
    wheel: {
      symbolId: "nvidia-react-gui-icons-v1-fill-wheel",
      viewBox: "0 0 16 16",
      paths: [
        "M2.203 6.447A6.002 6.002 0 0 1 14 8 6 6 0 1 1 2.203 6.447m4.979.296a1.5 1.5 0 0 1 1.636 0c.165.107.307.246.419.408l3.44-.922a5.003 5.003 0 0 0-9.354 0l3.44.922c.112-.162.254-.301.419-.408M7.5 9.415a1.5 1.5 0 0 1-.996-1.298l-3.44-.922a5 5 0 0 0 4.436 5.78Zm1.995-1.298A1.5 1.5 0 0 1 8.5 9.415v3.56a5 5 0 0 0 4.436-5.78Z",
      ],
    },
    wheelchair: {
      symbolId: "nvidia-react-gui-icons-v1-fill-wheelchair",
      viewBox: "0 0 16 16",
      paths: [
        "M5.5 3a2 2 0 1 1 3.999-.001A2 2 0 0 1 5.5 3M8 6v1h2v1H8v2h3.289l1.587 2.75-.866.5L10.711 11H7V6z",
        "M7.5 15A4.5 4.5 0 0 1 6 6.256V12h4.134l.808 1.399A4.5 4.5 0 0 1 7.5 15",
      ],
    },
    whispermode: {
      symbolId: "nvidia-react-gui-icons-v1-fill-whispermode",
      viewBox: "0 0 16 16",
      paths: [
        "m2.001 4.536 6-3.464 6 3.464v6.928l-6 3.464-6-3.464Zm4.352 1.111c0 .254.111.54.247.804q.088.173.196.345a5 5 0 0 0-.345-.196c-.264-.136-.55-.247-.804-.247C4.737 6.353 4 7.09 4 8v1.647h1.647c.254 0 .54-.111.804-.247q.173-.088.345-.196-.108.172-.196.345c-.136.264-.247.55-.247.804C6.353 11.263 7.09 12 8 12h1.647v-1.647c0-.254-.111-.54-.247-.804a5 5 0 0 0-.196-.345q.172.108.345.196c.264.136.55.247.804.247C11.263 9.647 12 8.91 12 8V6.353h-1.647c-.254 0-.54.111-.804.247q-.172.088-.345.196.108-.173.196-.345c.136-.264.247-.55.247-.804C9.647 4.737 8.91 4 8 4H6.353Z",
      ],
    },
    wifi: {
      symbolId: "nvidia-react-gui-icons-v1-fill-wifi",
      viewBox: "0 0 16 16",
      paths: [
        "M1.636 6.636A8.97 8.97 0 0 1 8 4a8.97 8.97 0 0 1 6.364 2.636l.707-.707A9.97 9.97 0 0 0 8 3 9.97 9.97 0 0 0 .929 5.929z",
        "M3.757 8.757A5.98 5.98 0 0 1 8 7c1.657 0 3.156.671 4.243 1.757l.707-.707A6.98 6.98 0 0 0 8 6a6.98 6.98 0 0 0-4.95 2.05zM8 9a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 9",
      ],
    },
    "wifi-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-wifi-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-3.671-3.672q.024.156.025.318a2 2 0 1 1-1.682-1.975L6.486 7.193a6 6 0 0 0-2.729 1.564L3.05 8.05a7 7 0 0 1 2.635-1.658L4.154 4.861a9 9 0 0 0-2.518 1.775l-.707-.707a10 10 0 0 1 2.479-1.814L1.646 2.354zm9.889 7.111a6 6 0 0 0-1.969-1.311l-1.39-1.391A7 7 0 0 1 12.95 8.05zM8 4q-.562 0-1.104.067l-.872-.872Q6.984 3.001 8 3a9.97 9.97 0 0 1 7.071 2.929l-.707.707A8.97 8.97 0 0 0 8 4",
      ],
    },
    window: {
      symbolId: "nvidia-react-gui-icons-v1-fill-window",
      viewBox: "0 0 16 16",
      paths: ["M2 3h12v2H2zm0 3v7h12V6z"],
    },
    "window-code": {
      symbolId: "nvidia-react-gui-icons-v1-fill-window-code",
      viewBox: "0 0 16 16",
      paths: [
        "M14 3H2v2h12zm0 3v7H2V6ZM5.647 7.146 3.793 9l1.854 1.854.707-.708L5.207 9l1.147-1.146ZM10.793 9l-1.146 1.146.707.708L12.207 9l-1.853-1.854-.707.708Zm-3.934 1.842.949.316 1.333-4-.949-.316Z",
      ],
    },
    "window-grid": {
      symbolId: "nvidia-react-gui-icons-v1-fill-window-grid",
      viewBox: "0 0 16 16",
      paths: [
        "M7 1H1v2h6zM1 7V4h6v3zm8 0V4h6v3zm6-6v2H9V1zM7 9H1v2h6zm0 3H1v3h6zm2 0h6v3H9zm6-1H9V9h6z",
      ],
    },
    "window-stack": {
      symbolId: "nvidia-react-gui-icons-v1-fill-window-stack",
      viewBox: "0 0 16 16",
      paths: ["M2 3h10v2H2zm0 3v5h10V6z", "M13 12V5h1v8H3v-1z"],
    },
    "window-terminal": {
      symbolId: "nvidia-react-gui-icons-v1-fill-window-terminal",
      viewBox: "0 0 16 16",
      paths: [
        "M14 3H2v2h12zm0 3v7H2V6ZM5.293 9l-1.147 1.146.708.708L6.707 9 4.854 7.146l-.708.708ZM10 11v-1H7v1Z",
      ],
    },
    "wine-glass": {
      symbolId: "nvidia-react-gui-icons-v1-fill-wine-glass",
      viewBox: "0 0 16 16",
      paths: [
        "M5.54 2h4.92l.564 6.831L8.5 10.289V14H11v1H5v-1h2.5v-3.711L4.976 8.831z",
      ],
    },
    "wireless-modem": {
      symbolId: "nvidia-react-gui-icons-v1-fill-wireless-modem",
      viewBox: "0 0 16 16",
      paths: [
        "M4 5c0-.729.195-1.412.535-2l-.866-.501A5 5 0 0 0 3 5c0 .91.244 1.765.669 2.501L4.535 7A4 4 0 0 1 4 5m7.465-2c.34.588.535 1.271.535 2a4 4 0 0 1-.535 2l.866.501A5 5 0 0 0 13 5c0-.91-.244-1.765-.669-2.501zM6.267 4A2 2 0 0 0 6 5c0 .365.097.706.267 1l-.865.501A3 3 0 0 1 5 5c0-.546.146-1.059.402-1.501zm3.466 0c.17.294.267.635.267 1s-.097.706-.267 1l.865.501C10.854 6.059 11 5.546 11 5a3 3 0 0 0-.402-1.5z",
        "M7 5a1 1 0 1 1 1.5.866V9H14v5H2V9h5.5V5.866A1 1 0 0 1 7 5m1 7v-1H7v1Zm1-1v1h1v-1Zm3 0h-1v1h1Z",
      ],
    },
    "wireless-modem-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-wireless-modem-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 13 13-.708.708L13.293 14H2V9h5.5v-.793l-1.85-1.85-.248.144a3 3 0 0 1-.288-.68L4.01 4.717Q4 4.857 4 5c0 .73.195 1.412.535 2l-.865.501A5 5 0 0 1 3 5q.002-.598.135-1.158L1.646 2.354ZM8 12v-1H7v1Zm1-1v1h1v-1Zm5-2v2.172L11.829 9zM9 5c0 .32-.15.605-.384.788L7.212 4.384A1 1 0 0 1 9 5m3 0c0-.729-.195-1.412-.535-2l.866-.501C12.757 3.235 13 4.09 13 5s-.244 1.765-.669 2.501L11.465 7A4 4 0 0 0 12 5m-2 0a2 2 0 0 0-.267-1l.865-.5c.256.441.402.955.402 1.5 0 .546-.146 1.059-.402 1.501L9.733 6A2 2 0 0 0 10 5",
      ],
    },
    woman: {
      symbolId: "nvidia-react-gui-icons-v1-fill-woman",
      viewBox: "0 0 16 16",
      paths: [
        "M8 1a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 1M6.662 6h2.677l2.4 6H10v3H9v-3H7v3H6v-3H4.261z",
      ],
    },
    workspace: {
      symbolId: "nvidia-react-gui-icons-v1-fill-workspace",
      viewBox: "0 0 16 16",
      paths: ["M14 3H2v4h12zM2 13V8h4v5zm5 0h7V8H7z"],
    },
    "workspace-group": {
      symbolId: "nvidia-react-gui-icons-v1-fill-workspace-group",
      viewBox: "0 0 16 16",
      paths: ["M12 3H2v3h10zM5 7H2v4h3zm1 4V7h6v4z", "M3 12v1h11V5h-1v7z"],
    },
    workstation: {
      symbolId: "nvidia-react-gui-icons-v1-fill-workstation",
      viewBox: "0 0 16 16",
      paths: ["M4 2h8v12H4Zm6 4H6v1h4ZM6 8v1h4V8Zm4-4H9v1h1Z"],
    },
    "workstation-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-workstation-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708L12 12.707V14H4V4.707L1.646 2.354ZM7.293 8H6v1h2.293ZM12 2v7.172L9.828 7H10V6H8.828l-4-4Zm-2 2H9v1h1Z",
      ],
    },
    "workstation-system": {
      symbolId: "nvidia-react-gui-icons-v1-fill-workstation-system",
      viewBox: "0 0 16 16",
      paths: [
        "M15 2v12h-5v-1h2V9h2V8h-2V7h2V6h-2V4H7V2Zm-1 2h-1v1h1Z",
        "M11 5v7H6.902l.268 1H9v1H3v-1h1.831l.268-1H1V5Zm-1 1H2v5h8Zm-4.134 7h.268L6 12.5Z",
      ],
    },
    "workstation-system-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-workstation-system-off",
      viewBox: "0 0 16 16",
      paths: [
        "m15.354 14.646-.708.708L13.293 14H10v-1h2v-.293l-1-1V12H6.901l.269 1H9v1H3v-1h1.831l.269-1H1V5h3.293L1.646 2.354l.708-.708ZM2 6v5h8v-.293L5.293 6Zm3.866 7h.269L6 12.5ZM15 12.172l-3-3V9h2V8h-2V7h2V6h-2V4H7V2h8ZM13 5h1V4h-1Z",
        "m11 8.172-1-1V6H8.828l-1-1H11z",
      ],
    },
    world: {
      symbolId: "nvidia-react-gui-icons-v1-fill-world",
      viewBox: "0 0 16 16",
      paths: [
        "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m1.957 5H6.043a11.6 11.6 0 0 0 0 2h3.914a11.6 11.6 0 0 0 0-2M8 3c-.374 0-.875.356-1.313 1.318A7.4 7.4 0 0 0 6.179 6h3.642a7.4 7.4 0 0 0-.508-1.682C8.875 3.356 8.374 3 8 3m1.821 7H6.179c.12.642.295 1.212.508 1.682C7.125 12.644 7.626 13 8 13s.875-.356 1.313-1.318c.213-.47.388-1.04.508-1.682m1.139-1h1.94a5 5 0 0 0 0-2h-1.94a12.6 12.6 0 0 1 0 2M3.1 7a5 5 0 0 0 0 2h1.94Q5 8.51 5 8t.04-1Zm6.862 5.6a5.02 5.02 0 0 0 2.622-2.6h-1.747a8.6 8.6 0 0 1-.614 2.096 5 5 0 0 1-.261.504m.875-6.6h1.747a5.02 5.02 0 0 0-2.622-2.6q.143.242.261.504c.271.597.481 1.31.614 2.096m-4.799 6.6a5 5 0 0 1-.261-.504A8.6 8.6 0 0 1 5.163 10H3.416a5.02 5.02 0 0 0 2.622 2.6M3.416 6h1.747a8.6 8.6 0 0 1 .614-2.096q.118-.262.261-.504A5.02 5.02 0 0 0 3.416 6",
      ],
    },
    "world-off": {
      symbolId: "nvidia-react-gui-icons-v1-fill-world-off",
      viewBox: "0 0 16 16",
      paths: [
        "m2.354 1.646 12 12-.708.708-1.771-1.772a6 6 0 0 1-8.456-8.456L1.646 2.354ZM9.293 10H6.179c.12.642.295 1.212.508 1.682C7.125 12.644 7.626 13 8 13s.875-.356 1.313-1.318c.163-.36.305-.78.416-1.246ZM3.1 7a5 5 0 0 0 0 2h1.94a12.6 12.6 0 0 1 0-2Zm2.938 5.6a5 5 0 0 1-.261-.504A8.6 8.6 0 0 1 5.163 10H3.416a5.02 5.02 0 0 0 2.622 2.6M6.293 7h-.25a11.6 11.6 0 0 0 0 2h2.25ZM4.129 4.836A5 5 0 0 0 3.416 6h1.747l.019-.111Zm6.413 6.414q-.14.454-.319.846a5 5 0 0 1-.261.504c.436-.186.84-.432 1.202-.728ZM14 8c0 .926-.21 1.804-.585 2.587L11.828 9H12.9a5 5 0 0 0 0-2h-1.94q.04.49.04 1l-.001.17-1.031-1.03L9.957 7h-.129l-1-1h.993a7.4 7.4 0 0 0-.508-1.682C8.875 3.356 8.374 3 8 3c-.331 0-.762.279-1.16 1.011L5.413 2.585A6 6 0 0 1 14 8m-3.163-2h1.747a5.02 5.02 0 0 0-2.622-2.6q.143.242.261.504c.271.597.481 1.31.614 2.096",
      ],
    },
    wrench: {
      symbolId: "nvidia-react-gui-icons-v1-fill-wrench",
      viewBox: "0 0 16 16",
      paths: [
        "M11 1q.29 0 .57.04l.43.062V1.5L9.972 3.528 10.5 5.5l1.972.528L14.5 4h.398l.062.43q.04.28.04.57a4 4 0 0 1-5.131 3.837L3.5 15.207.793 12.5l6.369-6.37A4 4 0 0 1 11 1",
      ],
    },
    yoke: {
      symbolId: "nvidia-react-gui-icons-v1-fill-yoke",
      viewBox: "0 0 16 16",
      paths: [
        "M12 6v3h1.348l-.635-2.37.966-.259.972 3.629H12v.446l-4 1.072-4-1.072V10H1.348l.973-3.629.965.259L2.651 9H4V6ZM6 9h4V8H6Z",
      ],
    },
  },
} as const;
