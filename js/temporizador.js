let aux;
const horas = document.getElementById('ingresarhoras')
const minutos = document.getElementById('ingresarminutos')
const segundos = document.getElementById('ingresarsegundos')
const btnIniciar = document.getElementById('iniciar')
const btnEstablecer = document.getElementById('establecer');
btnEstablecer.addEventListener('click',iniciar)
btnIniciar.addEventListener('click',comenzar)

let reducirHoras;
let reducirMinutos;
let reducirSegundos;

function iniciar(){
    aux = setInterval(comenzar,1000);
    document.getElementById('temporizador').innerHTML = `${horas.value}:${minutos.value}:${segundos.value}`
    reducirSegundos = segundos.value;
    reducirHoras = horas.value;
    reducirMinutos = minutos.value
}

function comenzar(){
    reducirSegundos--;
    document.getElementById("temporizador").innerHTML = reducirSegundos;
    if (reducirSegundos == -1){
      detener();
      document.getElementById("temporizador").innerHTML = "0";  
    }
  }

  function detener(){
    clearInterval(aux);
  }