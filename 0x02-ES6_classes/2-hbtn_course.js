// 2-hbtn_course.js

class HolbertonCourse {
  constructor(name, length, students) {
    // Type validation for the constructor
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  // Validation methods
  static _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  static _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  static _validateStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters with validation
  set name(name) {
    this._name = this._validateName(name);
  }

  set length(length) {
    this._length = this._validateLength(length);
  }

  set students(students) {
    this._students = this._validateStudents(students);
  }
}

export default HolbertonCourse;
