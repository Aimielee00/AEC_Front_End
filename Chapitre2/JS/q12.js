//Calculer le prix des assurances pour un véhicule.



var vh;
var age;
var sexe;

sexe=(prompt("Veuillez entrer votre sexe par M ou F."));
age=(Number(prompt("Veuillez entrer votre âge.")));
vh=(prompt("Veuillez entrer la valeur du vehicule"));

// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
if(sexe==="M" || sexe==="m"){
    if(age >= 16 && age <= 25){
        document.write("La prime est de " + (vh*0.05));
    }
    else if(age>25){
        document.write("La prime est de " + (vh*0.03));
    }
    else if (age<16){
        document.write("Impossibile de vous assurer.")
    }
}

// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.
else if(sexe==="F" || sexe ==="f") {
    if (age >= 16 && age <= 25) {
        document.write("La prime est de " + (vh*0.03));
        // S’il est plus vieux, le taux sera de 3 %.
    } else if (age>25) {
        document.write("La prime est de " + (vh*0.02));
    }
    else if (age<16){
        document.write("Impossible de vous assurer.")
    }
}

else{
    document.write("Il y a une erreur, svp recommencer.");
}

