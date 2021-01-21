/* var clientes = [];

function cadastrarCliente(cliente) {
    clientes.push(cliente);
}
function preencherCliente() {
    var cliente = {};
    cliente.nome = document.getElementById("name").value;
    cliente.sobrenome = document.getElementById("last-name").value;
    cliente.cpf = document.getElementById("cpf").value;
    cliente.rg = document.getElementById("rg").value;
    cliente.data = document.getElementById("date").value;
    cliente.telefone = document.getElementById("phone").value;
    cliente.email = document.getElementById("mail").value;
    cliente.endereco = document.getElementById("adress").value;
    cadastrarCliente(cliente)
}

function listarClientes() {
    for(var i = 0; i < clientes.length; i++) {
    console.log(clientes[i])
    }
}
function jsHtml() {
var sessao = document.getElementById("tubarao")
var titulo1 = document.createElement("h2")
titulo1.innerText = "Subtítulo"
titulo1.style.backgroundColor = "pink"
titulo1.style.color = "black"
sessao.appendChild(titulo1);


var titulo2 = document.createElement("h3")
titulo2.innerText = "SubSubtítulo"
titulo2.style.fontSize = "18px"
sessao.appendChild(titulo2);


var titulo3 = document.createElement("h4")
titulo3.innerText = "SubSubSubtítulo"
titulo3.style.fontStyle = "italic"
sessao.appendChild(titulo3);

var titulo4 = document.createElement("h5")
titulo4.innerText = "SubSubSubSubtítulo"
titulo4.style.textDecoration = "underline"
sessao.appendChild(titulo4)

var liberty = document.createElement("p") 
liberty.innerText = "Liberdade";
liberty.style.color = "#ff0095";
sessao.appendChild(liberty)
}
*/
var input, label, titulo, button
var form = document.createElement("form")
var body = document.createElement("body")

function criarTitulo() {
    titulo = document.createElement("h1")
    titulo.innerText = "Cadastre-se e abra sua conta!"
    titulo.style.textAlign = "center"
    titulo.style.fontSize = "20px"
    titulo.style.backgroundImage = "../img/seta-banco.jpg"
    titulo.style.padding = "10px 0px"
    titulo.style.margin = "15px 275px"
    titulo.style.color = "#000000   "
    titulo.style.borderRadius = "15px"
    document.getElementById("bank").appendChild(titulo)

}

function criarInput(nomeDoInput, tipoDoInput) {
    input = document.createElement("input")
    input.className = "data-box"
    input.name = nomeDoInput
    input.type = tipoDoInput
    input.style.display = "block"
    input.style.fontSize = "20px"
    input.style.marginBottom = "10px"
    input.style.color = "#000000"
    form.appendChild(input)
}
function criarLabel(nomeDaLabel, nomeDoInput) {
    label = document.createElement("label")
    label.className = "data"
    label.htmlFor = nomeDoInput
    label.innerText = nomeDaLabel
    form.appendChild(label)
}
function criarButton() {
    button = document.createElement("button")
    button.innerText = "Entrar"
    button.className = "enter"
    button.style.marginTop = "15px"
    button.style.display = "block"
    button.style.padding = "5px 85px"
    form.appendChild(button)
}
function criarPagina() {


    form.className = "forms"

    criarTitulo()

    criarLabel("Nome:", "name")
    criarInput("name", "text")

    criarLabel("Sobrenome:", "lastname")
    criarInput("lastname", "text")

    criarLabel("CPF:", "cpf")
    criarInput("cpf", "number")

    criarLabel("RG:", "rg")
    criarInput("rg", "number")

    criarLabel("Data de Nascimento", "date")
    criarInput("date", "date")

    criarLabel("Telefone:", "phone")
    criarInput("phone", "number")

    criarLabel("E-mail:", "email")
    criarInput("email", "text")

    criarLabel("Endereço:", "adress")
    criarInput("adress", "text")

    criarButton()
    
    document.getElementById("bank").appendChild(form)
    

}
    criarPagina()