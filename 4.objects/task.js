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
  if (this.hasOwnProperty("addMarks")) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty("marks") || marks.length === 0) {
        return 0;
    }
    this.sum = 0;
    for (let i = 0; i < marks.length; i++) {
        this.sum = this.sum + this.marks[i];
    }
    return this.sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);