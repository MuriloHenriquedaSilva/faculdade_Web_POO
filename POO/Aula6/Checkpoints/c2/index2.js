function executar(a, b, funcao) {
    return funcao(a, b);
}
let resultado = executar(1, 2, function (a, b) {
    return a + b;
});
console.log(resultado);
