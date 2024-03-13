// Operators in JavaScript

let a = 4;
let b = 2;

// 1. Arithmatic Operators

console.log("a + b = " + (a + b)); // Addition
console.log("a - b = " + (a - b)); // Subtraction
console.log("a * b = " + a * b); // Multiplication
console.log("a / b = " + a / b); // Quotient/Division
console.log("a % b = " + (a % b)); // Remainder/Modulus
console.log("a ** b = " + a ** b); // Exponentiation/Power
console.log("a++ = " + a++); // Post Increment
console.log("a = " + a);
console.log("++a = " + ++a); // Pre Increment
console.log("a = " + a);
console.log("b-- = " + b--); // Post Decrement
console.log("b = " + b);
console.log("--b = " + --b); // Pre Decrement
console.log("b = " + b);

let c = 10;

// 2. Assignment Operators

let d = 20; // equals operator
console.log("c += d = ", (c += d)); // c = c + d
console.log("c -= d = ", (c -= d)); // c = c - d
console.log("c *= d = ", (c *= d)); // c = c * d
console.log("c /= d = ", (c /= d)); // c = c / d
console.log("c %= d = ", (c %= d)); // c = c % d
console.log("c **= d = ", (c **= d)); // c = c ** d

let e = 5;
let f = 10;

// 3. Comparision Operators

console.log("e == f : " + (e == f)); // is equal to
console.log("e != f : " + (e != f)); // is not equal to
console.log("e === f : " + (e === f)); // is equal value and type
console.log("e !== f : " + (e !== f)); // is not equal value or not equal type
console.log("e > f : " + (e > f)); // is greater than
console.log("e < f : " + (e < f)); // is less than
console.log("e >= f : " + (e >= f)); // is greater equals to
console.log("e <= f : " + (e <= f)); // is less equals to

let g = 2;
let h = 1;

// 4. Logical Operators

console.log("(e>h) && (h<e) = " + (e > h && h < e)); // Logical AND
console.log("(e>h) || (h>e) = " + (e > h || h > e)); // logical OR
console.log("! ((e>h) || (h>e)) = " + !(e > h || h > e)); // logical NOT
