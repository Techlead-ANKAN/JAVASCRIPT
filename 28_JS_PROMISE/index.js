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

// function prom_chain() {
//   let p1 = new Promise(function (resolve, reject) {
//     console.log("Promise 1");
//     resolve("Promise 1 Completed");
//   });

//   p1.then(function (result) {
//     console.log(result);
//     let p2 = new Promise(function (resolve, reject) {
//       console.log("Promise 2");
//       resolve("Promise 2 completed.");
//     });
//     return p2;
//   }).then(function (result) {
//     console.log(result);
//   });
// }

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

// let p1 = new Promise(function (resolve, reject) {
//   let num = parseInt(prompt("Enter a num: "));
//   console.log("--------------------Promise 1--------------------");
//   if (num % 2 == 0) {
//     resolve("Promise 1 resolved");
//   } else {
//     reject("Promise 1 rejected");
//   }
// });

// // handler 1
// p1.then(
//   // handler 1 for resolve
//   function (result) {
//     console.log("Promise 1 - Handler 1(resolve)");
//   },
//   // handler 1 for reject
//   function (error) {
//     console.log("Promise 1 - Handler 1(reject)");
//   }
// );

// // handler 2
// p1.then(
//   // handler 2 for resolve
//   function (result) {
//     console.log("Promise 1 - Handler 2(resolve)");
//   },
//   // handler 2 for reject
//   function (error) {
//     console.log("Promise 1 - Handler 2(reject)");
//   }
// );

// // handler 3
// p1.then(
//   // handler 3 for resolve
//   function (result) {
//     console.log("Promise 1 - Handler 3(resolve)");
//   },
//   // handler 3 for reject
//   function (error) {
//     console.log("Promise 1 - Handler 3(reject)");
//   }
// );

// JS Promise Methodsd and Properties

// 1) Promise.all(iterable of promises)   ===>  This method returns single promise from a list of promises, when all the promises fulfill, and does not let all the promises to get settled.

// Example:

// let p1 = new Promise(function(resolve, reject){
//   let age = parseInt(prompt("Enter your age: "));
//   if (age >= 18 ){
//     resolve("Eligible to vote");
//   }
//   else{
//     reject("Not Eligible to vote");
//   }
// });

// let p2 = new Promise(function(resolve, reject){
//   let marks = parseInt(prompt("Enter your marks: "));
//   if (marks >= 35 ){
//     resolve("Pass");
//   }
//   else{
//     reject("Fail");
//   }
// });

// let arr = [p1, p2];

// Promise.all(arr).then((x) => {
//   console.log(x);
// })

// In this case, the first promise (p1) is rejected with the reason "Not Eligible to vote" and the Promise.all() method immediately rejects with the same reason, without waiting for the second promise (p2) to settle.If you want to see the result of both promises, you can use Promise.allSettled() method instead.
// .catch((x) => {
//   console.log(x);
// });





// 2) Promise.allSettled(iterable of promises)  ===>  Thi s method return s a single  promise from the list of promises, when all th promises get settled.

// Example:

// let p1 = new Promise(function(resolve, reject){
//   let age = parseInt(prompt("Enter your age: "));
//   if (age >= 18 ){
//     resolve("Eligible to vote");
//   }
//   else{
//     reject("Not Eligible to vote");
//   }
// });

// let p2 = new Promise(function(resolve, reject){
//   let marks = parseInt(prompt("Enter your marks: "));
//   if (marks >= 35 ){
//     resolve("Pass");
//   }
//   else{
//     reject("Fail");
//   }
// });

// let arr = [p1, p2];

// Promise.allSettled(arr).then((results) => {
//   results.forEach((result) => {
//     if (result.status === "fulfilled") {
//       console.log(result.value);
//     }
//     else if (result.status === "rejected") {
//       console.log(result.reason);
//     }
//     else if (result.status === "pending"){
//       console.log("Initial State");
//     }
//   });
// })





// 3) Promise.any(iterable of promises) ===>  This method returns a single promise from a list of promises, when any promise fulfill.

// let pa = new Promise(function(resolve, reject){
//   let age = parseInt(prompt("Enter your age: "));
//   if (age >= 18 ){
//     resolve("Eligible to vote");
//   }
//   else{
//     reject("Not Eligible to vote");
//   }
// });

// let pb = new Promise(function(resolve, reject){
//   let marks = parseInt(prompt("Enter your marks: "));
//   if (marks >= 35 ){
//     resolve("Pass");
//   }
//   else{
//     reject("Fail");
//   }
// });

// let arr = [pa, pb];

// Promise.any(arr).then((x) => {
//   console.log(x);  // if any of the 2 promises are fulfilled then it will be logged in the console.
// });






// 4) <Promise>.catch() ===>  This method provides a callback. The callback is a function to run when a promise is rejected.


// let newProm = new Promise(function(resolve, reject){
//   let num = 21;

//   if (num % 2 == 0){
//     resolve("Even");
//   }
//   else{
//     reject("Odd");
//   }
// });

// // function to be called when the promise is rejected.
// function when_rejected(){
//   console.log("Error num.")
// }


// newProm.catch((x) => {
//   // callback
//   when_rejected(x);
// });





// 5) <Promise>.finally   ===>  This method provieds a callback. The callback is a function to run when a promise is settled (fulfilled or rejected).


// let p = new Promise(function(resolve, reject){
//   let num = 20;

//   if(num % 2 == 0){
//     resolve("Even");
//   }
//   else{
//     reject("Fail");
//   }
// });

// p.then(
//   function(value) {  p.finally(set_resolve)  },
//   function(error) {  p.finally(set_reject)  } 
// )


// function set_resolve(){
//   console.log("Promise is settled and fulfilled.")
// }

// function set_reject(){
//   console.log("Promise is settled and rejected.")
// }





// 6) Promise.race(iterable of promises)  ===>  This method returns a promise from a list of promises, when the faster promises settles.

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one');
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'two');
// });

// let arr = [p1, p2];


// Promise.race(arr).then((x) => {
//   console.log(x);
// })





// 7) <Promise>.reject ===>  This method returns the promise object rejected with a value.

// let p = Promise.reject("Not Allowed");

// p.catch((x) => {
//   console.log(x)
// });




// 8) <Promise>.resolve ===>  This method returns the promise object resolved with a value.

// let p = Promise.resolve("Allowed");

// p.then((x) => {
//   console.log(x)
// });




// 9) <promise>.then  ===>  This method provides 2 callbacks.One function to run when a promise is fulfilled and one function to run when a promise is rejected.

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


// prom.then(
//     function(value) {alert("Success")},
//     function(error) {alert("Failure")}
// );





// -------------------------------JS ASYNC & AWAIT-------------------------------

// async  -> This keyword makes a function return promise.
// await -> This function makes a function wait for promise.

// Example: 


async function example() {

  let p1 = new Promise(function (resolve, reject) {
    let age = 21;

    if (age >= 18) {
      resolve("Eligible to vote");
    }
    else {
      reject("Not eligible to vote");
    }
  });

  let p2 = new Promise(function (resolve, reject) {
    let marks = 90;

    if (marks >= 35) {
      resolve("Pass");
    }
    else {
      reject("Fail");
    }

  });

  console.log("Fetching Promise 1....");
  let p1_ans = await p1;
  console.log("Fetched Promise 1....");

  console.log("Fetching Promise 2....");
  let p2_ans = await p2;
  console.log("Fetched Promise 2....");

  return [p1_ans, p2_ans];

}

let answer = example();
console.log(answer);