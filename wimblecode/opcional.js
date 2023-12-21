import { createMatch } from "./utils.js";

let participantes = ["Alberto C", "David J", "Javier M", "Edu Aguilar"];
let winner1;
let winner2;
let semifinal = 1;

// definimos las semifinales aleatoriamente
while (!winner1 || !winner2) {
    const random1 = Math.floor(Math.random() * participantes.length);
    const player1 = participantes.splice(random1, 1)[0];
    const random2 = Math.floor(Math.random() * participantes.length);
    const player2 = participantes.splice(random2, 1)[0];
    const game = new createMatch(player1, player2);
    while (!game.winner) {
        const randomPoint = Math.floor((Math.random() * 2)) + 1;
        game.pointWonBy(randomPoint);
    }
    console.log(game.getWinner());
    (semifinal === 1 ? winner1 = game.players[game.winner - 1].name : winner2 = game.players[game.winner - 1].name);
    semifinal++
}