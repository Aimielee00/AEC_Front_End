//7.    Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var x;

x = Number(prompt("Veuillez inscrire votre nomnre"));

if(x===0){
    document.write("Categorie nulle");
}
else if(x<0){
    document.write("Le chiffre est dans la categorie negative");
}

else if(x>0){
    document.write("Le chiffre est dans la categorie positive")
}