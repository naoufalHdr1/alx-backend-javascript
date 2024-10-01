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

### Task 1: Block Scope
Modify `taskBlock` to avoid variable overwriting inside conditional blocks.

### Task 2: Arrow Functions
Rewrite a standard function using ES6 arrow syntax.

### Task 3: Parameter Defaults
Condense the function to define default parameter values.

### Task 4: Rest Parameter Syntax
Modify a function to use rest parameter syntax to count arguments.

### Task 5: Spread Syntax
Use spread syntax to concatenate arrays and characters of a string.

### Task 6: Template Literals
Rewrite a return statement to use template literals.

### Task 7: Object Property Value Shorthand
Simplify an object's property definitions using shorthand syntax.

### Task 8: Computed Property Names
Rewrite a function to use ES6 computed property names on an object.

## Running Tests

To run the tests for this project, use the following command:
    ```bash
    npm run dev <filename>
    ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

[ECMAScript 6 - ECMAScript 2015](https://intranet.alxswe.com/rltoken/NW1dFLFExQ12_hD8yvkV3A)
[MDN Web Docs - JavaScript](https://github.com/mbeaudru/modern-js-cheatsheet)

### Instructions for Use:
1. Create a new file named `README.md` in your project directory.
2. Copy and paste the above content into your `README.md` file.
3. Modify any sections to better reflect your project's specifics or add additional details as necessary.

This `README.md` file provides a comprehensive guide to your project and its requirements, making it easier for others (or yourself in the future) to understand what the project entails.
