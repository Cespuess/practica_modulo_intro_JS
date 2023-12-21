import { createMatch } from "./utils.js";

let participantes = ["Alberto C", "David J", "Javier M", "Edu Aguilar"];
let winner1;
let winner2;
let semifinal = 1;
let wimblecodeWinner;

// definimos las semifinales aleatoriamente
while (!winner1 || !winner2) {
    // escojemos aleatoriamente un jugador de la lista y lo sacamos para que no se repita
    const random1 = Math.floor(Math.random() * participantes.length);
    const player1 = participantes.splice(random1, 1)[0];
    const random2 = Math.floor(Math.random() * participantes.length);
    const player2 = participantes.splice(random2, 1)[0];
    const game = new createMatch(player1, player2);
    while (!game.winner) {
        // mientras no haya un ganador se siguen sumando puntos
        const randomPoint = Math.floor((Math.random() * 2)) + 1;
        game.pointWonBy(randomPoint);
    }
    console.log(game.getWinner());
    (semifinal === 1 ? winner1 = game.players[game.winner - 1].name : winner2 = game.players[game.winner - 1].name);
    semifinal++
}

// jugamos la final!!!
const final = new createMatch(winner1, winner2);
while(!final.winner) {
    const pointFinal = Math.floor((Math.random() * 2)) + 1;
    final.pointWonBy(pointFinal);
}
wimblecodeWinner = final.players[final.winner - 1].name;
alert(`El campeón del torneo Wimblecode 2023 es: ${wimblecodeWinner}`);