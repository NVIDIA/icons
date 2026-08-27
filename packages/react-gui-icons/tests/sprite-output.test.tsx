// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";

import { JSDOM } from "jsdom";
import {
  createElement,
  type ElementType,
  Fragment,
  type ReactElement,
  type SVGProps,
} from "react";
import { inlineMap } from "../src/generated/inlineMap.js";
import * as Icons from "../src/icons/index.js";
import {
  getNvidiaGuiIconSpriteSymbol,
  getNvidiaGuiIconSpriteSymbols,
  type IconSpriteSymbol,
  NvidiaGuiIcon,
  NvidiaGuiIconSprite,
  type NvidiaGuiIconSpriteSymbolSource,
} from "../src/index.js";
import { ensureSpriteSymbol } from "../src/runtime/useSpriteSymbol.js";
import type { IconName, Variant } from "../src/types.js";

const VARIANTS = ["line", "fill"] as const satisfies readonly Variant[];
const SPRITE_ROOT_ID = "nvidia-react-gui-icons-v1-sprite";

type IconComponentProps = SVGProps<SVGSVGElement> & {
  readonly variant?: Variant;
  readonly size?: string;
};

type IconFixture = {
  readonly iconName: IconName;
  readonly componentName: string;
  readonly Component: ElementType<IconComponentProps>;
};

