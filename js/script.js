"use strict";

let secretNumber = Math.floor(Math.random() * 10) + 1;
let currentScore = 10;
let highScoreNumber = 0;

const body = document.querySelector("body");
const userInput = document.querySelector(".user-input");
const secreNum = document.querySelector(".secret-number");
const allBtn = document.querySelectorAll(".btn");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const message = document.querySelector(".main-message");

checkBtn.addEventListener("click", ()=> {
    const userInputNum = +userInput.value;
    if (currentScore > 1) {
        if (!userInputNum) {
            message.textContent = "Please enter a number!";
        } else if (userInputNum !== secretNumber) {
            currentScore--;4
            if (userInputNum > secretNumber) {
                message.textContent = "Too High!";
            } else if (userInputNum < secretNumber) {
                message.textContent = "Too Low!";
            }
        } else if (userInputNum === secretNumber) {
            if (currentScore > highScoreNumber) {
                highScoreNumber = currentScore;
                highScore.textContent = highScoreNumber;
            } 
            body.style.backgroundColor = "#60b347";
            message.textContent = "Correct !!!";
            checkBtn.disabled = true;
            userInput.disabled = true;
        }
    } else {
        message.textContent = "You Lost!";
        body.style.backgroundColor = 'red';
        currentScore = 0;
        checkBtn.disabled = true;
        userInput.disabled = true;
    }
    score.textContent = currentScore;
    userInput.value = null;
})


againBtn.addEventListener("click", ()=> {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    currentScore = 10;
    score.textContent = currentScore;
    checkBtn.disabled = false;
    userInput.disabled = false;
    message.textContent = "Start Guessing..."
    body.style.backgroundColor = "#222";
})