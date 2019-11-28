//14. Lire 3 nombres A, B et C différents.
// Trouver et afficher le plus petit et le plus grand.

var a;
var b;
var c;

a=Number(prompt("Veuillez entrer le nombre A: "));
b=Number(prompt("Veuillez entrer le nombre B: "));
c=Number(prompt("Veuillez entrer le nombre C: "));

if(a>b && a>c){
    if(b<c){
        document.write("Le nombre le plus grand est le A : "+ a + "Le nombre le plus petit est le b " + b)
    }
    if(c<b){
        document.write("Le nombre le plus grand est le A : "+ a + "Le nombre le plus petit est le b " + c)
    }
}

else if(b>a && b>c){
    if(a<c) {
        document.write("Le nombre le plus grand est le B : " + b + " Le nombre le plus petit est le a" + a)
    }
    if(c<a){
        document.write("Le nombre le plus grand est le B : " + b + " Le nombre le plus petit est le c" + c)
    }
}

else if(c>a && c>b){
    if (a>b) {
        document.write("Le nombre le plus grand est le C : " + c + "Le nombre le plus petit est le b "+ b )
    }
    if(a<b){
        document.write("Le nombre le plus grand est le C: " + c + "Le nombre le plus petit est le a " + a )
    }
}
else if(c === a && a === b){
    document.write("Les nombres ne peuvent etre egaux. SVP recommencer.")
}