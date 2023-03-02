import { fizzBuzz } from "./index";

describe("fizzBuzz", () => {
  it("should return Fizz if number is multiplication of 3", () => {
    const result = fizzBuzz(27);

    expect(result).toBe("Fizz");
  });

  it("should return Buzz if number is multiplication of 5", () => {
    const result = fizzBuzz(20);

    expect(result).toBe("Buzz");
  });

  it("should return FizzBuzz if number is multiplication of both 3 and 5", () => {
    const result = fizzBuzz(15);

    expect(result).toBe("FizzBuzz");
  });

  it("should return empty string if number is not a multiplication of 3 or 5", () => {
    const result = fizzBuzz(14);

    expect(result).toBe("");
  });
});
