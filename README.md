# 0x02. ES6 Classes

## Description

This project focuses on understanding and implementing ES6 Classes in JavaScript. You will learn how to define classes, add methods, use static methods, extend classes, and understand metaprogramming and symbols. By completing the tasks, you will gain a solid foundation in object-oriented programming using ES6 syntax.

## Learning Objectives

By the end of this project, you should be able to explain and implement:

- How to define a class in JavaScript.
- How to add methods to a class.
- Why and how to add a static method to a class.
- How to extend a class from another class.
- The concepts of metaprogramming and symbols in JavaScript.

## Project Directory Structure
```text
0x02-ES6_classes/
├── 0-classroom.js
├── 1-make_classrooms.js
├── 2-hbtn_course.js
├── 3-currency.js
├── 4-pricing.js
├── 5-building.js
├── 6-sky_high.js
├── 7-airport.js
├── 8-hbtn_class.js
├── 9-hoisting.js
├── 10-car.js
├── 100-evcar.js
├── package.json
├── babel.config.js
└── .eslintrc.js
```

## Tasks

### 0. You used to attend a place like this at some point

**File:** `0-classroom.js`

Implement a class named `ClassRoom`:

- Prototype: `export default class ClassRoom`
- Constructor Attribute:
    - `maxStudentsSize` (Number): Assigned to `_maxStudentsSize`.

**Example:**
```js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize); // Output: 10
```

### 1. Let's make some classrooms

**File:** `1-make_classrooms.js`

Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with sizes 19, 20, and 34 (in this order).

**Example:**
```js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());
/*
Output:
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
*/
```

### 2. A Course, Getters, and Setters

**File:** `2-hbtn_course.js`

Implement a class named `HolbertonCourse`:

- **Constructor Attributes:**
    - `name` (String)
    - `length` (Number)
    - `students` (Array of Strings)

- **Requirements:**
    - Verify the type of attributes during object creation.
    - Each attribute must be stored in an underscore attribute version (e.g., `_name`).
    - Implement a getter and setter for each attribute.

**Example:**
```js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // Output: ES6
c1.name = "Python 101";
console.log(c1);

try {
  c1.name = 12;
} catch(err) {
  console.log(err);
}

try {
  const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
} catch(err) {
  console.log(err);
}
```

### 3. Methods, static methods, computed methods names..... MONEY

**File:** `3-currency.js`

Implement a class named `Currency`:

- **Constructor Attributes:**
    - `code` (String)
    - `name` (String)

