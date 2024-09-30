const title = document.getElementById("titulo");
const helloBtn = document.getElementById("botao-ola");
const changeTitleBtn = document.getElementById("btn-mudar-titulo");
const changeMessagesBtn = document.getElementById("btn-mudar-frases");

helloBtn.addEventListener("click", function() {
    alert("Olá!");
});

changeTitleBtn.addEventListener("click", function() {
    title.textContent = "O Titulo foi mudado utilizando o JS!";
});

changeMessagesBtn.addEventListener("click", function() {
    const novasFrases = [
        "Essa frase 1 foi modificada com JS manipulando a DOM",
        "Essa frase 2 foi modificada com JS manipulando a DOM",
        "Essa frase 3 foi modificada com JS manipulando a DOM"
    ];
    for (let i = 2; i <= 4; i++) {
        document.querySelector(`.mensagem${i}`).textContent = novasFrases[i - 2];
    }
});



