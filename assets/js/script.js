const body = document.querySelector(".body");
const arm = document.querySelector(".arm");
const legs = document.querySelector(".legs");
const button = document.querySelector("button");
const wordId = document.querySelector("#word");
const pieces = document.querySelectorAll(".d-none");

const audioElement = new Audio("../assets/audios/Daft_Punk_-_Veridis_Quo_47961262.mp3");


const words = ["apple", "peach", "banana", "kiwi", "ananas", "melon", "orange", "lemon", "grape"];

let randomNumber = Math.floor(Math.random() * words.length);


function startGame(word) {
    audioElement.play();
    let findWord = [];
    let attemp = 0;

    for (let i = 0; i < word.length; i++) {
        findWord.push(".");
    }
    wordId.innerHTML = findWord.join("");

    addEventListener("keypress", (e) => {

        if (word.includes(e.key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === e.key) findWord.splice(i, 1, e.key);
            }
        }
        else {
            pieces[attemp].classList.remove("d-none");
            attemp++;
            gameOver(attemp)
        }
        wordId.innerHTML = findWord.join("");
    })
}

function gameOver(num) {
    if (num === 4) console.log("oyun bitti");
}

startGame(words[randomNumber])