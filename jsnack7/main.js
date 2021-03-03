//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente.




var potenza = []

for (var i = 0; i < 1000; i++) {
  potenza.push(2**i)
}

console.log(potenza);
document.getElementById('result').innerHTML = potenza
