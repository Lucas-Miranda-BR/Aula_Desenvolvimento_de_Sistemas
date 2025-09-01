class Carro extends Veiculo {
    set portas(cPortas) {
        this._portas = cPortas
    }
    get portas(){
        return this._portas;
    }

    abrirPorta(){
        return `As portas foram abertas!`;
    }
}