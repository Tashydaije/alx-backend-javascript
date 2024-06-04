export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  return students.map((student) => {
    const newStudent = { ...student };
    const newGrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (newGrade.length > 0) {
      newStudent.grade = newGrade[0].grade;
    } else {
      newStudent.grade = 'N/A';
    }
    return newStudent;
  }).filter((student) => student.location === city);
}
