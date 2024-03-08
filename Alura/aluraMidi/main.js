"use strict"
function tocaSom(seletorTagAudio){
    const elemento = document.querySelector(seletorTagAudio);
    
    if(elemento !== null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        alert('Elemento econtrado não é um audio!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let cont = 0;

for(let cont = 0;cont < listaDeTeclas.length; cont++){
    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(event) {
        if(event.code == 'Space' || event.code == 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(event) {
        if(event.code == 'Space' || event.code == 'Enter'){
            tecla.classList.remove('ativa');
        }
    }
    
}