class Mamifero extends Animal {
    constructor(color, weightClass, type) {
        super();
        this._color = color;
        this._weightClass = weightClass;
        this._type = type
    }
    get color(){
        return this.color;
    }
    get weightClass(){
        return this._weightClass;
    }
    get type(){
        return this._type
    }
    
    displayType(type){
        if(type == "terrestre"){
            return `Esse animal é terrestre.`;
        }
        else if(type == "aquatico") {
            return `Esse animal é aquatico`;
        }
        else if(type == "aereo") {
            return `Esse animal é aereo`;
        }
        else if(type == "hibrido") {
            return `Esse animal é hibrido`;
        }
        else {
            return `Porfavor insira o tipo do animal (terreste, aereo, aquatico, hibrido)`
        }
    }
}