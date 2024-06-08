// Arrays in JavaScript

const { arrayBuffer } = require("stream/consumers");

// Arrays - In JavScript Arrays are variables which contains more than one items(of different types or of indentical types). they are mutable.

let marks = [];

// Assigning values
marks[0] = 99;
marks[1] = 92;
marks[2] = 54;
marks[3] = 87;

console.log("After Assigning, marks = " + marks);

// Length of an array
console.log("Length of Array = " + marks.length);

// Changing Values of an array

marks[2] = 100;

console.log("After changing the marks of 3rd student, marks = " + marks);

// Arrays are of objects type

console.log("Type of an array: " + typeof marks);

// Array Methods: -

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1) array.length
console.log(arr.length);

// 2) array.toString()  --> Converts the array into a string
console.log(arr.toString());

// 3) array.at(index)  --> Used to find the element present in that index of an array
console.log(arr.at(3));

// 4) array.join(separator)  --> It behave just like "toString" in addition you can add the separator as well
console.log(arr.join("@"));

// 5) array.pop()  --> returns the last element of an array.
let item = arr.pop();
console.log("Last element of the array = " + item);
console.log(arr);

// 6) array.push()  --> Adds an element at the end of array and returns the new length.

let res = arr.push(10);
console.log(res);

// 7) array.shift()  --> removes the first element of an array and returns the shifted element.

let shft = arr.shift();
console.log("Shifted Element = " + shft);
console.log(arr);

// 8) array.unshift(element)  --> Adds new element add the begining of the array and returns the new array length.

let a = arr.unshift(99);
console.log("Length after unshifting = " + a);
console.log(arr);

// 9) delete array[index]  --> Deletes the element present in that index of an array.
//    Note - It leaves undefined holes in the array use pop() or shift() instead.

delete arr[2];
console.log(arr);

// 10) array1.concat(array2, array3, .....)  --> Use to merge array elements.

let new_arr = arr.concat([12, 45, 78, 9, 631, 65, 18], ["Ankan", "Piu"]);
console.log(new_arr);

// 11) arrauy.copyWithin(x, y, z)  --> Copy all the elements from index y to z to the index x.

arr.copyWithin(2, 0, 2);
console.log(arr);

// 12) array.flat()  -->  It is used to reduce the dimensionality of an array.

let arr2 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
let new_arr2 = arr2.flat();
console.log(new_arr2);

// 13)

// (i) array.splice(dest_index, no.of items to be removed, new_items, new_items, ....)  --> It is used to add new elements to a particular index and can also remove any items from the dest_index if you want and returns the the deleted items.

// (ii) array.toSpliced(dest_index, no.of items to be removed, new_items, new_items, ....)  --> Everything is same the only change is that it does not make any changes to the original array instead creates a new array.

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let r2 = ar.toSpliced(5, 1, "ANKAN", "PIU"); //(ii)
let r1 = ar.splice(3, 4, "Ankan", "Piu"); //(i)

console.log(r1);
console.log(ar);
console.log(r2);

// 14) array.slice(start, end)  --> used to slice a portion of the array from the starting index to the ending index.

let char = ["a", "b", "c", "a", "d", "e"];
console.log(char.slice(1, 3));

// 15) array.indexOf(element)  --> Used to find the index of the element in array.

console.log("Index of 'c': " + char.indexOf("c"));

// 16) array.lastIndexOf(element)  --> Used to find the last index of the element in array.

console.log("Last index of 'a': " + char.lastIndexOf("a"));

// 17) array.includes(element)  -> Used to check if the element is present in the array.

console.log(char.includes("c"));

// 18)
let num = [4, 8, 12, 9, 16, 20, 24, 28];

// (i) array.find(test_function)  --> The find() method returns the value of the first array element that passes a test function.

let first_ele = num.find(not_even);
console.log(first_ele);

function not_even(value, index, num) {
    return value % 2 != 0;
}

