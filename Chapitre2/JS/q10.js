//10.    Lire un nombre entier au clavier et afficher le nom du mois correspondant.
// Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».

var nb;

nb =Number(prompt("Veuillez entrer un nombre entier correspondant a un mois."));

if(nb === 1){
    document.write("Janvier")
}

else if(nb === 2){
    document.write("Fevrier")
}
else if( nb === 3){
    document.write("Mars")
}
else if(nb === 4){
    document.write("Avril")
}
else if( nb === 5){
    document.write("Mai")
}
else if( nb === 6){
    document.write("Juin")
}
else if(nb === 7){
    document.write("Juillet")
}
else if(nb === 8){
    document.write("Aout")
}
else if( nb === 9){
    document.write("Septembre")
}
else if(nb === 10){
    document.write("Octobre")
}
else if(nb === 11){
    document.write("Novembre")
}
else if(nb === 12){
    document.write("Decembre")
}
else{
    document.write("Mois invalide")
}