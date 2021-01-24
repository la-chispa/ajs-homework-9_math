import Calculation from './math';

export default class Magician extends Calculation {
  constructor(name) {
    super(name, 'Magician');
    this.defence = 40;
  }
}
