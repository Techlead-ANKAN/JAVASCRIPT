// Practice Set - 4

// 1) What will be the output of the following script ? console.log("har\"".length)
console.log('har"'.length); // 4

// 3) Write a program to convert a string to lower case.

let text = "ANKAN MAITY";
console.log("Original = " + text);

let res = text.toLowerCase();
console.log("Lower Cased = " + res);

// 4) Extract the amount out the string.

let str = "Please give Rs 1000";
console.log("Amount = " + str.slice(15, 19));

// 5) Try to change the 4th character of a given string.

let str1 = "Ankan";
console.log("Before replacing = " + str1);
let new_str1 = str1.replace(str1[2], "@");
console.log("After replacing = " + new_str1);
