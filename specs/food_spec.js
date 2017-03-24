var assert = require('assert');
var Food = require('../food');

var food = new Food("Pizza", 500);

describe('Food', function(){
 it('The food should have a name.', function(){
  assert.equal("Pizza", food.name);
});

 it('The food should have a replenishment value.', function(){
  assert.equal(500, food.replenishmentValue);
});

 it('The food should start off not being poisonous.', function(){
  assert.equal(false, food.poisoned);
  });
});