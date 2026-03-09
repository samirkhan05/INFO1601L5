// Object literals
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    { course: 'INFO 1603', 
      grades: [89, 34, 67] },
    { course: 'INFO 1601', 
      grades: [89, 34, 67] }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    { course: 'INFO 1601', 
      grades: [100, 89, 79] }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    { course: 'INFO 1600', 
      grades: [89, 34, 67] }
  ]
};

const students = [bob, sally, paul];


function getAverateGrade(student, course) {
  const entry = student.transcript.find(t => t.course === course);
  if (!entry) return -1;

  const sum = entry.grades.reduce((total, g) => total + g, 0);
  return sum / entry.grades.length;
}


function getAssignmentMark(student, course, num) {
  const entry = student.transcript.find(t => t.course === course);
  if (!entry) return -1;

  return entry.grades[num] !== undefined ? entry.grades[num] : -1;
}


function averageAssessment(students, courseName, assignment) {
  const marks = students
    .map(student => getAssignmentMark(student, courseName, assignment))
    .filter(mark => mark !== -1);

  if (marks.length === 0) return -1;

  const sum = marks.reduce((total, m) => total + m, 0);
  return sum / marks.length;
}

