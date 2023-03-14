const {
    Charmander,
    Rattata
    } = require(`${__dirname}/../pokemon-list`);
const { Pokeball } = require(`${__dirname}/../pokeball-class`);


describe("Pokeball", () => {
    let consoleSpy = null;


    beforeEach(function () {
        consoleSpy = jest.spyOn(console, "log");
    });


    afterEach(function () {
        consoleSpy.mockRestore();
    });


    test("contains() should return a string ", () => {
      const ball = new Pokeball();
      expect(typeof ball.contains()).toBe("string");
      expect(ball.contains()).toBe("empty");
    });


    test("isEmpty should return boolean whether or not pokemon is stored inside", () => {
      const ball = new Pokeball();
      expect(ball.isEmpty()).toBe(true);
    });


    test("throw method used on a pokemon, contains should have name of the pokemon", () => {
      const ball = new Pokeball();

      const charmander = new Charmander("Charmander", 44, 17);

      ball.throw(charmander);

      expect(ball.contains()).toBe("Charmander");
    });


    test("throw method should not capture a pokemon when its full", () => {
      const ball = new Pokeball();

      const charmander = new Charmander("Charmander", 44, 17);
      const rattata = new Rattata("Rattata", 50, 15);

      ball.throw(charmander);
      ball.throw(rattata);

      expect(ball.contains()).toBe("Charmander");
    });


    test("throw method should log a message when a pokemon is captured", () => {
      const ball = new Pokeball();

      const charmander = new Charmander("Charmander", 44, 17);

      ball.throw(charmander);

      expect(consoleSpy).toHaveBeenCalledWith(`Trainer caught Charmander!`);
    });


    test("when throw() is called, and stored pokemon is empty, should log message to user", () => {
      const ball = new Pokeball();

      ball.throw();

      expect(consoleSpy).toHaveBeenCalledWith(
        "There is no Pokemon in your Pokeball"
      );
    });


    test("when throw() is called, with a stored pokemon, should log message to user", () => {
      const ball = new Pokeball();
      const charmander = new Charmander("Charmander", 44, 17);
      //capture pokemon
      ball.throw(charmander);
      //release pokemon
      ball.throw();

      expect(consoleSpy).toHaveBeenCalledTimes(2);
      expect(consoleSpy).toHaveBeenCalledWith("Trainer caught Charmander!");
      expect(consoleSpy).toHaveBeenCalledWith("Go Charmander!");
    });


    test('"throw to capture, throw to release, throw to capture again"', () => {
      const ball = new Pokeball();
      const charmander = new Charmander("Charmander", 44, 17);
      const rattata = new Rattata("Rattata", 50, 15);

      //capture charmander
      ball.throw(charmander);
      expect(ball.contains()).toBe("Charmander");

      //release charmander
      ball.throw();
      expect(ball.contains()).toBe("empty");

      //capture rattata
      ball.throw(rattata);
      expect(ball.contains()).toBe("Rattata");
    });
  });
