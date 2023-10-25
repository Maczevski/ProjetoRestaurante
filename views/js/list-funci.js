const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const scpf= document.querySelector('#m-cpf')
const stelefone = document.querySelector('#m-telefone')
const btnSalvar = document.querySelector('#btnSalvar')
const scarteira = document.querySelector('#m-carteira')


let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sFuncao.value = itens[index].funcao
    sSalario.value = itens[index].salario
    scpf.value = itens[index].cpf
    stelefone.value = itens[index].telefone
    scarteira.value = itens[index].carteira
    id = index
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
    scpf.value = ''
    stelefone.value = ''
    scarteira.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>R$ ${item.salario}</td>
    <td class="acao">
        <button onclick="editItem(${index})"><i class="fa-solid fa-file-pen"></i></i></button>
    </td>
    <td class="acao">
        <button onclick="deleteItem(${index})"><i class="fa-solid fa-user-slash"></i>
        </i></button>
    </td>
    <td class="acao">
    <a href="#" onclick="openInfoModal(${index})"><i class="fa-solid fa-plus"></i></a>
</td>

  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].funcao = sFuncao.value
    itens[id].salario = sSalario.value
  } else {
    itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()

//
function openInfoModal(index) {
    const infoModal = document.querySelector('.info-modal');
    const item = itens[index];

    document.getElementById('info-nome').textContent = item.nome;
    document.getElementById('info-funcao').textContent = item.funcao;
    document.getElementById('info-salario').textContent = `R$ ${item.salario}`;
    document.getElementById('info-cpf').textContent = item.cpf;
    document.getElementById('info-carteira').textContent = item.carteira;
    document.getElementById('info-telefone').textContent = item.telefone;
    document.getElementById('info-genero').textContent = item.genero;

    infoModal.style.display = 'block';
}

// Função para fechar o modal com informações adicionais
function closeInfoModal() {
    const infoModal = document.querySelector('.info-modal');
    infoModal.style.display = 'none';


    
}


