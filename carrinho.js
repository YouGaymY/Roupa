// Recupera os produtos do localStorage
const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const produtosCarrinho = document.getElementById("produtosCarrinho");
const totalValor = document.getElementById("totalValor");
const finalizarCompraButton = document.getElementById("finalizarCompra");
let produtoSelecionado = null; // Variável para armazenar o produto selecionado

// Renderiza os produtos no carrinho
function renderizarCarrinho() {
    produtosCarrinho.innerHTML = "";

    // Verifica se o carrinho contém produtos
    if (carrinho.length === 0) {
        produtosCarrinho.innerHTML = "<p>O seu carrinho está vazio.</p>";
        finalizarCompraButton.disabled = true; // Desabilita o botão de finalizar compra
        return;
    }

    // Habilita o botão de finalizar compra se houver produtos no carrinho
    finalizarCompraButton.disabled = !produtoSelecionado;

    carrinho.forEach((produto, index) => {
        const produtoDiv = document.createElement("div");
        produtoDiv.className = "produto-carrinho";
        produtoDiv.innerHTML = `
            <div class="produto-info">
                <div class="botao-selecionar" data-index="${index}"></div>
                <span>Selecionar produto</span>
            </div>
            <div class="info-produto">
                <h3>${produto.nome}</h3>
                <p>Preço: R$ ${produto.preco}</p>
                <button class="remover" data-index="${index}">Remover</button>
            </div>
        `;
        produtosCarrinho.appendChild(produtoDiv);
    });

    // Adiciona eventos aos botões de seleção
    document.querySelectorAll(".botao-selecionar").forEach((botao) => {
        botao.addEventListener("click", () => selecionarProduto(botao));
    });
}

// Atualiza o total com base no produto selecionado
function selecionarProduto(botao) {
    const index = botao.getAttribute("data-index");
    const produto = carrinho[index];

    // Remove a seleção de todos os botões
    document.querySelectorAll(".botao-selecionar").forEach((outroBotao) => {
        outroBotao.classList.remove("botao-selecionado");
    });

    // Marca o botão atual como selecionado
    botao.classList.add("botao-selecionado");

    // Atualiza o total com base no produto selecionado
    totalValor.textContent = `Total: R$ ${parseFloat(produto.preco).toFixed(2)}`;

    // Salva o nome e o valor do produto selecionado no sessionStorage
    produtoSelecionado = produto; // Atualiza a variável com o produto selecionado
    sessionStorage.setItem("produtoNome", produto.nome);
    sessionStorage.setItem("produtoValor", produto.preco);

    // Habilita o botão de finalizar compra
    finalizarCompraButton.disabled = false;
}

// Remove um produto do carrinho
produtosCarrinho.addEventListener("click", (e) => {
    if (e.target.classList.contains("remover")) {
        const index = e.target.getAttribute("data-index");
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        renderizarCarrinho();
    }
});

// Renderiza o carrinho ao carregar a página
renderizarCarrinho();

// Finaliza a compra
finalizarCompraButton.addEventListener("click", () => {
    if (produtoSelecionado) {
        const total = parseFloat(totalValor.textContent.replace("Total: R$ ", "").replace(",", "."));
        sessionStorage.setItem("valorTotal", total.toFixed(2));
        window.location.href = "pagamento.html";
    }
});

// Voltar à página anterior
document.getElementById("voltarButton").addEventListener("click", () => {
    window.location.href = "index.html";
});