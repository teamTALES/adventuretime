'use strict';

const choices = document.getElementById('choices');
const countdown = document.getElementById('count100');

choices.a.addEventListener('click', function (){
    game.player.choices += 'A';
    game.level++;

    if (game.cancelTimeout){
        clearTimeout(game.cancelTimeout);
    }

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
    countdown: document.getElementById('count100'),
    seconds: 60,

    start: function (){
        localStorage.setItem('gameInProgress','true');
        this.player = JSON.parse(localStorage.getItem('settings'));

        /*
            Instead of disabling all the lines, you should add
            script as a global variable to your eslintrc.json file.
        */
        if (this.player.choices.length === 0){
            this.story.innerHTML = `<p>Welcome, ${this.player.name}!</p> ` + script[0].story; // eslint-disable-line
            choices.a.innerText = script[0].aButton; // eslint-disable-line
            choices.b.innerText = script[0].bButton; // eslint-disable-line
            this.timer();
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
        /* 
            Nice! Since we don't use isMatch anywhere else, I would 
            pass it as an anonymous function instead.
        */
        const choice = script.find(isMatch); // eslint-disable-line

        /*
            The purpose of these blocks of code would be clearer if nested inside functions
            I just stared at "this.encounter.className" wondering what it was talking about
            for a few seconds before I scrolled up to figure out what it was referring to.

            If we put those if statements in a function called something like: toggleEncounter
            it would be a bit easier to grep what was happening in this reload method.

            Could also have a method called setText, that updates all the text.
        */
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
        this.timer();
    },

    endCheck: function() {
        /*
            Ooh! This is a fun pattern to use when we have an if else structured like the one below.

            Instead of checking if game level is more than 3 and having our game.reload() in the else,
            we can check if the game level isn't more than three and return.
            
            Like so:

            if (game.level < 3) { 
                game.reload();
                return;
            }

            Then have all the code currently nested in our if statement, afterwards.
        */



        if (game.level >= 3){
            if (localStorage.getItem('results')) {
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
            game.reload();
        }
    },

    timer: function(){
        const startLevel = this.level;
        this.seconds = 60;
        this.countdown.style.width = '100%';

        function timer2(){
            if (game.seconds > 0){
                game.cancelTimeout = setTimeout(function(){
                    game.seconds--;
                    game.counterBar();
                    console.log(game.seconds);
                    timer2();
                }, 1000);
            } else {
                const random = ['A', 'B'];
                const randomNumber = Math.floor(Math.random() * random.length);
                game.player.choices += random[randomNumber]; 
                game.level++; 
                game.endCheck(); 
            }
        }
        timer2();
    },

    counterBar: function() {
        if (this.seconds === 20) {
            this.countdown.style.width = '70%';
        } else if (this.seconds === 10) {
            this.countdown.style.width = '40%';
        } else if  (this.seconds === 0) {
            this.countdown.style.width = '0';
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

/*
    Moving this to the top of the file would have it kick the user out a teeny bit faster!
*/
const gameInProgress = localStorage.getItem('gameInProgress');
if (gameInProgress === 'false') window.location.href = 'index.html';
game.start();