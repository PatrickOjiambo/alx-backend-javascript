export default function updateStudentGradeByCity(
  studentLists,
  city,
  newGrades,
) {
  const results = studentLists.filter((item) => item.location === city);
  const finalResults = results.map((item) => {
    const filteredStudents = newGrades.filter(
      (student) => student.studentId === item.id,
    );
    if (filteredStudents.length > 0) {
      return {
        ...item,
        grade: filteredStudents[0].grade,
      };
    }
    return {
      ...item,
      grade: 'N/A',
    };
  });
  return finalResults;
}
