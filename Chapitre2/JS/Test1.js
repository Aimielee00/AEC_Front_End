salaire = {
    var salaireParHeure;
var shany = "professeur";
var laurent = "stagiaire";
var etudiant;

//variable évaluée
//selon le nom de l'employe, le salaire affiché sera différent
var typeEmploye = shany;

if(typeEmploye === "professeur"){
    salaireParHeure = 500;
}
else if(typeEmploye === "stagiaire"){
    salaireParHeure = 0;
}
else{
    salaireParHeure = -10;
}
return salaireParHeure;
}

// Exercice : ajoutez votre nom comme valeur à la variable etudiant.
//            ajoutez un else if avec un salaire de l'heure à 12$ si le typeEmploye === à votre nom