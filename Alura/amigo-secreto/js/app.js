

let amigos = [];

function adicionar() {
    
  let amigo = document.getElementById('nome-amigo');

    if(amigo == ''){
        alert('Infome o nome do amigo!');
        return;
    }

    if(amigos.includes(amigo.value)){
        alert('Nome ja adicionado!');
        return;
    }

  let lista = document.getElementById('lista-amigos');
  amigos.push(amigo.value);
  if (lista.textContent == '') {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + ', ' + amigo.value;
  }
}

function sortear() {
    if(amigos.length < 3){
        alert('adicione no minimo 3 amigos');
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function reiniciar(){
    amigos = []
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}

