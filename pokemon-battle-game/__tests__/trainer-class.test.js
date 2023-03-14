const { Trainer } = require(`${__dirname}/../trainer-class`);
const { Pokeball } = require(`${__dirname}/../pokeball-class`);
const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata } = require(`${__dirname}/../pokemon-list`)

  describe("Trainer", () => {
    let consoleSpy = null;


    beforeEach(function () {
        consoleSpy = jest.spyOn(console, "log");
    });


    afterEach(function () {
        consoleSpy.mockRestore();
    });


    test("should return an object", () => {
      const jim = new Trainer();

      expect(typeof jim).toBe("object");
    });

  
    test("should return corrct properties", () => {
      const jim = new Trainer("Jim", 1);

      expect(jim.name).toBe("Jim");
      expect(typeof jim.belt).toEqual("object");
    });

  
    test("catch method should update belt with 1 correct pokemon inside belt", () => {
      const jim = new Trainer("Jim");
      const charmander = new Charmander("Charmander", 44, 17);

      jim.catch(charmander);

      expect(jim.belt[0] instanceof Pokeball).toBe(true);
      expect(jim.belt[0].storedPokemon.name).toBe("Charmander");
      expect(jim.emptyPokeballs).toBe(5);
    });


    test("catch method should update belt with multiple correct pokemon inside belt", () => {
      const jim = new Trainer("Trainer", 3);
      const charmander = new Charmander();
      const squirtle = new Squirtle();
      const rattata = new Rattata();
      const ball1 = new Pokeball(charmander);
      const ball2 = new Pokeball(squirtle);
      const ball3 = new Pokeball(rattata);

      jim.catch(charmander);
      jim.catch(squirtle);
      jim.catch(rattata);

      expect(jim.belt).toEqual([ball1, ball2, ball3]);
      expect(jim.emptyPokeballs).toBe(0);
    });


    test("catch method should log an error message when no pokeballs are available", () => {
      const jim = new Trainer("Trainer", 2);
      const charmander = new Charmander();
      const rattata = new Rattata();
      const bulbasaur = new Bulbasaur();
      const ball1 = new Pokeball(charmander);
      const ball2 = new Pokeball(rattata);

      jim.catch(charmander);
      jim.catch(rattata);

      expect(jim.emptyPokeballs).toBe(0);

      jim.catch(bulbasaur);

      expect(jim.emptyPokeballs).toBe(0);
      expect(jim.belt).toEqual([ball1, ball2]);
      expect(consoleSpy).toHaveBeenCalledWith(
        "You failed to catch Bulbasaur. You are out of pokeballs!"
      );
    });


    test("getPokemon method should search the belt for a pokemon by it's name property and throw it", () => {
      const jim = new Trainer("Jim");
      const charmander = new Charmander();

      jim.catch(charmander);

      expect(jim.getPokemon("Charmander")).toBe(charmander);
    });


    test("getPokemon method should return an error message when the pokemon cannot be found", () => {
      const jim = new Trainer("Jim");

      jim.getPokemon("Charmander");

      expect(consoleSpy).toHaveBeenCalledWith(
        "Charmander is not in your party."
      );
    });
  });
