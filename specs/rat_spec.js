var assert = require('assert');
var Rat = require('../rat');
var Food = require('../food');

var rat = new Rat();
var food = new Food("Pizza", 500);

describe('Rat', function(){
  it('The Rat should make the food poisonous.', function(){
    rat.poison(food);
    assert.equal(true, food.poisoned);
  });
});