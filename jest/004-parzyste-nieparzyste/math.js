function isOdd(a) {
  return a % 2 !== 0;
}

function isEven(a) {
  return a % 2 === 0;
}

function isDivisorOf(a, b) {
  return b % a === 0;
}

export { isOdd, isEven, isDivisorOf };
