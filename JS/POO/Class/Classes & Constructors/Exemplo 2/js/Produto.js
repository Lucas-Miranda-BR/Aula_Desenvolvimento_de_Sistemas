class Produto{
    constructor(pName, pBrand, pColor){
        this.name = pName;
        this.brand = pBrand;
        this.color = pColor;
    }

    displayProduto(){
        return `Nome: ${this.name} - Marca: ${this.brand} - Cor: ${this.color}`;
    }

}