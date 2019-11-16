//2.  Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200.00$.
// Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total des achats.

var montanttotal;
var rabais;


montanttotal = Number(prompt("Veuillez entrer le montant total de vos achats."));
rabais = montanttotal*0.15;


if(montanttotal > 200){
    document.write("Votre total est de " + (montanttotal-rabais) + "$ vous épargnez " + rabais + "$ car vous achetez pour 200$ ou plus");
}

else if(200 > montanttotal){
    document.write("Votre total est de " + montanttotal);
}

else{
    document.write(montanttotal)
}