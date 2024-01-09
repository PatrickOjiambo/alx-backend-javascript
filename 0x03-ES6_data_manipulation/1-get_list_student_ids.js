export default function getListStudentIds(studentList) {
  if (Array.isArray(studentList) === false) {
    return [];
  }
  const ids = studentList.map((item) => item.id);
  return ids;
}
