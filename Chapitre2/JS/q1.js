//1.  Lire deux nombres et afficher le plus grand des deux.

var nb1;
var nb2;


nb1 = Number(prompt("Svp entrez le nombre 1."));
nb2 = Number(prompt("Svp entrez le nombre 2."));


if(nb1 > nb2){
    document.write("le nombre 1" + nb1 + " est le plus grand.");
}
else if(nb2 > nb1){
    document.write("Le nombre 2" + nb2 + "est le plus grand.");
}
else{
    document.write("Les nombres sont égaux.");
}


