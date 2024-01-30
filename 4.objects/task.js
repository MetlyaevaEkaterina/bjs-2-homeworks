function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.hasOwnProperty("marks")) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty("marks") || marks.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + this.marks[i];
    }
    return sum / marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);