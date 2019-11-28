//Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur


var fond;
var couleurtexte;

couleurtexte=(prompt("Veuillez choisir une couleur: vert, rouge ou orange pour le texte."));
fond=(prompt("Veuillez choisir une couleur: jaune, magenta ou bleu pour le fond."));



if(couleurtexte=== "vert"){
    if(fond === "jaune"){
        console.log( "%c texte",'color: green; background: yellow');
    }
    else if(fond === "magenta"){
        console.log("%c texte",'color: green; background: magenta');
    }
    else if(fond === "bleu"){
        console.log( "%c texte",'color: green; background: blue');
    }
}

if(couleurtexte=== "rouge"){
    if(fond === "jaune"){
        console.log( "%c texte",'color: red; background: yellow');
    }
    else if(fond === "magenta"){
        console.log("%c texte",'color: red; background: magenta');
    }
    else if(fond === "bleu"){
        console.log( "%c texte",'color: red; background: blue');
    }
}

if(couleurtexte=== "orange"){
    if(fond === "jaune"){
        console.log( "%c texte",'color: orange; background: yellow');
    }
    else if(fond === "magenta"){
        console.log("%c texte",'color: orange; background: magenta');
    }
    else if(fond === "bleu"){
        console.log( "%c texte",'color: orange; background: blue');
    }
}

else{
    console.log ("Erreur, veuillez recommencer!")
}