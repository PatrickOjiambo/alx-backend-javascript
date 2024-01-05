export default class HolbertonCourse {
  constructor(name, length, students) {
    this._length = HolbertonCourse.validateLength(length);
    this._name = HolbertonCourse.validateName(name);
    this._students = HolbertonCourse.validateStudents(students);
  }

  set name(name) {
    this._name = name;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  static validateName(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    return value;
  }

  static validateLength(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error('Length must be a number');
    }
    return value;
  }

  static validateStudents(value) {
    if (
      !Array.isArray(value)
      || !value.every((studentName) => typeof studentName === 'string')
    ) {
      throw new Error('Students should be an array of strings');
    }
    return value;
  }
}
