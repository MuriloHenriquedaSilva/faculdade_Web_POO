import { typedef, validate } from "bycontract";

const PI = 3.141592653;

export function areaQuadrado(lado){
    validate(lado,"number");
    return lado * lado;
}

export function areaRetangulo(lado1,lado2){
    validate(arguments,["number","number"]);
    return lado1*lado2;
}

export function areaTriangulo(base,altura){
    validate(arguments,["number","number"]);
    return (base*altura)/2;
}

export function areaCirculo(raio){
    validate(raio,"number");
    return PI * raio * raio;
}
