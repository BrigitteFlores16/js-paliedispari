//# TRACCIA

//*Palidroma
//*Chiedere all’utente di inserire una parola
//*Creare una funzione per capire se la parola inserita è palindroma
//*Pari e Dispari
//*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//*Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//*Sommiamo i due numeri
//*Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//*Dichiariamo chi ha vinto.
 

 //# procedimento

//*Chiedere all’utente di inserire una parola
let parolautente=prompt('inserisce una parola per verificare se è palindroma:');
let parolainversa = [];
for(let i = parolautente.length; i >= 0; i--)
{
    parolainversa.push(parolautente[i]);
}
parolainversa = parolainversa.join('');
console.log("parola originale: " + parolautente + " parola inversa: " + parolainversa)
if(parolainversa == parolautente)
{
    console.log("la parola è palindroma");
}
else
{
    console.log("la parola non è palindroma");
}


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }  
// se un numero è pari o dispari
function isPari(numero) {
    return numero % 2 == 0;
}
function gioco() {
    let scelta = prompt("scegli se pari o dispari");
    while (scelta != "dispari" && scelta != "pari")
    {
        console.log(scelta);
        scelta = prompt("devi scrivere pari o dispari");
    }
    
    let numeroutente = prompt("inserisci il numero che vuoi da 1 a 5");
    let numerorandom = getRandomIntInclusive(1,5);
    while (isNaN(numeroutente) || parseInt(numeroutente) < 1 || parseInt(numeroutente) > 5)
        {
            numeroutente = prompt("inserisci un numero valido da 1 a 5");
        } 
    numeroutente = parseInt(numeroutente);
    let sommanumeri = numerorandom + numeroutente;
    let ispari = isPari(sommanumeri);
    let messaggio;
    if(ispari == true)
    {
        messaggio = "la somma dei numeri è pari: " + sommanumeri 
        if(scelta == "pari")
        {
            messaggio += " hai vinto!";
        }
        else
        {
            messaggio += " ha vinto il computer";
        }
    }
    else
    {
        messaggio = "la somma dei numeri è dispari: " + sommanumeri 
        if(scelta == "dispari")
        {
            messaggio += " hai vinto!";
        }
        else
        {
            messaggio += " ha vinto il computer";
        }
    }
    alert(messaggio);
}

gioco();
