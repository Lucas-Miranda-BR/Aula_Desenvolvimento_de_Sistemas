function register(){
    let name = document.querySelector("#pName").value;
    let brand = document.querySelector("#pBrand").value;
    let color = document.querySelector("#pColor").value;

    const p = new Produto(name, brand, color);
    console.log(p.displayProduto());
    
    clear();
}

function clear(){
    let name = document.querySelector("#pName");
    let brand = document.querySelector("#pBrand");
    let color = document.querySelector("#pColor");

    name.value = "";
    brand.value = "";
    color.value = "";
}