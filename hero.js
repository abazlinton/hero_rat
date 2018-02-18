

const Hero = function (spec) {
  this.name = spec.name;
  this.health = 100;
  this.favouriteFood = spec.favouriteFood;
  this.tasks = [];
};

Hero.prototype.eat = function(food) {
  let multiplier = 1;
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

Hero.prototype.sortTasks = function(property){
  if (typeof this.tasks[0][property] === 'number'){
    this.tasks.sort(function(a, b) {
      return a[property] - b[property]
    })
  } else if (typeof this.tasks[0][property] === 'string') {
    this.tasks.sort(function(a, b) {
      return a[property].localeCompare(b[property])
    })
  }
}

module.exports = Hero;
