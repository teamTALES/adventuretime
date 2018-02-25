'use strict';

if (!localStorage.getItem('gameInProgress')) window.location.href = 'index.html';

const resultsArray = JSON.parse(localStorage.getItem('results'));
const currentPlayer = resultsArray[resultsArray.length - 1];
/*
    This all feels very reminiscent of work done in the game object - 
    is there a way we can attach what we're doing here to it?
    In a showResults method or something similar.
*/
const avatar = document.getElementById('avatar');
const consoleWindow = document.getElementById('consoleWindow');
avatar.className = currentPlayer.character;
const endID = currentPlayer.choices.concat(currentPlayer.choices.length);
const header = document.querySelector('header');

function isMatch(array){
    return array.name === endID;
}

const result = script.find(isMatch); // eslint-disable-line

if (result.bg === 'death') {
    const music = document.getElementById('music');
    music.setAttribute('src', 'audio/LandoftheDead.mp3');
    const h1 = document.createElement('h1');
    h1.textContent = 'You Lose!';
    header.appendChild(h1);
    if (result.name === 'BAA3') {
        document.getElementById('encounter').className = result.encounter;
    }
} else {
    const music = document.getElementById('music');
    music.setAttribute('src', 'audio/Galway.mp3');
    const h1 = document.createElement('h1');
    h1.textContent = 'You Win!';
    header.appendChild(h1);
}

const text = document.getElementById('story');
text.innerHTML = result.story;
consoleWindow.className = result.bg;

const nav = document.getElementById('buttons');
nav.addEventListener('click', function(){
    console.log(event.target.id);
    if (event.target.id === 'restart'){
        window.location.href = 'index.html';
    } else if (event.target.id === 'credits'){
        window.location.href = 'leaderboard-credits.html';
    }
});

const mutebutton = document.getElementById('mute');  // mute control for navigation bar
const musicplayer = document.getElementById('music');
mutebutton.addEventListener('click', function (){
    if (mutebutton.getAttribute('src') === 'images/mute.png') {
        musicplayer.muted = true;
        mutebutton.setAttribute('src', 'images/unmute.png');
        mutebutton.setAttribute('title', 'Unmute');
    } else if (mutebutton.getAttribute('src') === 'images/unmute.png') {
        musicplayer.muted = false;
        mutebutton.setAttribute('src', 'images/mute.png');
        mutebutton.setAttribute('title', 'Mute');
    }
});