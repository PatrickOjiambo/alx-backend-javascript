export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const props = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!props.find((e) => e === 'evacuationWarningMessage')) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._value = Building.validatesqft(value);
  }

  static validatesqft(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error('sqft should be a number');
    }
    return value;
  }
}
