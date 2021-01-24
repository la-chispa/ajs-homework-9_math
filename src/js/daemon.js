import Calculation from './math';

export default class Daemon extends Calculation {
  constructor(name) {
    super(name, 'Daemon');
    this.defence = 40;
  }
}
