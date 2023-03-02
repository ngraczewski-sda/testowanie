function fizzBuzz(a) {
  let message = "";

  if (a % 3 === 0) {
    message += "Fizz";
  }

  if (a % 5 === 0) {
    message += "Buzz";
  }

  return message;
}

export { fizzBuzz };
