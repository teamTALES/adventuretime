let secs = 30;
let startLevel = 0;

// On reload this timer delays the ticker function to give users time to read the story text.
function timer() {
    startLevel = game.level; // eslint-disable-line
    console.log(startLevel);
    setTimeout(ticker, 30000);
};
timer();
// Counts down the amount of time set and shrinks the counter bar.
function ticker() {
    secs--;
    if (secs > 0) {
        counterBar();
        setTimeout(ticker, 1000);
    } else if (secs === 0) {
        randomSelection();
    }
};
ticker();
// Randomly selects the new page if user does not click on a choice before the counter runs out.
function randomSelection() {
    const currentLevel = game.level; // eslint-disable-line
    if(startLevel === currentLevel) {
        const random = ['A', 'B'];
        const randomNumber = Math.floor(Math.random() * random.length);
        game.player.choices += random[randomNumber]; // eslint-disable-line
        game.level++; // eslint-disable-line
        game.endCheck(); // eslint-disable-line
        const countdown = document.getElementById('count100');
        countdown.style.width = '100%';
        secs = 30;
        timer();
    }
}

function counterBar() {
    const countdown = document.getElementById('count100');

    if(secs === 20) {
        countdown.style.width = '70%';
    } else if (secs === 10) {
        countdown.style.width = '40%';
    } else if  (secs === 0) {
        countdown.style.width = '0';
    }
}