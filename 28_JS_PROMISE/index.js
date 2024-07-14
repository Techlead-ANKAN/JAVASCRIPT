// JS PROMISE

// The solution to the "callback pyramid of doom" or "callback hell". A promise is a promise of the execution of some code. Th code either executes or fails in noth the cases ther user will be notified.

// Syntax: -

/*

let <variable> = new Promise ( function (<resolve>, <reject>) {
    // code that is promised to be executed --- Producing Code

    <resolve>(<value>);     // when the code executed succesfully
    <reject>(<error>);      // when the execution of the code is failed

});

// Consuming Code
myPromise.then(
  function(value) {  <code if successful>  },
  function(error) {  <code if some error> }
);

*/ 

// When the Producing code obtains the result, then it should call one of the two callbacks:
//  When                     Call
// Success                  <resolve>(result value)
// Error                    <reject>(error object)

// The Promise object has 3 states and its corresponding reults: 

// State of the promise object              Result
//        "pending"                       "undefined" 
//       "fulfilled"                       "<value>"
//       "rejected"                      "<error object>"                    


// Examples of JS Promise: - 

// let prom = new Promise( function (myResolve, myReject){
//     let a = parseInt(prompt("Enter a number: "));
//     let b = parseInt(prompt("Enter a number: "));

//     if ((a+b) == 6){
//         myResolve(909);
//     }
//     else{
//         myReject("A + B != 6");
//     }

// });

// console.log(prom);

// prom.then(
//     function(value) {alert("Success")},
//     function(error) {alert("Failure")}
// );


// let myPromise = new Promise(function (myResolve, myReject){
    
//     let src = "https://cdn.js1234delivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";   
//     let script = document.createElement("script");
//     script.src = src;
//     document.body.appendChild(script);

//     console.log(document.body.children[1]);
//     script.onload = function() {
//         myResolve(909);
//     }
//     script.onerror = function() {
//         myReject(404);
//     }
// });
    
// myPromise.then(
//     function(value) {alert("Script has been loaded with 909.")}
// );

// myPromise.catch((error) => {
//     alert("Script not loaded and returned 404.");
// });



// Promise chaining

// It is the process of chaining the processes and passing the resolved values from one promises to naother promise serially in the order in which they are chained.


// Example 1: 

function prom_chain(){
    
let p1 = new Promise(function(resolve, reject){
    console.log("Promise 1");
    resolve("Promise 1 Completed");
});

p1.then(
    function(result){
        console.log(result);
        let p2 = new Promise(function(resolve, reject){
            console.log("Promise 2");
            resolve("Promise 2 completed.")
        });
        return p2;
    }
).then(
    function(result){
        console.log(result);
    }
);

}


// Example 2:


// let p1 = new Promise(function(resolve1, reject1) {
//     console.log("Promise - 1:  Addition");
//     let a = parseInt(prompt("Enter a number: "));
//     let b = parseInt(prompt("Enter a number: "));
//     let sum1 = a + b;
//     if (sum1 === a + b) {
//         resolve1(sum1);
//         console.log(a);
//         console.log(b);
//         console.log(sum1);
//         console.log("Promise - 1 resolved successfully");
//     } else {
//         console.log(a);
//         console.log(b);
//         console.log(sum1);
//         console.log("Promise - 1 rejected");
//         reject1(404);
//     }
// });

// p1.then(
//     function(sum1) {
//         console.log("Promise - 2: Product");
//         let p2 = new Promise(function(resolve2, reject2) {
//             let c = parseInt(prompt("Enter a number: "));
//             let prod1 = sum1 * c;
//             if (prod1 === sum1 * c) {
//                 resolve2(prod1);
//                 console.log("Promise - 2 resolved successfully: " + prod1);
//             } else {
//                 reject2(prod1);
//             }
//         });
//         return p2; // Return p2 to chain it
//     }
// ).then(
//     function(prod1) {
//       document.getElementById("result").innerHTML = "The result is: " + prod1;
//     }
//   ).catch((error) => {
//     document.getElementById("result").innerHTML = "Error: " + error;
//   });



// Attaching Multiple handlers to a single promise

// All the handlers that are being connected to the promise are performed independently and no values are passed.

let p1 = new Promise(function(resolve, reject){
    let num = parseInt(prompt("Enter a num: "));
    console.log("--------------------Promise 1--------------------");
    if (num % 2 == 0){
        resolve("Promise 1 resolved");
    }
    else{
        reject("Promise 1 rejected");
    }
})

// handler 1
p1.then(
    // handler 1 for resolve
    function(result){
        console.log("Promise 1 - Handler 1(resolve)");
    },
    // handler 2 for reject
    function(error){
        console.log("Promise 1 - Handler 1(reject)");
    }
)

// handler 2 
p1.then(
    // handler 2 for resolve
    function(result){
        console.log("Promise 1 - Handler 2(resolve)");
    },
    // handler 2 for reject
    function(error){
        console.log("Promise 1 - Handler 2(reject)");
    }
)

// handler 3
p1.then(
    // handler 3 for resolve
    function(result){
        console.log("Promise 1 - Handler 3(resolve)");
    },
    // handler 3 for reject
    function(error){
        console.log("Promise 1 - Handler 3(reject)");
    }
)