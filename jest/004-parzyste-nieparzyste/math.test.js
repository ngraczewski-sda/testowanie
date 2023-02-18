const { isEven, isOdd, isDivisorOf } = require("./math");

describe("math", () => {
  describe("isEven", () => {
    it("should return true for even number", () => {
      const result = isEven(2);

      expect(result).toBe(true);
    });

    it("should return false for odd number", () => {
      const result = isEven(1);

      expect(result).toBe(false);
    });
  });

  describe("isOdd", () => {
    it("should return true for odd number", () => {
      const result = isOdd(1);

      expect(result).toBe(true);
    });

    it("should return false for even number", () => {
      const result = isOdd(2);

      expect(result).toBe(false);
    });
  });

  describe("isDivisorOf", () => {
    it("should return true for number b dividable by a", () => {
      const result = isDivisorOf(3, 27);

      expect(result).toBe(true);
    });

    it("should return false for number b not dividable by a", () => {
      const result = isDivisorOf(4, 27);

      expect(result).toBe(false);
    });
  });
});
