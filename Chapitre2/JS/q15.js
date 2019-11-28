//15. Calculer et afficher la surface d'un rectangle
// pour seulement ceux ayant un périmètre d'au moins 100.

var longueur;
var larg ;
var perimetre;
var surface;



longueur = Number(prompt("Veuillez entrer la longueur en cm du rectangle."));
larg = Number(prompt("Veuillez entrer la largeur en cm du rectangle."));
surface = (longueur*larg);
perimetre=((longueur*2)+(larg*2));

if(perimetre>100){
    document.write("La surface du rectangle est de "+ surface)
}
else if(perimetre ===100){
    document.write("La surface du rectangle est de "+ surface)
}
else if(Longueur === Larg){
    document.write("Ceci est un carre.")
}
else{
    document.write("Desole, le perimetre du rectangle est de moins de 100 cm.")
}
