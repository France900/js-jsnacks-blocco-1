//Chiedi un numero di 4 cifre all’utente e
//calcola la somma di tutte le cifre che compongono il numero.


// l'utente da un numero
var input = prompt("inserisci un numero a 4 cifre");
console.log(input);

var result = parseInt(input[0]) + parseInt(input[1]) + parseInt(input[2]) + parseInt(input[3]);
// console.log(input[1]);

document.getElementById("result").innerHTML = result

// si poteva fare con un ciclo for che desse flessbilita al numero di cifre inserite
