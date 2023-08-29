describe("Basic Tests", function () {
	const { strictEqual } = require('chai').assert;

	function doTest(array, expected) {
		const log = `for array ${JSON.stringify(array)}\n`;
		const actual = estSubsets(array);
		strictEqual(actual, expected, log);
	}

	it("Simple Cases", function () {
		doTest([1, 2, 3, 4], 15);
		doTest(['a', 'b', 'c', 'd', 'd'], 15);
		doTest([2, 3, 4, 5, 5, 6, 6, 7, 8, 8], 127);
		doTest(['a', 'z', 'z', 'z', 'b', 'j', 'f', 'k', 'b', 'd', 'j', 'j', 'n', 'm', 'm'], 511);
		doTest([1, 1, 1, 1, 1, 1, 1, 1], 1);
		doTest([], 0);
	});
});