// Practice Set - 9

// 1) Write a program to load a javascript file in a browser using promise. Use then() to display an alert when the load is complete.

// let p = new Promise(function (resolve, reject) {
//     let x = document.createElement("script");
//     x.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
//     x.onload = function() {
//     resolve("Script Loaded");
//     }    
//     x.onerror = function() {
//         reject("Script Not Loaded")
//     }
//     document.head.append(x);
// })

// p.then(
//     function(value) {
//         alert(value)
//     }
// );

// p.catch((error) => {
//     alert(error);
// });



// 2) Write the same program from previos question and use the async/await syntax.


// async function js_loader(src, callback1){
//     return new Promise((resolve, reject) => {
//     let x = document.createElement("script");
//     x.src = src;
//     x.onload = function(){
//         resolve(src);
//     }
//     x.onerror = function(){
//         reject("Script not loaded")
//     }
//     document.head.append(x);
// });
// };

// js_loader("https://cdn.js12345delivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js").then(
//     function(src){
//         alert("Script Loaded.")
//     },

//     function(error){
//         alert("Script Not Loaded.")
//     }
// )



// 3) Create a promise which rejects after 3 seconds. Use an async and await to get its value. Use a try catch to handle its error.

// let a = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Showing an Error"))
//         } ,   3000);
//     });
// };

// let res = async() => {
//     try{
//         let c = await a();
//         console.log(c)
//     }
//     catch(error){
//         console.log("Error has been delivered");
//     }
// }

// res();




// 4) Write a program using Promise.all() inside an async/await to await 3 promises. Compare its result with the case where we await these promises one by one.

let p1 = new Promise(function(resolve, reject){
    resolve(10);
});

let p2 = new Promise(function(resolve, reject){
    resolve(20);
});

let p3 = new Promise(function(resolve, reject){
    resolve(30);
});


let run = async() => {
    console.time("run");

    // Case 1 - Promises are being awaited one by one

    // let a1 = await p1;
    // let a2 = await p2;
    // let a3 = await p3;
    // console.log(a1, a2, a3);
    

    // Case 2 - using Promise.all()
    let a1 = p1;
    let a2 = p2;
    let a3 = p3;
    let all = await Promise.all([a1, a2, a3]);
    console.log(all);


    console.timeEnd("run");
};

run();


// Note : Case 2 takes much less time than case 1.
// Reason:  Thes reason behind it, is that in case 1 you are wait for every promise one by one but in the case 2 you are waiting for all the promises fopr a single time.