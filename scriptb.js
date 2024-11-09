var veri = 1;

var evento = document.getElementById('eventoNoFinal2').addEventListener("click", function (){
    var menu = document.getElementById('pinterest');
    if (veri == 1){
        menu.style.right = "0px";
    }
    else {
        menu.style.right = "100px";

    }
})