- **Requirements:**
    - Each attribute must be stored in an underscore attribute version (e.g., `_name`).
    - Implement a getter and setter for each attribute.
    - Implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`.

**Example:**
```js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency()); // Output: Dollars ($)
```

### 4. Pricing

**File:** `4-pricing.js`

Import the `class` Currency from `3-currency.js`.

Implement a class named `Pricing`:

- **Constructor Attributes:**
    - `amount` (Number)
    - `currency` (Currency)

- **Requirements:**
    - Each attribute must be stored in an underscore attribute version (e.g., `_amount`).
    - Implement a getter and setter for each attribute.
    - Implement a method named `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`.
    - Implement a static method named `convertPrice` that accepts two arguments: `amount` (Number), `conversionRate` (Number). It should return the amount multiplied by the conversion rate.

**Example:**
```js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p);
console.log(p.displayFullPrice()); // Output: 100 Euro (EUR)
```

### 5. A Building

**File:** `5-building.js`

Implement a class named `Building`:

- **Constructor Attribute:**
    - `sqft` (Number)

- **Requirements:**
    - Each attribute must be stored in an underscore attribute version (e.g., `_sqft`).
    - Implement a getter for each attribute.
    - Consider this class as an abstract class.
    - Any class that extends from it should implement a method named `evacuationWarningMessage`.
    - If a class that extends from it does not have an `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`.

**Example:**
```js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  new TestBuilding(200);
} catch(err) {
  console.log(err);
}
```

### 6. Inheritance

**File:** `6-sky_high.js`

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

- **Constructor Attributes:**
    - `sqft` (Number): Assigned to the parent class `Building`.
    - `floors` (Number)

- **Requirements:**
    - Each attribute must be stored in an underscore attribute version (e.g., `_floors`).
    - Implement a getter for each attribute.
    - Override the method named `evacuationWarningMessage` and return the string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

**Example:**
```js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft); // Output: 140
console.log(building.floors); // Output: 60
console.log(building.evacuationWarningMessage()); // Output: Evacuate slowly the 60 floors
```

### 7. Airport

**File:** `7-airport.js`

Implement a class named `Airport`:

- **Constructor Attributes:**
    - `name` (String)
    - `code` (String)

- **Requirements:**
    - Each attribute must be stored in an underscore attribute version (e.g., `_name`).
    - The default string description of the class should return the airport code.

**Example:**
```js
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString()); // Output: [object SFO]
```

### 8. Primitive - Holberton Class

**File:** `8-hbtn_class.js`

Implement a class named `HolbertonClass`:

- **Constructor Attributes:**
    - `size` (Number)
    - `location` (String)

- **Requirements:**
    - Each attribute must be stored in an underscore attribute version (e.g., `_size`).
    - When the class is cast into a `Number`, it should return the size.
    - When the class is cast into a `String`, it should return the location.

**Example:**
```js
import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine");
console.log(Number(hc)); // Output: 12
console.log(String(hc)); // Output: Mezzanine
```

### 9. Hoisting

**File:** `9-hoisting.js`

Fix the provided code and make it work as expected.

**Requirements:**
- Correct the hoisting issues in the code.
- Ensure that the classes and instances are properly defined and exported.

**Example:**
```js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
  student => student.fullStudentDescription
);

console.log(listPrinted);

/*
Expected Output:
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
*/
```

### 10. Vroom

**File:** `10-car.js`

Implement a class named `Car`:

- **Constructor Attributes:**
    - `brand` (String)
    - `motor` (String)
    - `color` (String)

- **Requirements:**
    - Each attribute must be stored in an underscore attribute version (e.g., `_brand`).
    - Add a method named `cloneCar`. This method should return a new object of the class.
    - **Hint:** Use Symbols in ES6 to achieve privacy.

**Example:**
```js
import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar); // Output: true

console.log(tc2);
console.log(tc2 instanceof TestCar); // Output: true

console.log(tc1 == tc2); // Output: false
```

### 11. EVCar `#Advanced`

**File:** `100-evcar.js`

Import `Car` from `10-car.js`.

Implement a class named `EVCar` that extends the `Car` class:

- **Constructor Attributes:**
    - `brand` (String)
    - `motor` (String)
    - `color` (String)
    - `range` (String)

- **Requirements:**
    - Each attribute must be stored in an underscore attribute version (e.g., `_range`).
    - For privacy reasons, when `cloneCar` is called on an `EVCar` object, the object returned should be an instance of `Car` instead of `EVCar`.

**Example:**
```js
import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);
```

**Expected Output:**
```js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
```

## How to Run the Tests

- Run All Tests:
```bash
npm run test
```

- Run Linter:
```bash
npm run lint
```

- Run Full Test (Tests and Lint):
```bash
npm run full-test
```

- Run a Specific File:
```bash
npm run dev <filename>
```

For example:
```bash
npm run dev 0-main.js
```
## Tips and Hints

- Make sure to export your classes and functions properly using `export default` or `export`.
- Use getters and setters to access and modify the properties of your classes.
- Remember to validate the types of the attributes in your constructors.
- When overriding methods in subclasses, ensure you use the correct method signatures.
- Utilize ES6 features like `Symbol` for creating unique identifiers.

## Resources

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
[Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

## Author

[NaoufalHdr1](https://github.com/naoufalHdr1)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
