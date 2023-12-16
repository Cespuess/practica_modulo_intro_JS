function createMatch(player1, player2) {
    this.players = [
        {
            id: 1,
            name: player1,
            currentRoundScore: 0,
            roundScore: 0,
            gameScore: 0,
            win: false
        },
        {
            id: 2,
            name: player2,
            currentRoundScore: 0,
            roundScore: 0,
            gameScore: 0,
            win: false
        }
    ];

    this.deuce = false;
    this.advantage;

    this.pointWonBy = (idPlayer) => {
        if (!this.deuce) {
            if (this.players[idPlayer - 1].currentRoundScore === 30) {
                this.players[idPlayer - 1].currentRoundScore += 10;
            } else {
                this.players[idPlayer -1].currentRoundScore += 15;
            }
            if (this.players[idPlayer - 1].currentRoundScore > 40) { // cuando un jugador ha ganado la ronda sin llegar a deuce, ponemos el currentRoundScore a cero y le sumamos la ronda al ganador
                this.players[idPlayer - 1].roundScore +=1;
                this.players.forEach((player => player.currentRoundScore = 0));
            }
            else if (this.players.reduce((acum, player) => acum + player.currentRoundScore, 0) === 80) { // comprobamos que los dos están a 40 para cambiar a deuce
                this.deuce = true
            }
        } else { // si la ronda está en deuce
            if (this.advantage === undefined) {
                this.advantage = idPlayer - 1;
            }
            else if (this.advantage === idPlayer -1) { // nos dice quien ha ganado la ronda después de la ventaja y reiniciamos los valores de deuce y advantage
                this.players[idPlayer - 1].roundScore +=1;
                this.players.forEach((player => player.currentRoundScore = 0));
                this.deuce = false;
                this.advantage = undefined
            } else {
                this.advantage = undefined
            }
        }
    };
    this.getCurrentRoundScore = getCurrentRoundScore();
    this.getRoundScore = getRoundScore();
    this.getMatchScore = getMatchScore();
    this.getWinner = getWinner();

}



const getCurrentRoundScore = () => {};

const getRoundScore = () => {};

const getMatchScore = () => {};

const getWinner = () => {};

// pruebas ----------------------------------------------------------------------------------------
const game = new createMatch("Alberto", "David");
console.log(game.players[0]);
console.log(game.players[1]);
game.pointWonBy(2);
game.pointWonBy(2);
game.pointWonBy(2);
game.pointWonBy(1);









console.log(game.players[0]);
console.log(game.players[1]);
console.log(game.deuce);
console.log(game.advantage);







