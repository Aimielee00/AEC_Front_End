//6.   Lire une note au clavier et afficher la lettre correspondante.
//90 et plus : A
//Entre 80 et 90 : B
//Entre 70 et 80 : C
//Entre 60 et 70 : D
//Moins de 60 : E

//* Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A et une fois par la cote E(en sens inverse).

var x;

x = Number(prompt("Veuillez inscrire la note en pourcentage."));


if(x<=59){
    document.write("La note est E")
}
else if(x>=60 && x<=69){
    document.write("La note est D")
}else if(x>=70 && x<=79){
    document.write("La note est C")
}else if(x>=80 && x<=89){
    document.write("La note est B")
}else if(x>=90){
    document.write("La note est A")
}