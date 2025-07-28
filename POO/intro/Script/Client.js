/*
CLASS define a estrutura do nosso projeto
dentro da CLASS iremos definir as
caracteristicas / atributos
*/


class Client{

    /*
    Função CONSTRUCTOR
    tem a função de colocar "Requisitos"
    dentro da chamada da CLASS
    */

    constructor(clientName, clientEmail, clientDoB) {

    this.name = clientName;
    this.email = clientEmail;
    this.DoB = clientDoB;

    }

    displayData(){
        return `${this.name} - ${this.email} - ${this.DoB}`;
    }

    calculate(quantity, value){
        return quantity*value;
    }
}