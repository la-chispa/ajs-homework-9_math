import Daemon from '../daemon';

test('attack 2nd cell, without stone', () => {
  const dormamu = new Daemon('Dormamu');
  dormamu.attack = 100;
  dormamu.distance = 2;
  dormamu.stoned = false;
  expect(dormamu.attack).toBe(90);
});

test('attack 1st cell, without stone', () => {
  const dormamu = new Daemon('Dormamu');
  dormamu.attack = 100;
  dormamu.distance = 1;
  dormamu.stoned = false;
  expect(dormamu.attack).toBe(100);
});

test('attack 1st cell, with stone', () => {
  const dormamu = new Daemon('Dormamu');
  dormamu.attack = 100;
  dormamu.distance = 1;
  dormamu.stoned = true;
  expect(dormamu.attack).toBe(100);
});

test('attack 2nd cell, with stone', () => {
  const dormamu = new Daemon('dormamu');
  dormamu.attack = 100;
  dormamu.distance = 2;
  dormamu.stoned = true;
  expect(dormamu.attack).toBe(85);
});

test('attack with stone < 0', () => {
  const dormamu = new Daemon('dormamu');
  dormamu.attack = 10;
  dormamu.distance = 4;
  dormamu.stoned = true;
  expect(dormamu.attack).toBe(0);
});
