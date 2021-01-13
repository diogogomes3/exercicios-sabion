var cliente = {}

function listarCliente() {
    var listaCliente = localStorage.getItem("cliente")
    console.log(JSON.parse(listaCliente))
}

function preencherCliente() {
    cliente.nome = "Iuri";
    cliente.rg = "1122233344";
    cliente.endereco = "av y";
    cliente.cpf = "11122233344";
    cliente.idade = "25";
    cliente.telefone = "11233334444";
    localStorage.setItem("cliente", JSON.stringify(cliente))

    listarCliente()
}

preencherCliente()