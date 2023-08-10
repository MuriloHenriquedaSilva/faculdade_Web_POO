// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// ------------------------------------------
// Exercicio 7: subprograma que monta um número de matricula
// ------------------------------------------
function isDigit(umDigito){
    switch(umDigito[0]){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4': 
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            return true;
        default:
            return false;     
    }
}

function estruturaNroMatriculaOK(numero){
    if (numero.length != 6){
        return false;
    }
    for(let i=0;i<numero.length;i++){
        if (!isDigit(numero[i])){
            return false;
        } 
    }
    return true;
}

function geraDigitoVerificador(numero){
    if (!estruturaNroMatriculaOK(numero)){
        return null;
    }
    let digito = numero;
    let soma = 0;
    while(digito.length != 1){
        for(let i=0;i<digito.length;i++){
            soma = soma + Number(digito.at(i));
        }
        digito = String(soma);
        soma = 0;
    }
    return numero+'-'+digito;
}

let nro = prompt("Entre seu numero de matricula: ");
let nroCompleto = geraDigitoVerificador(nro);
if (nroCompleto != null){
  console.log(`Seu numero de matricula completo é: ${nroCompleto}`);
}else{
    console.log('O texto informado não corresponde a um número de matricula.');
}