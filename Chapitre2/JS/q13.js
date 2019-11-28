//Lire 2 nombres A et B différents.
var a;
var b;

a=Number(prompt("Veuillez entrer le nombre A."));
b=Number(prompt("Veuillez entrer le nombre B."));

// Trouver et afficher le plus petit et le plus grand.
if(a>b){
    document.write("Le nombre le plus petit est le nombre b " + b + " Le nombre le plus grand est le nombre a: " + a)
}
else if(a<b){
    document.write("Le nombre le plus petit est le nombre a " + a + " Le nombre le plus grand est le nombre b: " + b)
}
// Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.
else if(a === b){
    document.write("Erreur")
}

else{
    document.write("Veuillez recommencer.")
}