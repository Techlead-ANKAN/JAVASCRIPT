// Arrays in JavaScript

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
