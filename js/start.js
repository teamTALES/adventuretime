'use strict';

localStorage.setItem('gameInProgress', 'false');

const introForm = document.getElementById('character');
const resume = document.getElementById('resume');
const picks = document.querySelectorAll('.pick');

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
    picks.forEach(function(node){
        node.classList.remove('active');
    });
    event.target.classList.add('active');
    console.log(player.character);
});

introForm.addEventListener('submit', function(){
    event.preventDefault();

    player.name = this['character'].value;

    if (player.character === '' || player.character === 'chooseAvatar'){
        document.getElementById('error').textContent = 'Please select a character!';
    } else {
        localStorage.setItem('settings', JSON.stringify(player));
        localStorage.setItem('gameInProgress', 'true');
        window.location.href = 'game.html';
    }
});

resume.addEventListener('click', function(){
    localStorage.setItem('gameInProgress', 'true');
    window.location.href = 'game.html';
});