const ICONS = [
  {
    iconName: "2b-left-click",
    componentName: "Icon2BLeftClick",
    Component: Icons.Icon2BLeftClick,
  },
  {
    iconName: "3-square-plus",
    componentName: "Icon3SquarePlus",
    Component: Icons.Icon3SquarePlus,
  },
  {
    iconName: "3d-axis",
    componentName: "Icon3DAxis",
    Component: Icons.Icon3DAxis,
  },
  {
    iconName: "4-square",
    componentName: "Icon4Square",
    Component: Icons.Icon4Square,
  },
  {
    iconName: "accessibility",
    componentName: "Accessibility",
    Component: Icons.Accessibility,
  },
  {
    iconName: "account-add",
    componentName: "AccountAdd",
    Component: Icons.AccountAdd,
  },
  {
    iconName: "account-check",
    componentName: "AccountCheck",
    Component: Icons.AccountCheck,
  },
  {
    iconName: "account-more",
    componentName: "AccountMore",
    Component: Icons.AccountMore,
  },
  {
    iconName: "account-remove",
    componentName: "AccountRemove",
    Component: Icons.AccountRemove,
  },
  { iconName: "add", componentName: "Add", Component: Icons.Add },
  {
    iconName: "add-circle",
    componentName: "AddCircle",
    Component: Icons.AddCircle,
  },
  {
    iconName: "address-book",
    componentName: "AddressBook",
    Component: Icons.AddressBook,
  },
  {
    iconName: "airplane",
    componentName: "Airplane",
    Component: Icons.Airplane,
  },
  { iconName: "airport", componentName: "Airport", Component: Icons.Airport },
  { iconName: "alarm", componentName: "Alarm", Component: Icons.Alarm },
  { iconName: "anchor", componentName: "Anchor", Component: Icons.Anchor },
  {
    iconName: "anchor-center",
    componentName: "AnchorCenter",
    Component: Icons.AnchorCenter,
  },
  { iconName: "anchor-e", componentName: "AnchorE", Component: Icons.AnchorE },
  { iconName: "anchor-n", componentName: "AnchorN", Component: Icons.AnchorN },
  {
    iconName: "anchor-ne",
    componentName: "AnchorNe",
    Component: Icons.AnchorNe,
  },
  {
    iconName: "anchor-nw",
    componentName: "AnchorNw",
    Component: Icons.AnchorNw,
  },
  { iconName: "anchor-s", componentName: "AnchorS", Component: Icons.AnchorS },
  {
    iconName: "anchor-se",
    componentName: "AnchorSe",
    Component: Icons.AnchorSe,
  },
  {
    iconName: "anchor-sw",
    componentName: "AnchorSw",
    Component: Icons.AnchorSw,
  },
  { iconName: "anchor-w", componentName: "AnchorW", Component: Icons.AnchorW },
  {
    iconName: "approximately",
    componentName: "Approximately",
    Component: Icons.Approximately,
  },
  { iconName: "apps", componentName: "Apps", Component: Icons.Apps },
  { iconName: "archive", componentName: "Archive", Component: Icons.Archive },
  {
    iconName: "arrange-columns",
    componentName: "ArrangeColumns",
    Component: Icons.ArrangeColumns,
  },
  {
    iconName: "arrange-rows",
    componentName: "ArrangeRows",
    Component: Icons.ArrangeRows,
  },
  { iconName: "arrow", componentName: "Arrow", Component: Icons.Arrow },
  {
    iconName: "arrow-down",
    componentName: "ArrowDown",
    Component: Icons.ArrowDown,
  },
  {
    iconName: "arrow-down-left",
    componentName: "ArrowDownLeft",
    Component: Icons.ArrowDownLeft,
  },
  {
    iconName: "arrow-down-max",
    componentName: "ArrowDownMax",
    Component: Icons.ArrowDownMax,
  },
  {
    iconName: "arrow-down-right",
    componentName: "ArrowDownRight",
    Component: Icons.ArrowDownRight,
  },
  {
    iconName: "arrow-left",
    componentName: "ArrowLeft",
    Component: Icons.ArrowLeft,
  },
  {
    iconName: "arrow-left-max",
    componentName: "ArrowLeftMax",
    Component: Icons.ArrowLeftMax,
  },
  {
    iconName: "arrow-left-right",
    componentName: "ArrowLeftRight",
    Component: Icons.ArrowLeftRight,
  },
  {
    iconName: "arrow-right",
    componentName: "ArrowRight",
    Component: Icons.ArrowRight,
  },
  {
    iconName: "arrow-right-max",
    componentName: "ArrowRightMax",
    Component: Icons.ArrowRightMax,
  },
  { iconName: "arrow-up", componentName: "ArrowUp", Component: Icons.ArrowUp },
  {
    iconName: "arrow-up-down",
    componentName: "ArrowUpDown",
    Component: Icons.ArrowUpDown,
  },
  {
    iconName: "arrow-up-left",
    componentName: "ArrowUpLeft",
    Component: Icons.ArrowUpLeft,
  },
  {
    iconName: "arrow-up-max",
    componentName: "ArrowUpMax",
    Component: Icons.ArrowUpMax,
  },
  {
    iconName: "arrow-up-right",
    componentName: "ArrowUpRight",
    Component: Icons.ArrowUpRight,
  },
  {
    iconName: "at-symbol",
    componentName: "AtSymbol",
    Component: Icons.AtSymbol,
  },
  { iconName: "atom", componentName: "Atom", Component: Icons.Atom },
  {
    iconName: "auto-record",
    componentName: "AutoRecord",
    Component: Icons.AutoRecord,
  },
  {
    iconName: "auto-record-off",
    componentName: "AutoRecordOff",
    Component: Icons.AutoRecordOff,
  },
  {
    iconName: "award-ribbon",
    componentName: "AwardRibbon",
    Component: Icons.AwardRibbon,
  },
  {
    iconName: "award-trophy",
    componentName: "AwardTrophy",
    Component: Icons.AwardTrophy,
  },
  { iconName: "baby", componentName: "Baby", Component: Icons.Baby },
  {
    iconName: "backspace",
    componentName: "Backspace",
    Component: Icons.Backspace,
  },
  { iconName: "bandaid", componentName: "Bandaid", Component: Icons.Bandaid },
  { iconName: "bank", componentName: "Bank", Component: Icons.Bank },
  { iconName: "barcode", componentName: "Barcode", Component: Icons.Barcode },
  {
    iconName: "battery-0",
    componentName: "Battery0",
    Component: Icons.Battery0,
  },
  {
    iconName: "battery-0-off",
    componentName: "Battery0Off",
    Component: Icons.Battery0Off,
  },
  {
    iconName: "battery-100",
    componentName: "Battery100",
    Component: Icons.Battery100,
  },
  {
    iconName: "battery-25",
    componentName: "Battery25",
    Component: Icons.Battery25,
  },
  {
    iconName: "battery-50",
    componentName: "Battery50",
    Component: Icons.Battery50,
  },
  {
    iconName: "battery-75",
    componentName: "Battery75",
    Component: Icons.Battery75,
  },
  {
    iconName: "battery-boost",
    componentName: "BatteryBoost",
    Component: Icons.BatteryBoost,
  },
  {
    iconName: "battery-charging",
    componentName: "BatteryCharging",
    Component: Icons.BatteryCharging,
  },
  { iconName: "beaker", componentName: "Beaker", Component: Icons.Beaker },
  { iconName: "bed", componentName: "Bed", Component: Icons.Bed },
  { iconName: "bell", componentName: "Bell", Component: Icons.Bell },
  { iconName: "bell-off", componentName: "BellOff", Component: Icons.BellOff },
  { iconName: "bicycle", componentName: "Bicycle", Component: Icons.Bicycle },
  {
    iconName: "blackboard",
    componentName: "Blackboard",
    Component: Icons.Blackboard,
  },
  {
    iconName: "bluetooth",
    componentName: "Bluetooth",
    Component: Icons.Bluetooth,
  },
  {
    iconName: "bluetooth-off",
    componentName: "BluetoothOff",
    Component: Icons.BluetoothOff,
  },
  { iconName: "bold", componentName: "Bold", Component: Icons.Bold },
  { iconName: "bone", componentName: "Bone", Component: Icons.Bone },
  { iconName: "book", componentName: "Book", Component: Icons.Book },
  {
    iconName: "bookmark",
    componentName: "Bookmark",
    Component: Icons.Bookmark,
  },
  {
    iconName: "bookmark-off",
    componentName: "BookmarkOff",
    Component: Icons.BookmarkOff,
  },
  { iconName: "bottle", componentName: "Bottle", Component: Icons.Bottle },
  {
    iconName: "bounding-box",
    componentName: "BoundingBox",
    Component: Icons.BoundingBox,
  },
  { iconName: "braille", componentName: "Braille", Component: Icons.Braille },
  {
    iconName: "briefcase",
    componentName: "Briefcase",
    Component: Icons.Briefcase,
  },
  {
    iconName: "broadcast",
    componentName: "Broadcast",
    Component: Icons.Broadcast,
  },
  { iconName: "brush", componentName: "Brush", Component: Icons.Brush },
  { iconName: "bucket", componentName: "Bucket", Component: Icons.Bucket },
  { iconName: "bug", componentName: "Bug", Component: Icons.Bug },
  { iconName: "bug-off", componentName: "BugOff", Component: Icons.BugOff },
  { iconName: "bus", componentName: "Bus", Component: Icons.Bus },
  { iconName: "bush", componentName: "Bush", Component: Icons.Bush },
  {
    iconName: "business",
    componentName: "Business",
    Component: Icons.Business,
  },
  {
    iconName: "calculator",
    componentName: "Calculator",
    Component: Icons.Calculator,
  },
  {
    iconName: "calendar",
    componentName: "Calendar",
    Component: Icons.Calendar,
  },
  {
    iconName: "calendar-event",
    componentName: "CalendarEvent",
    Component: Icons.CalendarEvent,
  },
  { iconName: "camera", componentName: "Camera", Component: Icons.Camera },
  {
    iconName: "camera-360",
    componentName: "Camera360",
    Component: Icons.Camera360,
  },
  {
    iconName: "camera-add",
    componentName: "CameraAdd",
    Component: Icons.CameraAdd,
  },
  {
    iconName: "camera-linked",
    componentName: "CameraLinked",
    Component: Icons.CameraLinked,
  },
  {
    iconName: "camera-off",
    componentName: "CameraOff",
    Component: Icons.CameraOff,
  },
  {
    iconName: "camera-super",
    componentName: "CameraSuper",
    Component: Icons.CameraSuper,
  },
  { iconName: "cancel", componentName: "Cancel", Component: Icons.Cancel },
  { iconName: "car", componentName: "Car", Component: Icons.Car },
  { iconName: "cards", componentName: "Cards", Component: Icons.Cards },
  {
    iconName: "carousel-horizontal",
    componentName: "CarouselHorizontal",
    Component: Icons.CarouselHorizontal,
  },
  {
    iconName: "carousel-vertical",
    componentName: "CarouselVertical",
    Component: Icons.CarouselVertical,
  },
  { iconName: "castle", componentName: "Castle", Component: Icons.Castle },
  { iconName: "chart", componentName: "Chart", Component: Icons.Chart },
  {
    iconName: "chart-bar",
    componentName: "ChartBar",
    Component: Icons.ChartBar,
  },
  {
    iconName: "chart-bubble",
    componentName: "ChartBubble",
    Component: Icons.ChartBubble,
  },
  {
    iconName: "chart-flow",
    componentName: "ChartFlow",
    Component: Icons.ChartFlow,
  },
  {
    iconName: "chart-hierarchy",
    componentName: "ChartHierarchy",
    Component: Icons.ChartHierarchy,
  },
  {
    iconName: "chart-performance",
    componentName: "ChartPerformance",
    Component: Icons.ChartPerformance,
  },
  {
    iconName: "chart-pie",
    componentName: "ChartPie",
    Component: Icons.ChartPie,
  },
  {
    iconName: "chart-scatterplot",
    componentName: "ChartScatterplot",
    Component: Icons.ChartScatterplot,
  },
  {
    iconName: "chart-tree",
    componentName: "ChartTree",
    Component: Icons.ChartTree,
  },
  {
    iconName: "chat-message",
    componentName: "ChatMessage",
    Component: Icons.ChatMessage,
  },
  {
    iconName: "chat-multi",
    componentName: "ChatMulti",
    Component: Icons.ChatMulti,
  },
  { iconName: "chat-new", componentName: "ChatNew", Component: Icons.ChatNew },
  {
    iconName: "chat-single",
    componentName: "ChatSingle",
    Component: Icons.ChatSingle,
  },
  { iconName: "chatbot", componentName: "Chatbot", Component: Icons.Chatbot },
  { iconName: "check", componentName: "Check", Component: Icons.Check },
  {
    iconName: "check-circle",
    componentName: "CheckCircle",
    Component: Icons.CheckCircle,
  },
  {
    iconName: "check-multi-circle",
    componentName: "CheckMultiCircle",
    Component: Icons.CheckMultiCircle,
  },
  {
    iconName: "checkmark-badge",
    componentName: "CheckmarkBadge",
    Component: Icons.CheckmarkBadge,
  },
  {
    iconName: "chevron-double-down",
    componentName: "ChevronDoubleDown",
    Component: Icons.ChevronDoubleDown,
  },
  {
    iconName: "chevron-double-left",
    componentName: "ChevronDoubleLeft",
    Component: Icons.ChevronDoubleLeft,
  },
  {
    iconName: "chevron-double-right",
    componentName: "ChevronDoubleRight",
    Component: Icons.ChevronDoubleRight,
  },
  {
    iconName: "chevron-double-up",
    componentName: "ChevronDoubleUp",
    Component: Icons.ChevronDoubleUp,
  },
  {
    iconName: "chevron-down",
    componentName: "ChevronDown",
    Component: Icons.ChevronDown,
  },
  {
    iconName: "chevron-down-left-up-right",
    componentName: "ChevronDownLeftUpRight",
    Component: Icons.ChevronDownLeftUpRight,
  },
  {
    iconName: "chevron-left",
    componentName: "ChevronLeft",
    Component: Icons.ChevronLeft,
  },
  {
    iconName: "chevron-left-right",
    componentName: "ChevronLeftRight",
    Component: Icons.ChevronLeftRight,
  },
  {
    iconName: "chevron-right",
    componentName: "ChevronRight",
    Component: Icons.ChevronRight,
  },
  {
    iconName: "chevron-up",
    componentName: "ChevronUp",
    Component: Icons.ChevronUp,
  },
  {
    iconName: "chevron-up-down",
    componentName: "ChevronUpDown",
    Component: Icons.ChevronUpDown,
  },
  {
    iconName: "chevron-up-left-down-right",
    componentName: "ChevronUpLeftDownRight",
    Component: Icons.ChevronUpLeftDownRight,
  },
  {
    iconName: "circle-1-q",
    componentName: "Circle1Q",
    Component: Icons.Circle1Q,
  },
  {
    iconName: "circle-2-q",
    componentName: "Circle2Q",
    Component: Icons.Circle2Q,
  },
  {
    iconName: "circle-3-q",
    componentName: "Circle3Q",
    Component: Icons.Circle3Q,
  },
  {
    iconName: "circle-tick",
    componentName: "CircleTick",
    Component: Icons.CircleTick,
  },
  { iconName: "city", componentName: "City", Component: Icons.City },
  {
    iconName: "clap-board",
    componentName: "ClapBoard",
    Component: Icons.ClapBoard,
  },
  {
    iconName: "clipboard",
    componentName: "IconClipboard",
    Component: Icons.IconClipboard,
  },
  { iconName: "clock", componentName: "Clock", Component: Icons.Clock },
  { iconName: "close", componentName: "Close", Component: Icons.Close },
  {
    iconName: "close-circle",
    componentName: "CloseCircle",
    Component: Icons.CloseCircle,
  },
  {
    iconName: "closed-caption",
    componentName: "ClosedCaption",
    Component: Icons.ClosedCaption,
  },
  { iconName: "cloth", componentName: "Cloth", Component: Icons.Cloth },
  { iconName: "cloud", componentName: "Cloud", Component: Icons.Cloud },
  {
    iconName: "cloud-off",
    componentName: "CloudOff",
    Component: Icons.CloudOff,
  },
  { iconName: "coaxial", componentName: "Coaxial", Component: Icons.Coaxial },
  { iconName: "code", componentName: "Code", Component: Icons.Code },
  { iconName: "cog", componentName: "Cog", Component: Icons.Cog },
  { iconName: "cog-off", componentName: "CogOff", Component: Icons.CogOff },
  {
    iconName: "collapse",
    componentName: "Collapse",
    Component: Icons.Collapse,
  },
  {
    iconName: "collection",
    componentName: "Collection",
    Component: Icons.Collection,
  },
  { iconName: "commit", componentName: "Commit", Component: Icons.Commit },
  { iconName: "compass", componentName: "Compass", Component: Icons.Compass },
  {
    iconName: "component",
    componentName: "Component",
    Component: Icons.Component,
  },
  {
    iconName: "concierge",
    componentName: "Concierge",
    Component: Icons.Concierge,
  },
  {
    iconName: "connection",
    componentName: "Connection",
    Component: Icons.Connection,
  },
  { iconName: "copy-doc", componentName: "CopyDoc", Component: Icons.CopyDoc },
  {
    iconName: "copy-generic",
    componentName: "CopyGeneric",
    Component: Icons.CopyGeneric,
  },
  { iconName: "cpu", componentName: "Cpu", Component: Icons.Cpu },
  {
    iconName: "craft-knife",
    componentName: "CraftKnife",
    Component: Icons.CraftKnife,
  },
  { iconName: "crop", componentName: "Crop", Component: Icons.Crop },
  {
    iconName: "crosshair",
    componentName: "Crosshair",
    Component: Icons.Crosshair,
  },
  { iconName: "crown", componentName: "Crown", Component: Icons.Crown },
  { iconName: "cube", componentName: "Cube", Component: Icons.Cube },
  {
    iconName: "cube-stack",
    componentName: "CubeStack",
    Component: Icons.CubeStack,
  },
  { iconName: "data", componentName: "Data", Component: Icons.Data },
  {
    iconName: "datacenter",
    componentName: "Datacenter",
    Component: Icons.Datacenter,
  },
  { iconName: "db", componentName: "Db", Component: Icons.Db },
  {
    iconName: "delivery-truck",
    componentName: "DeliveryTruck",
    Component: Icons.DeliveryTruck,
  },
  { iconName: "denoise", componentName: "Denoise", Component: Icons.Denoise },
  { iconName: "diamond", componentName: "Diamond", Component: Icons.Diamond },
  {
    iconName: "diamond-off",
    componentName: "DiamondOff",
    Component: Icons.DiamondOff,
  },
  { iconName: "die-1", componentName: "Die1", Component: Icons.Die1 },
  { iconName: "die-2", componentName: "Die2", Component: Icons.Die2 },
  { iconName: "die-3", componentName: "Die3", Component: Icons.Die3 },
  { iconName: "die-4", componentName: "Die4", Component: Icons.Die4 },
  { iconName: "die-5", componentName: "Die5", Component: Icons.Die5 },
  { iconName: "die-6", componentName: "Die6", Component: Icons.Die6 },
  { iconName: "dirt", componentName: "Dirt", Component: Icons.Dirt },
  { iconName: "display", componentName: "Display", Component: Icons.Display },
  {
    iconName: "display-collection",
    componentName: "DisplayCollection",
    Component: Icons.DisplayCollection,
  },
  {
    iconName: "display-column",
    componentName: "DisplayColumn",
    Component: Icons.DisplayColumn,
  },
  {
    iconName: "display-off",
    componentName: "DisplayOff",
    Component: Icons.DisplayOff,
  },
  {
    iconName: "display-row",
    componentName: "DisplayRow",
    Component: Icons.DisplayRow,
  },
  {
    iconName: "display-share",
    componentName: "DisplayShare",
    Component: Icons.DisplayShare,
  },
  {
    iconName: "display-surround",
    componentName: "DisplaySurround",
    Component: Icons.DisplaySurround,
  },
  {
    iconName: "displayport",
    componentName: "Displayport",
    Component: Icons.Displayport,
  },
  { iconName: "divide", componentName: "Divide", Component: Icons.Divide },
  {
    iconName: "document",
    componentName: "IconDocument",
    Component: Icons.IconDocument,
  },
  {
    iconName: "document-checkmark",
    componentName: "DocumentCheckmark",
    Component: Icons.DocumentCheckmark,
  },
  {
    iconName: "document-new",
    componentName: "DocumentNew",
    Component: Icons.DocumentNew,
  },
  {
    iconName: "document-preview",
    componentName: "DocumentPreview",
    Component: Icons.DocumentPreview,
  },
  { iconName: "dolly", componentName: "Dolly", Component: Icons.Dolly },
  {
    iconName: "download",
    componentName: "Download",
    Component: Icons.Download,
  },
  {
    iconName: "drive-cloud",
    componentName: "DriveCloud",
    Component: Icons.DriveCloud,
  },
  {
    iconName: "drive-cloud-off",
    componentName: "DriveCloudOff",
    Component: Icons.DriveCloudOff,
  },
  {
    iconName: "drive-network",
    componentName: "DriveNetwork",
    Component: Icons.DriveNetwork,
  },
  {
    iconName: "drive-network-off",
    componentName: "DriveNetworkOff",
    Component: Icons.DriveNetworkOff,
  },
  {
    iconName: "drive-removable",
    componentName: "DriveRemovable",
    Component: Icons.DriveRemovable,
  },
  {
    iconName: "drive-removable-off",
    componentName: "DriveRemovableOff",
    Component: Icons.DriveRemovableOff,
  },
  {
    iconName: "drive-usb",
    componentName: "DriveUsb",
    Component: Icons.DriveUsb,
  },
  {
    iconName: "drive-usb-off",
    componentName: "DriveUsbOff",
    Component: Icons.DriveUsbOff,
  },
  { iconName: "drone", componentName: "Drone", Component: Icons.Drone },
  { iconName: "dual", componentName: "Dual", Component: Icons.Dual },
  { iconName: "dvi", componentName: "Dvi", Component: Icons.Dvi },
  { iconName: "easel", componentName: "Easel", Component: Icons.Easel },
  { iconName: "eject", componentName: "Eject", Component: Icons.Eject },
  { iconName: "ekg", componentName: "Ekg", Component: Icons.Ekg },
  {
    iconName: "elevator",
    componentName: "Elevator",
    Component: Icons.Elevator,
  },
  {
    iconName: "emergency",
    componentName: "Emergency",
    Component: Icons.Emergency,
  },
  {
    iconName: "emissive",
    componentName: "Emissive",
    Component: Icons.Emissive,
  },
  { iconName: "engine", componentName: "Engine", Component: Icons.Engine },
  { iconName: "enter", componentName: "Enter", Component: Icons.Enter },
  {
    iconName: "envelope",
    componentName: "Envelope",
    Component: Icons.Envelope,
  },
  {
    iconName: "envelope-off",
    componentName: "EnvelopeOff",
    Component: Icons.EnvelopeOff,
  },
  { iconName: "equal", componentName: "Equal", Component: Icons.Equal },
  {
    iconName: "equalizer",
    componentName: "Equalizer",
    Component: Icons.Equalizer,
  },
  { iconName: "eraser", componentName: "Eraser", Component: Icons.Eraser },
  { iconName: "error", componentName: "IconError", Component: Icons.IconError },
  {
    iconName: "escalator",
    componentName: "Escalator",
    Component: Icons.Escalator,
  },
  {
    iconName: "ethernet",
    componentName: "Ethernet",
    Component: Icons.Ethernet,
  },
  {
    iconName: "ethernet-port",
    componentName: "EthernetPort",
    Component: Icons.EthernetPort,
  },
  { iconName: "exit", componentName: "Exit", Component: Icons.Exit },
  { iconName: "expand", componentName: "Expand", Component: Icons.Expand },
  { iconName: "explode", componentName: "Explode", Component: Icons.Explode },
  { iconName: "export", componentName: "Export", Component: Icons.Export },
  {
    iconName: "export-from-clipboard",
    componentName: "ExportFromClipboard",
    Component: Icons.ExportFromClipboard,
  },
  {
    iconName: "export-to-clipboard",
    componentName: "ExportToClipboard",
    Component: Icons.ExportToClipboard,
  },
  { iconName: "eye", componentName: "Eye", Component: Icons.Eye },
  { iconName: "eye-off", componentName: "EyeOff", Component: Icons.EyeOff },
  {
    iconName: "eyedropper",
    componentName: "Eyedropper",
    Component: Icons.Eyedropper,
  },
  {
    iconName: "facial-recognition",
    componentName: "FacialRecognition",
    Component: Icons.FacialRecognition,
  },
  { iconName: "factory", componentName: "Factory", Component: Icons.Factory },
  { iconName: "faders", componentName: "Faders", Component: Icons.Faders },
  { iconName: "family", componentName: "Family", Component: Icons.Family },
  { iconName: "fan", componentName: "Fan", Component: Icons.Fan },
  { iconName: "fan-loud", componentName: "FanLoud", Component: Icons.FanLoud },
  {
    iconName: "fan-quiet",
    componentName: "FanQuiet",
    Component: Icons.FanQuiet,
  },
  { iconName: "farm", componentName: "Farm", Component: Icons.Farm },
  {
    iconName: "fast-forward",
    componentName: "FastForward",
    Component: Icons.FastForward,
  },
  {
    iconName: "fast-reverse",
    componentName: "FastReverse",
    Component: Icons.FastReverse,
  },
  {
    iconName: "feedback",
    componentName: "Feedback",
    Component: Icons.Feedback,
  },
  {
    iconName: "feeling-happy",
    componentName: "FeelingHappy",
    Component: Icons.FeelingHappy,
  },
  {
    iconName: "feeling-neutral",
    componentName: "FeelingNeutral",
    Component: Icons.FeelingNeutral,
  },
  {
    iconName: "feeling-sad",
    componentName: "FeelingSad",
    Component: Icons.FeelingSad,
  },
  {
    iconName: "feeling-very-happy",
    componentName: "FeelingVeryHappy",
    Component: Icons.FeelingVeryHappy,
  },
  {
    iconName: "feeling-very-sad",
    componentName: "FeelingVerySad",
    Component: Icons.FeelingVerySad,
  },
  {
    iconName: "file-reel",
    componentName: "FileReel",
    Component: Icons.FileReel,
  },
  { iconName: "film", componentName: "Film", Component: Icons.Film },
  { iconName: "film-add", componentName: "FilmAdd", Component: Icons.FilmAdd },
  {
    iconName: "film-collection",
    componentName: "FilmCollection",
    Component: Icons.FilmCollection,
  },
  { iconName: "filter", componentName: "Filter", Component: Icons.Filter },
  {
    iconName: "fingerprint",
    componentName: "Fingerprint",
    Component: Icons.Fingerprint,
  },
  { iconName: "fire", componentName: "Fire", Component: Icons.Fire },
  {
    iconName: "firecracker",
    componentName: "Firecracker",
    Component: Icons.Firecracker,
  },
  {
    iconName: "firewall",
    componentName: "Firewall",
    Component: Icons.Firewall,
  },
  {
    iconName: "firewall-off",
    componentName: "FirewallOff",
    Component: Icons.FirewallOff,
  },
  {
    iconName: "firework",
    componentName: "Firework",
    Component: Icons.Firework,
  },
  { iconName: "fit", componentName: "Fit", Component: Icons.Fit },
  {
    iconName: "fit-to-page",
    componentName: "FitToPage",
    Component: Icons.FitToPage,
  },
  { iconName: "flag", componentName: "Flag", Component: Icons.Flag },
  {
    iconName: "flight-stick",
    componentName: "FlightStick",
    Component: Icons.FlightStick,
  },
  { iconName: "floppy", componentName: "Floppy", Component: Icons.Floppy },
  { iconName: "flower", componentName: "Flower", Component: Icons.Flower },
  { iconName: "fog", componentName: "Fog", Component: Icons.Fog },
  {
    iconName: "folder-closed",
    componentName: "FolderClosed",
    Component: Icons.FolderClosed,
  },
  {
    iconName: "folder-open",
    componentName: "FolderOpen",
    Component: Icons.FolderOpen,
  },
  { iconName: "food", componentName: "Food", Component: Icons.Food },
  {
    iconName: "footprint",
    componentName: "Footprint",
    Component: Icons.Footprint,
  },
  { iconName: "fork", componentName: "Fork", Component: Icons.Fork },
  { iconName: "forward", componentName: "Forward", Component: Icons.Forward },
  {
    iconName: "forward-10",
    componentName: "Forward10",
    Component: Icons.Forward10,
  },
  {
    iconName: "founders",
    componentName: "Founders",
    Component: Icons.Founders,
  },
  {
    iconName: "founders-tier-1",
    componentName: "FoundersTier1",
    Component: Icons.FoundersTier1,
  },
  {
    iconName: "founders-tier-2",
    componentName: "FoundersTier2",
    Component: Icons.FoundersTier2,
  },
  {
    iconName: "founders-tier-3",
    componentName: "FoundersTier3",
    Component: Icons.FoundersTier3,
  },
  { iconName: "fps", componentName: "Fps", Component: Icons.Fps },
  {
    iconName: "freehand",
    componentName: "Freehand",
    Component: Icons.Freehand,
  },
  { iconName: "fuel-can", componentName: "FuelCan", Component: Icons.FuelCan },
  {
    iconName: "fuel-pump",
    componentName: "FuelPump",
    Component: Icons.FuelPump,
  },
  {
    iconName: "fullscreen",
    componentName: "Fullscreen",
    Component: Icons.Fullscreen,
  },
  {
    iconName: "fullscreen-exit",
    componentName: "FullscreenExit",
    Component: Icons.FullscreenExit,
  },
  {
    iconName: "function",
    componentName: "IconFunction",
    Component: Icons.IconFunction,
  },
  {
    iconName: "gallery-strip",
    componentName: "GalleryStrip",
    Component: Icons.GalleryStrip,
  },
  { iconName: "gamepad", componentName: "Gamepad", Component: Icons.Gamepad },
  {
    iconName: "gamepad-off",
    componentName: "GamepadOff",
    Component: Icons.GamepadOff,
  },
  {
    iconName: "gamepad-start",
    componentName: "GamepadStart",
    Component: Icons.GamepadStart,
  },
  {
    iconName: "generate",
    componentName: "Generate",
    Component: Icons.Generate,
  },
  { iconName: "gift", componentName: "Gift", Component: Icons.Gift },
  {
    iconName: "government",
    componentName: "Government",
    Component: Icons.Government,
  },
  { iconName: "gpu", componentName: "Gpu", Component: Icons.Gpu },
  { iconName: "gpu-card", componentName: "GpuCard", Component: Icons.GpuCard },
  {
    iconName: "gpu-card-multi",
    componentName: "GpuCardMulti",
    Component: Icons.GpuCardMulti,
  },
  {
    iconName: "gpu-card-off",
    componentName: "GpuCardOff",
    Component: Icons.GpuCardOff,
  },
  { iconName: "gpu-off", componentName: "GpuOff", Component: Icons.GpuOff },
  { iconName: "gpu-sync", componentName: "GpuSync", Component: Icons.GpuSync },
  {
    iconName: "graduate",
    componentName: "Graduate",
    Component: Icons.Graduate,
  },
  {
    iconName: "graph-node",
    componentName: "GraphNode",
    Component: Icons.GraphNode,
  },
  {
    iconName: "graph-node-connect",
    componentName: "GraphNodeConnect",
    Component: Icons.GraphNodeConnect,
  },
  {
    iconName: "graph-node-delete",
    componentName: "GraphNodeDelete",
    Component: Icons.GraphNodeDelete,
  },
  { iconName: "grass", componentName: "Grass", Component: Icons.Grass },
  { iconName: "gravel", componentName: "Gravel", Component: Icons.Gravel },
  { iconName: "grid", componentName: "Grid", Component: Icons.Grid },
  { iconName: "grid-off", componentName: "GridOff", Component: Icons.GridOff },
  {
    iconName: "grip-area",
    componentName: "GripArea",
    Component: Icons.GripArea,
  },
  {
    iconName: "grip-corner",
    componentName: "GripCorner",
    Component: Icons.GripCorner,
  },
  {
    iconName: "grip-edge-horizontal",
    componentName: "GripEdgeHorizontal",
    Component: Icons.GripEdgeHorizontal,
  },
  {
    iconName: "grip-edge-vertical",
    componentName: "GripEdgeVertical",
    Component: Icons.GripEdgeVertical,
  },
  {
    iconName: "grip-mini",
    componentName: "GripMini",
    Component: Icons.GripMini,
  },
  { iconName: "group", componentName: "Group", Component: Icons.Group },
  {
    iconName: "h-align-center",
    componentName: "HAlignCenter",
    Component: Icons.HAlignCenter,
  },
  {
    iconName: "h-align-left",
    componentName: "HAlignLeft",
    Component: Icons.HAlignLeft,
  },
  {
    iconName: "h-align-right",
    componentName: "HAlignRight",
    Component: Icons.HAlignRight,
  },
  {
    iconName: "hand-closed",
    componentName: "HandClosed",
    Component: Icons.HandClosed,
  },
  {
    iconName: "hand-open",
    componentName: "HandOpen",
    Component: Icons.HandOpen,
  },
  {
    iconName: "hand-pinch",
    componentName: "HandPinch",
    Component: Icons.HandPinch,
  },
  {
    iconName: "hand-point",
    componentName: "HandPoint",
    Component: Icons.HandPoint,
  },
  { iconName: "hdmi", componentName: "Hdmi", Component: Icons.Hdmi },
  { iconName: "head", componentName: "Head", Component: Icons.Head },
  { iconName: "header", componentName: "Header", Component: Icons.Header },
  { iconName: "headset", componentName: "Headset", Component: Icons.Headset },
  { iconName: "health", componentName: "Health", Component: Icons.Health },
  { iconName: "heart", componentName: "Heart", Component: Icons.Heart },
  {
    iconName: "heart-off",
    componentName: "HeartOff",
    Component: Icons.HeartOff,
  },
  {
    iconName: "helicopter",
    componentName: "Helicopter",
    Component: Icons.Helicopter,
  },
  {
    iconName: "help-circle",
    componentName: "HelpCircle",
    Component: Icons.HelpCircle,
  },
  {
    iconName: "high-kick",
    componentName: "HighKick",
    Component: Icons.HighKick,
  },
  {
    iconName: "high-quality",
    componentName: "HighQuality",
    Component: Icons.HighQuality,
  },
  {
    iconName: "highlighter",
    componentName: "Highlighter",
    Component: Icons.Highlighter,
  },
  { iconName: "hill", componentName: "Hill", Component: Icons.Hill },
  {
    iconName: "history",
    componentName: "IconHistory",
    Component: Icons.IconHistory,
  },
  { iconName: "hit", componentName: "Hit", Component: Icons.Hit },
  { iconName: "home", componentName: "Home", Component: Icons.Home },
  { iconName: "home-off", componentName: "HomeOff", Component: Icons.HomeOff },
  {
    iconName: "hot-air-balloon",
    componentName: "HotAirBalloon",
    Component: Icons.HotAirBalloon,
  },
  {
    iconName: "hourglass",
    componentName: "Hourglass",
    Component: Icons.Hourglass,
  },
  {
    iconName: "hourglass-end",
    componentName: "HourglassEnd",
    Component: Icons.HourglassEnd,
  },
  {
    iconName: "hourglass-mid",
    componentName: "HourglassMid",
    Component: Icons.HourglassMid,
  },
  {
    iconName: "hourglass-start",
    componentName: "HourglassStart",
    Component: Icons.HourglassStart,
  },
  { iconName: "hud", componentName: "Hud", Component: Icons.Hud },
  { iconName: "hydrant", componentName: "Hydrant", Component: Icons.Hydrant },
  {
    iconName: "identification",
    componentName: "Identification",
    Component: Icons.Identification,
  },
  { iconName: "image", componentName: "IconImage", Component: Icons.IconImage },
  { iconName: "ime", componentName: "Ime", Component: Icons.Ime },
  { iconName: "import", componentName: "Import", Component: Icons.Import },
  {
    iconName: "import-image",
    componentName: "ImportImage",
    Component: Icons.ImportImage,
  },
  { iconName: "inbox", componentName: "Inbox", Component: Icons.Inbox },
  {
    iconName: "infinity",
    componentName: "IconInfinity",
    Component: Icons.IconInfinity,
  },
  {
    iconName: "info-circle",
    componentName: "InfoCircle",
    Component: Icons.InfoCircle,
  },
  {
    iconName: "instance",
    componentName: "Instance",
    Component: Icons.Instance,
  },
  { iconName: "isp", componentName: "Isp", Component: Icons.Isp },
  { iconName: "isp-off", componentName: "IspOff", Component: Icons.IspOff },
  { iconName: "italic", componentName: "Italic", Component: Icons.Italic },
  { iconName: "iterate", componentName: "Iterate", Component: Icons.Iterate },
  {
    iconName: "joystick-classic",
    componentName: "JoystickClassic",
    Component: Icons.JoystickClassic,
  },
  { iconName: "key", componentName: "Key", Component: Icons.Key },
  {
    iconName: "keyboard",
    componentName: "IconKeyboard",
    Component: Icons.IconKeyboard,
  },
  {
    iconName: "keyframe",
    componentName: "Keyframe",
    Component: Icons.Keyframe,
  },
  { iconName: "knife", componentName: "Knife", Component: Icons.Knife },
  { iconName: "lamp", componentName: "Lamp", Component: Icons.Lamp },
  { iconName: "laptop", componentName: "Laptop", Component: Icons.Laptop },
  { iconName: "laser", componentName: "Laser", Component: Icons.Laser },
  { iconName: "lasso", componentName: "Lasso", Component: Icons.Lasso },
  { iconName: "layers", componentName: "Layers", Component: Icons.Layers },
  {
    iconName: "layers-off",
    componentName: "LayersOff",
    Component: Icons.LayersOff,
  },
  {
    iconName: "layout-columns",
    componentName: "LayoutColumns",
    Component: Icons.LayoutColumns,
  },
  {
    iconName: "layout-detail",
    componentName: "LayoutDetail",
    Component: Icons.LayoutDetail,
  },
  {
    iconName: "layout-grid",
    componentName: "LayoutGrid",
    Component: Icons.LayoutGrid,
  },
  {
    iconName: "layout-list",
    componentName: "LayoutList",
    Component: Icons.LayoutList,
  },
  {
    iconName: "layout-rows",
    componentName: "LayoutRows",
    Component: Icons.LayoutRows,
  },
  { iconName: "library", componentName: "Library", Component: Icons.Library },
  {
    iconName: "library-games",
    componentName: "LibraryGames",
    Component: Icons.LibraryGames,
  },
  { iconName: "license", componentName: "License", Component: Icons.License },
  {
    iconName: "lifebuoy",
    componentName: "Lifebuoy",
    Component: Icons.Lifebuoy,
  },
  {
    iconName: "light-rect",
    componentName: "LightRect",
    Component: Icons.LightRect,
  },
  {
    iconName: "light-rotate",
    componentName: "LightRotate",
    Component: Icons.LightRotate,
  },
  {
    iconName: "lightbulb",
    componentName: "Lightbulb",
    Component: Icons.Lightbulb,
  },
  {
    iconName: "lighthouse",
    componentName: "Lighthouse",
    Component: Icons.Lighthouse,
  },
  {
    iconName: "lightning",
    componentName: "Lightning",
    Component: Icons.Lightning,
  },
  {
    iconName: "line-segment",
    componentName: "LineSegment",
    Component: Icons.LineSegment,
  },
  { iconName: "link", componentName: "Link", Component: Icons.Link },
  {
    iconName: "link-break",
    componentName: "LinkBreak",
    Component: Icons.LinkBreak,
  },
  {
    iconName: "list-bullet",
    componentName: "ListBullet",
    Component: Icons.ListBullet,
  },
  {
    iconName: "list-checkmark",
    componentName: "ListCheckmark",
    Component: Icons.ListCheckmark,
  },
  {
    iconName: "list-number",
    componentName: "ListNumber",
    Component: Icons.ListNumber,
  },
  {
    iconName: "location",
    componentName: "IconLocation",
    Component: Icons.IconLocation,
  },
  {
    iconName: "location-off",
    componentName: "LocationOff",
    Component: Icons.LocationOff,
  },
  {
    iconName: "lock-closed",
    componentName: "LockClosed",
    Component: Icons.LockClosed,
  },
  {
    iconName: "lock-open",
    componentName: "LockOpen",
    Component: Icons.LockOpen,
  },
  { iconName: "loop", componentName: "Loop", Component: Icons.Loop },
  { iconName: "loop-off", componentName: "LoopOff", Component: Icons.LoopOff },
  { iconName: "mac", componentName: "Mac", Component: Icons.Mac },
  { iconName: "mac-off", componentName: "MacOff", Component: Icons.MacOff },
  { iconName: "magnet", componentName: "Magnet", Component: Icons.Magnet },
  {
    iconName: "magnifying-glass",
    componentName: "MagnifyingGlass",
    Component: Icons.MagnifyingGlass,
  },
  {
    iconName: "magnifying-glass-minus",
    componentName: "MagnifyingGlassMinus",
    Component: Icons.MagnifyingGlassMinus,
  },
  {
    iconName: "magnifying-glass-plus",
    componentName: "MagnifyingGlassPlus",
    Component: Icons.MagnifyingGlassPlus,
  },
  { iconName: "man", componentName: "Man", Component: Icons.Man },
  {
    iconName: "man-woman",
    componentName: "ManWoman",
    Component: Icons.ManWoman,
  },
  { iconName: "map", componentName: "IconMap", Component: Icons.IconMap },
  { iconName: "map-off", componentName: "MapOff", Component: Icons.MapOff },
  { iconName: "mapping", componentName: "Mapping", Component: Icons.Mapping },
  {
    iconName: "markdown",
    componentName: "Markdown",
    Component: Icons.Markdown,
  },
  { iconName: "martini", componentName: "Martini", Component: Icons.Martini },
  {
    iconName: "mask-inside",
    componentName: "MaskInside",
    Component: Icons.MaskInside,
  },
  {
    iconName: "mask-outside",
    componentName: "MaskOutside",
    Component: Icons.MaskOutside,
  },
  {
    iconName: "material",
    componentName: "Material",
    Component: Icons.Material,
  },
  { iconName: "math", componentName: "IconMath", Component: Icons.IconMath },
  { iconName: "meal", componentName: "Meal", Component: Icons.Meal },
  {
    iconName: "media-optical",
    componentName: "MediaOptical",
    Component: Icons.MediaOptical,
  },
  {
    iconName: "medicine",
    componentName: "Medicine",
    Component: Icons.Medicine,
  },
  {
    iconName: "megaphone",
    componentName: "Megaphone",
    Component: Icons.Megaphone,
  },
  { iconName: "menu", componentName: "Menu", Component: Icons.Menu },
  {
    iconName: "microphone",
    componentName: "Microphone",
    Component: Icons.Microphone,
  },
  {
    iconName: "microphone-off",
    componentName: "MicrophoneOff",
    Component: Icons.MicrophoneOff,
  },
  {
    iconName: "microscope",
    componentName: "Microscope",
    Component: Icons.Microscope,
  },
  {
    iconName: "mini-displayport",
    componentName: "MiniDisplayport",
    Component: Icons.MiniDisplayport,
  },
  {
    iconName: "mirror-horizontal",
    componentName: "MirrorHorizontal",
    Component: Icons.MirrorHorizontal,
  },
  {
    iconName: "mirror-vertical",
    componentName: "MirrorVertical",
    Component: Icons.MirrorVertical,
  },
  {
    iconName: "mode-component",
    componentName: "ModeComponent",
    Component: Icons.ModeComponent,
  },
  { iconName: "money", componentName: "Money", Component: Icons.Money },
  {
    iconName: "money-coin",
    componentName: "MoneyCoin",
    Component: Icons.MoneyCoin,
  },
  {
    iconName: "money-paper",
    componentName: "MoneyPaper",
    Component: Icons.MoneyPaper,
  },
  { iconName: "moon", componentName: "Moon", Component: Icons.Moon },
  { iconName: "moon-off", componentName: "MoonOff", Component: Icons.MoonOff },
  {
    iconName: "more-horiz",
    componentName: "MoreHoriz",
    Component: Icons.MoreHoriz,
  },
  {
    iconName: "more-vert",
    componentName: "MoreVert",
    Component: Icons.MoreVert,
  },
  { iconName: "mosaic", componentName: "Mosaic", Component: Icons.Mosaic },
  {
    iconName: "mountain",
    componentName: "Mountain",
    Component: Icons.Mountain,
  },
  { iconName: "mouse-2b", componentName: "Mouse2B", Component: Icons.Mouse2B },
  {
    iconName: "mouse-2b-right-click",
    componentName: "Mouse2BRightClick",
    Component: Icons.Mouse2BRightClick,
  },
  { iconName: "mouse-3-b", componentName: "Mouse3B", Component: Icons.Mouse3B },
  {
    iconName: "mouse-scrollwheel",
    componentName: "MouseScrollwheel",
    Component: Icons.MouseScrollwheel,
  },
  {
    iconName: "mouse-scrollwheel-active",
    componentName: "MouseScrollwheelActive",
    Component: Icons.MouseScrollwheelActive,
  },
  { iconName: "move", componentName: "Move", Component: Icons.Move },
  {
    iconName: "move-global",
    componentName: "MoveGlobal",
    Component: Icons.MoveGlobal,
  },
  { iconName: "mud", componentName: "Mud", Component: Icons.Mud },
  { iconName: "mug", componentName: "Mug", Component: Icons.Mug },
  { iconName: "mug-beer", componentName: "MugBeer", Component: Icons.MugBeer },
  {
    iconName: "multidrive",
    componentName: "Multidrive",
    Component: Icons.Multidrive,
  },
  { iconName: "network", componentName: "Network", Component: Icons.Network },
  {
    iconName: "network-connection",
    componentName: "NetworkConnection",
    Component: Icons.NetworkConnection,
  },
  {
    iconName: "network-pcs",
    componentName: "NetworkPcs",
    Component: Icons.NetworkPcs,
  },
  {
    iconName: "network-signal",
    componentName: "NetworkSignal",
    Component: Icons.NetworkSignal,
  },
  {
    iconName: "network-signal-off",
    componentName: "NetworkSignalOff",
    Component: Icons.NetworkSignalOff,
  },
  {
    iconName: "neural-network",
    componentName: "NeuralNetwork",
    Component: Icons.NeuralNetwork,
  },
  { iconName: "news", componentName: "News", Component: Icons.News },
  { iconName: "next", componentName: "Next", Component: Icons.Next },
  {
    iconName: "not-equal",
    componentName: "NotEqual",
    Component: Icons.NotEqual,
  },
  { iconName: "notes", componentName: "Notes", Component: Icons.Notes },
  { iconName: "numbers", componentName: "Numbers", Component: Icons.Numbers },
  {
    iconName: "nvidia-shield",
    componentName: "NvidiaShield",
    Component: Icons.NvidiaShield,
  },
  {
    iconName: "nvidia-shield-stand",
    componentName: "NvidiaShieldStand",
    Component: Icons.NvidiaShieldStand,
  },
  {
    iconName: "open-external",
    componentName: "OpenExternal",
    Component: Icons.OpenExternal,
  },
  { iconName: "os", componentName: "Os", Component: Icons.Os },
  { iconName: "outbox", componentName: "Outbox", Component: Icons.Outbox },
  { iconName: "outlet-a", componentName: "OutletA", Component: Icons.OutletA },
  { iconName: "outlet-b", componentName: "OutletB", Component: Icons.OutletB },
  { iconName: "outlet-c", componentName: "OutletC", Component: Icons.OutletC },
  { iconName: "outlet-e", componentName: "OutletE", Component: Icons.OutletE },
  { iconName: "outlet-g", componentName: "OutletG", Component: Icons.OutletG },
  { iconName: "outlet-h", componentName: "OutletH", Component: Icons.OutletH },
  { iconName: "outlet-i", componentName: "OutletI", Component: Icons.OutletI },
  { iconName: "outlet-j", componentName: "OutletJ", Component: Icons.OutletJ },
  { iconName: "outlet-k", componentName: "OutletK", Component: Icons.OutletK },
  { iconName: "outlet-l", componentName: "OutletL", Component: Icons.OutletL },
  {
    iconName: "outpainting",
    componentName: "Outpainting",
    Component: Icons.Outpainting,
  },
  { iconName: "package", componentName: "Package", Component: Icons.Package },
  { iconName: "palette", componentName: "Palette", Component: Icons.Palette },
  {
    iconName: "paperclip",
    componentName: "Paperclip",
    Component: Icons.Paperclip,
  },
  {
    iconName: "paperplane",
    componentName: "Paperplane",
    Component: Icons.Paperplane,
  },
  {
    iconName: "paragraph",
    componentName: "Paragraph",
    Component: Icons.Paragraph,
  },
  { iconName: "park", componentName: "Park", Component: Icons.Park },
  { iconName: "pause", componentName: "Pause", Component: Icons.Pause },
  { iconName: "pawn", componentName: "Pawn", Component: Icons.Pawn },
  {
    iconName: "pawprint",
    componentName: "Pawprint",
    Component: Icons.Pawprint,
  },
  {
    iconName: "payment-card",
    componentName: "PaymentCard",
    Component: Icons.PaymentCard,
  },
  { iconName: "pen", componentName: "Pen", Component: Icons.Pen },
  { iconName: "pencil", componentName: "Pencil", Component: Icons.Pencil },
  {
    iconName: "performance-high",
    componentName: "PerformanceHigh",
    Component: Icons.PerformanceHigh,
  },
  {
    iconName: "performance-low",
    componentName: "PerformanceLow",
    Component: Icons.PerformanceLow,
  },
  {
    iconName: "performance-medium",
    componentName: "PerformanceMedium",
    Component: Icons.PerformanceMedium,
  },
  {
    iconName: "phone-laptop",
    componentName: "PhoneLaptop",
    Component: Icons.PhoneLaptop,
  },
  {
    iconName: "physical-exit",
    componentName: "PhysicalExit",
    Component: Icons.PhysicalExit,
  },
  {
    iconName: "picture-in-picture",
    componentName: "PictureInPicture",
    Component: Icons.PictureInPicture,
  },
  {
    iconName: "pill-bar-stack",
    componentName: "PillBarStack",
    Component: Icons.PillBarStack,
  },
  { iconName: "pin", componentName: "Pin", Component: Icons.Pin },
  { iconName: "pin-off", componentName: "PinOff", Component: Icons.PinOff },
  { iconName: "pizza", componentName: "Pizza", Component: Icons.Pizza },
  {
    iconName: "placesetting",
    componentName: "Placesetting",
    Component: Icons.Placesetting,
  },
  {
    iconName: "platformer",
    componentName: "Platformer",
    Component: Icons.Platformer,
  },
  { iconName: "play", componentName: "Play", Component: Icons.Play },
  {
    iconName: "plug-receptacle",
    componentName: "PlugReceptacle",
    Component: Icons.PlugReceptacle,
  },
  { iconName: "plug-usb", componentName: "PlugUsb", Component: Icons.PlugUsb },
  { iconName: "plugin", componentName: "Plugin", Component: Icons.Plugin },
  { iconName: "podium", componentName: "Podium", Component: Icons.Podium },
  { iconName: "power", componentName: "Power", Component: Icons.Power },
  {
    iconName: "power-supply-unit",
    componentName: "PowerSupplyUnit",
    Component: Icons.PowerSupplyUnit,
  },
  {
    iconName: "prayer-room",
    componentName: "PrayerRoom",
    Component: Icons.PrayerRoom,
  },
  {
    iconName: "previous",
    componentName: "Previous",
    Component: Icons.Previous,
  },
  { iconName: "profile", componentName: "Profile", Component: Icons.Profile },
  {
    iconName: "profile-group",
    componentName: "ProfileGroup",
    Component: Icons.ProfileGroup,
  },
  {
    iconName: "profile-off",
    componentName: "ProfileOff",
    Component: Icons.ProfileOff,
  },
  {
    iconName: "projector",
    componentName: "Projector",
    Component: Icons.Projector,
  },
  { iconName: "pulse", componentName: "Pulse", Component: Icons.Pulse },
  { iconName: "puzzle", componentName: "Puzzle", Component: Icons.Puzzle },
  { iconName: "qrcode", componentName: "Qrcode", Component: Icons.Qrcode },
  { iconName: "radar", componentName: "Radar", Component: Icons.Radar },
  {
    iconName: "radioactive",
    componentName: "Radioactive",
    Component: Icons.Radioactive,
  },
  { iconName: "ram", componentName: "Ram", Component: Icons.Ram },
  {
    iconName: "ranking-xp",
    componentName: "RankingXp",
    Component: Icons.RankingXp,
  },
  { iconName: "record", componentName: "Record", Component: Icons.Record },
  {
    iconName: "rectangle-group",
    componentName: "RectangleGroup",
    Component: Icons.RectangleGroup,
  },
  { iconName: "redo", componentName: "Redo", Component: Icons.Redo },
  {
    iconName: "reference",
    componentName: "Reference",
    Component: Icons.Reference,
  },
  { iconName: "refresh", componentName: "Refresh", Component: Icons.Refresh },
  { iconName: "remote", componentName: "Remote", Component: Icons.Remote },
  { iconName: "rename", componentName: "Rename", Component: Icons.Rename },
  { iconName: "render", componentName: "Render", Component: Icons.Render },
  { iconName: "replay", componentName: "Replay", Component: Icons.Replay },
  {
    iconName: "replay-off",
    componentName: "ReplayOff",
    Component: Icons.ReplayOff,
  },
  { iconName: "reply", componentName: "Reply", Component: Icons.Reply },
  { iconName: "reset", componentName: "Reset", Component: Icons.Reset },
  { iconName: "retry", componentName: "Retry", Component: Icons.Retry },
  { iconName: "return", componentName: "Return", Component: Icons.Return },
  {
    iconName: "reverse-10",
    componentName: "Reverse10",
    Component: Icons.Reverse10,
  },
  { iconName: "river", componentName: "River", Component: Icons.River },
  { iconName: "robot", componentName: "Robot", Component: Icons.Robot },
  {
    iconName: "robot-arm",
    componentName: "RobotArm",
    Component: Icons.RobotArm,
  },
  {
    iconName: "robot-delivery",
    componentName: "RobotDelivery",
    Component: Icons.RobotDelivery,
  },
  {
    iconName: "robot-torso",
    componentName: "RobotTorso",
    Component: Icons.RobotTorso,
  },
  {
    iconName: "robot-wheels",
    componentName: "RobotWheels",
    Component: Icons.RobotWheels,
  },
  { iconName: "rock", componentName: "Rock", Component: Icons.Rock },
  { iconName: "rocket", componentName: "Rocket", Component: Icons.Rocket },
  { iconName: "rotate", componentName: "Rotate", Component: Icons.Rotate },
  {
    iconName: "rotate-3d",
    componentName: "Rotate3D",
    Component: Icons.Rotate3D,
  },
  {
    iconName: "rotate-90-clockwise",
    componentName: "Rotate90Clockwise",
    Component: Icons.Rotate90Clockwise,
  },
  {
    iconName: "rotate-90-counter",
    componentName: "Rotate90Counter",
    Component: Icons.Rotate90Counter,
  },
  {
    iconName: "rotate-global",
    componentName: "RotateGlobal",
    Component: Icons.RotateGlobal,
  },
  { iconName: "route", componentName: "Route", Component: Icons.Route },
  { iconName: "ruler", componentName: "Ruler", Component: Icons.Ruler },
  { iconName: "running", componentName: "Running", Component: Icons.Running },
  {
    iconName: "sailboat",
    componentName: "Sailboat",
    Component: Icons.Sailboat,
  },
  { iconName: "sand", componentName: "Sand", Component: Icons.Sand },
  { iconName: "saw-wave", componentName: "SawWave", Component: Icons.SawWave },
  { iconName: "scale", componentName: "Scale", Component: Icons.Scale },
  {
    iconName: "scale-balance",
    componentName: "ScaleBalance",
    Component: Icons.ScaleBalance,
  },
  {
    iconName: "scale-down",
    componentName: "ScaleDown",
    Component: Icons.ScaleDown,
  },
  {
    iconName: "scale-relative",
    componentName: "ScaleRelative",
    Component: Icons.ScaleRelative,
  },
  {
    iconName: "scale-relative-off",
    componentName: "ScaleRelativeOff",
    Component: Icons.ScaleRelativeOff,
  },
  {
    iconName: "scale-reset",
    componentName: "ScaleReset",
    Component: Icons.ScaleReset,
  },
  { iconName: "scale-up", componentName: "ScaleUp", Component: Icons.ScaleUp },
  { iconName: "school", componentName: "School", Component: Icons.School },
  {
    iconName: "scissors",
    componentName: "Scissors",
    Component: Icons.Scissors,
  },
  {
    iconName: "scm-branch",
    componentName: "ScmBranch",
    Component: Icons.ScmBranch,
  },
  {
    iconName: "scm-compare",
    componentName: "ScmCompare",
    Component: Icons.ScmCompare,
  },
  { iconName: "scm-fork", componentName: "ScmFork", Component: Icons.ScmFork },
  {
    iconName: "scm-merge",
    componentName: "ScmMerge",
    Component: Icons.ScmMerge,
  },
  { iconName: "scm-pull", componentName: "ScmPull", Component: Icons.ScmPull },
  {
    iconName: "scm-pull-close",
    componentName: "ScmPullClose",
    Component: Icons.ScmPullClose,
  },
  {
    iconName: "scm-pull-draft",
    componentName: "ScmPullDraft",
    Component: Icons.ScmPullDraft,
  },
  { iconName: "sd-card", componentName: "SdCard", Component: Icons.SdCard },
  { iconName: "sea", componentName: "Sea", Component: Icons.Sea },
  { iconName: "section", componentName: "Section", Component: Icons.Section },
  {
    iconName: "section-bottom",
    componentName: "SectionBottom",
    Component: Icons.SectionBottom,
  },
  {
    iconName: "section-top",
    componentName: "SectionTop",
    Component: Icons.SectionTop,
  },
  { iconName: "secure", componentName: "Secure", Component: Icons.Secure },
  { iconName: "seed", componentName: "Seed", Component: Icons.Seed },
  { iconName: "segmap", componentName: "Segmap", Component: Icons.Segmap },
  { iconName: "segment", componentName: "Segment", Component: Icons.Segment },
  {
    iconName: "select-brush",
    componentName: "SelectBrush",
    Component: Icons.SelectBrush,
  },
  {
    iconName: "select-ellipse",
    componentName: "SelectEllipse",
    Component: Icons.SelectEllipse,
  },
  {
    iconName: "select-polygon",
    componentName: "SelectPolygon",
    Component: Icons.SelectPolygon,
  },
  {
    iconName: "select-rectangle",
    componentName: "SelectRectangle",
    Component: Icons.SelectRectangle,
  },
  {
    iconName: "send-image",
    componentName: "SendImage",
    Component: Icons.SendImage,
  },
  {
    iconName: "sensor",
    componentName: "IconSensor",
    Component: Icons.IconSensor,
  },
  {
    iconName: "service-account",
    componentName: "ServiceAccount",
    Component: Icons.ServiceAccount,
  },
  { iconName: "shader", componentName: "Shader", Component: Icons.Shader },
  {
    iconName: "shader-ball",
    componentName: "ShaderBall",
    Component: Icons.ShaderBall,
  },
  {
    iconName: "shape-circle",
    componentName: "ShapeCircle",
    Component: Icons.ShapeCircle,
  },
  {
    iconName: "shape-circle-off",
    componentName: "ShapeCircleOff",
    Component: Icons.ShapeCircleOff,
  },
  {
    iconName: "shape-hexagon",
    componentName: "ShapeHexagon",
    Component: Icons.ShapeHexagon,
  },
  {
    iconName: "shape-octagon",
    componentName: "ShapeOctagon",
    Component: Icons.ShapeOctagon,
  },
  {
    iconName: "shape-square",
    componentName: "ShapeSquare",
    Component: Icons.ShapeSquare,
  },
  {
    iconName: "shape-square-off",
    componentName: "ShapeSquareOff",
    Component: Icons.ShapeSquareOff,
  },
  {
    iconName: "shape-triangle",
    componentName: "ShapeTriangle",
    Component: Icons.ShapeTriangle,
  },
  { iconName: "shapes", componentName: "Shapes", Component: Icons.Shapes },
  { iconName: "share", componentName: "Share", Component: Icons.Share },
  { iconName: "shield", componentName: "Shield", Component: Icons.Shield },
  {
    iconName: "shield-off",
    componentName: "ShieldOff",
    Component: Icons.ShieldOff,
  },
  { iconName: "ship", componentName: "Ship", Component: Icons.Ship },
  {
    iconName: "ship-wheel",
    componentName: "ShipWheel",
    Component: Icons.ShipWheel,
  },
  {
    iconName: "shopping-bag",
    componentName: "ShoppingBag",
    Component: Icons.ShoppingBag,
  },
  {
    iconName: "shopping-basket",
    componentName: "ShoppingBasket",
    Component: Icons.ShoppingBasket,
  },
  {
    iconName: "shopping-cart",
    componentName: "ShoppingCart",
    Component: Icons.ShoppingCart,
  },
  {
    iconName: "shopping-cart-open",
    componentName: "ShoppingCartOpen",
    Component: Icons.ShoppingCartOpen,
  },
  { iconName: "shuffle", componentName: "Shuffle", Component: Icons.Shuffle },
  {
    iconName: "signature",
    componentName: "Signature",
    Component: Icons.Signature,
  },
  {
    iconName: "signpost",
    componentName: "Signpost",
    Component: Icons.Signpost,
  },
  { iconName: "sin-wave", componentName: "SinWave", Component: Icons.SinWave },
  {
    iconName: "skeleton",
    componentName: "Skeleton",
    Component: Icons.Skeleton,
  },
  { iconName: "skip", componentName: "Skip", Component: Icons.Skip },
  { iconName: "skull", componentName: "Skull", Component: Icons.Skull },
  { iconName: "sky", componentName: "Sky", Component: Icons.Sky },
  { iconName: "sliders", componentName: "Sliders", Component: Icons.Sliders },
  {
    iconName: "smartphone",
    componentName: "Smartphone",
    Component: Icons.Smartphone,
  },
  {
    iconName: "smartphone-off",
    componentName: "SmartphoneOff",
    Component: Icons.SmartphoneOff,
  },
  { iconName: "snow", componentName: "Snow", Component: Icons.Snow },
  { iconName: "soccer", componentName: "Soccer", Component: Icons.Soccer },
  { iconName: "sort", componentName: "Sort", Component: Icons.Sort },
  {
    iconName: "sort-ascending",
    componentName: "SortAscending",
    Component: Icons.SortAscending,
  },
  {
    iconName: "sort-descending",
    componentName: "SortDescending",
    Component: Icons.SortDescending,
  },
  {
    iconName: "soundwaves",
    componentName: "Soundwaves",
    Component: Icons.Soundwaves,
  },
  { iconName: "sparkle", componentName: "Sparkle", Component: Icons.Sparkle },
  { iconName: "speaker", componentName: "Speaker", Component: Icons.Speaker },
  {
    iconName: "speaker-high",
    componentName: "SpeakerHigh",
    Component: Icons.SpeakerHigh,
  },
  {
    iconName: "speaker-low",
    componentName: "SpeakerLow",
    Component: Icons.SpeakerLow,
  },
  {
    iconName: "speaker-medium",
    componentName: "SpeakerMedium",
    Component: Icons.SpeakerMedium,
  },
  {
    iconName: "speaker-mute",
    componentName: "SpeakerMute",
    Component: Icons.SpeakerMute,
  },
  {
    iconName: "speaker-off",
    componentName: "SpeakerOff",
    Component: Icons.SpeakerOff,
  },
  { iconName: "split", componentName: "Split", Component: Icons.Split },
  {
    iconName: "split-file",
    componentName: "SplitFile",
    Component: Icons.SplitFile,
  },
  { iconName: "spoon", componentName: "Spoon", Component: Icons.Spoon },
  {
    iconName: "square-wave",
    componentName: "SquareWave",
    Component: Icons.SquareWave,
  },
  {
    iconName: "stack-horizontal",
    componentName: "StackHorizontal",
    Component: Icons.StackHorizontal,
  },
  { iconName: "stair", componentName: "Stair", Component: Icons.Stair },
  { iconName: "star", componentName: "Star", Component: Icons.Star },
  {
    iconName: "steering-wheel",
    componentName: "SteeringWheel",
    Component: Icons.SteeringWheel,
  },
  {
    iconName: "step-forward",
    componentName: "StepForward",
    Component: Icons.StepForward,
  },
  {
    iconName: "step-reverse",
    componentName: "StepReverse",
    Component: Icons.StepReverse,
  },
  { iconName: "sticker", componentName: "Sticker", Component: Icons.Sticker },
  {
    iconName: "sticker-image",
    componentName: "StickerImage",
    Component: Icons.StickerImage,
  },
  {
    iconName: "sticker-shape",
    componentName: "StickerShape",
    Component: Icons.StickerShape,
  },
  {
    iconName: "sticker-text",
    componentName: "StickerText",
    Component: Icons.StickerText,
  },
  {
    iconName: "sticker-zoom",
    componentName: "StickerZoom",
    Component: Icons.StickerZoom,
  },
  { iconName: "stone", componentName: "Stone", Component: Icons.Stone },
  { iconName: "stop", componentName: "Stop", Component: Icons.Stop },
  { iconName: "straw", componentName: "Straw", Component: Icons.Straw },
  {
    iconName: "strikethrough",
    componentName: "Strikethrough",
    Component: Icons.Strikethrough,
  },
  {
    iconName: "stroke-width",
    componentName: "StrokeWidth",
    Component: Icons.StrokeWidth,
  },
  { iconName: "style", componentName: "Style", Component: Icons.Style },
  {
    iconName: "subtract",
    componentName: "Subtract",
    Component: Icons.Subtract,
  },
  {
    iconName: "subtract-circle",
    componentName: "SubtractCircle",
    Component: Icons.SubtractCircle,
  },
  {
    iconName: "suit-club",
    componentName: "SuitClub",
    Component: Icons.SuitClub,
  },
  {
    iconName: "suit-diamond",
    componentName: "SuitDiamond",
    Component: Icons.SuitDiamond,
  },
  {
    iconName: "suit-spade",
    componentName: "SuitSpade",
    Component: Icons.SuitSpade,
  },
  {
    iconName: "suitcase",
    componentName: "Suitcase",
    Component: Icons.Suitcase,
  },
  { iconName: "sun-high", componentName: "SunHigh", Component: Icons.SunHigh },
  { iconName: "sun-low", componentName: "SunLow", Component: Icons.SunLow },
  {
    iconName: "sun-off-high",
    componentName: "SunOffHigh",
    Component: Icons.SunOffHigh,
  },
  {
    iconName: "swatches",
    componentName: "Swatches",
    Component: Icons.Swatches,
  },
  { iconName: "sword", componentName: "Sword", Component: Icons.Sword },
  { iconName: "sync", componentName: "Sync", Component: Icons.Sync },
  { iconName: "sync-off", componentName: "SyncOff", Component: Icons.SyncOff },
  {
    iconName: "sync-warning",
    componentName: "SyncWarning",
    Component: Icons.SyncWarning,
  },
  { iconName: "tablet", componentName: "Tablet", Component: Icons.Tablet },
  {
    iconName: "tablet-off",
    componentName: "TabletOff",
    Component: Icons.TabletOff,
  },
  { iconName: "tag", componentName: "Tag", Component: Icons.Tag },
  {
    iconName: "tag-label",
    componentName: "TagLabel",
    Component: Icons.TagLabel,
  },
  { iconName: "teapot", componentName: "Teapot", Component: Icons.Teapot },
  {
    iconName: "telephone",
    componentName: "Telephone",
    Component: Icons.Telephone,
  },
  {
    iconName: "telephone-off",
    componentName: "TelephoneOff",
    Component: Icons.TelephoneOff,
  },
  {
    iconName: "teleport",
    componentName: "Teleport",
    Component: Icons.Teleport,
  },
  {
    iconName: "telescope",
    componentName: "Telescope",
    Component: Icons.Telescope,
  },
  {
    iconName: "television",
    componentName: "Television",
    Component: Icons.Television,
  },
  {
    iconName: "television-retro",
    componentName: "TelevisionRetro",
    Component: Icons.TelevisionRetro,
  },
  { iconName: "text", componentName: "IconText", Component: Icons.IconText },
  {
    iconName: "text-align-center",
    componentName: "TextAlignCenter",
    Component: Icons.TextAlignCenter,
  },
  {
    iconName: "text-align-full",
    componentName: "TextAlignFull",
    Component: Icons.TextAlignFull,
  },
  {
    iconName: "text-align-left",
    componentName: "TextAlignLeft",
    Component: Icons.TextAlignLeft,
  },
  {
    iconName: "text-align-right",
    componentName: "TextAlignRight",
    Component: Icons.TextAlignRight,
  },
  {
    iconName: "text-framed",
    componentName: "TextFramed",
    Component: Icons.TextFramed,
  },
  { iconName: "texture", componentName: "Texture", Component: Icons.Texture },
  {
    iconName: "thermometer",
    componentName: "Thermometer",
    Component: Icons.Thermometer,
  },
  {
    iconName: "thumb-down",
    componentName: "ThumbDown",
    Component: Icons.ThumbDown,
  },
  { iconName: "thumb-up", componentName: "ThumbUp", Component: Icons.ThumbUp },
  { iconName: "ticket", componentName: "Ticket", Component: Icons.Ticket },
  { iconName: "timer", componentName: "Timer", Component: Icons.Timer },
  { iconName: "toolbox", componentName: "Toolbox", Component: Icons.Toolbox },
  {
    iconName: "traffic-cone",
    componentName: "TrafficCone",
    Component: Icons.TrafficCone,
  },
  {
    iconName: "transfer-horizontal",
    componentName: "TransferHorizontal",
    Component: Icons.TransferHorizontal,
  },
  {
    iconName: "transfer-vertical",
    componentName: "TransferVertical",
    Component: Icons.TransferVertical,
  },
  {
    iconName: "transform",
    componentName: "Transform",
    Component: Icons.Transform,
  },
  {
    iconName: "transparency",
    componentName: "Transparency",
    Component: Icons.Transparency,
  },
  { iconName: "trash", componentName: "Trash", Component: Icons.Trash },
  {
    iconName: "trash-delete",
    componentName: "TrashDelete",
    Component: Icons.TrashDelete,
  },
  { iconName: "tree", componentName: "Tree", Component: Icons.Tree },
  { iconName: "trees", componentName: "Trees", Component: Icons.Trees },
  {
    iconName: "triangle-wave",
    componentName: "TriangleWave",
    Component: Icons.TriangleWave,
  },
  { iconName: "trident", componentName: "Trident", Component: Icons.Trident },
  {
    iconName: "typography",
    componentName: "Typography",
    Component: Icons.Typography,
  },
  {
    iconName: "umbrella",
    componentName: "Umbrella",
    Component: Icons.Umbrella,
  },
  {
    iconName: "underline",
    componentName: "Underline",
    Component: Icons.Underline,
  },
  { iconName: "undo", componentName: "Undo", Component: Icons.Undo },
  { iconName: "upload", componentName: "Upload", Component: Icons.Upload },
  { iconName: "usb", componentName: "Usb", Component: Icons.Usb },
  {
    iconName: "v-align-bottom",
    componentName: "VAlignBottom",
    Component: Icons.VAlignBottom,
  },
  {
    iconName: "v-align-center",
    componentName: "VAlignCenter",
    Component: Icons.VAlignCenter,
  },
  {
    iconName: "v-align-top",
    componentName: "VAlignTop",
    Component: Icons.VAlignTop,
  },
  { iconName: "vga", componentName: "Vga", Component: Icons.Vga },
  {
    iconName: "videocam",
    componentName: "Videocam",
    Component: Icons.Videocam,
  },
  {
    iconName: "videocam-off",
    componentName: "VideocamOff",
    Component: Icons.VideocamOff,
  },
  { iconName: "vr", componentName: "Vr", Component: Icons.Vr },
  { iconName: "wand", componentName: "Wand", Component: Icons.Wand },
  { iconName: "warning", componentName: "Warning", Component: Icons.Warning },
  { iconName: "watch", componentName: "Watch", Component: Icons.Watch },
  {
    iconName: "watch-party",
    componentName: "WatchParty",
    Component: Icons.WatchParty,
  },
  { iconName: "water", componentName: "Water", Component: Icons.Water },
  {
    iconName: "weather-cloud",
    componentName: "WeatherCloud",
    Component: Icons.WeatherCloud,
  },
  {
    iconName: "weather-fog",
    componentName: "WeatherFog",
    Component: Icons.WeatherFog,
  },
  {
    iconName: "weather-lightning",
    componentName: "WeatherLightning",
    Component: Icons.WeatherLightning,
  },
  {
    iconName: "weather-partial-cloud-day",
    componentName: "WeatherPartialCloudDay",
    Component: Icons.WeatherPartialCloudDay,
  },
  {
    iconName: "weather-partial-cloud-night",
    componentName: "WeatherPartialCloudNight",
    Component: Icons.WeatherPartialCloudNight,
  },
  {
    iconName: "weather-rain",
    componentName: "WeatherRain",
    Component: Icons.WeatherRain,
  },
  {
    iconName: "weather-snow",
    componentName: "WeatherSnow",
    Component: Icons.WeatherSnow,
  },
  {
    iconName: "weather-wind",
    componentName: "WeatherWind",
    Component: Icons.WeatherWind,
  },
  { iconName: "webcam", componentName: "Webcam", Component: Icons.Webcam },
  {
    iconName: "webcam-off",
    componentName: "WebcamOff",
    Component: Icons.WebcamOff,
  },
  {
    iconName: "webcam-settings",
    componentName: "WebcamSettings",
    Component: Icons.WebcamSettings,
  },
  { iconName: "weight", componentName: "Weight", Component: Icons.Weight },
  {
    iconName: "weight-bar",
    componentName: "WeightBar",
    Component: Icons.WeightBar,
  },
  { iconName: "wheel", componentName: "Wheel", Component: Icons.Wheel },
  {
    iconName: "wheelchair",
    componentName: "Wheelchair",
    Component: Icons.Wheelchair,
  },
  {
    iconName: "whispermode",
    componentName: "Whispermode",
    Component: Icons.Whispermode,
  },
  { iconName: "wifi", componentName: "Wifi", Component: Icons.Wifi },
  { iconName: "wifi-off", componentName: "WifiOff", Component: Icons.WifiOff },
  {
    iconName: "window",
    componentName: "IconWindow",
    Component: Icons.IconWindow,
  },
  {
    iconName: "window-code",
    componentName: "WindowCode",
    Component: Icons.WindowCode,
  },
  {
    iconName: "window-grid",
    componentName: "WindowGrid",
    Component: Icons.WindowGrid,
  },
  {
    iconName: "window-stack",
    componentName: "WindowStack",
    Component: Icons.WindowStack,
  },
  {
    iconName: "window-terminal",
    componentName: "WindowTerminal",
    Component: Icons.WindowTerminal,
  },
  {
    iconName: "wine-glass",
    componentName: "WineGlass",
    Component: Icons.WineGlass,
  },
  {
    iconName: "wireless-modem",
    componentName: "WirelessModem",
    Component: Icons.WirelessModem,
  },
  {
    iconName: "wireless-modem-off",
    componentName: "WirelessModemOff",
    Component: Icons.WirelessModemOff,
  },
  { iconName: "woman", componentName: "Woman", Component: Icons.Woman },
  {
    iconName: "workspace",
    componentName: "Workspace",
    Component: Icons.Workspace,
  },
  {
    iconName: "workspace-group",
    componentName: "WorkspaceGroup",
    Component: Icons.WorkspaceGroup,
  },
  {
    iconName: "workstation",
    componentName: "Workstation",
    Component: Icons.Workstation,
  },
  {
    iconName: "workstation-off",
    componentName: "WorkstationOff",
    Component: Icons.WorkstationOff,
  },
  {
    iconName: "workstation-system",
    componentName: "WorkstationSystem",
    Component: Icons.WorkstationSystem,
  },
  {
    iconName: "workstation-system-off",
    componentName: "WorkstationSystemOff",
    Component: Icons.WorkstationSystemOff,
  },
  { iconName: "world", componentName: "World", Component: Icons.World },
  {
    iconName: "world-off",
    componentName: "WorldOff",
    Component: Icons.WorldOff,
  },
  { iconName: "wrench", componentName: "Wrench", Component: Icons.Wrench },
  { iconName: "yoke", componentName: "Yoke", Component: Icons.Yoke },
] as const satisfies readonly IconFixture[];
const SAMPLE_ICON = ICONS[0];
const SAMPLE_ICON_NAME = SAMPLE_ICON.iconName;
const SAMPLE_VARIANT = "line" as const;
const SAMPLE_SYMBOL = getIconData(SAMPLE_VARIANT, SAMPLE_ICON_NAME);
const SAMPLE_FILL_SYMBOL = getIconData("fill", SAMPLE_ICON_NAME);

