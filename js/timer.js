let minutes = 1;
let startLevel = 0;

function timer() {
    startLevel = game.level;
    console.log(startLevel);
    setTimeout(timer2, 30000);
};
timer();
function timer2() {
    let secs = 30;
    function ticker() {
        secs--;
        if (secs > 0) {
            setTimeout(ticker, 1000);
        } else if (secs === 0 && minutes === 0) {
            randomSelection();
        } else if (secs === 0) {
            minutes--;
            timer2(minutes);
        }
    }
    ticker();
}
function randomSelection() {
    const currentLevel = game.level;
    if(startLevel === currentLevel) {
        const random = ['A', 'B'];
        const randomNumber = Math.floor(Math.random() * random.length);
        game.player.choices += random[randomNumber];
        game.level++;
        game.endCheck();
        timer();

    }
}