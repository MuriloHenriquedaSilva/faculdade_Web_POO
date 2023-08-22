function somar(array) {
    function somarAux(array,acumulador) {
        if (array.length === 0) return acumulador;
        const [primeiro, ...resto] = array;
        return somarAux(resto, acumulador + primeiro);
    }
    return somarAux(array,0);
}

let numeros = [1,2,3,4,5];
let somatorio = somar(numeros);
console.log(somatorio);
