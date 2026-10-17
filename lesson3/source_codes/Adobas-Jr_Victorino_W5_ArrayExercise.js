// Adobas-Jr_Victorino_W5_ArrayExercise.js
'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original student names and scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for Part G.
const originalNames = Array.from(studentNames);

// Part A: Display each student's index, name, and score.
console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

// Part B: Add students while keeping names and scores matched.
console.log('\nPART B: ADD NEW STUDENTS');

//  Add Faith and 88 at the end.
studentNames.push('Faith');
studentScores.push(88);
//  Add Aaron and 76 at the beginning.
studentNames.unshift('Aaron');
studentScores.unshift(76);
//  Display both arrays and their length.
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

// Part C: Remove and replace matching names and scores.
console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// Remove the first student, Aaron.
studentNames.shift();
studentScores.shift();

// Remove the last student, Faith.
studentNames.pop();
studentScores.pop();

// Find and remove Daniel and his score.
const danielIndex = studentNames.indexOf('Daniel');

if (danielIndex !== -1) {
  studentNames.splice(danielIndex, 1);
  studentScores.splice(danielIndex, 1);
}

// Insert Grace and her score at index 2.
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

console.log('\nPART D: CLASS STATISTICS');

let sum = 0;
let highestScore = studentScores[0];
let lowestScore = studentScores[0];

let i;
//  Calculate the total score.
for ( i = 0; i < studentScores.length; i++) {
  sum += studentScores[i];

  //  Find the highest score.
  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }
  //  Find the lowest score.
  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];
  }
}
//  Calculate the average score.
const average = sum / studentScores.length;

//  Display all statistics.
console.log(`Total Score: ${sum}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);

console.log('\nPart E: Analyze Passing Scores');

//  Use filter to obtain passing scores.
const passing = studentScores.filter(score => score >= 75);
console.log('Passing Scores:', passing);

//  Use map to produce Passed or Failed statuses.
const statuses = studentScores.map(score => {
  if (score >= 75) {
    return 'Passed';
  } else {
    return 'Failed';
  }
});

console.log('Statuses:', statuses);

//  Use some to check whether at least one student failed.
const hasFailure = studentScores.some(score => score < 75);
console.log('At Least One Failed:', hasFailure);
//  Use every to check whether all students passed.
const allpassed = studentScores.every(score => score >= 75);
console.log('All student passed:', allpassed);


console.log('\nPart F: Sort and Search');

//  Copy the scores using Array.from.
let copiedScores = Array.from(studentScores);
//  Sort the copy from highest to lowest.
let sortedScores = copiedScores.sort((a, b) => b - a);
console.log('Sorted Scores:', sortedScores);
//  Search for 91 using includes and indexOf.
console.log('Contains 91:', studentScores.includes(91));
console.log('Index of 91:', studentScores.indexOf(91));


console.log('\nPart G: Analyze Activity Scores');

const activityAverages = [];

//  Use nested loops to process every row and column.
//  Calculate and store each student's activity average.
for (let row = 0; row < activityScores.length; row++) {
  let rowtotal = 0;
  const rowScores = [];
    for (let column = 0; column < activityScores[row].length; column++) {
      let score = activityScores[row][column];
      rowScores.push(score);
      rowtotal += score;
    }
  let average = rowtotal / activityScores[row].length;
  activityAverages.push(average);

  console.log(
    `${originalNames[row]}'s activity scores: ${rowScores.join(' | ')}`
  );

  console.log(
    `${originalNames[row]}'s activity average: ${average.toFixed(2)}`
  );

}

console.log('\nActivity Averages:', activityAverages);
console.log('\nPart H: Display current student names');
//  Use join to display names separated by " | ".
console.log('Students:', studentNames.join(' | '));