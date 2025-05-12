let gameList = [
    {
        gameName: "Call of Duty: Black Ops 2",
        releaseYear: "2012"
    },

    {
        gameName: "Rain World",
        releaseYear: "2015"
    }
];

function displayGameList() {
    let output = document.querySelector("#displayedGames");
    output.innerHTML = "";

    gameList.forEach(game => {
        output.innerHTML += (`<strong> Nome do jogo: ${game.gameName} - Ano de lançamento: ${game.releaseYear}. </strong> <br>`); 
    });
}

function clearInputValue() {
    let addGameName = document.querySelector("#addGameName");
    addGameName.value = "";

    let addReleaseYear = document.querySelector("#addReleaseYear");
    addReleaseYear.value = "";
}

function addGame() {
  let addGameName = document.querySelector("#addGameName").value;
  let addReleaseYear = document.querySelector("#addReleaseYear").value;

  if (addGameName && addReleaseYear) {
    gameList.push({
        gameName: addGameName,
        releaseYear: addReleaseYear
    });
    alert("Jogo registrado")
  }


  else {
    alert("Dados inválidos");
  }

  displayGameList();

  clearInputValue();
}

displayGameList();

function searchGameByName(){
    let searchName = document.querySelector("#searchName").value.toLowerCase();

    let searchResult = gameList.filter(game => game.gameName.toLowerCase().includes(searchName));

    let output = document.querySelector("#searchName");
    output.value = "";

    output = document.querySelector("#searchResult");

    if (searchName) {
        if (searchResult.length > 0) {
            searchResult.forEach(result => {
                output.innerHTML += (`<strong> Nome do jogo: ${result.gameName} - Ano de lançamento: ${result.releaseYear}. </strong> <br>`); 
            });
        }
        else {
            alert("O nome inserido gerou 0 resultados. Certifique-se se o nome do jogo foi digitado corretamente, ou se o jogo existe na listagem.")
        }
    }
    else (
        alert("Dados invalidos")
    )
}

/* .Filter(element => element.Array.includes(value))
Filter = Inicia a busca de um certo elemento dentro de uma Array
Includes = Seria o termo que esta sendo pesquisado
*/