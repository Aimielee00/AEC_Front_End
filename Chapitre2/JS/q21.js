//Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

var revenu;

revenu =(Number(prompt("Veuillez entrer votre revenu imposable.")));

if(14000>revenu>0){
    document.write("Limpot provincial a charger est de "+  (1120 + (revenu*0.195)))
}
else if(23000>=revenu>14000){
    document.write("Limpot provincial a charger est de "+  (2485 + (revenu*0.215)))
}
else if(50000>=revenu>23000){
    document.write("Limpot provincial a charger est de "+  (4420 + (revenu*0.245)))
}
else if(revenu>50000){
    document.write("Limpot provincial a charger est de "+  (11035 + (revenu*0.26)))
}
else{
    document.write("Erreur")
}