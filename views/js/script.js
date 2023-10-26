var modal = document.getElementById('myModal');
var abrirModal = document.getElementById('adicionar-produto');
var fecharModal = document.getElementsByClassName('fechar')[0];


// Função para abrir o modal
abrirModal.onclick = function() {
    modal.style.display = 'block';
}

// Selecione o botão "Adicionar produto"
const botaoAdicionarProduto = document.querySelector('.janela-conteudo button');

// Selecione a janela modal
const janelaEstoque = document.querySelector('.janela-estoque');

// Adiciona um evento de clique ao botão "Adicionar produto" para fechar a janela modal
botaoAdicionarProduto.addEventListener('click', function() {
    janelaEstoque.style.display = 'none'; // Esconde a janela modal
});

// Função para fechar o modal
fecharModal.onclick = function() {
    modal.style.display = 'none';
}

// Fecha o modal quando o usuário clica fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


function adicionarProduto() {
    var nomeProduto = document.getElementById('campoNome').value;
    var quantidadeProduto = document.getElementById('campoQntd').value;
    if (quantidadeProduto === '' || quantidadeProduto <= 0){
        
    }

    if (nomeProduto && quantidadeProduto >= 0) {
        var tabela = document.getElementById('tabela_estoque');
        var newRow = tabela.insertRow(tabela.rows.length);

        var cell1 = newRow.insertCell(0);
        cell1.classList.add("nome-produto");
        var cell2 = newRow.insertCell(1);
        cell2.classList.add("quantidade");
        var cell3 = newRow.insertCell(2);
        cell3.classList.add("excluir-produto");

        cell1.innerHTML = nomeProduto;
        cell2.innerHTML = '<input class="table-content centralizado" type="number" value="' + quantidadeProduto + '" min="0">';
        cell3.innerHTML = '<button class="excluir-produto-button"><img src="img/x.png" alt="x" class="x"></button>';

        // Acessa os dados do localstorage ou cria um array vazio
        let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

        // Adiciona o o nome e a quantidade do prooduto no final do array
        produtos.push({
            nome: nomeProduto,
            quantidade: quantidadeProduto
        });

        // Passa o array de produtos como string para o localStorage
        localStorage.setItem("produtos", JSON.stringify(produtos));

        // Limpa os dados do campo de entrada
        document.getElementById('campoNome').value = '';
        document.getElementById('campoQntd').value = '';

        var botaoExcluirProduto = newRow.querySelector(".excluir-produto-button");
        botaoExcluirProduto.addEventListener("click", function() {
            excluirProduto(this);
        });

        // Evento de entrada para os campos de quantidade
        const inputQuantidade = newRow.querySelector(".table-content input");
        inputQuantidade.addEventListener("input", function() {
            const novaQuantidade = parseFloat(inputQuantidade.value);
            const nomeProduto = newRow.querySelector(".nome-produto").innerText;
            atualizarQuantidadeNoLocalStorage(nomeProduto, novaQuantidade);
        });
    }
}

// Quando o documento é carregado
document.addEventListener("DOMContentLoaded", function () {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const tabela = document.getElementById('tabela_estoque');

    // Percorre o array de produtos e insere novas linhas na tabela
    for (const produto of produtos) {
        const newRow = tabela.insertRow(tabela.rows.length);

        const cell1 = newRow.insertCell(0);
        cell1.classList.add("nome-produto");
        const cell2 = newRow.insertCell(1);
        cell2.classList.add("quantidade");
        const cell3 = newRow.insertCell(2);
        cell3.classList.add("excluir-produto");

        cell1.innerHTML = produto.nome;
        cell2.innerHTML = '<input class="table-content centralizado" type="number" value="' + produto.quantidade + '" min="0">';
        cell3.innerHTML = '<button class="excluir-produto-button"><img src="img/x.png" alt="x" class="x"></button>';

        const inputQuantidade = cell2.querySelector("input");
        inputQuantidade.addEventListener("input", function () {
            const novaQuantidade = parseFloat(inputQuantidade.value);
            const nomeProduto = cell1.innerText;
            atualizarQuantidadeNoLocalStorage(nomeProduto, novaQuantidade);
        });

        const botao_excluir = document.querySelectorAll(".excluir-produto-button");
        botao_excluir.forEach(function(excluir) {
            excluir.addEventListener("click", function() {
                excluirProduto(this);
            });
        });
    }
});

function excluirProduto(button) {
    var row = button.parentNode.parentNode;
    var tabela = row.parentNode;

    var nomeProduto = row.querySelector(".nome-produto").innerText;

    tabela.removeChild(row);

    var produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    var index = produtos.findIndex(function(produto) {
        return produto.nome === nomeProduto;
    });

    if (index !== -1) {
        produtos.splice(index, 1);
    }

    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function atualizarQuantidadeNoLocalStorage(nomeProduto, novaQuantidade) {
    var produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    var index = produtos.findIndex(function(produto) {
        return produto.nome === nomeProduto;
    });

    if (index !== -1) {
        produtos[index].quantidade = novaQuantidade;
    }

    localStorage.setItem("produtos", JSON.stringify(produtos));
}
botaoAdicionarProduto.addEventListener("click", adicionarProduto);



