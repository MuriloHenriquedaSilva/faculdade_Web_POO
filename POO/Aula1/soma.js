import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

function soma(v1,v2){
    let result = v1 + v2;
    return result;
}

let resp = soma(10,20)
console.log(resp);