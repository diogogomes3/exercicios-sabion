function antecessorSucessor() {
    var qualquerNumero = 68;
    var antecessor = qualquerNumero;
    var sucessor = qualquerNumero;

    console.log ('o antecessor de', qualquerNumero, 'é', --antecessor);
    console.log ('o sucessor de', qualquerNumero, 'é', ++sucessor);
}
    antecessorSucessor();
    

    /*
    utilização de parâmetros em retorno nas funções
    */


    function antecessor () {
    return x - 1;
}

    function sucessor(x) {
        return x + 1;2
    }
    console.log('o antecessor é', antecessor(40));
    console.log('o sucessor é', sucessor(40));