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



// 3) 