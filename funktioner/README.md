# Forklaring af funktioner

Funktioner er en måde på hvordan man kan samle flere instruktioner/koder så det hele kan køre på samme tid. Dette gør man ved at man laver en funktion, og derefter kalder den funktion med et funktionskald.
```javascript
function hello() {
    console.log("hello...");
}
hello(); // Udskriver "hello..." i konsollen
```
## Hoisting
Begrebet hoisting betyder at en funktion kan kaldes, før selve funktionen er erklæret. Det vil sige at man kan skrive selve funktionskaldet(med argument), før at funktionen er skrevet. Du kan også kalde funktionen efter funktionen er skrevet, også selvom du har kaldet funktionen førhen.
```javascript
udskriv('et navn');  // Udskriver "Udskriver et Navn"

function udskriv(tekst) { // tekst er et argument
    console.log('Udskriver', tekst);
}

sayHello('noget andet'); // Udskriver "Udskriver noget andet"
```
## Anonyme funktioner

Anonyme funktioner er som navnet antyder, funktioner som ikke har et navn(derfor anonym). Man kan lave en anonym funktion ved at oprette en variabel hvor at du lægger funktionen ind i(se eksempel neden under).
```javascript
var anonymfunk = function (value) {
    console.log(value); // Udskriver "Dette er en anonym funktion"
}

anonymfunk('Dette er en anonym funktion');
```
## Flere funktioner i samme funktion
