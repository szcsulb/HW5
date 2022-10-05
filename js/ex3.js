//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions
const cStudentList = studentList.filter( ( el, i ) => {
  return el.lastName.startsWith( 'C' ) || el.lastName.startsWith( 'c' );
});
//Declare cLastNameResults.  Use functions and map a new array of objects
const cLastNameResults = cStudentList.map( student => {
  student.minScore = Math.min( ...student.scores );
  student.maxScore = Math.max( ...student.scores );
  student.avgScore = student.scores.reduce( ( sum, x ) => { return sum + x; } );
  student.avgScore /= student.scores.length;
  delete student.scores;
  return student;
}); 
//Output
console.log(cLastNameResults);

