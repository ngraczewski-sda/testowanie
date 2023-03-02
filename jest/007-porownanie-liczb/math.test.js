import { compare } from "./math";

describe("compare", () => {
  it("should return message if a is greater than b", () => {
    const result = compare(6, 4);

    expect(result).toBe("6 is greater than 4");
  });

  it("should return message if a is smaller than b", () => {
    const result = compare(4, 6);

    expect(result).toBe("4 is smaller than 6");
  });

  it("should return message if a is equal to b", () => {
    const result = compare(4, 4);

    expect(result).toBe("4 is equal to 4");
  });
});
