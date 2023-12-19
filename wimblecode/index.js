import { createMatch } from "./utils.js";

// pruebas ----------------------------------------------------------------------------------------
// Ejemplo de software
const game = new createMatch('Alberto C', 'David J');
// Cuando puntua el 1º judagor se registra de este modo
game.pointWonBy(1);
// Cuando puntua el 2º judagor se registra de este modo
game.pointWonBy(2);
// Quiero poder ver como va la ronda actual en todo momento
console.log(game.getCurrentRoundScore()); // Alberto C 15-15 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-15 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 30-30 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-30 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Deuce
// jugador 1 toma ventaja
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Advantage Alberto C
// jugador 2 empata
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Deuce
// jugador 2 toma ventaja
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Advantage David J
// Con este punto jugador 2 gana la ronda
game.pointWonBy(2);
// Quiero poder ver como va la puntuación de un juego
console.log(game.getRoundScore()); // Alberto C 0 David J 1
// La primera ronda es para David le quedan 3 para ganar un juego
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
console.log(game.getRoundScore());
// David gana 2º ronda
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
console.log(game.getRoundScore());
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
console.log(game.getRoundScore());
// David gana 3º ronda
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
console.log(game.getRoundScore());
// David gana 4º ronda
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
console.log(game.getRoundScore());
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
console.log(game.getRoundScore());
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
console.log(game.getRoundScore());
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
console.log(game.getRoundScore());
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
console.log(game.getRoundScore());
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
console.log(game.getRoundScore());
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
game.pointWonBy(1); // Player 2 wins the game
console.log(game.getRoundScore());
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
console.log(game.getRoundScore());

console.log(game.getMatchScore())