function log(input) {
    console.log(input);
}

// Variables
const cardSets = ["♦", "♥", "♠", "♣"];
const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const number = document.getElementById("number");
const symbolDiv = document.getElementsByClassName("card__symbol")

// const symbolTop = document.getElementById("symbolTop");
// const symbolBottom = document.getElementById("symbolBottom");
const button = document.getElementById("btn");

// Random Array Item
function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Apply Random Items to HTML Elements
function randomSymbol() {
    let randomSymbol = randomItem(cardSets);

    if (randomSymbol === "♦" || randomSymbol === "♥") {
        for (let i = 0; i < symbolDiv.length; i++) {
            symbolDiv[i].classList.add("card__symbol--red");
            symbolDiv[i].textContent = randomSymbol;
        }
    } else {
        for (let i = 0; i < symbolDiv.length; i++) {
            symbolDiv[i].classList.remove("card__symbol--red");
            symbolDiv[i].textContent = randomSymbol;
        }
    }
}

function randomNum() {
    let randomNumber = randomItem(cardNumbers);
    number.innerText = randomNumber;
}

// Button Event Listeners
button.addEventListener("click", randomSymbol);
button.addEventListener("click", randomNum);

// On page Load Event
window.addEventListener("load", randomSymbol);
window.addEventListener("load", randomNum);
