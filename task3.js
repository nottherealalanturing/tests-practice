const Calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    if (b === 0) throw new Error('Illegal Operation');
    return a / b;
  },
};

module.exports = Calculator;
