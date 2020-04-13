//Fait par Emilie Fortier-Marcoux
//4 Avril 2020
//Examen Final Programmaton Web 1

let motValide = false;
let mot = "";
let lettre="";
let premierclick = true;
let idimage1;
let idimage2;
let srcimage1;
let srcimage2;
let bgchoisi;
let n;

//PARTIE 1 = LE MOT SAISI
//GERER LES ERREURS//
$( "#inputmot" ).keyup(function() {
    let mot= $( "#inputmot" ).val();
    if(mot.length<=12){
        if(mot.length<3) {
            $('#userHelp').html("Le mot est trop petit.");
            $('#userHelp').css("color", "red");
            motValide = false;
        }
        else{
            $('#userHelp').html("Le mot a le bon nombre de lettres");
            $('#userHelp').css("color", "green");
            motValide = true;
        }
    }
    else if(mot.length>12){
        $('#userHelp').html("Le mot est trop long.");
        $('#userHelp').css("color", "red");
        motValide = false;
    }
    else{
        $('#userHelp').html("");
    }
    CheckFormulaire();
});
//Validation du formulaire
function CheckFormulaire(){
    if(motValide){
        $( "#OkGo" ).prop('disabled', false);
    }
    else{
        $( "#OkGo" ).prop('disabled', true);

    }
};

//TRANSFORMER MOT POUR LETTRES DANS INPUT//
$( "#OkGo" ).click(function() {
//boucler les accents et *
    let mot = $("#inputmot").val();

    for (i =0; i<mot.length; i++) {
    if (mot[i] === "é" || mot[i] === "è" || mot[i] === "ê" || mot[i] === "ë") {
            lettre = "E";
        $('#lettre' + i).attr("src", "Letters/E/E1.jpg");
        $('#lettre' + i).attr("id", "Lettre" + [i]);
    }
  else if (mot[i] === "à") {
            lettre = "A";
       $('#lettre' + i).attr("src", "Letters/A/A1.jpg");
       $('#lettre' + i).attr("id", "Lettre" + [i]);
        }
  else if (mot[i] === "ù") {
            lettre = "U";
            $('#lettre' + i).attr("src", "Letters/U/U1.jpg");
            $('#lettre' + i).attr("id", "Lettre" + [i]);
        }
  else if (mot[i] === "*") {

            $('#lettre' + i).attr("src", "Letters/CS/CS1.jpg");
            $('#lettre' + i).attr("id", "Lettre" + [i]);
        }
  else {
            lettre = mot.toUpperCase();
            $('#lettre' + i).attr("src", "Letters/" + lettre[i] + "/" + lettre[i] + 1 + ".jpg");
            $('#lettre' + i).attr("id", "Lettre" + [i]);
        }



        //CORRIGER NB COLONNES
        // (si la longueur du mot est plus petite que le mot affiché, on réduit du nb de mot excédant)
        if(mot.length<10){
        $('.colonnelettre10').remove();
        if(mot.length<9){
            $('.colonnelettre9').remove();
        }
            if(mot.length<8){
                $('.colonnelettre8').remove();
            }
            if(mot.length<7){
                $('.colonnelettre7').remove();
            }
            if(mot.length<6){
                $('.colonnelettre6').remove();
            }
            if(mot.length<5){
                $('.colonnelettre5').remove();
            }
            if(mot.length<4){
                $('.colonnelettre4').remove();
            }
        }


        //Corriger BS col
        if(lettre.length === 3 ){
            $( ".col-1" ).attr( "class", "col-4" );
        }
        else if(lettre.length === 4 ){
            $( ".col-1" ).attr( "class", "col-3" );
        }
        else if(lettre.length === 5 || lettre.length === 6 ){
            $(".col-1").attr("class", "col-2");
        }
    }
});




//PARTIE 2 LES LETTRES
//MODAL//
$('.img-lettre').click(function(){

    $('#Mymodal').modal('show');
        //(aller chercher la lettre src de l'img clique et changer lettre caroussel)//
        let n = $(this).attr("src").charAt(8);
        for(i=1;i<8;i++) {
            $("#idimgcar"+i).attr("src", "Letters/" + n + "/" + n + i + ".jpg");
        }
    srcimage1 = $(this).attr("src");
    idimage1 = $(this).attr("id");
    console.log(srcimage1);
});
//CARROUSEL CLIC IMAGE CHANGE IMG INITIALE CLIQUEE //
$(document).on('click', '.imgcarousel', function(){
    srcimage2 = $(this).attr("src");
    idimage2 = $(this).attr("id");
    console.log(srcimage2);

        $(srcimage1).attr('src', srcimage2);
        $(idimage1).attr('id', idimage2);
});










//LETTRES -BORDURES//
$(".img-fluid").css("border","2px solid white");




//PARTIE 3 LE FOND ET L’IMPRESSION//

//FOND//
$('.bg').click(function(){
    bgchoisi = $(this).attr("src");
        $('.bg-img').css("background-image", "url("+bgchoisi+")");
});

//IMPRESSION//
//(ajout d-print dans html et css)//




