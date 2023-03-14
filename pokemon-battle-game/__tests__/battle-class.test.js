const { Rattata } = require(`${__dirname}/../pokemon-list`);
const { Trainer } = require(`${__dirname}/../trainer-class`);
const { Battle } = require(`${__dirname}/../battle-class`);


describe("Battle", () => {
    let consoleSpy = null;


    beforeEach(function () {
        consoleSpy = jest.spyOn(console, "log");
    });


    afterEach(function () {
        consoleSpy.mockRestore();
    });


    test("should return a bool", () => {
        const jim = new Trainer();
        const rattata = new Rattata();
        jim.catch(rattata);

        const battle = new Battle();
        result = battle.fight(jim, jim, rattata.movesList[0])
        expect(typeof result).toEqual("boolean")
    });


    test("returns false when pokemon has not fainted", () => {
        const jim = new Trainer();
        const rattata = new Rattata();
        jim.catch(rattata);

        const battle = new Battle();
        result = battle.fight(jim, jim, rattata.movesList[0])
        expect(result).toEqual(false)
    });


    test("decreases damage of defending pokemon", () => {
        const jim = new Trainer();
        const rattata = new Rattata();
        jim.catch(rattata);

        const testRattata = new Rattata();
        testRattata.hitPoints = rattata.hitPoints;
        expect(rattata.hitPoints < testRattata.hitPoints).toEqual(false);

        const battle = new Battle();
        result = battle.fight(jim, jim, rattata.movesList[0])
        expect(rattata.hitPoints < testRattata.hitPoints).toEqual(true);
    });


    test("logs message when hit lands", () => {
        const jim = new Trainer();
        const rattata = new Rattata();
        jim.catch(rattata);

        const battle = new Battle();
        result = battle.fight(jim, jim, rattata.movesList[0])
        expect(consoleSpy).toHaveBeenCalledWith(`Rattata has ${rattata.hitPoints}HP.`);
    });


    test("returns true when pokemon has fainted", () => {
        const jim = new Trainer();
        const rattata = new Rattata();
        jim.catch(rattata);
        rattata.hitPoints = 1;

        const battle = new Battle();
        result = battle.fight(jim, jim, rattata.movesList[0])
        expect(result).toEqual(true);
    });


    test("logs message when pokemon has fainted", () => {
        const jim = new Trainer("Jim");
        const trainer = new Trainer()
        const rattata = new Rattata();
        const trainerRattata = new Rattata();

        jim.catch(rattata);
        trainer.catch(trainerRattata);
        trainerRattata.hitPoints = 1;

        const battle = new Battle();
        result = battle.fight(jim, trainer, rattata.movesList[0])
        expect(consoleSpy).toHaveBeenCalledWith(`Jim has defeated Trainer! Jim wins the battle!`);
    });
});