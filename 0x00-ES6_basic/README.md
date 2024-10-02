# ES6 Basics Project

## Overview

This project is focused on learning and implementing the basic concepts of ECMAScript 6 (ES6), also known as ECMAScript 2015. The project consists of several tasks that cover various features introduced in ES6, including variable declarations, arrow functions, template literals, and more.

## Learning Objectives

By the end of this project, you should be able to explain:

- What ES6 is and its significance in JavaScript development
- The new features introduced in ES6
- The difference between constants and variables
- Block-scoped variables
- Arrow functions and their default parameters
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

- All files should be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**
- Allowed editors: **vi**, **vim**, **emacs**, **Visual Studio Code**
- All files must end with a new line
- A `README.md` file at the root of the project is mandatory
- Code must be tested using the **Jest Testing Framework**
- Code will be analyzed using the linter **ESLint** with specific rules

## Setup

To set up the project, follow these steps:

1. **Install NodeJS 12.11.x** in your home directory:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. Verify the installation:
   ```bash
   nodejs -v
   npm -v
   ```

3. Install Jest, Babel, and ESLint:

In your project directory, install the necessary dependencies using the provided package.json:
   ```bash
   npm install
   ```

## Directory Structure

```plaintext
0x00-ES6_basic/
│
├── 0-constants.js
├── 1-block-scoped.js
├── 2-arrow.js
├── 3-default-parameter.js
├── 4-rest-parameter.js
├── 5-spread-operator.js
├── 6-string-interpolation.js
├── 7-getBudgetObject.js
├── 8-getBudgetCurrentYear.js
├── package.json
├── babel.config.js
└── .eslintrc.js
```

## Tasks

### Task 0: Const or Let?
Modify `taskFirst` to use `const` and `taskNext` to use `let`.
    ```js
    export function taskFirst() {
      var task = 'I prefer const when I can.';
      return task;
    }

    export function getLast() {
      return ' is okay';
    }

    export function taskNext() {
      var combination = 'But sometimes let';
      combination += getLast();

      return combination;
    }
    ```

### Task 1: Block Scope
Modify `taskBlock` to avoid variable overwriting inside conditional blocks.
    ```js
    export default function taskBlock(trueOrFalse) {
      var task = false;
      var task2 = true;

      if (trueOrFalse) {
        var task = true;
        var task2 = false;
      }

      return [task, task2];
    }
    ```

### Task 2: Arrow Functions
Rewrite a standard function using ES6 arrow syntax.
    ```js
    export default function getNeighborhoodsList() {
      this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

      const self = this;
      this.addNeighborhood = function add(newNeighborhood) {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
      };
    }
    ```

### Task 3: Parameter Defaults
Condense the function to define default parameter values.
    ```js
    export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
      if (expansion1989 === undefined) {
        expansion1989 = 89;
      }

      if (expansion2019 === undefined) {
        expansion2019 = 19;
      }
      return initialNumber + expansion1989 + expansion2019;
    }
    ```

### Task 4: Rest Parameter Syntax
Modify a function to use rest parameter syntax to count arguments.
    ```js
    export default function returnHowManyArguments() {
    }
    ```

### Task 5: Spread Syntax
Use spread syntax to concatenate arrays and characters of a string.
    ```js
    export default function concatArrays(array1, array2, string) {
    }
    ```

### Task 6: Template Literals
Rewrite a return statement to use template literals.
    ```js
    export default function getSanFranciscoDescription() {
      const year = 2017;
      const budget = {
        income: '$119,868',
        gdp: '$154.2 billion',
        capita: '$178,479',
      };

      return 'As of ' + year + ', it was the seventh-highest income county in the United States'
            / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
            / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
    }
    ```

### Task 7: Object Property Value Shorthand
Simplify an object's property definitions using shorthand syntax.
    ```js
    export default function getBudgetObject(income, gdp, capita) {
      const budget = {
        income: income,
        gdp: gdp,
        capita: capita,
      };

      return budget;
    }
    ```

### Task 8: Computed Property Names
Rewrite a function to use ES6 computed property names on an object.
    ```js
    function getCurrentYear() {
      const date = new Date();
      return date.getFullYear();
    }

    export default function getBudgetForCurrentYear(income, gdp, capita) {
      const budget = {};

      budget[`income-${getCurrentYear()}`] = income;
      budget[`gdp-${getCurrentYear()}`] = gdp;
      budget[`capita-${getCurrentYear()}`] = capita;

      return budget;
    }
    ```

### Task 9: ES6 method properties
Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object
    ```js
    import getBudgetObject from './7-getBudgetObject.js';

    export default function getFullBudgetObject(income, gdp, capita) {
      const budget = getBudgetObject(income, gdp, capita);
      const fullBudget = {
        ...budget,
        getIncomeInDollars: function (income) {
          return `$${income}`;
        },
        getIncomeInEuros: function (income) {
          return `${income} euros`;
        },
      };

      return fullBudget;
    }
    ```

### Task 10: For...of Loops
Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly.
    ```js
    export default function appendToEachArrayValue(array, appendString) {
      for (var idx in array) {
        var value = array[idx];
        array[idx] = appendString + value;
      }

      return array;
    }
    ```

### Task 11: Iterator
Write a function named `createEmployeesObject` that will receive two arguments:
    - `departmentName` (String)
    - `employees` (Array of Strings)
    ```js
    expor!t default function createEmployeesObject(departmentName, employees) {
    }
    ```

### Task 12: Let's create a report object
Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.
    ```js
    export default function createReportObject(employeesList) {

    }
    ```

### Task 13: Iterating through report objects `#advanced`
Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

This function will return an iterator to go through every employee in every department.
    ```js
    export default function createIteratorObject(report) {

    }
    ```

### Task 14: Iterate through object `#advanced`
Finally, write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.
    ```js
     export default function iterateThroughObject(reportWithIterator) {

     }
    ```

## Running Tests

To run the tests for this project, use the following command:\
    ```bash
    npm run dev <filename>
    ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

[ECMAScript 6 - ECMAScript 2015](https://intranet.alxswe.com/rltoken/NW1dFLFExQ12_hD8yvkV3A)\
[MDN Web Docs - JavaScript](https://github.com/mbeaudru/modern-js-cheatsheet)

### Instructions for Use:
1. Create a new file named `README.md` in your project directory.
2. Copy and paste the above content into your `README.md` file.
3. Modify any sections to better reflect your project's specifics or add additional details as necessary.

This `README.md` file provides a comprehensive guide to your project and its requirements, making it easier for others (or yourself in the future) to understand what the project entails.
