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



//==========================  HTML DOM DOCUMENTS ( Link: https://www.w3schools.com/jsref/dom_obj_document.asp )==========================

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


// 15) document.createDocumentFragment()    ===>    It is used to create a node that can be used to build a document fragment which can be inserted in any document.

// let x = document.createDocumentFragment();
// let arr = ['Ankan', 'Piu', 'Yash'];

// x.append((document.createElement("h2")).innerHTML = arr[0]);
// x.append((document.createElement("h2")).innerHTML = arr[1]);
// x.append((document.createElement("h2")).innerHTML = arr[2]);


// 16) createTextNode("text")   ===>    This method is used to create an element that consist of text only.
// let v16 = document.createTextNode("This is a text node.");
// document.appendChild(v16);


// 17) document.defaultView  ===>    This method returns the window object or null if none is availabale.
// let v17 = document.defaultView;
// let ht = v17.innerHeight;
// let wt = v17.innderWidth;
// console.log(ht);
// console.log(wt);


// 18) document.designMode  ===> It is used to return 'on' or 'off' whether the document is editable or not. you can also set the document to any mode by assigning on or off.
// console.log(document.designMode);
// document.designMode = 'on';
// console.log(document.designMode);


// 19) (i) document.doctype     ===>    The doctype property returns a document's doctype. It returns null if the document has no 
//                                      doctype. It is read-only.
// console.log(document.doctype);  --> It returns <!DOCTYPE html>

// (ii) document.doctype.name   ===>    It returns the name of the doctype
// console.log(document.doctype.name);  --> It returns "html"


// 20) document.documentElement.nodeName    ===>    It returns a documents element (as an element object). It is read-only.
// console.log(document.documentElement.nodeName);     --> It returns "HTMl"


// 21) document.documentURI;    ===>    It is a read-only property that returns a documents location.
// console.log(document.documentURI);


// 22) document.domain      ===>    It returns the domain name of the server that is loaded into the browser. It returns null if the domain was created in memeory.
// console.log(document.domain);


// 23) (i) document.forms.length    ===>    It returns the no.of form elements used in the document.
// console.log(document.forms.length);

// (ii) document.forms[index].<attribute>   ===>    It  returns the value of the attribute of the indexth form element.


// 24) document.hasFocus()  ===>    It returns true if the document has focus otherwise false.
// console.log(document.hasFocus());


// 25) (i) document.images  ===>    This property returns the collection of all <img> elements in a document.
// console.log(document.images);

// (ii) document.images[0].src  ===>    The url of the first <img> element.


// 26) document.importNode(<node>, deep)    ===>    This method can import any node from any other document in the frame. If "deep" is set to "true" then all the child nodes of the node will also be imported, if "false" then only the node will be imported.

// let fm = document.getElementById("myFrame");
// let v26 = frame.contentWindow.document.getElementById("h1")[0];
// let node = document.importNode(v26, true)


// 27) document.lastModified    ===>    It is a read-only property that returns the date and time the document was modified last.
// console.log(document.lastModified);  // returns a string

// let obj = new Date(document.lastModified)  // it creates date object


// 28) (i) document.links  ===>    This property returns the collection of all links in a document.
// console.log(document.links);

// (ii) document.images[0].src  ===>    The url of the first <img> element.

// (iii) document.links.length  ===>    It returns the no.of links present in the document.


// 29) document.normalize()     ===>    This method removes empty text nodes and joins adjacent text nodes.
// document.normalize();


// 30) 
// (i) document.querySelector("<css selectors>")    ===>    This method returns the first element that matches the CSS Selector
// document.querySelector("#myId").computedStyleMap.backgroundColor='red';

// (ii) document.querySelectorAll("<css selector>")     ===>    This method returns the all elements that matches the CSS Selector
// document.querySelectorAll("#myId").computedStyleMap.backgroundColor='blue';


// 31) document.readyState      ===>    This method returns the moading status of the document in the browser.
// console.log(document.readyState);


// 32) document.referrer    ===>    This read-only property returns the URL of the document that loaded the current document.
// console.log(document.referrer);


// 33) (i) document.scripts  ===>    This property returns the collection of all scripts in a document.
// console.log(document.scripts);

// (ii) document.scripts[0].text  ===>    The text of the first script element.

// (iii) document.scripts.length  ===>    It returns the no.of scripts present in the document.



// 34) document.title   ===>    This method sets or returns the title of the document.

// (i) Getting title: 
// console.log(document.title);

// (ii) setting title: 
// document.title = "New Title";



// 35) document.URL     ===>    Returns the full url of the document.
// console.log(document.URL);









//========================== HTML DOM ELEMENT OBJECTS( Link: https://www.w3schools.com/jsref/dom_obj_all.asp ) ==========================


// In HTML DOM, the element object represents an HTML element like 'p', 'div', 'a', 'table', .... or any other HTML element.


// Properties and Methods that can be used by any HTML Element: 


