function impRelacoes(d1,d2,d3){
    // matriculados em d1, d2 e d3
    let todos = new Set([...d1, ...d2, ...d3]);
    console.log('Todos matriculados em alguma turma:')
    console.log(todos);
    // matriculados apenas em d1
    let D1 = new Set(d1);
    let D2 = new Set(d2);
    let D3 = new Set(d3);
    let D1menosD2 = new Set( Array.from(D1).filter(x => !D2.has(x)) ); 
    let D1menosD3 = new Set( Array.from(D1menosD2).filter(x => !D3.has(x)) );
    console.log('Matriculados so em D1: ');
    console.log(D1menosD3);
    let interseccao = new Set(Array.from(D1).filter(x => D2.has(x)));
    console.log('Matriculados simultaneamente em D1 e D2:');
    console.log(interseccao);
}


let ld1 = ['jorge','luis','marcia','janete','carla','rafael','melina'];
let ld2 = ['luis','marcia','marcelo','janete','mariana','carla','rafael'];
let ld3 = ['luis','marcia','janete','mariana'];

impRelacoes(ld1,ld2,ld3);
