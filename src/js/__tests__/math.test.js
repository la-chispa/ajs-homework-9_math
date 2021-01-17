import Calculation from '../math';

test('create collection of attack ratios', () => {
  const calc = new Calculation('Dormamu', 'Daemon');
  expect(calc.attackRatios).toEqual(new Map([[1, 1], [2, 0.9], [3, 0.8], [4, 0.7], [5, 0.6]]));
});
