import { expect, test } from "vitest";

import { charcodehash } from "./charcodehash.ts";

test("creates a hash", () => {
	expect(charcodehash("test")).toEqual(1127);
});

// test("creates a hash", () => {
// 	expect(charcodehash("")).toEqual(0);
// });
