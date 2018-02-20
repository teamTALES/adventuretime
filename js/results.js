'use strict';

const resultsArray = JSON.parse(localStorage.getItem('results'));
const currentPlayer = resultsArray[resultsArray.length - 1];

let endID = currentPlayer.choices.join('');
endID = endID.concat(currentPlayer.choices.length);

if (endID === 'AB2' || endID === 'BB2') {
    document.getElementsByTagName('header')[0].innerHTML = 'You win!';
} else {
    document.getElementsByTagName('header')[0].innerHTML = 'You Lose!';
}

function isMatch(array){
    return array.name === endID;
}

const result = script.find(isMatch); // eslint-disable-line

const text = document.getElementById('text');
text.innerHTML = result.story;