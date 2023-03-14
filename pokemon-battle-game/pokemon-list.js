const { Pokemon } = require(`${__dirname}/pokemon-class`);

class Charmander extends Pokemon {
    constructor(name = "Charmander", hitPointsModifier = 0, attackDamageModifier = 0) {
        super(name, "Fire", 60 + hitPointsModifier, 15 + attackDamageModifier, [
            {name: "Ember", isElemental: true},
            {name: "Fire Spin", isElemental: true},
            {name: "Bite", isElemental: false},
            {name: "Tail Whip", isElemental: false}
        ]);
    }
}


class Squirtle extends Pokemon {
    constructor(name = "Squirtle", hitPointsModifier = 0, attackDamageModifier = 0) {
        super(name, "Fire", 60 + hitPointsModifier, 14 + attackDamageModifier, [
            {name: "Water Gun", isElemental: true},
            {name: "Water Pulse", isElemental: true},
            {name: "Bite", isElemental: false},
            {name: "Tail Whip", isElemental: false}
        ]);
    }
}


class Bulbasaur extends Pokemon {
    constructor(name = "Bulbasaur", hitPointsModifier = 0, attackDamageModifier = 0) {
        super(name, "Fire", 60 + hitPointsModifier, 14 + attackDamageModifier, [
            {name: "Vine Whip", isElemental: true},
            {name: "Razor Leaf", isElemental: true},
            {name: "Bite", isElemental: false},
            {name: "Tail Whip", isElemental: false}
        ]);
    }
}


class Rattata extends Pokemon {
    constructor(name = "Rattata", hitPointsModifier = 0, attackDamageModifier = 0) {
        super(name, "Fire", 50 + hitPointsModifier, 17 + attackDamageModifier, [
            {name: "Hyper Fang", isElemental: false},
            {name: "Tackle", isElemental: false},
            {name: "Bite", isElemental: false},
            {name: "Tail Whip", isElemental: false}
        ]);
    }
}


pokemonList = [Charmander, Squirtle, Bulbasaur, Rattata]
pokemonStrings = ["Charmander", "Squirtle", "Bulbasaur", "Rattata"]

module.exports = { Charmander, Squirtle, Bulbasaur, Rattata, pokemonList, pokemonStrings }