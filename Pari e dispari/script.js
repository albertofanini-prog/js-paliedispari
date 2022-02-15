//Prova
//console.log('Prova')

//Nominare le variabili
const choice = prompt('Scegli pari o dispari');
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
const cpuNumber = getRandomIntInclusive(1,5);

//Generare numeri random da 1 a 5
function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min +1) + min);
}
console.log( getRandomIntInclusive(1,5) );

//Calcolare se è pari o dispari
const isOdd = function(numero){

    if(numero % 2 === 0);
    return true;

    return false;

}

//isOdd(3)
//console.log (isOdd)
//console.log (choice, userNumber, cpuNumber)

const risultato = userNumber + cpuNumber

if (choice === 'pari' && isOdd (risultato)) || (choice === 'dispari' && !isOdd(risultato))