var Food =function(name, replenishmentValue){
  this.name = name;
  this.replenishmentValue = replenishmentValue; 
  this.poisoned = false; // Food starts off being non-poisonous
}
module.exports = Food;