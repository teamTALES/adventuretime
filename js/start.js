'use strict';

localStorage.setItem('gameInProgress', 'false');

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

const chooseAvatar = document.getElementById('chooseAvatar');
chooseAvatar.addEventListener('click', function(){
    player.character = event.target.id;
    console.log(player.character);
});

introForm.addEventListener('submit', function(){
    event.preventDefault();

    player.name = this['character'].value;

    if (player.character){
        localStorage.setItem('settings', JSON.stringify(player));
        localStorage.setItem('gameInProgress', 'true');
        window.location.href = 'game.html';
    } else {
        document.getElementById('error').textContent = 'Please select a character!';
    }
});

resume.addEventListener('click', function(){
    localStorage.setItem('gameInProgress', 'true');
    window.location.href = 'game.html';
});



