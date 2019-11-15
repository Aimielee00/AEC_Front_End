//Faites un programme qui lit le nom d’un article et son prix de détail.
// Votre programme doit afficher le prix de gros (66% du prix de détail) ainsi que le profit attendu.

//var
var nom;
var prixdetail;
var prixdegros;
var profit;

//input
nom = prompt("Veuillez entrer le nom  de l'article");
prixdetail = Number(prompt("Veuillez entrer le prix de détail de l'article"));

//calculs
profit = prixdetail*(66/100);
prixdegros = prixdetail+profit;

//log
console.log ("L'article " + nom + " est de " + prixdegros + " et le profit attendu sera de " + profit);