const nodeRequire = createRequire(import.meta.url);
const { renderToStaticMarkup } = nodeRequire("react-dom/server") as {
  renderToStaticMarkup(element: ReactElement): string;
};

function escapeRegExp(value: string): string {
  return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}

function countMatches(content: string, pattern: RegExp): number {
  return [...content.matchAll(pattern)].length;
}

function extractPaths(svgContent: string): string[] {
  return [...svgContent.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((value): value is string => value !== undefined);
}

function extractViewBox(svgContent: string): string {
  const viewBox = svgContent.match(/<svg\b[^>]*\bviewBox="([^"]+)"/)?.[1];
  assert.ok(viewBox, "source SVG should have a viewBox");
  return viewBox;
}

function readSourceSvg(variant: Variant, iconName: IconName): string {
  return readFileSync(
    new URL(
      `../../gui-icons/assets/${variant}/${iconName}.svg`,
      import.meta.url,
    ),
    "utf8",
  );
}

function getIconData(variant: Variant, iconName: IconName): IconSpriteSymbol {
  const symbol = inlineMap[variant]?.[iconName];
  assert.ok(symbol, `${variant}/${iconName} should exist in inlineMap`);
  return symbol;
}

function getAllSymbols(): IconSpriteSymbol[] {
  const symbols: IconSpriteSymbol[] = [];
  for (const variant of VARIANTS) {
    for (const { iconName } of ICONS) {
      symbols.push(getIconData(variant, iconName));
    }
  }
  return symbols;
}

