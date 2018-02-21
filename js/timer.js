function timer() {
    const startLevel = game.level;
    setTimeout(timer2, 60000);
};
function timer2(minutes) {
    let secs = 60;
    let mins = minutes;
    function ticker() {
        secs--;
        if (secs > 0) {
            setTimeout(ticker, 1000);
        } else if (secs === 0 && mins === 0) {
            randomSelection();
        } else if (secs === 0) {
            mins--;
            timer2(mins);
        }
    }    
    ticker();
}
timer2(1);
function randomSelection() {
    const currentLevel = game.level;
    if(startLevel === currentLevel) {
        const random = ['A', 'B'];
        const randomNumber = Math.floor(Math.random()*random.length);
        game.player.choices += random[randomNumber];
        game.level++;
        game.endCheck();
        timer();

    }
}