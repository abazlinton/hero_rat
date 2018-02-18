// we have no native enums so this is a workaround
// taskEnum.DIFFICULTY.MEDIUM === 1
// means we can go from different naming structures / rankings to a number
// imagine BRONZE = 1, SILVER = 2, GOLD = 3 for example
// helps with sorting tasks (see hero.js)

const taskEnum = {
  DIFFICULTY: {
    EASY: 0,
    MEDIUM: 1,
    HARD: 2
  },
  URGENCY: {
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2
  }
}

module.exports = taskEnum;
