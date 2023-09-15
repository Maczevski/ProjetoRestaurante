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