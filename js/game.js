'use strict';

const choices = document.getElementById('choices');
const header = document.querySelector('header');
const countdown = document.getElementById('count100');

choices.a.addEventListener('click', function (){
    game.player.choices += 'A';
    game.level++;

    game.endCheck();
});

choices.b.addEventListener('click', function (){
    game.player.choices += 'B';
    game.level++;

    game.endCheck();
});

const game = {
    player: '',
    level: 0,
    avatar: document.getElementById('avatar'),
    story: document.getElementById('story'),
    consoleWindow: document.getElementById('consoleWindow'),
    header: document.querySelector('header'),
    title:  document.createElement('h1'),
    encounter: document.getElementById('encounter'),

    start: function (){
        localStorage.setItem('gameInProgress','true');
        this.player = JSON.parse(localStorage.getItem('settings'));

        if (this.player.choices.length === 0){
            this.story.innerHTML = `Welcome, ${this.player.name}! ` + script[0].story; // eslint-disable-line
            choices.a.innerText = script[0].aButton; // eslint-disable-line
            choices.b.innerText = script[0].bButton; // eslint-disable-line
        } else {
            this.level = this.player.choices.length;
            this.reload();
        }

        this.avatar.className = this.player.character;
        this.title.textContent = 'Chapter 1';
        this.title.className = 'chapterTitles';
        this.header.appendChild(this.title);
    },

    reload: function (){
        localStorage.setItem('settings', JSON.stringify(this.player));

        const newLevel = this.player.choices.concat(this.level);
        console.log(newLevel);

        function isMatch(array){
            return array.name === newLevel;
        }

        const choice = script.find(isMatch); // eslint-disable-line

        this.story.innerHTML = choice.story;
        choices.a.innerText = choice.aButton;
        choices.b.innerText = choice.bButton;

        this.consoleWindow.className = choice.bg;

        if (this.encounter.className) {
            const current = this.encounter.className;
            this.encounter.classList.remove(current);
        } 
        if (choice.encounter){
            this.encounter.className = choice.encounter;
        }

        this.title.textContent = 'Chapter ' + (this.level + 1);
        this.title.className = 'chapterTitles';
        this.header.appendChild(this.title);
    },

    endCheck: function() {
        if (game.level >= 3){
            if (localStorage.getItem('results')){
                const resultsArray = JSON.parse(localStorage.getItem('results'));
                resultsArray.push(game.player);
                localStorage.setItem('results', JSON.stringify(resultsArray));
            } else {
                const resultsArray = [game.player];
                localStorage.setItem('results', JSON.stringify(resultsArray));
            }
            localStorage.removeItem('settings');
            localStorage.setItem('gameInProgress', 'false');
            window.location.href = 'results.html';
        } else {
            secs = 30;
            countdown.style.width = '100%';

            timer();
            game.reload(); 
        }
    },
};

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

const gameInProgress = localStorage.getItem('gameInProgress');
if (gameInProgress === 'false') window.location.href = 'index.html';
game.start();