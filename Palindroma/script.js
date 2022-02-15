//Prova
console.log('Pali e dispari.');

//Chiedere la parola all'user
const word = prompt('Inserisci una parola.');
console.log(word);

//Dividere la parola, invertire la parola, riunire la parola
invertWord(word);

function invertWord( word ){

    const chars = word.split('');
    //console.log(chars);

    const rejoin = chars.reverse().join('');
    //console.log(rejoin);

    return rejoin;
}

//Calcolare se la parola è palindroma
function isPalindroma( word ) {

    const inverted = invertWord(word); 

    if (word === inverted){

        return true;

    }   else{

        return false;
        //return word === inverted;
    }
}

//Comunicare l'esito del calcolo
if(isPalindroma(word)){
    //console.log('La parola inserita è palindroma.')
    let answer = document.querySelector('.view');
    answer.innerHTML = 'La parola inserita è palindroma.';

} else{
    //console.log('La parola inserita non è palindroma.')
    let answer = document.querySelector('.view');
    answer.innerHTML = 'La parola inserita non è palindroma.';
}