function assertRendersUseReference(
  html: string,
  symbol: IconSpriteSymbol,
  iconName: IconName,
  label: string,
): void {
  const symbolIdPattern = escapeRegExp(symbol.symbolId);
  assert.match(
    html,
    new RegExp(`\\bdata-icon-name="${escapeRegExp(iconName)}"`),
    `${label} should expose the icon name`,
  );
  assert.match(
    html,
    new RegExp(`\\bviewBox="${escapeRegExp(symbol.viewBox)}"`),
    `${label} should use the selected variant viewBox`,
  );
  assert.equal(
    countMatches(html, new RegExp(`<use href="#${symbolIdPattern}"`, "g")),
    1,
    `${label} should render one use reference to the selected symbol`,
  );
  assert.equal(
    countMatches(html, /<path\b/g),
    0,
    `${label} should not inline path payloads`,
  );
  assert.match(
    html,
    /\baria-hidden="true"/,
    `${label} should default to aria-hidden (decorative) unless overridden`,
  );
  assert.match(
    html,
    /\bfocusable="false"/,
    `${label} should default focusable to false unless overridden`,
  );
}

function assertUniqueSymbolIds(symbols: readonly IconSpriteSymbol[]): void {
  const ids = symbols.map((symbol) => symbol.symbolId);
  assert.equal(new Set(ids).size, ids.length, "symbol IDs should be unique");
}

