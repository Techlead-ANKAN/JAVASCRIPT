// Documnet Object Model (DOM)

// The DOM is a W3C (World Wide Web Consortium) standard.

// The DOM defines a standard for accessing documents.

// "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamicalluy access and update the content, structure and style of a document."

// The W3C DOM is separeated into 3 different parts: -
    // 1) Core DOM - Standard model for all document types
    // 2) XML DOM - Standard model for XML documents
    // 3) HTML DOM - Standard model for HTML documenmts


// HTML DOM  -  It is a standard object model and programming interface for HTML. IT defines: 
                // (i) The HTML elements as objects
                // (ii) The properties of all HTML elements
                // (iii) The methods to access all HTML elements
                // (iv) The events for all HTML elements


// With the object model, JavaScript gets all the power it needs to create dynamic HTML:
// 1) JavaScript can change all the HTML elements in the page
// 2) JavaScript can change all the HTML attributes in the page
// 3) JavaScript can change all the CSS styles in the page
// 4) JavaScript can remove existing HTML elements and attributes
// 5) JavaScript can add new HTML elements and attributes
// 6) JavaScript can react to all existing HTML events in the page
// 7) JavaScript can create new HTML events in the page



// ==========================  HTML DOM DOCUMENTS ==========================

// (i) When an HTML Element is loaded into the browser it becomes an document object

// (ii) The Document object is the root node of the HTML Document

// (iii) The document object is a property of the window object.

// (iv) The document object is accessed with: "window.document" or "document"




//  Document object Properties and Methods: -

// 1) documnet.activeElement.tagName    ===>    It returns the HTML element that have focus. It is a read-only property.
// let v1 = document.activeElement.tagName;


// 2) document.addEventListener("click", function())    ===>   This method add an event which is in the function to a folllowing action like click.
// let v2 = document.addEventListener("click", function sample_func(){
//                                              console.log("Clicked somewhere")
//                                              });


// 3) document.adoptNode(node to be adopted)    ===>    This method adopts a node from another document in a iframe. The adopted node can be of all types. Any child 
//                                                      nodes of the adopted node are also adopted. The adopted node is removed from the original document.

// let frame = document.getElementById("myFrame")   ---> Getting the frame(another document from which node will be adopted).
// let ele = frame.contentWindow.document.getElementByTagName("H1")[2]  --->    Now the 3rd H1 tag element will be considered as the adopted node and will be stored 
//                                                                              in the variable "ele".
// let node = document.adoptNode(ele);      ---> Now the desired is adopted and stored in the variable "node" adn you can can place it anywhere in your new website.


// 4) document.baseURI  ===>    The read-only baseURI property of the node interface returns the absolute base URL of the document containing the node.
// console.log(document.baseURI);


// 5) document.body     ===>    The body property sets or returns a document's <body> element.
// let var3 = document.body.innerHTML;  --> returns the html of the body
// let var4 = document.body.style.backgroundColor = "blue";
// let var5 = document.body.innerHTML = "<h1>new HTML Content</h1>";


// 6) document.characterSet     ===>    This method returns the character encoding of the document.
// console.log(document.characterSet);


// 7) document.open()   ===>    This method opens a document(new html) for writing.
// 8) documnet.write(html)    ===>      This method is used to write html is a document.
// 9) document.close()   ===>   This method is used to close the document that was previously being opened with open().

// document.open();
// document.write("<h1>Heading</h1>");
// document.close();


// 10) document.writeln(html)   ===> This is method is same as of write() in addition it uses newline for each sentence
// document.writeln("<h1>Heading</h1>");


// 11) document.cookie  ===>    This property sets or returns a semi-colon-separated list of key=value pairs (document cookies)

// (i) Creating Cookies:
// document.cookies = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// (ii) Getting Cokkies:
// console.log(document.cookie);


// 12) (i) document.createAttribute("new_attribute")    ===>    This methods creates an attribute and returns an attribute as an Attr object.
// let att = document.createAttribute("class");
// att.value = "myClass";

// (ii) element.setAttributeNode(att)  ===>    It is used to set an attribute to a particular element.
// element.setAttributeNode(att);


// 13) document.createComment("My Comments")    ===>    It is used to create comments and returns the comment node
// let cmnt = document.createComment("This is a comment");
// document.body.appendChild(cmnt);


// 14) document.createElement("html_tag")   ===>    It is used to create html element node.
// let ele = document.createElement("a");
// ele.innerHTML = "https://www.w3schools.com";
// ele.href = "https://www.w3schools.com";


// 15) 













































































































































