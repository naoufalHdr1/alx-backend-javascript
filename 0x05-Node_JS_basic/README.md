# 0x05. NodeJS Basics
`#Back-end` `#JavaScript` `#ES6` `#NodeJS` `#ExpressJs` 

## Overview

This project focuses on learning the fundamentals of Node.js and building essential skills for creating servers, handling file operations, and implementing asynchronous operations. It includes creating basic HTTP servers using Node.js and Express.js while leveraging modern JavaScript features and development tools like Babel and Nodemon.

## Learning Objectives

By completing this project, you will learn how to:
- Run JavaScript using Node.js.
- Use Node.js modules.
- Read files using specific Node.js modules.
- Access command-line arguments and the environment using the `process` module.
- Create HTTP servers using Node.js and Express.js.
- Implement advanced routes with Express.js.
- Use ES6 syntax with Node.js using Babel.
- Develop faster with Nodemon for live reloading.

## Project Structure
```plaintext
0x05-Node_JS_basic/
├── 0-console.js              # Display a message in STDOUT
├── 1-stdin.js                # Interactive program to read user input
├── 2-read_file.js            # Read and parse a file synchronously
├── 3-read_file_async.js      # Read and parse a file asynchronously
├── 4-http.js                 # Basic HTTP server using Node.js
├── 5-http.js                 # HTTP server with dynamic routing using Node.js
├── 6-http_express.js         # Basic HTTP server using Express.js
├── 7-http_express.js         # Advanced HTTP server using Express.js
├── babel.config.js           # Babel configuration for ES6 support
├── package.json              # Project dependencies and scripts
├── .eslintrc.js              # ESLint configuration
└── database.csv              # Sample data file
```

## Tasks Summary

### 0. Executing Basic JavaScript with Node.js

Create a function `displayMessage` that prints a string to the console.
**File:** `0-console.js`

### 1. Using Process stdin

Create an interactive program that prompts the user for their name and displays it.
**File:** `1-stdin.js`

### 2. Reading a File Synchronously

Read a CSV file synchronously and display student counts per field.
**File:** `2-read_file.js`

### 3. Reading a File Asynchronously

Read a CSV file asynchronously and return the student data as a Promise.
**File:** `3-read_file_async.js`

### 4. Basic HTTP Server with Node.js

Create a simple HTTP server using Node.js that responds with "Hello Holberton School!" for all endpoints.
**File:** `4-http.js`

### 5. Advanced HTTP Server with Node.js

Create an HTTP server with dynamic routing and database integration.
**File:** `5-http.js`

### 6. Basic HTTP Server with Express.js

Recreate the basic HTTP server using Express.js.
**File:** `6-http_express.js`

### 7. Advanced HTTP Server with Express.js

Recreate the advanced HTTP server using Express.js for dynamic routing and database integration.
**File:** `7-http_express.js`
