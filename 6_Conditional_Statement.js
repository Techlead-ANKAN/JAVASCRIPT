// Conditional Statement in JavaScript

let a = 2;
let b = 10;

// 1. if statement

/* Syntax : -
if (condition)
{
  statement to be executed
}
*/

if (a < b) {
  console.log("a < b");
}

// 2. if-else statement

/* Syntax : -
if (condition)
{
  statement to be executed
}
else 
{
  statement to be executed
}
*/

if (a > b) {
  console.log("a > b");
} else {
  console.log("a < b");
}

// 2. if-else if-else statement

/* Syntax : -
if (condition)
{
  statement to be executed
}
else if (condition)
{
  statement to be executed
}
else
{
  statemnet to be executed
}
*/

if (a > b) {
  console.log("a > b");
} else if (a == b) {
  console.log("a == b");
} else {
  console.log("a < b");
}

// 3. Switch case Statement
/*
switch (condition)
{
  case (condition):
  statement to be executed;
  break;

  case (condition):
  statement to be executed;
  break;

  case (condition):
  statement to be executed;
  break;

  default:
  statement to be executed;
}
*/

let x = 1;
let text;
switch (x) {
  case 0:
    text = "Off";
    console.log("Text = " + text);
    break;

  case 1:
    text = "On";
    console.log("Text = " + text);
    break;

  default:
    text = "No value found";
    console.log("Text = " + text);
}
