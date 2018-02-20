const game = {
    player: '',
    story: document.getElementById('story'),
    level: 0,

    start: function (){
        this.player = JSON.parse(localStorage.getItem('settings'));

        if (this.player.choices.length === 0){
            this.story.textContent = `Welcome, ${this.player.name}!`;
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

        const choice = story.find(isMatch); // eslint-disable-line
        this.story.textContent = choice.story;
        this.player.abChoices.push(newLevel);
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
        } else {
            game.reload();
        }
    },
};

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


// choices.a.innerText = 'text text'

game.start();