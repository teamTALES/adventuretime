'use strict';

const resultsArray = JSON.parse(localStorage.getItem('results'));
const currentPlayer = resultsArray[resultsArray.length - 1];
const winOrLose = resultsArray[resultsArray.length - 1].choices[currentPlayer.choices.length - 1];
console.log(winOrLose);