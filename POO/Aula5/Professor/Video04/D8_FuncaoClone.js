function clone(obj){
    let copia = {...obj};
    return copia;
}


// Demonstra cópia rasa de objetos simples
let teste1 = {m1:'feriado',data:'02/03/1990'}
let copiaT1 = clone(teste1);
console.log(teste1);
console.log(copiaT1);
copiaT1.data = '05/03/1990';
console.log(teste1);
console.log(copiaT1);
console.log('-------------');

/*
// Demonstra cópia rasa de objetos compostos
let umaData = {dia:2,mes:3,ano:1990}
let teste2 = {m1:'feriado',data:umaData}
let copiaT2 = clone(teste2);
umaData.dia = 5;
console.log(teste2);
console.log(copiaT2);
*/