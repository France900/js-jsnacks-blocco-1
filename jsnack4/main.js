//In un array sono contenuti i nomi degli invitati alla festa del
//grande Gatsby, chiedi all’utente il suo nome e comunicagli se
//può partecipare o no alla festa.

// chiedo nome
var promptInput = prompt("salve, digiti il suo nome e prego faccia attenzione alle MAIUSCOLE")

//creo array
var archivio = ["", "Marco", "Giorgio", "Claudio", "Andrea", "Francesco", "Topolino", "Pippo", "Pluto", "Paperino"];

//controllo se è nel database
var soldatino = false;
//scorro array
for (var i = 0; i < archivio.length; i++) {
   if (archivio[i] == promptInput) {
    soldatino = true
  }
}

var result = document.getElementById('result');

if (soldatino) {
  result.innerHTML = "Il suo nome è sulla lista, prego entri.";
} else {
  result.innerHTML = "Chi è lei? non può partecipare a questa festa";
}
