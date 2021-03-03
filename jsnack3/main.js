//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.



// soluzione di raffa dalla correzione
var somma = 0

for (var i = 0; i < 10 ; i++) {
  var numero = parseInt(prompt("inserisci un numero"))
  somma = somma + numero
}

console.log(somma);





// soluzione che stavo trovando io
// var numbers = []
//
// for (var i = 0; i < 10; i++) {
//   numbers.push(parseInt(prompt("inserisci un numero")));
// }
// console.log(numbers);
//
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] +
// }
