
var reponse;
var age = 17;
var sexe = "fille";


if(age >= 16 && age <= 25){
    if(sexe === "fille"){
        reponse = 2;
    }
    else{
        reponse = 5;
    }

}
//si tu es vieux
else{
    if(sexe === "garçon"){
        reponse = 3;
    }
    else{
        reponse =2;
    }



return reponse;
