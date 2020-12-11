var conta = {
    nome: 'Diogo',
    email: 'diogogomes371@gmail.com',
    telefone: 11964997254,
    rg: 539652458,
    cpf: 46503249872,
}
var saldo = 2000
var chequeEspecial = 500

function sacar(saque) {
    if (saque < saldo) {
    console.log ('você sacou', saque, ', agora você tem', saldo - saque);
    }

    else if  (saque > saldo && saldo + chequeEspecial > saque) {
    console.log ('você sacou', saque, ',seu saldo é', 0, 'e seu cheque especial é de', saldo + chequeEspecial - saque);
    }
    else {
    console.log ('você não possui saldo nem cheque especial suficiente');
    }

}
sacar(3000)


/////////////////
/*
function depositar(deposito) {
    saldo += deposito
    console.log('você depositou', deposito, 'e seu saldo atual é', saldo)
}
depositar(6000) 
*/