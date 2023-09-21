function enviarPedido() {
    const mesa = document.getElementById('mesa').value;
    const observacoes = document.getElementById('observacoes').value;

    // Feche o modal após o pedido ser enviado ou processado
    $('#pedidoModal').modal('hide');
}
