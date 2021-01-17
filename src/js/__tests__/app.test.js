import Character from '../app';

test('function automatically set true values', () => {
  const character = new Character('Dormamu', 'Daemon');

  expect({
    health: 100, level: 1, name: 'Dormamu', type: 'Daemon',
  }).toEqual(character);
});

test('name of character is true', () => {
  const character = new Character('Dormamu', 'Daemon');
  const name = character.validateName();

  expect(name).toBeTruthy();
});

test('type of character is true', () => {
  const character = new Character('Dormamu', 'Daemon');
  const type = character.validateType();

  expect(type).toBeTruthy();
});

test('name of character is wrong, too long', () => {
  function wrongName() {
    const character = new Character('Doctor Strange', 'Magician');
    character.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('name of character is wrong, too short', () => {
  function wrongName() {
    const character = new Character('X', 'Daemon');
    character.validateName();
  }

  expect(wrongName).toThrowError(new Error('Wrong name!'));
});

test('type of character is wrong', () => {
  function wrongType() {
    const character = new Character('Wong', 'Wizard');
    character.validateType();
  }

  expect(wrongType).toThrowError(new Error('Wrong type!'));
});
