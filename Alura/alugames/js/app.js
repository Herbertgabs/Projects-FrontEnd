function alterarStatus(id) {
    // Captura o jogo selecionado pelo onClick
    let gameClicado = document.getElementById(`game-${id}`);
    
    // Seleciona a tag img do jogo clicado
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    
    // Seleciona a tag button do jogo clicado
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    // Seleciona a tag p do jogo clicado
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    // Alerta o conteúdo da tag p 
    // alert(nomeJogo.innerHTML);
    
    // Verifica se a classe 'dashboard__item__img--rented' está presente na tag img
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Remove a classe 'dashboard__item__img--rented' para remover a opacidade da imagem
        imagem.classList.remove('dashboard__item__img--rented');
        
        // Remove a classe 'dashboard__item__button--return' para remover a cor de ocupado do botão
        botao.classList.remove('dashboard__item__button--return');
        
        // Muda o texto do botão para 'Alugar'
        botao.textContent = 'Alugar';
    } else {
        // Adiciona a classe 'dashboard__item__img--rented' para aplicar opacidade à imagem
        imagem.classList.add('dashboard__item__img--rented');
        
        // Muda o texto do botão para 'Devolver'
        botao.textContent = 'Devolver';
        
        // Adiciona a classe 'dashboard__item__button--return' para aplicar cor de ocupado ao botão
        botao.classList.add('dashboard__item__button--return');
    }
}
