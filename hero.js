

var Hero = function (spec) {
  this.name = spec.name;
  this.health = 100;
  this.favouriteFood = spec.favouriteFood;
  this.tasks = [];
};

Hero.prototype.eat = function(food) {
  var multiplier = 1;
  if (food.name === this.favouriteFood) {
    multiplier = 1.5;
  }
  if (food.poisoned) {
    multiplier *= -1;
  }
  this.health = this.health + (food.nutrition * multiplier);
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.sortTask = function(property){
  var sortedTasks = [];
  sortedTasks = this.tasks.sort(function(a, b) {
    return a[property] - b[property]
  })
}

module.exports = Hero;
