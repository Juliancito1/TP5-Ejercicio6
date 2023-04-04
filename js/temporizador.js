let aux;
const horas = document.getElementById('ingresarhoras')
const minutos = document.getElementById('ingresarminutos')
const segundos = document.getElementById('ingresarsegundos')
const btnIniciar = document.getElementById('iniciar')
const btnEstablecer = document.getElementById('establecer');
const btnReiniciar = document.getElementById('reiniciar');
const btnParar = document.getElementById('parar');
btnEstablecer.addEventListener('click',setTime)
btnIniciar.addEventListener('click',iniciar)
btnReiniciar.addEventListener('click',reiniciar)
btnParar.addEventListener('click',detener)
btnReiniciar.disabled = true;
btnParar.disabled = true;

let reducirHoras;
let reducirMinutos;
let reducirSegundos;

function setTime(){
    document.getElementById('temporizador').innerHTML = `${String(horas.value).padStart(2,'0')}:${String(minutos.value).padStart(2,'0')}:${String(segundos.value).padStart(2,'0')}`
    reducirSegundos = segundos.value;
    reducirHoras = horas.value;
    reducirMinutos = minutos.value
}

function iniciar(){
    aux = setInterval(comenzar,1000)
    if(reducirHoras < 0 && reducirMinutos < 0 && reducirSegundos ===0)
    {
      reiniciar()
    }
    btnIniciar.disabled = true;
    btnReiniciar.disabled = false;
    btnParar.disabled = false;
}

function reiniciar(){
  detener()
  reducirSegundos = 0;
  reducirMinutos = 0;
  reducirHoras = 0;
  document.getElementById('temporizador').innerHTML = `${String(reducirHoras).padStart(2,'0')}:${String(reducirMinutos).padStart(2,'0')}:${String(reducirSegundos).padStart(2,'0')}`
  btnReiniciar.disabled = true;
}

function comenzar(){
    reducirSegundos--;
    document.getElementById('temporizador').innerHTML = `${String(reducirHoras).padStart(2,'0')}:${String(reducirMinutos).padStart(2,'0')}:${String(reducirSegundos).padStart(2,'0')}`
    if(reducirSegundos < 0)
    {
      reiniciar()
    }
    if (reducirSegundos === 0 && reducirMinutos > 0){
      reducirSegundos = 60;
      reducirMinutos--;
    }
    if (reducirMinutos === 0 && reducirHoras > 0)
    {
      reducirMinutos = 59;
      reducirHoras--;
    }
    if(reducirHoras === 0)
    {
      reducirHoras = 0;
    }
  }

  function detener(){
    clearInterval(aux);
    console.log('desde detener');
    btnParar.disabled = true;
    btnIniciar.disabled = false;
  }