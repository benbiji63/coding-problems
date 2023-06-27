const strictEqual = require('chai').assert.strictEqual;

describe("Tests", () => {
	it("test", () => {
		strictEqual(toDayOfYear([25, 12, 2017]), 359,);
		strictEqual(toDayOfYear([31, 10, 1991]), 304);
		strictEqual(toDayOfYear([1, 5, 3000]), 121);
		strictEqual(toDayOfYear([14, 3, 1066]), 73);
		strictEqual(toDayOfYear([5, 11, 1604]), 310);

		strictEqual(toDayOfYear([31, 12, 2000]), 366);
		strictEqual(toDayOfYear([31, 12, 2001]), 365);
		strictEqual(toDayOfYear([31, 12, 2004]), 366);
		strictEqual(toDayOfYear([31, 12, 2100]), 365);
	});
});