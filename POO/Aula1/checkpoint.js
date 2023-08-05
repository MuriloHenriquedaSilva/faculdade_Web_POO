import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
import { validate } from "bycontract";

/*function proxPasso(valor){
    switch(valor){
        case 0:
            return 3;
        case 5:
            return valor +2;
        case 10:
            return "A"
        case "A":
            return 13;
        case 15:
            return 22;
        default:
            return valor + 1
    }
    
}
let pos = -1;
let str = "";

while(pos < 22){
    pos = proxPasso(pos)
    if (pos ==8 || pos == 14) continue;
str += pos+","
}
pos = proxPasso(50)
str += pos
console.log(str)*/

let lst = [];
lst[0] = 10;
lst[2] = 20;
lst[4] = 30;
lst[3] = 10;
let z = lst[1];
let soma = 0;
for (let i=0;i<lst.length;i++){
    soma += lst[i]
}
console.log("Array lst:", lst);
console.log("Valor de z:", z);
console.log("Soma dos elementos do array:", soma);
