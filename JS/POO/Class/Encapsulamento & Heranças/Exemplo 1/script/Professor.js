class Professor extends Pessoa {
    set degree(prDegree) {
        this._degree = prDegree;
    }
    get degree() {
        return this._degree;
    }

    set field(prField) {
        this._field = prField;
    }
    get field() {
        return this._field;
    }

    displayDegree() {
        if (this._degree == "S") {
            return `Especialista em: ${this._field}`;
        }
        else if (this._degree == "M") {
            return `Mestre em: ${this._field}`;
        }
        else if (this._degree == "D") {
            return `Doutorado em ${this._field}`;
        }
        else {
            return `Outro tipo de especialização (${this._degree}) em ${this._field}`;
        }
    }

    displayInfo(){
        return `Nome: ${this._name} - CPF: ${this._cpf} - Tel: ${this._tel}`;
    }
}