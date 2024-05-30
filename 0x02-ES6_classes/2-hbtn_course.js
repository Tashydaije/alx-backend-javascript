export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateString(name, 'name');
    this._length = HolbertonCourse._validateLength(length, 'length');
    this._students = HolbertonCourse._validateStudents(students);
  }

  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  static _validateLength(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  static _validateStudents(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    return value;
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

  set name(value) {
    this._name = HolbertonCourse._validateString(value, 'name');
  }

  set length(value) {
    this._length = HolbertonCourse._validateLength(value, 'length');
  }

  set students(value) {
    this._students = HolbertonCourse._validateStudents(value);
  }
}
