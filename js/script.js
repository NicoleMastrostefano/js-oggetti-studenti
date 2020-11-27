// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;

var studente = {
  nome: "Nicole",
  cognome:"Mastrostefano",
  età:35
};

console.log(studente);

for (var key in studente){
    console.log(key + ": " + studente[key])
};

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;

var studenti = [
    studente1 = {
      nome: "Ludovica",
      cognome: "Mariani",
    },
    studente2 = {
      nome: "Diego",
      cognome: "Mioli"
    },
    studente3 = {
      nome: "Giovanna",
      cognome: "Di Renzo"
    }
];
console.log(studenti);

for (var i = 0; i < studenti.length; i++) {
    for (var key in studenti[i]) {
    console.log(key + ": " + studenti[i][key])
    }
};

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

for (var i = 0; i < 1; i++) {
    studente.nome = prompt('Inserisci il tuo nome');
    studente.cognome = prompt('Inseriwsci il tuo cognome');
    studente.età = prompt('Inserisci la tua età');
};
console.log(studente);
