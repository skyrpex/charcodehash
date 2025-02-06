import assert from "node:assert";

/**
 * Hashes the given text into a number.
 *
 * @param source The text to hash
 * @returns Hash value as a number
 */
export function charcodehash(source: string): number {
	const sourceLength = source.length;

	let value = 0;
	for (let index = 0; index < sourceLength; ++index) {
		const codePoint = source.codePointAt(index);
		assert(codePoint);
		value += codePoint * (index + 1);
	}

	return Math.round(value);
}
