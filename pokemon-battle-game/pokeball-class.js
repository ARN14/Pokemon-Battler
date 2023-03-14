class Pokeball {
    constructor(storedPokemon = {}, ownerName = "Trainer") {
      this.storedPokemon = storedPokemon;
      this.ownerName = ownerName;
    }
  
    throw(pokemon) {
      if (!pokemon) {

        if (this.isEmpty()) {
          console.log("There is no Pokemon in your Pokeball");

        } else {
          console.log(`Go ${this.storedPokemon.name}!`);
          const thrownPokemon = this.storedPokemon;
          this.storedPokemon = {};
          return thrownPokemon;
        }

      } else {

        if (this.isEmpty()) {
          this.storedPokemon = pokemon;
          console.log(`${this.ownerName} caught ${this.storedPokemon.name}!`);
        }
      }
    }
  

    isEmpty() {
      return Object.keys(this.storedPokemon).length === 0;
    }
  

    contains() {
      if (this.isEmpty()) {
        return "empty";
      } else {
        return this.storedPokemon.name;
      }
    }
  }


module.exports = { Pokeball };