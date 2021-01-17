import Daemon from '../daemon';

test('attack 1st cell from character, without stone', () => {
  const daemon = new Daemon('Dormamu');
  daemon.attack = 100;
  expect(daemon.attackEnemy(1)).toBe(100);
});

test('attack 1st cell from character, with stone', () => {
  const daemon = new Daemon('Dormamu');
  daemon.attack = 100;
  daemon.stoned = true;
  expect(daemon.attackEnemy(1)).toBe(100);
});

test('attack 2nd cell from character, without stone', () => {
  const daemon = new Daemon('Dormamu');
  daemon.attack = 100;
  expect(daemon.attackEnemy(2)).toBe(90);
});

test('attack 2nd cell from character, with stone', () => {
  const daemon = new Daemon('Dormamu');
  daemon.attack = 100;
  daemon.stoned = true;
  expect(daemon.attackEnemy(2)).toBe(85);
});

test('attack with stone < 0', () => {
  const daemon = new Daemon('Dormamu');
  daemon.attack = 10;
  daemon.stoned = true;
  expect(daemon.attackEnemy(4)).toBe(0);
});

test('wrong value of cell to attack', () => {
  const daemon = new Daemon('Dormamu');
  function wrongCell() {
    daemon.attackEnemy(10);
  }
  expect(wrongCell).toThrowError(new Error('Strange attack'));
});
