// Practice Set - 5

// 1) Create an array of numbers and take user input to add numbers to this array.
// Runs only in browser due to prompt support issue.

// let num1 = [12, 58, 79];
// let op;
// while (true) {
//     op = prompt("Enter your choice: ");

//     op = Number.parseInt(op);

//     if (op == 0) {
//         break;
//     } else if (op == 1) {
//         newNum = parseInt(prompt("Enter new number: "));
//         num1.push(newNum);
//     } else {
//         console.log("Invalid Operation");
//     }

//     console.log("Array = " + num1);
// }

// // 2) Keep adding numbers to the array in Q1 untill the number 0 is added
// // Runs only in browser due to prompt support issue.

// let num2 = [12, 58, 79];

// while (true) {
//     let newNum2 = parseInt(prompt("Enter new number: "));

//     if (newNum2 != 0) {
//         num2.push(newNum2);
//     } else {
//         break;
//     }
// }

// console.log("Array: " + num2);

// 3) Filter for numbers divisible by 10 in an array.

let num3 = [12, 45, 78, 69, 20, 10, 40, 100];
let res3 = num3.filter(div_10);

function div_10(value, index, array) {
    return value % 10 == 0;
}

console.log("Array: " + res3);

// 4) Create an array of square of given numbers

// let res4 = [];

// let no = parseInt(prompt("How many entries: "));
// let i = 1;
// while (i <= 4) {
//     let num4 = parseInt(prompt("Enter number: "));
//     let newNum4 = num4 ** 2;
//     res4.push(newNum4);
//     i++;
// }

// console.log("Array: " + res4);

// 5) Use reduce method to calculate the factorial of a given number from an array of first n natural numbers.

let num5 = [1, 2, 3, 4, 5];
let res5 = num5.reduce((a, b) => {
    return a * b;
});
console.log(res5);
