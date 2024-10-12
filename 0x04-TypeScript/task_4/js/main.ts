export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
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
console.log('C++');
console.log(cpp.getRequirements()); // Output: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Output: Available Teacher: John

// Testing Java class
console.log('Java');
console.log(java.getRequirements()); // Output: Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // Output: Available Teacher: John

// Testing React class
console.log('React');
console.log(react.getRequirements()); // Output: Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // Output: Available Teacher: John
