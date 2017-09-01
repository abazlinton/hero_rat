var Task = require('../task');
var assert = require('assert');

describe('Task', function() {

  var killWolf;

  beforeEach(function(){
    var taskDetail = {
      description: "Kill a wolf",
      difficulty: "hard",
      urgency: "high",
      reward: "Bravery boost",
      complete: false
    }
    killWolf = new Task(taskDetail);
  })

  it('should have a description', function() {
    assert.strictEqual(killWolf.description, "Kill a wolf");
  });

  it('should have a difficulty level', function() {
    assert.strictEqual(killWolf.difficulty, "hard");
  });

  it('should have a urgency level', function() {
    assert.strictEqual(killWolf.urgency, "high");
  });

  it('should have a reward', function(){
    assert.strictEqual(killWolf.reward, "Bravery boost");    
  });

  it('should start as not complete', function() {
    assert.strictEqual(killWolf.complete, false);    
  });

  it('should be able to be marked complete', function() {
    killWolf.markComplete()
    assert(killWolf.complete);
  });

});
