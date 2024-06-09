// Exercise - 1

// Write a JS program to generate a random number and store it in a variable. The program then takes an input from the user to tell them wether the guess was correct, gretaer or lower than the original number.The program should get terminated after correct guess.

let orgnl_num = Math.floor(Math.random() * 101);

let guess;
let i = 0;
while (true) {
    guess = parseInt(prompt("enter your guess: "));
    i++;

    if (guess > orgnl_num) {
        console.log("Actual Number is less than your guess.");
    } else if (guess < orgnl_num) {
        console.log("Actual Number is greater than your guess.");
    }

    if (guess == orgnl_num) {
        console.log("Your guess is correct. Total guesses = " + i);
        break;
    }
}
