/* 6. Build a function composition utility (compose(f,g)(x) → f(g(x))). 
🔹 Breaking it down

Suppose you have two functions:

const f = x => x + 1;
const g = x => x * 2;


compose(f, g) should produce a new function that does:

f(g(x))


First, g(x) runs.

Then, the result of g(x) is passed into f(). 
*/


const f1 = (n) => {
    return n+1;
}

const f2 = (n) => {
    return n+2;
}

const compose = (fn1, fn2) => {
    return (x) => f1(f2(x));
}

const combined = compose(f1, f2);

console.log(combined(5));