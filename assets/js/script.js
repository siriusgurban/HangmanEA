const body = document.querySelector(".body");
const arm = document.querySelector(".arm");
const legs = document.querySelector(".legs");
const button = document.querySelector("button");
const wordId = document.querySelector("#word");
const go = document.querySelector("#go");
const tryagain = document.querySelector("#tryagain");
const win = document.querySelector("#win");
const pieces = document.querySelectorAll(".d-none");

const audioElement = new Audio("../assets/audios/Daft_Punk_-_Veridis_Quo_47961262.mp3");


const words = ["apple", "peach", "banana", "kiwi", "ananas", "melon", "orange", "lemon", "grape"];

let randomNumber = Math.floor(Math.random() * words.length);


function startGame(word) {
    audioElement.play();
    let attemp = 0;
    let findWord = [];

    for (let i = 0; i < word.length; i++) {
        findWord.push(".");
    }
    wordId.innerHTML = findWord.join("");

    addEventListener("keypress", function func(e) {//event when I push the keys
        console.log(attemp);
        if (word.includes(e.key)) {

            for (let i = 0; i < word.length; i++) {
                if (word[i] === e.key) findWord.splice(i, 1, e.key); //changing dots(".") with correct letters
            }

            let bool = findWord.every((el) => {// checking for, if word completed than invoke the winner() function
                if (el !== ".")
                    return true;
            })

            if (bool && attemp <= 4) {

                removeEventListener('keypress', func);// remove function to not let gameover overlay with winner() 
                winner();

            }

        }
        else {
            pieces[attemp].classList.remove("d-none");//
            attemp++;

            gameOver(attemp)//invoke gameOver function to show game over word
        }

        wordId.innerHTML = findWord.join("");
    })

}

function gameOver(num) {// gameOver function
    if (num == 4) {
        go.classList.remove("dispImg");
        tryagain.classList.remove("dispImg");//gameOver funtion also shows reload section on screen
        tryagain.addEventListener("click", () => { location.reload() });

    }
    return;
}

function winner() {
    win.classList.remove("dispWin");
}

startGame(words[randomNumber])