interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [propName: string]: any;
  location: string;
}
interface Directors extends Teacher {
  numberOfReports: number;
}
interface printTeacherFunction {
  firstLetter: string;
  lastName: string;
}
const printTeacher = (firstName: string, lastName: string) => {
  let firstLetter: string = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
};
interface StudentClasser{
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClasser{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string{
    return 'Currently working'
  }
  displayName(): string{
    return this.firstName;
  }
}
const student = new StudentClass("Paul", "jerry");
console.log(student.displayName())
console.log(student.workOnHomework())