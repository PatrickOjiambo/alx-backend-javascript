export default function getStudentsByLocation(studentLists, city) {
  const results = studentLists.filter((item) => item.location === city);
  return results;
}
