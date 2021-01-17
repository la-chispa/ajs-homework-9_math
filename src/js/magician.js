import Calculation from './math';

export default class Magician extends Calculation {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }
}
