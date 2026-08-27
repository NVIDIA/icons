// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import { IconCategoryMap } from "./IconMeta.js";
import type { IconName } from "./IconName.js";

export const getIconCategory = (iconName: IconName) => {
  for (const [iconCategory, iconNames] of Object.entries(IconCategoryMap)) {
    if ((iconNames as string[]).includes(iconName)) {
      return iconCategory;
    }
  }
  return undefined;
};

export {
  IconCategories,
  type IconCategory,
  IconCategoryMap,
  type IconTag,
  IconTagMap,
  IconTags,
} from "./IconMeta.js";
export {
  type IconName,
  IconNames,
  isIconName,
  type Variant,
} from "./IconName.js";
