const { Doorman } = require("./doorman");

describe("Doorman", () => {
  it("should greet a person", () => {
    const doorman = new Doorman();

    const result = doorman.greet("Anka");

    expect(result).toBe("Hello Anka!");
  });

  describe("tellMeWhoYouMet", () => {
    it("should tell about nobody", () => {
      const doorman = new Doorman();

      const result = doorman.tellMeWhomYouMet();

      expect(result).toBe("I've met nobody.");
    });

    it("should tell about single person", () => {
      const doorman = new Doorman();

      doorman.greet("Anka");

      const result = doorman.tellMeWhomYouMet();

      expect(result).toBe("I've met Anka.");
    });

    it("should tell about two people", () => {
      const doorman = new Doorman();

      doorman.greet("Anka");
      doorman.greet("Dawid");

      const result = doorman.tellMeWhomYouMet();

      expect(result).toBe("I've met Anka and Dawid.");
    });

    it("should tell about three people", () => {
      const doorman = new Doorman();

      doorman.greet("Anka");
      doorman.greet("Dawid");
      doorman.greet("Alicja");

      const result = doorman.tellMeWhomYouMet();

      expect(result).toBe("I've met Anka, Dawid and Alicja.");
    });
  });
});
