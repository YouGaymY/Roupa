let isMouseDown = false;
let startX, scrollLeft;
const carousel = document.querySelector('.carousel-images');

// Função para iniciar o arrasto
carousel.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
});

// Função para arrastar a imagem
carousel.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Quanto mais alto o número, mais rápido o arrasto
    carousel.scrollLeft = scrollLeft - walk;
});

// Função para parar o arrasto
carousel.addEventListener('mouseup', () => {
    isMouseDown = false;
    carousel.style.cursor = 'grab';
});

// Quando o mouse sair da área do carrossel, ele também deve parar de arrastar
carousel.addEventListener('mouseleave', () => {
    isMouseDown = false;
    carousel.style.cursor = 'grab';
});