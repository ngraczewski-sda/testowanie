import { calculate } from "./math";

describe("calculate", () => {
  it("should add numbers", () => {
    const result = calculate("+", 1, 2);

    expect(result).toBe(3);
  });

  it("should subtract numbers", () => {
    const result = calculate("-", 2, 1);

    expect(result).toBe(1);
  });

  it("should multiply numbers", () => {
    const result = calculate("*", 3, 4);

    expect(result).toBe(12);
  });

  describe("divide", () => {
    it("should divide by non-0 number", () => {
      const result = calculate("/", 4, 2);

      expect(result).toBe(2);
    });

    it("should throw exception if trying to divide by 0", () => {
      const test = () => {
        calculate("/", 4, 0);
      };

      expect(test).toThrow("Divisor must be non-0 value");
    });
  });

  it("should throw exception if an unknown operation is given", () => {
    const test = () => {
      calculate("^", 1, 2);
    };

    expect(test).toThrow("Unknown operation");
  });
});
