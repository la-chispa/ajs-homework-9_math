import Magician from '../magician';

test('attack 2nd cell, without stone', () => {
  const nimue = new Magician('Nimue');
  nimue.attack = 100;
  nimue.distance = 2;
  nimue.stoned = false;
  expect(nimue.attack).toBe(90);
});

test('attack 1st cell, without stone', () => {
  const nimue = new Magician('Wong');
  nimue.attack = 100;
  nimue.distance = 1;
  nimue.stoned = false;
  expect(nimue.attack).toBe(100);
});

test('attack 1st cell, with stone', () => {
  const nimue = new Magician('Wong');
  nimue.attack = 100;
  nimue.distance = 1;
  nimue.stoned = true;
  expect(nimue.attack).toBe(100);
});

test('attack 2nd cell, with stone', () => {
  const nimue = new Magician('Nimue');
  nimue.attack = 100;
  nimue.distance = 2;
  nimue.stoned = true;
  expect(nimue.attack).toBe(85);
});

test('attack with stone < 0', () => {
  const nimue = new Magician('Nimue');
  nimue.attack = 10;
  nimue.distance = 4;
  nimue.stoned = true;
  expect(nimue.attack).toBe(0);
});
