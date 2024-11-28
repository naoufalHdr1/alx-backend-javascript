# 0x06. Unittests in JavaScript

## Project Overview

This project focuses on implementing unit tests and integration tests for JavaScript applications using popular libraries and frameworks like Mocha, Chai, and Sinon. You'll learn how to create robust and maintainable tests for various scenarios, including synchronous, asynchronous, and mocked/stubbed functions.

## Learning Objectives

By the end of this project, you will be able to:
- Write test suites using Mocha.
- Use assertion libraries like Node.js's `assert` and Chai.
- Organize long test suites effectively.
- Utilize spies and stubs to test function calls and behaviors.
- Understand hooks (`before`, `after`, `beforeEach`, `afterEach`) for managing test lifecycles.
- Test asynchronous functions and API responses.
- Write integration tests for small Node.js servers.

## Project Structure
```bash
0x06-unittests_in_js/
│
├── 0-calcul.js             # Basic rounding and addition function
├── 0-calcul.test.js        # Tests for 0-calcul.js
├── 1-calcul.js             # Extended calculateNumber function
├── 1-calcul.test.js        # Tests for 1-calcul.js
├── 2-calcul_chai.js        # Same functionality as 1-calcul.js but uses Chai
├── 2-calcul_chai.test.js   # Tests using Chai assertions
├── utils.js                # Utility functions module
├── 3-payment.js            # Uses utils.calculateNumber
├── 3-payment.test.js       # Tests using Sinon spies
├── 4-payment.js            # Stubs calculateNumber function
├── 4-payment.test.js       # Tests with Sinon stubs
├── 5-payment.js            # Uses hooks to manage test lifecycle
├── 5-payment.test.js       # Tests with hooks and spies
├── 6-payment_token.js      # Async function to simulate API response
├── 6-payment_token.test.js # Async tests using Mocha's `done` callback
├── 7-skip.test.js          # Example of skipping tests
├── package.json            # Project metadata and test scripts
└── README.md               # Project documentation
```

## Tasks Overview

### 0. Basic Test with Mocha

- Create `calculateNumber` for rounding and summing two numbers.
- Write tests using Node.js's `assert`.

### 1. Combining Descriptions

- Extend `calculateNumber` to handle `SUM`, `SUBTRACT`, and `DIVIDE`.
- Organize test cases with `describe`.

### 2. Basic Test with Chai

- Rewrite `1-calcul.test.js` using Chai's `expect` assertion.

### 3. Spies

- Use Sinon spies to ensure the correct methods are called with the expected arguments.

### 4. Stubs

- Replace expensive or external function calls with Sinon stubs for better control and speed.

### 5. Hooks

- Use `beforeEach` and `afterEach` hooks to set up and clean up spies in tests.

### 6. Async Tests

- Write tests for async functions, ensuring they handle Promises correctly.

### 7. Skip

- Use `.skip()\ to temporarily disable tests without removing them.

## Usage

Run individual tests:
```bash
npm test 0-calcul.test.js
npm test 1-calcul.test.js
```

Run all tests:
```bash
npm test
```
