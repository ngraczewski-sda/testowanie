function divide(a, b) {
  if (b === 0) {
    throw "Divisor must be non-0 value";
  }

  return a / b;
}

export { divide };
