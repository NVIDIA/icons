// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  IconCategories,
  type IconCategory,
  IconCategoryMap,
} from "./IconMeta.js";
import type { IconName } from "./IconName.js";

// Iterates IconCategories rather than Object.entries(IconCategoryMap): the
// latter widens the key to `string`, which surfaced as a `string | undefined`
// return type and defeated the IconCategory union at every call site.
export const getIconCategory = (iconName: IconName): IconCategory | undefined =>
  IconCategories.find((iconCategory) =>
    IconCategoryMap[iconCategory].includes(iconName),
  );

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
