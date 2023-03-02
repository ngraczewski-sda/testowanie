import { Doorman } from "./doorman";

describe("Doorman", () => {
  describe("greet", () => {
    it("should greet person", () => {
      const doorman = new Doorman();

      const result = doorman.greet("Bogdan");

      expect(result).toBe("Hello Bogdan!");
    });
  });

  describe("tellMeWhomYouMet", () => {
    it("should tell about meeting nobody", () => {
      const doorman = new Doorman();

      const result = doorman.tellMeWhomYouMet();

      expect(result).toBe(`I've met nobody.`);
    });

    it("should tell about meeting one person", () => {
      const doorman = new Doorman();

      doorman.greet("Norman");

      const result = doorman.tellMeWhomYouMet();

      expect(result).toBe(`I've met Norman.`);
    });

    it("should tell about meeting two people", () => {
      const doorman = new Doorman();

      doorman.greet("Anna");
      doorman.greet("Jadwiga");

      const result = doorman.tellMeWhomYouMet();

      expect(result).toBe(`I've met Anna and Jadwiga.`);
    });

    it("should tell about meeting three or more people", () => {
      const doorman = new Doorman();

      doorman.greet("Anna");
      doorman.greet("Jadwiga");
      doorman.greet("Alan");

      const result = doorman.tellMeWhomYouMet();

      expect(result).toBe(`I've met Anna, Jadwiga and Alan.`);
    });
  });
});
