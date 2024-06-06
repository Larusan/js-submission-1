//Question 08

function getHighGrades(students) {
  const highGradeStudents = students.filter((student) => student.grade > 80);

  const highGradeNames = highGradeStudents.map((student) => student.name);

  return highGradeNames;
}

const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 70 },
  { name: "Charlie", grade: 85 },
];

const highGradeStudents = getHighGrades(students);
console.log(highGradeStudents);
