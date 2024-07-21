// JavaScript Fetch 

// Fetch ===>  The fetch() method starts the process of getting a resource from the server and returns a promise that resolves to a Response Object.

// API (Application Programming Interface)  ===> when our system asks for any requests to any server then it do not ask the requests directly to the server, it ask the requests to the api of that server, and then the server sends the response back to the api and then the api forwards that response to the system.

// Syntax: 
// let promise = fetch(url, [options])

// Note - By default the fetch method sets the option for GET request

// Some Important terms: 

// 1) AJAX - It is known as Asynchronous JS & XML
// 2) JSON - It is known as JavaScript Object Notation
// 3) json() method -  This method returns the second promise that takes JSON as an input and gives an readable JS Object as an output. That is converts the JSON into a JS Object.

// Note: If you want only the JSON then you need a single promise, but if you need JS Object then you need a second promise to convert that JSON into JS object.

const url = "https://cat-fact.herokuapp.com/facts";     // API endpoint

let get_response = async() => {
    
    let response = await fetch(url);  // Fetchiing the response / data in JSON Format

    let js_data = await response.json();  // Converting the received response / data from JSON format to JS Object Format

    console.log(js_data[2].text);   // usable data
}

get_response();