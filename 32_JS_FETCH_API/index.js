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



// let get_response = async() => {

//     let place = prompt("Enter location: ")
//     const url = "https://api.weatherapi.com/v1/current.json?key=5380e0ab714e4122999154651242407&q=" + place + "&aqi=no";     // API endpoint
    
//     let response = await fetch(url);  // Fetchiing the response / data in JSON Format

//     let js_data = await response.json();  // Converting the received response / data from JSON format to JS Object Format

//     console.log(js_data);   // usable data

//     let p = document.getElementsByClassName("weather")[0];

//     p.innerHTML = "<b>Location: </b>" + js_data.location.name + "<br>" + "<b>Weather: </b>" + js_data.current.condition.text + "<br>" + "<b>Temperature: </b>" + js_data.current.temp_c + "<br>" + "<b>Last Updated: </b>" + js_data.current.last_updated ;
// }



// HTTP Response Status Codes: -  ( https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses )

// (A) Informational Responses (100-199)

// 100 Continue: Indicates that the client should continue the request or ignore the response if the request is already finished.
// 101 Switching Protocols: Indicates that the server has switched protocols.
// 102 Processing: Indicates that the server is still processing the request and no information is available yet.
// 103 Early Hints: Provides early hints to the client about the response, while the server is still processing the request.


// (B) Successful Responses (200-299)

// 200 OK: Indicates that the request was successful and the response body contains the requested data.
// 201 Created: Indicates that the request was successful and a new resource was created.
// 202 Accepted: Indicates that the request was accepted, but the processing has not been completed yet.
// 203 Non-Authoritative Information: Indicates that the response is from a cache or a proxy server, rather than the origin server.
// 204 No Content: Indicates that the request was successful, but there is no response body.
// 205 Reset Content: Indicates that the request was successful, and the client should reset its view to the new response.
// 206 Partial Content: Indicates that the request was successful, and the response body contains a partial representation of the requested resource.


// (C)  Redirection Responses (300-399)

// 301 Moved Permanently: Indicates that the requested resource has been permanently moved to a new location.
// 302 Found: Indicates that the requested resource has been temporarily moved to a new location.
// 303 See Other: Indicates that the requested resource can be found at a different location.
// 304 Not Modified: Indicates that the requested resource has not been modified since the last request.
// 305 Use Proxy: Indicates that the requested resource must be accessed through a proxy server.
// 307 Temporary Redirect: Indicates that the requested resource has been temporarily moved to a new location.
// 308 Permanent Redirect: Indicates that the requested resource has been permanently moved to a new location.


// (D)  Client Error Responses (400-499)

// 400 Bad Request: Indicates that the request was invalid or cannot be processed.
// 401 Unauthorized: Indicates that the client is not authenticated or does not have permission to access the requested resource.
// 402 Payment Required: Indicates that the client must make a payment to access the requested resource.
// 403 Forbidden: Indicates that the client does not have permission to access the requested resource.
// 404 Not Found: Indicates that the requested resource could not be found.
// 405 Method Not Allowed: Indicates that the request method is not allowed for the requested resource.
// 406 Not Acceptable: Indicates that the requested resource cannot be provided in the requested format.
// 407 Proxy Authentication Required: Indicates that the client must authenticate with a proxy server to access the requested resource.
// 408 Request Timeout: Indicates that the request took too long to process.
// 409 Conflict: Indicates that the request conflicts with the current state of the requested resource.
// 410 Gone: Indicates that the requested resource is no longer available.
// 411 Length Required: Indicates that the request must specify the length of the request body.
// 412 Precondition Failed: Indicates that a precondition for the request failed.
// 413 Payload Too Large: Indicates that the request body is too large.
// 414 URI Too Long: Indicates that the request URI is too long.
// 415 Unsupported Media Type: Indicates that the request body is in an unsupported format.
// 416 Range Not Satisfiable: Indicates that the requested range of bytes cannot be provided.
// 417 Expectation Failed: Indicates that an expectation for the request failed.
// 418 I'm a teapot: A humorous error code that indicates that the server is a teapot and cannot process the request.
// 421 Misdirected Request: Indicates that the request was sent to the wrong server.
// 422 Unprocessable Entity: Indicates that the request body is invalid or cannot be processed.
// 423 Locked: Indicates that the requested resource is locked and cannot be accessed.
// 424 Failed Dependency: Indicates that a dependency for the request failed.
// 425 Too Early: Indicates that the request is too early and cannot be processed.
// 426 Upgrade Required: Indicates that the client must upgrade to a newer version of the protocol to access the requested resource.
// 428 Precondition Required: Indicates that a precondition for the request is required.
// 429 Too Many Requests: Indicates that the client has sent too many requests in a short amount of time.
// 431 Request Header Fields Too Large: Indicates that the request header fields are too large.
// 451 Unavailable For Legal Reasons: Indicates that the requested resource is unavailable due to legal reasons.


// (E)  Server Error Responses (500-599)

// 500 Internal Server Error: Indicates that an internal error occurred on the server.
// 501 Not Implemented: Indicates that the requested method



// -----------------------------------------------------------------------------------------------------------------

let url = "https://jsonplaceholder.typicode.com/posts"

let options = {

    // (A) method:  GET || POST || PUT

    // GET: Requests for any service to the server.
    // POST: Uploads something to the server.
    // PUT: It is an updating operating for any existing resource in the server.
    
    method : "POST",


    
    // (B)  headers :{
                // "content-type" : "<type>"    
    //      },

    // Some content types are: (Refer to the link: https://www.geeksforgeeks.org/http-headers-content-type/ )

    // (i) application/json: The most content-types which sends the data in JSON format.
    // (ii) application/x-www-form-urlencoded: This is used for sending form data encoded as key-value pairs.
    // (iii) multipart/form-data: This is used for sending form data that includes files.
    // (iv) text/plain: This is for sending plain text data.
    // (v) text/xml: This is for sending data in XML format.

    headers : {
        "content-type" : "application/json"
    },



    // (C) body: The data is send in the format of JavaScript Object

    // the JSON.stringify()  --> Converts from JavaScript Object to JavaScript String.

    body : JSON.stringify({
        title : "JS POST API",
        author : "Ankan Maity",
        age : 21
    })
}


async function postData() {
    try {
        let response = await fetch(url, options);
        let data = response.json();
        console.log(data);
    }
    catch(error){
        throw new Error("Error has occured");
    }
}

postData();