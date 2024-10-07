export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.filter((grade) => grade.studentId === student.id)[0];
      const grade = gradeObj ? gradeObj.grade : 'N/A';

      return { ...student, grade };
    });
}
