export class Student {
  constructor(fullname) {
    this.fullname = fullname;
    this.courses = [];
  }

  registerCourse(course) {
    this.courses.push(course);
  }

  listCourses() {
    return `${this.courses}`;
  }
}
