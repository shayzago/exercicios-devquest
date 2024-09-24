const botao = document.querySelector(".bloco");

botao.addEventListener("click", () => {
    const classeAzulExiste = botao.classList.contains("azul");

    if (classeAzulExiste) {
        botao.classList.remove("azul");
    } else {
        botao.classList.add("azul");
    }
})