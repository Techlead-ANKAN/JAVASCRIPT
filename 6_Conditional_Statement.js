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

if (a > b) 
{
  console.log("a > b");
}
else 
{
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

if (a > b) 
{
  console.log("a > b");
}
else if (a == b )
{
  console.log("a == b");
}
else
{
  console.log("a < b");
}