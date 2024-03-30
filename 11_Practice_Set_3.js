// Practice Set - 3

// Q1) Write a program to print the marks of a student in an object

let studentMarks = {
  ankan: 85,
  piu: 90,
};

let students = Object.keys(studentMarks);

for (let i = 0; i < students.length; i++) {
  let stud = students[i];
  console.log(studentMarks[stud]);
}

// Q2) Write a program using for-in loop for Q1

let obj2 = {
  ankan: 85,
  piu: 90,
};

for (let x in obj2) {
  console.log(obj2[x]);
}

// Q3) Write a program to print a message "try again" until the user gives the correct no.

// let times = 50;
// let i

// while (i != times) {
//   i = prompt("Enter a number: ");
// }

// Q4) Write a program to find the mean of 5 numbers.

let mean;
let n1 = 14;
let n2 = 24;
let n3 = 34;
let n4 = 44;
let n5 = 54;

mean = (n1 + n2 + n3 + n4 + n5) / 5;
console.log("Mean = " + mean);
