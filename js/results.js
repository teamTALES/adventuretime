'use strict';

const resultsArray = JSON.parse(localStorage.getItem('results'));
const currentPlayer = resultsArray[resultsArray.length - 1];
const winOrLose = resultsArray[resultsArray.length - 1].abChoices[currentPlayer.abChoices.length - 1];
console.log(winOrLose);

if (winOrLose === 'AB2' || winOrLose === 'BB2') {
    console.log('You Win"');

} else {}//run losing function

