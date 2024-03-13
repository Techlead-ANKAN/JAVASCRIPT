// Practice Set - 2

// Q1) Use logical Operators to find whether the age of a person lies between 10 and 20.

let age = 15;

if (age > 10 && age < 20) {
  console.log("Age between 10 and 20");
} else {
  console.log("Age not between 10 and 20");
}

// Q2) Demonstrate a use of switch case statement.
let var1 = 2;

switch (var1) {
  case 1:
    console.log("var1 = " + 1);
    break;
  case 2:
    console.log("var1 = " + 2);
    break;
  default:
    console.log("Default Case");
}

// Q3) Write a js program to find whether a number is divisible by both 2 and 3.

let num = 6;

if (num % 2 == 0 && num % 3 == 0) {
  console.log("Divisble by both 2 and 3");
} else {
  console.log("Not divisble by both 2 and 3");
}

// Q4) Write a js program to find whether a number is divisible by 2 or 3.

let num2 = 15;

if (num2 % 2 == 0) {
  console.log("Divisble by 2");
} else if (num2 % 3 == 0) {
  console.log("Not divisble by 3");
}

// Q5) Print "You can drive"  or "You cannot drive" based on an age being greater than 18.

let age2 = 38;
res = age2 > 35 ? "You can drive" : "You cannot drive"; // if condition met then it will show pass or else fail

console.log(res);
