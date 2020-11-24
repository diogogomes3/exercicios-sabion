function area() {
    var lado = 6;
    var tamanhoLado = 8;
    resultado = lado * tamanhoLado;

    console.log ('a área é', resultado);
}
    area();


        /*
    utilização de parâmetros em retorno nas funções
    */

function area2(lado, tamanhoLado) {
    return lado * tamanhoLado;
}
    console.log('área =', area2(6,4));