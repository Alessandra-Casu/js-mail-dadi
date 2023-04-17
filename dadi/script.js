  

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */
let giocatore = Math.floor(Math.random() *  (6) +1);
let computer = Math.floor(Math.random() *  (6) +1) ;

if (giocatore > computer){
 
    console.log('Il vincitore sei tu!')
}
else if (giocatore < computer){
    console.log('Ho vinto io!')
}
else{
    console.log('Siamo pari bello!')
}
