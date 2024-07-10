// Window Object

// The Window object represents an open window in a browser that contains a DOM Document. They have some properties as well as methods to manipulate  the document, handling events, managing timers, etc. 


// Window Object Properties  [ link: https://www.w3schools.com/jsref/obj_window.asp ]


// 1) <window_var>.closed   ===>    It is a read-only property that returns true if the window is closed.
// console.log(<window_var>.closed);


// 2) <window_var>.frameElement     ===>    It is a read-only property that returns the frame where the window is running, if the window ius not running in a frame then it returns "NULL".
// console.log(<window_var>.frameElement);


// 3) <window_var>.frames   ===>    It is a property that returns an array with all window objects in the window. The winows can be accessed by index numbers.
// console.log(<window_var>.frames[1].location); // getting location of the window present in the second frame
// <window_var>.frames[0].location = "https://www.w3schools.com/jsref/";  // setting the location of the window present in the first frame.


// 4) -----------------Window History Object--------------------

// The history object contains the URLs visited by the user (in the vbrowser window). It is a property of the window object.
// Accessed with: window.history

// Properties and methods:

// (i) length  --->  The length property returns the number of URLs in the history list of the current browser window. It returns atleast 1.
// console.log(window.history.length);

// (ii) back()  --->  The history.back() method loads the previous URL (page) in the history list, and works only if a previous page exists.
// history.back();

// (iii) forward()  --->  The history.forward() method loads the next URL (page) in the history list, and works only if a next page exists.
// history.forward();

// (iv) go(page_number)   --->  The history.go() method loads a URL (page) from the history list and only works if the page exist in the history list.
// history.go(0);   ---> Reloads the page
// history.go(-1);  ---> Same as back()
// history.go(1);   ---> Same as forward()
// history.go(2);   ---> Loads the second page in the history

// -----------------------------------------------------------------------


// 5) <window_var>.innerHeight  ===>    It is a read-only property that returns height of the window's content area.
// console.log(window.innerHeight);


// 6) <window_var>.innerWidth  ===>    It is a read-only property that returns width of the window's content area.
// console.log(window.innerWidth);


// 7) <window_var>.length   ===>    It is a read-only property that returns the no.of framed windows inside a window and can be accessed by using index no.
// console.log(window.length);


// 8) localStorage  ===>    This object allows you to store key-value pairs in the browser. There is no expiration date for the data it stores. The data is not deleted when the browser is closed and are available for future sessions. 
// localStorage.setItem(<key>, <value>);
// localStorage.getItem(key);
// localStorage.removeItem(<key>, <value>);
// localStorage.clear;


// 9) window.name   ===> This property sets or returns the name of a window.
// console.log(window.name)
// window.name = "Ankan's Window"


// 10) window.opener    ===>    The opener returns a reference to the window that created the window.
// console.log(window.opener);


// 11) <window_var>.outerHeight  ===>    It is a read-only property that returns height of the window including all.
// console.log(window.outerHeight);


// 12) <window_var>.outerWidth  ===>    It is a read-only property that returns width of the window including all.
// console.log(window.outerWidth);


// 13) <window_var>.pageXOffset    ===>    It is property that returns the pixels that the document has scrolled along the X-axis from the top-left corner of the window.
// console.log(winodw.pageXOffset);


// 14) <window_var>.pageYOffset    ===>    It is property that returns the pixels that the document has scrolled along the Y-axis from the top-left corner of the window.
// console.log(winodw.pageYOffset);


// 15) <window_var>.parent  ===>    It is a property that returns the parent of the current window.
// console.log(window.parent);


// 16) <window_var>.screenLeft  ===>    It is a property that is used to return the horizontal (x-position) of a window, relative to the screen.
// console.log(window.screenLeft);


// 17) <window_var>.screenTop  ===>    It is a property that is used to return the vertical (y-position) of a window, relative to the screen.
// console.log(window.screenTop);


// 18) sessionStorage  ===>    This object allows you to store key-value pairs in the browser. It stores tha data only for one session. The data is deleted when the browser is closed and are not available for future sessions. 
// sessionStorage.setItem(<key>, <value>);
// sessionStorage.getItem(key);
// sessionStorage.removeItem(<key>, <value>);
// sessionStorage.clear;


// 19) window.self  ===>    This property returns the current window.
// console.log(window.self);


// 20) window.top   ===>    This property returns the topmost window in the current browser window.
// console.log(window.top);


// ------------------------------ Console Object ------------------------------------------

// The console object provides access to the browsers debugging console. 

// (i) console.assert(<expression>, <message>)  ===>    This method writes a message to the console if tyhe expression is evaluated false.
// let x = 5;
// let y = 5;
// console.assert(x+y == 12, "Asertion is showed since the expression is false");


