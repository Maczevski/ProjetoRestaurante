function enviarPedido() {
    const mesa = document.getElementById('mesa').value;
    const observacoes = document.getElementById('observacoes').value;

    // Feche o modal após o pedido ser enviado ou processado
    $('#pedidoModal').modal('hide');

    // Limpe os campos do formulário
    document.getElementById('mesa').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('observacoes').value = '';
}
