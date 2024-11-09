var veri = 1;

var evento = document.getElementById('eventoNoFinal3').addEventListener("click", function (){
    var menu = document.getElementById('whatsapp');
    if (veri == 1){
        menu.style.right = "0px";
    }
    else {
        menu.style.right = "100px";

    }
}) 