window.setTimeout(timer2, 1000);

function timer2() {
    let secs = 60;
    let mins = 2;
    function ticker() {
        secs--;
        if (secs > 0) {
            setTimeout(ticker, 1000);
        } else if (secs === 0) {
            timer2(mins - 1);
        }
    }
    if (secs === 0 && mins === 0) {
        randomSelection();
    }
}
function randomSelection() {
    if(game.level++) {
        timer();
    } else {
        const random = ['A', 'B'];
        const randomNumber = Math.floor(Math.random() * random.length);
        game.player.choices += random[randomNumber];
        game.level++;
        window.reload();
        console.log(timer2);
    }
}

