// JavaScript HTML DOM PRACTICE [ Link: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php ]


// Q1) Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code

function js_style() {
    document.getElementById("text").style.fontFamily = "Monospace";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.fontSize = "20px  ";
}


// Q2) Write a JavaScript function to get the values of First and Last names of the following form.

function getFormvalue() {

    let ele = document.getElementById("form1");
    document.getElementById("name").innerHTML = ele.children[0].value + " " + ele.children[2].value;
}


// Q3) Write a JavaScript program to set paragraph background color.

function change_background(){
    document.getElementsByClassName("para")[0].style.background="red";
}


