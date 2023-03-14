const { Pokemon } = require(`${__dirname}/../pokemon-class`);

describe("Pokemon", () => {

    describe("PROPERTIES", () => {
        test("returns an object", () => {
            const testPokemon = new Pokemon("", "", 1, 1, []);
            expect(typeof testPokemon).toBe("object");
        });


        test("returns correct properties", () => {
            const eevee = new Pokemon("Eevee", "Normal", 55, 18, []);

            expect(eevee.name).toBe("Eevee");
            expect(eevee.type).toBe("Normal");
            expect(eevee.hitPoints).toBe(55);
            expect(eevee.attackDamage).toBe(18);
            expect(eevee.movesList).toEqual([]);
        });
    })


    describe("isWeakTo", () => {
        test("isWeakTo returns correctly", () => {
            const testPokemon1 = new Pokemon("test1", "Fire", 100, 10, []);
            const testPokemon2 = new Pokemon("test2", "Water", 100, 10, []);
            expect(testPokemon1.isWeakTo(testPokemon2)).toBe(true);
        })
    })


    describe("takeDamage", () => {
        test("takeDamage reduces hitPoints by the correct amount", () => {
            const testPokemon1 = new Pokemon("test1", "Fire", 100, 10, []);
            initialHitPoints = testPokemon1.hitPoints;
            damageAmount = 15

            testPokemon1.takeDamage(damageAmount);
            damagedHitPoints = testPokemon1.hitPoints;

            expect(damagedHitPoints === initialHitPoints - damageAmount).toBe(true);
        })
    })


    describe("useMove", () => {
        let consoleSpy = null;


        beforeEach(function () {
            consoleSpy = jest.spyOn(console, "log");
        });


        afterEach(function () {
            consoleSpy.mockRestore();
        });


        test("useMove returns correctly", () => {
            const testPokemon1 = new Pokemon("test1", "Fire", 100, 10, []);
            expect(typeof testPokemon1.useMove({ name: "Burn", isElemental: true }, true)).toBe("number");
        })


        test("useMove accepts a move object and logs damage to the console", () => {
            const eevee = new Pokemon("Eevee", "Normal", 55, 18, []);

            let eeveeDamage = eevee.useMove({ name: "Headbutt", isElemental: false }, true);

            expect(consoleSpy).toHaveBeenCalled();
            expect(consoleSpy).toHaveBeenCalledWith(
                `Eevee used Headbutt for ${eeveeDamage} damage. `
            );
        });


        test("useMove logs when moves are effective", () => {
            const eevee = new Pokemon("Eevee", "Normal", 55, 18, []);

            let eeveeDamage = eevee.useMove({ name: "Headbutt", isElemental: true }, true);

            expect(consoleSpy).toHaveBeenCalled();
            expect(consoleSpy).toHaveBeenCalledWith(
                `Eevee used Headbutt for ${eeveeDamage} damage. It's super effective!`
            );
        });


        test("useMove logs when moves are not effective", () => {
            const eevee = new Pokemon("Eevee", "Normal", 55, 18, []);

            let eeveeDamage = eevee.useMove({ name: "Headbutt", isElemental: true }, false);

            expect(consoleSpy).toHaveBeenCalled();
            expect(consoleSpy).toHaveBeenCalledWith(
                `Eevee used Headbutt for ${eeveeDamage} damage. It's not very effective!`
            );
        });
    })


    describe("hasFainted", () => {
        test("should return a boolean based on whether the pokemon has fainted", () => {
            const eevee = new Pokemon("Eevee", "Normal", 55, 18, []);
            const squirtle = new Pokemon("Squirtle", "Water", 44, 16, []);

            expect(eevee.hasFainted()).toBe(false);
            expect(squirtle.hasFainted()).toBe(false);

            eevee.takeDamage(50);
            squirtle.takeDamage(50);

            expect(eevee.hasFainted()).toBe(false);
            expect(squirtle.hasFainted()).toBe(true);

            eevee.takeDamage(50);
            expect(eevee.hasFainted()).toBe(true);
        });
    });

})


