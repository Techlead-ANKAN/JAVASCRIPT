// Handling Errors in JavaScript

// Errors :- These are mistakes that the ueser makes in the program that halts the execution of the program.

// For all built-in errors there are 3 properties; -

// 1) <error>.name ===>   Sets or returns an error name
// 2) <error>.message ===> Sets or returns an error message
// 3) <error>.stack


// Some Errors names: 
// Error Name	           Description	

// EvalError	      Deprecated - use SyntaxError instead	 
// RangeError	      A number "out of range" has occurred	
// ReferenceError	  An illegal reference has occurred	
// SyntaxError	      A syntax error has occurred	
// TypeError	      A type error has occurred	
// URIError	      An error in encodeURI() has occurred





// 1) try and catch ===> This technique is used to catch errors and allows us to do something reasonable than just let dying the script.
/*
try{
    // code
}
catch(error){
    // code
}
*/

// Example:

try{
   console.log(a);
}
catch(error){
    console.log("Teri akal nahi hay...");

    // Details of the error
    console.log("----------Details of the Error----------");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}


// if you do not use try and catch then it will just show the error adn stop the execution of any line after that line.
console.log("Second Code");   // this will not get executed if there is no try and catch in the first error instance.




// 2) Throwing Errors:- We can throw our own errors.

// Example: 

let age = parseInt(prompt("Enter your age: "));

if (age < 18){
    throw new Error("Not Voter");
}


// We can also throw error using the built-in constructor for errors

// 1) new SyntaxError("<message>")
// throw new SyntaxError("This is mySyntax Error");

// 2) new RefernceError("<message>")
// throw new ReferenceError("This is myReference Error");


