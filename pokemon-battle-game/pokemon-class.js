pokemonTypes = ["Normal", "Fire", "Grass", "Water"]
pokemonWeaknesses = {
  Normal: ["Fighting"],
  Fire: ["Water", "Ground", "Rock"],
  Water: ["Electric", "Grass"],
  Grass: ["Fire", "Ice"]
}

class Pokemon {
  constructor(name, type, hitPoints, attackDamage, movesList) {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.movesList = movesList;
  }


  isWeakTo(pokemon) {
    return pokemonWeaknesses[this.type].includes(pokemon.type)
  }


  takeDamage(num) {
    this.hitPoints -= num;
  }


  useMove(move, isEffective) {
    let hitChance = Math.ceil(Math.random()) > 0.89 ? true : false

    if (!hitChance) {
      console.log(`${this.name}'s attack missed!`);
      return 0
    }

    let effectiveMessage = ""
    let rngModifier = Math.random() < 0.5 ? -1 : 1;
    let modifier = Math.round(Math.random() * 3 * rngModifier)
    let damage = this.attackDamage + modifier;

    if (move.isElemental && isEffective) {
      Math.round(damage *= 1.25)
      effectiveMessage = `It's super effective!`
    } else if (move.isElemental && !isEffective) {
      Math.round(damage *= 0.75)
      effectiveMessage = `It's not very effective!`
    }

    console.log(
      `${this.name} used ${move.name} for ${damage} damage. ` +
      effectiveMessage
    );

    return damage;
  }


  hasFainted() {
    if (this.hitPoints <= 0) {
      console.log(`${this.name} has fainted!`)
      return true;
      
    } else {
      return false;
    }
  }
}

module.exports = {
  Pokemon
}
