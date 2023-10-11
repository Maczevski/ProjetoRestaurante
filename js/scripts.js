// Obtenha uma referência ao formulário
const form = document.querySelector('form');

// Adicione um ouvinte de evento para o evento "submit" do formulário
form.addEventListener('submit', function (event) {
    // Evite o envio do formulário padrão
    event.preventDefault();

    // Obtenha os valores dos campos do formulário
    const codigo = document.getElementById('codigo').value;
    let nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const telefone = document.getElementById('telefone').value; // Campo de telefone
    const serie = document.getElementById('serie').value; // Campo de série
    const rg = document.getElementById('RG').value; // Campo de RG
    const salario = document.getElementById('salario').value; // Campo de salário

    // Verifique se todos os campos obrigatórios estão preenchidos
    if (codigo === '' || nome === '' || sobrenome === '' || telefone === '' || serie === '' || rg === '' || salario === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Transforme o nome em maiúsculo
    nome = nome.toUpperCase();
    
    // Atualize o campo 'nome' com o nome em maiúsculo
    document.getElementById('nome').value = nome;

    // Envie o formulário
    form.submit();
});

// Adicione um ouvinte de evento para os campos do formulário para aceitar apenas números
const numericFields = document.querySelectorAll('[type="number"], [type="tel"], [name="CPF"], [name="RG"], [name="salario"]');
numericFields.forEach((field) => {
    field.addEventListener('input', function () {
        // Substitua todos os caracteres não numéricos por vazio
        this.value = this.value.replace(/\D/g, '');
    });
});
