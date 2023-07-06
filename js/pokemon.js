function iniciarjuego(){
    let butonmascotajugador =document.getElementById('boton-seleccionar');
    butonmascotajugador.addEventListener("click",selecionarmascotajugador)
}
    function selecionarmascotajugador(){
        let inputcharmader =   document.getElementById ("charmander")
        let inputsquirtle=   document.getElementById ("squirtle")
        let inputbulbasaur=   document.getElementById ("bulbasaur")

        if (inputcharmader.checked){
            alert("elejiste a charmander")
        } else if (inputsquirtle.checked){
             alert("elejiste a aquirtle")
        }  else if (inputbulbasaur.checked){
            alert("elejiste a bulbasaur")

        } else { alert("escoge un pokemo ")

        }

    } 

    window.addEventListener("load", iniciarjuego)
