//Lire une note d’examen et
// afficher « Échec » si la note est inférieure à 60
// et « Bravo » si la note est supérieure ou égale à 60.

var note;

note = (Number(prompt("Veuillez inscrire votre note svp")));

if (note < 60 ){
    document.write("Echec")
}
else if(100<= note >=60){
    document.write("Bravo!")
}
else if(note > 100){
    document.write("votre note est superieure a 100")
}
else{
    document.write("Sil vous plait recommencer.")
}