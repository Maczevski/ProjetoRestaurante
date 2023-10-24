function enviarPedido() {
    const mesa = document.getElementById('mesa').value;
    const observacoes = document.getElementById('observacoes').value;

    // Feche o modal após o pedido ser enviado ou processado
    $('#pedidoModal').modal('hide');


}



function inputCleaner(){
    const mesaInput = document.getElementById("mesa");
    const qtnInput = document.getElementById("quantidade");
    const obsInput = document.getElementById("observacoes");
    mesaInput.value = '';
    qtnInput.value = '';
    obsInput.value = '';
}