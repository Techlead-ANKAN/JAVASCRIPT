// Exercise 5

/* Write a JavaScript Program to pretend to look like a hacker. Write an async function which will simply display the following output: 

"
Initializing Hack Program.....

Hacking Ashish's username.....

username found  ashish17......

connecting to facebook......
"

Try to use HTML and CSS for styling.

*/



// function hack(){
//     let ele = document.getElementsByClassName("display")[0];
//     let t1_area = document.createElement("p");
//     t1_area.innerHTML = "Initializing Hack Program.....";
//     ele.appendChild(t1_area);
//     console.log("Hacking....")
// }





let hack = async() => {
    let element = document.getElementsByClassName("display")[0];
    let txt = document.createElement("p");
    element.appendChild(txt);
    let hck = ""; 


    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            hck += "Initializing Hack Program..... <br>";
            txt.innerHTML = hck;
            resolve();
        }, 2000);
    });

    await p1;
    
    
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            hck += "username found  ashish17...... <br>";
            txt.innerHTML = hck;
            resolve();
        }, 2000);
    });

    await p2;


    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            hck += "Initializing Hack Program..... <br>";
            txt.innerHTML = hck;
            resolve();
        }, 2000);
    });

    await p3;


    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            hck += "connecting to facebook...... <br>";
            txt.innerHTML = hck;
            resolve();
        }, 2000);
    });

    await p4;

    
}

function Exercise_5(){
    hack();
}

