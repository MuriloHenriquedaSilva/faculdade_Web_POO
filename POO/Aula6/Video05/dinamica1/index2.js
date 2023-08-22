function filter(f, a) {
    const result = [];
    for (let elemento of a) {
        if (f(elemento)) {
            result.push(elemento);
        }
    }
    return result;
}

const numeros = [0, 1, 2, 5, 10];
const maiores2 = filter(n => n > 2, numeros);
console.log(numeros);
console.log(maiores2);
