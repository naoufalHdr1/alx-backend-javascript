class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  // Method to clone the car
  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}

export default Car;