// 1) document.<element>.accessKey  ===>    This property sets or returns the shortcut key to an element. You have to press the accessKey along with 'Alt' button.
// (i) Setting: 
//    document.getElementById("myid").accessKey = 'w';     
// (ii) Getting:
// console.log(document.getElmentByClassName("myclass").accessKey);



// 2) document.<element>.addEventListener("event", function() {action to perform})  ===>    This method is used to add an action to any element when a particular event occurs.

// document.getElementById("myId").addEventListener("click", function action(){
//    document.getElementById("target_id").innerHTML="New Text";
// });



// 3) document.<element>.appendChild(element)  ===> This method is used to append an element or child or node at last.

// let node = document.createElement("a");
// let text = document.createTextNode("This is a link");
// node.appendChild(text);
// document.getElementById("myid").appendChild(node);



// 4) document.<element>.attributes ===> This property returns a collection of attribuites in an element.

// let atts = document.getElementById("myid").attributes;
// console.log(atts);   // Shows the collection of attributes


// Traversing all the attributes :
// for (let i = 0; i < atts.length; i++) {
//     let text = "";
//     text += atts[i].name + " = " + atts[value] + "<br>";
//     console.log(text);
//     text = "";
// }



// 5) document.<element>.focus()    ===>    This method is used to gain focus to an element.
/* <input type="text" id="myid"></input>
document.getElementById("myid").focus(); */



// 6) document.<element>.blur()    ===>    This method is used to remove focus from an element.
/* <input type="text" id="myid"></input>
document.getElementById("myid").blur(); */



// 7) document.<element>.childElementCount  ===>    It is a read-only property that returns the number of child elements of an element. It returns the same as children.length.
// console.log(document.getElementsByClassName("myclass").childElementCount);



// 8) document.<element>.childNodes ===>    It is a read-only property that returns a collection of the child nodes of an element.
// console.log(document.getElementById("myid").childNodes);



// 9) document.<element>.children   ===>    This property returns a collection of all the children of an element.
// console.log(document.body.children);



// 10) document.<element>.classList ===>    This property the CSS classnames of an element. It returns a DOMTokenList.
// console.log(document.getElementById("myid"));


// 11) document.<element>.className ===>    It is used to set or return the class name of an element.
// console.log(document.getElementById("myid").className);  getting class name of an element
// document.getElementById("myid").className = "myclass";   setting class name of an element



// 12) document.<element>.clientHeight  ===>    It is a read-only property that returns the veiwable height of the element in pixels including padding, excluding border, scrollbar, margin.
// console.log(document.getElementById("myid").clientHeight);




// 13) document.<element>.clientWidth  ===>    It is a read-only property that returns the veiwable width of the element in pixels including padding, excluding border, scrollbar, margin.
// console.log(document.getElementById("myid").clientWidth);


// 14) document.<element>.clientLeft    ===>    It is a read-only property that returns the width of the element's left border in pixels excluding left padding or left margin.
// console.log(document.getElementById("myid").clientLeft);



// 15) document.<element>.clientRight    ===>    It is a read-only property that returns the width of the element's right border in pixels excluding right padding or right margin.
// console.log(document.getElementById("myid").clientRight);



// 16) document.<element>.cloneNode(deep: true | false)     ===>    This method is used to clone a node. If the deep option is set to true then it will copy all it's children nodes also otherwise it would not.
// let node = document.getElementById("mydiv");
// let clone = node.cloneNode(true);



// 17) document.<element>.closest("<css selector>")     ===>    This method searches up the DOM tree for elements which matches a specified CSS Selector and returns that element. It starts from the element itself then the ancestors untill a match is found. Returns null is no mathc is found.
// console.log(document.getElementById("mydiv").closest("#mydiv"));


// 18) <ele1>.compareDocumentPosition(<ele2)    ===>    This method compares the position of ele1 and ele2 in the document.
// Possible Values: 
// 1: The two nodes do not belong to the same document.
// 2: p1 is positioned after p2.
// 4: p1 is positioned before p2.
// 8: p1 is positioned inside p2.
// 16: p2 is positioned inside p1.
// 32: The two nodes are attributes on the same element.

// const p1 = document.getElementById("p1").lastChild;
// const p2 = document.getElementById("p2").lastChild;
// let position = p1.compareDocumentPosition(p2);


// 19) <ele1>.contains(<ele2>)  ===>    This method returns true if the ele1 node contains ele2 node, otherwise returns false.
// console.log(document.getElementById("myDIV").contains(document.getElementById("mySPAN")));


// 20) document.<element>.contentEditable   ===>    This property is used to set or return if the content is editable or not.
// (i) setting:
// document.getElementById("myP").contentEditable = "true";

// (ii) getting: 
// console.log(document.getElementById("myP").contentEditable);



// 21) document.<element>.dir   ===> This property is used to set or return the text direction.
                // ltr --> left to right (default)
                // rtl --> right to left
                // auto --> Lets the  browser figure out.
// (i) getting:
// console.log(document.getElmentById("myp").dir);
// (ii) setting:
// document.getElmentById("myp").dir = "ltr|rtl|auto"



