/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const teacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
  experienceTeachingJava: 5,
  experienceTeachingReact: 2,
};

// Setting the teacher for each subject
cpp.setTeacher(teacher);
java.setTeacher(teacher);
react.setTeacher(teacher);

// Testing Cpp class
console.log(cpp.getRequirements()); // Output: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Output: Available Teacher: John

// Testing Java class
console.log(java.getRequirements()); // Output: Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // Output: Available Teacher: John

// Testing React class
console.log(react.getRequirements()); // Output: Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // Output: Available Teacher: John
