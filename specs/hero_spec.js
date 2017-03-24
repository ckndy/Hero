var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require("../rat");

var hero = new Hero("Chris Kennedy", 100, "Pizza", "Hello");
var pizza = new Food("Pizza", 500);
var chips = new Food("Chips", 500);
var rat = new Rat();

describe('Hero', function(){
  it('A Hero should have a name of Chris Kennedy', function(){
    assert.equal("Chris Kennedy", hero.name);
  });

  it('A Hero should have a health of 100.', function(){
    assert.equal(100, hero.health);
  });
  
  it('A Hero should have a favourite food of Pizza.', function(){
    assert.equal("Pizza", hero.favouriteFood);
  });

  it('A Hero should be able to interact with food.', function(){
    hero.eat(chips);
    assert.equal(150, hero.health);
  });

  it('A Hero should be able to eat favourite food.', function(){
    hero.health = 100;
    hero.eat(pizza);
    assert.equal(175, hero.health);
  });

  it('A Hero should be able to talk.', function(){
    assert.equal("Hello", hero.talk);
  });
});