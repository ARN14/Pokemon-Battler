const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  pokemonList,
  pokemonStrings } = require(`${__dirname}/pokemon-list`);


const firstQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      default: "Ash",
    },
    {
      type: "list",
      name: "pokemon",
      message: "Which pokemon do you choose?",
      choices: pokemonStrings,
    },
    {
      type: "input",
      name: "rivalName",
      message: "What is your rivals name?",
      default: "Garry",
    },
  ];

module.exports = firstQuestions;