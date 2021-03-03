//Stampa le potenze di 2 fino a 1000.




var potenza = []

for (var i = 0; i < 11; i++) {
  potenza.push(2**i)
}

console.log(potenza);
document.getElementById('result').innerHTML = potenza

// si poteva fare con un if per fermare la potenza del due ragiunto il risultato di 1000
