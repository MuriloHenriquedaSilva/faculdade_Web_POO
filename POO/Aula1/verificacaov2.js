import promptsync from 'prompt-sync';
const prompt = promptsync({ sigint: true });

function nivelAcessoOk(nivelAcesso){
    switch(nivelAcesso){
        case '21':
        case '1':
        case '35':
        case '66':
            return true;
        default:
            return false;
        
    }
}
function acrescentaVerificador(matricula, nivelAcesso=21) {
    let digitos = matricula;
    let soma = 0;

    while (digitos.length != 1) {
        for (let i = 0; i < digitos.length; i++) {
            soma = soma + Number(digitos[i]);
        }
        digitos = String(soma);
        soma = 0;
    }
    return nivelAcesso+matricula + '-' + digitos;
}

let matricula = prompt("Digite sua matricula: ");
let nivel = prompt("Digite seu nivel de acesso:")
if (nivelAcessoOk(nivel) == true){
    let mtrCompleta = acrescentaVerificador(matricula);
    console.log('Numero da matricula completo:', mtrCompleta);
}else{
    console.log("Inválido")
}