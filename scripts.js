function handleMouseEvents() {
    // Seleciona todos os itens do projeto
    let projectItems = document.querySelectorAll(".list-projects");

    // Verifica a largura da janela
    if (window.innerWidth >= 1024) {
        // Adiciona os event listeners
        projectItems.forEach(function (item) {
            item.addEventListener("mouseover", showDetails);
            item.addEventListener("mouseout", hideDetails);
        });
    } else {
        // Remove os event listeners
        projectItems.forEach(function (item) {
            item.removeEventListener("mouseover", showDetails);
            item.removeEventListener("mouseout", hideDetails);
        });
    }
}

function showDetails() {
    let title = this.querySelector("#title");
    let text = this.querySelector("#description");
    let img = this.querySelector(".img-git");
    title.style.display = "block";
    text.style.display = "block";
    img.style.display = "block";
}

function hideDetails() {
    let title = this.querySelector("#title");
    let text = this.querySelector("#description");
    let img = this.querySelector(".img-git");
    title.style.display = "none";
    text.style.display = "none";
    img.style.display = "none";
}

// Executa a função ao carregar a página
handleMouseEvents();

// Adiciona um listener para executar a função sempre que a janela for redimensionada
window.addEventListener("resize", handleMouseEvents);