function withDocument(callback: () => void): void {
  const dom = new JSDOM("<!doctype html><html><body></body></html>");
  const mutableGlobal = globalThis as unknown as {
    document?: Document;
    window?: unknown;
  };
  const previousDocument = mutableGlobal.document;
  const previousWindow = mutableGlobal.window;

  Object.defineProperty(mutableGlobal, "document", {
    configurable: true,
    value: dom.window.document,
  });
  Object.defineProperty(mutableGlobal, "window", {
    configurable: true,
    value: dom.window,
  });

  try {
    callback();
  } finally {
    if (previousDocument === undefined) {
      Reflect.deleteProperty(mutableGlobal, "document");
    } else {
      Object.defineProperty(mutableGlobal, "document", {
        configurable: true,
        value: previousDocument,
      });
    }
    if (previousWindow === undefined) {
      Reflect.deleteProperty(mutableGlobal, "window");
    } else {
      Object.defineProperty(mutableGlobal, "window", {
        configurable: true,
        value: previousWindow,
      });
    }
    dom.window.close();
  }
}

function countDomSymbolsById(id: string): number {
  return [...document.querySelectorAll("symbol")].filter(
    (symbol) => symbol.id === id,
  ).length;
}

test("NvidiaGuiIcon sprite output deduplicates repeated icon instances", () => {
  const html = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      createElement(NvidiaGuiIconSprite, { symbols: [SAMPLE_SYMBOL] }),
      createElement(SAMPLE_ICON.Component, { variant: SAMPLE_VARIANT }),
      createElement(SAMPLE_ICON.Component, { variant: SAMPLE_VARIANT }),
      createElement(NvidiaGuiIcon, {
        iconName: SAMPLE_ICON_NAME,
        variant: SAMPLE_VARIANT,
      }),
    ),
  );

  const symbolIdPattern = escapeRegExp(SAMPLE_SYMBOL.symbolId);
  assert.equal(
    countMatches(html, new RegExp(`<symbol id="${symbolIdPattern}"`, "g")),
    1,
    "the sprite should contain one symbol for the repeated icon",
  );
  assert.equal(
    countMatches(html, new RegExp(`<use href="#${symbolIdPattern}"`, "g")),
    3,
    "each icon instance should render a lightweight use reference",
  );
});

