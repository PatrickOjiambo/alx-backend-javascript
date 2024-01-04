export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'name');
    this._length = this.validateNumber(length, 'length');
    this._students = this.validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateString(value, 'name');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this.validateNumber(value, 'length');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this.validateStudents(value);
  }

  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new Error(`${attributeName} must be a string.`);
    }
    return value;
  }

  validateNumber(value, attributeName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error(`${attributeName} must be a valid number.`);
    }
    return value;
  }

  validateStudents(value) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new Error('students must be an array of strings.');
    }
    return value;
  }
}
// export default class HolbertonCourse {
//   constructor(name, length, students) {
//     this._name = this.validateName(name);
//     this._length = this.validateLength(length);
//     this._students = this.validateStudents(students);
//   }
//   get name() {
//     return this._name;
//   }
//   get length() {
//     return this._length;
//   }
//   get students() {
//     return this._students;
//   }
//   validateStudents(value) {
//     if (
//       !Array.isArray(value) ||
//       !value.every((item) => typeof item === "string")
//     ) {
//       throw new TypeError("Students must be a string.");
//     }
//   }
//   validateLength(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("Length must be a number");
//     }
//   }
//   validateName(value) {
//     if (typeof value !== "string") {
//       throw new TypeError("Name must be a string");
//     }
//   }
//   set students(value) {
//     this._students = this.validateStudents(value);
//   }
//   set length(value) {
//     this._length = this.validateLength(value);
//   }
//   set name(value) {
//     return (this._name = this.validateName(value));
//   }
// }
