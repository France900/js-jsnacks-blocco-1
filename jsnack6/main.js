//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente.


// l'utente da un numero
var input = parseInt(prompt("inserisci un numero"))

// console.log(input**3);

var cubes = []

for (var i = 0; i < input+1; i++) {
  cubes.push((i+1)**3)
}

console.log(cubes);
document.getElementById('result').innerHTML = cubes
