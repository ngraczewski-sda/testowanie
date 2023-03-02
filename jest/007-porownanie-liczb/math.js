function compare(a, b) {
  if (a > b) {
    return `${a} is greater than ${b}`;
  }

  if (a < b) {
    return `${a} is smaller than ${b}`;
  }

  return `${a} is equal to ${b}`;
}

export { compare };
