# 0x03. ES6 Data Manipulation

## Description

This project focuses on using ES6 features to manipulate data structures, such as arrays, typed arrays, sets, maps, and weak maps. You'll explore methods such as map, filter, and reduce, as well as how to handle more complex data structures like TypedArrays, Sets, and Maps. These methods will allow you to process data more efficiently and introduce you to modern JavaScript programming practices.

## Learning Objectives

By the end of this project, you should be able to:

- Use map, filter, and reduce on arrays effectively.
- Understand and work with typed arrays.
- Use Set, Map, and WeakMap data structures.
- Manipulate data efficiently in JavaScript using ES6 methods.

## Resources

Read or watch:

[Array](https://intranet.alxswe.com/rltoken/bcXqK1IaIHtrZ45sv0RxsQ)\
[TypedArray](https://intranet.alxswe.com/rltoken/YZ5RtzAPTaWtF00MYbXuVw)\
[Set Data Structure](https://intranet.alxswe.com/rltoken/Ch8vq39y9QnlTMr8CymgEg)\
[Map Data Structure](https://intranet.alxswe.com/rltoken/W29MV3f8Ii4HmeJSALNIpw)\
[WeakMap](https://intranet.alxswe.com/rltoken/pSetFVFeIR660GPE0flPdg)

## Tasks

### 0. Basic list of objects

- **Goal:** Create a function `getListStudents()` that returns an array of student objects with `id`, `firstName`, and `location` as attributes.
- **Example Output:**
```js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
```

### 1. More mapping

- **Goal:** Create a function `getListStudentIds()` that returns an array of student IDs from an array of objects. If the argument is not an array, return an empty array.
- **Usage:** You will use the `map()` function to extract the `id` values from the student objects.

### 2. Filter

- **Goal:** Create a function `getStudentsByLocation()` that returns a filtered list of students based on the `location`. It should take a list of students and a `city` string as arguments.
- **Usage:** Use the `filter()` function to only return students from the specified location.

### 3. Reduce

- **Goal:** Create a function `getStudentIdsSum()` that returns the sum of all student IDs. It should use the `reduce()` function to sum the `id` attributes from the student list.

### 4. Combine

- **Goal**: Create a function `updateStudentGradeByCity()` that returns students in a specific city with their updated grades. If a student doesn’t have a grade in the `newGrades` array, set their grade to `N/A`.
- **Usage:** Combine `filter()` and `map()` to update the list with new grades.

### 5. Typed Arrays

- **Goal:** Create a function `createInt8TypedArray()` that returns an `ArrayBuffer` with an `Int8` value at a specific position. If the position is outside the array's length, throw an error `"Position outside range"`.

### 6. Set data structure

- **Goal:** Create a function `setFromArray()` that converts an array into a `Set`. This will eliminate duplicate values from the array.

### 7. More set data structure

- **Goal:** Create a function `hasValuesFromArray()` that checks if all elements in an array exist in a `Set`. It should return `true` if all elements exist, otherwise `false`.

### 8. Clean set

- **Goal:** Create a function `cleanSet()` that returns a string of all `Set` values that start with a specific string (`startString`). The result string should concatenate the rest of each matching value and separate them by hyphens.

### 9. Map data structure

- **Goal:** Create a function `groceriesList()` that returns a `Map` object containing grocery items as keys and their quantities as values.

### 10. More map data structure

- **Goal:** Create a function `updateUniqueItems()` that updates the quantities of items in a `Map` with an initial quantity of 1 to 100. If the argument passed isn't a `Map`, throw an error `"Cannot process"`.

### 11. Weak link data structure `#advanced`

- **Goal**: Export a const instance of WeakMap and name it weakMap. Export a new function named queryAPI. It should accept an endpoint argument like so:
```js
  {
    protocol: 'http',
    name: 'getUsers',
  }
```
Track within the weakMap the number of times queryAPI is called for each endpoint. When the number of queries is >= 5 throw an error with the message Endpoint load is high.

## Author

[NaoufalHdr1](https://github.com/naoufalHdr1)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

