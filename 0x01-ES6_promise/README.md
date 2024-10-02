# 0x01. ES6 Promises

## Description

This project introduces the concepts of ES6 Promises, covering how and why they are used in JavaScript for asynchronous programming. You will learn how to work with promises, handle asynchronous operations using `then`, `catch`, and `finally`, and how to use async/await for more concise and readable code. Additionally, you will gain experience with error handling using `try/catch` in async functions.

## Learning Objectives

By the end of this project, you should be able to:

- Understand what promises are and how they work.
- Use `then`, `resolve`, and `catch` methods.
- Utilize all methods of the `Promise` object.
- Understand and use the `throw` and `try/catch` for error handling.
- Apply the `await` operator and write `async` functions.

## Project Requirements

- Your code should use the `.js` file extension.
- All files should end with a new line.
- Code must be executable on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- The code will be tested using **Jest** with the command `npm run test`.
- Code will be verified with **ESLint** for adherence to coding standards.
- You must export all your functions.

## Setup

### Install NodeJS 12.11.x

Run the following commands in your home directory:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# Expected output: v12.11.1
npm -v
# Expected output: 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, run the following command to install all dependencies:

```bash
npm install
```

### Configuration Files

Ensure you have the following configuration files in your project directory:

- `package.json`: Contains the project dependencies and scripts.
- `babel.config.js`: Configuration for Babel.
- `.eslintrc.js`: ESLint configuration file for code linting.
- `utils.js`: Utility functions for specific tasks like `uploadPhoto` and `createUser`.

### Response Data Format

- `uploadPhoto` returns:

```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```

- `createUser` returns:

```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

## Tasks

### 0. Keep every promise you make and only make promises you can keep
Write a function getResponseFromAPI() that returns a promise.

**File:** 0-promise.js

### 1. Don't make a promise...if you know you can't keep it
Write a function `getFullResponseFromAPI(success)` that returns a promise and resolves or rejects based on the success parameter.

**File:** 1-promise.js

### 2. Catch me if you can!
Write a function `handleResponseFromAPI(promise)` that adds handlers for resolved and rejected promises.

**File:** 2-then.js

### 3. Handle multiple successful promises
Write a function `handleProfileSignup()` that handles multiple promises and logs photo-profile-1 Guillaume Salva to the console.

**File:** 3-all.js

### 4. Simple promise
Write a function `signUpUser(firstName, lastName)` that returns a resolved promise with user data.

**File:** 4-user-promise.js

### 5. Reject the promises
Write a function `uploadPhoto(filename)` that returns a rejected promise with an error message.

**File:** 5-photo-reject.js

### 6. Handle multiple promises
Write a function `handleProfileSignup(firstName, lastName, fileName)` that handles multiple promises and returns their statuses and results in an array.

**File:** 6-final-user.js

### 7. Load balancer
Write a function `loadBalancer(chinaDownload, USDownload)` that returns the result of the fastest promise.

**File:** 7-load_balancer.js

### 8. Throw error / try catch
Write a function `divideFunction(numerator, denominator)` that throws an error if the denominator is 0, otherwise returns the division result.

**File:** 8-try.js

### 9. Throw an error
Write a function `guardrail(mathFunction)` that executes a function and handles errors.

**File:** 9-try.js

### 10. Await / Async `#advanced`
Write an async function `asyncUploadUser()` that calls `uploadPhoto()` and `createUser()` and handles failures.

**File:** 100-await.js

## How to Run

- Run Jest tests:

```bash
npm run test
```

- Execute a specific JavaScript file:

```bash
npm run dev <file-name>
```

## Author
[NaoufalHdr1] - Software Engineer

This `README.md` provides an overview of the project, instructions for setup, and details about each task.
