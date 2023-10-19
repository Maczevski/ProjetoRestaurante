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

    if (nomeProduto && quantidadeProduto >= 0) {
        var tabela = document.getElementById('tabela_estoque');
        var newRow = tabela.insertRow(tabela.rows.length);//Insere uma nova linha na tabela.

        // Cria células para nome do produto, quantidade e a opção de excluir
        var cell1 = newRow.insertCell(0);
        cell1.classList.add("nome-produto");//Adiciona a classe para a celula 
        var cell2 = newRow.insertCell(1);
        cell2.classList.add("quantidade");
        var cell3 = newRow.insertCell(2);
        cell3.classList.add("excluir-produto");

        //Definen o conteudo das celulas
        cell1.innerHTML = nomeProduto;
        cell2.innerHTML = '<input class="table-content centralizado" type="number" value="' + quantidadeProduto + '" min="0">';
        cell3.innerHTML = '<button><img src="img/x.png" alt="x" class="x"></button>';
        
        document.getElementById('campoNome').value = '';
        document.getElementById('campoQntd').value = '';
    }
}

botaoAdicionarProduto.addEventListener("click", adicionarProduto);

function excluirProduto(button) {
    var row = button.parentNode.parentNode;//Acessa o elemento pai do pai do botao (a linha da tabela)
    row.parentNode.removeChild(row);//Acessa a tabela (elemento pai da linha) e remove o elemento filho (linha)
}

const botao_excluir = document.querySelectorAll(".excluir-produto-button");
//Itera sobre todos os botoes
botao_excluir.forEach(function(excluir){//Funcao anonima que recebe um botao como parametro
    excluir.addEventListener("click", function() {//Ouvinte do evento de click
        excluirProduto(this);//Passa o botao como parametro para a funcao
    });
});


