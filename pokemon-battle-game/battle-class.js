class Battle {

  fight(attacker, defender, move,
    attackingPokemon = attacker.belt[0].storedPokemon,
    defendingPokemon = defender.belt[0].storedPokemon) {

    let damageDealt = attackingPokemon.useMove(move, defendingPokemon.isWeakTo(attackingPokemon))
    defendingPokemon.takeDamage(damageDealt);

    if (defendingPokemon.hasFainted()) {
      console.log(
        `${attacker.name} has defeated ${defender.name}! ${attacker.name} wins the battle!`
      );

      return true;

    } else {
      console.log(
        `${defendingPokemon.name} has ${defendingPokemon.hitPoints}HP.`
      );
      
      return false
    }
  }
}

module.exports = {
  Battle
};
