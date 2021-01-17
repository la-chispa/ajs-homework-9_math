import Character from './app';

export default class Calculation extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackRatios = new Map([[1, 1], [2, 0.9], [3, 0.8], [4, 0.7], [5, 0.6]]);
  }

  attackEnemy(cell) {
    if (this.attackRatios.has(cell)) {
      this.attack *= this.attackRatios.get(cell);
    } else {
      throw new Error('Strange attack');
    }
    if (this.stoned) {
      this.attack -= Math.log2(cell) * 5;
    }
    if (this.attack < 0) {
      this.attack = 0;
    }
    return this.attack;
  }
}
