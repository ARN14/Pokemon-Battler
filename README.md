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