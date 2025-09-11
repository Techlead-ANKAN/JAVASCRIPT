// 3. Implement a higher-order function that takes another function as input and applies it to an array.
/*
🔹 Breaking it down

You’ll write a function (say applyFunctionToArray).

This function will accept two things:

An array (like [1, 2, 3])

A function (like double(x) → returns x * 2)

Inside your HOF, you’ll apply the input function to each element of the array.

Then return a new array with the modified values.
*/

const f1 = (fn, arr) => {
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(fn(arr[i]));
    }
    return result;
}

const f21 = (arg) => arg + 2;

const num = [1,2,3,4];

console.log(f1(f21, num));