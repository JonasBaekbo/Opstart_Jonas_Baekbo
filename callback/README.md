# Asynkronitet - Forklaring af afsynkronitet
```javascript
function getData(dataURI, callback) {
    console.log('første linje i getData funktionen...');
    var timer = setTimeout(function () {
       console.log('Her der der gået 2 sekunder.');
       var dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
       callback(dataArray);
    }, 2000);
 }
 
 function outputData(myData) {
    console.log('Dette er funktionen der udskriver det hentede data: ' + myData);
 }
 
 getData('http://www.domain.com/something', outputData);
 console.log("Denne kode linje burde være den sidste.");
```
I ovenstående kode er der følgende elementer:

1. Først er der funktionnen getData som har 2 parametre (DataURI, som får noget fra funktionskaldet og callback, som er et funktionsnavn som fortæller at funktionen skal gøre noget senere - efter at funktionen har gjort noget)
```javascript
function getData(dataURI, callback)
```
* Inde i funktionen getData er der følgende:

1. En console.log der udskriver noget i konsollen.
```javascript
console.log('første linje i getData funktionen...');
```
2. En variabel _timer_ som har en setTimeout funktion som værdi. 
```javascript
var timer = setTimeout(function () {
       console.log('Her der der gået 2 sekunder.');
       var dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
       callback(dataArray);
    }, 2000);
```

>* I setTimeout funktionen er der 2 parametre. Den første parameter er en anonym funktion som kører noget. Den anden parameter er et tal i millisekunder, da setTimeout skal have af vide hvor lang tid den skal "holde pause"(i dette tilfælde gør den det i 2 sekunder, da 2000 er 2 sekunder i millisekunder).

>* I den anonyme funktion er der følgende:
>1. En _console.log_ der skriver noget i konsollen

```javascript
console.log('Her der der gået 2 sekunder.');
```
>2. En variabel dataArray(som er datatypen array) med nogle tal.
```javascript
var dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
```
>3. Et callback funktionskald, som sender værdien af dataArray videre til funktionen getData(Det vil sige at dette sker efter at selve getData-koden er kørt igennem).
 ```javascript
callback(dataArray);
```

2.  Bagefter getData funktionen kommer der en funktion outputData med en parameter(myData). Inde i funktionen er der en console log som udskriver noget i konsollen.

```javascript
 function outputData(myData) {
    console.log('Dette er funktionen der udskriver det hentede data: ' + myData);
 }
```
3. Bagefter outputData, kommer der et funktionskald der kalder getData funktionen med 2 parametre. et parameter med et URL og et med et andet funktionskald til outputData.
```javascript
 getData('http://www.domain.com/something', outputData);
```
4. Til sidst kommer der en console.log som udskriver følgende linje i terminalen:
```javascript
 console.log("Denne kode linje burde være den sidste.");
```