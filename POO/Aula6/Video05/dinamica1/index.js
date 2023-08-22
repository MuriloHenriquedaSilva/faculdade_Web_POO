function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const f = function (x) {
    return x * x * x;
}

const numeros = [0, 1, 2, 5, 10];
const cubo = map(f, numeros);
console.log(numeros);
console.log(cubo);
