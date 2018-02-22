window.setTimeout(timer2(2), 1000);

function timer2(minutes) {
    let secs = 5;
    let mins = minutes;
    function ticker() {
        secs--;
        if (secs > 0) {
            setTimeout(ticker(), 1000);
        } else if (secs === 0 && mins === 0) {
            console.log('works!');
        } else if (secs === 0) {
            mins--;
            timer2(mins);
        }
    }
    ticker();
}
// function randomSelection() {
//     // if(game.level++) {
//     //     timer();
//     // } else {
//         console.log('works!');
//         const random = ['A', 'B'];
//         const randomNumber = Math.floor(Math.random() * random.length);
//         game.player.choices += random[randomNumber];
//         game.level++;
//         game.endCheck();
    


