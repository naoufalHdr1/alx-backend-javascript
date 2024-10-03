class Building {
  constructor(sqft) {
    // Validate that sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }

    this._sqft = sqft; // Store sqft

    // Check if the subclass has implemented the abstract method
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}

export default Building;
