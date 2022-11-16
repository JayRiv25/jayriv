//Botón "Menú"

function boton(){
    console.log("Mi botón sirve");
    let menu = document.getElementsByClassName('navbar');
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.toggle('desaparece');
        
    }
}