test("NvidiaGuiIcon inline map matches every source SVG", () => {
  assert.equal(ICONS.length, Object.keys(inlineMap.line).length);
  assert.equal(ICONS.length, Object.keys(inlineMap.fill).length);

  for (const variant of VARIANTS) {
    for (const { iconName } of ICONS) {
      const symbol = getIconData(variant, iconName);
      const source = readSourceSvg(variant, iconName);
      assert.equal(
        symbol.viewBox,
        extractViewBox(source),
        `${variant}/${iconName} should preserve source viewBox`,
      );
      assert.deepEqual(
        [...symbol.paths],
        extractPaths(source),
        `${variant}/${iconName} should preserve source path data`,
      );
    }
  }
});

test("NvidiaGuiIcon per-icon and generic components render sprite references", () => {
  for (const variant of VARIANTS) {
    for (const { iconName, componentName, Component } of ICONS) {
      const symbol = getIconData(variant, iconName);
      assertRendersUseReference(
        renderToStaticMarkup(
          createElement(Component, {
            className: "test-icon",
            size: "24px",
            variant,
          }),
        ),
        symbol,
        iconName,
        `${componentName} ${variant}`,
      );
      assertRendersUseReference(
        renderToStaticMarkup(
          createElement(NvidiaGuiIcon, {
            className: "test-icon",
            iconName,
            size: "24px",
            variant,
          }),
        ),
        symbol,
        iconName,
        `NvidiaGuiIcon ${iconName} ${variant}`,
      );
    }
  }
});

