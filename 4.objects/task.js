function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.hasOwnProperty("addMarks")) {
    this.marksToAdd.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
    if (marksToAdd.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < marksToAdd.length; i++) {
        sum = sum + marksToAdd[i];
    }
    return sum / marksToAdd.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marksToAdd;

  this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);