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
		// biome-ignore lint/style/noNonNullAssertion: index always in range
		value += source.codePointAt(index)! * (index + 1);
	}

	return Math.round(value);
}
