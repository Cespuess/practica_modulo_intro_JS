function createMatch(player1, player2) {
    this.players = [
        {
            id: 1,
            name: player1,
            currentRoundScore: 2,
            roundScore: 0,
            gameScore: 0,
        },
        {
            id: 2,
            name: player2,
            currentRoundScore: 3,
            roundScore: 0,
            gameScore: 0,
        }
    ];

    this.points = [0, 15, 30, 40]
    this.deuce = false;
    this.advantage;
    this.getWinner;

    this.pointWonBy = idPlayer => {
        if (!this.deuce) {
            this.players[idPlayer - 1].currentRoundScore += 1;

            if (this.players[idPlayer - 1].currentRoundScore === 4) { // cuando un jugador ha ganado la ronda sin llegar a deuce, ponemos el currentRoundScore a cero y le sumamos la ronda al ganador
                this.players[idPlayer - 1].roundScore +=1;
                this.players.forEach(player => player.currentRoundScore = 0);
            }
            else if (this.players[0].currentRoundScore === 3 && this.players[1].currentRoundScore === 3) { // comprobamos que los dos están a 40 para cambiar a deuce
                this.deuce = true;
            }
        } else { // si la ronda está en deuce
            if (this.advantage === undefined) {
                this.advantage = idPlayer - 1;
            }
            else if (this.advantage === idPlayer - 1) { // nos dice quien ha ganado la ronda después de la ventaja y reiniciamos los valores de deuce y advantage
                this.players[idPlayer - 1].roundScore +=1;
                this.players.forEach(player => player.currentRoundScore = 0);
                this.deuce = false;
                this.advantage = undefined;
            } else {
                this.advantage = undefined;
            }
        }
        // controlamos el resultado de rondas para contabilizar los games
        if (this.players[idPlayer - 1].roundScore === 7) { 
            this.players[idPlayer - 1].gameScore += 1;
            this.players.forEach(player => player.roundScore = 0);
        } else if (this.players[idPlayer - 1].roundScore >= 4 && Math.abs(this.players[0].roundScore - this.players[1].roundScore) >= 2) {
            this.players[idPlayer - 1].gameScore += 1;
            this.players.forEach(player => player.roundScore = 0);
        }
        // si un jugador ha ganado dos games se proclama campeón
        if (this.players[idPlayer - 1].gameScore === 2) {
            this.winner = idPlayer - 1;
        }

    };
    this.getCurrentRoundScore = () => { // devuelve el resultado de la ronda
        if (this.deuce && typeof this.advantage !== "number") return "Deuce";
        else if (this.deuce) return `Advantage ${this.players[this.advantage].name}`;
        else return `${this.players[0].name} ${this.points[this.players[0].currentRoundScore]} - ${this.points[this.players[1].currentRoundScore]} ${this.players[1].name}`
    };
    this.getRoundScore = getRoundScore();
    this.getMatchScore = getMatchScore();
    this.getWinner = getWinner();

}




const getRoundScore = () => {};

const getMatchScore = () => {};

const getWinner = () => {};

// pruebas ----------------------------------------------------------------------------------------
const game = new createMatch("Alberto C", "David J");
console.log(game.players[0]);
console.log(game.players[1]);

game.pointWonBy(1);










console.log(game.players[0]);
console.log(game.players[1]);
console.log(game.deuce);
console.log(game.advantage);
console.log(game.winner);

console.log(game.getCurrentRoundScore())








