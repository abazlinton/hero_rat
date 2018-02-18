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

Hero.prototype.sortTasksBasic = function(numericProperty){
  // we can access properties with brackets (using string keys) as well as dot notation - e.g. task["urgency"]

  this.tasks.sort(function(task1, task2) {
    return task1[numericProperty] - task2[numericProperty];
  });
}

Hero.prototype.sortTasks = function(property){
  // check type of supplied property in first task
  // choose sort mechanism based on this
  
  if (typeof this.tasks[0][property] === 'number'){
    this.tasks.sort(function(task1, task2) {
      return task1[property] - task2[property]
    })
  } else if (typeof this.tasks[0][property] === 'string') {
    this.tasks.sort(function(task1, task2) {
      return task1[property].localeCompare(task2[property])
    })
  }
}

module.exports = Hero;
