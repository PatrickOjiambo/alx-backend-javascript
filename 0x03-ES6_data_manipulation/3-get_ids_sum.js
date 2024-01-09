import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(studentLists) {
  const ids = getListStudentIds(studentLists);
  return ids.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
