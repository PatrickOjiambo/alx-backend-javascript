/**
 * 
 * @param {String} departmentName 
 * @param {String} employees 
 * @returns 
 */
export default function createEmployeesObject(departmentName, employees) {
return {[`${departmentName}`]: employees}
}
