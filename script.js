"use strict";

// UI Elements
const headingPrimary = document.querySelector(".heading-primary");
const subHeading = document.querySelector(".sub-heading");
const leadText = document.querySelector(".lead-text");

const form = document.querySelector(".form");
const inputNumbers = document.querySelector(".number");
const inputLetters = document.querySelector(".letter");
const inputSymbols = document.querySelector(".symbol");

const btnGenerate = document.querySelector(".generate");
const btnCreate = document.querySelector(".create");
const btnCopy = document.querySelector(".copy");

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

let numLetters, numNumbers, numSymbols;
let finalPassword = " ";

let startingPassword = [];

// Displaying The Input Form
btnGenerate.addEventListener("click", function () {
  // hide elements and show elements
  headingPrimary.classList.toggle("hidden");
  subHeading.classList.toggle("hidden");
  leadText.classList.toggle("hidden");
  form.classList.toggle("hidden");
  btnGenerate.classList.toggle("hidden");
  btnCreate.classList.toggle("hidden");
});

btnCreate.addEventListener("click", function () {
  // Hide and show elements
  form.classList.toggle("hidden");
  btnCreate.classList.toggle("hidden");
  headingPrimary.classList.toggle("hidden");
  subHeading.classList.toggle("hidden");
  btnCopy.classList.toggle("hidden");
  leadText.classList.toggle("hidden");

  // Assigning elements
  headingPrimary.textContent = "Your Password";

  numLetters = inputLetters.value;
  numNumbers = inputNumbers.value;
  numSymbols = inputSymbols.value;

  generatePassword();

  leadText.textContent = finalPassword;
});

btnCopy.addEventListener("click", function () {
  const contentCopied = leadText.textContent;
  navigator.clipboard.writeText(contentCopied);

  btnCopy.textContent = "Copied !!";
  btnCopy.style.backgroundColor = "#40e0d0";
});

function generatePassword() {
  // Getting Random Letters
  for (let i = 0; i < numLetters; i++) {
    const randNum = Math.floor(Math.random() * letters.length);
    const randomLetters = letters[randNum];
    startingPassword.push(randomLetters);
  }

  // Getting Random Numbers
  for (let i = 0; i < numNumbers; i++) {
    const randNum = Math.floor(Math.random() * numbers.length);
    const randomNumbers = numbers[randNum];
    startingPassword.push(randomNumbers);
    console.log(randomNumbers);
  }

  // Getting Random Symbols
  for (let i = 0; i < numSymbols; i++) {
    const randNum = Math.floor(Math.random() * symbols.length);
    const randomSymbols = symbols[randNum];
    startingPassword.push(randomSymbols);
  }

  // Extracting the password from starting password Array

  console.log(startingPassword);

  for (let i = 0; i < startingPassword.length; i++) {
    finalPassword += startingPassword[i];
  }
}
