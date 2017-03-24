var Hero = function(name, health, favouriteFood, talk){
  this.name = name; 
  this.health = health; 
  this.favouriteFood = favouriteFood; 
  this.talk = talk; 
}

Hero.prototype = {
  eat: function(food) { 
    if (food.poisoned){
      this.health -= 50;
    }

    if(this.favouriteFood == food.name){
      this.health += ( 50 * 1.5 );
    } else {
      this.health += 50};
    }
  }
  module.exports = Hero;