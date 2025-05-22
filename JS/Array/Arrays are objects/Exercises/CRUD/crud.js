let gameList = [
    {
        name: "Rain World",
        devteam: "zzzz",
        publisher: "zzzz",
        releaseyear: "2017"
    },
    {
        name: "xxxxx",
        devteam: "xxx",
        publisher: "xxx",
        releaseyear: "xxxx"
    }
]

gameDisplay();

function gameDisplay() {
    let output = document.querySelector("#gameDisplay");
    output.innerHTML = "";

    gameList.forEach(game => {
        output.innerHTML += `Nome do jogo: ${game.name} - Desenvolido por: ${game.devteam} - Publicado por: ${game.publisher} - Ano de lançamento: ${game.releaseyear} <br>`
    });
}

function registerGame() {
    let addGameName = document.querySelector("#inputGameName").value;
    let addDevelopers = document.querySelector("#inputDevelopers").value;
    let addPublisher = document.querySelector("#inputPublisher").value;
    let addReleaseYear = document.querySelector("#inputReleaseYear").value;

    if (addGameName && addDevelopers && addPublisher && addReleaseYear) {
        bookList.push
        (
            {
            name:addGameName,
            devteam:addDevelopers,
            publisher:addPublisher,
            release:addReleaseYear
            }
        );

        let output = document.querySelector("#gameRegistrationFeedback");
        output.innerHTML = `<h2 style="color:darkgreen"> <strong> O Jogo: ${addGameName} - Desenvolvido por: ${addDevelopers} - Publicado por: ${addPublisher} - Ano de lançamento: ${addReleaseYear} foi registrado. </strong> </h2>`
        gameDisplay();
        clearGameRegistrationValues();
    }
}

function clearGameRegistrationValues() {
    let gameName = document.querySelector("#inputGameName");
    gameName.value = "";

    let devTeam = document.querySelector("#inputDevelopers");
    devTeam.value = "";

    let publisher = document.querySelector("#inputPublisher");
    publisher.value = "";

    let releaseYear = document.querySelector("#inputReleaseYear");
    releaseYear.value = "";
}

function clearGameRemovalValues() {
    let removeGame = document.querySelector("#removeGame");
    removeGame.value = "";
}

function removeGame() {
    let removeGame = document.querySelector("#removeGame").value.toLowerCase();
    let index = gameList.findIndex(game => game.name == removeGame);

    let output = document.querySelector("#removeGame");

    if (index != -1) {
        gameList.splice(index,1)
        output.innerHTML = `<h2 style="color:darkgreen"> <strong> O Jogo: ${removeGame} foi excluido. </strong> </h2>`
        displayBooks()
    }

    else {
        output.innerHTML = `<h2 style="color:darkred"> <strong> O jogo: ${removeGame} não foi encontrado. </strong> </h2> `
    }

    clearGameRemovalValues()
}