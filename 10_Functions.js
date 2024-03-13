// Functions in JavaScript

// It is a block of code designed to perform a specific task

/*
Syntax: -

function <func_name> (parameter1, parameter2, ...)
{
  code that function will perform
}
*/

// Function Invocation - It is the process of calling a function in our code

// Syntax: - <func_name> (parameter1, parameter2, ...)

// Example 1: - Function to add two number
function addtwo(a, b) {
  return a + b;
}

let sum = addtwo(2, 3);
console.log("Sum = " + sum);

// Example 2: - Function to print all keys in an object

function showkeys(obj) {
  console.log("\nkeys inside an object: \n");
  for (let x in obj) {
    console.log(x);
  }
}

let student = {
  name: "Ankan",
  age: 20,
  gender: "M",
  stream: "CSE",
};

showkeys(student);
