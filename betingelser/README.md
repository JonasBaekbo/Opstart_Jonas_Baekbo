# Hvordan fungerer en if-else sætning?
En if-else sætning kigger på 2 ting.
* Er en betingelse opfyldt?
* Hvad skal jeg gøre hvis betingelsen er/ikke er opfyldt?
```javascript
if (noget) {
    console.log('Gør noget!');
}
else{
    console.log('Gør noget andet!')
}
```
* Først spørger en if-sætning om noget er opfyldt.
```javascript
if (noget) {
...}
```
* Hvis det er opfyldt, udfører den det som der står inde i sætningen.
```javascript
if (noget) {
    console.log('Gør noget!'); // Dette udføres
}
```
* Hvis ikke det er opfyldt, går den videre og tager det fra else i stedet for og udfører det i stedet for.
```javascript
if (noget) { // Ikke sand?
    console.log('Gør noget!');
}
else{
    console.log('Gør noget andet!') // Dette udføres
}
```