//9.    Faire un programme qui lit un nom d’utilisateur et un mot de passe.
// Si le nom d’utilisateur est “admin” et le mot de passe “12345”, affichez le message suivant : « Bonjour [nom de l’utilisateur] ».
// Si les informations ne sont pas correctes, affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide ».

var nomutilisateur;
var mdp;

nomutilisateur=(prompt("Veuillez entrer votre nom d'utilisateur"));
mdp =(prompt("Veuillez entrer votre mot de passe"));

if(nomutilisateur === "Admin" && mdp ==="12345"){
    document.write("Bonjour " + nomutilisateur);
}
else if(nomutilisateur === "admin" && mdp ==="12345"){
    document.write("Bonjour " + nomutilisateur);
}
else{
    document.write("Votre nom d'utilisateur ou votre mot de passe est invalide.")
}