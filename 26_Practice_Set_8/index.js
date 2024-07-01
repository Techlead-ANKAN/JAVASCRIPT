// Practice Set - 8

// Q1) Write a program to show different alerts when different buttons are clicked.

function q1_alert1(){
    alert("I am Button - 1");
}

function q1_alert2(){
    alert("I am Button - 2");
}

function q1_alert3(){
    alert("I am Button - 3");
}



// Q2) Create a website that is capable of storing bookmarks of your favorite website using href.



const element1 = document.getElementById("q2_btn1");
element1.addEventListener("click", myfunc1);

function myfunc1(){
    window.location = "https://www.google.com/";
}

const element2 = document.getElementById("q2_btn2");
element2.addEventListener("click", myfunc2);

function myfunc2(){
    window.location = "https://www.1377x.to/";
}

const element3 = document.getElementById("q2_btn3");
element3.addEventListener("click", myfunc3);

function myfunc3(){
    window.location = "https://developer.mozilla.org/en-US/";
}

