const computeClosestToZero = require('./ComputeClosestToZero');

test('computeClosestToZero not fail when empty arguments', () => {
  expect(computeClosestToZero ([])).toBe(0);
})

test('computeClosestToZero [2, 3, 4, -2, 8] to equal 2', () => {
  expect(computeClosestToZero ([2, 3, 4, -2, 8])).toBe(2);
});

test('computeClosestToZero [2, 3, 4, -1, 8] to equal -1', () => {
  expect(computeClosestToZero ([2, 3, 4, -1, 8])).toBe(-1);
});
