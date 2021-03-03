// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

var primo = parseInt(prompt("inserisci un numero"));
var secondo = parseInt(prompt("inserisci un numero")); //meglio mettendo il parseInt, aggiunto dopo la correzione

var result = document.getElementById('result');

if (primo > secondo) {
  result.innerHTML = "il numero piu grande è il primo: " + primo;
} else if (primo < secondo) {
  result.innerHTML = "il numero piu grande è il secondo: " + secondo;
} else {
  result.innerHTML = "il primo e il secondo sono uguali, entrambi " + secondo;
}
