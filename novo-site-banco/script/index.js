var clientes = [];

function cadastrarCliente() {
    var cliente = {};
    cliente.nome = document.getElementById("name").value;
    cliente.cpf = document.getElementById("cpf").value;
    cliente.rg = document.getElementById("rg").value;
    cliente.data = document.getElementById("date").value;
    cliente.telefone = document.getElementById("phone").value;
    cliente.email = document.getElementById("mail").value;
    cliente.endereco = document.getElementById("adress").value;

    clientes.push(cliente);

    localStorage.getItem("clientes", JSON.stringify(clientes));
    

    console.log(cliente)


}