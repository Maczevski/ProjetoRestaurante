// Obtém o modal e os botões de abertura e fechamento
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// Função para abrir o modal
function abrirModal() {
    modal.style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    modal.style.display = "none";
}
function fecharModal() {
    modal.style.display = "none";
}

// Adiciona eventos de clique aos botões de abertura e fechamento
openModalBtn.addEventListener("click", abrirModal);
closeModalBtn.addEventListener("click", fecharModal);

// Fecha o modal se o usuário clicar fora dele
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        fecharModal();
    }
});

// Obtém o botão de alternância e o menu lateral
const toggleButton = document.getElementById("toggleButton");
const menuLateral = document.getElementById("menuLateral");

// Função para alternar a exibição do menu lateral
function alternarMenuLateral() {
    menuLateral.classList.toggle("menu-shown");
}

// Adiciona um evento de clique ao botão de alternância
toggleButton.addEventListener("click", alternarMenuLateral);
