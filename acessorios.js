// Atualiza o número de produtos no botão do carrinho
function atualizarNumeroCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartButton = document.getElementById('cartButton');
    let badge = document.getElementById('cart-badge');

    // Cria o badge se ele não existir
    if (!badge) {
        badge = document.createElement('span');
        badge.id = 'cart-badge';
        badge.className = 'cart-badge';
        cartButton.appendChild(badge);
    }

    // Atualiza o número de produtos
    badge.textContent = carrinho.length;

    // Animação ao adicionar produto
    badge.classList.add('animate');
    setTimeout(() => badge.classList.remove('animate'), 300); // Remove a animação após 300ms
}

// Atualiza o número no carregamento inicial
atualizarNumeroCarrinho();

// Adiciona produtos ao carrinho com atualização do número
document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.parentElement;

        const nome = produto.getAttribute('data-nome');
        const preco = produto.getAttribute('data-preco');
        const imagem = produto.getAttribute('data-imagem');

        const item = { nome, preco, imagem };

        // Verifica se o produto já existe no carrinho antes de adicionar
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const produtoExistente = carrinho.some(prod => prod.nome === item.nome && prod.preco === item.preco && prod.imagem === item.imagem);
        
        if (!produtoExistente) {
            carrinho.push(item);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
        }

        // Atualiza o número e animação
        atualizarNumeroCarrinho();

        // Redireciona para a página do carrinho
        window.location.href = 'carrinho.html';
    });
});
