const addArguments = require('./AddArguments');

test('addArguments 1 + 2 + 5 to equal 8', () => {
  expect(addArguments(1, 2, 5)).toBe(8);
});

test('addArguments 1 + 2 + 5 + 12 to equal 20', () => {
  expect(addArguments(1, 2, 5, 12)).toBe(20);
});
