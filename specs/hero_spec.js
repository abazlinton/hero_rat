var Hero = require('../hero');
var Food = require('../food');
var assert = require('assert');
var Enums = require("../enums.js");

describe('Hero', function() {

  var hero;

  beforeEach(function(){
    hero = new Hero({name: 'Ift', favouriteFood:'pizza'});
  })

  it('should have a name', function() {
    assert.strictEqual(hero.name, 'Ift');
  });

  it('should start at 100 health', function() {
    assert.strictEqual(hero.health, 100);
  });

  it('should have a fav food', function() {
    assert.strictEqual(hero.favouriteFood, 'pizza');
  });

  it('should be able to gain health through eating', function() {
    var foodStub = { name:'aFood', nutrition: 20};
    hero.eat(foodStub);
    assert.strictEqual(hero.health, 120);
  });

  it('should be able to gain 1.5 times nutrition if fav food', function() {
    var foodStub = { name:'pizza', nutrition:20 };
    hero.eat(foodStub);
    assert.strictEqual(hero.health, 130);
  });

  it('should lose health if made poisonous', function() {
    var food = new Food({name: 'cake', nutrition: 20});
    food.poison();
    hero.eat(food);
    assert.strictEqual(hero.health, 80);
  });

  it('should have an empty collection of tasks', function(){
    assert.strictEqual(hero.tasks.length, 0);
    assert.strictEqual(hero.tasks.constructor, Array);
  });

  it('should be able add a task', function(){
    var taskStub = {description: "Kill a wolf"};
    hero.addTask(taskStub);
    assert.deepEqual(hero.tasks[0], taskStub);
  });

  describe('should be able to sort tasks -', function(){
    it('by difficulty', function(){
      var easy = { difficulty: Enums.DIFFICULTY.EASY };
      var medium = { difficulty: Enums.DIFFICULTY.MEDIUM };
      var hard = { difficulty: Enums.DIFFICULTY.HARD };
      hero.addTask(hard); 
      hero.addTask(easy); 
      hero.addTask(medium);
      hero.sortTask("difficulty");
      assert.deepEqual( hero.tasks, [easy, medium, hard]);
    });   
    it('by urgency', function(){
      var low = { urgency: Enums.URGENCY.LOW };
      var medium = { urgency: Enums.URGENCY.MEDIUM };
      var high = { urgency: Enums.URGENCY.HIGH };
      hero.addTask(medium); 
      hero.addTask(high); 
      hero.addTask(low);
      hero.sortTask("urgency");
      assert.deepEqual( hero.tasks, [low, medium, high]);
    });
    xit('by reward', function(){
      hero.addTask()
    });   
  })
    
  

});
