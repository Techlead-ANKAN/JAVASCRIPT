// Practice Set - 7

// Q1) Create a navbar and change the color of its first element to red.

function chnge_clr(){
    document.querySelector(".navbar").firstElementChild.style.color="red";
}


// Q2) Create a table without "tbody". Now use the view page source button to check whether it has a "tbody" or not.

// NO, there is no "tbody" tag in view page source.


// Q3) Create an element with 3 children. Now change the color of the first and the last child.

function chnge_fst_lst(){
    const parent = document.querySelector(".q3_parent");

    let i;

    parent.childNodes[1].style.color="blue";
    parent.childNodes[parent.childElementCount+2].style.color="pink";
}



// Q4) Write a javascript code to change the background of all colors of all "<li>" tags to "cyan".

function chnge_all(){
    const list = document.querySelector(".q4_list");

    let i;

    for(i=0;i<list.clientHeight;i++){
        if(i==0){
            list.children[i].style.background="red";
        }
        else if(i==1){
            list.children[i].style.background="purple"
        }
        else{
            list.children[i].style.background="green"
        }
        
    }
    
}


// Q5) Which of the following is used to look for the farthest ancestor that matches a given CSS Selector:

// (a) mathces
// (b) closest
// (c) contains
// (d) none of these   ---->   Ans