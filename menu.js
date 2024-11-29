// Função para abrir o menu lateral
document.getElementById("menuButton").addEventListener("click", function() {
    document.getElementById("menuOverlay").classList.add("show");
});

// Função para fechar o menu lateral
document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("menuOverlay").classList.remove("show");
});