/// (ii) console.clear()    ===>    This method clears the console and writes a message "Conosle was cleared" in the console.
// console.clear();


// (iii) console.count(<label>) ===>    This method is used to count how many times the console.count() is called. The default label is "default", and it is optional.
// let i;
// for(i=0;i<10;i++){
// console.count();
// console.count("Roll No");
// }


// (iv) console.error(<msg>)    ===>    This method is used to display an error message in the console.
// console.error("You have made a mistake");


// (v) console.group()  ===>    This method is used to put all the messages after this line in a group.
// console.groupEnd()   ===>    This method is used to close the group.
// console.log("I am not in the group.");
// conosle.group();
// console.log("I am in the group.");
// console.log("I am in the group.");
// console.groupEnd();
// console.log("I am not in the group.");


// (vi) console.info(<msg>) ===>    This method is used to output an info message in the console.
// console.info("This is an info message.");


// (vii) console.table(object/array)    ===>   This method is used to convert any object or an array into a table.
// console.table(["Audi", "Volvo", "Ford"]);
// console.table({firstname:"John", lastname:"Doe"});


// (viii) 
// console.time();

// //Some Code to be executed

// console.timeEnd();


// ------> This method is used to check how much time a code requires to get executed.



// (ix) console.warn(<msg>) ===>    This method is used to display an warning message in the console.
// console.warn("This is a warning!!");




// ------------------------------ Location Object ------------------------------------------

// The location object contains information about the current URL.

// (i) location.hash    ===> This property sets or returns the anchor part of a URL, including the hassh sign.
// console.log(document.<element>.location.hash);
// document.<element>.location.hash = "mark_array_find";


// (ii) location.host   ===>    This property returns the host (Ip Adress or Domain) and a port of the URL.
// console.log(document.<element>.location.host);


// (iii) location.hostname  ===>    This property returns the host (IP adress or domain) of a URL.
// console.log(location.hostname);


// (iv) location.href   ===> This property is used to set or return the entire url of the current page.
// location.href = "https://www.w3schools.com";
// console.log(location.href);


// (v) location.origin   ===> This property is used to returns the protocol, hostname and port number of a URL.
// console.log(location.origin);


// (vi) location.pathname   ===> The pathname property sets or returns the pathname of a URL (page).
// console.log(location.pathname);


// (vii) location.port   ===> The port property sets or returns the port number of a URL.
// console.log(location.port);


// (viii) location.reload() ===>    The reload() method reloads the current document. The reload() method does the same as the reload button in your browser.
// location.reload();


// (ix) location.replace(newURL) ===>    The replace() method replaces the current document with a new one.
// location.replace("https://www.amazon.in/");


// (x) document.<element>.location.search   ===>    This method is used to return the query string part of the URL, including the question mark. This mproperty can also be used to set the query string.
// let anchor = document.getElementById("w3s");
// let query = anchor.search;




// Window Object Methods  [ link: https://www.w3schools.com/jsref/obj_window.asp ]


// 1) window.addEventListener(<event>, <function>)  ===>    This methos is used to attach any event handler to the window.
// window.addEventListener("load", func());
// function func(){
//     alert("Wasssup motherfucker");
// }



// 2) window.focus()    ===>    This method sets focus to a window.
// function win(){
// let win = window.open("", "", "width=200, height=100");
// win.focus();
// };


// 3) window.blur()    ===>    This method removes the focus from a window.
// function win(){
// let win = window.open("", "", "width=200, height=100");
// win.blur();
// };

// let win;

// 4) window.open()    ===>    This method opens a new window.
// function open_win(){
//     win = window.open("", "", "width=200, height=100");
// };


// 4) window.close()    ===>    This method closes the new window.
// function close_win(){
//     win.close();
// };


// 5) document.<element>.getComputedStyle(<element>, <pseudo_element>)  ===>    This method gets the computed css properties and values of an HTML. It returns a "CSSStyleDeclaration" object.
// const element = document.getElementById("test");
// const cssObj = window.getComputedStyle(element, null);
// let bgColor = cssObj.getPropertyValue("background-color");


// 6) window.moveBy(x, y)   ===>    This method moves a window a number of pixels relative to its current coordinates.
// window.moveBy(150, 150);


// 7) window.moveTo(x, y)   ===>    This method moves a window moves to a specified position.
// window.moveTo(150, 150);


// 8) window.print()    ===>    This method prints the content of the current window.
// function show_content(){
//     window.print();
// };


// 9) window.removeEventListener(<event>, function) ===>    This method removes an event handler from a window.
// window.removeEventListener("mousemove", myFunction);


// 10) 