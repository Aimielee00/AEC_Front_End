//8.    Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé.
// Affichez son salaire. (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées.
// Une semaine de travail normale est de 40 heures.

var taux;
var heures;
var salaire;
var tempssupp;
var hrssupp;


taux =Number(prompt("Veuillez entrer votre taux horaire"));
heures = Number(prompt("Veuillez entrer le nombre dheure travaille"));

salaire =(taux*heures);

hrssupp=(heures-40);
tempssupp =(hrssupp*(2*taux));
salairesupp = (40*taux);

if(heures>40){
    document.write("Le salaire sera de " + (tempssupp+salairesupp))
}

else if(heures<=40){
    document.write("Le salaire sera de " + salaire)
}