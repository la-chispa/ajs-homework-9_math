import Calculation from './math';

export default class Daemon extends Calculation {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 100;
    this.defence = 40;
    this.stoned = false;
  }
}
