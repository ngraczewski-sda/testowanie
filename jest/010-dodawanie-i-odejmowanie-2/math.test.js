import { add, multiply, subtract } from "./math";

describe("math", () => {
  test.each`
    a     | b     | sum
    ${4}  | ${5}  | ${9}
    ${-5} | ${5}  | ${0}
    ${1}  | ${2}  | ${3}
    ${5}  | ${6}  | ${11}
    ${-1} | ${-2} | ${-3}
  `("add sums $a and $b to $sum", ({ a, b, sum }) => {
    const result = add(a, b);

    expect(result).toBe(sum);
  });

  test.each([
    { a: -1, b: -2, expectedValue: 1 },
    { a: 5, b: 3, expectedValue: 2 },
    { a: 2, b: -3, expectedValue: 5 },
    { a: -6, b: 3, expectedValue: -9 },
    { a: -10, b: -10, expectedValue: 0 },
  ])("subtract gives $expectedValue for $a - $b", ({ a, b, expectedValue }) => {
    const result = subtract(a, b);

    expect(result).toBe(expectedValue);
  });

  test.each([
    { a: -1, b: -2, expectedValue: 2 },
    { a: 5, b: 3, expectedValue: 15 },
    { a: 2, b: -3, expectedValue: -6 },
    { a: -6, b: 3, expectedValue: -18 },
    { a: -10, b: -10, expectedValue: 100 },
  ])("multiply gives $expectedValue for $a * $b", ({ a, b, expectedValue }) => {
    const result = multiply(a, b);

    expect(result).toBe(expectedValue);
  });
});
