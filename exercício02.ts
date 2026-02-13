type StatusRequisicao = "Sucesso" | "Erro" | "Carregando";

function mostrarMensagemStatus(status: StatusRequisicao) {
    return console.log(status)

}

mostrarMensagemStatus("Sucesso" )
mostrarMensagemStatus("Erro")
mostrarMensagemStatus("Carregando")