test("NvidiaGuiIcon sprite renders selected symbol payloads", () => {
  const symbols = getAllSymbols();
  assertUniqueSymbolIds(symbols);

  const rendered = renderToStaticMarkup(
    createElement(NvidiaGuiIconSprite, { symbols }),
  );

  assert.equal(countMatches(rendered, /<symbol\b/g), symbols.length);
  assert.deepEqual(
    extractPaths(rendered),
    symbols.flatMap((symbol) => [...symbol.paths]),
  );
  for (const symbol of symbols) {
    assert.equal(
      countMatches(
        rendered,
        new RegExp(`<symbol id="${escapeRegExp(symbol.symbolId)}"`, "g"),
      ),
      1,
      `${symbol.symbolId} should be rendered once`,
    );
  }
});

test("NvidiaGuiIcon sprite symbol helpers select and dedupe every payload", () => {
  assert.equal(
    getNvidiaGuiIconSpriteSymbol(SAMPLE_ICON_NAME, SAMPLE_VARIANT),
    SAMPLE_SYMBOL,
  );
  assert.equal(
    getNvidiaGuiIconSpriteSymbol(SAMPLE_ICON_NAME, "fill"),
    SAMPLE_FILL_SYMBOL,
  );

  const requestedSymbols: NvidiaGuiIconSpriteSymbolSource[] = [];
  const expectedSymbols: IconSpriteSymbol[] = [];
  for (const { iconName } of ICONS) {
    requestedSymbols.push(
      iconName,
      { iconName, variant: "line" },
      { iconName, variant: "fill" },
      { iconName, variant: "fill" },
    );
    expectedSymbols.push(
      getIconData("line", iconName),
      getIconData("fill", iconName),
    );
  }

  const symbols = getNvidiaGuiIconSpriteSymbols(requestedSymbols);
  assertUniqueSymbolIds(symbols);
  assert.deepEqual(symbols, expectedSymbols);
});

