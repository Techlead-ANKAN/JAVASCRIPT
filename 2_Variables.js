// variable - a variable is a container for storing data.

// variables can be declared in 4 ways: -

// 1."var"
//       a) you cannot use the variable before declaring it.
//       b) Variables declared with "var" are "function-scoped", meaning they are only accessible within the function they are declared in, or globally if declared outside of any function
//       c) Variables declared with "var" can be re-declared within the same scope without raising an error.
//       d) They are not limited to the block in which they are defined, but rather they are scoped to the nearest function or globally.
//       e) Variables declared using "var" but no initialization have a value of "undefined"

// 2."let"
//        a) They are block scopped, meaning they are only accessible within the block they are defined in.
//        b) Trying to access a variable before its declaration results in a ReferenceError.
//        c) you cannot re-declare a variable with "let" in the same scope.
//        d) Variables declared with let outside of any function or block belong to the global scope.
//        e) you cannot acces the variable before declaring it.

// 3."const"
//        a) Once declared cannot change the value afterward
//        b) Trying to reassign the value will result in "TypeError"
//        c) They are accessible within the block they are defined.
//        d) Trying to access a constant before its declaration results in a ReferenceError.
//        e) Constants declared with const outside of any function or block belong to the global scope.

// 4.automatically / nothing

//"Testcases" for "var"
console.log("Test cases for 'var' \n");
// 1.
var name;
name = "Ankan Maity";
console.log(name);

// 2.
console.log(x); // this will show undefined
var x = 10;

// 3.
var a = 10;
var a = 20;
console.log(a); // this will show 20

// 4.
var z;
console.log(z); // this will show undefined

// 5.
var name = "Piu";
{
  var name = "Ankan Maity";
  console.log("Inside Block: " + name); // this will show Ankan Maity
}
console.log("Outside Block: " + name); // this will show Ankan Maity

//====================================================================================================

//"Testcases" for "let"
console.log("\nTest cases for 'let' \n");
// 1.
let age = 25;
{
  let age = 20;
  console.log("Inside Block: " + age); // this will show 20
}
console.log("Outside Block: " + age); // this will show 25

// 2.
//console.log(gender); //  ReferenceError "gender" is not defined

// 3.
let college_name = "HIT";
//let college_name = "IEM";  Identifier 'college_name' has already been declared
console.log("College Name: " + college_name);

// 4.
// console.log(newvar); // newvar is not defined

//====================================================================================================

//"Testcases" for "let"
console.log("\nTest cases for 'const' \n");

// 1.
const y = 10;
//const y = 20;
console.log("y: " + y); // Identifier 'a' has already been declared

// 2.
const frnd = "Piu";
{
  const frnd = "Ankan";
  console.log("Inside Block: " + frnd); // this will show Ankan
}
console.log("Outside Block: " + frnd); // this will show Piu

// 3.
const person = "xyz"; // global variable
{
  console.log("Inside Block: " + person); // this will show xyz
}
console.log("Outside Block: " + person); // this will show xyz
