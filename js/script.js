//Button to play:
const buttonToPlay = document.querySelector(".play");
//Button to replay that will appear prompting the player to play again:
const buttonToPlayAgain = document.querySelector(".play-again");

const message = document.querySelector(".message");
//Word input from user:
const inputWord = document.querySelectorAll(".word");
//Meaning input from user:
const inputMeaning = document.querySelectorAll(".meaning");
//Table with user input:
const table = document.querySelector(".table-wrapper");



let vocab = [];

//Connect to the input element in HTML:
let userInput = document.querySelector('input').value;

//Function to get value from the input boxes when the "play" button is engaged (using onclick)
// the values are then pushed into the vocab[] 
function getValue(userInput) {
    // e.preventDefault(); //To prevent the page from reloading
   let id0 = document.getElementsByTagName("input")[0];
   let id1 = document.getElementsByTagName("input")[1];
   let id2 = document.getElementsByTagName("input")[2];
   let id3 = document.getElementsByTagName("input")[3];
   let id4 = document.getElementsByTagName("input")[4];
   let id5 = document.getElementsByTagName("input")[5];
   let id6 = document.getElementsByTagName("input")[6];
   let id7 = document.getElementsByTagName("input")[7];
   let id8 = document.getElementsByTagName("input")[8];
   let id9 = document.getElementsByTagName("input")[9];
   vocab.push(id0.value, id1.value, id2.value, id3.value,
              id4.value, id5.value, id6.value, id7.value,
              id8.value, id9.value );
//    console.log(id0.value, id1.value, id2.value, id3.value)
   console.log(vocab)
}




