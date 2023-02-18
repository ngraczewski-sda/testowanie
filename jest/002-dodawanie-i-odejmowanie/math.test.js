import { add, multiply, subtract } from "./math";

it("should add numbers", () => {
  const result = add(1, 2);

  expect(result).toBe(3);
});

it("should subtract numbers", () => {
  const result = subtract(2, 1);

  expect(result).toBe(1);
});

it("should multiply numbers", () => {
  const result = multiply(2, 3);

  expect(result).toBe(6);
});
