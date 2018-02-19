'use strict';


const Player = {
    name: '',
    character: 0,
    choices: [],
};


const introForm = document.getElementById('character');
const character1 = document.getElementById('character1');
const character2 = document.getElementById('character2');

character1.addEventListener('click', function(){
    Player.character = 1;
    character1.setAttribute('style', 'color: white;');
    character2.setAttribute('style', 'color: black;');
});

character2.addEventListener('click', function(){
    Player.character = 2;
    character2.setAttribute('style', 'color: white;');
    character1.setAttribute('style', 'color: black;');
});


console.log(introForm);
introForm.addEventListener('submit', function(){
    event.preventDefault();

    Player.name = this['character'].value;
    console.log(Player.name);
    console.log(Player.character);
    window.location.href = 'game.html';

});



const Game = {
    onLoad: function (){
        //check for localStorage

    }
};



