// 2. Create a function factory that returns functions (e.g., createMultiplier(2) returns a function that doubles numbers).

const f1 = (a) => {
    return function (b) {
        return a * b;
    }
}

const f2 = f1(2);
console.log(f2(4));