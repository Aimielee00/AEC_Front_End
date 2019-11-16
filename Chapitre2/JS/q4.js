//4.  Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est différent de zéro.
// Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’, si ce nombre n’est pas zéro vous devez afficher le résultat.

var nb1;
var nb2;

nb1=Number(prompt("Veuillez entrer le nombre1."));
nb2=Number(prompt("Veuillez entrer le nombre2."));


if(nb2 != 0 ){
    document.write(nb1/nb2 + "Le nombre 1 est divise par le deuxieme.");
}

else if(nb2 === 0){
    document.write("Division par zero interdite");
}

