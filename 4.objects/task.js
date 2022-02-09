
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);


student2.setSubject('literature');
student1.setSubject('math');


Student.prototype.addMark = function ([mark]) {
  if (this.marks === undefined) {
    this.marks = [mark];
    // добавить первую оценку
  } else {
    this.marks.push(mark)
    // добавить вторую и последующие оценки в массив
  }
}
student1.addMark([5]);
student1.addMark([3]);
student2.addMark([4]);
student2.addMark([5]);

// Добавить сразу много оценок в массив
Student.prototype.addMarks = function (...allMarks) {
  this.marks = this.marks.concat(...allMarks);
}
student1.addMarks([3, 5, 4, 5, 5]);
student2.addMarks([3, 4, 4, 3]);


Student.prototype.getAverage = function () {
  let elementsCount = this.marks.length;
  let sum = this.marks.reduce(function (result, elem) {
    return result + elem;
  }, 0);
  let result = sum / elementsCount;
  this.average = result.toFixed(2);
  //console.log(this.average);
}

student1.getAverage();
student2.getAverage();


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}
student1.exclude('low grades');
console.log(student1);
console.log(student2);


