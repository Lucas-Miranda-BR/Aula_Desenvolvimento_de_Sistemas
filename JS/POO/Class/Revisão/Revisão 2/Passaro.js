class Passaro extends Animal{
    set featherColor(pFeatherColor){
        this._FeatherColor = pFeatherColor;
    }
    get featherColor(){
        return this._FeatherColor;
    }
    set hasFlight(pHasFlight){
        this._HasFlight = pHasFlight;
    }
    get hasFlight(){
        return this._HasFlight;
    }

    canFly(isFlight){
        if (isFlight == true){
            return `Esse pássaro pode voar`;
        }
        else {
            return `Esse pássaro não pode voar`;
        }
    }
}