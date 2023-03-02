import { isDivisorOf, isEven, isOdd } from "./math";

describe("math", () => {
  describe("isEven", () => {
    it("should return true for even numbers", () => {
      const result = isEven(2);

      expect(result).toBe(true);
    });

    it("should return false for odd numbers", () => {
      const result = isEven(1);

      expect(result).toBe(false);
    });
  });

  describe("isOdd", () => {
    it("should return true for odd numbers", () => {
      const result = isOdd(1);

      expect(result).toBe(true);
    });

    it("should return false for even numbers", () => {
      const result = isOdd(2);

      expect(result).toBe(false);
    });
  });

  describe("isDivisorOf", () => {
    it("should return true if a is divisor of b", () => {
      const result = isDivisorOf(3, 27);

      expect(result).toBe(true);
    });

    it("should return false if a is not a divisor of b", () => {
      const result = isDivisorOf(4, 25);

      expect(result).toBe(false);
    });
  });
});

it.each([1, 3, 5])("isOdd should return true for %i", (a) => {
  const result = isOdd(a);
  expect(result).toBe(true);
});

it.each([
  { value: 1, odd: true },
  { value: 2, odd: false },
  { value: 3, odd: true },
])("isOdd should $odd true for $value", ({ value, odd }) => {
  const result = isOdd(value);
  expect(result).toBe(odd);
});
