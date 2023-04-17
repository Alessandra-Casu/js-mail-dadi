/*

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/




const myArr = [ 'ale.casu@live.it', 'maurizio@live.it', 'enrico@live.it', 'genziana@tiscali.it', 'madavvero@live.it' ];

console.log(myArr);

const newMail = prompt('Inserisci la tua mail: ');
let hoTrovatoMail = 0;

for ( let i=0; i<=myArr.length; i++)
{
    if( newMail == myArr[i])
    {
        hoTrovatoMail = 1;
    }
}

if( hoTrovatoMail == 0){
    console.log('Email non autorizzata');
}
else{
    console.log('Email autorizzata');
}
   




 
