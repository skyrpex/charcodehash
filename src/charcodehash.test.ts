import { expect, test } from "vitest";

import { charcodehash } from "./charcodehash.ts";

test("creates a hash", () => {
	expect(charcodehash("test")).toEqual(1127);
});

test("measures collisions for a long list of generated strings", () => {
	const seed = 12345;
	let currentSeed = seed;
	const random = () => {
		const x = Math.sin(currentSeed++) * 10000;
		return x - Math.floor(x);
	};

	const generateRandomString = (length: number) => {
		const chars =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let result = "";
		for (let i = 0; i < length; i++) {
			result += chars.charAt(Math.floor(random() * chars.length));
		}
		return result;
	};

	const count = 100000;
	const hashes = new Set<number>();
	let collisions = 0;

	for (let i = 0; i < count; i++) {
		const str = generateRandomString(10 + Math.floor(random() * 20));
		const hash = charcodehash(str);
		if (hashes.has(hash)) {
			collisions++;
		}
		hashes.add(hash);
	}

	// This gives roughly an idea of the distribution quality
	console.log(`Collisions out of ${count} random strings: ${collisions}`);
	expect(collisions).toMatchInlineSnapshot(`66544`);
});
