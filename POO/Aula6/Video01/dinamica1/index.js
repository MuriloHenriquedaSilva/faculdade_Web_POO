function max(array) {
    let maior = array[0];
    for (let valor of array) {
        if (valor > maior) {
            maior = valor;
        }
    }
    return maior;
}

const numeros = [4,2,1,4,5,9,0];
console.log(max(numeros));
