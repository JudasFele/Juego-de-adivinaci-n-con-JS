let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let limiteJuego = 3;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez": "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p","El número secreto es menor");
        } else{
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    // if (listaNumerosSorteados.length == numeroGenerado ){
    //     asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    if (listaNumerosSorteados.length == limiteJuego){
        asignarTextoElemento("p", "Alcanzaste el limite de juego recarga la pagina para jugar de nuevo");    
    
    } else{
        // #Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Selecciona un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();   
    // Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    
}

condicionesIniciales();