// 22) document.<element>.firstChild   ===>     It is a read-only property that returns the first child node of a node, saem as childNodes[0]. 
// firstChild returns the first child node: An element node, a text node, or a comment node. Whitespace between elements are also text nodes.
// console.log(document.getElementById("myId").firstChild.innerHTML);



// 23) document.<element>.firstElementChild     ===>    It is a read only property that returns the first child element of the specified element. same as children[0]. It ignores text and comment nodes.
// console.log(document.getElementById("myId").firstElementChild.innerHTML);



// 24) document.<element>.focus()   ===>    This method is used to give focus to an element if and only if it can be focused.
// document.getElementById("myId").focus();



// 25) document.<element>.blur()   ===>    This method is used to remove focus from an element.
// document.getElementById("myId").blur();



// 26) document.<element>.getAttibute("<attribute_name>")  ===>    This method returns the value of an elements attribute.
// console.log(document.getElementById("myId").getAttribute("href/id/class/... etc"));



// 27) document.<element>.getAttributeNode("href/id/class/... etc")     ===>    This methods returns the attribute object and when used with ".value" then it gives us the avlue of the attribute.

// let attr = document.getElementByTagName("H1").getAttributeNode("class")
// console.log(attr);   -- It returns the attribute object that contains the class name of the element

// console.log(attr.value);   -- It returns the value of the attribute object that contains the class



// 28) document.<element>.hasAttirubte()    ===>    This method returns the true if the attribute exeists for that particular specified element.
// console.log(document.getElementById("myId").hasAttirubte("href"));   



// 29) document.<element>.hasAttributes()   ===>    This methods returns true if a node has attributes otherwise false.
// console.log(document.getElementById("myId").hasAttributes());



// 30) document.<element>.hasChildNodes()   ===>    This method returns true if the specified elements has any child nodes otherwise false.
// console.log(document.getElementById("myId").hasChildNodes());



// 31) document.<element>.id    ===>    This property is used to set or return the attribute value of an element.
// (i) getting: 
// console.log(document.getElementById("democlass").id)     - returns the id
// (ii) setting: 
// document.getElementById("democlass").id = "newid"    - sets the new id



// 32) document.<element>.innerHTML     ===>    This method is used to return or set the HTML content (inner HTML) of an element.
// (i) getting:
// console.log(document.getElementById("myid").innerHTML);
// (ii) setting:
// document.getElementById("myid").innerHTML = "This is my new innerHTML content."



// 33) document.<element>.innerText     ===>    This method is used to return or set the text content of an element.
// (i) getting:
// console.log(document.getElementById("myid").innerText);
// (ii) setting:
// document.getElementById("myid").innerText = "This is my new innerHTML content."



// 34) ele1.insertAdjacentElement("position", ele2)     ===>    This method is used to insert ele2 intoa specified position.
// positions: 
// 1) afterbegin --->	After the beginning of the element (first child)
// 2) afterend	 --->   After the element
// 3) beforebegin --->   Before the element
// 4) beforeend	--->   Before the end of the element (last child)


// const span = document.getElementById("mySpan");
// const h2 = document.getElementById("myH2");
// h2.insertAdjacentElement("afterbegin | afterend | beforebegin | beforeend", span);



// 35) element.insertAdjacentHTML("position", html)     ===>    This method is used to insert an HTML code snippet into a specified position.
// positions: 
// 1) afterbegin --->	After the beginning of the element (first child)
// 2) afterend	 --->   After the element
// 3) beforebegin --->   Before the element
// 4) beforeend	--->   Before the end of the element (last child)

// const h2 = document.getElementById("myH2");
// const newhtml = "<p>This is a new paragraph.</p>"
// h2.insertAdjacentHTML("afterbegin | afterend | beforebegin | beforeend", newhtml);



// 36) element.insertAdjacentText("position", text)     ===>    This method is used to insert a text into a specified position.
// positions: 
// 1) afterbegin --->	After the beginning of the element (first child)
// 2) afterend	 --->   After the element
// 3) beforebegin --->   Before the element
// 4) beforeend	--->   Before the end of the element (last child)

// const h2 = document.getElementById("myH2");
// const newtext = "New Text."
// h2.insertAdjacentText("afterbegin | afterend | beforebegin | beforeend", newtext);



// 37) document.getElementById("myid").isContentEditable    ===>    This property returns true if the html element is editable otherwise false.
// console.log(document.getElementById("myid").isContentEditable); 



// 38) item1.isEqualNode(item2)     ===>    This method returns true if botha the elements are same, otherwise false.
// var item1 = document.getElementById("myList1").firstChild;
// var item2 = document.getElementById("myList2").firstChild;
// var x = item1.isEqualNode(item2);



// 39) document.<element>.lang  ===>    This propertry is used to set or return the value of the "lang" attribute of the element.
// (i) setting:
// document.getElementById("myP").lang = "ar";
// (ii) getting:
// console.log(document.getElementById("myP").lang); 



// 40) 

























































