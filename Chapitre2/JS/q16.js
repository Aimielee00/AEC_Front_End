//16. Lire 2 nombres au clavier.
//Si ces 2 nombres sont :
//supérieurs ou égaux à 10, affichez leur somme
//inférieurs à 10, affichez leur produit
//Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres

var a;
var b;

a=Number(prompt("Veuillez entrer le nombre A: "));
b=Number(prompt("Veuillez entrer le nombre B: "));

if(a>=10 && b>=10){
    document.write("Les chiffres sont superieurs ou egaux a 10. Leurs somme est de: " + (a+b))
}
else if(a<10 && b<10){
    document.write("Les chiffres sont inferieurs a 10. Leurs produit est de: " + (a*b))
}
else if(a>=10 && b<10){
    document.write("un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10. Leur difference est de: " + (a-b))
}
else if(b>=10 && a<10){
    document.write("un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10. Leur difference est de: " + (b-a))
}