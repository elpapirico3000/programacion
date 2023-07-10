let vidasJugador = 3
let vidasEnemigo = 3
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

}

function seleccionarMascotaJugador() {
    let inputCharmander = document.getElementById('Charmander')
    let inputBulbasaur = document.getElementById('Bulbasaur')
    let inputSquirte = document.getElementById('Squirte')
    let spanMascotaEnimigo = document.getElementById('mascota-jugador')
    
    if (inputCharmander.checked) {
        spanMascotaEnimigo.innerHTML ='Charmander'
    } else if (inputBulbasaur.checked) {
        spanMascotaEnimigo.innerHTML = 'Bulbasaur'
    } else if (inputSquirte.checked) {
        spanMascotaEnimigo.innerHTML = 'Squirte'
    } else {
        alert('Selecciona una mascota')
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let ataqueAletorio = aleatorio(1,3)
    let spanMascotaEnimigo = document.getElementById('mascota-enemigo')
    if (ataqueAletorio ==1){
        spanMascotaEnimigo.innerHTML = 'Charmander'
    } else if (ataqueAletorio ==2){
        spanMascotaEnimigo.innerHTML = 'Bulbasaur'
    } else {
        spanMascotaEnimigo.innerHTML = 'Squirte'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    alert(ataqueJugador)
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    alert(ataqueJugador)
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max-min +1) +min)
}

{   combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

} }
window.addEventListener('load', iniciarJuego)