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

// Adicione um evento de clique ao botão "Adicionar produto" para fechar a janela modal
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
        cell3.innerHTML = '<button onclick="excluirProduto(this)"><img src="img/x.png" alt="x" class="x"></button>';
        
        document.getElementById('campoNome').value = '';
        document.getElementById('campoQntd').value = '';
    }
}

function excluirProduto(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

