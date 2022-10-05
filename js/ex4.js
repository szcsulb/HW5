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

const updatedList = studentList.map( student => {
  let scores = student.scores.map( score => { return score + 5; } );
  let avgScore = scores.reduce( ( sum, x ) => { return sum + x; } );
  avgScore /= scores.length;
  scores.push( avgScore );
  student.scores = scores;
  return student;
});

updatedList.forEach( student => {  
  console.log( `Full name (last, first): ${student.lastName}, ${student.firstName}` );
  console.log( `Updated scores are: ${student.scores.join( ',' )}` );
});