test("NvidiaGuiIcon sprite runtime injects document symbols once", () => {
  withDocument(() => {
    ensureSpriteSymbol(undefined);
    assert.equal(document.getElementById(SPRITE_ROOT_ID), null);

    ensureSpriteSymbol(SAMPLE_SYMBOL);
    const createdRoot = document.getElementById(SPRITE_ROOT_ID);
    assert.ok(createdRoot, "runtime should create the hidden sprite root");
    assert.equal(createdRoot.tagName.toLowerCase(), "svg");
    assert.equal(createdRoot.getAttribute("aria-hidden"), "true");
    assert.equal(createdRoot.getAttribute("focusable"), "false");
    assert.equal(countDomSymbolsById(SAMPLE_SYMBOL.symbolId), 1);

    ensureSpriteSymbol(SAMPLE_SYMBOL);
    assert.equal(countDomSymbolsById(SAMPLE_SYMBOL.symbolId), 1);

    const createdSymbol = document.getElementById(SAMPLE_SYMBOL.symbolId);
    assert.ok(createdSymbol, "runtime should create the requested symbol");
    assert.equal(createdSymbol.getAttribute("viewBox"), SAMPLE_SYMBOL.viewBox);
    assert.deepEqual(
      [...createdSymbol.querySelectorAll("path")].map((pathElement) =>
        pathElement.getAttribute("d"),
      ),
      [...SAMPLE_SYMBOL.paths],
    );

    createdRoot.remove();
    const existingRoot = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    existingRoot.id = SPRITE_ROOT_ID;
    document.body.appendChild(existingRoot);

    ensureSpriteSymbol(SAMPLE_FILL_SYMBOL);
    assert.equal(document.getElementById(SPRITE_ROOT_ID), existingRoot);
    assert.equal(countDomSymbolsById(SAMPLE_FILL_SYMBOL.symbolId), 1);
  });
});

test("NvidiaGuiIcon sprite symbol paths match source SVG paths", () => {
  const rendered = renderToStaticMarkup(
    createElement(NvidiaGuiIconSprite, { symbols: [SAMPLE_SYMBOL] }),
  );
  const source = readSourceSvg(SAMPLE_VARIANT, SAMPLE_ICON_NAME);

  assert.deepEqual(extractPaths(rendered), extractPaths(source));
});
