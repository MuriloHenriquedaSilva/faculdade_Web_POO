// Necessita executar npm install prompt-sync
import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});
// ----------------------------------------------
// Exercicio 10: operações com matrizes
// ----------------------------------------------

function matrizToString(m){
    let numLin = m.length;
    let numCol = m[0].length;
    let str = '[';
    for(let i=0;i<numLin;i++){
        str = str + '[';
        for(let j=0;j<numCol;j++){
            str = str + ' '+m[i][j];
            if (j<numCol-1){
                str = str + ',';
            }
        }
        str = str +']';
    }
    str = str + ']';
    return str;
}

function somaMat(a,b){
    let numLin = a.length;
    let numCol = a[0].length;

    let mr = new Array(numLin);
    let lin = [];

    for(let i=0; i<numLin; i++){
        lin = new Array(numCol);
        for(let j=0; j<numCol; j++){
            lin[j] = a[i][j] + b[i][j];
        }
        mr[i] = lin;
    }

    return mr;
}

// O número de linhas de a tem de ser igual
// ao número de colunas de b
function mulMat(a, b) {
    let aNumLin = a.length;
    let aNumCol = a[0].length;
    let bNumLin = b.length;
    let bNumCol = b[0].length;

    let m = new Array(aNumLin);  

    for (let lin = 0; lin < aNumLin; ++lin) {
      m[lin] = new Array(bNumCol); 
      for (let col = 0; col < bNumCol; ++col) {
        m[lin][col] = 0;             
        for (let i = 0; i < aNumCol; i++) {
          m[lin][col] += a[lin][i] * b[i][col];
        }
      }
    }

    return m;
  }

let m1 = [[1,2,3],[4,5,6],[7,8,9]];
let m2 = [[9,8,7],[6,5,4],[3,2,1]];
let m = somaMat(m1,m2);
console.log(matrizToString(m1));
console.log('+')
console.log(matrizToString(m2));
console.log('=');
console.log(matrizToString(m));

let mm = mulMat(m1,m2);
console.log('');
console.log(matrizToString(m1));
console.log('x')
console.log(matrizToString(m2));
console.log('=');
console.log(matrizToString(mm));

