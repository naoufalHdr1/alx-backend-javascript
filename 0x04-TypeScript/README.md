# 0x04. TypeScript Project

## Description

In this project, you will gain hands-on experience with TypeScript, a typed superset of JavaScript that enhances code reliability and scalability. You will work on a series of tasks that require you to define interfaces, classes, and functions using TypeScript features. You will also learn how to interact with the Document Object Model (DOM) using TypeScript, use generic types, work with namespaces, and create advanced types for employees. The project concludes with more advanced TypeScript features like ambient namespaces, merging declarations, and string literal types.

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without external help:

- **Basic Types in TypeScript:** Understand and apply primitive types such as `number`, `string`, `boolean`, and more complex types like `arrays`, `tuples`, and `enums`.
- **Interfaces, Classes, and Functions:** Learn how to define and implement interfaces and classes in TypeScript and understand the differences between them. Learn how to write functions with proper type annotations.
DOM Manipulation with TypeScript: Learn how to interact with the DOM elements using TypeScript.
- **Generic Types:** Understand how to use generics to make functions, classes, and interfaces reusable and flexible with different data types.
Namespaces: Learn how to organize code using namespaces and the benefits they offer in large applications.
- **Declaration Merging:** Understand how to merge declarations in TypeScript and how this feature can be useful.
- **Ambient Namespaces:** Learn how to declare types for third-party libraries and manage external code using ambient namespaces.
- **Basic Nominal Typing:** Explore nominal typing in TypeScript and understand how it differs from structural typing.

## Resources

[TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)\
[TypeScript documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)

## Tasks

### Task 0: Creating an interface for a student

1. Set up the project:

- Create a `task_0` directory and copy the provided configuration files (`package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`) into it.
- Create a `main.ts` file in the `task_0/js` directory.

2. Define a `Student` interface:

- Define an interface named `Student` with `firstName`, `lastName`, `age`, and `location` as fields of types `string` and `number`.
- Create two student objects and add them to an array named `studentsList`.

3. Render a table:

- Use Vanilla JavaScript to dynamically generate an HTML table that lists each student's `firstName` and `location`.

4. Ensure no type errors:

- Use `Webpack` to build your TypeScript files and ensure no errors appear.

### Task 1: Let's build a Teacher interface

1. Set up the project:

- Create a new directory `task_1` and copy the configuration files (`package.json`, `tsconfig.json`, `webpack.config.js`).

2. Create a `Teacher` interface:

- Define the `Teacher` interface with `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience`, `location`, and any other optional attributes.

3. Implement the Teacher interface:

- Create an example object that conforms to the `Teacher` interface, and log it to the console.

### Task 2: Extending the Teacher class

1. Extend the `Teacher` interface:

- Define a new `Directors` interface that extends `Teacher` and adds a `numberOfReports` field.

2. Example usage:

- Create an object of type `Directors` and log it to the console.

### Task 3: Printing teachers

1. Define the `printTeacher` function:

- Create a function `printTeacher` that accepts `firstName` and `lastName` and returns a formatted string like "J. Doe".

2. Create an interface for the function:

- Define an interface `printTeacherFunction` that describes the shape of this function.

### Task 4: Writing a class

1. Define a `StudentClass`:

- Create a class named `StudentClass` with a constructor that accepts `firstName` and `lastName`, and implements methods `workOnHomework` and `displayName`.

2. Use TypeScript:

- Define both the constructor and the class using interfaces.

### Task 5: Advanced types Part 1

1. Create interfaces:

- Define `DirectorInterface` and `TeacherInterface`, each with methods for their respective roles.

2. Create a function `createEmployee`:

- Implement a function that creates either a `Director` or a `Teacher` depending on the salary argument.

### Task 6: Creating functions specific to employees

1. Define `isDirector` and `executeWork`:

- Write a function that checks if an employee is a `Director` and another that executes the respective work based on the role.

### Task 7: String literal types

Define a `Subjects` literal type:

- Create a literal type `Subjects` that can only be `"Math"` or `"History"`.
- Implement a function `teachClass` that returns different strings based on the subject.

### Task 8: Ambient Namespaces

1. Create a namespace and ambient file:

- Define types for `RowID` and `RowElement` in `interface.ts`.
- Create an ambient declaration file for `crud.js` and write the necessary TypeScript types.
- Use these types in `main.ts` and demonstrate calling the `CRUD` functions.

### Task 9: Namespace & Declaration merging

1. Namespace `Subjects`:

- Create interfaces and classes in a namespace `Subjects` and use declaration merging to extend the `Subjects` namespace with additional functionality.

### Task 10: Update `task_4/js/main.ts`

- Create Constants: Export constants `cpp`, `java`, and `react` for each subject.
- Define Teacher Object: Create `cTeacher` with `experienceTeachingC = 10`.
- Log Subject Information: For each subject (Cpp, Java, React), log the subject name, set `cTeacher` as the teacher, and call `getRequirements` and `getAvailableTeacher` methods.

### Task 11: Brand Convention & Nominal Typing

- Create Directory: Make a `task_5` directory and copy `package.json`, `tsconfig.json`, and `webpack.config.js`.
- Define Interfaces: Create `MajorCredits` and `MinorCredits` interfaces with `credits` and unique `brand` properties.
- Implement Functions: Create `sumMajorCredits` and `sumMinorCredits` functions to sum the credits of each interface.
