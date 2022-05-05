const stringLength = require('./task1');
const reverseString = require('./task2');
const Calculator = require('./task3');
const capitalize = require('./task4');

test('String Length', () => {
  expect(() => stringLength('word with friends')).toThrow();
});

test('Reverse String', () => {
  expect(reverseString('friends')).toMatch(/sdneirf/);
});

describe('calculator', () => {
  test('addition', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });
  test('addition', () => {
    expect(Calculator.add(-1, 2)).toBe(1);
  });
  test('addition', () => {
    expect(Calculator.add(0, 2)).toBe(2);
  });

  test('subtraction', () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
  });
  test('subtraction', () => {
    expect(Calculator.subtract(-1, 2)).toBe(-3);
  });
  test('subtraction', () => {
    expect(Calculator.subtract(0, 2)).toBe(-2);
  });

  test('multiply', () => {
    expect(Calculator.multiply(1, 2)).toBe(2);
  });
  test('multiply', () => {
    expect(Calculator.multiply(-1, 2)).toBe(-2);
  });
  test('multiply', () => {
    expect(Calculator.multiply(0, 2)).toBe(0);
  });

  test('division', () => {
    expect(() => Calculator.divide(2, 0)).toThrow();
  });
  test('division', () => {
    expect(Calculator.divide(5, 2)).toBe(2.5);
  });
  test('division', () => {
    expect(Calculator.divide(0, 2)).toBe(0);
  });
});

test('Capitalize', () => {
  expect(capitalize('asSad')).toMatch(/Assad/);
});
