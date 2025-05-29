let gameList = [
    {
        id: 1,
        name: "GTA V",
        developer: "Rockstar"
    },
    {
        id: 2,
        name: "Rain World",
        developer: "Videocult"
    }
]

displayGames();

function displayGames(){
    let output = document.querySelector("#gameGalery");
    output.innerHTML = "";

    gameList.forEach(game => {
        output.innerHTML += `Código: <strong> ${game.id} </strong> - Nome: <strong> ${game.name} </strong> - Desenvolvidor: <strong> ${game.developer} </strong> <br>`
    });
}

function registerGame() {
    let addId = document.querySelector("#id").value;
    let addName = document.querySelector("#name").value;
    let addDeveloper = document.querySelector("#developer").value;

    if (addId && addName && addDeveloper) {
        gameList.push
        (
            {
            id:addId,
            name:addName,
            developer:addDeveloper
            }
        );

        let output = document.querySelector("#feedbackGameResgistration");
        output.innerHTML = `<h2 style="color:darkgreen"> <strong> O jogo de código número: ${addId} - Nome: ${addName} - Desenvolvidor: ${addDeveloper} foi adicionado. </strong> </h2>`
        
        displayGames();
        clearRegisterGameValue();
    }
}

function clearRegisterGameValue() {
    let id = document.querySelector("#id");
    id.value = "";

    let name = document.querySelector("#name");
    name.value = "";

    let developer = document.querySelector("#developer");
    developer.value = "";
}

function clearGameRemovalValue() {
    let removeGame = document.querySelector("#removeGame");
    removeGame.value = "";
}

function gameRemoval() {
    let removeGameId = document.querySelector("#removeGame").value;
    let index = gameList.findIndex(book => book.id == removeGameId);
    let output = document.querySelector("#feedbackGameRemoval");

    if (index != -1) {
        gameList.splice(index,1)
        output.innerHTML = `<h2 style="color:darkgreen"> <strong> O jogo de código número: ${removeGameId} foi excluido. </strong> </h2>`;
        displayGames()
    }
    else {
        output.innerHTML = `<h2 style="color:darkred"> <strong> O jogo de código número: ${removeGameId} não foi encontrado. </strong> </h2>`;
    }

    clearGameRemovalValue();
}

function editGameInfo() {
    let id = document.querySelector("#editID").value;
    let editedName = document.querySelector("#editName").value;
    let editedDeveloper = document.querySelector("#editDeveloper").value;
    let output = document.querySelector("#editResults");

    let index = gameList.findIndex(game => game.id == id);

    if (index != -1 && editedName && editedDeveloper) {
        gameList[index].name = editedName;
        gameList[index].developer = editedDeveloper;
        output.innerHTML = `<h3 style="color:darkgreen">O jogo de código: ${id} foi alterado.</h3>`;

        displayGames();

    } else {
        output.innerHTML = `<h3 style="color:darkred">O jogo de código número: ${id} não foi encontrado. Erro: Verifique se o código existe.</h3>`;
    }

    clearEditGameInfoValue();
}

function clearEditGameInfoValue() {
    let id = document.querySelector("#editID");
    id.value = "";
    let editedName = document.querySelector("#editName");
    editedName.value = "";
    let editedDeveloper = document.querySelector("#editDeveloper");
    editedDeveloper.value = "";
}