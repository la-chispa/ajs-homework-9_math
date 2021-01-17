import Magician from '../magician';

test('attack 1st cell from character, without stone', () => {
  const magician = new Magician('Wong');
  magician.attack = 100;
  expect(magician.attackEnemy(1)).toBe(100);
});

test('attack 1st cell from character, with stone', () => {
  const magician = new Magician('Wong');
  magician.attack = 100;
  magician.stoned = true;
  expect(magician.attackEnemy(1)).toBe(100);
});

test('attack 2nd cell from character, without stone', () => {
  const magician = new Magician('Wong');
  magician.attack = 100;
  expect(magician.attackEnemy(2)).toBe(90);
});

test('attack 2nd cell from character, with stone', () => {
  const magician = new Magician('Wong');
  magician.attack = 100;
  magician.stoned = true;
  expect(magician.attackEnemy(2)).toBe(85);
});

test('attack with stone < 0', () => {
  const magician = new Magician('Wong');
  magician.attack = 10;
  magician.stoned = true;
  expect(magician.attackEnemy(4)).toBe(0);
});

test('wrong value of cell to attack', () => {
  const magician = new Magician('Wong');
  function wrongCell() {
    magician.attackEnemy(10);
  }
  expect(wrongCell).toThrowError(new Error('Strange attack'));
});
