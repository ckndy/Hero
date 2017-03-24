var Rat = function(){
  this.poison = function(food){
    food.poisoned = true; 
  };
};
module.exports = Rat;