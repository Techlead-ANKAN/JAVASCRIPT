// Exercise - 2 (Snake, Water, Gun)

// Use JavaScript to create a game of Snake, Water and Gun. The game should ask you to enter 'S', 'W' or 'G'. The computer should be able to randomly generate 'S', 'W' or 'G'and declare win or loss using alert(), confirm(), prompt() when required.


while (true) {
    let a = confirm("Do you want to play ?");

    if (a == true) {
        let user = prompt("Enter 'S' for Snake, 'W' for Water & 'G' for Gun: ");
        let comp = Math.floor(Math.random(4 - 1)) + 1;
        let final_comp;
        if (comp == 1) {
            final_comp = 'S';
        }
        else if (comp == 2) {
            final_comp = 'W';
        }
        else if (comp == 3) {
            final_comp = 'G';
        }
        console.log(user);
        console.log(final_comp);
        checker(user, final_comp);
    }
    else{
        break;
    }
}




function checker(a, b) {

    if (a == 'S') {
        if (b == 'W') {
            alert("User won");
        }
        else if (b == 'G') {
            alert("Computer Won");
        }
        else if (a == b) {
            alert("Draw");
        }
    }

    else if (a == 'W') {
        if (b == 'S') {
            alert("Computer won");
        }
        else if (b == 'G') {
            alert("User Won");
        }
        else if (a == b) {
            alert("Draw");
        }
    }

    else if (a == 'G') {
        if (b == 'S') {
            alert("User won");
        }
        else if (b == 'W') {
            alert("Computer Won");
        }
        else if (a == b) {
            alert("Draw");
        }
    }
}