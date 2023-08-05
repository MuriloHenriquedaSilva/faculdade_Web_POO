class Retangulo{
   lado1;
   lado2;
   perimetro(){
    let p = 2*this.lado1 + 2* this.lado2;
    return p;
   }
   area(){
    let a = this. lado1 * this.lado2;
    return a;
   }

   toString(){
    let str = 'lado1: ' +this.lado1+ 'lado2: ' +this.lado2+'\n'
    str += 'Area: ' +this.area()+ 'Perimetro: '+this.perimetro()+'\n'
    return str
   }
}

let r1 = new Retangulo();
r1.lado1 = 10;
r1.lado2 = 20;
console.log(r1.toString())

let r2 = new Retangulo();
r2.lado1 = 10;
r2.lado2 = 20;
console.log(r1.toString())
