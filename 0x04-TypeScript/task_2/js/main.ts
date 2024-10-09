// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create the factory function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } 
  return new Director();
}

// Define the isDirector type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Define the executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } 
  return employee.workTeacherTasks();
}

// Test the functions
console.log(executeWork(createEmployee(200)));   // Output: Getting to work
console.log(executeWork(createEmployee(1000)));  // Output: Getting to director tasks
