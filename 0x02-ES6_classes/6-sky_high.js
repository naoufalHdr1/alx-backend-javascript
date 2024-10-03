import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Validate that floors is a number
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    super(sqft);
    this._floors = floors;
  }

  // Getters
  get floors() {
    return this._floors;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
