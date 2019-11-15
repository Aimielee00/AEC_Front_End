//Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif). Imprimer un message incluant son nom pour l’informer du nombre de jours vécus.

//variables
var nom;
var age;
var jours;

//input

nom = prompt("Veuillez écrire votre nom");
age = Number(prompt("Veuillez entrer votre âge."));

//calculs
jours = age*365;

//log

console.log ("Bonjour "+ nom + " vous avez " + jours + " jours." );


