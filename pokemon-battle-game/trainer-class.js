const { Pokeball } = require(`${__dirname}/pokeball-class`)


class Trainer {
    constructor(name = "Trainer", emptyPokeballs = 6) {
      this.name = name;
      this.belt = [];
      this.emptyPokeballs = emptyPokeballs;
  
      for (let i = 0; i < this.emptyPokeballs; i++) {
        this.belt.push(new Pokeball({}, this.name));
      }
    }
  
  
    catch(pokemon) {
      for (let i = 0; i < this.belt.length; i++) {
        if (this.belt[i].isEmpty()) {
          this.belt[i].throw(pokemon);
          this.emptyPokeballs--;
          return;
        }
      }
      console.log(
        `You failed to catch ${pokemon.name}. You are out of pokeballs!`
      );
    }
  
  
    getPokemon(pokemonNickname) {
      for (let i = 0; i < this.belt.length; i++) {
        if (this.belt[i].storedPokemon.name === pokemonNickname) {
          return this.belt[i].throw();
        }
      }
      console.log(`${pokemonNickname} is not in your party.`);
    }
  }

  
module.exports = { Trainer }