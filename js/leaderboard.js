
if (localStorage.getItem('results')) {
    const resultsArray = JSON.parse(localStorage.getItem('results'));

    for (let i = 0; i < resultsArray.length; i++){
        /*
            Another place where making smaller functions would make this more readable.
        */
        const previous = document.getElementById('previous');

        const card = document.createElement('div');
        card.className = 'oldResult';
        const charName = document.createElement('h3');
        const summary = document.createElement('h4');
        const winOrLose = document.createElement('h3');
        const endID = resultsArray[i].choices.concat(resultsArray[i].choices.length);

        const avaBox = document.createElement('div');
        const avatar = document.createElement('div');

        avaBox.className = 'avaBox';
        avatar.className = resultsArray[i].character;

        function isMatch(array){
            return array.name === endID;
        }

        const result = script.find(isMatch); // eslint-disable-line
        summary.textContent = result.summary;
        charName.textContent = resultsArray[i].name;
        
        if (result.bg === 'room') {
            winOrLose.textContent = 'WINNER';
            winOrLose.className = 'win';
        } else {
            winOrLose.textContent = 'LOSER';
            winOrLose.className = 'lose';
        }

        avaBox.appendChild(avatar);
        card.appendChild(avaBox);
        card.appendChild(charName);
        card.appendChild(summary);
        card.appendChild(winOrLose);
        previous.appendChild(card);
    }
} else {
    const leaderboardH1 = document.getElementById('leaderH1');
    leaderboardH1.textContent = '';
    leaderboardH1.setAttribute('class', 'nogames');
}