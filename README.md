# Pokemon Battle Game

You will be implementing a Pokemon battle game using the Object Oriented Programming skills you've learned this week!

For those of you unfamiliar with Pokemon, you can think about it as people (trainers) who have pets (pokemon), that live inside tiny houses (pokeballs). Trainers can only hold a maximum 6 pokeballs.

These people are also a bit strange, and they get their pets into fights with other people's pets in the park for no reason at all...

> You can find some example data to use in [pokemon-data.md](pokemon-data.md)


### Data Structures

Below you will find a plan of what structures we think will be useful for the game. You will find that to begin with they are very clear as to what we want you to do, but as you progress they are more open to how you want to implement them.

## Pokemon (one class)

### Properties

- A Pokemon will need to have the following properties:
  - `name`: the name its given
  - `type`: the type the Pokemon is, it should default to "normal" (we'll add some more types later)
  - `hitPoints`: the amount of health the Pokemon has, represented as a number
  - `attackDamage`: the amount of damage a Pokemon can inflict (should be a number)
  - `move`: This is the move the Pokemon does when battling, this should default to "tackle"

 ### Methods

- `isEffectiveAgainst`
  - this will take as an argument a Pokemon and return a Boolean if the Pokemon is effective against the given Pokemon, "normal" Pokemon are not effective against anything
- `isWeakTo`
  - this will take as an argument a Pokemon and return a Boolean if this pokemon is weak to the given Pokemon
  - "normal" Pokemon are not weak to anything
- `takeDamage`
  - will take a number and reduce its health by the number given 
- `useMove`
  - will return the Pokemon's attackDamage
  - should also console log something like "PokemonX used PokemonX's move"
  - _don't worry about testing the console logs, but maybe have a think about how you may go about it_
- `hasFainted`
  - When a Pokemon's health is reduced to 0 they faint
  - hasFainted will return a Boolean based on whether the Pokemon has fainted
    
## Pokemon Types (3 classes that should extend Pokemon) -> Fire, Water, Grass

- `fire` pokemon are strong against grass, and weak against water.
- `grass` pokemon are strong against water, and weak against fire.
- `water` pokemon are strong against fire and weak against grass.
- The only difference should be that each Pokemon type will have different isEffectiveAgainst and isWeakTo

## Pokemon Species (4 classes each extending from the relevant class) -> Charmander, Squirtle, Bulbasaur, Rattata

- `Charmander` should be a `FirePokemon` and have its move be `"ember"`
- `Squirtle` should be a `WaterPokemon` and have its move be `"water gun"`
- `Bulbasaur` should be a `GrassPokemon` and have its move be `"vine whip"`
- `Rattata` should be a `Pokemon`

## Pokeball

`Pokeballs` are the containers for Pokemon. They are used in the game to catch pokemon and to release the Pokemon for battle.

Pokeball behaviours include:

- being able to store a Pokemon
- throw it to catch a Pokemon
- throw it to release it for battle
- check which Pokemon is in the Pokeball

### Methods

- `throw`
  -  can take a `Pokemon` as an argument. If the pokeball is empty it will capture the passed pokemon. If it isn't empty the user should not be allowed to capture a pokemon with it! The `throw` method should also console log something like ("you caught pokemonX's name")
  -  Additionally the method can be invoked with no argument. In this case the method should return the stored Pokemon (ready for battle). The `throw` method should  console log something like ("GO pokemonX's name!!") in this scenario. If the ball is empty then the user should be informed.
  
- `isEmpty`
  - should return a Boolean representing whether or not a Pokemon is stored inside it
  
- `contains`
  - should return the name of the Pokemon that is stored,
  - if the Pokeball is empty is should return "empty ..."
  
## Trainer

- A Trainer should have a belt property (you decide an appropriate data type) that should have 6 Pokeballs

### Methods

- `catch`
  - takes a Pokemon as an argument
  - it should use one of its empty Pokeball's `throw` method to catch the Pokemon
  - should do something if you don't have any empty Pokeballs, what and how is up to you
- `getPokemon`
  - takes the name of a Pokemon
  - will search for the the Pokemon with that name in the belt
  - use the Pokeball's throw to return that specific Pokemon
  
## Battle

- Finally, you will need a way to battle the Pokemon.
- The battle should take two trainers and the names of the Pokemon they wish to battle.

### Methods

- `fight`
  - this should take the Pokemon whose turn it is,
  - attack the defending Pokemon (deducting attacker's attack damage from the defender's hit points)
  - end their turn
  - should take each Pokemon's strengths and weaknesses into account
    - if a defender is strong against the attacking type, the attacking type's damage should be multiplied by 0.75.
    - if a defender is weak against the attacking type, the attacking type's damage should be multiplied by 1.25.
  - each attack should be followed by an attack message
    - The message will vary depending on the defender's weakness/strength.
  - if the defending Pokemon faints (depletes all hit points), the attacker wins.
  
## Making the game

Once you have all the necessary parts fully tested, make the game!

Using the [inquirer library](https://github.com/SBoudrias/Inquirer.js), build a command line application to play your Pokemon battle game. The game should be played using inputs and selections.

### Extra Requirements

- Implement a critical hit, that randomly awards Pokemon triple damage.
- Think about how you would test for the console logs, HINT: have a look at mock functions
- In the original Pokemon games, the victor was only declared once all of a trainer's Pokeballs contained unconscious Pokemon. Improve your battle function so take this into account.
- Trainers should be able to change Pokemon mid battle to adjust to changing circumstances. This should end the trainer's turn.
- Pokemon should have a selection of moves, stored in an array. Each move should modify the Pokemon's attack damage, and should be available a finite amount of times - determined by its PP (power points). When a move is used, it loses a power point. When there are no more power points for that move, it cannot be used. When none of that Pokemon's moves can be used, it 'struggles' by default. This damages the attacker for its base attack value, rather than the defender.
# Pokemon-Battler
Welcome to pokemon-battler, a javascript command line interface pokemon game, where you can choose your pokemon, and battle them against an AI.
The game allows you to pick your starting pokemon, and then puts you straight into the action, where you will have to pick from a variety of moves specific to your pokemon. You will have to outwit the enemy, and keep your pokemon alive.
## Setup
- Setup Javascript and node.js on your machine (This repo was coded using javascript v18.12.1)
- Download the repo
- navigate to the root directory of the pokemon battler repo  
- run `npm init` in your terminal
- install inquirer version 8: `npm install inquirer @8.0.0` WARNING: You must install version 8, and not a later version
- to start the game, run the following comand `node pokemon-battle-game/start-game.js`
- The game will start in your terminal, Have fun!

## Info
This game was built using javascript, and following a test driven development pattern, it heavily utilises the object oriented programming framework to code the pokemon and the battles. The game was built using a modular and class based format to be easily extended, and modified to add new functionality, or new pokemon.  
The repo uses Inquirer.js. A javascript library that allows the user to interact with programs using the terminal. It uses asynchronous coding to allow user input, wait for it to be recieved, and work with the return values.

## Testing
The tests can be run by installing jest: `npm install jest`  
After installing javascript and jest, you must update the package.json file, under "scripts", change "test" to `"jest"`  
You will then be able to run `npm test` to run the tests  
The jest version used in this repo was 29.5.0

### Example game:
```
---------PLAYER 1---------
? Choose your attack... Tail Whip
Rattata used Tail Whip for 16 damage. 
Squirtle has 16HP.
---------PLAYER 2---------
Squirtle used Water Pulse for 8.25 damage. It's not very effective!
Rattata has 20HP.
---------PLAYER 1---------
? Choose your attack... (Use arrow keys)
❯ Hyper Fang 
  Tackle 
  Bite 
  Tail Whip 
```