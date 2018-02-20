'use strict';

const resultsArray = JSON.parse(localStorage.getItem('results'));
const currentPlayer = resultsArray[resultsArray.length - 1];

const endID = currentPlayer.choices.concat(currentPlayer.choices.length);

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

for (let i = 0; i < resultsArray.length; i++){
    const previous = document.getElementById('previous');

    const card = document.createElement('div');
    card.className = 'oldResult';
    // card.appendChild('img');
    const summary = document.createElement('h2');

    const endID = resultsArray[i].choices.concat(resultsArray[i].choices.length);

    summary.textContent = resultsArray[i].name + endID;

    card.appendChild(summary);
    previous.appendChild(card);
}
