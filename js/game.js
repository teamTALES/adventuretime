const choices = document.getElementById('choices');

choices.a.addEventListener('click', function (){
    game.player.choices.push('A');
    game.level ++;

    game.endCheck();

});

choices.b.addEventListener('click', function (){
    game.player.choices.push('B');
    game.level ++;

    game.endCheck();
});


const game = {
    player: '',
    story: document.getElementById('story'),
    level: 0,

    start: function (){
        this.player = JSON.parse(localStorage.getItem('settings'));

        if (this.player.choices.length === 0){
            this.story.innerHTML = `Welcome, ${this.player.name}! ` + script[0].story;
            choices.a.innerText = script[0].aButton;
            choices.b.innerText = script[0].bButton;
        } else {
            this.level = this.player.choices.length;
            this.reload();
        }
    },
 
    reload: function (){
        localStorage.setItem('settings', JSON.stringify(this.player));

        let newLevel = this.player.choices.join('');
        newLevel = newLevel.concat(this.level);
        console.log(newLevel);

        function isMatch(array){
            return array.name === newLevel;
        }

        const choice = script.find(isMatch); // eslint-disable-line

        // choices.a.innerText = 'text text'

        this.story.innerHTML = choice.story;
        choices.a.innerText = choice.aButton;
        choices.b.innerText = choice.bButton;
    },

    endCheck: function() {
        if (game.level > 2){
            console.log('You dead');
            if (localStorage.getItem('results')){
                const resultsArray = JSON.parse(localStorage.getItem('results'));
                resultsArray.push(game.player);
                localStorage.setItem('results', JSON.stringify(resultsArray));
            } else {
                const resultsArray = [game.player];
                localStorage.setItem('results', JSON.stringify(resultsArray));
            }
            localStorage.removeItem('settings');
            window.location.href = 'results.html';
        } else {
            game.reload();
        }
    },
};

game.start();