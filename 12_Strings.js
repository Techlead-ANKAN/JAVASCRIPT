// Strings and Template Literals  in JavaScript

// Strings - It is a sequence of characters in javascript used for text manipulation. These are immutable.

let sample_txt = "Ankan Maity";
let sample_txt2 = "Piu Maity";

console.log(sample_txt); // "Ankan Maity"
console.log(sample_txt2); // Piu Maity

// Accessing Characters at a specfic index
console.log("sample_txt[2] = " + sample_txt[2]);

// Note - String should have same starting and ending quotes i.e. single or double quotes otherwise error will be shown

// Template Literals - It uses backticks(`) instead of quotes fo defining texts and allows single quotes or double quotes inside them.

let sample_txt3 = `texts`;
let sample_txt4 = `My 'name' is "Ankan Maity"`;

console.log(sample_txt3); // texts
console.log(sample_txt4); // My 'name' is "Ankan Maity"

// String Interpolation - We can directly insert variables inside template literals, known as String Interpolation.

let name = "Ankan Maity";
let text = `My name is ${name}`;
console.log(text);

// String Methods

let str = "I am a good boy";

// 1) length - Used to display the length of the string
console.log("str.length = " + str.length);

// 2) toUpperCase() - Used to translate into upper cased
console.log("str.toUpperCase() = " + str.toUpperCase());

// 3) toLowerCase - used to translate into lower cased
console.log("str.toLowerCase() = " + str.toLowerCase());

// 4) slice(start, end) - Used to slice the string from the starting index to untill end index is reached. (if only start is mentioned then it means slice from start till last)
console.log("str.slice(2, 7) = " + str.slice(2, 9));
console.log("str.slice(2) = " + str.slice(2));

// 5) .replace(<old>, <new>) - Used to replace a string with another string
let new_str = str.replace("good", "bad");
console.log(`str.replace("good", "bad") = ` + new_str);

// 6) <str1>.concat(<str2>, <str3>, ......, <str n>) - Used to concat strings
let str1 = "String1";
let str2 = "String2";
let str3 = str1.concat(str2, "yes", "No");
console.log('str1.concat(str2, "yes", "No") = ' + str3);

// 7) trim() - Used to remove all leading and trailing (i.e. starting and ending)  white spaces
let str5 = "       This is JavaScript Language";
let new_str5 = str5.trim();
console.log("str5.trim() =" + new_str5);
