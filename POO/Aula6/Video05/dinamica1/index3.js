function reduce(f,a,i) {
    let atual = i;
    for (let elemento of a) {
        atual = f(atual,elemento);
    }
    return atual;
}

const numeros = [0, 1, 2, 5, 10];
const somatorio = reduce((a,b) => a + b, numeros, 0);
console.log(numeros);
console.log(somatorio);
