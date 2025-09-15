class Treinador{
    set tName(tName){
        this._tName = tName
    }
    get tName(){
        return this._tName
    }

    set tAge(tAge){
        this._tAge = tAge
    }
    get tAge(){
      return this._tAge
    }

    set tCity(tCity){
        this._tCity = tCity
    }
    get tCity(){
        return this._tCity
    }

    displayTrainers(){
        let output = document.querySelector("#trainerDisplay");
       output.innerHTML += `<div class="mb-3 indie-flower-regular"><p>Nome: ${this._tName} - Idade: ${this._tAge} - Cidade: ${this._tCity} <br> <button class="btn btn-edit indie-flower-regular">Edtitar</button> <button class="btn btn-delete indie-flower-regular">Deletar</button>`;
       let name = document.querySelector("#trainerName");
       let age = document.querySelector("#trainerAge");
       let city = document.querySelector("#trainerCity");
       name.value = "";
       age.value = "";
       city.value = "";
    }
}