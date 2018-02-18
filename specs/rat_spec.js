const assert = require('assert');
const Food = require('../food');
const Rat = require('../rat');

describe('Rat', function() {
  it('should have a name', function() {
    const roland = new Rat('Roland');
    assert.equal('Roland', roland.name);
  });

  it('should poison some food', function() {
    const roland = new Rat({name: 'Roland'});
    const food = new Food({name: 'pizza', nutrition: 20});
    roland.touchFood(food);
    assert.equal(true, food.poisoned);
  });
});
