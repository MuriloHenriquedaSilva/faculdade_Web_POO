let funcao = function (a, b) {
    return a + b;
}
function executar(a, b, funcao) {
    return funcao(a, b);
}
let resultado = executar(1, 2, funcao);
console.log(resultado);
