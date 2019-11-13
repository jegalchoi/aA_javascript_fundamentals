function Student (first_name, last_name) {
  this.first_name = first_name,
  this.last_name = last_name,
  this.courses = [];
};

let jay = new Student('jay', 'choi');
console.log(jay);

Student.prototype.name = function () {
  return `${this.first_name} ${this.last_name}`;
}
console.log(jay.name());

Student.prototype.enroll = function (new_course) {
  if (this.courses.length != 0) {
    let conflict = false;
    this.courses.forEach( function (course) {
      if (new_course.conflictsWith(course)) {
        conflict = true;
      }
    });
    if (conflict == true) {
      return 'There is a scheduling conflict.';
    } else {
      new_course.addStudent(this);
      return 'Course successfully added.'
    }
  } else {
    new_course.addStudent(this);
    return 'Course successfully added.'
  }
};

Student.prototype.courseLoad = function () {
  let hash = {};

  this.courses.forEach(course => hash[course.department] == undefined ? hash[course.department] = course.credits : hash[course.department] += course.credits);

  return hash;
};

function Course (name, department, credits, days, block) {
  this.name = name,
  this.department = department,
  this.credits = credits,
  this.students = [],
  this.days = days,
  this.block = block
};

let math1 = new Course('mathematics 101', 'mathematics', 4, ['mon'], 1);
let math2 = new Course('mathematics 102', 'mathematics', 6, ['mon'], 1);
let math3 = new Course('mathematics 103', 'mathematics', 8, ['tue'], 1);

Course.prototype.addStudent = function (student) {
  if (!this.students.includes(student)) {
    this.students.push(student);
    student.courses.push(this);
  };
};

Course.prototype.conflictsWith = function (current_course) {

  if (this.days.every(day => current_course.days.includes(day)) && this.block == current_course.block) {
    return true;
  }
  return false;
};

console.log(jay.enroll(math1));
console.log(jay);
console.log(math1);
console.log(jay.enroll(math2));
console.log(jay);
console.log(math2)
console.log(jay.enroll(math3));
console.log(jay);
console.log(math3)

jay.courseLoad();
