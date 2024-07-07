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

