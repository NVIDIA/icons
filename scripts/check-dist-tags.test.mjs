// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  checkDistTags,
  compareSemver,
  isStaleNext,
} from "./check-dist-tags.mjs";

describe("compareSemver", () => {
  it("a prerelease sorts below its own release", () => {
    assert.ok(compareSemver("1.0.0-rc.1", "1.0.0") < 0);
  });

  it("compares numeric prerelease identifiers numerically, not lexically", () => {
    assert.ok(compareSemver("1.0.0-rc.2", "1.0.0-rc.10") < 0);
  });

  it("a shorter prerelease identifier chain sorts below a longer one with the same prefix", () => {
    assert.ok(compareSemver("1.0.0-alpha", "1.0.0-alpha.1") < 0);
  });

  it("compares alphanumeric prerelease identifiers lexically", () => {
    assert.ok(compareSemver("1.0.0-beta", "1.0.0-rc.1") < 0);
  });

  it("compares major/minor/patch numerically, not lexically", () => {
    assert.equal(compareSemver("1.2.0", "1.10.0") > 0, false);
  });
});

describe("isStaleNext", () => {
  it("is stale when next is behind the published version", () => {
    assert.equal(isStaleNext("1.0.0-rc.1", "1.0.0"), true);
  });

  it("is stale when next equals the published version", () => {
    assert.equal(isStaleNext("1.0.0", "1.0.0"), true);
  });

  it("is not stale when next is ahead of the published version", () => {
    assert.equal(isStaleNext("1.1.0-rc.1", "1.0.0"), false);
  });
});

describe("checkDistTags", () => {
  it("warns when next is behind the just-published GA version", () => {
    const [result] = checkDistTags({
      publishedVersion: "1.0.0",
      packages: ["@nvidia/gui-icons"],
      readNextDistTag: () => "1.0.0-rc.1",
    });
    assert.equal(result.outcome, "stale");
    assert.ok(result.lines.some((l) => l.includes("1.0.0-rc.1")));
    assert.ok(
      result.lines.some((l) =>
        l.includes("npm dist-tag rm @nvidia/gui-icons next"),
      ),
    );
  });

  it("warns using the published version even when the registry's own latest is still stale", () => {
    // The registry read in the real script only ever returns `next` (see
    // readNextDistTagFromRegistry); `latest` never enters the comparison.
    // This test documents that the stub below, which models a registry
    // still serving 0.9.0 as `latest` moments after a 1.0.0 publish, warns
    // all the same because the comparison is against publishedVersion.
    const [result] = checkDistTags({
      publishedVersion: "1.0.0",
      packages: ["@nvidia/gui-icons"],
      readNextDistTag: () => "1.0.0-rc.1", // registry `latest` would still read 0.9.0 here
    });
    assert.equal(result.outcome, "stale");
  });

  it("warns when next equals the published version", () => {
    const [result] = checkDistTags({
      publishedVersion: "1.0.0",
      packages: ["@nvidia/gui-icons"],
      readNextDistTag: () => "1.0.0",
    });
    assert.equal(result.outcome, "stale");
  });

  it("does not warn when next is absent", () => {
    const [result] = checkDistTags({
      publishedVersion: "1.0.0",
      packages: ["@nvidia/gui-icons"],
      readNextDistTag: () => undefined,
    });
    assert.equal(result.outcome, "ok");
    assert.deepEqual(result.lines, []);
  });

  it("does not warn when next is ahead of the published version", () => {
    const [result] = checkDistTags({
      publishedVersion: "1.0.0",
      packages: ["@nvidia/gui-icons"],
      readNextDistTag: () => "1.1.0-rc.1",
    });
    assert.equal(result.outcome, "ok");
  });

  it("skips entirely when the published version is itself a prerelease", () => {
    const results = checkDistTags({
      publishedVersion: "1.0.0-rc.1",
      packages: ["@nvidia/gui-icons"],
      readNextDistTag: () => {
        throw new Error("should not be called for a prerelease publish");
      },
    });
    assert.deepEqual(results, []);
  });

  it("warns that the check could not run, rather than throwing, when the registry read fails", () => {
    const [result] = checkDistTags({
      publishedVersion: "1.0.0",
      packages: ["@nvidia/gui-icons"],
      readNextDistTag: () => {
        throw new Error("network error");
      },
    });
    assert.equal(result.outcome, "read-error");
    assert.ok(result.lines.some((l) => l.includes("could not read dist-tags")));
  });
});
