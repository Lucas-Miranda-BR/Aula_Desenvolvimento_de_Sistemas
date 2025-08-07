class Veiculo{

    set marca(vMarca) {
        this._marca = vMarca;
    }
    get marca() {
        return this._marca;
    }

    set modelo(vModelo) {
        this._modelo = vModelo;
    }
    get modelo() {
       return this._modelo;
    }

    set ano(vAno) {
        this._ano = vAno;
    }
    get ano() {
        return this.ano;
    }

    informacoes(){
        return `Marca: ${this._marca} - Modelo: ${this._modelo} - Ano ${this._ano} - Portas: ${this._portas}`;
    }

    ligar(){
        return `Carro foi ligado!`;
    }
}