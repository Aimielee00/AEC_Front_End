//Lire le montant de vente et afficher le montant d’escompte correspondant
// sachant que le taux d’escompte est de 12% et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var montantvente;
var montantescompte;

montantvente = (Number(prompt("Veuillez entrer le montant de vente.")));
montantescompte= montantvente*.012

if (montantvente >= 500){
    document.write("Le montant descompte est de " + montantescompte)
}
else if (montantvente < 500 ){
    document.write("Il ny a pas descompte.")
}
else {
    document.write("Veuillez recommencer")
}