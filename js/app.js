'use strict';

const introForm = document.getElementById('character');
const resume = document.getElementById('resume');

const player = {
    name: '',
    character: 0,
    choices: [],
};


if (localStorage.getItem('settings')){
    resume.setAttribute('style', 'display: inline-block');
}

// add character 3
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

resume.addEventListener('click', function(){
    console.log('Resumed!');
    window.location.href = 'game.html';
});



