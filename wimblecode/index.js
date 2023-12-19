import { createMatch } from "./utils.js";

// Simulación ----------------------------------------------------------------------------------------
// Creación del partido
const game = new createMatch('Alberto C', 'David J');
// Empiezan los puntos
game.pointWonBy(1);
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 15-15 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-15 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 30-30 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-30 David J

// Deuce
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); 

// Ventaja Alberto C
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); 

// Deuce
game.pointWonBy(2);
console.log(game.getCurrentRoundScore());

// Ventaja David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); 

// David J gana la primera ronda
game.pointWonBy(2);
console.log(game.getRoundScore()); // Alberto C 0 David J 1

// David J gana la ronda
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 0 David J 2

// Alberto C gana la ronda
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
console.log(game.getRoundScore()); // Alberto C 1 David J 2

// David J gana la ronda
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 1 David J 3

// Alberto C gana la ronda
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
console.log(game.getRoundScore()); // Alberto C 2 David J 3

// Alberto C gana la ronda
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
console.log(game.getRoundScore()); // Alberto C 3 David J 3

// David J gana la ronda
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 3 David J 4

// Alberto C gana la ronda
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
console.log(game.getRoundScore()); // Alberto C 4 David J 4

// David J gana la ronda
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 4 David J 5

// Alberto C gana la ronda
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
console.log(game.getRoundScore()); // Alberto C 5 David J 5

// David J gana la ronda
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 5 David J 6

// Alberto C gana la ronda
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
game.pointWonBy(1); 
console.log(game.getRoundScore()); // Alberto C 6 David J 6

// David J gana la ronda y el game
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 0 David J 0, porque la ronda ya ha acabado y se ha sumado un game a David J

console.log(game.getMatchScore()) // Alberto C 0 David J 1

console.log(game.getWinner()); // devuelve null porque aún no hay ganador

// David J gana todos los puntos hasta ganar el segundo game y el partido
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 0 David J 1

game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 0 David J 2

game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 0 David J 3

game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
game.pointWonBy(2); 
console.log(game.getRoundScore()); // Alberto C 0 David J 4

console.log(game.getMatchScore()); // Alberto C 0 David J 2

console.log(game.getWinner()); // David J ha ganado el partido.

// Una vez hay un ganador no se pueden sumar más puntos a ningún jugador
game.pointWonBy(2); 

