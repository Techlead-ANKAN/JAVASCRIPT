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



// HTML DOM METHODS

// The HTML DOM methods are actions you can perform on HTML elements.

// The HTML DOM properties are values of HTML elements that you can set or change.

// The HTML DOM can be accessed with JavScript and woth other programming Languages.

// In the DOM, all HTML elements are defined as objects.

// The programming interface is the properties and methods of each object.

// A property is a value that you can get or set (like changing the content of an HTML element).

// A method is an action you can do (like add or deleteing an HTML element).

// HTML DOM methods/properties are:

// 1) getElementById("id") - It is a method that is used to access any html element by its id name.

function fnc1(){
    console.log(document.getElementById("id1"));
}

function fnc2(){
    document.getElementById("id1").innerText="DOM getElementById Method - It is a method that is used to access any html element by its id name.";
}

// 2) getElementsByClassName("class_name") - It is a method that is used to access any html element by its class name.

function fnc3(){
    console.log(document.getElementsByClassName("id2"));
}

function fnc4(){
    document.getElementsByClassName("id2").innerText="DOM getElementByClassName Method - It is a method that is used to access any html element by its class name.";
}

// 3) getElementsByName("name") - It is a method that is used to access any html element by its name.

function fnc5(){
    console.log(document.getElementsByName("id3"));
}

function fnc6(){
    document.getElementsByName("id3").innerText="DOM getElementByClassName Method - It is a method that is used to access any html element by its class name.";
}

// 4) getElementsByTagName("tag_name") - It is a method that is used to access any html element by its tag name.

function fnc7(){
    console.log(document.getElementsByTagName("h3"));
}

function fnc8(){
    document.getElementsByName("h3").innerText="DOM getElementByTagName Method - It is a method that is used to access any html element by its tag name.";
}



