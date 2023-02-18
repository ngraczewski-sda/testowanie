const { calculate } = require("./math");

describe("calculate", () => {
  it("should add numbers", () => {
    const result = calculate("+", 1, 2);

    expect(result).toBe(3);
  });

  it("should subtract numbers", () => {
    const result = calculate("-", 3, 2);

    expect(result).toBe(1);
  });

  it("should multiply numbers", () => {
    const result = calculate("*", 3, 4);

    expect(result).toBe(12);
  });

  it("should divide numbers", () => {
    const result = calculate("/", 4, 2);

    expect(result).toBe(2);
  });

  it("should throw exception if dividing by 0", () => {
    expect(() => {
      calculate("/", 4, 0);
    }).toThrow("Divisor must be non-0 value");
  });

  it("should throw exception for unknown operation", () => {
    expect(() => {
      calculate("%", 4, 2);
    }).toThrow("Unknown operation");
  });
});
