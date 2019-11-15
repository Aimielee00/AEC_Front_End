//Écrire un algorithme qui calcule la note finale d’un étudiant sur 100%.
// Cette note est dérivée des trois notes suivantes : note à l’examen de mi-session qui compte pour 30% de la note finale,
// note de l’examen de fin session qui compte pour 50% et la note de laboratoire qui compte pour 20%.

var finale;
var misession;
var finsession;
var labo;

misession = Number(prompt("Quelle était la note à l'examen de mi-session?"));
finsession = Number(prompt("Quel est votre note de fin de session? "));
labo = Number(prompt("Quelle était la note de laboratoire"));

finale = ((0.3*misession) + (0.5*finsession) +(0.2*labo));

console.log ("Votre note finale " + finale + " %.");