let bookList = [
    {
        id: 1,
        name: "Senhor dos anéis",
        writer: "Tolkien"
    },
    {
        id: 2,
        name: "Crepúsculo",
        writer: "Stephenie Meyer"
    }
]

displayBooks();

function displayBooks(){
    let output = document.querySelector("#bookGalery");
    output.innerHTML = "";

    bookList.forEach(book => {
        output.innerHTML += `Código: <strong> ${book.id} </strong> - Nome: <strong> ${book.name} </strong> - Escritor: <strong> ${book.writer} </strong> <br>`
    });
}

function addBook() {
    let addId = document.querySelector("#id").value;
    let addName = document.querySelector("#name").value;
    let addWriter = document.querySelector("#writer").value;

    if (addId && addName && addWriter) {
        bookList.push
        (
            {
            id:addId,
            name:addName,
            writer:addWriter
            }
        );

        let output = document.querySelector("#addedBookFeedback");
        output.innerHTML = `<h2 style="color:darkgreen"> <strong> O Livro de código número: ${addId} - Nome: ${addName} - Escritor: ${addWriter} foi adicionado. </strong> </h2>`
        displayBooks();
        clearAddBookValue();
    }
}

function clearAddBookValue() {
    let id = document.querySelector("#id");
    id.value = "";

    let name = document.querySelector("#name");
    name.value = "";

    let writer = document.querySelector("#writer");
    writer.value = "";
}

function clearRemoveBookValue() {
    let removeBook = document.querySelector("#removeBook");
    removeBook.value = "";
}

function removeBook() {
    let removeBookId = document.querySelector("#removeBook").value;
    let index = bookList.findIndex(book => book.id == removeBookId);

    /* 
        .findIndex = Retorna o primeiro índice com o valor localizado
                se não encontrar o valor, retorna um valor -1
    */

    let output = document.querySelector("#removedBookFeedback");

    if (index != -1) {
        bookList.splice(index,1)
        // splice(indice a ser excluido, quantos itens será excluido)
        output.innerHTML = `<h2 style="color:darkgreen"> <strong> O Livro de código número: ${removeBookId} foi excluido. </strong> </h2>`
        displayBooks()
    }

    else {
        output.innerHTML = `<h2 style="color:darkred"> <strong> O livro de código número: ${removeBookId} não foi encontrado. </strong> </h2> `
    }

    clearRemoveBookValue()
}