const inquirer = require("inquirer");
const { Pokemon } = require(`${__dirname}/pokemon-class`);
const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  pokemonList,
  pokemonStrings } = require(`${__dirname}/pokemon-list`);
const { Battle } = require(`${__dirname}/battle-class`);
const { Trainer } = require(`${__dirname}/trainer-class`);
const { Pokeball } = require(`${__dirname}/pokeball-class`);
const firstQuestions = require(`${__dirname}/questions`)



function playGame() {
  console.log("Welcome to the world of Pokemon!");
  inquirer
    .prompt(firstQuestions)
    .then(function (firstAnswers) {
      const player = new Trainer(firstAnswers.name);
      let choiceIndex = pokemonStrings.indexOf(firstAnswers.pokemon)
      let playerPokemon = new pokemonList[choiceIndex]();

      player.catch(playerPokemon);

      const rival = new Trainer(firstAnswers.rivalName);
      const rivalPokemon = new pokemonList[Math.floor(Math.random() * pokemonList.length)]();
      rival.catch(rivalPokemon);

      const firstGym = new Battle();

      battle();

      function battle() {
        console.log("---------PLAYER 1---------");
        inquirer
          .prompt([
            {
              type: "list",
              name: "attack",
              message: "Choose your attack...",
              choices: playerPokemon.movesList.map((move) => move.name)
            },
          ])
          .then(function (battleAnswers) {
            chosenMove = playerPokemon.movesList.filter((move) => move.name === battleAnswers.attack)[0];
            hasEnded = firstGym.fight(player, rival, chosenMove);
            if (!hasEnded) {
              console.error("---------PLAYER 2---------");
              hasEnded = firstGym.fight(
                rival,
                player,
                rivalPokemon.movesList[Math.floor(Math.random() * rivalPokemon.movesList.length)]
              );
            }
            if (!hasEnded) battle();
          });
      }
    })
};

playGame();
