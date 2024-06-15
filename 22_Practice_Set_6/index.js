// Practice Set - 6

// 1) Write a program usnig prompt function to take input of the age of an user and use alert function to tell him if he can drive or not.

// let var1 = parseInt(prompt("Enter your age: "));
// if (var1 >= 18) {
//     alert("You are eligible to drive.");
// }
// else {
//     alert("You are not eligible to drive.");
// }

// 2) In Q1 use confirm function to ask the user if he wants to see the prompt again.


// let var2b = true;

// do{
//     drive_eligibility();

//     let var2c = confirm("You want Check again ?");
//     if (var2c == false){
//         var2b = false;
//     }
// }
// while(var2b==true)

// function drive_eligibility(){
//     let var2a = parseInt(prompt("Enter your age ? "));
//     if (var2a >= 18) {
//         alert("You are eligible to drive.");
//     }
//     else {
//         alert("You are not eligible to drive.");
//     }    
// }

// 3) In the previous question use console.error to log the error if the age entered is negative.

// let var3b = true;

// do{
//     drive_eligibility();

//     let var3c = confirm("You want Check again ?");
//     if (var3c == false){
//         var3b = false;
//     }
// }
// while(var3b==true)

// function drive_eligibility(){
//     let var3a = parseInt(prompt("Enter your age ? "));
//     if (var3a >= 18) {
//         alert("You are eligible to drive.");
//     }
//     else if (var3a < 0){
//         console.error("Inappropriate age!!!");
//     }
//     else {
//         alert("You are not eligible to drive.");
//     }    
// }

// 4) Arite a program to change the url to google.com (redirection) if user enters number greater than 4.

// let var4a = parseInt(prompt("Enter a number: "));

// if (var4a > 4){
//     location.href = "https://www.google.com/";
//     alert("Redirected to https://www.google.com/");
// }

// 5) Change the background color of the page to different colors based on user input through prompt.

let ele = document.getElementByTagName("body");
ele.style.backgroundColor = "red";