class Email{
    #email
    static #cont=0;
    constructor(){
        Email.#cont++;
        this.#email = 'Funcionario'+Email.#cont+'@empresa.com';
    }
    get email(){
        return this.#email
    }
}