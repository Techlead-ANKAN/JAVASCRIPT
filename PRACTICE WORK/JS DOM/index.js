// A. JavaScript DOM Practice (13) [Link: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php ] 

// Q1) Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code. Clicking on the button the font, font size, and color of the paragraph text will be changed.

// function js_style(){
//     document.getElementById("text").style.color = "green";
//     document.getElementById("text").style.fontSize = "30px";
//     document.getElementById("text").style.fontFamily = "Monospace";
// }



// Q2) Write a JavaScript function to get the values of First and Last names of the following form.


// Function declaration for getFormvalue
function getFormvalue()
{
  // Retrieving form element with id 'form1'
  var x=document.getElementById("form1");
  // Looping through form elements
  for (var i=0;i<x.length;i++)
  {
    // Checking if element value is not 'Submit'
    if (x.elements[i].value!='Submit')
    {  
      // Logging element value to console
      console.log(x.elements[i].value);
    }  
  }
}

