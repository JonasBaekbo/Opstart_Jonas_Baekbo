# Hvordan fungerer en for-løkke?

```javascript  
for(var index = 0; index < 10; index++){
    console.log(index);
}
```

En for-løkke fungere på følgende måde:

1. Først finder den ud af hvad for en variabel den skal bruge, og dens værdi(i dette tilfælde er det variablen index med dens værdi som er 0).

```javascript  
for(var index = 0; index < 10; index++){
    ^^^^^^^^^^^^^
```
2. Så finder den ud af hvad værdien skal være når den skal stoppe(i dette tilfælde skal den stoppe når index' værdi stadig er mindre end 10 (<) ).

```javascript  
for(var index = 0; index < 10; index++){
                   ^^^^^^^^^^^
```
3. Så fortæller den hvad der skal ske efter at koden i selve loopet er kørt igennem(i dette tilfælde skal index' værdi plusses med 1 (++) ).

```javascript  
for(var index = 0; index < 10; index++){
                               ^^^^^^^
    console.log(index); <------ Hvad sker der efter koden?
}
```