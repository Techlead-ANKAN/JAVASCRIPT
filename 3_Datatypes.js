// JavaScript has 8 Datatypes (7 Primitive data types(1st 7))

// 1. String - textual data
let a = "yellow";

// 2. Number - numbers
let b = 120;

// 3. Bigint - new data types to represent integers of arbitrary length
let c = BigInt("1234567890123456789012345678901234567890");

// 4. Boolean - true or false
let d = false;

// 5. Undefined - return statement with no value
let e;

// 6. Null - nulled value of datatype object
let f = null;

// 7. Symbol - unique value
let g = Symbol("foo");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// typeof  - it is used to show the the type of the datatype
console.log(typeof a); // string
console.log(typeof b); // number
console.log(typeof c); // bigint
console.log(typeof d); // boolean
console.log(typeof e); // undefined
console.log(typeof f); // object
console.log(typeof g); // symbol

// Object (Non-Primitive Data type)

// 8. Object - These are the data types that contains many "name : value" pairs separated by a coma.
const h = {
  name: "Ankan Maity",
  age: 20,
  gender: "Male",
  arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

console.log(h["name"]);
console.log(h.age);
console.log(h.arr);

console.log(typeof h); // object

// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date
