//Calculer le salaire brut d’un employé. Il est payé à l’heure et les données concernant le taux horaire et le nombre d’heures travaillées sont fournies en entrée.

//variables
var taux;
var heures;
var salaire;

//collecte input
taux = Number(prompt("Veuillez entrer votre salaire svp."));
heures = Number(prompt("Veuillez entrer le nombre d'heures travaillés"));

//calcul
salaire = taux*heures;

//resultat
console.log ("Votre salaire brut est de"+ salaire);




