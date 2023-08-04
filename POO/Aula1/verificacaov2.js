import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

function acrescentaVerificador(matricula){
    let digitos = matricula;
    let soma = 0;

    while(digitos.length != 1){
        for(let i = 0;i< digitos.length;i++){
            soma = soma + Number(digitos.at(i));
        }
    digitos = String(soma);
    soma = 0
    }   
    matricula + '-'+ digitos;
}
let matricula = prompt("Digite sua matricula: ")
let mtrCompleta = acrescentaVerificador(matricula);
console.log('Numero da matricula completo:',mtrCompleta)
