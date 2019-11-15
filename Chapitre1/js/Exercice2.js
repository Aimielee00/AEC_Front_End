//Calculer la surface d’un rectangle dont la longueur et la largeur sont lues à l’écran.

//Étape 1 : Trouver les variables
var Largeur;
var longueur;
var surface;

//Étape 2 : Lecture (demander à l'usager des données)
Largeur = Number(prompt("Veuillez entrer la largeur d'un rectangle svp :"));
Longueur = Number(prompt("Veuillez entrer la longueur d'un rectangle svp :"));


//Étape 3: Les calculs
surface = Largeur*Longueur;

//Étape 4 : Affiche les résultats dans la console
console.log ("La surface du rectangle est de" + surface);
