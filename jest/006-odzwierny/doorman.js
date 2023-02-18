class Doorman {
  constructor() {
    this.names = [];
  }

  greet(name) {
    this.names.push(name);

    return `Hello ${name}!`;
  }

  tellMeWhomYouMet() {
    const { names } = this;

    if (!names.length) {
      return "I've met nobody.";
    }

    if (names.length === 1) {
      return `I've met ${names[0]}.`;
    }

    return `I've met ${names.slice(0, -1).join(", ")} and ${
      names.slice(-1)[0]
    }.`;
  }
}

export { Doorman };
