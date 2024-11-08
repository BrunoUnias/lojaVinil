var veri = 1;

var evento = document.getElementById('eventoNoFinal').addEventListener("click", function (){
    var menu = document.getElementById('menu-hidden1');
    if (veri == 1){
        menu.style.right = "0px";
    }
    else {
        menu.style.right = "100px";

    }
})


