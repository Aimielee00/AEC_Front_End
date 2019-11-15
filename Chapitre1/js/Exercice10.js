//Faire l’algorithme qui permet de calculer la facture d’un client.
// Cette facture contient la date, le montant de chacun des 3 articles achetés, les taxes de vente et le grand total de la facture.
// Vous demandez à l'usager la date et le montant de chacun des 3 articles achetés. Le montant de TPS est de 5% et la TVQ est de 9.975%.
// Vous affichez la date, les 2 montants de taxes et le grand total.

//var
var date;
var montant1;
var montant2;
var montant3;
var TPS;
var TVQ;

//input
date = prompt("Veuillez inscrire la date");
montant1 = Number(prompt("Veuillez inscrire le montant du 1er article"));
montant2 = Number(prompt("Veuillez inscrire le montant du 2e article"));
montant3 = Number(prompt("Veuillez inscrire le montant du 3e article"));

//calculs
TPS = (5/100)*(montant1+montant2+montant3);
TVQ = (9.975/100)*(montant1+montant2+montant3+TPS);

//log
console.log ( date + " montant de tps "+ TPS + " montant de tvq " +TVQ);