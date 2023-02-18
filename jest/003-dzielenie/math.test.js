import { divide } from "./math";

describe("divide", () => {
  it("should divide by non-0 value", () => {
    const result = divide(4, 2);

    expect(result).toBe(2);
  });

  it("should throw exception if dividing by 0", () => {
    expect(() => {
      divide(2, 0);
    }).toThrow("Divisor must be non-0 value");
  });
});
