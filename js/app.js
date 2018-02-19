'use strict';


const Player = {
    name: '',
    character: 0,
    choices: [],
};


const introForm = document.getElementById('character');
console.log(introForm);
introForm.addEventListener('submit', function(){
    event.preventDefault();

    Player.name = this['character'].value;
    console.log(Player.name);

});


const Game = {
    onLoad: function (){
        //check for localStorage

    }
};



