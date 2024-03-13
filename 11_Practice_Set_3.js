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

for (let x in obj2)
    {
        console.log(obj2[x]);
    }


