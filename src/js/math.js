import Character from './app';

export default class Calculation extends Character {
  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let attack = this._attack - ((this.distance - 1) * 10);
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    if (attack < 0) {
      attack = 0;
    }
    return attack;
  }

  set attack(value) {
    this._attack = value;
  }
}
