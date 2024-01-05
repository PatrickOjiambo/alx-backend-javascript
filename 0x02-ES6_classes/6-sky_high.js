import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = SkyHighBuilding.validateFloors(floors);
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  set sqft(value) {
    this._sqft = SkyHighBuilding.validatesqft(value);
  }

  set floors(value) {
    this._floors = SkyHighBuilding.validateFloors(value);
  }

  static validatesqft(value) {
    if (
      typeof value !== 'number'
      || Number.isNaN(value)
      || value instanceof Building === false
    ) {
      throw new Error('sqft should be a number');
    }
    return value;
  }

  static validateFloors(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error('sqft should be a number');
    }
    return value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
