import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override Symbol.species to return Car instead of EVCar
  static get [Symbol.species]() {
    return Car;
  }
}

export default EVCar;
