const { validate } = require("bycontract");

class Vagao{
    #id;
    #capCarga;

    static idGen = 0;

    constructor(capCarga){
        validate(arguments, ['Number']);
        if(capCarga <=0){
            this.#id = -1;
        }else{
            this.#capCarga = capCarga;
            Vagao.idGen++;
            this.#id = Vagao.idGen;
        }
    }
    get id(){
        return this.#id
    }
    get capCarga(){
        return this.#capCarga
    }
    
    toString(){
        let str = 'Vagão: '+this.#id+', CapCarga: '+this.#capCarga;
        return str;

    }
}
class garagemVagoes{
    #vagoes
    constructor(){
        this.#vagoes = [];
    }
    estaciona(vagao){
        validate(vagao,Vagao);
        if(vagao.id === -1){
            return false
        }
        this.#vagoes.push(vagao);
        return true;
    }
}