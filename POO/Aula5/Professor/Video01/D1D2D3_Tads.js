import { validate } from "bycontract";

export class List{
    #base;

    constructor(){
        this.#base = [];
    }

    push(element){
        this.#base.push(element);
    }

    ins(pos,element){
        if (pos < 0 || pos >= this.size){
            throw new Error("Posicao invalida");
        }
        this.#base.splice(pos,0,element);
    }

    at(pos){
        if (pos < 0 || pos >= this.size){
            throw new Error("Posicao invalida");
        }
        return this.#base[pos];
    }

    change(pos,element){
        if (pos < 0 || pos >= this.size){
            throw new Error("Posicao invalida");
        }
        this.#base[pos] = element;
    }

    remove(pos){
        if (pos < 0 || pos >= this.size){
            throw new Error("Posicao invalida");
        }
        this.#base.splice(pos,1);
    }

    isEmpty(){
        return this.size === 0;
    }

    get size(){
        return this.#base.length;
    }
}

export class Stack{
    #base;

    constructor(){
        this.#base = [];
    }

    push(valor){
        this.#base.push(valor);
    }

    pop(){
        if (this.isEmpty()){
            throw new Error("Stack empty!");
        }
        return this.#base.pop();
    }

    isEmpty(){
        return this.size === 0;
    }

    get size(){
        return this.#base.length;
    }

    get top(){
        if (this.isEmpty()){
            throw new Error("Stack empty!");
        }
        return this.#base[this.size-1];
    }
}

export class Queue{
    #base;

    constructor(){
        this.#base = [];
    }

    enqueue(valor){
        this.#base.push(valor);
    }

    dequeue(){
        if (this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base.splice(0,1)[0];
    }

    isEmpty(){
        return this.size === 0;
    }

    get size(){
        return this.#base.length;
    }

    get first(){
        if (this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base[0];
    }    

    get last(){
        if (this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base[this.size-1];
    }
}

export class Deque{
    #base;

    constructor(){
        this.#base = [];
    }

    enqueue(valor){
        this.#base.push(valor);
    }

    firstEnqueue(valor){
        this.#base.splice(0,1,valor);
    }

    dequeue(){
        if (this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base.splice(0,1)[0];
    }

    lastDequeue(){
        if (this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base.pop();
    }

    isEmpty(){
        return this.size === 0;
    }

    get size(){
        return this.#base.length;
    }

    get first(){
        if (this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base[0];
    }    

    get last(){
        if (this.isEmpty()){
            throw new Error("Queue empty!");
        }
        return this.#base[this.size-1];
    }
}