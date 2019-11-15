//Lire les quatre éléments d’information suivants :
// le nom de l’étudiant,
// la note de laboratoire, (compte pour 20%)
// la note de l’examen de mi-session  (compte pour 30%)
// la note de l’examen de fin de session. (compte pour 50%)

//Toutes les notes lues sont sur 100.

//Affiche le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage demandé ci-dessus, et de la note finale. Le tout sur des lignes différentes accompagné de messages clairs.


var nom;
var labo;
var misession;
var finsession;
var laboreel;
var misessionreel;
var finsessionreel;
var finale;


nom = prompt("Veuillez inscrire votre nom.");
labo = prompt("Veuillez entrer votre note de laboratoire sur 100");
misession = prompt("Veuillez entrer votre note de l'examen mi-session sur 100");
finsession = prompt("Veuillez entrer votre note de l'examen de fin de session sur 100.");

laboreel = labo*0.2;
misessionreel = misession*0.3;
finsessionreel = finsession*0.5;
finale = laboreel + misessionreel + finsessionreel ;



console.log ("Bonjour " + nom )
console.log (" le labo " + laboreel + " sur 20, ");
console.log ( " l'examen de mi-session " + misessionreel + " sur 30 " );
console.log (" l'examen de fin de session " + finsessionreel + " sur 50");
console.log (" La note finale est donc de " + finale );
