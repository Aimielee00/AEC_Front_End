//Le prix de vente d’une voiture neuve est la somme du prix de base, d’un montant de frais et d'un montant de profit du concessionnaire et des montants taxes de ventes. ' +
//'Les frais sont de 2% du prix de base et le pourcentage du concessionnaire est de 12% du prix de base. ' +
//'et le premier montant de taxe de vente est de 5% du sous-total du prix de base, des frais et du profit du concessionnaire ' +
//'et le deuxième montant de taxe est de 9,975% du prix de base, des frais et du profit du concessionnaire. ' +
//Écrire l’algorithme qui lit le prix de base et qui imprime le montant de frais, le montant de commission, les deux montants de taxes et le prix de vente total, ' +
//'le tout sur des lignes différentes avec des messages explicites.

var prix;
var prixbase;
var frais;
var profit;
var avanttaxes;
var taxes1;
var taxes2;

prixbase = Number(prompt("Veuillez entrer le prix de base du véhicule svp."));

frais = prixbase*0.02;
profit = prixbase*0.12;
taxes1 = (prixbase + frais + profit)*0.05;
taxes2 = (prixbase + frais + profit)*0.975;
prix = (frais + profit + taxes1 + taxes2);


console.log ("Le prix de base du véhicule est de  "+ prixbase);
console.log ("Les frais de 2%   "+ frais);
console.log ("Le pourcentage du concessionnaire de 12%  " + profit);
console.log ("Les taxes de 5%   " + taxes1);
console.log ("Les taxes de 9.975%   " + taxes2);
console.log ("Le prix de vente total  "+ prix);


