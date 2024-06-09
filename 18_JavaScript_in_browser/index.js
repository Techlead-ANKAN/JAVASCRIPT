// JavaScript in Browser

// It is commonly used for creating web pages. It allows us to add dynamic behaviour and add special effects to the webpages, bringing the web pages alive.

// JavaScript engines are typically developed by web browser vendors, and every major browser has one. In a browser, the JavaScript engine runs in concert with the "rendering engine" via the " Document Object Model (DOM)" and Web IDL bindings. However, the use of JavaScript engines is not limited to browsers; for example, the "V8 engine" is a core component of the Node.js runtime system.


// Rendering Engine (Link - https://en.wikipedia.org/wiki/Browser_engine) 
// --> A browser engine is a core software component of every major web browser. The primary job of a browser engine is to transform HTML documents and other resources of a web page into an interactive visual representation on a user's device.

// Documnet Object Model (DOM) (Link - https://en.wikipedia.org/wiki/Document_Object_Model) 
// The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree. 

// Web IDL is an interface description language (IDL) format for describing APIs (application programming interfaces) that are intended to be implemented in web browsers. Its adoption was motivated by the desire to improve the interoperability of web programming interfaces by specifying how languages such as ECMAScript should bind these interfaces.



// Script Tag 

// The <script> tag is used to embed client side script (JavaScript). It either contains scripting elements or it points to an external script file through the src attribute.

// Note - Overall, there are many benefits to having a separate JavaScript file. It can improve the organization, reusability, performance, readability, and maintainability of your website.


// Console Object

// The console object provides acces to the browsers debugging console. 
// The console object is a property of the window object.

// The console object can be accessed by : 

//     1) window.console
window.console.log("Using window.console");

//     2) console
console.log("Using console");



// Console Methods: -

// 1) log("<message>")  --> Outputs a message to the console.
console.log("This is the log() method");

// 2) assert()  -->  Write an error message to the console if an assertion is false.
let a = 5;
let b = 5;
console.log(a + b == 11, "This is the assert() method")

// 3) clear()  --> Clears the console
console.clear();

// 4) count(<label>)  --> This method is iused to count the no.of times the count() method is being called.
for (let i=0;i<5;i++){
    console.count("Count");
}

// 5) error("<message>")  --> Outputs an error message to the console.
console.error("You are a mistake.");

// 6) group()  --> This method creates a new group, all new messages will be written inside this group.
console.group();
console.log("Line 1 in Group 1");
console.log("Line 2 in Group 1");
console.log("Line 3 in Group 1");
console.log("Line 4 in Group 1");

console.group();
console.log("Line 1 in Group 2 of Group 1");
console.log("Line 2 in Group 2 of Group 1");
console.log("Line 3 in Group 2 of Group 1");
console.log("Line 4 in Group 2 of Group 1");

// 7) info("<message>")  --> Outputs an informational message in console.
console.info("Informational Message");

// 8) table()  --> Outputs a tabular data in the form of table
console.table({Dudu:"Ankan Maity", Bubu: "Piu Maity"});

// 9) time()  --> This method starts the timer in the console view. It allows you to time code for testing purposes.
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();

