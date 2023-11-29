function log(input) {
    console.log(input);
}

// HTML ELEMENTS ----------------------
const cardSets = ["♦", "♥", "♠", "♣"];
const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const number = document.getElementById("number");
const symbolDiv = document.getElementsByClassName("card__symbol");
const button = document.getElementById("btn");
const cardHistoryDisplay = document.getElementById("cardHistoryContainer");
const background = document.querySelector(".bg");
const colorPicker = document.getElementById("colorPicker")

// VARIABLES ----------------------
let producedNumber = null;
let producedSymbol = null;
let historyArray = [];

// FUNCTIONS ----------------------

// Produce Random Array Item
function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Produce Random Symbol
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
    producedSymbol = randomSymbol;
}

// Produce Random Number
function randomNum() {
    let randomNumber = randomItem(cardNumbers);
    number.innerText = randomNumber;
    producedNumber = randomNumber;
}

// Combine Random Num + Symbol for Card History Array
function cardCombination(number, symbol) {
    return `${number} ${symbol}`
}

// Update Card History Container
function updateHistoryDisplay() {
    cardHistoryDisplay.innerHTML = "";
    // Create History Box Header
    const cardHistoryText = document.createElement("p");
    cardHistoryText.textContent = "Card History";
    // Create UL
    const ul = document.createElement("ul");
    // Iterate through historyArray and create li items
    historyArray.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        // Turn text red if...
        if (item.includes("♦") || item.includes("♥")) {
            li.classList.add("card__symbol--red");
        }
        // Add li to ul
        ul.appendChild(li);
    });
    // Append ul to container
    cardHistoryDisplay.appendChild(cardHistoryText)
    cardHistoryDisplay.appendChild(ul)
}

// Change Background color
function changeColor(colorValue) {
    background.style.backgroundColor = colorValue;
}

// EVENT LISTENERS ----------------------

// On Button Click (Combined function calls)
button.addEventListener("click", () => {
    randomSymbol();
    randomNum();
    let combinedCardValue = cardCombination(producedNumber, producedSymbol)
    historyArray = [...historyArray, combinedCardValue]
    updateHistoryDisplay();
});

// On page Load
window.addEventListener("load", randomSymbol);
window.addEventListener("load", randomNum);

// On Color Picker Change
colorPicker.addEventListener("change", (e) => {
    changeColor(e.target.value)
})