'use strict';


const player = {
    name: '',
    character: 0,
    choices: [],
};


const introForm = document.getElementById('character');


console.log(introForm);
introForm.addEventListener('submit', function(){
    event.preventDefault();
    const c1 = document.getElementById('c1');
    const c2 = document.getElementById('c2');

    if (c1.checked){
        player.character = 1;
    } else if (c2.checked){
        player.character = 2;
    } else {
        alert('Please pick a character!');
    }

    player.name = this['character'].value;

    if (player.character > 0){
        localStorage.setItem('settings', JSON.stringify(player));
        window.location.href = 'game.html';
    }
});

const game = {
    player: '',

    start: function (){
        this.player = JSON.parse(localStorage.getItem('settings'));
        console.log(this.player);

    }
};



