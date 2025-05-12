// Criação de array como objeto

var catList = [
    {
        name: "Sofa",
        race: "Calico",
    },
    {
        name: "Ash",
        race: "Rajado Cinza",
    }
];

/*                  Exibindo uma array como objeto
    Não exibe no Terminal com o Node.js, apenas no console de uma pagina
*/

console.log(catList);

// Array como objetos e seus metodos

var addCatName = prompt("Digite o nome do(a) gato(a): ");
var addCatRace = prompt("Digite o nome da raça do(a) gato(a): ");
catList.push({name:addCatName, race:addCatRace});

// Exibição com forEach

catList.forEach(cat => {
    console.log(`Nome: ${cat.name} - Raça: ${cat.race}`)
});