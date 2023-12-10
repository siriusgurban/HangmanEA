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
    let findWord = [];
    let attemp = 0;

    for (let i = 0; i < word.length; i++) {
        findWord.push(".");
    }
    wordId.innerHTML = findWord.join("");

    addEventListener("keypress", (e) => {//event when I push the keys

        if (word.includes(e.key)) {



            for (let i = 0; i < word.length; i++) {
                if (word[i] === e.key) findWord.splice(i, 1, e.key); //changing dots(".") with correct letters


            }
            
            console.log(findWord.every((el) => { el !== "." }));

            // if (findWord.every((el) => { el !== "." })) { 
            //     return winner(); 
            // }



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
    console.log(num, "num");
    if (num == 4) {
        console.log("oyun bitti");
        go.classList.remove("dispImg");
        tryagain.classList.remove("dispImg");//gameOver funtion also shows reload section on screen
        tryagain.addEventListener("click", () => { location.reload() })

    }

    return;
}

function winner() {
    win.classList.remove("dispWin");
}

startGame(words[randomNumber])