// (ii) array.findIndex(test_function)  --> The findIndex() method returns the index of the first array element that passes a test function.

let ind = num.findIndex(not_even);
console.log(ind);

function not_even(value, index, num) {
    return value % 2 != 0;
}

// (iii) array.findLast(test_function)  --> the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

const temp = [27, 41, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log(high);

// (iv) array.findLastIndex(test_function)  --> the findLastIndex() method that will start from the end of an array and return the index of the first element that satisfies a condition.

const temp1 = [27, 28, 30, 40, 42, 35, 30];
let high1 = temp1.findLastIndex((x) => x > 40);
console.log(high1);

// 19)

// (i) array.sort()  --> Sorts the array in ascending order.

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

// (ii) array.toSorted()  --> Creates a new array and does not make any changes to the original array

let frt1 = fruits.toSorted();
console.log(frt1);

// 20)

// (i) array.sort()  --> Revreses the array.

let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.reverse();
console.log(fruits2);

// (ii) array.toReversed()  --> Creates a new array and does not make any changes to the original array

let frt2 = fruits2.toReversed();
console.log(frt2);

// 21)

// (i) array.sort(function(a, b){return a - b})  --> returns the array in ascending order

let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a - b;
});

console.log(points); // [ 1, 5, 10, 25, 40, 100 ]

// (ii) array.sort(function(){return 1 - Math.random()})  --> returns the array in random order

let points2 = [40, 100, 1, 5, 25, 10];

points2.sort(function () {
    return 0.5 - Math.random();
});

console.log(points2);

// 22) Math.min.apply()  --> To find the lowest number in the numeric array.

let roll = [2, 4, 6, 1, 3, 6, 7, 9];
console.log(Math.min.apply(null, roll));

// 23) Math.max.apply()  --> To find the highest number in the numeric array.

let roll2 = [2, 4, 6, 1, 3, 6, 7, 9];
console.log(Math.max.apply(null, roll2));

// 24) array.forEach(function)  --> It is used to call a function once for each array element

let numbers = [2, 4, 6, 1, 3, 6, 7, 9];
let m = [];
numbers.forEach(sample_func);

function sample_func(value, index, array) {
    m.push(value * 10);
}

console.log(m);

// 25) array.map(function)  -> It is used to call a function once for each array element and creates a new array and does not make any changes to the original array.

let numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
}

// 26) array.filter(test_function)  --> The filter() method creates a new array with array elements that pass a test.

const x = [45, 4, 9, 16, 25];
const over18 = x.filter(myFunction);
console.log(over18);
function myFunction(value, index, array) {
    return value > 18;
}

// 27) array.reduce(test_function)  --> The reduce() method runs a function on each array element to produce (reduce it to) a single value.

const y = [45, 4, 9, 16, 25];
let sum = y.reduce(myFunction);
console.log(sum);
function myFunction(total, value, index, array) {
    return total + value;
}

// 28) array.reduceRight(test_function)  --> The reduce() method runs a function on each array element to produce (reduce it to) a single value. The reduceRight() works from right-to-left in the array. See also reduce().

const z = [45, 5, 9, 16, 25];
let sum2 = z.reduce(myFunction);
console.log(sum2);
function myFunction(total, value, index, array) {
    return total + value;
}

// 29) array.every(test_function)  --> The every() method checks if all array values pass a test.

const d = [45, 4, 9, 16, 25];
let allOver18 = d.every(myFunction);

function myFunction(value, index, array) {
    return value > 5;
}

// 30) array.some(test_function)  --> The some() method checks if some array values pass a test.

const e = [45, 4, 9, 16, 25];
let someOver18 = e.every(myFunction);

function myFunction(value, index, array) {
    return value > 40;
}

// 31) Array.from(string)  --> The Array.from() method returns an Array object from any object with a length property or any iterable object.

let xyz = Array.from("ANKAN LOVES PIU");
console.log(xyz);
