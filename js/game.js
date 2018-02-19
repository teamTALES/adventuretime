const game = {
    player: '',

    start: function (){
        this.player = JSON.parse(localStorage.getItem('settings'));
        console.log(this.player);
    }
};