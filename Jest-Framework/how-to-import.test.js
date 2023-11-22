// const { getOrdinalNumber, test } = require("./get-ordinal-number");
const { getOrdinalNumber, testing } = require("./how-to-export");

test("converts any number ends with 1 to have st as a suffix", function () {
  let input = 91;
  let currentOutput = getOrdinalNumber(input);
  let expectedOutput = `${input}st`;

  expect(currentOutput).toBe(expectedOutput);
});

test("test", function () {
  let currentOutput = testing("altom");

  expect(currentOutput).toBe("altom");
});
