export function createMatch(player1, player2) {
    this.players = [
        {
            id: 1,
            name: player1,
            currentRoundScore: 0,
            roundScore: 0,
            gameScore: 0,
        },
        {
            id: 2,
            name: player2,
            currentRoundScore: 0,
            roundScore: 0,
            gameScore: 0,
        }
    ];

    this.points = [0, 15, 30, 40]
    this.deuce = false;
    this.advantage;
    this.winner;

    this.pointWonBy = point(this); 
    this.getCurrentRoundScore = () => { // devuelve el resultado de la ronda
        if (this.deuce && typeof this.advantage !== "number") return "Deuce";
        else if (this.deuce) return `Advantage ${this.players[this.advantage].name}`;
        else return `${this.players[0].name} ${this.points[this.players[0].currentRoundScore]} - ${this.points[this.players[1].currentRoundScore]} ${this.players[1].name}`
    };
    this.getRoundScore = () => `Rounds: ${this.players[0].name} ${this.players[0].roundScore} - ${this.players[1].name} ${this.players[1].roundScore}`; // devuelve el resultado de las rondas ganadas
    this.getMatchScore = () => `Games: ${this.players[0].name} ${this.players[0].gameScore} - ${this.players[1].name} ${this.players[1].gameScore}`; // devuelve el resultado de los games ganados
    this.getWinner = () => (!this.winner ? null : `${this.players[this.winner - 1].name} ha ganado el partido.`); // devuelve el nombre del ganador, o null si aún no hay vencedor
    
}

function point(partido) {  
    return function (idPlayer) {  // suma el punto al jugador indicado
        if (!partido.winner){
            if (!partido.deuce) {
                partido.players[idPlayer - 1].currentRoundScore += 1;

                if (partido.players[idPlayer - 1].currentRoundScore === 4) { // cuando un jugador ha ganado la ronda sin llegar a deuce, ponemos el currentRoundScore a cero y le sumamos la ronda al ganador
                    partido.players[idPlayer - 1].roundScore +=1;
                    partido.players.forEach(player => player.currentRoundScore = 0);
                }
                else if (partido.players[0].currentRoundScore === 3 && partido.players[1].currentRoundScore === 3) { // comprobamos que los dos están a 40 para cambiar a deuce
                    partido.deuce = true;
                }
            } else { // si la ronda está en deuce
                if (partido.advantage === undefined) {
                    partido.advantage = idPlayer - 1;
                }
                else if (partido.advantage === idPlayer - 1) { // nos dice quien ha ganado la ronda después de la ventaja y reiniciamos los valores de deuce y advantage
                    partido.players[idPlayer - 1].roundScore +=1;
                    partido.players.forEach(player => player.currentRoundScore = 0);
                    partido.deuce = false;
                    partido.advantage = undefined;
                } else {
                    partido.advantage = undefined;
                }
            }
            // controlamos el resultado de rondas para contabilizar los games
            if (partido.players[idPlayer - 1].roundScore === 7) { 
                partido.players[idPlayer - 1].gameScore += 1;
                partido.players.forEach(player => player.roundScore = 0);
            } else if (partido.players[idPlayer - 1].roundScore >= 4 && Math.abs(partido.players[0].roundScore - partido.players[1].roundScore) >= 2) {
                partido.players[idPlayer - 1].gameScore += 1;
                partido.players.forEach(player => player.roundScore = 0);
            }
            // si un jugador ha ganado dos games se proclama campeón
            if (partido.players[idPlayer - 1].gameScore === 2) {
                partido.winner = idPlayer;
            }
        }  else {
            alert(`No se pueden jugar más rondas, ${partido.players[partido.winner - 1].name} ha ganado el partido.`)
        }
    }
}











