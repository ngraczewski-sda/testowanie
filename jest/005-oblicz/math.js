function calculate(operator, a, b) {
  switch (operator) {
    case "+": {
      return a + b;
    }
    case "-": {
      return a - b;
    }
    case "*": {
      return a * b;
    }
    case "/": {
      if (b === 0) {
        throw "Divisor must be non-0 value";
      }
      return a / b;
    }
    default: {
      throw "Unknown operation";
    }
  }
}

export { calculate };
