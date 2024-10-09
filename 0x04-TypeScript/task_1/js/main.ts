// main.ts

// Task-1
// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


// Task-2
// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}


// Task-3
// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`
}


// Task-4
// Define the interface for the constructor parameters
interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

// Define the interface for the class
interface Student {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements Student {
  //Properties
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example Usage
const student1 = new StudentClass('Jhon', 'Doe');
console.log(student1.workOnHomework());
console.log(student1.displayName());
