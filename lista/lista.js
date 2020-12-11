var documentos = []
var cliente = {}
cliente.nome = "Iuri";
cliente.rg = "1122233344";
cliente.endereco = "av y";
cliente.cpf = "11122233344";

documentos.push(cliente);
    for(var contador = 0; contador < documentos.length; contador++) {
    var clienteDaLista = documentos[contador]
    console.log("\nnome:", clienteDaLista.nome, "\nRG:", clienteDaLista.rg, "\nCPF:", clienteDaLista.cpf);
    }
