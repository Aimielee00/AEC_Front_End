//Lire un nombre et afficher le carré et le cube de ce nombre.

//Étape 1 : Trouver les variables
var nombre;
var carre;
var cube;

//Étape 2 : Lecture (demander à l'usager des données)
nombre = Number(prompt("Veuillez entrer un nombre svp :"));

//Étape 3: Les calculs
carre = nombre*nombre;
cube = nombre*nombre*nombre;

//Étape 4 : Affiche les résultats dans la console
console.log ("Le nombre est" + nombre);
console.log ("le carrée est" + carre);
console.log ("le cube est" + cube);