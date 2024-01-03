export default function createReportObject(employeesList) {
  const result = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return result;
}
