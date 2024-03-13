// Loops

// Types of Loops: -

/* 
1) for loop - loops a block of code for a specific no.of times

Syntax: -
for(start;end;increment/decrement)
{
  code to be executed
}
*/

let i1;

for (i1 = 1; i1 <= 10; i1++) {
  console.log(i1 + " --> Ankan Maity");
}

console.log("\n");

/* 
2) for-in loop - loops throught the keys on an object in js

Syntax: -
for(keys in object)
{
  code to be executed
}
*/

let const2 = {
  name: "Ankan",
  age: 20,
  gender: "M",
  stream: "CSE",
};

for (let x in const2) {
  console.log(x);
}

console.log("\n");

/* 
3) for-of loop - loops throught the values on an iterables(not object) in js
Note : - Iterables - Arrays, Strings, Maps, Sets etc
          ** Objects are not iterables

Syntax: -
for(values of iterables)
{
  code to be executed
}
*/

let const3 = "Ankan Maity";

for (let v of const3) {
  console.log(v);
}

console.log("\n");

/* 
4) while loop - loops a specific block on a specific condition

Syntax: -
while(condition)
{
  code to be executed
  
  increment/decrement;
}
*/

let i4 = 5;

while (i4 <= 10) {
  console.log(i4 + " --> Ankan Maity");
  i4++;
}

console.log("\n");

/* 
5) do-while loop - while loop variant that runs atleast once

Syntax: -
do{
  code to be executed

  increment/decrement;
}
while(condition)
*/

let i5 = 11;
do {
  console.log(i5 + " --> Ankan Maity");
  i5++;
} while (i5 <= 10);
