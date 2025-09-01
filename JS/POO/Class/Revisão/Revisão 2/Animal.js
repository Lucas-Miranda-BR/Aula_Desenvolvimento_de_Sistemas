class Animal{
    set name(aName){
        this._name = aName;
    }
    get name(){
        return this._name;
    }
    set paws(aPaws){
        this._paws = aPaws;
    }
    get paws(){
        return this._paws;
    }
    set locale(aLocale){
        this._locale = aLocale;
    }
    get locale(){
        return this._locale;
    }

    display(){
        return `Nome: ${this._name} - Quantia de patas: ${this._paws} - Local: ${this._locale}`;
    }

    echoSound(animalSound){
        return `Som do animal: ${animalSound}`;
    }

}