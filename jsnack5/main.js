//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

var numbers = []

for (var i = 0; i < 6; i++) {
  var inserito = parseInt(prompt("inserisci un numero"))
  if (inserito%2) {
    numbers.push(inserito);
  }
}

console.log(numbers);

document.getElementById("result").innerHTML = numbers;
