//5.  Lire un degré de température.
// Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin une belle journée! ».

var degre;

degre=Number(prompt("Veuillez inscrire un degre de temperature."));

if(-40 < degre < -10){
    document.write("HAAAAAAAAAAA! Il fait froid.");
}

else{
    document.write("Enfin une belle journee!");
}