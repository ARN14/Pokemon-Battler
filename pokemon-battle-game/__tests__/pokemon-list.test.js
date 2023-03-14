const { Charmander, pokemonList } = require(`${__dirname}/../pokemon-list`)

describe("pokemon-list", () => {
    test("Subclasses interact with parent class correctly and have correct properties", () => {
        const testPokemon1 = new pokemonList[0]("Charmander", 1, 1);
        expect(testPokemon1.name).toBe("Charmander");
        expect(testPokemon1.type).toBe("Fire");
        expect(testPokemon1.hitPoints).toBe(61);
        expect(testPokemon1.attackDamage).toBe(16);
        expect(testPokemon1.movesList).toEqual([
            {name: "Ember", isElemental: true},
            {name: "Fire Spin", isElemental: true},
            {name: "Bite", isElemental: false},
            {name: "Tail Whip", isElemental: false}
        ]);
    })
})