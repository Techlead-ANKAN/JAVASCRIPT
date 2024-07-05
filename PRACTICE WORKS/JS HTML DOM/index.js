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

function change_background() {
    document.getElementsByClassName("para")[0].style.background = "red";
}


// Q4) Here is a sample HTML file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

function getAttributes() {
    let ele4 = document.getElementById("w3r");
    let res = document.createElement("p");
    console.log("href: " + ele4.getAttribute("href") + " hreflang: " + ele4.getAttribute("hreflang") + " rel: " + ele4.getAttribute("rel") + " target: " + ele4.getAttribute("target") + " type: " + ele4.getAttribute("type"));
}


// Q5) Write a JavaScript function to add rows to a table.

function insert_Row() {
    let table = document.getElementById("sampleTable");

    let new_row = document.createElement("tr");
    let tab_data1 = document.createElement("td");
    let tab_data2 = document.createElement("td");
    let tn1 = document.createTextNode("New Row");
    let tn2 = document.createTextNode("New Row");

    tab_data1.appendChild(tn1);
    tab_data2.appendChild(tn2);

    new_row.appendChild(tab_data1);
    new_row.appendChild(tab_data2);

    table.appendChild(new_row);

}


// Q6) Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.

function changeContent() {
    let row = parseInt(prompt("Row No:")) - 1;
    let col = parseInt(prompt("Column No: ")) - 1;

    let table = document.getElementById("myTable");

    if (row >= 0 && row <= table.rows.length && col >= 0 && col <= table.rows[row].cells.length) {
        let newtext = prompt("Enter New Content: ");
        table.rows[row].cells[col].textContent = newtext;
    }

}


// Q7) Write a JavaScript function to create a table, accept row and column numbers, and input row-column numbers as cell content (e.g. Row-0 Column-0).

function createTable() {
    let row = parseInt(prompt("Enter no.of rows: ")) - 1;
    let col = parseInt(prompt("Enter no.of columns: ")) - 1;

    let table = document.getElementById("myTable");


    let i, j;

    for (i = 0; i <= row; i++) {
        let x = table.insertRow(i);
        for (j = 0; j <= col; j++) {
            var y = x.insertCell(j);
            y.innerHTML = "Row = " + i + " Column = " + j;
        }
    }
}


// Q8) Write a JavaScript program to remove items from a drop-down list.

function removecolor() {
    let ele8 = document.getElementById("colorSelect");

    let op_pos = ele8.selectedIndex;

    ele8.remove(op_pos);
}


// Q9) Write a JavaScript program to count and display dropdown list items in an alert window.

function getOptions() {
    let ele9 = document.getElementById("mySelect");

    let len = ele9.children.length;

    let i;
    let items = "";
    for (i = 0; i < len; i++) {
        items += ele9.children[i].innerHTML + ", ";
    }

    alert(`Dropdown List of id: "mySelect" has ` + len + ` items.` + ` Items of the Dropdown List: ` + items);
}


// Q10) Write a JavaScript program to calculate sphere volume.

function cal_volume() {
    let rad = document.getElementById("rad").value;

    if (rad != 0) {
        document.getElementById("vol").value = (4 / 3) * Math.PI * (rad ** 3);
    }
    else if (rad < 0) {
        alert("Radius cannot be negative!!!");
    }
    else {
        document.getElementById("vol").value = 0;
    }
}


// Q11) Write a JavaScript program to display a random image (clicking on a button) from the following list.
// Sample Image information :

// "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
// "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
// "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"


function get_image() {
    let choice = Math.floor(Math.random() * 3);

    let arr = ["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"];


    if (choice <= arr.length - 1) {
        document.getElementById("pic").style.backgroundImage = "URL(arr[choice])";
    }
}


// Q12) Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link.

function highlight() {
    let bold_len = document.getElementsByTagName("strong").length;
    let i;

    for (i = 0; i < bold_len; i++) {
        document.getElementsByTagName("strong")[i].style.color = "red";
    }
}


function return_normal() {
    let hg_len = document.getElementsByTagName("strong").length;
    let i;

    for (i = 0; i < hg_len; i++) {
        document.getElementsByTagName("strong")[i].style.color = "black";
    }
}


// Q13) Write a JavaScript program to get the window width and height (any time the window is resized).

let ans = document.createElement("p");
function getSize() {
    let text = document.createTextNode("Window Height: " + window.outerHeight + "px" + ", Window Width: " + window.outerWidth + "px");
    ans.appendChild(text);
    if (document.getElementById("wh").hasChildNodes) {
        document.getElementById("wh").innerHTML="Window Height: " + window.outerHeight + "px" + ", Window Width: " + window.outerWidth + "px";
    }
    else {
        document.getElementById("wh").appendChild(ans);
    }
}


