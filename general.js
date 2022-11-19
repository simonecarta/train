// Generazione biglietto //
var bottoneGenera = document.getElementById('bottoneGenera');

bottoneGenera = addEventListener('click', 
    function() {
        // ottieni valori input utente

        var nome = document.getElementById('nome').value;
        console.log(nome);

        var kmDaPercorrere = document.getElementById('km').value;
        console.log(kmDaPercorrere);

        var fasciaEta = document.getElementById('fascia-eta').value;
        console.log(fasciaEta);
    }
)
// Calcolo biglietto //

var prezzoKm = 0.21;
var costoBiglietto = prezzoKm * kmDaPercorrere; 
var offerta = 'Biglietto standard'

// Calcolo biglietto con offerta

if (fasciaEta == 'minorenne') {
    costoBiglietto -= costoBiglietto * 0.2;
    offerta = 'Sconto minorenne'; 

}  else if (fasciaEta == 'over65') {
    costoBiglietto -= costoBiglietto * 0.4;
    offerta = 'Sconto Over 65'; 
}

// Controllo dei decimali
costoBiglietto = costoBiglietto.toFixed(2);

//Numero random per la carrozza da uno a dieci

var numCarrozza = Math.floor( Math.random() * 9) + 1;

// numero random per il codice di cambio prenotazione

var numeroCP = Math.floor( Math.random() * (100000 - 900000)) + 90000;

// Inserimento valori nella pagina

document.getElementById('nome-passeggero').innerHTML = nome; 
document.getElementById('offerta-applicata').innerHTML = offerta;
document.getElementById('carrozza').innerHTML = numCarrozza;
document.getElementById('costo').innerHTML = costoBiglietto;


console.log(kmDaPercorrere);