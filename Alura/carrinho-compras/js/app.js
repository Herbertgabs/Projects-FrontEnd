let valorTotal = 0;
let carrinhoProdutos = [];

document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0,00';

function adicionar() {
    // Recuperar valores: nome do produto, quantidade e valores
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim(); // Remover espaços em branco
    let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.')); // Converter para número
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Verificar se a quantidade é válida
    if (quantidade > 0) {
        // Verificar se o produto já está no carrinho
        let produtoExistente = carrinhoProdutos.find(p => p.nome === nomeProduto);

        if (produtoExistente) {
            // Atualizar a quantidade e o preço do produto existente
            produtoExistente.quantidade += quantidade;
            produtoExistente.precoTotal = produtoExistente.quantidade * valorUnitario;
        } else {
            // Adicionar novo produto ao carrinho
            let novoProduto = {
                nome: nomeProduto,
                quantidade: quantidade,
                precoUnitario: valorUnitario,
                precoTotal: quantidade * valorUnitario
            };
            carrinhoProdutos.push(novoProduto);
        }

        // Atualizar o valor total
        valorTotal = carrinhoProdutos.reduce((total, produto) => total + produto.precoTotal, 0);
        let valorTotalCarrinho = document.getElementById('valor-total');
        valorTotalCarrinho.textContent = `R$ ${valorTotal.toFixed(2)}`;

        // Atualizar a exibição do carrinho
        atualizarCarrinho();
    } else {
        alert('Adicione uma quantidade válida!');
    }
}

function atualizarCarrinho() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';

    // Adicionar produtos ao carrinho
    carrinhoProdutos.forEach(produto => {
        carrinho.innerHTML += `<section class="carrinho__produtos" id="lista-produtos">
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${produto.quantidade}</span> ${produto.nome} <span class="texto-azul">R$${produto.precoTotal.toFixed(2)}</span>
            </section>
        </section>`;
    });
}

function limpar(){
valorTotal = 0;
carrinhoProdutos = [];  
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0,00';
}