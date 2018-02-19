const game = {
    player: '',
    story: document.getElementById('story'),
    level: 0,

    start: function (){
        this.player = JSON.parse(localStorage.getItem('settings'));

        if (this.player.choices.length === 0){
            this.story.textContent = `Welcome, ${this.player.name}!`;
        } else {
            //load current position
        }
    },

    reload: function (){
        //delete previous text
        // switch (this.player.choices[this.player.choices.length - 1]){
        // case 'A':
        //     console.log('You picked A!');
        //     break;

        // case 'B':
        //     console.log('You picked B!');
        //     break;

        // default:
        //     console.log('error!');
        //     break;
        // }
        
        let newLevel = this.player.choices[this.player.choices.length - 1];
        newLevel = newLevel.concat(this.level);
        console.log(newLevel);

    }
};

const choices = document.getElementById('choices');

choices.a.addEventListener('click', function (){
    game.player.choices.push('A');
    game.level ++;
    game.reload();
});

choices.b.addEventListener('click', function (){
    game.player.choices.push('B');
    game.level ++;
    game.reload();
});

