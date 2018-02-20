'use strict';

const introForm = document.getElementById('character');
const resume = document.getElementById('resume');

const player = {
    name: '',
    character: '',
    choices: '',
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
    const c3 = document.getElementById('c3');

    if (c1.checked){
        player.character = 'sj';
    } else if (c2.checked){
        player.character = 'andrew';
    } else if (c3.checked){
        player.character = 'erdem';
    } else {
        alert('Please pick a character!');
    }

    player.name = this['character'].value;

    if (player.character){
        localStorage.setItem('settings', JSON.stringify(player));
        window.location.href = 'game.html';
    }
});

resume.addEventListener('click', function(){
    console.log('Resumed!');
    window.location.href = 'game.html';
});



