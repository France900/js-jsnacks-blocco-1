//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

var primo = prompt("inserisci una paorla").trim();
var secondo = prompt("inserisci una altra parola").trim(); // trim aggiunto alla correzione

var result = document.getElementById('result');

if (primo.length > secondo.length) {
  result.innerHTML = secondo + " " + primo;
} else if (primo.length < secondo.length) {
  result.innerHTML = primo + " " + secondo;
} else {
  result.innerHTML = primo + "<br>" + secondo;
}
