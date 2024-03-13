// Practice Set - 1

// Q1) Create a variable of type string and try to add a number to it.

let str1 = "Ankan";
let num1 = 2003;
let res1;
res1 = str1 + num1; // since addition of string with a number is not possible, concatenation will take place.
console.log("A1: " + res1);

// Q2) Use typeof operator to know the datatype of the result of the Q1
let str2 = "Ankan";
let num2 = 2003;
let res2;
res2 = str2 + num2; // since addition of string with a number is not possible, concatenation will take place.
console.log("A2: " + typeof res2);

// Q3) Create a constant object in javascript. Can you change it to store a number in it later.

const obj3 = {
  topic: "Practice Set - 1",
  filename: "4_Practice_Set_1.js",
};

// obj3 = 45; this will show an error

console.log("A3: ");
console.log(obj3);

// Q4) Try to add a new key to the constant object in Q3. Were you able to do it?

const obj4 = {
  topic: "Practice Set - 1",
  filename: "4_Practice_Set_1.js",
};

obj4["language"] = "JavaScript";

console.log("A4: ");
console.log(obj4);

// Q5) Write a Js program to create a word-meaning dictionary of 5 words.

const obj5 = {
  happy : "in a good mood",
  sad : "in a bad mood",
  angry : "anxiety",
  correct : "right",
  wrong : "not correct"
};

console.log("A5: ");
console.log(obj5);

