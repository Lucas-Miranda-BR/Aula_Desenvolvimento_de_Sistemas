
/*
                ENCAPSULAMENTO
    set = Inserir um valor em um Atributo.
    get = Adquirir um valor de um Atributo.
*/

class Pessoa {

    set name(pName) {
        this._name = pName;
    }
    get name() {
        return this._name
    }

    set cpf(pCpf) {
        this._cpf = pCpf;
    }
    get cpf() {
        return this._cpf;
    }

    set tel(pTel) {
        this._tel = pTel;
    }
    get tel() {
        return this._tel;
    }

    displayName() {
        return `Nome: ${this._name}`;
    }
}