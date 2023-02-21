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

// const getUserInput = function(){
    
// }

buttonToPlay.addEventListener("click", function(e){
    e.preventDefault(); //To prevent the page from reloading
    // table.classList.add("hide");
    let content = this.value
    console.log(content)
})

