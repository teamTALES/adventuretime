
if (localStorage.getItem('results')) {
    const resultsArray = JSON.parse(localStorage.getItem('results'));

    for (let i = 0; i < resultsArray.length; i++){
        const previous = document.getElementById('previous');

        const card = document.createElement('div');
        card.className = 'oldResult';
        // card.appendChild('img');
        const charName = document.createElement('h3');
        const summary = document.createElement('h4');
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

        charName.textContent = resultsArray[i].name + endID;

        avaBox.appendChild(avatar);
        card.appendChild(avaBox);
        card.appendChild(charName);
        card.appendChild(summary);
        previous.appendChild(card);
    }
} else {
    const leaderboardH1 = document.getElementById('leaderH1');
    leaderboardH1.textContent = '';
}